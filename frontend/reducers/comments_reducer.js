import {RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENT_ERRORS} from '../actions/comment_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return merge({}, oldState, {[comment.id]: comment});
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    default:
      return oldState;


  }
};
