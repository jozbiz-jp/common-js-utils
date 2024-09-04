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


module.exports = {
    parseCookies,
    setCookie,
    deleteCookie
}