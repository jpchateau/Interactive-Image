export default class SocialShare {
    /**
     * @param {DomHelper} domHelper
     * @param $image
     */
    constructor(domHelper, $image) {
        this.domHelper = domHelper;
        this.$image = $image;
    }

    buildTwitterButton() {
        return this.domHelper.createElement('div', {'class': 'twitter-button icon-twitter'});
    }

    buildSocialShareBox(socialOptions) {
        const elementBox = this.domHelper.createElement('div', {'class': 'social-share-box'});
        const elementShareButton = this.domHelper.createElement('div', {'class': 'share-button icon-share2'});

        elementBox.appendChild(this.buildTwitterButton());
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

        $('.twitter-button').on('click', function () {
            alert('tweet');
        });
    }
}
