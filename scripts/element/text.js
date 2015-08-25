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
            containerElement.setAttribute('data-id', this.identifier);
            containerElement.style.color = this.fontColor;
            containerElement.style.backgroundColor = this.backgroundColor;
            containerElement.style.left = (this.position.left - 60) + 'px';
            containerElement.style.top = (this.position.top + 43) + 'px';

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
        var i, requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title', 'description'];
        for (i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in TextItem';
            }
        }

        return new TextItem(parameters);
    };
});