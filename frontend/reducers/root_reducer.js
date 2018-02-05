import { combineReducers } from 'redux';
import errors from './errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  errors,
  session: sessionReducer,
  users: usersReducer
});

export default rootReducer;
