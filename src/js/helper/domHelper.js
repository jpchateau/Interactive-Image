export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name
     * @param {?object} attributes
     * @param {?string} text
     * @returns {HTMLElement}
     */
    createElement(name, attributes, text) {
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
}
