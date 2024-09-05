// Checks if a value is an object.
function isObject(value) {
    return value !== null && typeof value === 'object' && value.constructor === Object;
}

// Creates a deep copy of an object or array to prevent unintended mutations.
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Checks if an object is empty.
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// Deep merges two or more objects into one.
function mergeObjects(...objects) {
    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            } else if (pVal instanceof Object && oVal instanceof Object) {
                prev[key] = mergeObjects(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}

// Checks if two values are deeply equal.
function isEqual(value1, value2) {
    return JSON.stringify(value1) === JSON.stringify(value2);
}


// Recursively freezes an object, making it immutable.
function deepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && obj[prop] !== null) deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
}

// Converts an object to a query string.
function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');
}

// Converts a query string to an object.
function queryStringToObject(queryString) {
    return queryString
        .substring(1)
        .split('&')
        .reduce((acc, pair) => {
            const [key, value] = pair.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value);
            return acc;
        }, {});
}

// Retrieves the value of a nested property in an object safely.
function getNestedValue(obj, path, defaultValue) {
    return path.split('.').reduce((o, p) => (o && o[p] !== undefined ? o[p] : defaultValue), obj);
}

// Converts an array of key-value pairs into an object.
function arrayToObject(arr) {
    return arr.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
}

// Inverts the keys and values of an object.
function invertObject(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

// Groups an array of objects by a specific key.
function groupByKey(arr, key) {
    return arr.reduce((acc, obj) => {
        const keyValue = obj[key];
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(obj);
        return acc;
    }, {});
}

// Returns the difference between two arrays based on a provided function.
function differenceBy(arr1, arr2, fn) {
    const set2 = new Set(arr2.map(fn));
    return arr1.filter(x => !set2.has(fn(x)));
}

// Flattens a nested object into a single level with dot-separated keys.
function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
            acc[pre + k] = obj[k];
        }
        return acc;
    }, {});
}

// Unflattens a dot-separated object back into a nested object.
function unflattenObject(obj) {
    const result = {};

    Object.keys(obj).forEach(key => {
        const keys = key.split('.');
        keys.reduce((acc, cur, idx) => {
            if (idx === keys.length - 1) {
                acc[cur] = obj[key];
            } else {
                acc[cur] = acc[cur] || {};
            }
            return acc[cur];
        }, result);
    });

    return result;
}

// Checks if an object has a specific key.
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

// Applies a function to each key-value pair in an object.
function mapObject(obj, fn) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k, obj)]));
}

// Filters an object by its keys or values using a predicate function.
function filterObject(obj, fn) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn(v, k, obj)));
}


module.exports = {
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
    filterObject
}