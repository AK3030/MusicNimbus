import {RECEIVE_TRACK, RECEIVE_TRACK_ERRORS} from '../actions/track_actions';

export default (state=[], action) => {
  switch (action.type) {
    case RECEIVE_TRACK:
      return [];
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
