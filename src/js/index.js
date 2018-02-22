import InteractiveImage from './interactiveImage.js';

(function($) {
    $.fn.interactiveImage = function(items, options) {
        let defaults = {
            debug: false,
            fontColor: "#000000",
            backgroundColor: "#FFFFFF"
        };

        options = $.extend(defaults, options);

        return this.each(function() {
            (new InteractiveImage(items, options, $(this)).execute());
        });
    };
}(jQuery));