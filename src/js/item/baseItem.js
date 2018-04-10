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

    createHotspot() {
        let hotspotElement = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
        hotspotElement.setAttribute('data-for', this.identifier);
        hotspotElement.style.left = this.position.left + 'px';
        hotspotElement.style.top = this.position.top + 'px';

        return hotspotElement;
    }

    createTitle() {
        return this.domHelper.createElement('span', 'title', this.title);
    }

    renderHtml() {
        throw 'Error: render method not implemented';
    }
}