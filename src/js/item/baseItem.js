import uniqid from 'uniqid';
import DomHelper from "../helper/domHelper";

export default class BaseItem {
    constructor(parameters) {
        this.domHelper = new DomHelper();
        this.identifier = uniqid();
        this.position = parameters.position;
    }

    createHotspotElement() {
        let element = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
        element.setAttribute('data-for', this.identifier);
        element.style.left = this.position.left + 'px';
        element.style.top = this.position.top + 'px';

        return element;
    }

    createItemElement() {
        let element = this.domHelper.createElement('div', 'item');
        element.setAttribute('data-id', this.identifier);
        element.style.left = (this.position.left - 65) + 'px';
        element.style.top = (this.position.top + 40) + 'px';

        return element;
    }

    renderHtml() {
        throw 'Error: render method not implemented';
    }
}