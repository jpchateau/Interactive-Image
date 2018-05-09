export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} tag
     * @param {string=''} cssClass
     * @param {string} [text]
     * @returns {HTMLElement}
     */
    createElement(tag, cssClass = '', text) {
        let domElement = document.createElement(tag);
        domElement.setAttribute('class', cssClass);

        if ('undefined' !== typeof text) {
            domElement.appendChild(document.createTextNode(text));
        }

        return domElement;
    }
}