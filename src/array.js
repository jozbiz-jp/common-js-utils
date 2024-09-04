// Removes duplicate elements from an array.
function uniqueArray(arr) {
    return [...new Set(arr)];
}

// Flattens a multi-dimensional array into a single-dimensional array.
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

// Splits an array into chunks of a specified size.
function arrayChunk(arr, size) {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
}

// Returns the intersection of two arrays.
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Groups an array of objects by a specified key.
function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
}

// Returns a random item from an array.
function getRandomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Shuffles an array randomly.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Returns the elements in the first array that are not present in the second array.
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

// Returns the sum of an array of numbers.
function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Returns the average of an array of numbers.
function average(arr) {
    return sum(arr) / arr.length;
}

// Converts a two-dimensional array into a CSV string.
function arrayToCSV(arr) {
  return arr.map(row => row.map(String).map(val => `"${val.replace(/"/g, '""')}"`).join(',')).join('\n');
}

// Parses a CSV string into a two-dimensional array.
function csvToArray(csvString) {
  return csvString.split('\n').map(row => row.split(',').map(val => val.replace(/^"|"$/g, '').replace(/""/g, '"')));
}

// Merges two arrays, removing duplicates.
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Removes all null values from an array.
function removeNulls(arr) {
  return arr.filter(item => item !== null);
}

// Converts an object into an array of key-value pairs.
function objectToArray(obj) {
  return Object.entries(obj);
}

// Finds the index of an element in an array based on a predicate function.
function findIndexBy(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) return i;
  }
  return -1;
}

// Filters an array by a specific data type.
function filterByType(arr, type) {
  return arr.filter(item => typeof item === type);
}

module.exports = {
    uniqueArray,
    flattenArray,
    arrayChunk,
    arrayIntersection,
    groupBy,
    getRandomItemFromArray,
    shuffleArray,
    difference,
    sum,
    average,
    arrayToCSV,
    csvToArray,
    mergeArrays,
    removeNulls,
    objectToArray,
    findIndexBy,
    filterByType
};