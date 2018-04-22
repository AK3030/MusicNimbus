import * as APIUtil from '../util/search_users_api_util';

export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";
export const RECEIVE_USER_SEARCH_ERRORS = "RECEIVE_USER_SEARCH_ERRORS";

const receiveSearchUsers = users => {
  return {
    type: RECEIVE_SEARCH_USERS,
    users
  };
};

const receiveUserSearchErrors = (errors) => {
  return {
    type: RECEIVE_USER_SEARCH_ERRORS,
    errors
  };
};

export const fetchSearchUsers = (query) => dispatch => {
  return APIUtil.fetchSearchUsers(query)
    .then(users => {
      dispatch(receiveSearchUsers(users));
    }, error => {
      dispatch(receiveUserSearchErrors(error.responseJSON));
    });
};
