import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {currentUser:null};

export default (state = nullUser, action) => {
  console.log("what isdfoiajsdflkasfklda - - -", action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      console.log("hello - --  ", currentUser);
      return merge({}, { currentUser });
    default:
      return state;
  }
};
