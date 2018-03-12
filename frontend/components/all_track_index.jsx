import React from 'react';
import TrackIndexItem from './user_track_index_item';
import UserTrackIndexItemContainer from './user_track_index_item_container';
// import {Route} from 'react-router-dom';

class AllTrackIndex extends React.Component {
  componentDidMount() {

    this.props.fetchAllUsers();
    this.props.fetchAllTracks();

  }

  // componentWillReceiveProps() {
  //   this.props.fetchAllTracks();
  //   this.props.fetchAllUsers();
  //
  // }


  render() {

    if (!this.props.tracks[1]) {
      return "hi";
    }

    if (Object.keys(this.props.users).length < 2) {

      // this.props.fetchAllUsers();
      return "Hi";
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
