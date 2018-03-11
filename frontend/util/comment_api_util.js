export const fetchTrackComments = (trackId) => {
  return $.ajax({
    url: `/api/tracks/${trackId}/comments`,
    method: 'GET'
  });
};

export const createComment = (comment) => {
  return $.ajax({
    url: `/api/comments`,
    method: 'POST',
    data: comment
  });
};
