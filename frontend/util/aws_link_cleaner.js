export default link => {
  link = link.substring(0, link.indexOf('?'));
  link = link.slice(4, link.length);
  link = 'https://s3-us-west-1' + link;
  return link;
};
