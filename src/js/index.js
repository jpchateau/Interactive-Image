import '../css/common.css';
import '../css/scene.css';
import '../css/social.css';
import '../css/items/audio.css';
import '../css/items/picture.css';
import '../css/items/provider.css';
import '../css/items/text.css';
import '../css/items/video.css';

import App from "./app";

(($, window, document) => {
    $.fn.interactiveImage = function(items, options) {
        return this.each(() => {
            new App($(this), items, options).execute();
        });
    };
})(jQuery, window, document);
