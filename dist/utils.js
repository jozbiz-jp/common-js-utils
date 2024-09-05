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


// Detects the user's browser language.
function detectLanguage() {
    return navigator.language || navigator.userLanguage;
}

// Detects if the user is on a mobile device.
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Checks if the device supports touch events.
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Checks if the code is running in a browser environment.
function isBrowser() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}

// Checks if the code is running in a Node.js environment.
function isNode() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
}

// Retrieves all query parameters from the current URL as an object.
function getURLParams() {
    return Object.fromEntries(new URLSearchParams(window.location.search).entries());
}

// Retrieves the value of a URL query parameter by its name.
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


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


// Checks if a string is a valid hex color.
function isHexColor(hex) {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

// Generates a random hex color code.
function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Converts a hex color code to an RGB string.
function hexToRGB(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

// Converts an RGB value to a hex color code.
function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Converts a hex color code to HSL format.
function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max != min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}


// Converts a hex color to HSB (Hue, Saturation, Brightness).
function hexToHSB(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length == 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const brightness = max / 255;
    const saturation = max === 0 ? 0 : (max - min) / max;
    let hue = 0;
    if (max !== min) {
        if (max === r) {
            hue = (g - b) / (max - min);
        } else if (max === g) {
            hue = 2 + (b - r) / (max - min);
        } else {
            hue = 4 + (r - g) / (max - min);
        }
        hue *= 60;
        if (hue < 0) hue += 360;
    }
    return [Math.round(hue), Math.round(saturation * 100), Math.round(brightness * 100)];
}

// Determines if a color is closer to white or black for contrast.
function getContrastYIQ(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 >= 128 ? 'black' : 'white';
}


// Parses document cookies into an object.
function parseCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[decodeURIComponent(name)] = decodeURIComponent(value);
        return acc;
    }, {});
}

// Sets a cookie with a specific name, value, and options (expires, path, etc.).
function setCookie(name, value, options = {}) {
    const opts = Object.entries(options).map(([key, val]) => `${key}=${val}`).join('; ');
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${opts}`;
}

// Deletes a cookie by setting its expiration date to the past.
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}


// Smoothly scrolls the window to the top of the page.
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smoothly scrolls the window to a specific element.
function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Checks if an element has a specific CSS class.
function hasClass(element, className) {
    return element.classList.contains(className);
}

// Adds a CSS class to an element.
function addClass(element, className) {
    element.classList.add(className);
}

// Removes a CSS class from an element.
function removeClass(element, className) {
    element.classList.remove(className);
}

// Toggles a class on a DOM element.
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Returns the current scroll position of the window.
function getScrollPosition() {
    return { x: window.pageXOffset, y: window.pageYOffset };
}

// Sets the scroll position of the window.
function setScrollPosition(x, y) {
    window.scrollTo(x, y);
}

// Checks if an element is in the viewport.
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}



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

// Checks if an object is empty (has no own properties).
function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}



// Capitalizes the first letter of a string.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Truncates a string to a specified length, adding an ellipsis if necessary.
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

// Escapes HTML special characters in a string.
function escapeHTML(str) {
    const escapeChars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return str.replace(/[&<>"']/g, char => escapeChars[char]);
}

// Unescapes HTML special characters in a string.
function unescapeHTML(str) {
    const unescapeChars = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" };
    return str.replace(/&(amp|lt|gt|quot|#39);/g, match => unescapeChars[match]);
}

// Copies a string to the clipboard.
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Validates an email address format.
function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Generates a random alphanumeric string of a specified length.
function randomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Checks if a given string is a palindrome.
function isPalindrome(str) {
    const cleanedStr = str.toString().toLowerCase().replace(/[^a-z0-9]/gi, '');
    return cleanedStr?.length > 0 && cleanedStr === cleanedStr.split('').reverse().join('');
}

// Checks if a string is valid JSON.
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

// Returns the ordinal suffix of a given number (e.g., 1st, 2nd, 3rd).
function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Converts a string into a URL-friendly slug.
function generateSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Formats a number as a currency string.
function currencyFormatter(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}

// Converts various values to a boolean (e.g., "true", "1", etc. to true).
function toBoolean(val) {
    return ['true', '1', 'yes', 'on'].includes(String(val).toLowerCase());
}

// Converts a string to kebab-case.
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

// Converts a string to snake_case.
function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
}

// Converts a string to camelCase.
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_ ](.)/g, (match, group1) => group1.toUpperCase());
}

// Capitalizes the first letter of each word in a string.
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Removes HTML tags from a string.
function stripHTML(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
}

// Truncates a string in the middle, keeping the start and end intact.
function truncateMiddle(str, maxLength) {
    if (str.length <= maxLength) return str;
    const half = Math.floor(maxLength / 2);
    return str.slice(0, half) + '...' + str.slice(str.length - half);
}

// Checks if a string is a valid Base64 encoded string.
function isBase64(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}

// Encodes a string into Base64 format.
function encodeBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Decodes a Base64 encoded string.
function decodeBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Returns the plural form of a word based on a given count.
function pluralize(word, count) {
    return count === 1 ? word : `${word}s`;
}

// Removes all whitespace from a string.
function stripWhitespace(str) {
    return str.replace(/\s+/g, '');
}

// Capitalizes the first letter of a string.
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Checks if the length of a string is even.
function isEvenLength(str) {
    return str.length % 2 === 0;
}

// Checks if the length of a string is odd.
function isOddLength(str) {
    return str.length % 2 !== 0;
}

// Reverses the characters in a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}



// Limits the rate at which a function is executed, particularly useful for events like scrolling or resizing.
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Ensures that a function is called at most once in a specified period, useful for rate-limiting events.
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Ensures a function can only be called once.
function once(func) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            func.apply(this, args);
        }
    };
}

// Caches the results of a function to improve performance.
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func.apply(this, args);
        }
        return cache[key];
    };
}

// Generates a random UUID.
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// Creates a download link for a given file and triggers the download.
function downloadFile(filename, content, mimeType = 'text/plain') {
    if (typeof URL.createObjectURL === 'function') {
        const blob = new Blob([content], { type: mimeType });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error('URL.createObjectURL is not supported in this environment.');
    }
}

// Formats a number of bytes as a human-readable string (e.g., KB, MB, GB).
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    const size = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${size} ${sizes[i]}`;
}
