import React from 'react';
import ReactDOM from 'react-dom';

// import {login, signup, logout} from './util/session_api_util';

import configureStore from './store/store';

import {login, signup, logout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi</h1>, root);
});
