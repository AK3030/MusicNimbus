import { connect } from 'react-redux';
import ProfileDropzone from './profile_dropzone';
import {updateUser} from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    image_type: ownProps.image_type,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, userInfo) => dispatch(updateUser(id, userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropzone);
