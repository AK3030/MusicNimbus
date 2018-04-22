export const fetchSearchUsers = query => (
  $.ajax({
    url: `/api/users/search/${query}`,
  })
);
