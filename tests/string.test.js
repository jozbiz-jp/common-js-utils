const {
    capitalize,
    truncateString,
    escapeHTML,
    unescapeHTML,
    copyToClipboard,
    isEmailValid,
    randomString,
    isPalindrome,
    isValidJSON,
    getOrdinalSuffix,
    generateSlug,
    currencyFormatter,
    toBoolean,
    toKebabCase,
    toSnakeCase,
    toCamelCase,
    capitalizeWords,
    stripHTML,
    truncateMiddle,
    isBase64,
    encodeBase64,
    decodeBase64,
    pluralize,
    stripWhitespace,
    capitalizeFirstLetter,
    isEvenLength,
    isOddLength,
    reverseString
} = require("../src/string");

describe('String Utility Functions', () => {

    test('capitalize should capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('Hello')).toBe('Hello');
        expect(capitalize('')).toBe('');
    });

    test('truncateString should truncate a string and add ellipsis if necessary', () => {
        expect(truncateString('Hello, world!', 5)).toBe('Hello...');
        expect(truncateString('Hello', 10)).toBe('Hello');
    });

    test('escapeHTML should escape HTML special characters in a string', () => {
        expect(escapeHTML('<div>"Hello" & \'world\'</div>')).toBe('&lt;div&gt;&quot;Hello&quot; &amp; &#39;world&#39;&lt;/div&gt;');
    });

    test('unescapeHTML should unescape HTML special characters in a string', () => {
        expect(unescapeHTML('&lt;div&gt;&quot;Hello&quot; &amp; &#39;world&#39;&lt;/div&gt;')).toBe('<div>"Hello" & \'world\'</div>');
    });

    test('copyToClipboard should copy text to the clipboard', () => {
        // Mock document.createElement to return a valid mock element
        const mockInputElement = {
            value: '',
            select: jest.fn(),
        };
        jest.spyOn(document, 'createElement').mockImplementation(() => mockInputElement);
    
        // Mock document.body.appendChild and removeChild
        const mockAppendChild = jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
        const mockRemoveChild = jest.spyOn(document.body, 'removeChild').mockImplementation(() => {});
    
        // Mock document.execCommand to simulate clipboard copy
        document.execCommand = jest.fn().mockImplementation(() => true);
    
        // Call the function to copy text
        copyToClipboard('test');
    
        // Assertions
        expect(document.createElement).toHaveBeenCalledWith('input');
        expect(mockInputElement.select).toHaveBeenCalled(); // Check if select was called on the input
        expect(document.execCommand).toHaveBeenCalledWith('copy'); // Ensure copy command was executed
        expect(mockAppendChild).toHaveBeenCalled(); // Ensure element was added to the DOM
        expect(mockRemoveChild).toHaveBeenCalled(); // Ensure element was removed from the DOM
    
        // Restore mocks
        jest.restoreAllMocks();
    });

    test('isEmailValid should validate an email address format', () => {
        expect(isEmailValid('test@example.com')).toBe(true);
        expect(isEmailValid('invalid-email')).toBe(false);
    });

    test('randomString should generate a random alphanumeric string of specified length', () => {
        const str = randomString(10);
        expect(str).toHaveLength(10);
        expect(/^[A-Za-z0-9]+$/.test(str)).toBe(true);
    });

    test('isPalindrome should check if a string is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    });

    test('isValidJSON should check if a string is valid JSON', () => {
        expect(isValidJSON('{"key": "value"}')).toBe(true);
        expect(isValidJSON('invalid-json')).toBe(false);
    });

    test('getOrdinalSuffix should return the ordinal suffix of a given number', () => {
        expect(getOrdinalSuffix(1)).toBe('1st');
        expect(getOrdinalSuffix(2)).toBe('2nd');
        expect(getOrdinalSuffix(3)).toBe('3rd');
        expect(getOrdinalSuffix(4)).toBe('4th');
        expect(getOrdinalSuffix(11)).toBe('11th');
        expect(getOrdinalSuffix(21)).toBe('21st');
    });

    test('generateSlug should convert a string into a URL-friendly slug', () => {
        expect(generateSlug('Hello World!')).toBe('hello-world');
        expect(generateSlug('   Remove spaces   ')).toBe('remove-spaces');
        expect(generateSlug('Special @#$%^&* Characters')).toBe('special-characters');
    });

    test('currencyFormatter should format a number as a currency string', () => {
        expect(currencyFormatter(1234.56)).toBe('$1,234.56');
        expect(currencyFormatter(1234.56, 'EUR')).toBe('€1,234.56');
    });

    test('toBoolean should convert various values to a boolean', () => {
        expect(toBoolean('true')).toBe(true);
        expect(toBoolean('1')).toBe(true);
        expect(toBoolean('yes')).toBe(true);
        expect(toBoolean('false')).toBe(false);
        expect(toBoolean('0')).toBe(false);
    });

    test('toKebabCase should convert a string to kebab-case', () => {
        expect(toKebabCase('helloWorld')).toBe('hello-world');
        expect(toKebabCase('Hello World')).toBe('hello-world');
    });

    test('toSnakeCase should convert a string to snake_case', () => {
        expect(toSnakeCase('helloWorld')).toBe('hello_world');
        expect(toSnakeCase('Hello World')).toBe('hello_world');
    });

    test('toCamelCase should convert a string to camelCase', () => {
        expect(toCamelCase('hello-world')).toBe('helloWorld');
        expect(toCamelCase('Hello World')).toBe('helloWorld');
    });

    test('capitalizeWords should capitalize the first letter of each word in a string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
        expect(capitalizeWords('capitalize each word')).toBe('Capitalize Each Word');
    });

    test('stripHTML should remove HTML tags from a string', () => {
        expect(stripHTML('<div>Hello <b>world</b></div>')).toBe('Hello world');
    });

    test('truncateMiddle should truncate a string in the middle, keeping the start and end intact', () => {
        expect(truncateMiddle('Hello, world!', 5)).toBe('He...d!');
        expect(truncateMiddle('short', 10)).toBe('short');
    });

    test('isBase64 should check if a string is a valid Base64 encoded string', () => {
        expect(isBase64('SGVsbG8gd29ybGQ=')).toBe(true);
        expect(isBase64('invalid-base64')).toBe(false);
    });

    test('encodeBase64 should encode a string into Base64 format', () => {
        expect(encodeBase64('Hello world')).toBe('SGVsbG8gd29ybGQ=');
    });

    test('decodeBase64 should decode a Base64 encoded string', () => {
        expect(decodeBase64('SGVsbG8gd29ybGQ=')).toBe('Hello world');
    });

    test('pluralize should return the plural form of a word based on a given count', () => {
        expect(pluralize('cat', 1)).toBe('cat');
        expect(pluralize('cat', 2)).toBe('cats');
    });

    test('stripWhitespace should remove all whitespace from a string', () => {
        expect(stripWhitespace('  Hello   world  ')).toBe('Helloworld');
    });

    test('capitalizeFirstLetter should capitalize the first letter of a string', () => {
        expect(capitalizeFirstLetter('hello')).toBe('Hello');
        expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });

    test('isEvenLength should check if the length of a string is even', () => {
        expect(isEvenLength('abcd')).toBe(true);
        expect(isEvenLength('abc')).toBe(false);
    });

    test('isOddLength should check if the length of a string is odd', () => {
        expect(isOddLength('abcd')).toBe(false);
        expect(isOddLength('abc')).toBe(true);
    });

    test('reverseString should reverse the characters in a string', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('')).toBe('');
    });

});
