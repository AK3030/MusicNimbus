import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import ReactPlayer from 'react-player';

class UserTrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0
    };
  }

  load() {
    return (url) => {
      this.setState({
        url,
        played: 0,
        loaded: 0
    });
  };
  }

  playPause() {
    return () => {
      this.setState({playing: !this.state.playing});
      console.log(this.state);
    };
  }

  onProgress() {
    console.log("hello");
    return (state) => {
      console.log(state);
      console.log("hello");
      this.setState(state);

    };
  }



  render() {
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;
    // var playButtonBackground ='url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsYXkgMjg8L3RpdGxlPjxwYXRoIGQ9Ik0wIDE0bDEuODQ2LTdMMCAwbDggNy04IDd6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)';
    // if (playing) {
    //   playButtonBackground = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)';
    // }
    var pauseStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)',
      backgroundSize: '35%',
      backgroundPositionX: '12px',
      backgroundPositionY: '8px',

    };

    var playStyle = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDggMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBsYXkgMjg8L3RpdGxlPjxwYXRoIGQ9Ik0wIDE0bDEuODQ2LTdMMCAwbDggNy04IDd6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)',
      backgroundSize: '35%',
      backgroundPositionX: '12.5px',
      backgroundPositionY: '7px',
    };
    var playButtonStyle = playStyle;
    if (playing) {
      playButtonStyle = pauseStyle;
    }



    return (
    <li className="track-index-item">
      <img className="track-item-image" src={linkCleaner(this.props.track.image)}></img>
      <div className="item-upper-div">
        <div style={playButtonStyle} className="play-button" onClick={this.playPause()}>{playing ? '' : ''}</div>
        <div className="track-info-div">
          <div className="track-artist">{this.props.trackartist}</div>
          <div className="track-name">{this.props.track.track_name}</div>

          <ReactPlayer
            playing={playing}
            onProgress={this.onProgress()}
            height="0px"
            className="react-player"
            url={linkCleaner(this.props.track.audio)}/>
      </div>
      </div>



    </li>

  );
  }
}

export default UserTrackIndexItem;
