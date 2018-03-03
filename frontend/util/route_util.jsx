import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {

  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

const Stream = ({component:Component, path, loggedIn, exact}) => {

  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/stream" />
      )
    )}/>
  );};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const StreamRoute = withRouter(connect(mapStateToProps, null)(Stream));
