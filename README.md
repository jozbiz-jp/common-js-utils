# JavaScript Common Utility Functions Library

A comprehensive collection of JavaScript util functions I regularly use in my projects. 
This library is modular, allowing you to import only what you need or the entire library.


# Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Utilities List](#utilities-list)
  - [Array Utilities](#array-utilities)
  - [Object Utilities](#object-utilities)
  - [String Utilities](#string-utilities)
  - [Browser Utilities](#browser-utilities)
  - [Calendar Utilities](#calendar-utilities)
  - [Color Utilities](#color-utilities)
  - [Cookie Utilities](#cookie-utilities)
  - [DOM Utilities](#dom-utilities)
  - [Math Utilities](#math-utilities)
  - [Other Utilities](#other-utilities)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)

## Usage

You can set the utils up in any of the following 3 ways:


1. Import Individual File via <script> Tag or ES Module Import

**Script Tag:**
```html
<script src="path/to/array.js"></script>
<script src="path/to/object.js"></script>
```

**JavaScript (ES Module):**
```javascript
import { someArrayFunction } from './path/to/array.js';
import { someObjectFunction } from './path/to/object.js';
```

2. Import Single Minified File via <script> Tag

You can also include the entire set of utilities in a single minified file using the following <script> tag. All utility functions will be available globally in your project. You can find this file in the dist/ folder of this repo.

**Script Tag:**
```html
<script src="path/to/utils.min.js"></script>
```

3. Install via NPM
You can install the utilities as an npm package for easy integration into Node.js or browser-based JavaScript projects.

```bash
npm install @jozbiz-jp/common-js-utils
```

Then import the necessary functions into your project:
```javascript
const { someArrayFunction, someObjectFunction } = require('@jozbiz-jp/common-js-utils');
```

In case of ES Module:
```javascript
import { someArrayFunction, someObjectFunction } from '@jozbiz-jp/common-js-utils';
```

For example:
```javascript
import { getOrdinalSuffix } from "@jozbiz-jp/common-js-utils";
getOrdinalSuffix(21) // 21st
```

## Utilities List

### Array Utilities

- uniqueArray(arr)
    Description: Removes duplicate elements from an array.
    Usage:
    ``` javascript
    const arr = [1, 2, 2, 3];
    const unique = uniqueArray(arr); // [1, 2, 3]
    ```

- flattenArray(arr)
    Description: Flattens a multi-dimensional array into a single-dimensional array.
    Usage:
    ```javascript
    const nested = [1, [2, 3], [[4]]];
    const flat = flattenArray(nested); // [1, 2, 3, 4]
    ```

- arrayChunk(arr, size)
    Description: Splits an array into chunks of a specified size.
    Usage:
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const chunked = arrayChunk(arr, 2); // [[1, 2], [3, 4], [5]]
    ```

- arrayIntersection(arr1, arr2)
    Description: Returns the intersection of two arrays.
    Usage:
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const intersection = arrayIntersection(arr1, arr2); // [2, 3]
    ```

- groupBy(array, key)
    Description: Groups an array of objects by a specified key.
    Usage:
    ```javascript
    const arr = [{ age: 20 }, { age: 30 }];
    const grouped = groupBy(arr, 'age');  // { 20: [{ age: 20 }], 30: [{ age: 30 }] }
    ```

- getRandomItemFromArray(arr)
    Description: Returns a random item from an array.
    Usage:
    ```javascript
    const arr = [1, 2, 3];
    const randomItem = getRandomItemFromArray(arr); // e.g., 2
    ```

- shuffleArray(arr)
    Description: Shuffles an array randomly.
    Usage:
    ```javascript
    const arr = [1, 2, 3];
    const shuffled = shuffleArray(arr); // e.g., [3, 1, 2]
    ```

- difference(arr1, arr2)
    Description: Returns the elements in the first array that are not present in the second array.
    Usage:
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3];
    const diff = difference(arr1, arr2); // [1]
    ```

- sum(arr)
    Description: Returns the sum of an array of numbers.
    Usage:
    ```javascript
    const arr = [1, 2, 3];
    const total = sum(arr); // 6
    ```

- average(arr)
    Description: Returns the average of an array of numbers.
    Usage:
    ```javascript
    const arr = [1, 2, 3];
    const avg = average(arr); // 2
    ```

- arrayToCSV(arr)
    Description: Converts a two-dimensional array into a CSV string.
    Usage:
    ```javascript
    const arr = [['a', 'b'], ['c', 'd']];
    arrayToCSV(arr) // "a","b"\n"c","d"'
    ```

- csvToArray(csvString)
    Description: Parses a CSV string into a two-dimensional array.
    Usage:
    ```javascript
    const csvString = '"a","b"\n"c","d"';
    csvToArray(csvString) // [['a', 'b'], ['c', 'd']];
    ```

- mergeArrays(arr1, arr2)
    Description: Merges two arrays, removing duplicates.
    Usage:
    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    mergeArrays(arr1, arr2)  // [1, 2, 3, 4];
    ```

- removeNulls(arr)
    Description: Removes all null values from an array.
    Usage:
    ```javascript
    const arr = [1, null, 2, null, 3];
    removeNulls(arr) // [1, 2, 3];
    ```

- objectToArray(obj)
    Description: Converts an object into an array of key-value pairs.
    Usage:
    ```javascript
    const obj = { a: 1, b: 2 };
    objectToArray(obj) // [['a', 1], ['b', 2]];
    ```

- findIndexBy(arr, fn)
    Description: Finds the index of an element in an array based on a predicate function.
    Usage:
    ```javascript
    const arr = [1, 2, 3, 4];
    findIndexBy(arr, x => x === 3) // 2;
    findIndexBy(arr, x => x === 5) // -1;
    ```

- filterByType(arr, type)
    Description: Filters an array by a specific data type.
    Usage:
    ```javascript
    const arr = [1, 'two', 3, true];
    filterByType(arr, 'number') // [1, 3];
    filterByType(arr, 'string') // ['two'];
    ```

### String Utilities

- capitalize(str)
    Description: Capitalizes the first letter of a string.
    Usage:
    ```javascript
    const result = capitalize('hello'); // 'Hello'
    ```

- truncateString(str, num)
    Description: Truncates a string to a specified length, adding an ellipsis if necessary.
    Usage:
    ```javascript
    const result = truncateString('Hello world', 5); // 'Hello...'
    ```

- escapeHTML(str)
    Description: Escapes HTML special characters in a string.
    Usage:
    ```javascript
    const escaped = escapeHTML('<div>Hello</div>'); // '&lt;div&gt;Hello&lt;/div&gt;'
    ```

- unescapeHTML(str)
    Description: Unescapes HTML special characters in a string.
    Usage:
    ```javascript
    const unescaped = unescapeHTML('&lt;div&gt;Hello&lt;/div&gt;'); // '<div>Hello</div>'
    ```

- copyToClipboard(text)
    Description: Copies a string to the clipboard.
    Usage:
    ```javascript
    copyToClipboard('Hello world'); // Copies 'Hello world' to the clipboard
    ```

- isEmailValid(email)
    Description: Validates an email address format.
    Usage:
    ```javascript
    const valid = isEmailValid('test@example.com'); // true
    ```

- randomString(length)
    Description: Generates a random alphanumeric string of a specified length.
    Usage:
    ```javascript
    const randomStr = randomString(8); // e.g., 'A1b2C3d4'
    ```

- isPalindrome(str)
    Description: Checks if a given string is a palindrome.
    Usage:
    ```javascript
    const result = isPalindrome('madam'); // true
    ```

- isValidJSON(str)
    Description: Checks if a string is valid JSON.
    Usage:
    ```javascript
    const valid = isValidJSON('{"name": "John"}'); // true
    ```

- getOrdinalSuffix(n)
    Description: Returns the ordinal suffix of a given number (e.g., 1st, 2nd, 3rd).
    Usage:
    ```javascript
    const suffix = getOrdinalSuffix(1); // '1st'
    const suffix2 = getOrdinalSuffix(22); // '22nd'
    ```

- generateSlug(str)
    Description: Converts a string into a URL-friendly slug.
    Usage:
    ```javascript
    const slug = generateSlug('Hello World!'); // 'hello-world'
    ```

- currencyFormatter(amount, currency = 'USD', locale = 'en-US')
    Description: Formats a number as a currency string.
    Usage:
    ```javascript
    const formatted = currencyFormatter(1234.56); // '$1,234.56'
    const formatted2 = currencyFormatter(1234.56, 'EUR', 'de-DE'); // '1.234,56 €'
    ```

- toBoolean(val)
    Description: Converts various values to a boolean (e.g., "true", "1", etc. to true).
    Usage:
    ```javascript
    const bool = toBoolean('true'); // true
    const bool2 = toBoolean('0'); // false
    ```

- toKebabCase(str)
    Description: Converts a string to kebab-case.
    Usage:
    ```javascript
    const kebab = toKebabCase('Hello World'); // 'hello-world'
    ```

- toSnakeCase(str)
    Description: Converts a string to snake_case.
    Usage:
    ```javascript
    const snake = toSnakeCase('Hello World'); // 'hello_world'
    ```

- toCamelCase(str)
    Description: Converts a string to camelCase.
    Usage:
    ```javascript
    const camel = toCamelCase('hello world'); // 'helloWorld'
    ```

- capitalizeWords(str)
    Description: Capitalizes the first letter of each word in a string.
    Usage:
    ```javascript
    const capitalized = capitalizeWords('hello world'); // 'Hello World'
    ```

- stripHTML(html)
    Description: Removes HTML tags from a string.
    Usage:
    ```javascript
    const stripped = stripHTML('<div>Hello</div>'); // 'Hello'
    ```

- truncateMiddle(str, maxLength)
    Description: Truncates a string in the middle, keeping the start and end intact.
    Usage:
    ```javascript
    const truncated = truncateMiddle('Hello World', 5); // 'He...ld'
    ```

- isBase64(str)
    Description: Checks if a string is a valid Base64 encoded string.
    Usage:
    ```javascript
    const isValidBase64 = isBase64('SGVsbG8gd29ybGQ='); // true
    ```

- encodeBase64(str)
    Description: Encodes a string into Base64 format.
    Usage:
    ```javascript
    const encoded = encodeBase64('Hello world'); // 'SGVsbG8gd29ybGQ='
    ```

- decodeBase64(str)
    Description: Decodes a Base64 encoded string.
    Usage:
    ```javascript
    const decoded = decodeBase64('SGVsbG8gd29ybGQ='); // 'Hello world'
    ```

- pluralize(word, count)
    Description: Returns the plural form of a word based on a given count.
    Usage:
    ```javascript
    const plural = pluralize('apple', 2); // 'apples'
    const singular = pluralize('apple', 1); // 'apple'
    ```

- stripWhitespace(str)
    Description: Removes all whitespace from a string.
    Usage:
    ```javascript
    const stripped = stripWhitespace('  Hello   World  '); // 'HelloWorld'
    ```

- capitalizeFirstLetter(str)
    Description: Capitalizes the first letter of a string.
    Usage:
    ```javascript
    const capitalized = capitalizeFirstLetter('hello'); // 'Hello'
    ```

- isEvenLength(str)
    Description: Checks if the length of a string is even.
    Usage:
    ```javascript
    const isEven = isEvenLength('test'); // true
    const isOdd = isEvenLength('hello'); // false
    ```

- isOddLength(str)
    Description: Checks if the length of a string is odd.
    Usage:
    ```javascript
    const isOdd = isOddLength('test'); // false
    const isOdd2 = isOddLength('hello'); // true
    ```

- reverseString(str)
    Description: Reverses the characters in a string.
    Usage:
    ```javascript
    const reversed = reverseString('hello'); // 'olleh'
    ```


### Object Utilities

- isObject(value)
    Description: Checks if a value is an object.
    Usage:
    ```javascript
    const result = isObject({}); // true
    const result2 = isObject(null); // false
    ```

- deepClone(obj)
    Description: Creates a deep copy of an object or array to prevent unintended mutations.
    Usage:
    ```javascript
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj); // { a: 1, b: { c: 2 } }
    ```

- isEmptyObject(obj)
    Description: Checks if an object is empty.
    Usage:
    ```javascript
    const obj = {};
    const isEmpty = isEmptyObject(obj); // true
    ```

- mergeObjects(...objects)
    Description: Deep merges two or more objects into one.
    Usage:
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const merged = mergeObjects(obj1, obj2); // { a: 1, b: 2 }
    ```

- isEqual(value1, value2)
    Description: Checks if two values are deeply equal.
    Usage:
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const equal = isEqual(obj1, obj2); // true
    ```

- deepFreeze(obj)
    Description: Recursively freezes an object, making it immutable.
    Usage:
    ```javascript
    const obj = { a: 1, b: { c: 2 } };
    deepFreeze(obj); // Object is now immutable
    ```

- objectToQueryString(obj)
    Description: Converts an object to a query string.
    Usage:
    ```javascript
    const obj = { name: 'John Doe', age: 30 };
    objectToQueryString(obj) // name=John%20Doe&age=30
    ```

- queryStringToObject(queryString)
    Description: Converts a query string to an object.
    Usage:
    ```javascript
    const queryString = '?name=John%20Doe&age=30';
    queryStringToObject(queryString) // { name: 'John Doe', age: '30' }
    ```

- getNestedValue(obj, path, defaultValue)
    Description: Retrieves the value of a nested property in an object safely.
    Usage:
    ```javascript
    const obj = { a: { b: 1 } };
    const value = getNestedValue(obj, 'a.b', 0); // 1
    ```

- arrayToObject(arr)
    Description: Converts an array of key-value pairs into an object.
    Usage:
    ```javascript
    const arr = [['a', 1], ['b', 2]];
    arrayToObject(arr) // { a: 1, b: 2 };
    ```

- invertObject(obj)
    Description: Inverts the keys and values of an object.
    Usage:
    ```javascript
    const obj = { a: 1, b: 2 };
    const inverted = invertObject(obj); // { 1: 'a', 2: 'b' }
    ```

- groupByKey(arr, key)
    Description: Groups an array of objects by a specific key.
    Usage:
    ```javascript
    const arr = [{ group: 'A', val: 1 }, { group: 'B', val: 2 }, { group: 'A', val: 3 }];
    groupByKey(arr, 'group')
    // {
    //    A: [{ group: 'A', val: 1 }, { group: 'A', val: 3 }], B: [{ group: 'B', val: 2 }]
    // }
    ```

- differenceBy(arr1, arr2, fn)
    Description: Returns the difference between two arrays based on a provided function.
    Usage:
    ```javascript
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const result = differenceBy(arr1, arr2, Math.floor); // [1.2]
    ```

- flattenObject(obj)
    Description: Flattens a nested object into a single level with dot-separated keys.
    Usage:
    ```javascript
    const obj = { a: { b: 1 } };
    const flat = flattenObject(obj); // { 'a.b': 1 }
    ```

- unflattenObject(obj)
    Description: Unflattens a dot-separated object back into a nested object.
    Usage:
    ```javascript
    const flat = { 'a.b': 1 };
    const nested = unflattenObject(flat); // { a: { b: 1 } }
    ```

- hasKey(obj, key)
    Description: Checks if an object has a specific key.
    Usage:
    ```javascript
    const obj = { a: 1 };
    hasKey(obj, 'a') // true
    ```

- mapObject(obj, fn)
    Description: Applies a function to each key-value pair in an object.
    Usage:
    ```javascript
    const obj = { a: 1, b: 2 };
    mapObject(obj, val => val * 2) // { a: 2, b: 4 }
    ```

- filterObject(obj, fn)
    Description: Filters an object by its keys or values using a predicate function.
    Usage:
    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    filterObject(obj, val => val > 1) // { b: 2, c: 3 });
    ```

###  Browser Utilities
- detectLanguage()
    Description: Detects the user's browser language.
    Usage:
    ```javascript
    const language = detectLanguage(); // 'en-US'
    ```

- isMobileDevice()
    Description: Detects if the user is on a mobile device.
    Usage:
    ```javascript
    const isMobile = isMobileDevice(); // true or false
    ```

- isTouchDevice()
    Description: Checks if the device supports touch events.
    Usage:
    ```javascript
    const isTouch = isTouchDevice(); // true or false
    ```

- isBrowser()
    Description: Checks if the code is running in a browser environment.
    Usage:
    ```javascript
    const isInBrowser = isBrowser(); // true or false
    ```

- isNode()
    Description: Checks if the code is running in a Node.js environment.
    Usage:
    ```javascript
    const isInNode = isNode(); // true or false
    ```

- getURLParams()
    Description: Retrieves all query parameters from the current URL as an object.
    Usage:
    ```javascript
    const params = getURLParams(); // { name: 'John', age: '30' }
    ```

- getQueryParam(name)
    Description: Retrieves the value of a URL query parameter by its name.
    Usage:
    ```javascript
    const param = getQueryParam('name'); // 'John'
    ```

###  Calendar Utilities
- isValidDate(dateString)
    Description: Checks if a date string is valid.
    Usage:
    ```javascript
    const valid = isValidDate('2024-02-29'); // true
    const invalid = isValidDate('2024-02-30'); // false
    ```

- secondsToTime(seconds)
    Description: Converts seconds into a time string (HH:MM).
    Usage:
    ```javascript
    const time = secondsToTime(3661); // '01:01:01'
    ```

- timeToSeconds(timeString)
    Description: Converts a time string (HH:MM) into seconds.
    Usage:
    ```javascript
    const seconds = timeToSeconds('01:01:01'); // 3661
    ```

- getDaysBetweenDates(date1, date2)
    Description: Calculates the number of days between two dates.
    Usage:
    ```javascript
    const days = getDaysBetweenDates(new Date('2023-01-01'), new Date('2023-01-10')); // 9
    ```

- isLeapYear(year)
    Description: Checks if a given year is a leap year.
    Usage:
    ```javascript
    const result = isLeapYear(2024); // true
    ```

- getCurrentTimestamp()
    Description: Returns the current timestamp in milliseconds.
    Usage:
    ```javascript
    const timestamp = getCurrentTimestamp(); // e.g., 1609459200000
    ```


###  Color Utilities
- isHexColor(hex)
    Description: Checks if a string is a valid hex color.
    Usage:
    ```javascript
    const validHex = isHexColor('#ff5733'); // true
    const invalidHex = isHexColor('ff5733'); // false
    ```

- randomColor()
    Description: Generates a random hex color code.
    Usage:
    ```javascript
    const color = randomColor(); // e.g., '#a1b2c3'
    ```

- hexToRGB(hex)
    Description: Converts a hex color code to an RGB string.
    Usage:
    ```javascript
    const rgb = hexToRGB('#ff5733'); // 'rgb(255, 87, 51)'
    ```

- rgbToHex(r, g, b)
    Description: Converts an RGB value to a hex color code.
    Usage:
    ```javascript
    const hex = rgbToHex(255, 87, 51); // '#FF5733'
    ```

- hexToHSL(hex)
    Description: Converts a hex color code to HSL format.
    Usage:
    ```javascript
    const hsl = hexToHSL('#ff5733'); // [9, 100, 60]
    ```

- hexToHSB(hex)
    Description: Converts a hex color to HSB (Hue, Saturation, Brightness).
    Usage:
    ```javascript
    const hsb = hexToHSB('#ff5733'); // [9, 80, 100]
    ```

- getContrastYIQ(hex)
    Description: Determines if a color is closer to white or black for contrast.
    Usage:
    ```javascript
    const contrast = getContrastYIQ('#ff5733'); // 'black'
    ```

###  Cookie Utilities
- parseCookies()
    Description: Parses document cookies into an object.
    Usage:
    ```javascript
    // Assuming document.cookie = "username=JohnDoe; sessionId=12345";
    const cookies = parseCookies(); 
    // { username: 'JohnDoe', sessionId: '12345' }
    ```

- setCookie(name, value, options = {})
    Description: Sets a cookie with a specific name, value, and options (such as expires, path, etc.).
    Usage:
    ```javascript
    // Set a cookie with a name, value, and options
    setCookie('username', 'JohnDoe', { expires: 'Fri, 31 Dec 9999 23:59:59 GMT', path: '/' });
    ```

- deleteCookie(name)
    Description: Deletes a cookie by setting its expiration date to the past.
    Usage:
    ```javascript
    // Delete a cookie by its name
    deleteCookie('username');
    // Cookie 'username' is now deleted
    ```

###  DOM Utilities
- scrollToTop()
    Description: Smoothly scrolls the window to the top of the page.
    Usage:
    ```javascript
    // Scrolls to the top of the page smoothly
    scrollToTop();
    ```

- scrollToElement(element)
    Description: Smoothly scrolls the window to a specific element.
    Usage:
    ```javascript
    const element = document.querySelector('#section');
    // Scrolls to the specific element smoothly
    scrollToElement(element);
    ```

- hasClass(element, className)
    Description: Checks if an element has a specific CSS class.
    Usage:
    ```javascript
    const element = document.querySelector('.my-element');
    const hasMyClass = hasClass(element, 'active'); // true or false
    ```

- addClass(element, className)
    Description: Adds a CSS class to an element.
    Usage:
    ```javascript
    const element = document.querySelector('.my-element');
    // Adds the class 'active' to the element
    addClass(element, 'active');
    ```

- removeClass(element, className)
    Description: Removes a CSS class from an element.
    Usage:
    ```javascript
    const element = document.querySelector('.my-element');
    // Removes the class 'active' from the element
    removeClass(element, 'active');
    ```

- toggleClass(element, className)
    Description: Toggles a class on a DOM element.
    Usage:
    ```javascript
    const element = document.querySelector('.my-element');
    // Toggles the class 'active' on the element
    toggleClass(element, 'active');
    ```

- getScrollPosition()
    Description: Returns the current scroll position of the window.
    Usage:
    ```javascript
    const scrollPos = getScrollPosition(); // { x: 0, y: 250 }
    ```

- setScrollPosition(x, y)
    Description: Sets the scroll position of the window to specific coordinates.
    Usage:
    ```javascript
    // Scrolls the window to x: 0, y: 300
    setScrollPosition(0, 300);
    ```

- isInViewport(element)
    Description: Checks if an element is in the viewport.
    Usage:
    ```javascript
    const element = document.querySelector('.my-element');
    const inViewport = isInViewport(element); // true or false
    ```

###  Math Utilities
- randomInt(min, max)
    Description: Generates a random integer between two values, inclusive.
    Usage:
    ```javascript
    const random = randomInt(1, 10); // e.g., 7
    ```

- getRandomFloat(min, max)
    Description: Returns a random float between two values.
    Usage:
    ```javascript
    const randomFloat = getRandomFloat(1.5, 5.5); // e.g., 3.47
    ```

- isPrime(num)
    Description: Checks if a number is prime.
    Usage:
    ```javascript
    const result = isPrime(7); // true
    const result2 = isPrime(4); // false
    ```

- factorial(n)
    Description: Calculates the factorial of a number.
    Usage:
    ```javascript
    const result = factorial(5); // 120
    ```

- clamp(num, min, max)
    Description: Clamps a number between a minimum and maximum value.
    Usage:
    ```javascript
    const clamped = clamp(10, 1, 5); // 5
    ```

- roundToDecimalPlace(num, decimalPlaces)
    Description: Rounds a number to a specified number of decimal places.
    Usage:
    ```javascript
    const rounded = roundToDecimalPlace(1.005, 2); // 1.01
    ```

- isEven(num)
    Description: Checks if a number is even.
    Usage:
    ```javascript
    const even = isEven(4); // true
    ```

- isOdd(num)
    Description: Checks if a number is odd.
    Usage:
    ```javascript
    const odd = isOdd(5); // true
    ```

###  Other Utilities
- debounce(func, wait)
    Description: Limits the rate at which a function is executed, particularly useful for events like scrolling or resizing.
    Usage:
    ```javascript
    const debouncedFunction = debounce(() => console.log('Executed'), 300);
    window.addEventListener('scroll', debouncedFunction); // Logs only after scrolling stops for 300ms
    ```

- throttle(func, limit)
    Description: Ensures that a function is called at most once in a specified period, useful for rate-limiting events.
    Usage:
    ```javascript
    const throttledFunction = throttle(() => console.log('Executed'), 1000);
    window.addEventListener('scroll', throttledFunction); // Executes function at most once every 1 second
    ```

- once(func)
    Description: Ensures a function can only be called once.
    Usage:
    ```javascript
    const callOnce = once(() => console.log('This will run only once'));
    callOnce(); // Logs 'This will run only once'
    callOnce(); // No output
    ```

- memoize(func)
    Description: Caches the results of a function to improve performance.
    Usage:
    ```javascript
    const slowFunction = (num) => {
        console.log('Calculating...');
        return num * 2;
    };
    const memoizedFunction = memoize(slowFunction);
    memoizedFunction(5); // Logs 'Calculating...' and returns 10
    memoizedFunction(5); // Returns 10 from cache without logging
    ```

- generateUUID()
    Description: Generates a random UUID (Universally Unique Identifier).
    Usage:
    ```javascript
    const uuid = generateUUID(); // e.g., 'b7e7c8d6-933d-4f0e-9b5d-0d6abec13dbf'
    ```

- downloadFile(filename, content, mimeType = 'text/plain')
    Description: Creates a download link for a given file and triggers the download.
    Usage:
    ```javascript
    const content = 'Hello, world!';
    downloadFile('hello.txt', content, 'text/plain'); // Triggers download of a file 'hello.txt' with the content 'Hello, world!'
    ```

- formatBytes(bytes, decimals = 2)
    Description: Formats a number of bytes as a human-readable string (e.g., KB, MB, GB).
    Usage:
    ```javascript
    const formatted = formatBytes(1024); // '1.00 KB'
    const formattedLarge = formatBytes(1048576); // '1.00 MB'
    ```


## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for more information.

## Testing
Add tests for your changes in the tests directory using Jest, and confirm the test cases passing by:
```bash
npm test
```
Ensure that all tests pass before submitting your PR.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
