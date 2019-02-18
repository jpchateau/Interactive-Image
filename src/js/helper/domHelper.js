export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} tag
     * @param {string} cssClass
     * @param {string} [text]
     * @returns {HTMLElement}
     */
    createElement(tag, cssClass, text) {
        const domElement = document.createElement(tag);

        if ('undefined' !== typeof cssClass) {
            domElement.setAttribute('class', cssClass);
        }

        if ('undefined' !== typeof text) {
            domElement.appendChild(document.createTextNode(text));
        }

        return domElement;
    }
}
