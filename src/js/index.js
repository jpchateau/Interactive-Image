import App from "./app";

(($, window, document, undefined) => {
    $.fn.interactiveImage = function (items, options) {
        let defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(() => {
            (new App(items, options, $(this)).execute());
        });
    };
})(jQuery, window, document);