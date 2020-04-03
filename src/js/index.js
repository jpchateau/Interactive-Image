import '../scss/main.scss';
import App from "./app";

(($, window, document, undefined) => {
    $.fn.interactiveImage = function(items, options) {
        const defaults = {
            debug: false,
            allowHtml: false,
            shareBox: true
        };

        let settings = Object.assign(defaults, options);

        return this.each(() => {
            new App($(this), items, settings).execute();
        });
    };
})(jQuery, window, document);
