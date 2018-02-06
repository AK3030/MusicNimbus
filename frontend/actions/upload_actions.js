import * as APIUtil from '..util/file_upload_api_util';

export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS";

const receiveErrors = errors => ({
  type:RECEIVE_UPLOAD_ERRORS,
  errors
});

// export const uploadImage = userId => dispatch => {
//   APIUtil.uploadImage(userId).then((serverSuccess) => dispatch(receiveSuccess)), error => (
//     dispatch(receiveErrors(error.responseJSON))
//   )
// }
