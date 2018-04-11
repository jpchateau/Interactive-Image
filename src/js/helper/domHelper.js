export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param tag
     * @param cssClass
     * @param text
     * @returns HTMLElement
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