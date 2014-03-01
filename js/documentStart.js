// If the extension is not activated or already ran, just do nothing
if (localStorage.getItem('is2CTvActive') !== 'true') {
    throw 'The extension 2CTv is not activated for current page';
}

/*
 * Adds a class to a DOM element
 * 
 * @param {string} className Class to be added to the given element
 * @param {Object} element   DOM element to which a class should be added
 * 
 * @returns {undefined}
 */
function addClass(className, element) {
    var originalValue = element.getAttribute('class') || '';
    if (originalValue.indexOf(className + '') === -1) {
        element.setAttribute(
            'class',
            originalValue + (originalValue.length > 0 ? ' ' : '') + className
        );
    }
}

// Mark the document as "connected"
addClass("CCTv", document.documentElement);