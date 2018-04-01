export default millis => {
  var rounded = Math.round(millis);
  var minutes = Math.floor(rounded/60);
  var seconds = rounded%60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  return `${minutes}:${seconds}`;
};
