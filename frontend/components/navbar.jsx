import React from 'react';
import { Link } from 'react-router-dom';
import linkCleaner from '../util/aws_link_cleaner';


const NavBar = ({currentUser, logout}) => {


  var username = "Log In";
  var link = `#/login`;
  var uploadLink = null;
  var logoutButton = null;
  var miniImage = null;
  if (currentUser) {
    username = <div id="navbar-user-text">{currentUser.username}</div>;
    link = `#/users/${currentUser.id}`;
    uploadLink = <li><Link to={`/users/${currentUser.id}/uploadSong`} className="navbar-button">Upload</Link></li>;
    logoutButton = <li><button className="navbar-button" id = "logout-nav-button" onClick={logout}>Logout</button></li>;
    miniImage = <img src={linkCleaner(currentUser.header_image)} className="user-image-mini"></img>;
  }

  return (
    <div>
      <header className="main-header">
        <nav className="main-navbar">
          <ul className="header-list">
            <li><a className="navbar-button" id="nimbus-link"href="#/navbar">Nimbus</a></li>
            <li><a className="navbar-button" id="home-link" href="#/navbar">Home</a></li>
            <li><a className="navbar-button" id="collection-link" href="#/navbar">Collection</a></li>
          </ul>
          <form id="search-form">
            <input id="search-box" placeholder="Search (not yet implemented)"></input>
          </form>

          <ul className="header-list">
            <li><a id="upgrade-link" href="https://github.com/AK3030">Github</a></li>
            {logoutButton}
            {uploadLink}

            <li className = "navbar-user">


              <a href={link} className="navbar-button">
                {miniImage}
                {username}

              </a>

            </li>

          </ul>
        </nav>
      </header>
    </div>

  );
};

export default NavBar;
