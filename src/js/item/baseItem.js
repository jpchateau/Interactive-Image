import DomHelper from "../helper/domHelper";
import Uniqid from "uniqid";

export default class BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        this.domHelper = new DomHelper();
        this.identifier = Uniqid();
        this.position = parameters.position;
    }

    /**
     * @returns {HTMLElement}
     */
    createHotspotElement() {
        let element = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
        element.setAttribute('data-for', this.identifier);
        element.style.left = this.position.left + 'px';
        element.style.top = this.position.top + 'px';

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createArrowElement() {
        let element = this.domHelper.createElement('div', 'arrow-up');

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createItemElement() {
        let element = this.domHelper.createElement('div', 'item');
        element.setAttribute('data-id', this.identifier);
        element.appendChild(this.createArrowElement());

        return element;
    }

    renderHtml() {
        throw 'Error: render method not implemented';
    }
}