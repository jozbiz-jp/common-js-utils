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

module.exports = {
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
}