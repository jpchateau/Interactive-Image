import DomHelper from "../helper/domHelper";
import UniqueId from "../service/uniqueId";

export default class BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        this.identifier = UniqueId.generate('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : {left: 0, top: 0};
        this.sticky = parameters.sticky;
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
        const element = DomHelper.createElement('div', {'class': 'hotspot icon-radio-checked'});
        element.setAttribute('data-for', this.identifier);
        element.style.left = this.position.left + 'px';
        element.style.top = this.position.top + 'px';

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    createItemElement() {
        let itemClass = 'item';
        if (this.sticky === true) {
            itemClass += ' behavior-sticky';
        }

        const element = DomHelper.createElement('div', {'class': itemClass});
        element.setAttribute('data-id', this.identifier);

        if (this.sticky === true) {
            const closeButton = DomHelper.createElement('div', {'class': 'close-button icon-cancel-circle'});
            element.appendChild(closeButton);
        }

        return element;
    }

    renderHtml() {
        throw Error('Render method not implemented');
    }
}
