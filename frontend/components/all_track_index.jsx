import React from 'react';
import TrackIndexItem from './user_track_index_item';
import UserTrackIndexItemContainer from './user_track_index_item_container';
import {Route} from 'react-router-dom';

class AllTrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllTracks();
    this.props.fetchAllUsers();
  }

  render() {
    console.log(this.props);
    if (!this.props.tracks[0]) {
      return null;
    }

    if (!this.props.users[1]) {
      return null;
    }
    console.log(this.props.users[1].username);

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
