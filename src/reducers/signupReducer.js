import initialState from './initialState';
import types from '../constants/actionTypes';

export default (state = initialState.signup, action) => {
  switch (action.type) {
  case types.SIGNUP_USER_RESPONSE:
    return Object.assign({}, state, {
      isSending: true,
      userData: {
        first_name: action.data.first_name,
        last_name: action.data.last_name,
        user_name: action.data.user_name,
        eamil: action.data.email
      }
    });


  case types.SIGNUP_USER_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      userData: action.data,
      errorMessage: ''
    });

  case types.SIGNUP_USER_ERROR:
    return Object.assign({}, state, {
      isFetching: false,
      errorMessage: action.message
    });
  default: return state;
  }
};
