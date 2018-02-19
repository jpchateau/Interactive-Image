import uniqid from 'uniqid';

export default class BaseItem {
    constructor(DomHelper, parameters) {
        this.domHelper = DomHelper;
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
        this.identifier = uniqid(parameters.title + '-');
    }

    createIcon() {
        let iconElement = this.domHelper.createElement('div', 'icon-button icon-radio-checked');
        iconElement.setAttribute('data-for', this.identifier);
        iconElement.style.left = this.position.left + 'px';
        iconElement.style.top = this.position.top + 'px';

        return iconElement;
    }

    createTitle() {
        return this.domHelper.createElement('span', 'title', this.title);
    }

    renderHtml() {
        throw 'Error: render method not implemented';
    }
}