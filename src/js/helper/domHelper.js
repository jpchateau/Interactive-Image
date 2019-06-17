export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name
     * @param {?object} attributes
     * @param {?string} text
     * @returns {HTMLElement}
     */
    static createElement(name, attributes, text) {
        const node = document.createElement(name);

        if ('undefined' !== typeof attributes) {
            for (let attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    node.setAttribute(attribute, attributes[attribute]);
                }
            }
        }

        if ('undefined' !== typeof text) {
            node.appendChild(document.createTextNode(text));
        }

        return node;
    }

    /**
     * Hide a jQuery wrapped DOM element
     *
     * @param {jQuery} $element
     */
    static hideElement($element) {
        if ($element.css('display') === 'block') {
            $element.hide();
        }
    }

    /**
     * Show a jQuery wrapped DOM element
     *
     * @param {jQuery} $element
     */
    static showElement($element) {
        if ($element.css('display') !== 'block') {
            $element.show();
        }
    }
}
