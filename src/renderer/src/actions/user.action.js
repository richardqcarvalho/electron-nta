import api from '../services/api.service';

export const login = ({ user, password }) => {
  // dispatch({ type: START_REQUEST })
  api.get('/user/login', {
    auth_username: user,
    auth_password: password,
  });
  // .then((response) => {
  //   console.log({ response });
  // }).catch((error) => {
  //   console.log({ error });
  // });
};

export const logout = () => () => {

};
