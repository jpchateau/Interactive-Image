const expect = require('chai').expect;
const jQuery = require('jquery');
const SocialMediaShare = require('./../../src/js/service/socialMediaShare');

describe('SocialMediaShare', function() {
    describe('constructor', function() {
        it('should build SocialMediaShare object', function() {
            const $image = jQuery('<div class="interactive-image"></div>');
            const socialMediaShare = new SocialMediaShare($image);
            expect(socialMediaShare.constructor.name).to.equal('SocialMediaShare');
        });
    });

    describe('buildFacebookUrl', function() {
        it('should build a URL for Facebook from default parameters', function() {
            let expectedUrl = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent('about:blank');
            expect(SocialMediaShare.buildFacebookUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for Facebook from given parameters', function() {
            //window.location.href = 'https://example.com';
            let parameters = {
                url: 'https://example.com'
            };
            let expectedUrl = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent('https://example.com');
            expect(SocialMediaShare.buildFacebookUrl(parameters)).to.equal(expectedUrl);
        });
    });

    describe('buildTwitterUrl', function() {
        it('should build a URL for Twitter from default parameters', function() {
            let expectedUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('about:blank') + '&text=';
            expect(SocialMediaShare.buildTwitterUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for Twitter from given parameters', function() {
            //window.location.href = 'https://example.com';
            let parameters = {
                url: 'https://example.com',
                text: 'title',
                twitterUsername: 'username',
                hashtags: ['foo', 'bar']
            };
            let expectedUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://example.com') +
                '&text=title&via=username&hashtags=' + encodeURIComponent('foo,bar');
            expect(SocialMediaShare.buildTwitterUrl(parameters)).to.equal(expectedUrl);
        });
    });

    describe('buildMailUrl', function() {
        it('should build a URL for sending email from default parameters', function() {
            let expectedUrl = 'mailto:?subject=&body=+' + encodeURIComponent('about:blank');

            expect(SocialMediaShare.buildMailUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for sending email from given parameters', function() {
            let parameters = {
                text: 'discover',
                url: 'https://example.com'
            };
            let expectedUrl = 'mailto:?subject=&body=discover+' + encodeURIComponent('https://example.com');

            expect(SocialMediaShare.buildMailUrl(parameters)).to.equal(expectedUrl);
        });
    });
});
