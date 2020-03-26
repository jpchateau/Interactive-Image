export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name         - tag name
     * @param {object} [attributes] - html attributes
     * @param {string} [text]       - text
     * @param {?boolean} allowHtml  - allow HTML markup
     * @returns {HTMLElement}
     */
    static createElement(name, attributes, text, allowHtml = false) {
        let node = document.createElement(name);

        DomHelper.addAttributes(node, attributes);
        DomHelper.addText(node, allowHtml, text);

        return node;
    }

    /**
     * @param {HTMLElement} node
     * @param {object} [attributes]
     */
    static addAttributes(node, attributes) {
        if ('undefined' === typeof attributes) {
            return;
        }

        for (let attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) {
                node.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    /**
     * @param {HTMLElement} node
     * @param {boolean} allowHtml
     * @param {string} text
     */
    static addText(node, allowHtml, text) {
        if ('undefined' === typeof text) {
            return;
        }

        if (false === allowHtml) {
            node.textContent = text;

            return;
        }

        node.innerHTML = text;
    }

    /**
     * Hide a jQuery wrapped DOM element
     *
     * @param {jQuery} $element
     */
    static hideElement($element) {
        if ($element.css('display') === 'block') {
            $element.hide();

            if (DomHelper.elementContainsMediaItem($element) === true) {
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
     * @param {jQuery} $hotspot
     * @returns {jQuery}
     */
    static retrieveContainerFromHotspot($hotspot) {
        return $('div[data-id="' + $hotspot.attr('data-for') + '"]');
    }

    /**
     * @param {jQuery} $element
     * @returns {boolean}
     */
    static elementContainsMediaItem($element) {
        const $mediaItem = $element.find('.audio-item, .video-item, .provider-item');

        return $mediaItem.length !== 0;
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
