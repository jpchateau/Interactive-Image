import '../scss/main.scss';
import '../css/icomoon.css';

import App from "./app";

/**
 * @license
 * interactiveimagejs v2.1.0
 * A jQuery plugin to embed interactive images on your website
 * MIT License
 */
(($, window, document, undefined) => {
    $.fn.interactiveImage = function(items, options) {
        const defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(() => {
            new App(items, options, $(this)).execute();
        });
    };
})(jQuery, window, document);
