/**
 * Interactive Image jQuery plugin BETA
 *
 * @author Jean-Philippe Chateau <contact@jpchateau.com>
 * @version 0.5.0
 * @license MIT https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE
 */
requirejs(['app'], function(app) {
    'use strict';

    $.fn.interactiveImage = function (items, options) {
        var defaults = {
            debug: false,
            fontColor: "#000000",
            backgroundColor: "#FFFFFF"
        };

        options = $.extend({}, defaults, options);

        return this.each(function () {
            app(items, options, $(this));
        });
    };
});