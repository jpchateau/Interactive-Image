import DomHelper from "../helper/domHelper";

export default class SocialMediaShare {
    /**
     * @param $image
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

        return 'https://www.facebook.com/sharer.php?' + $.param(parameters);
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

        return 'https://twitter.com/intent/tweet?' + $.param(parameters);
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

        return 'mailto:?' + $.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildFacebookButton(options) {
        const facebookLink = DomHelper.createElement('a', {'class': 'social-button facebook-colors icon-facebook'});
        facebookLink.setAttribute('target', '_blank');
        facebookLink.setAttribute('href', SocialMediaShare.buildFacebookUrl(options));

        return facebookLink;
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildTwitterButton(options) {
        const twitterLink = DomHelper.createElement('a', {'class': 'social-button twitter-colors icon-twitter'});
        twitterLink.setAttribute('target', '_blank');
        twitterLink.setAttribute('href', SocialMediaShare.buildTwitterUrl(options));

        return twitterLink;
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildMailButton(options) {
        const mailLink = DomHelper.createElement('a', {'class': 'social-button mail-colors icon-envelop'});
        mailLink.setAttribute('target', '_blank');
        mailLink.setAttribute('href', SocialMediaShare.buildMailUrl(options));

        return mailLink;
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
