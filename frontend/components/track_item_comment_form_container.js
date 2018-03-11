import {connect} from 'react-redux';
import {createComment} from '../actions/comment_actions';
import TrackItemCommentForm from './track_item_comment_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    trackId: ownProps.trackId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: trackId => dispatch(createComment(trackId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackItemCommentForm);
