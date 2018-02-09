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

export const uploadTrack = (track) => {
  return $.ajax({
    url: `api/tracks`,
    method: 'POST',
    data: track,
    contentType: false,
    processData: false,
  });
};

export const updateTrack = (trackId, track) => {
  return $.ajax({
    url: `api/tracks/${trackId}`,
    method: `PATCH`,
    data: track,
    contentType: false,
    processData: false
  });
};
