import { connect } from 'react-redux';
import AllTrackIndex from './all_track_index';
import { fetchAllTracks } from '../actions/track_actions';
import {fetchAllUsers} from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    tracks: Object.keys(state.tracks).map(id => state.tracks[id]),
    currentUser: state.session.currentUser,
    users: state.users

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllTracks: () => dispatch(fetchAllTracks()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTrackIndex);
