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
      carouselPos: 0,
      blockEvents: false,
      lastEvent: null,
    };
    this.leftButtonClick = this.leftButtonClick.bind(this);
    this.rightButtonClick = this.rightButtonClick.bind(this);
    // this.thirdImage = this.thirdImage.bind(this);
    // this.incrementCarousel = this.incrementCarousel.bind(this);
    this.openEvents = this.openEvents.bind(this);
    this.blockEvents = this.blockEvents.bind(this);
    this.autoLeft = this.autoLeft.bind(this);
    this.autoRight = this.autoRight.bind(this);
    this.autoLeftWrapper = this.autoLeftWrapper.bind(this);
  }

  openEvents() {
    this.setState({blockEvents: false});
  }

  blockEvents() {
    this.setState({blockEvents: true});
  }

  timedBlock() {
    this.blockEvents();
    window.setTimeout(this.openEvents, 3900);
  }

  leftButtonClick() {
    this.timedBlock();
    this.setState({carouselPos:0});
  }

  rightButtonClick() {
    this.timedBlock();
    this.setState({carouselPos:1});
  }

  autoLeftWrapper() {
    const num = Math.random();
    this.state.lastEvent = num;
    window.setTimeout(this.autoLeft.bind(null, num), 4000);
  }

  autoLeft(num) {
    if (num === this.state.lastEvent) {
      this.setState({carouselPos:0});
    }
  }

  autoRightWrapper() {
    const num = Math.random();
    this.state.lastEvent = num;
    window.setTimeout(this.autoRight.bind(null, num), 4000);
  }

  autoRight(num) {

    if (num === this.state.lastEvent) {
      this.setState({carouselPos:1});
    }

  }


  // thirdImage() {
  //   this.setState({carouselPos: 2});
  // }

  // incrementCarousel() {
  //   this.setState({carouselPos: this.state.carouselPos + 1});
  // }



  render() {

    const instantStyle = {
      transform: "translateX(0%)",
      transition: "transform 0.6s ease-in-out 0s"
    };
    const transitionStyle = {
      transform: "translateX(-33.33%)"
    };

    const secondTransitionStyle = {
      transform: "translateX(-66.66%)"
    };

    const fillInButton = {
      backgroundColor: "white"
    };

    var carouselStyle = null;
    if (this.state.carouselPos === 1) {
      carouselStyle = transitionStyle;
    }
    else if (this.state.carouselPos === 2) {
      carouselStyle = secondTransitionStyle;
    }
    else if (this.state.carouselPos === 3) {
      carouselStyle = instantStyle;
    }
    else {
      carouselStyle = null;
    }

    // window.setTimeout(this.thirdImage, 3000);

    if (this.state.blockEvents === false) {

      if (this.state.carouselPos === 0) {
        this.autoRightWrapper();
      }
      else if (this.state.carouselPos === 1) {
        this.autoLeftWrapper();
      }
    }

    // else if (this.state.carouselPos === 2) {
    //   window.setTimeout(this.leftButtonClick, 3000);
    // }
    // else if (this.state.carouselPos === 3) {
    //
    // }

    return (
      <div>
        <div className = "header-container">
          {this.props.currentUser ? personalGreeting(this.props.currentUser, this.props.logout) : sessionLinks()}

          <div id="orange-banner"></div>
          <div style = {carouselStyle} className = "carousel carousel-transition">
            <div className="header1">
              <div className = "greeting-title">Connect on Nimbus</div>
              <div className = "greeting-text">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</div>
            </div>
            <div className = "header2">
              <div className = "greeting-title">First play to first platinum</div>
              <div className = "greeting-text">Upload your first track and begin your journey. Nimbus gives you space to create, find your fans, and connect with other artists.</div>
            </div>
            <div className="header1">
              <div className = "greeting-title">Connect on Nimbus</div>
              <div className = "greeting-text">Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.</div>
            </div>
          </div>
          <div className="nav-dots-container">
            <div className="nav-dots">
              <div style = {this.state.carouselPos === 0 || this.state.carouselPos === 2 ? fillInButton: null} onClick={this.leftButtonClick} className ="dot-button left-dot"></div>
              <div style = {this.state.carouselPos === 1 ? fillInButton: null} onClick={this.rightButtonClick} className="dot-button right-dot"></div>
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
