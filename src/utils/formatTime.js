const formatTime = (time) => {
  const timeFormat = time.match(/\d{2}:\d{2}/);
  return timeFormat;
};

export default formatTime;
