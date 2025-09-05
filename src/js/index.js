import '../css/common.css';
import '../css/scene.css';
import '../css/social.css';
import '../css/items/audio.css';
import '../css/items/picture.css';
import '../css/items/provider.css';
import '../css/items/text.css';
import '../css/items/video.css';

import App from './app';

// eslint-disable-next-line no-unused-vars
function interactiveImage(selector, items, options) {
    document.querySelectorAll(selector).forEach(element => {
        new App(element, items, options).execute();
    });
}
