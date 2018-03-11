import {RECEIVE_COMMENT, RECEIVE_COMMENTS, RECEIVE_COMMENT_ERRORS} from '../actions/comment_actions';
import merge from 'lodash/merge';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      const comment = action.comment;
      return merge({}, oldState, {[comment.track_id]: {[comment.id]: comment}});
    case RECEIVE_COMMENTS:
      if (Object.keys(action.comments).length === 0) {

        return merge(oldState, {});
      }

      var comments = action.comments;
      console.log(comments);
      console.log("old state", oldState);
      var first_comment_idx = Object.keys(comments)[0];
      var track_id = comments[first_comment_idx].track_id;

      console.log("track id", track_id);

      // console.log(track_id);
      console.log("lkdsjflasjf - - -- - - -");
      return merge({}, oldState, {[track_id]:comments});
    default:
      return oldState;


  }
};
