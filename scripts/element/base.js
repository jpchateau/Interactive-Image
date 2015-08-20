define(['helper/dom'], function(domHelper) {
    'use strict';

    var AbstractItem = function (top, left, backgroundColor, fontColor, title) {
        this.top = top;
        this.left = left;
        this.backgroundColor = backgroundColor;
        this.fontColor = fontColor;
        this.title = title;
    };

    AbstractItem.prototype.createIcon = function () {
        var iconElement = domHelper.createDomElement('div', 'icon-button icon-radio-checked');
        iconElement.setAttribute('data-for', this.title);
        iconElement.style.top = this.top + 'px';
        iconElement.style.left = this.left + 'px';

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

    return function (top, left, backgroundColor, fontColor, title) {
        return new AbstractItem(top, left, backgroundColor, fontColor, title);
    };
});