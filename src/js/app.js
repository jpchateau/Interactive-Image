define(['jquery', 'helper/log', 'event/hover', 'element/text'], function($, logHelper, hover, text) {
    'use strict';

    $.interactiveImage = function (items, settings, $image) {
        var logger = logHelper(settings);

        var checkSettings = function () {
            if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
                settings.debug = true;
                throw 'Error: check "debug" plugin option';
            }
            if ('undefined' === typeof settings.fontColor || 'string' !== typeof settings.fontColor) {
                throw 'Error: check "fontColor" plugin option';
            }
            if ('undefined' === typeof settings.backgroundColor || 'string' !== typeof settings.backgroundColor) {
                throw 'Error: check "backgroundColor" plugin option';
            }
            logger.debug('Settings checked');
        };

        var defaults = {
            fontColor: settings.fontColor,
            backgroundColor: settings.backgroundColor
        };

        var createElement = function (options) {
            options = $.extend({}, defaults, options);

            logger.debug('Options:');
            logger.debug(options);

            var parameters = {
                position: options.position,
                backgroundColor: options.backgroundColor,
                fontColor: options.fontColor,
                title: options.title,
                description: options.description,
                picture: options.picture,
                link: options.link
            };

            var element = text(parameters);
            logger.debug('Item ' + element.title + ' created');

            $image.append(element.createIcon());

            return $(element.renderHtml());
        };

        var buildElements = function () {
            var i;
            for (i in items) {
                if (items.hasOwnProperty(i)) {
                    $image.append(createElement(items[i]));
                }
            }
        };

        try {
            checkSettings();
            buildElements();
            hover.bindEvents($image);
        } catch (exception) {
            logger.debug(exception);
        }
    };

    return function(items, options, element) {
        $.interactiveImage(items, options, element);
    };
});