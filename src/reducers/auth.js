import isEmpty from 'lodash/isEmpty';
import initialState from './initialState';
import types from '../constants/actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_USER_RESPONSE:
    return Object.assign({}, state, {
      isFetching: true,
      isAuthenticated: false,
      user: action.creds.email
    });


  case types.LOGIN_USER_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: true,
      errorMessage: ''
    });

  case types.SET_CURRENT_USER:
    return {
      isFetching: false,
      isAuthenticated: !isEmpty(action.user),
      user: action.user,
      errorMessage: ''
    };

  case types.LOGIN_USER_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      isAuthenticated: false,
      errorMessage: action.message
    });
  default: return state;
  }
};
