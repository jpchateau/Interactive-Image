import BaseItem from "./baseItem";

/**
 * @extends BaseItem
 */
export default class TextItem extends BaseItem {
    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        let requiredParameters = ['position', 'title', 'description'];
        for (let i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in TextItem';
            }
        }

        super(parameters);
        this.title = parameters.title;
        this.description = parameters.description;
        this.picturePath = parameters.picturePath;
        this.link = parameters.link;
    }

    /**
     * @returns {HTMLElement}
     */
    createTitle() {
        return this.domHelper.createElement('span', 'title', this.title);
    }

    /**
     * @returns {HTMLElement}
     */
    createDescription() {
        return this.domHelper.createElement('p', 'description', this.description);
    }

    /**
     * @returns {HTMLElement}
     */
    createPicture() {
        let element = this.domHelper.createElement('img', 'picture');
        element.src = this.picturePath;
        element.alt = this.title;

        return element;
    }

    /**
     * @returns {HTMLAnchorElement}
     */
    createLink() {
        let label, element = document.createElement('a');
        element.href = this.link.url;

        if ('undefined' !== typeof this.link.label) {
            label = this.link.label;
        } else {
            label = this.link.href;
        }

        element.appendChild(document.createTextNode(label));

        return element;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        let element = this.createItemElement();

        let textElement = this.domHelper.createElement('div', 'text-item');

        textElement.appendChild(this.createTitle());
        textElement.appendChild(this.createDescription());

        if ('undefined' !== typeof this.picturePath) {
            textElement.appendChild(this.createPicture());
        }

        if ('undefined' !== typeof this.link) {
            textElement.appendChild(this.createLink());
        }

        element.appendChild(textElement);

        return element;
    }
}