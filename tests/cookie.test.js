const {
    parseCookies,
    setCookie,
    deleteCookie
} = require("../src/cookie");

describe('Cookie Utility Functions', () => {

    beforeEach(() => {
        // Reset the document.cookie before each test
        document.cookie = '';
    });

    test('parseCookies should correctly parse document cookies into an object', () => {
        // Simulate setting cookies
        document.cookie = 'name=JohnDoe';
        document.cookie = 'age=30';
        document.cookie = 'city=NewYork';

        const cookies = parseCookies();
        expect(cookies).toEqual({
            name: 'JohnDoe',
            age: '30',
            city: 'NewYork'
        });
    });

    test('setCookie should set a cookie with a specific name, value, and options', () => {
        // Mock document.cookie
        let cookieStorage = '';
        
        Object.defineProperty(document, 'cookie', {
            get: () => cookieStorage,
            set: (cookie) => {
                cookieStorage += `${cookie}; `;
            },
            configurable: true,
        });
    
        // Call the function to set a cookie
        setCookie('username', 'JohnDoe', { expires: 'Fri, 31 Dec 9999 23:59:59 GMT', path: '/' });
    
        // Check if the cookie was set correctly
        expect(document.cookie).toContain('username=JohnDoe');
        expect(document.cookie).toContain('expires=Fri, 31 Dec 9999 23:59:59 GMT');
    });

    test('deleteCookie should correctly delete a cookie by setting its expiration date to the past', () => {
        let cookieStorage = '';
    
        // Mock `document.cookie` to simulate the browser cookie behavior
        Object.defineProperty(document, 'cookie', {
            get: () => cookieStorage,
            set: (cookie) => {
                const [cookieName] = cookie.split('=');
                if (cookie.includes('expires=Thu, 01 Jan 1970')) {
                    cookieStorage = cookieStorage.replace(new RegExp(`${cookieName}=[^;]*;?`), '');
                } else {
                    cookieStorage += cookie + '; ';
                }
            },
            configurable: true,
        });
    
        // Set a cookie first
        setCookie('username', 'JohnDoe');
    
        // Check if the cookie was set correctly
        expect(document.cookie).toContain('username=JohnDoe');
    
        // Delete the cookie
        deleteCookie('username');
    
        // Check if the cookie was deleted
        expect(document.cookie).not.toContain('username=JohnDoe');
    });

});
