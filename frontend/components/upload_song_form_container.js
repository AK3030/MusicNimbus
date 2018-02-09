import { connect } from 'react-redux';
import { updateUser } from '../actions/user_actions';
import UploadSongForm from './upload_song_form';
import {uploadTrack} from '../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser:state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, userInfo) => dispatch(updateUser(id, userInfo)),
    uploadTrack: track => dispatch(uploadTrack(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadSongForm);
