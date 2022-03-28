import api from '../services/api.service';
import { actionTypes } from '../reducers/user.reducer';

export const login = ({ user, password }, redirectTo, url) => (dispatch) => {
  localStorage.clear();

  api.fetch('/user/login', {
    auth_username: user,
    auth_password: password,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });

      redirectTo(url);
    });
};

export const getUsers = ({ user, password }) => (dispatch) => {
  api.fetch('/people/list', {
    auth_username: user,
    auth_password: password,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.LIST_PEOPLE_SUCCESS,
        payload: response.data,
      });
    });
};

export const getUser = ({ user, password, id }) => (dispatch) => {
  api.fetch('/people/get', {
    auth_username: user,
    auth_password: password,
    id,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.GET_PEOPLE_SUCCESS,
        payload: response.data,
      });
    });
};
