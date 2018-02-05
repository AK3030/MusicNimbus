import { connect } from 'react-redux';
import Navbar from './navbar';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
  return {
    currentUser:state.session.currentUser
  };
};

export default withRouter(connect(mapStateToProps, null)(Navbar));
