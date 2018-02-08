import React from 'react';
import TrackIndexItem from './user_track_index_item';


class UserTrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserTracks(this.props.payload.userId);
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
          return <TrackIndexItem key={track.id} track={track} trackartist={this.props.user.username}/>;
        })
        }
        </ul>
      </div>
    );
  }
}

export default UserTrackIndex;
