define(['element/base', 'helper/dom'], function(base, domHelper) {
    'use strict';

    var TextItem = function (parameters) {
        var textItem = base(parameters);
        textItem.description = parameters.description;
        textItem.picture = parameters.picture;
        textItem.link = parameters.link;

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
            containerElement.style.left = (this.position.left - 50) + 'px';
            containerElement.style.top = (this.position.top + 30) + 'px';

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

    return function(parameters) {
        // optional parameters: 'description', 'picture', 'link'
        var i, requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title'];
        for (i in requiredParameters) {
            if (typeof parameters[requiredParameters[i]] === "undefined" || parameters[requiredParameters[i]] === '') {
                throw 'Error: missing required parameter (' + requiredParameters[i] + ') for Text element';
            }
        }

        return new TextItem(parameters);
    };
});