import DomHelper from "../helper/domHelper";
import StringHelper from "../helper/stringHelper";

export default class SocialMediaShare {
    /**
     * @param {jQuery} $image
     */
    constructor($image) {
        this.$image = $image;
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildFacebookUrl(options) {
        let parameters = {
            u: options.url || window.location.href
        };

        return 'https://www.facebook.com/sharer.php?' + StringHelper.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildTwitterUrl(options) {
        let parameters = {
            url: options.url || window.location.href,
            text: options.text || window.document.title
        };

        if (typeof options.twitterUsername === 'string') {
            parameters.via = options.twitterUsername;
        }

        if (typeof options.hashtags === 'object') {
            parameters.hashtags = options.hashtags.join(',');
        }

        return 'https://twitter.com/intent/tweet?' + StringHelper.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    static buildMailUrl(options) {
        let parameters = {
            subject: window.document.title,
            body: (options.text || window.document.title) + ' ' + (options.url || window.location.href)
        };

        return 'mailto:?' + StringHelper.param(parameters);
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

        return link;
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildFacebookButton(options) {
        return SocialMediaShare.buildButton('social-button facebook-colors icon-facebook', SocialMediaShare.buildFacebookUrl(options));
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildTwitterButton(options) {
        return SocialMediaShare.buildButton('social-button twitter-colors icon-twitter', SocialMediaShare.buildTwitterUrl(options));
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildMailButton(options) {
        return SocialMediaShare.buildButton('social-button mail-colors icon-envelop', SocialMediaShare.buildMailUrl(options));
    }

    /**
     * @param {object} socialMediaOptions
     */
    buildShareBox(socialMediaOptions) {
        const elementBox = DomHelper.createElement('div', {'class': 'social-share-box'});
        const elementShareButton = DomHelper.createElement('div', {'class': 'social-button share-colors icon-share2'});

        elementBox.appendChild(this.buildFacebookButton(socialMediaOptions));
        elementBox.appendChild(this.buildTwitterButton(socialMediaOptions));
        elementBox.appendChild(this.buildMailButton(socialMediaOptions));
        elementBox.appendChild(elementShareButton);

        this.$image.append(elementBox);

        this.bindEvents();
    }

    bindEvents() {
        $('.social-button.share-colors').on('mouseenter', function() {
            $(this).parent().addClass('expanded');
        });

        $('.social-share-box').on('mouseleave', function() {
            $(this).removeClass('expanded');
        });
    }
}
