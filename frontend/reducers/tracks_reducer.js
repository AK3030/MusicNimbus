import {RECEIVE_TRACK, RECEIVE_TRACK_ERRORS, RECEIVE_TRACKS} from '../actions/track_actions';
import merge from 'lodash/merge';

const nullTrack = {currentTrack: null};

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TRACK:
      const track = action.track;
      return merge({}, {[track.id]: track});
    case RECEIVE_TRACKS:
      return merge({}, action.tracks);
    default:
      return oldState;
  }
};
