/**
* Interactive Image jQuery plug-in
*
* @author Jean-Philippe Chateau <contact@jpchateau.com>
* @version 1.0.0
* @date 2015-06-10
* @license MIT http://opensource.org/licenses/MIT
*/
(function ($) {
    'use strict';

    $.interactiveImage = function (items, settings) {

        var debug = function (message) {
            if (window.console && window.console.log && settings.debug) {
                window.console.log(message);
            }
        };

        var createItemElement = function (item) {
            // Icon
            var iconElement = document.createElement('div');
            iconElement.setAttribute('class', 'logo icon-radio-checked');
            iconElement.style.left = item.position.left + 'px';
            iconElement.style.top = item.position.top + 'px';
            iconElement.setAttribute('data-for', item.title);
            $('.interactive-image').append(iconElement);

            // Title
            var titleElement = document.createElement('span');
            titleElement.setAttribute('class', 'title');
            titleElement.appendChild(document.createTextNode(item.title));

            // ImageTitle
            var imageTitleElement = document.createElement('img');
            imageTitleElement.setAttribute('src', item.imageTitle);

            var descriptionElement = document.createElement('p');
            descriptionElement.setAttribute('class', 'description');
            descriptionElement.appendChild(document.createTextNode(item.description));

            // Container
            var element = document.createElement('div');
            element.setAttribute('class', 'container');
            element.setAttribute('data-id', item.title);
            element.style.left = (item.position.left + 25) + 'px';
            element.style.top = item.position.top + 'px';

            if (item.imageTitle) {
                element.appendChild(imageTitleElement);
            } else {
                element.appendChild(titleElement);
            }

            element.appendChild(descriptionElement);

            debug(item.title + ' element created (' + item.position.left + ', ' + item.position.top + ')');

            return $(element);
        };

        var buildElements = function () {
            var i;
            for (i in items) {
                $('.interactive-image').append(createItemElement(items[i]));
            };
        };

        var bindEvents = function () {
            $('.interactive-image').on('mouseover', '.logo', function (event) {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') !== 'block') {
                    $container.fadeIn('fast');
                }
            });
            debug('event mouseover logo created');

            $('.interactive-image').on('mouseleave', '.container', function (event) {
                if ($(this).css('display') === 'block') {
                    $(this).fadeOut('slow');
                }
            });
            debug('event mouseleave container created');
        };

        buildElements();
        bindEvents();
    };

    $.fn.interactiveImage = function (items, options) {

        var defaults = {
            "debug": true // false|true
        };

        var options = $.extend({}, defaults, options);

        return this.each(function () {
            (new $.interactiveImage(items, options));
        });
    };
}(jQuery));