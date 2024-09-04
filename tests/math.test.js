const {
    randomInt,
    getRandomFloat,
    isPrime,
    factorial,
    clamp,
    roundToDecimalPlace,
    isEven,
    isOdd
} = require("../src/math");

describe('Math Utility Functions', () => {

    test('randomInt should generate a random integer between two values, inclusive', () => {
        const min = 1, max = 10;
        for (let i = 0; i < 100; i++) {
            const randomValue = randomInt(min, max);
            expect(randomValue).toBeGreaterThanOrEqual(min);
            expect(randomValue).toBeLessThanOrEqual(max);
            expect(Number.isInteger(randomValue)).toBe(true);
        }
    });

    test('getRandomFloat should generate a random float between two values', () => {
        const min = 1.5, max = 5.5;
        for (let i = 0; i < 100; i++) {
            const randomValue = getRandomFloat(min, max);
            expect(randomValue).toBeGreaterThanOrEqual(min);
            expect(randomValue).toBeLessThanOrEqual(max);
            expect(Number.isInteger(randomValue)).toBe(false);
        }
    });

    test('isPrime should correctly identify prime numbers', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(13)).toBe(true);
        expect(isPrime(1)).toBe(false);
        expect(isPrime(0)).toBe(false);
        expect(isPrime(-1)).toBe(false);
    });

    test('factorial should correctly calculate the factorial of a number', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);
        expect(factorial(6)).toBe(720);
    });

    test('clamp should correctly clamp a number between a minimum and maximum value', () => {
        expect(clamp(5, 1, 10)).toBe(5); // Within range
        expect(clamp(-5, 1, 10)).toBe(1); // Below range
        expect(clamp(15, 1, 10)).toBe(10); // Above range
    });

    test('roundToDecimalPlace should correctly round a number to a specified number of decimal places', () => {
        expect(roundToDecimalPlace(1.23456, 2)).toBe(1.23);
        expect(roundToDecimalPlace(1.23556, 2)).toBe(1.24);
        expect(roundToDecimalPlace(123.456, 0)).toBe(123);
        expect(roundToDecimalPlace(1.005, 2)).toBe(1.01); // Handles rounding edge cases
    });

    test('isEven should correctly identify even numbers', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven(0)).toBe(true);
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
    });

    test('isOdd should correctly identify odd numbers', () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(3)).toBe(true);
        expect(isOdd(0)).toBe(false);
        expect(isOdd(-2)).toBe(false);
        expect(isOdd(-3)).toBe(true);
    });

});
