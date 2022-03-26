export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  LIST_PEOPLE_SUCCESS: 'LIST_PEOPLE_SUCCESS',
};

const DEFAULT_STATE = {
  user: null,
  error: null,
  list: [],
};

export default function userReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload));

      return {
        ...DEFAULT_STATE,
        user: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      localStorage.clear();

      return {
        ...DEFAULT_STATE,
        user: null,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      localStorage.clear();

      return DEFAULT_STATE;

    case actionTypes.LIST_PEOPLE_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
