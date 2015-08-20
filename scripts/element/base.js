define(['helper/dom'], function(domHelper) {
    'use strict';

    var AbstractItem = function (parameters) {
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
    };

    AbstractItem.prototype.createIcon = function () {
        var iconElement = domHelper.createDomElement('div', 'icon-button icon-radio-checked');
        iconElement.setAttribute('data-for', this.title);
        iconElement.style.top = this.position.top + 'px';
        iconElement.style.left = this.position.left + 'px';

        return iconElement;
    };

    AbstractItem.prototype.createTitle = function () {
        var titleElement = domHelper.createDomElement('span', 'title');
        titleElement.appendChild(document.createTextNode(this.title));

        return titleElement;
    };

    AbstractItem.prototype.renderHtml = function () {
        throw 'Error: render method not implemented';
    };

    return function (parameters) {
        var i, requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title'];
        for (i in requiredParameters) {
            if (typeof parameters[requiredParameters[i]] === "undefined" || parameters[requiredParameters[i]] === '') {
                throw 'Error: missing required parameter (' + requiredParameters[i] + ') for Base element';
            }
        }

        return new AbstractItem(parameters);
    };
});