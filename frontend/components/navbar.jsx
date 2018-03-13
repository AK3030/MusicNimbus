import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({currentUser, logout}) => {

  var username = "Log In";
  var link = `#/`;
  var uploadLink = null;
  var logoutButton = null;
  if (currentUser) {
    username = currentUser.username;
    link = `#/users/${currentUser.id}`;
    uploadLink = <li><Link to={`/users/${currentUser.id}/uploadSong`}>Upload</Link></li>;
    logoutButton = <li><button id = "logout-nav-button" onClick={logout}>Logout</button></li>;

  }


  return (
    <div>
      <header className="main-header">
        <nav className="main-navbar">
          <ul className="header-list">
            <li><a id="nimbus-link"href="#/navbar">Nimbus</a></li>
            <li><a id="home-link" href="#/navbar">Home</a></li>
            <li><a id="collection-link" href="#/navbar">Collection</a></li>
          </ul>
          <form id="search-form">
            <input id="search-box" placeholder="Search"></input>
          </form>







          <ul className="header-list">
            <li><a id="upgrade-link" href="https://github.com/AK3030">Github</a></li>
            {logoutButton}
            {uploadLink}


            <li><a href={link}>{username}</a></li>
          </ul>
        </nav>
      </header>
    </div>

  );
};

export default NavBar;
