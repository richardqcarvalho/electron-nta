export const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

const DEFAULT_STATE = {
  user: null,
  error: null,
};

export default function userReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      return DEFAULT_STATE;
    default:
      return state;
  }
}
