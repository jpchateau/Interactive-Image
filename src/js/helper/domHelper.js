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
     * Hide a DOM element
     *
     * @param {HTMLElement} element
     */
    static hideElement(element) {
        if (element.style.display === 'block') {
            element.style.display = 'none';

            if (DomHelper.elementContainsMediaItem(element) === true) {
                DomHelper.stopMedia(element);
            }
        }
    }

    /**
     * Show a DOM element
     *
     * @param {HTMLElement} element
     */
    static showElement(element) {
        if (element.style.display !== 'block') {
            element.style.display = 'block';
        }
    }

    /**
     * @param {HTMLElement} hotspot
     * @returns {HTMLElement}
     */
    static retrieveContainerFromHotspot(hotspot) {
        return document.querySelector('div[data-id="' + hotspot.getAttribute('data-for') + '"]');
    }

    /**
     * Detect if an item contains media
     *
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static elementContainsMediaItem(element) {
        return element.querySelectorAll('.audio-item, .video-item, .provider-item').length !== 0;
    }

    /**
     * Stop a Media Element from playing and reinitialize it
     *
     * @param {HTMLElement} element
     */
    static stopMedia(element) {
        const selector = "div[data-id='" + element.getAttribute('data-id') + "'] ";
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
