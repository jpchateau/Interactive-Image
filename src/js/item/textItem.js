import BaseItem from "./baseItem";

export default class TextItem extends BaseItem {
    constructor(DomHelper, parameters) {
        let i, requiredParameters = ['description'];
        for (i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in TextItem';
            }
        }

        super(DomHelper, parameters);
        this.description = parameters.description;
        this.picture = parameters.picture;
        this.link = parameters.link;
    }

    createDescription() {
        let descriptionElement = this.domHelper.createDomElement('p', 'description');
        descriptionElement.appendChild(document.createTextNode(this.description));

        return descriptionElement;
    }

    createPicture() {
        let pictureElement = this.domHelper.createDomElement('img', 'picture');
        pictureElement.src = this.picture;

        return pictureElement;
    }

    createLink() {
        let label, linkElement = document.createElement('a');
        linkElement.href = this.link.href;
        linkElement.style.color = this.fontColor;

        if ("undefined" !== this.link.label) {
            label = this.link.label;
        } else {
            label = this.link.href;
        }

        linkElement.appendChild(document.createTextNode(label));

        return linkElement;
    }

    renderHtml() {
        let containerElement = this.domHelper.createDomElement('div', 'container');
        containerElement.setAttribute('data-id', this.identifier);
        containerElement.style.color = this.fontColor;
        containerElement.style.backgroundColor = this.backgroundColor;
        containerElement.style.left = (this.position.left - 65) + 'px';
        containerElement.style.top = (this.position.top + 40) + 'px';

        containerElement.appendChild(this.createTitle());
        containerElement.appendChild(this.createDescription());

        if ('undefined' !== typeof this.picture) {
            containerElement.appendChild(this.createPicture());
        }

        if ('undefined' !== typeof this.link) {
            containerElement.appendChild(this.createLink());
        }

        return containerElement;
    }
}