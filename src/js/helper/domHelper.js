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

        node = DomHelper.addAttributes(node, attributes);
        node = DomHelper.addText(node, allowHtml, text);

        return node;
    }

    /**
     * @param {HTMLElement} node
     * @param {object} [attributes]
     * @returns {HTMLElement}
     */
    static addAttributes(node, attributes) {
        if ('undefined' === typeof attributes) {
            return node;
        }

        for (let attribute in attributes) {
            if (attributes.hasOwnProperty(attribute)) {
                node.setAttribute(attribute, attributes[attribute]);
            }
        }

        return node;
    }

    /**
     * @param {HTMLElement} node
     * @param {boolean} allowHtml
     * @param {string} text
     * @returns {HTMLElement}
     */
    static addText(node, allowHtml, text) {
        if ('undefined' === typeof text) {
            return node;
        }

        if (false === allowHtml) {
            node.textContent = text;
        } else {
            node.innerHTML = text;
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
