import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchTrackComments = trackId => dispatch => (
  APIUtil.fetchTrackComments(trackId).then((serverComments) =>
  dispatch(receiveComments(serverComments)), error => {
    return (
      dispatch(receiveCommentErrors(error.responseJSON))
    );
  })
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then((serverComment) =>
  dispatch(receiveComment(serverComment)), error => {
    return (
      dispatch(receiveCommentErrors(error.responseJSON))
    );
  })
);
