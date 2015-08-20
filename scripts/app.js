define(['helper/log', 'event/hover', 'element/text'], function(logHelper, hover, text) {
    'use strict';

    $.interactiveImage = function (items, settings, $image) {
        var logger = logHelper(settings);

        var checkSettings = function (settings) {
            if ('undefined' !== typeof settings.debug && (false !== settings.debug && true !== settings.debug)) {
                throw 'Error: check debug option';
            }
            logger.debug('Settings checked');
        };

        var optionsDefaults = {
            fontColor: "#000",
            backgroundColor: "#fff"
        };

        var createElement = function (options) {
            options = $.extend({}, optionsDefaults, options);
            logger.debug('Options:');
            logger.debug(options);

            var element = text(options.top, options.left, options.backgroundColor, options.fontColor, options.title, options.description, options.picture, options.link);
            logger.debug('Item ' + element.title + ' created');

            $image.append(element.createIcon());

            return $(element.renderHtml());
        };

        var buildElements = function (items, $image) {
            var i;
            for (i in items) {
                if (items.hasOwnProperty(i)) {
                    $image.append(createElement(items[i]));
                }
            }
        };

        try {
            checkSettings(settings);
            buildElements(items, $image);
            hover.bindEvents($image);
        } catch (exception) {
            logger.debug(exception);
        }
    };

    return function(items, options, element) {
        $.interactiveImage(items, options, element);
    };
});