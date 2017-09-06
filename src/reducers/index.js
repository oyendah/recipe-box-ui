import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import flashMessages from './flashReducer';
import signup from './signupReducer'

const rootReducer = combineReducers({
  auth,
  flashMessages,
  signup,
  routing: routerReducer
});

export default rootReducer;
