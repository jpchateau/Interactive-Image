export default class SocialShare {
    /**
     * @param {DomHelper} domHelper
     * @param $image
     */
    constructor(domHelper, $image) {
        this.domHelper = domHelper;
        this.$image = $image;
    }

    /**
     * @param {object} options
     * @returns {string}
     */
    buildTwitterUrl(options) {
        let parameters = {
            url: options.url || window.location.href,
            text: options.text || window.document.title
        };

        if (typeof options.username === 'string') {
            parameters.via = options.username;
        }

        if (typeof options.hashtags === 'object') {
            parameters.hashtags = options.hashtags.join(',');
        }

        return 'https://twitter.com/intent/tweet?' + $.param(parameters);
    }

    /**
     * @returns {string}
     */
    buildMailLink() {
        let parameters = {
            subject: window.document.title,
            body: window.document.title + ': ' + window.location.href
        };

        return 'mailto:?' + $.param(parameters);
    }

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    buildTwitterButton(options) {
        const twitterLink = this.domHelper.createElement('a', {'class': 'social-button twitter-colors icon-twitter'});
        twitterLink.setAttribute('target', '_blank');
        twitterLink.setAttribute('href', this.buildTwitterUrl(options));

        return twitterLink;
    }

    /**
     * @returns {HTMLElement}
     */
    buildMailButton() {
        const mailLink = this.domHelper.createElement('a', {'class': 'social-button mail-colors icon-mail'});
        mailLink.setAttribute('target', '_blank');
        mailLink.setAttribute('href', this.buildMailLink());

        return mailLink;
    }

    /**
     * @param {object} socialOptions
     */
    buildSocialShareBox(socialOptions) {
        const elementBox = this.domHelper.createElement('div', {'class': 'social-share-box'});
        const elementShareButton = this.domHelper.createElement('div', {'class': 'share-button icon-share2'});

        elementBox.appendChild(this.buildTwitterButton(socialOptions.twitter || {}));
        elementBox.appendChild(this.buildMailButton());
        elementBox.appendChild(elementShareButton);

        this.$image.append(elementBox);

        this.bindEvents();
    }

    bindEvents() {
        $('.share-button').on('mouseenter', function () {
            $(this).parent().addClass('expanded');
        });

        $('.social-share-box').on('mouseleave', function () {
            $(this).removeClass('expanded');
        });
    }
}
