import BaseItem from "./baseItem";
import DomHelper from "../helper/domHelper";

/**
 * @extends BaseItem
 */
export default class PictureItem extends BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        super(parameters);

        this.checkRequiredParameters(parameters, ['path']);

        this.path = parameters.path;
        this.caption = parameters.caption;
        this.linkUrl = parameters.linkUrl;
    }

    /**
     * @returns {HTMLElement}
     */
    createPicture() {
        const element = DomHelper.createElement('img', {'class': 'picture'});
        element.src = this.path;

        if ('undefined' !== typeof this.caption) {
            element.alt = this.caption;
        } else {
            element.alt = 'Picture #' + this.identifier;
        }

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const pictureItem = DomHelper.createElement('div', {'class': 'picture-item'});

        if ('undefined' !== typeof this.caption) {
            pictureItem.setAttribute('data-caption', this.caption);
        }

        if ('undefined' !== typeof this.linkUrl) {
            const link = DomHelper.createElement('a');
            link.href = this.linkUrl;
            link.appendChild(this.createPicture());
            pictureItem.appendChild(link);
        } else {
            pictureItem.appendChild(this.createPicture());
        }

        element.appendChild(pictureItem);

        return element;
    }
}
