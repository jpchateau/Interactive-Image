import InteractiveImage from './interactiveImage.js';

(($, window, document, undefined) => {
    $.fn.interactiveImage = function(items, options) {
        let defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(() => {
            (new InteractiveImage(items, options, $(this)).execute());
        });
    };
})(jQuery, window, document);