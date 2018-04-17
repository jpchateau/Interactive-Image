import BaseItem from "./baseItem";

export default class TextItem extends BaseItem {
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

    createTitle() {
        return this.domHelper.createElement('span', 'title', this.title);
    }

    createDescription() {
        return this.domHelper.createElement('p', 'description', this.description);
    }

    createPicture() {
        let element = this.domHelper.createElement('img', 'picture');
        element.src = this.picturePath;
        element.alt = this.title;

        return element;
    }

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