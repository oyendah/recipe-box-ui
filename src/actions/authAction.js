import axios from 'axios';
import jwtDecode from 'jwt-decode';
import types from '../constants/actionTypes';
import urls from '../constants/urls';
import setAuthorizationToken from '../utils/setAutorizationToken';
import authHelper from '../utils/authHelper';
import toast from '../utils/toast';

export function loginResponse(creds) {
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

export function loginError(message) {
  return {
    type: types.LOGIN_USER_ERROR,
    message
  };
}

export function signupResponse(data) {
  return {
    type: types.SIGNUP_USER_RESPONSE,
    data
  }
}

export function signupSuccess(data){
  return {
    type: types.SIGNUP_USER_SUCCESS,
    data
  }
}

export function signupError(data){
  return {
    type: types.SIGNUP_USER_ERROR,
    data
  }
}

export function logoutResponse() {
  return {
    type: types.LOGOUT_RESPONSE
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  }
}

export function logoutError() {
  return {
    type: types.LOGOUT_ERROR
  }
}

export function login(data) {
  return (dispatch) => {
    dispatch(loginResponse(data));
    return axios.post(`${urls.API_URL}/login`, data).then((res) => {
      const token = res.data.auth_token;
      authHelper.setCookie('auth_token', token);
      setAuthorizationToken(token);
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

export function signup(data) {
  return (dispatch) => {
    dispatch(signupResponse(data));
    return axios.post(`${urls.API_URL}/users`, data).then((res) => {
      const token = res.data.auth_token;
      authHelper.setCookie('auth_token', token);
      setAuthorizationToken(token);
      axios.defaults.headers.common.Authorization = token;
      dispatch(signupSuccess(res.data));
      dispatch(loginSuccess(jwtDecode(token)));
      dispatch(setCurrentUser(jwtDecode(token)));
    }).catch((err) => {
      if (err.response) {
        dispatch(signupError(err.response.data.message));
      }
    });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutResponse())
    authHelper.removeCookie('auth_token')
    dispatch(logoutSuccess())
    toast.success('You\'ve successfully looged out');
  }
}
