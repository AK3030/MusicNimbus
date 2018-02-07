import React from 'react';

const UserTrackIndexItem = ({track, deleteTrack}) => {
  return(
    <li>
      {track.track_name}
    </li>


  );
};

export default UserTrackIndexItem;
