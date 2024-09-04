const {
    detectLanguage,
    isMobileDevice,
    isTouchDevice,
    isBrowser,
    isNode,
    getURLParams,
    getQueryParam
} = require("../src/browser");

describe('Environment and Browser Utility Functions', () => {

    test('detectLanguage should detect the user\'s browser language', () => {
        global.navigator = {
            language: 'en-US',
        };
    
        expect(detectLanguage()).toBe('en-US');
    });

    test('isMobileDevice should correctly detect if the user is on a mobile device', () => {
        // Mock for a mobile user agent
        Object.defineProperty(global.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            configurable: true
        });
        expect(isMobileDevice()).toBe(true); // Should return true for mobile device
    
        // Mock for a desktop user agent
        Object.defineProperty(global.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
            configurable: true
        });
        expect(isMobileDevice()).toBe(false); // Should return false for non-mobile device
    });

    test('isTouchDevice should correctly detect if the device supports touch events', () => {
        // Mocking navigator.maxTouchPoints
        Object.defineProperty(navigator, 'maxTouchPoints', {
            value: 5,
            configurable: true,
            writable: true,
        });
    
        expect(isTouchDevice()).toBe(true); // Should return true for devices with touch support
    
        // Change the mock to simulate a non-touch device
        Object.defineProperty(navigator, 'maxTouchPoints', {
            value: 0,
        });
    
        expect(isTouchDevice()).toBe(false); // Should return false for non-touch devices
    });

    test('isBrowser should correctly check if the code is running in a browser environment', () => {
        expect(isBrowser()).toBe(true);

        const originalWindow = global.window;
        delete global.window;
        expect(isBrowser()).toBe(false);
        global.window = originalWindow;
    });

    test('isNode should correctly check if the code is running in a Node.js environment', () => {
        expect(isNode()).toBe(true);

        const originalProcess = global.process;
        delete global.process;
        expect(isNode()).toBe(false);
        global.process = originalProcess;
    });

    test('getURLParams should retrieve all query parameters from the current URL', () => {
        const mockLocation = {
            search: '?name=JohnDoe&age=30'
        };
        delete global.window.location;
        global.window.location = mockLocation;

        expect(getURLParams()).toEqual({ name: 'JohnDoe', age: '30' });
    });

    test('getQueryParam should retrieve the value of a URL query parameter by its name', () => {
        const mockLocation = {
            search: '?name=JohnDoe&age=30'
        };
        delete global.window.location;
        global.window.location = mockLocation;

        expect(getQueryParam('name')).toBe('JohnDoe');
        expect(getQueryParam('age')).toBe('30');
        expect(getQueryParam('nonexistent')).toBeNull();
    });

});
