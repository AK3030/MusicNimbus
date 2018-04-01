import React from 'react';
import Dropzone from 'react-dropzone';
import AllTrackIndexContainer from './all_track_index_container';

class Stream extends React.Component {

  render() {
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
