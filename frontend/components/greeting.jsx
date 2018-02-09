import React from 'react';
import { Link } from 'react-router-dom';
import AllTrackIndexContainer from './all_track_index_container';

const sessionLinks = () => (
  <div>
    <nav className="header-nav">
      <Link id ="signup" className="session-nav-buttons" to="/signup">Create account</Link>
      <Link id ="signin" className="session-nav-buttons" to="/login">Sign in</Link>
    </nav>
    <h2 className="welcome">Connect On Nimbus</h2>
    <div className="background"></div>
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Welcome, {currentUser.username}</h2>
    <button className="session-nav-buttons" id="logout" onClick={logout}>Logout</button>
  </div>
);

const Greeting= ({currentUser, logout}) => {
  return (
    <div>
      <div className="header">
        <div id="orange-banner"></div>
        {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
      </div>
      <div className="all-track-index">
        <AllTrackIndexContainer/>
      </div>
    </div>
  );
};

export default Greeting;
