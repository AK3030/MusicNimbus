import {connect} from 'react-redux';
import {fetchUser, fetchTrackCommentUsers} from '../actions/user_actions';
import UserTrackIndexItem from './user_track_index_item';
import {withRouter} from 'react-router';
import {fetchTrackComments} from '../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    track: ownProps.track,
    trackartist: ownProps.trackartist,
    comments: state.comments,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchTrackComments: trackId => dispatch(fetchTrackComments(trackId)),
    fetchTrackCommentUsers: trackId => dispatch(fetchTrackCommentUsers(trackId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserTrackIndexItem));
