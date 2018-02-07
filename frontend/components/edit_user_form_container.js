import { connect } from 'react-redux';
import { updateUser } from '../actions/user_actions';
import EditUserForm from './edit_user_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser:state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, userInfo) => dispatch(updateUser(id, userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
