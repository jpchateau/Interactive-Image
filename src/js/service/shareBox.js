import DomHelper from "../helper/domHelper";
import Utils from "../service/utils";

export default class ShareBox {
    /**
     * @param {HTMLElement} scene
     */
    constructor(scene) {
        this.scene = scene;
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildFacebookUrl(options) {
        let parameters = {
            u: options.url ?? window.location.href
        };

        return 'https://www.facebook.com/sharer.php?' + Utils.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildWhatsAppUrl(options) {
        let parameters = {
            text: options.url ?? window.location.href
        };

        return 'whatsapp://send?' + Utils.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildTwitterUrl(options) {
        let parameters = {
            url: options.url ?? window.location.href,
            text: options.text ?? window.document.title
        };

        if (typeof options.twitterUsername === 'string') {
            parameters.via = options.twitterUsername;
        }

        if (typeof options.hashtags === 'object') {
            parameters.hashtags = options.hashtags.join(',');
        }

        return 'https://twitter.com/intent/tweet?' + Utils.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildMailUrl(options) {
        let parameters = {
            subject: window.document.title,
            body: (options.text ?? window.document.title) + ' ' + (options.url ?? window.location.href)
        };

        return 'mailto:?' + Utils.param(parameters);
    }

    /**
     *
     * @param {string} classes
     * @param {string} href
     * @returns {HTMLElement}
     */
    static buildButton(classes, href) {
        const link = DomHelper.createElement('a', {'class': classes});
        link.setAttribute('target', '_blank');
        link.setAttribute('href', href);
        link.setAttribute('rel', 'noopener noreferrer');

        return link;
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildFacebookButton(options) {
        return ShareBox.buildButton('social-button facebook-colors icon-facebook', ShareBox.buildFacebookUrl(options));
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildTwitterButton(options) {
        return ShareBox.buildButton('social-button twitter-colors icon-twitter', ShareBox.buildTwitterUrl(options));
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildWhatsAppButton(options) {
        return ShareBox.buildButton('social-button whatsapp-colors icon-whatsapp', ShareBox.buildWhatsAppUrl(options));
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildMailButton(options) {
        return ShareBox.buildButton('social-button mail-colors icon-envelop', ShareBox.buildMailUrl(options));
    }

    /**
     * @param {object} socialMediaOptions
     */
    build(socialMediaOptions) {
        const box = DomHelper.createElement('div', {'class': 'social-share-box'});
        const shareButton = DomHelper.createElement('div', {'class': 'social-button share-colors icon-share2'});

        box.appendChild(this.buildMailButton(socialMediaOptions));
        box.appendChild(this.buildWhatsAppButton(socialMediaOptions));
        box.appendChild(this.buildTwitterButton(socialMediaOptions));
        box.appendChild(this.buildFacebookButton(socialMediaOptions));
        box.appendChild(shareButton);

        this.scene.appendChild(box);
    }

    bindEvents() {
        document.querySelector('.social-button.share-colors').addEventListener('mouseenter', function(event) {
            event.target.parentNode.classList.add('expanded');
        });

        document.querySelector('.social-share-box').addEventListener('mouseleave', function(event) {
            event.target.classList.remove('expanded');
        });
    }
}
