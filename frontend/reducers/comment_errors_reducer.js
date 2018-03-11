import {RECEIVE_COMMENT, RECEIVE_COMMENT_ERRORS, RECEIVE_COMMENTS} from '../actions/comment_actions';

export default (state={}, action) => {
  switch(action.type) {
    case RECEIVE_COMMENT:
      return {};
    case RECEIVE_COMMENTS:
      return {};
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    default:
     return state;
  }
};
