/**
 * Interactive Image jQuery plug-in
 *
 * @author Jean-Philippe Chateau <contact@jpchateau.com>
 * @version 0.4.0
 * @license MIT https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE
 */
requirejs(['app'], function(app) {
    'use strict';

    $.fn.interactiveImage = function (items, options) {
        var optionsDefaults = {
            debug: false
        };

        options = $.extend({}, optionsDefaults, options);

        return this.each(function () {
            app(items, options, $(this));
        });
    };
});