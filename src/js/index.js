import '../scss/main.scss';
import '../css/icomoon.css';

import App from "./app";

/*!
* interactiveimagejs
* Version 2.3.0
* https://github.com/jpchateau
* Jean-Philippe Chateau - <contact@jpchateau.com>
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
