import axios from 'axios';
import jwtDecode from 'jwt-decode';
import types from '../constants/actionTypes';
import urls from '../constants/urls';

export function loginReponse(creds) {
  return {
    type: types.LOGIN_USER_RESPONSE,
    creds
  };
}

export function loginSuccess(data) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    data
  };
}

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user
  };
}


// export function receiveLogin(user) {
//   return {
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     id_token: user.id_token
//   };
// }

export function loginError(message) {
  return {
    type: types.LOGIN_USER_ERROR,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function login(data) {
  return (dispatch) => {
    dispatch(loginReponse(data));
    return axios.post(`${urls.API_URL}/login`, data).then((res) => {
      const token = res.data.auth_token;
      localStorage.setItem('auth_token', token);
      // setAuthorizationToken(token);
      axios.defaults.headers.common.Authorization = token;
      dispatch(loginSuccess(jwtDecode(token)));
      dispatch(setCurrentUser(jwtDecode(token)));
    }).catch((err) => {
      if (err.response) {
        dispatch(loginError(err.response.data.message));
      }
    });
  };
}
