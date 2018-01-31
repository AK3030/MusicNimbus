import { combineReducers } from 'redux';
import errors from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors,
  session: sessionReducer
});

export default rootReducer;
