export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name
     * @param {?object} attributes
     * @param {?string} text
     * @returns {HTMLElement}
     */
    static createElement(name, attributes, text) {
        const node = document.createElement(name);

        if ('undefined' !== typeof attributes) {
            for (let attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    node.setAttribute(attribute, attributes[attribute]);
                }
            }
        }

        if ('undefined' !== typeof text) {
            node.appendChild(document.createTextNode(text));
        }

        return node;
    }

    /**
     * Hide a jQuery wrapped DOM element
     *
     * @param {jQuery} $element
     */
    static hideElement($element) {
        if ($element.css('display') === 'block') {
            $element.hide();

            const $mediaItem = $element.find('.audio-item, .video-item, .provider-item');
            if ($mediaItem.length !== 0) {
                DomHelper.stopMedia($element);
            }
        }
    }

    /**
     * Show a jQuery wrapped DOM element
     *
     * @param {jQuery} $element
     */
    static showElement($element) {
        if ($element.css('display') !== 'block') {
            $element.show();
        }
    }

    /**
     * Stop a Media Element from playing and reinitialize it
     *
     * @param {jQuery} $element
     */
    static stopMedia($element) {
        const selector = "div[data-id='" + $element.data('id') + "'] ";
        const htmlMedia = document.querySelector(selector + 'audio, ' + selector + 'video');
        if (null !== htmlMedia) {
            htmlMedia.pause();
            htmlMedia.currentTime = 0;

            return;
        }

        const providerMedia = document.querySelector(selector + 'iframe');
        if (null !== providerMedia) {
            const source = providerMedia.src;
            providerMedia.src = source;
        }
    }
}
