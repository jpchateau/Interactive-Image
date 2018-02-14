export default class BaseItem {
    constructor(DomHelper, parameters) {
        let i, requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title'];
        for (i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in BaseItem';
            }
        }

        this.domHelper = DomHelper;
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
        this.identifier = parameters.title;
    }

    createIcon() {
        let iconElement = this.domHelper.createDomElement('div', 'icon-button icon-radio-checked');
        iconElement.setAttribute('data-for', this.identifier);
        iconElement.style.left = this.position.left + 'px';
        iconElement.style.top = this.position.top + 'px';

        return iconElement;
    }

    createTitle() {
        let titleElement = this.domHelper.createDomElement('span', 'title');
        titleElement.appendChild(document.createTextNode(this.title));

        return titleElement;
    }

    renderHtml() {
        throw 'Error: render method not implemented';
    }
}