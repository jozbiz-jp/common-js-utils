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



module.exports = {
    debounce,
    throttle,
    once,
    memoize,
    generateUUID,
    downloadFile,
    formatBytes
}