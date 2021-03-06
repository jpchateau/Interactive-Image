import '../scss/main.scss';
import App from "./app";

(($, window, document) => {
    $.fn.interactiveImage = function(items, options) {
        return this.each(() => {
            new App($(this), items, options).execute();
        });
    };
})(jQuery, window, document);
