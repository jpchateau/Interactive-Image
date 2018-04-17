import BaseItem from "./baseItem";

export default class PictureItem extends BaseItem {
    constructor(parameters) {
        let requiredParameters = ['type', 'position', 'backgroundColor', 'fontColor', 'path'];
        for (let i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in PictureItem';
            }
        }

        super(parameters);
        this.path = parameters.path;
        this.caption = parameters.caption;
        this.linkUrl = parameters.linkUrl;
        delete this.fontColor; // Deactivated as it does not have to produce an effect on the picture caption
    }

    createPicture() {
        let element = this.domHelper.createElement('img', 'picture');
        element.src = this.path;
        if ('undefined' !== typeof this.caption) {
            element.alt = this.caption;
        } else {
            element.alt = "Picture #" + this.identifier;
        }

        return element;
    }

    renderHtml() {
        let element = this.createItemElement();

        let pictureItem =  this.domHelper.createElement('div', 'picture-item');

        if ('undefined' !== typeof this.caption) {
            pictureItem.setAttribute('data-caption', this.caption);
        }

        if ('undefined' !== typeof this.linkUrl) {
            let link = this.domHelper.createElement('a');
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