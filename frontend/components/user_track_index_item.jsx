import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';

const UserTrackIndexItem = ({track, deleteTrack, trackartist}) => {
  console.log(trackartist);
  return (
    <li className="track-index-item">
      <img className="track-item-image" src={linkCleaner(track.image)}></img>
      <div className="track-item-div">
        <div>{trackartist}</div>
        <div>{track.track_name}</div>
        <audio controls>
          <source src={linkCleaner(track.audio)} type="audio/mpeg"/>
        </audio>
      </div>

    </li>


  );
};

export default UserTrackIndexItem;
