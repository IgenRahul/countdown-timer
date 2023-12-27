const newYear = '1 Jan 2024';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const secs = Math.floor(totalSeconds % 60);

  daysEl.innerHTML =format(days);
  hoursEl.innerHTML =format(hours);
  minsEl.innerHTML =format(mins);
  secondsEl.innerHTML = format(secs);
}

function format(text){
  return text < 10?`0${text}`:text;
}
countDown();
setInterval(countDown,1000);
