import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const clearSessionErrors  = () => dispatch => (
  dispatch(clearErrors())
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then((serverUser) =>
  dispatch(receiveCurrentUser(serverUser)), error => {
    return (
      dispatch(receiveErrors(error.responseJSON))
    );
  } )
);

export const login = user => dispatch => (
  APIUtil.login(user).then((serverUser) =>
  dispatch(receiveCurrentUser(serverUser)), error => {
    return (
      dispatch(receiveErrors(error.responseJSON))
    );
  } )
);

export const logout = () => dispatch => (
  APIUtil.logout().then((user)=> (
    dispatch(receiveCurrentUser(null))),error => (
      dispatch(receiveErrors(error.responseJSON))
    ))
);
