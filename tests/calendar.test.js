const {
    isValidDate,
    secondsToTime,
    timeToSeconds,
    getDaysBetweenDates,
    isLeapYear,
    getCurrentTimestamp
} = require("../src/calendar");

describe('Date and Time Utility Functions', () => {

    test('isValidDate should correctly identify valid and invalid date strings', () => {
        expect(isValidDate('2024-09-01')).toBe(true);  // Valid date
        expect(isValidDate('2024-02-29')).toBe(true);  // Valid leap year date
        expect(isValidDate('Invalid Date')).toBe(false);  // Invalid date string
        expect(isValidDate('')).toBe(false);  // Empty string
        expect(isValidDate('2024-13-01')).toBe(false);  // Invalid month
        expect(isValidDate('2024-02-30')).toBe(false);  // Invalid day
    });

    test('secondsToTime should correctly convert seconds into a time string (HH:MM:SS)', () => {
        expect(secondsToTime(3661)).toBe('01:01:01');
        expect(secondsToTime(59)).toBe('00:00:59');
        expect(secondsToTime(3600)).toBe('01:00:00');
        expect(secondsToTime(0)).toBe('00:00:00');
    });

    test('timeToSeconds should correctly convert a time string (HH:MM:SS) into seconds', () => {
        expect(timeToSeconds('01:01:01')).toBe(3661);
        expect(timeToSeconds('00:00:59')).toBe(59);
        expect(timeToSeconds('01:00:00')).toBe(3600);
        expect(timeToSeconds('00:00:00')).toBe(0);
    });

    test('getDaysBetweenDates should correctly calculate the number of days between two dates', () => {
        const date1 = new Date('2024-01-01');
        const date2 = new Date('2024-01-10');
        expect(getDaysBetweenDates(date1, date2)).toBe(9);

        const date3 = new Date('2024-01-01');
        const date4 = new Date('2024-12-31');
        expect(getDaysBetweenDates(date3, date4)).toBe(365); // 2024 is a leap year

        const date5 = new Date('2024-01-01');
        const date6 = new Date('2023-01-01');
        expect(getDaysBetweenDates(date5, date6)).toBe(365); // 2024 and 2023 difference
    });

    test('isLeapYear should correctly identify leap years', () => {
        expect(isLeapYear(2024)).toBe(true);  // Leap year
        expect(isLeapYear(2020)).toBe(true);  // Leap year
        expect(isLeapYear(1900)).toBe(false);  // Not a leap year (divisible by 100 but not 400)
        expect(isLeapYear(2000)).toBe(true);  // Leap year (divisible by 400)
        expect(isLeapYear(2023)).toBe(false);  // Not a leap year
    });

    test('getCurrentTimestamp should return the current timestamp in milliseconds', () => {
        const now = Date.now();
        const timestamp = getCurrentTimestamp();
        expect(Math.abs(timestamp - now)).toBeLessThan(1000);  // Should be close to the current timestamp
    });

});