require('wavesurfer.js');

import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import conversion from '../util/time_conversion';
import Wavesurfer from 'react-wavesurfer';
import TrackItemCommentForm from './track_item_comment_form';
import TrackItemCommentFormContainer from './track_item_comment_form_container';

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
      playbackRate: 1.0,
      pos: 0
    };
    this.load = this.load.bind(this);
    this.playPause = this.playPause.bind(this);
    this.ref = this.ref.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handleReady = this.handleReady.bind(this);
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
    };
  }

  onProgress() {
    return (state) => {
      if (!this.state.seeking) {
        this.setState(state);
      }
    };
  }

  componentDidMount() {
    this.props.fetchTrackComments(this.props.track.id);
    this.props.fetchTrackCommentUsers(this.props.track.id);
  }

  ref(player) {
    this.player = player;
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  handleReady(args) {
    this.state.duration = args.wavesurfer.getDuration();
    this.setState({
      duration: args.wavesurfer.getDuration()
    });
  }

  render() {
    const options = {
      height: 62,
      barWidth: 2,
      hideScrollbar: true,
      cursorWidth: 0,
      normalize: true,
      fillParent: true,
      progressColor: '#FC491E'
    };
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;

    var pauseStyle = {
      cursor: 'pointer',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlIDI4PC90aXRsZT48cGF0aCBkPSJNNSAwdjEyaDNWMEg1ek0wIDB2MTJoM1YwSDB6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)',
      backgroundSize: '35%',
      backgroundPositionX: '12px',
      backgroundPositionY: '8px',
    };

    var playStyle = {
      cursor: 'pointer',
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


    var editTrackButton = null;
    if (this.props.currentUser) {
      var editLink =`/#/users/${this.props.track.user_id}/tracks/${this.props.track.id}/edit`;
      editTrackButton = (this.props.currentUser.id == this.props.track.user_id) ? <a href={editLink}><div className="edit-track-item">Edit</div></a> : null;
    }
    var trackItemProgress = this.state.pos ? <div className="track-item-progress track-progress">{conversion(this.state.pos)}</div> : null;
    var trackItemDuration = this.state.duration ? <div className="track-item-progress">{conversion(this.state.duration)}</div> : null;

    var artistLink = `#/users/${this.props.trackartist.id}`;


    var trackComments = this.props.comments[this.props.track.id];
    var trackCommentsArray = null;
    var missingUsers = false;
    if (trackComments) {

      trackCommentsArray = Object.keys(trackComments).map (key => {

        var percentage = (trackComments[key].timestamp/this.state.duration)*100;
        var commentUser = this.props.users[trackComments[key].user_id];
        var backgroundImage = commentUser? linkCleaner(commentUser.image):null;
        if (commentUser === null) {
          missingUsers = true;
        }
        let commentItemStyle = {
          left: `${percentage}%`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100%'

        };
        return <div style={commentItemStyle} key={key} className="waveform-comment">
                 <div className="item-comment-text">
                   <div className="item-comment-username">{commentUser? commentUser.username:null}</div>
                   <div className="item-comment-body">{trackComments[key].body}</div>
                 </div>
               </div>;
        });

    }

    return (

    <li className="track-index-item">
      <img className="track-item-image" src={linkCleaner(this.props.track.image)}></img>
      <div className="item-middle">
        <div className="item-upper-div">
          <div style={playButtonStyle} className="play-button" onClick={this.playPause()}>{playing ? '' : ''}</div>
          <div className="track-info-div">
            <div className="track-artist"><a href={artistLink}> {this.props.trackartist.username} </a></div>
            <div className="track-name">{this.props.track.track_name}</div>

          </div>

        </div>

        <div className="track-item-buttons">
          {editTrackButton}
        </div>

        <div className = "track-progress-div">

            <div className="progress-text"> {trackItemProgress} </div>
            <div className="waveform-line"></div>
            <div className="song-length"> {trackItemDuration} </div>

            <div className = "waveform">
              <Wavesurfer
                options = {options}
                audioFile={linkCleaner(this.props.track.audio)}
                pos={this.state.pos}
                onPosChange={this.handlePosChange}
                playing={this.state.playing}
                onReady={this.handleReady}
              />
            </div>

            <div className="track-comment-div">
              <div className="track-comment-transparent">
                <div className="track-comment-photobar">
                  {missingUsers? null: trackCommentsArray}

                </div>
              </div>


            </div>

        </div>
        {this.props.currentUser? <TrackItemCommentFormContainer trackId={this.props.track.id} pos={this.state.pos} duration={this.state.duration}/>:null}


      </div>

    </li>

  );
  }
}

export default UserTrackIndexItem;
