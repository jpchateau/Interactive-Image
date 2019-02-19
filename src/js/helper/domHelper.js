export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name
     * @param {object} attributes
     * @returns {HTMLElement}
     */
    createElement(name, attributes) {
        const node = document.createElement(name);

        if ('undefined' !== typeof attributes) {
            for (let attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    node.setAttribute(attribute, attributes[attribute]);
                }
            }
        }

        for (let i = 2; i < arguments.length; i++) {
            let child = arguments[i];
            if ('string' === typeof child) {
                child = document.createTextNode(child);
                node.appendChild(child);
            }
        }

        return node;
    }
}
