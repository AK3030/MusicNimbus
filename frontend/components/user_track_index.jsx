import React from 'react';
import TrackIndexItem from './user_track_index_item';
import UserTrackIndexItemContainer from './user_track_index_item_container';


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
          return <UserTrackIndexItemContainer key={track.id} track={track} currentUser={this.props.currentUser}trackartist={this.props.user}/>;
        })
        }
        </ul>
      </div>
    );
  }
}

export default UserTrackIndex;
