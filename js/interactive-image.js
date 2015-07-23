/**
 * Interactive Image jQuery plug-in
 *
 * @author Jean-Philippe Chateau <contact@jpchateau.com>
 * @version 0.2.2
 * @date 2015-07-23
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
            item = $.extend({}, itemDefaults, item);
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

            var descriptionElement = document.createElement('p');
            descriptionElement.setAttribute('class', 'description');
            descriptionElement.appendChild(document.createTextNode(item.description));

            // Container
            var containerElement = document.createElement('div');
            containerElement.setAttribute('class', 'container');
            containerElement.setAttribute('data-id', item.title);
            containerElement.style.color = item.fontColor;
            containerElement.style.backgroundColor = item.backgroundColor;
            containerElement.style.left = (item.left - 100 + 12) + 'px';
            containerElement.style.top = (item.top + 30) + 'px';

            containerElement.appendChild(titleElement);
            containerElement.appendChild(descriptionElement);

            debug('Item ' + item.title + ' created');

            return $(containerElement);
        };

        var buildElements = function () {
            var i;
            for (i in items) {
                if (items.hasOwnProperty(i)) {
                    $('.interactive-image').append(createItemElement(items[i]));
                }
            }
        };

        var bindEvents = function () {
            $('.interactive-image').on('mouseover', '.icon-button', function (event) {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') !== 'block') {
                    $container.fadeIn('fast');
                }
            });
            debug('Event mouseover on icon created');

            $('.interactive-image').on('mouseleave', '.icon-button', function (event) {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') === 'block') {
                    $container.hide();
                }
            });
            debug('Event mouseleave on icon created');

            $('.interactive-image').on('mouseover', function (event) {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') !== 'block') {
                        $(this).fadeIn('fast');
                    }
                });
            });
            debug('Event mouseover on image created');

            $('.interactive-image').on('mouseleave', function (event) {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') === 'block') {
                        $(this).hide();
                    }
                });
            });
            debug('Event mouseleave on image created');
        };

        buildElements();
        bindEvents();
    };

    $.fn.interactiveImage = function (items, options) {
        var settingsDefaults = {
            "debug": false
        };

        var config = $.extend({}, settingsDefaults, options);

        return this.each(function () {
            (new $.interactiveImage(items, config));
        });
    };
}(jQuery));