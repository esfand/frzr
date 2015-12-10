System.register([], function(exports_1) {
    "use strict";
    /**
     * HTMLElement helper
     * @param  {String} [tagName='div'] HTMLElement tag name
     * @param  {Object} [attributes={}]   attributes/text/HTML
     * @return {HTMLElement}         Returns pure HTMLElement
     */
    function el(tagName = 'div', attributes = {}) {
        const _el = document.createElement(tagName);
        for (const key in attributes) {
            if (key === 'text') {
                _el.textContent = attributes[key];
            }
            else if (key === 'html') {
                _el.innerHTML = attributes[key];
            }
            else {
                _el.setAttribute(key, attributes[key]);
            }
        }
        return _el;
    }
    exports_1("el", el);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=el.js.map