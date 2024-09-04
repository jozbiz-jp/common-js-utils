// Generates a random integer between two values, inclusive.
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a random float between two values.
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Checks if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Calculates the factorial of a number.
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Clamps a number between a minimum and maximum value.
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// Rounds a number to a specified number of decimal places.
function roundToDecimalPlace(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}

// Checks if a number is even.
function isEven(num) {
  return num % 2 === 0;
}

// Checks if a number is odd.
function isOdd(num) {
  return num % 2 !== 0;
}


module.exports = {
  randomInt,
  getRandomFloat,
  isPrime,
  factorial,
  clamp,
  roundToDecimalPlace,
  isEven,
  isOdd
}