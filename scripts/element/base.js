define(['helper/dom'], function(domHelper) {
    'use strict';

    var BaseItem = function (parameters) {
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
    };

    BaseItem.prototype.createIcon = function () {
        var iconElement = domHelper.createDomElement('div', 'icon-button icon-radio-checked');
        iconElement.setAttribute('data-for', this.title);
        iconElement.style.top = this.position.top + 'px';
        iconElement.style.left = this.position.left + 'px';

        return iconElement;
    };

    BaseItem.prototype.createTitle = function () {
        var titleElement = domHelper.createDomElement('span', 'title');
        titleElement.appendChild(document.createTextNode(this.title));

        return titleElement;
    };

    BaseItem.prototype.renderHtml = function () {
        throw 'Error: render method not implemented';
    };

    return function (parameters) {
        var i, requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title'];
        for (i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in BaseItem';
            }
        }

        return new BaseItem(parameters);
    };
});