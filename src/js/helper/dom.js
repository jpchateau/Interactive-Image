define(function() {
    'use strict';

    return {
        createDomElement: function (tag, cssClass) {
            var domElement = document.createElement(tag);
            domElement.setAttribute('class', cssClass);

            return domElement;
        }
    };
});