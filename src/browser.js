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


module.exports = {
    detectLanguage,
    isMobileDevice,
    isTouchDevice,
    isBrowser,
    isNode,
    getURLParams,
    getQueryParam
}