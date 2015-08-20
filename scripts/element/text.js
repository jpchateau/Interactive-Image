define(['element/base', 'helper/dom'], function(base, domHelper) {
    'use strict';

    var TextItem = function (top, left, backgroundColor, frontColor, title, description, picture, link) {
        var textItem = base(top, left, backgroundColor, frontColor, title);
        textItem.description = description;
        textItem.picture = picture;
        textItem.link = link;

        textItem.createDescription = function () {
            var descriptionElement = domHelper.createDomElement('p', 'description');
            descriptionElement.appendChild(document.createTextNode(this.description));

            return descriptionElement;
        };

        textItem.createPicture = function () {
            var pictureElement = domHelper.createDomElement('img', 'picture');
            pictureElement.src = this.picture;

            return pictureElement;
        };

        textItem.createLink = function () {
            var label, linkElement = document.createElement('a');
            linkElement.href = this.link.href;
            linkElement.style.color = this.fontColor;

            if ("undefined" !== this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.href;
            }

            linkElement.appendChild(document.createTextNode(label));

            return linkElement;
        };

        textItem.renderHtml = function () {
            var containerElement = domHelper.createDomElement('div', 'container');
            containerElement.setAttribute('data-id', this.title);
            containerElement.style.color = this.fontColor;
            containerElement.style.backgroundColor = this.backgroundColor;
            containerElement.style.left = (this.left - 50) + 'px';
            containerElement.style.top = (this.top + 30) + 'px';

            containerElement.appendChild(this.createTitle());
            containerElement.appendChild(this.createDescription());

            if ('undefined' !== typeof this.picture) {
                containerElement.appendChild(this.createPicture());
            }

            if ('undefined' !== typeof this.link) {
                containerElement.appendChild(this.createLink());
            }

            return containerElement;
        };

        return textItem;
    };

    return function(top, left, backgroundColor, frontColor, title, description, picture, link) {
        return new TextItem(top, left, backgroundColor, frontColor, title, description, picture, link);
    };
});