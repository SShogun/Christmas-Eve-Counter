const newYears = "1 January 2024";
// set date for new years, by default 00:00:00 is set as default time

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
// generating constants which are used for DOM manipulation


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
// to get current & newyearsdate in js understandable format


    const totalSeconds = (newYearsDate - currentDate) / 1000;
    // subtracts the time left till the event, divided by thousand
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // still have to figure out logic for this one
    console.log(newYearsDate);
    // console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days; 
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    // changing inner html helps us replace the existing contents of an element with new controls
}
// initial call
countdown();

setInterval(countdown, 1000);
// calling the function repeatedly so that it can be updated every single second 