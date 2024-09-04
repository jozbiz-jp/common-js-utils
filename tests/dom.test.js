const {
    scrollToTop,
    scrollToElement,
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    getScrollPosition,
    setScrollPosition,
    isInViewport
}  = require("../src/dom");

describe('DOM Utility Functions', () => {

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();
        document.body.innerHTML = ''; // Clear the document body
    });

    test('scrollToTop should smoothly scroll the window to the top of the page', () => {
        window.scrollTo = jest.fn(); // Mock the scrollTo function
        scrollToTop();
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    test('scrollToElement should smoothly scroll the window to a specific element', () => {
        const element = document.createElement('div');
        element.scrollIntoView = jest.fn(); // Mock the scrollIntoView function
        scrollToElement(element);
        expect(element.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    test('hasClass should correctly check if an element has a specific CSS class', () => {
        const element = document.createElement('div');
        element.className = 'test-class';
        expect(hasClass(element, 'test-class')).toBe(true);
        expect(hasClass(element, 'another-class')).toBe(false);
    });

    test('addClass should correctly add a CSS class to an element', () => {
        const element = document.createElement('div');
        addClass(element, 'test-class');
        expect(element.classList.contains('test-class')).toBe(true);
    });

    test('removeClass should correctly remove a CSS class from an element', () => {
        const element = document.createElement('div');
        element.className = 'test-class';
        removeClass(element, 'test-class');
        expect(element.classList.contains('test-class')).toBe(false);
    });

    test('toggleClass should correctly toggle a class on a DOM element', () => {
        const element = document.createElement('div');
        toggleClass(element, 'test-class');
        expect(element.classList.contains('test-class')).toBe(true);
        toggleClass(element, 'test-class');
        expect(element.classList.contains('test-class')).toBe(false);
    });

    test('getScrollPosition should return the current scroll position of the window', () => {
        Object.defineProperty(window, 'pageXOffset', { value: 100, writable: true });
        Object.defineProperty(window, 'pageYOffset', { value: 200, writable: true });
        expect(getScrollPosition()).toEqual({ x: 100, y: 200 });
    });

    test('setScrollPosition should set the scroll position of the window', () => {
        window.scrollTo = jest.fn(); // Mock the scrollTo function
        setScrollPosition(100, 200);
        expect(window.scrollTo).toHaveBeenCalledWith(100, 200);
    });

    test('isInViewport should correctly check if an element is in the viewport', () => {
        const element = document.createElement('div');
        element.getBoundingClientRect = jest.fn(() => ({
            top: 100,
            left: 100,
            bottom: 200,
            right: 200
        }));
        Object.defineProperty(window, 'innerHeight', { value: 1000 });
        Object.defineProperty(window, 'innerWidth', { value: 1000 });
        expect(isInViewport(element)).toBe(true);

        element.getBoundingClientRect = jest.fn(() => ({
            top: -100,
            left: -100,
            bottom: 50,
            right: 50
        }));
        expect(isInViewport(element)).toBe(false);
    });

});
