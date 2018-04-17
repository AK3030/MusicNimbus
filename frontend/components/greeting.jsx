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



class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPos: false
    };
    this.leftButtonClick = this.leftButtonClick.bind(this);
    this.rightButtonClick = this.rightButtonClick.bind(this);
  }

  leftButtonClick() {
    console.log("left");
    this.setState({carouselPos:false});
  }

  rightButtonClick() {
    console.log("right");
    this.setState({carouselPos:true});
  }

  render() {
    const transitionStyle = {
      transform: "translateX(-33.33%)"
    };

    const fillInButton = {
      backgroundColor: "white"
    };

    return (
      <div>
        <div className = "header-container">
          {this.props.currentUser ? personalGreeting(this.props.currentUser, this.props.logout) : sessionLinks()}

          <div id="orange-banner"></div>
          <div style = {this.state.carouselPos ? transitionStyle: null} className = "carousel carousel-transition">
            <div className="header1">
              <div className = "greeting-title">Connect on Nimbus</div>
              <div className = "greeting-text">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</div>
            </div>
            <div className = "header2">

            </div>
          </div>
          <div className="nav-dots-container">
            <div className="nav-dots">
              <div style = {!this.state.carouselPos ? fillInButton: null} onClick={this.leftButtonClick} className ="dot-button left-dot"></div>
              <div style = {this.state.carouselPos ? fillInButton: null} onClick={this.rightButtonClick} className="dot-button right-dot"></div>
            </div>
          </div>


        </div>
        <div className="all-track-index">
          <AllTrackIndexContainer/>
        </div>
      </div>
    );

  }
}

export default Greeting;
