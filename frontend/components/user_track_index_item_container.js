import {connect} from 'react-redux';
import {fetchUser} from '../actions/user_actions';
import UserTrackIndexItem from './user_track_index_item';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    track: ownProps.track,
    trackartist: ownProps.trackartist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserTrackIndexItem));
