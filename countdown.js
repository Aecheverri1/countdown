let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;


function loadSeconds() {
    let textSeconds;

    if(seconds < 1) {
        seconds = 59;
    } else {
        seconds --;
    }

    if(seconds < 10) {
        textSeconds = `0${seconds}`
    } else {
        textSeconds = seconds;
    }

    document.getElementById("second").innerHTML = textSeconds;

    loadMinutes(seconds)
}

function loadMinutes(seconds) {
    let textMinutes;

    if(seconds == 59 && minutes == 0) {
        minutes = 59;
    } else if(seconds == 00 && minutes !== 0){
        minutes--;
    }

    if(minutes < 10) {
        textMinutes = `0${minutes}`;
    } else {
        textMinutes = minutes;
    }

    document.getElementById("minute").innerHTML = textMinutes;

    loadHours(minutes);
}

function loadHours(minutes) {

    let textHours;

    if(minutes == 59 && hours == 0) {
        hours = 23;
    } else if(minutes == 0 && hours !== 0) {
        hours--;
    }

    if(hours < 10) {
        textHours = `0${hours}`;
    } else {
        textHours = hours;
    }

    document.getElementById("hour").innerHTML = textHours;
    loadDays(hours)
}

function loadDays(hours) {
    let textDays;

    if (hours == 23 && days == 0) {
        days = 6;
    } else if(hours == 0 && days !== 0) {
        days--;
    }

    if(days < 7) {
        textDays = `0${days}`;
    }

    document.getElementById("day").innerHTML = textDays;
}

setInterval(loadSeconds, 1000);