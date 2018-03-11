import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import {fetchTrackComments, createComment} from './util/comment_api_util';
import {fetchTrackComments, createComment} from './actions/comment_actions';




document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchTrackComments = fetchTrackComments;
  window.createComment = createComment;

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
