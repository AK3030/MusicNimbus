import {RECEIVE_USER, RECEIVE_USER_ERRORS, RECEIVE_ALL_USERS} from '../actions/user_actions';
import merge from 'lodash/merge';

const nullUser = {currentUser:null};

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, {}, { [user.id]: user });
    case RECEIVE_ALL_USERS:
      return merge({}, {}, action.users);
    default:
      return oldState;
  }
};
