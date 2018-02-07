export const fetchTrack = trackId => {
  return $.ajax({
    url: `/api/tracks/${trackId}`,
    method: 'GET'
  });
};

export const fetchAllTracks = () => {
  return $.ajax({
    url: `/api/tracks`,
    method: 'GET'
  });
};

export const fetchUserTracks = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/tracks`,
    method: 'GET'
  });
};
