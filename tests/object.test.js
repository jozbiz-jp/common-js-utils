const {
    isObject,
    deepClone,
    isEmptyObject,
    mergeObjects,
    isEqual,
    deepFreeze,
    objectToQueryString,
    queryStringToObject,
    getNestedValue,
    arrayToObject,
    invertObject,
    groupByKey,
    differenceBy,
    flattenObject,
    unflattenObject,
    hasKey,
    mapObject,
    filterObject,
    isObjectEmpty
} = require("../src/object");

describe('Object Functions', () => {

    test('isObject should correctly identify objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject([])).toBe(false);
        expect(isObject(null)).toBe(false);
        expect(isObject(42)).toBe(false);
    });

    test('deepClone should create a deep copy of an object', () => {
        const obj = { a: 1, b: { c: 2 } };
        const clone = deepClone(obj);
        expect(clone).toEqual(obj);
        expect(clone).not.toBe(obj); // Different reference
        clone.b.c = 3;
        expect(obj.b.c).toBe(2); // Original should not be affected
    });

    test('isEmptyObject should correctly identify empty objects', () => {
        expect(isEmptyObject({})).toBe(true);
        expect(isEmptyObject({ a: 1 })).toBe(false);
        expect(isEmptyObject([])).toBe(false); // Array is not considered an object here
    });

    test('mergeObjects should correctly deep merge objects', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { b: { d: 3 }, e: 4 };
        const result = mergeObjects(obj1, obj2);
        expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
    });

    test('isEqual should correctly check deep equality', () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        const obj3 = { a: 1, b: { c: 3 } };
        expect(isEqual(obj1, obj2)).toBe(true);
        expect(isEqual(obj1, obj3)).toBe(false);
    });

    test('deepFreeze should make an object immutable', () => {
        'use strict';  // Enable strict mode

        const obj = { a: 1, b: { c: 2 } };
        const frozen = deepFreeze(obj);

        // Check if the object and its nested properties are frozen
        expect(Object.isFrozen(frozen)).toBe(true);
        expect(Object.isFrozen(frozen.b)).toBe(true);

        // Ensure that attempting to modify a frozen object throws an error
        expect(() => { frozen.a = 2; }).toThrow(TypeError);
    });

    test('objectToQueryString should convert an object to a query string', () => {
        const obj = { name: 'John Doe', age: 30 };
        expect(objectToQueryString(obj)).toBe('name=John%20Doe&age=30');
    });

    test('queryStringToObject should convert a query string to an object', () => {
        const queryString = '?name=John%20Doe&age=30';
        expect(queryStringToObject(queryString)).toEqual({ name: 'John Doe', age: '30' });
    });

    test('getNestedValue should retrieve the value of a nested property', () => {
        const obj = { a: { b: { c: 42 } } };
        // Test retrieving an existing nested value
        expect(getNestedValue(obj, 'a.b.c')).toBe(42);

        // Test retrieving a non-existent nested value, should return the default value
        expect(getNestedValue(obj, 'a.b.d', 'default')).toBe('default');

        // Test retrieving a deeply non-existent path, should also return the default value
        expect(getNestedValue(obj, 'a.x.y.z', 'not found')).toBe('not found');
    });

    test('arrayToObject should convert an array of key-value pairs into an object', () => {
        const arr = [['a', 1], ['b', 2]];
        expect(arrayToObject(arr)).toEqual({ a: 1, b: 2 });
    });

    test('invertObject should invert the keys and values of an object', () => {
        const obj = { a: 1, b: 2 };
        expect(invertObject(obj)).toEqual({ 1: 'a', 2: 'b' });
    });

    test('groupByKey should group an array of objects by a specific key', () => {
        const arr = [{ group: 'A', val: 1 }, { group: 'B', val: 2 }, { group: 'A', val: 3 }];
        expect(groupByKey(arr, 'group')).toEqual({
            A: [{ group: 'A', val: 1 }, { group: 'A', val: 3 }],
            B: [{ group: 'B', val: 2 }]
        });
    });

    test('differenceBy should return the difference between two arrays based on a provided function', () => {
        const arr1 = [2.1, 1.2];
        const arr2 = [2.3, 3.4];
        const result = differenceBy(arr1, arr2, Math.floor);
        expect(result).toEqual([1.2]);
    });

    test('flattenObject should flatten a nested object into a single level', () => {
        const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
        expect(flattenObject(obj)).toEqual({ 'b.c': 2, 'b.d.e': 3, a: 1 });
    });

    test('unflattenObject should unflatten a dot-separated object back into a nested object', () => {
        const obj = { 'b.c': 2, 'b.d.e': 3, a: 1 };
        expect(unflattenObject(obj)).toEqual({ a: 1, b: { c: 2, d: { e: 3 } } });
    });

    test('hasKey should check if an object has a specific key', () => {
        const obj = { a: 1 };
        expect(hasKey(obj, 'a')).toBe(true);
        expect(hasKey(obj, 'b')).toBe(false);
    });

    test('mapObject should apply a function to each key-value pair in an object', () => {
        const obj = { a: 1, b: 2 };
        expect(mapObject(obj, val => val * 2)).toEqual({ a: 2, b: 4 });
    });

    test('filterObject should filter an object by its keys or values using a predicate function', () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(filterObject(obj, val => val > 1)).toEqual({ b: 2, c: 3 });
    });

    test('isObjectEmpty should correctly identify empty objects', () => {
        expect(isObjectEmpty({})).toBe(true);
        expect(isObjectEmpty({ a: 1 })).toBe(false);
    });

});
