import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser}) => {
  console.log(currentUser);
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
            <li><a id="upgrade-link" href="#/navbar">Upgrade</a></li>
            <li><a href="#/navbar">Upload</a></li>
            <li><a href="#/navbar">{currentUser.username}</a></li>
          </ul>
        </nav>
      </header>
    </div>

  );
};

export default NavBar;
