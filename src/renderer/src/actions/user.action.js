import api from '../services/api.service';
import { actionTypes } from '../reducers/user.reducer';

export const login = ({ user, password }, redirectTo, url) => (dispatch) => {
  api.fetch('/user/login', {
    auth_username: user,
    auth_password: password,
  })
    .then((response) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data.id,
      });

      redirectTo(url);
    });
};

export const logout = () => () => {

};
