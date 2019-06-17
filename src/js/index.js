import '../scss/main.scss';
import App from "./app";

(($, window, document, undefined) => {
    $.fn.interactiveImage = function(items, options) {
        const defaults = {
            debug: false,
            shareBox: true
        };

        options = $.extend(defaults, options);

        return this.each(() => {
            new App($(this), items, options).execute();
        });
    };
})(jQuery, window, document);
