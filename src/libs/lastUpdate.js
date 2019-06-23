export const lastUpdate = (inputDate) => {
  const now = new Date();
  const dataTime = new Date(inputDate);
  const diff = Math.floor((now - dataTime) / 0.6e5); // count difference in minutes
  let timeString = null;
  if (diff > 1440) {
    timeString = `${Math.floor(diff / 1440)} days ago`;
  } else if (diff > 59) {
    timeString = `${Math.floor(diff / 60)} hours ago`;
  } else {
    timeString = `${diff} minutes ago`;
  }
  return timeString;
};
