import { RECEIVE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions';

export default (state=[], action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
