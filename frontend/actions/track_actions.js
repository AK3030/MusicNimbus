import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTrackErrors = errors => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
});

export const fetchTrack = trackId => dispatch => (
  APIUtil.fetchTrack(trackId).then((serverTrack) =>
  dispatch(receiveTrack(serverTrack)), error => {
    return (
      dispatch(receiveTrackErrors(error.responseJSON))
    );
  })
);

export const fetchAllTracks = () => dispatch => (
  APIUtil.fetchAllTracks().then((serverTracks) =>
  dispatch(receiveTracks(serverTracks)), error => {
    return (
      dispatch(receiveTrackErrors(error.responseJSON))
    );
  })
);

export const fetchUserTracks = (userId) => dispatch => (
  APIUtil.fetchUserTracks(userId).then((serverTracks) =>
  dispatch(receiveTracks(serverTracks)), error => {
    return (
      dispatch(receiveTrackErrors(error.responseJSON))
    );
  })
);
