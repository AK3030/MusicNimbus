import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return null;
    case RECEIVE_SESSION_ERRORS:
      return {sessionErrors: action.errors};
    default:
      return state;
  }
};
