import {connect} from 'react-redux';
import { updateTrack } from '../actions/track_actions';
import EditTrackForm from './edit_track_form';

const mapStateToProps = (state) => {

  return {
    errors: state.errors.track
  };

};

const mapDispatchToProps = dispatch => {
  return {
    updateTrack: (trackId, track) => dispatch(updateTrack(trackId, track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
