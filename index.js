function secondsToTime(seconds) {
  const hours = Math.round(seconds / 3600);
  const minutes = Math.round((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);
  
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    remainingSeconds.toString().padStart(2, '0')
  ].join(":");
}

module.exports = secondsToTime;
