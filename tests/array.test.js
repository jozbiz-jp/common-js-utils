const {
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
} = require("../src/array");

describe('Array Utility Functions', () => {

    test('uniqueArray should remove duplicate elements from an array', () => {
        const arr = [1, 2, 2, 3, 4, 4];
        expect(uniqueArray(arr)).toEqual([1, 2, 3, 4]);
    });

    test('flattenArray should flatten a multi-dimensional array', () => {
        const arr = [1, [2, [3, 4]], 5];
        expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    test('arrayChunk should split an array into chunks of a specified size', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(arrayChunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('arrayIntersection should return the intersection of two arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        expect(arrayIntersection(arr1, arr2)).toEqual([2, 3]);
    });

    test('groupBy should group an array of objects by a specified key', () => {
        const arr = [{ group: 'A', val: 1 }, { group: 'B', val: 2 }, { group: 'A', val: 3 }];
        expect(groupBy(arr, 'group')).toEqual({
            A: [{ group: 'A', val: 1 }, { group: 'A', val: 3 }],
            B: [{ group: 'B', val: 2 }]
        });
    });

    test('getRandomItemFromArray should return a random item from an array', () => {
        const arr = [1, 2, 3, 4];
        const item = getRandomItemFromArray(arr);
        expect(arr).toContain(item);
    });

    test('shuffleArray should shuffle an array randomly', () => {
        const arr = [1, 2, 3, 4];
        const shuffled = shuffleArray([...arr]);
        expect(shuffled).not.toEqual(arr);
        expect(shuffled.sort()).toEqual(arr.sort()); // Same elements but different order
    });

    test('difference should return the elements in the first array not present in the second array', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 4];
        expect(difference(arr1, arr2)).toEqual([1, 3]);
    });

    test('sum should return the sum of an array of numbers', () => {
        const arr = [1, 2, 3, 4];
        expect(sum(arr)).toBe(10);
    });

    test('average should return the average of an array of numbers', () => {
        const arr = [1, 2, 3, 4];
        expect(average(arr)).toBe(2.5);
    });

    test('arrayToCSV should convert a two-dimensional array into a CSV string', () => {
        const arr = [['a', 'b'], ['c', 'd']];
        expect(arrayToCSV(arr)).toBe('"a","b"\n"c","d"');
    });

    test('csvToArray should parse a CSV string into a two-dimensional array', () => {
        const csvString = '"a","b"\n"c","d"';
        expect(csvToArray(csvString)).toEqual([['a', 'b'], ['c', 'd']]);
    });

    test('mergeArrays should merge two arrays, removing duplicates', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 3, 4];
        expect(mergeArrays(arr1, arr2)).toEqual([1, 2, 3, 4]);
    });

    test('removeNulls should remove all null values from an array', () => {
        const arr = [1, null, 2, null, 3];
        expect(removeNulls(arr)).toEqual([1, 2, 3]);
    });

    test('objectToArray should convert an object into an array of key-value pairs', () => {
        const obj = { a: 1, b: 2 };
        expect(objectToArray(obj)).toEqual([['a', 1], ['b', 2]]);
    });

    test('findIndexBy should find the index of an element in an array based on a predicate function', () => {
        const arr = [1, 2, 3, 4];
        expect(findIndexBy(arr, x => x === 3)).toBe(2);
        expect(findIndexBy(arr, x => x === 5)).toBe(-1);
    });

    test('filterByType should filter an array by a specific data type', () => {
        const arr = [1, 'two', 3, true];
        expect(filterByType(arr, 'number')).toEqual([1, 3]);
        expect(filterByType(arr, 'string')).toEqual(['two']);
    });

});
