/**
* Interactive Image jQuery plug-in
*
* @author Jean-Philippe Chateau <contact@jpchateau.com>
* @version 0.1.0
* @date 2015-07-16
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

        var itemDefaults = {
            "fontColor": "#000",
            "backgroundColor": "#fff"
        };

        var createItemElement = function (item) {

            debug('original item');
            debug(item);

            item = $.extend({}, itemDefaults, item);
            debug('complete item');
            debug(item);

            // Icon
            var iconElement = document.createElement('div');
            iconElement.setAttribute('class', 'icon-button icon-radio-checked');
            iconElement.style.left = item.left + 'px';
            iconElement.style.top = item.top + 'px';
            iconElement.setAttribute('data-for', item.title);
            $('.interactive-image').append(iconElement);

            // Title
            var titleElement = document.createElement('span');
            titleElement.setAttribute('class', 'title');
            titleElement.appendChild(document.createTextNode(item.title));

            // ImageTitle
            if (typeof item.logo !== "undefined") {
                var logoElement = document.createElement('img');
                logoElement.setAttribute('src', item.logo);
            }

            var descriptionElement = document.createElement('p');
            descriptionElement.setAttribute('class', 'description');
            descriptionElement.appendChild(document.createTextNode(item.description));

            // Container
            var element = document.createElement('div');
            element.setAttribute('class', 'container');
            element.setAttribute('data-id', item.title);
            element.style.color = item.fontColor;
            element.style.backgroundColor = item.backgroundColor;
            element.style.left = (item.left + 25) + 'px';
            element.style.top = item.top + 'px';

            if (typeof item.logo !== "undefined") {
                element.appendChild(logoElement);
            }

            element.appendChild(titleElement);
            element.appendChild(descriptionElement);

            debug(item.title + ' element created');

            return $(element);
        };

        var buildElements = function () {
            var i;
            for (i in items) {
                $('.interactive-image').append(createItemElement(items[i]));
            };
        };

        var bindEvents = function () {
            $('.interactive-image').on('mouseover', '.icon-button', function (event) {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') !== 'block') {
                    $container.fadeIn('fast');
                }
            });
            debug('event mouseover icon created');

            $('.interactive-image').on('mouseleave', '.container', function (event) {
                if ($(this).css('display') === 'block') {
                    $(this).fadeOut('slow');
                }
            });
            debug('event mouseleave container created');

            $('.interactive-image').on('mouseover', function (event) {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') !== 'block') {
                        $(this).fadeIn('fast');
                    }
                });
            });
            debug('event mouseover image created');

            $('.interactive-image').on('mouseleave', function (event) {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') === 'block') {
                        $(this).hide();
                    }
                });
            });
            debug('event mouseleave image created');
        };

        buildElements();
        bindEvents();
    };

    $.fn.interactiveImage = function (items, options) {
        var settingsDefaults = {
            "debug": false
        };

        var options = $.extend({}, settingsDefaults, options);

        return this.each(function () {
            (new $.interactiveImage(items, options));
        });
    };
}(jQuery));