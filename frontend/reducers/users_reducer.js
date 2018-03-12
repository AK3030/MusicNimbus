import {RECEIVE_USER, RECEIVE_USER_ERRORS, RECEIVE_ALL_USERS, RECEIVE_USERS} from '../actions/user_actions';
import merge from 'lodash/merge';

const nullUser = {currentUser:null};

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, oldState, { [user.id]: user });
    case RECEIVE_ALL_USERS:
      return merge({}, oldState, action.users);
    case RECEIVE_USERS:
      return merge({}, oldState, action.users);
    default:
      return oldState;
  }
};
