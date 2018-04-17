import InteractiveImage from './interactiveImage.js';

(function($, window, document, undefined) {
    $.fn.interactiveImage = function(items, options) {
        let defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(function() {
            (new InteractiveImage(items, options, $(this)).execute());
        });
    };
})(jQuery, window, document);