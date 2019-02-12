function formatTime(minutesTime) {
    let days = Math.floor(minutesTime / 1440);
    let hours = Math.floor((minutesTime % 1440) / 60);
    let minutes = (minutesTime % 1440) % 60;
    return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s) ";
}
formatTime(1442);