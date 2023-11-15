const republicDay = "26 January 2024"

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


function countdown() {
    const republicDayDate = new Date(republicDay);
    const currentDate = new Date();
    
    // console.log(currentDate);
    // console.log(republicDayDate);

    const totalSeconds = (republicDayDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);
    // console.log(seconds);

    daysElement.innerHTML = days; 
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);