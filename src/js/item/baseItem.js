import DomHelper from "../helper/domHelper";
import ItemHelper from "../helper/itemHelper";

export default class BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        this.domHelper = new DomHelper();
        this.identifier = ItemHelper.uniqid('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : {left: 0, top: 0};
    }

    checkRequiredParameters(parameters, requiredParameters) {
        for (let i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw Error('Missing required parameter named "' + requiredParameters[i] + '"');
            }
        }
    }

    /**
     * @returns {HTMLElement}
     */
    createHotspotElement() {
        const element = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
        element.setAttribute('data-for', this.identifier);
        element.style.left = this.position.left + 'px';
        element.style.top = this.position.top + 'px';

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createArrowElement() {
        return this.domHelper.createElement('div', 'arrow-up');
    }

    /**
     * @returns {HTMLElement}
     */
    createItemElement() {
        const element = this.domHelper.createElement('div', 'item');
        element.setAttribute('data-id', this.identifier);
        element.appendChild(this.createArrowElement());

        return element;
    }

    renderHtml() {
        throw Error('Render method not implemented');
    }
}