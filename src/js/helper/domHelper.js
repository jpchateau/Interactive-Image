export default class DomHelper {
    createDomElement(tag, cssClass) {
        let domElement = document.createElement(tag);
        domElement.setAttribute('class', cssClass);

        return domElement;
    }
}