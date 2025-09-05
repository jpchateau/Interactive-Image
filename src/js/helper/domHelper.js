export default class DomHelper {
    /**
     * Create a DOM element
     *
     * @param {string} name         - A tag name.
     * @param {object} [attributes] - HTML attributes.
     * @param {string} [text]       - A text.
     * @param {?boolean} allowHtml  - To allow HTML markup.
     * @returns {HTMLElement}
     */
    static createElement(name, attributes, text, allowHtml = false) {
        const node = document.createElement(name);

        DomHelper.addAttributes(node, attributes);
        DomHelper.addText(node, allowHtml, text);

        return node;
    }

    /**
     * @param {HTMLElement} node - HTML Element.
     * @param {object} [attributes]
     */
    static addAttributes(node, attributes) {
        if ('undefined' === typeof attributes) {
            return;
        }

        for (const attribute in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, attribute)) {
                node.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    /**
     * @param {HTMLElement} node  - HTML Element.
     * @param {boolean} allowHtml - To Allow HTML markup.
     * @param {string} text       - A text.
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
     * Hide a DOM element
     *
     * @param {HTMLElement} element - HTML Element.
     */
    static hideElement(element) {
        if (element.style.display === 'block' || element.style.display === 'flex') {
            element.style.display = 'none';

            if (DomHelper.elementContainsMediaItem(element) === true) {
                DomHelper.stopMedia(element);
            }
        }
    }

    /**
     * Show a DOM element
     *
     * @param {HTMLElement} element - HTML Element.
     */
    static showElement(element) {
        if (element.style.display !== 'block') {
            element.style.display = 'block';
        }
    }

    /**
     * @param {HTMLElement} hotspot - Hotspot HTML Element.
     * @returns {HTMLElement}
     */
    static retrieveContainerFromHotspot(hotspot) {
        return document.querySelector('div[data-id="' + hotspot.getAttribute('data-for') + '"]');
    }

    /**
     * Detect if an item contains media
     *
     * @param {HTMLElement} element - HTML Element.
     * @returns {boolean}
     */
    static elementContainsMediaItem(element) {
        return element.querySelectorAll('.audio-item, .video-item, .provider-item').length !== 0;
    }

    /**
     * Stop a Media Element from playing and reinitialize it
     *
     * @param {HTMLElement} element - HTML Element.
     */
    static stopMedia(element) {
        const selector = 'div[data-id=\'' + element.getAttribute('data-id') + '\'] ';
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
