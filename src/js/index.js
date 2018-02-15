import InteractiveImage from './interactiveImage.js';
import Styles from '../css/styles.css';
import Icomoon from '../css/icomoon.css';

(function ($) {
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
