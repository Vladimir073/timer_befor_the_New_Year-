const columns = document.querySelectorAll('.column .number');

const countdownDate = new Date (2022, 12, 01, 00, 00, 00);


function getCountdownTime() {
const now = new Date().getTime();
const distance = countdownDate - now;

// 1c = 1000мс
// 1м = 60с
// 1ч = 60м
// 1д = 24ч

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

let days = Math.floor(distance/oneDay);
let hours = Math.floor((distance % oneDay) / oneHour);
let minuts = Math.floor((distance % oneHour) / oneMinute);
let seconds = Math.floor((distance % oneMinute) / 1000);

const values = [days, hours, minuts, seconds];

columns.forEach((item, index) => {
    item.textContent = values[index];
})
}

getCountdownTime();

setInterval(getCountdownTime, 1000);