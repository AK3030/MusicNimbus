export const fetchUser = userId => (
  $.ajax({
    url: `/api/users/${userId}`,
  })
);

export const updateUser = (id, userInfo) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'PATCH',
    data : userInfo,
    contentType: false,
    processData: false,
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    url:"/api/users",
    method: "GET"
  });
};
