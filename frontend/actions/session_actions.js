import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then((serverUser) =>
  dispatch(receiveCurrentUser(serverUser)), error => (
    dispatch(receiveErrors(error))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then((serverUser) =>
  dispatch(receiveCurrentUser(serverUser)), error => (
    dispatch(receiveErrors(error.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then((user)=> (
    dispatch(receiveCurrentUser(null))),error => (
      dispatch(receiveErrors(error.responseJSON))
    ))
);
