import {receiveSearchUsers, RECEIVE_SEARCH_USERS} from '../actions/search_users_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SEARCH_USERS:
      return merge({}, {}, action.users);
    default:
      return oldState;
  }
};
