import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {fetchTrack, fetchAllTracks, fetchUserTracks} from './actions/track_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchTrack = fetchTrack;
  window.fetchAllTracks = fetchAllTracks;
  window.store=store;
  window.fetchUserTracks =fetchUserTracks;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
