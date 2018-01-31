import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Sign in</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Create account</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Welcome, {currentUser.username}</h2>
    <button className="session-button" onClick={logout}>Logout</button>
  </div>
);

const Greeting=  ({currentUser, logout}) => {


return (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);};

export default Greeting;
