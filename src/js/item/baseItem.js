import DomHelper from "../helper/domHelper";
import UniqueId from "../service/uniqueId";

export default class BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        this.domHelper = new DomHelper();

        this.identifier = UniqueId.generate('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : {left: 0, top: 0};
    }

    checkRequiredParameters(parameters, requiredParameters) {
        for (let i in requiredParameters) {
            if ('undefined' === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw Error('Missing required parameter named "' + requiredParameters[i] + '"');
            }
        }
    }

    /**
     * @returns {HTMLElement}
     */
    createHotspotElement() {
        const element = this.domHelper.createElement('div', {'class': 'hotspot icon-radio-checked'});
        element.setAttribute('data-for', this.identifier);
        element.style.left = this.position.left + 'px';
        element.style.top = this.position.top + 'px';

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createItemElement() {
        const element = this.domHelper.createElement('div', {'class': 'item'});
        element.setAttribute('data-id', this.identifier);

        return element;
    }

    renderHtml() {
        throw Error('Render method not implemented');
    }
}
