import { connect } from 'react-redux';
import UserTrackIndex from './user_track_index';
import { fetchUserTracks } from '../actions/track_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    tracks: Object.keys(state.tracks).map(id => state.tracks[id]),
    user: state.users[ownProps.payload.userId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserTracks: (userId) => dispatch(fetchUserTracks(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTrackIndex);
