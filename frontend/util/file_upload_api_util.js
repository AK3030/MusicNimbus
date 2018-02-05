export const uploadImage = image => (
  $.ajax({
    url:'/api/users/1/images',
    method: 'POST',
    data:image
  })
);
