import React from 'react';
import TrackIndexItem from './user_track_index_item';


class UserTrackIndex extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchUserTracks(this.props.payload.userId);
    // this.props.fetchUserTracks(4);
  }

  render() {
    if (!this.props.tracks[0]) {
      return null;
    }
    return (
      <div className="user-track-index">
        <ul>
        {
        this.props.tracks.map( track => {
          return <TrackIndexItem key={track.id} track={track} currentUser={this.props.currentUser}trackartist={this.props.user}/>;
        })
        }
        </ul>
      </div>
    );
  }
}

export default UserTrackIndex;
