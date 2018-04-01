import React from 'react';
import TrackIndexItem from './user_track_index_item';
import UserTrackIndexItemContainer from './user_track_index_item_container';

class AllTrackIndex extends React.Component {
  componentDidMount() {

    this.props.fetchAllUsers();
    this.props.fetchAllTracks();

  }

  render() {

    if (!this.props.tracks[1]) {
      return "Loading";
    }

    if (Object.keys(this.props.users).length < 2) {
      return "Loading";
    }

    return (
      <div className="user-track-index">
        <ul>
        {
        this.props.tracks.map( track => {

          return <UserTrackIndexItemContainer alltracks={true} key={track.id} track={track} currentUser={this.props.currentUser} trackartist={this.props.users[track.user_id]}/>;
        })
        }
        </ul>
      </div>
    );
  }
}

export default AllTrackIndex;
