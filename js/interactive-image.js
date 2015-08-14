/**
 * Interactive Image jQuery plug-in
 *
 * @author Jean-Philippe Chateau <contact@jpchateau.com>
 * @version 0.3
 * @license MIT http://opensource.org/licenses/MIT
 */
(function ($) {
    'use strict';

    $.interactiveImage = function (items, settings, $image) {
        var debug = function (message) {
            if (window.console && window.console.log && true === settings.debug) {
                console.log(message);
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

        var createDomElement = function (tag, cssClass) {
            var DOMElement = document.createElement(tag);
            DOMElement.setAttribute('class', cssClass);

            return DOMElement;
        };

        var AbstractItem = function (top, left, backgroundColor, fontColor, title) {
            this.top = top;
            this.left = left;
            this.backgroundColor = backgroundColor;
            this.fontColor = fontColor;
            this.title = title;
        };

        AbstractItem.prototype.createIcon = function () {
            var iconElement = createDomElement('div', 'icon-button icon-radio-checked');
            iconElement.setAttribute('data-for', this.title);
            iconElement.style.top = this.top + 'px';
            iconElement.style.left = this.left + 'px';

            return iconElement;
        };

        AbstractItem.prototype.createTitle = function () {
            var titleElement = createDomElement('span', 'title');
            titleElement.appendChild(document.createTextNode(this.title));

            return titleElement;
        };

        AbstractItem.prototype.renderHtml = function () {
            throw 'Error: render method not implemented';
        };

        var TextItem = function (top, left, backgroundColor, frontColor, title, description, picture, link) {
            var textItem = new AbstractItem(top, left, backgroundColor, frontColor, title);
            textItem.description = description;
            textItem.picture = picture;
            textItem.link = link;

            textItem.createDescription = function () {
                var descriptionElement = createDomElement('p', 'description');
                descriptionElement.appendChild(document.createTextNode(this.description));

                return descriptionElement;
            };

            textItem.createPicture = function () {
                var pictureElement = createDomElement('img', 'picture');
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
                var containerElement = createDomElement('div', 'container');
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

        var createElement = function (options) {
            options = $.extend({}, optionsDefaults, options);
            debug('Options:');
            debug(options);

            var element = new TextItem(options.top, options.left, options.backgroundColor, options.fontColor, options.title, options.description, options.picture, options.link);
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