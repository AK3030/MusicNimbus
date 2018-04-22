import { combineReducers } from 'redux';
import errors from './errors_reducer';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';
import commentsReducer from './comments_reducer';
import searchUsersReducer from './search_users_reducer';

const rootReducer = combineReducers({
  errors,
  session: sessionReducer,
  users: usersReducer,
  tracks: tracksReducer,
  comments: commentsReducer,
  searchUsers: searchUsersReducer
});

export default rootReducer;
