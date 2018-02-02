import { connect } from 'react-redux';
import { login, signup, clearSessionErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors, currentUser}, ownProps) => {

  let loggedin = Boolean(currentUser);

  return {
    errors: errors.session,
    loggedin
  };
};

const mapDispatchToProps = (dispatch, {location}) => {
  let formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    clearErrors: () => dispatch(clearSessionErrors()),
    processForm: user => dispatch(processForm(user)),
    processLogin: user => dispatch(login(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
