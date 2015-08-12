/**
 * Interactive Image jQuery plug-in
 *
 * @author Jean-Philippe Chateau <contact@jpchateau.com>
 * @version 0.2.2
 * @license MIT http://opensource.org/licenses/MIT
 */
(function ($) {
    'use strict';

    $.interactiveImage = function (items, settings, $image) {
        var debug = function (message) {
            if (window.console && window.console.log && true === settings.debug) {
                window.console.log(message);
            }
        };

        var checkSettings = function () {
            if ('undefined' !== typeof settings.debug && (false !== settings.debug && true !== settings.debug)) {
                throw 'Error: check debug option';
            }

            debug('Settings checked');
        };

        var optionsDefaults = {
            fontColor: "#000",
            backgroundColor: "#fff"
        };

        function AbstractItem(top, left, backgroundColor, fontColor, title) {
            this.top = top;
            this.left = left;
            this.backgroundColor = backgroundColor;
            this.fontColor = fontColor;
            this.title = title;
        }

        AbstractItem.prototype.createIcon = function () {
            var iconElement = document.createElement('div');
            iconElement.setAttribute('class', 'icon-button icon-radio-checked');
            iconElement.style.top = this.top + 'px';
            iconElement.style.left = this.left + 'px';
            iconElement.setAttribute('data-for', this.title);

            return iconElement;
        };

        AbstractItem.prototype.createTitle = function () {
            var titleElement = document.createElement('span');
            titleElement.setAttribute('class', 'title');
            titleElement.appendChild(document.createTextNode(this.title));

            return titleElement;
        };

        AbstractItem.prototype.renderHtml = function () {
            throw 'Error: render method not implemented';
        };

        function TextItem(top, left, backgroundColor, frontColor, title, description, picture) {
            var textItem = new AbstractItem(top, left, backgroundColor, frontColor, title);
            textItem.description = description;
            textItem.picture = picture;

            textItem.createDescription = function () {
                var descriptionElement = document.createElement('p');
                descriptionElement.setAttribute('class', 'description');
                descriptionElement.appendChild(document.createTextNode(this.description));

                return descriptionElement;
            };

            textItem.createPicture = function () {
                var pictureElement = document.createElement('img');
                pictureElement.setAttribute('class', 'picture');
                pictureElement.src = this.picture;

                return pictureElement;
            };

            textItem.renderHtml = function () {
                var containerElement = document.createElement('div');
                containerElement.setAttribute('class', 'container');
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

                return containerElement;
            };

            return textItem;
        }

        var createElement = function (options) {
            options = $.extend({}, optionsDefaults, options);
            debug('Options:');
            debug(options);

            var element = new TextItem(options.top, options.left, options.backgroundColor, options.fontColor, options.title, options.description, options.picture);
            debug('Item ' + element.title + ' created');

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

        var bindEvents = function () {
            $image.on('mouseover', '.icon-button', function () {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') !== 'block') {
                    $container.fadeIn('fast');
                }
            });
            debug('Event mouseover on icon created');

            $image.on('mouseleave', '.icon-button', function () {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') === 'block') {
                    $container.hide();
                }
            });
            debug('Event mouseleave on icon created');

            $image.on('mouseover', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') !== 'block') {
                        $(this).fadeIn('fast');
                    }
                });
            });
            debug('Event mouseover on image created');

            $image.on('mouseleave', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') === 'block') {
                        $(this).hide();
                    }
                });
            });
            debug('Event mouseleave on image created');
        };

        try {
            checkSettings();
            buildElements();
            bindEvents();
        } catch (exception) {
            $image.html(exception);
        }
    };

    $.fn.interactiveImage = function (items, options) {
        var optionsDefaults = {
            debug: false
        };

        options = $.extend({}, optionsDefaults, options);

        return this.each(function () {
            (new $.interactiveImage(items, options, $(this)));
        });
    };
}(jQuery));