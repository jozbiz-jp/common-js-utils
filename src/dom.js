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



module.exports = {
    scrollToTop,
    scrollToElement,
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    getScrollPosition,
    setScrollPosition,
    isInViewport
}