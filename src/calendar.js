// Checks if a date string is valid.
function isValidDate(dateString) {
    // Check for an empty or invalid string
    if (!dateString) {
        return false;
    }

    const date = new Date(dateString);
    const [year, month, day] = dateString.split('-').map(Number);

    // Check if the date object is invalid or auto-corrected (e.g., '2024-02-30' becoming March 1)
    if (date instanceof Date && !isNaN(date.getTime())) {
        // Ensure that the year, month, and day match exactly
        return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
    }

    return false;
}

// Converts seconds into a time string (HH:MM).
function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hours, minutes, secs].map(val => String(val).padStart(2, '0')).join(':');
}

// Converts a time string (HH:MM:SS) into seconds.
function timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}

// Calculates the number of days between two dates.
function getDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date2 - date1) / oneDay));
}

// Checks if a given year is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Returns the current timestamp in milliseconds.
function getCurrentTimestamp() {
    return Date.now();
}


module.exports = {
    isValidDate,
    secondsToTime,
    timeToSeconds,
    getDaysBetweenDates,
    isLeapYear,
    getCurrentTimestamp
}