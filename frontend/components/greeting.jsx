import React from 'react';
import { Link } from 'react-router-dom';

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
    <button className="session-button" onClick={logout}>Logout</button>
  </div>
);

const Greeting= ({currentUser, logout}) => {


return (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);};

export default Greeting;
