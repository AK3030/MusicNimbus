import React from 'react';
import Dropzone from 'react-dropzone';
import AllTrackIndexContainer from './all_track_index_container';

class Stream extends React.Component {
  componentDidMount() {
    // this.props.fetchAllTracks();
    // this.props.fetchAllUsers();
  }

  render() {
    // if (!this.props.tracks[0]) {
    //   return null;
    // }

    return (
      <div className="stream-page-container">
        <nav className="stream-nav">
          <ul className="stream-nav-left">
            <li>Stream</li>
            <li>Charts</li>
            <li>Discover</li>
          </ul>
        </nav>
        <AllTrackIndexContainer/>
      </div>
    );
  }
}

export default Stream;
