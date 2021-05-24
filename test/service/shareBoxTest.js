const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const expect = require('chai').expect;
const ShareBox = require('../../src/js/service/shareBox');

describe('ShareBox', function() {
    const dom = new JSDOM('<div class="interactive-image"></div>');
    const document = dom.window.document;
    const scene = document.querySelector('.interactive-image');
    const shareBox = new ShareBox(scene);

    describe('constructor', function() {
        it('should build ShareBox object', function() {
            expect(shareBox.constructor.name).to.equal('ShareBox');
        });
    });

    describe('buildFacebookUrl', function() {
        it('should build a URL for Facebook from default parameters', function() {
            let expectedUrl = 'https://www.facebook.com/sharer.php?u=' +
                encodeURIComponent('about:blank');
            expect(ShareBox.buildFacebookUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for Facebook from given parameters', function() {
            let parameters = {
                url: 'https://example.com'
            };
            let expectedUrl = 'https://www.facebook.com/sharer.php?u=' +
                encodeURIComponent('https://example.com');
            expect(ShareBox.buildFacebookUrl(parameters)).to.equal(expectedUrl);
        });
    });

    describe('buildTwitterUrl', function() {
        it('should build a URL for Twitter from default parameters', function() {
            let expectedUrl = 'https://twitter.com/intent/tweet?url=' +
                encodeURIComponent('about:blank') +
                '&text=';
            expect(ShareBox.buildTwitterUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for Twitter from given parameters', function() {
            let parameters = {
                url: 'https://example.com',
                text: 'title',
                twitterUsername: 'username',
                hashtags: ['foo', 'bar']
            };
            let expectedUrl = 'https://twitter.com/intent/tweet?url=' +
                encodeURIComponent('https://example.com') +
                '&text=title&via=username&hashtags=' +
                encodeURIComponent('foo,bar');
            expect(ShareBox.buildTwitterUrl(parameters)).to.equal(expectedUrl);
        });
    });

    describe('buildMailUrl', function() {
        it('should build a URL for sending email from default parameters', function() {
            let expectedUrl = 'mailto:?subject=&body=+' +
                encodeURIComponent('about:blank');
            expect(ShareBox.buildMailUrl({})).to.equal(expectedUrl);
        });

        it('should build a URL for sending email from given parameters', function() {
            let parameters = {
                text: 'discover',
                url: 'https://example.com'
            };
            let expectedUrl = 'mailto:?subject=&body=discover+' +
                encodeURIComponent('https://example.com');
            expect(ShareBox.buildMailUrl(parameters)).to.equal(expectedUrl);
        });
    });

    describe('build', function() {
        it('should build a shareBox', function() {
            let parameters = {
                url: 'https://example.com'
            };
            let expectedFacebookUrl = 'https://www.facebook.com/sharer.php?u=' +
                encodeURIComponent(parameters.url);
            let expectedTwitterUrl = 'https://twitter.com/intent/tweet?url=' +
                encodeURIComponent(parameters.url) +
                '&text=';
            let expectedMailUrl = 'mailto:?subject=&body=+' +
                encodeURIComponent(parameters.url);

            shareBox.build(parameters);

            const box = document.querySelector('.social-share-box');
            expect(box.nodeName).to.equal('DIV');
            expect(box.getAttribute('class')).to.equal('social-share-box');

            let facebookButton = box.childNodes[0];
            expect(facebookButton.nodeName).to.equal('A');
            expect(facebookButton.getAttribute('target')).to.equal('_blank');
            expect(facebookButton.getAttribute('href')).to.equal(expectedFacebookUrl);
            expect(facebookButton.getAttribute('rel')).to.equal('noopener noreferrer');
            expect(facebookButton.getAttribute('class')).to.equal('social-button facebook-colors icon-facebook');

            let twitterButton = box.childNodes[1];
            expect(twitterButton.nodeName).to.equal('A');
            expect(twitterButton.getAttribute('target')).to.equal('_blank');
            expect(twitterButton.getAttribute('href')).to.equal(expectedTwitterUrl);
            expect(twitterButton.getAttribute('rel')).to.equal('noopener noreferrer');
            expect(twitterButton.getAttribute('class')).to.equal('social-button twitter-colors icon-twitter');

            let mailButton = box.childNodes[2];
            expect(mailButton.nodeName).to.equal('A');
            expect(mailButton.getAttribute('target')).to.equal('_blank');
            expect(mailButton.getAttribute('href')).to.equal(expectedMailUrl);
            expect(mailButton.getAttribute('rel')).to.equal('noopener noreferrer');
            expect(mailButton.getAttribute('class')).to.equal('social-button mail-colors icon-envelop');

            let shareButton = box.childNodes[3];
            expect(shareButton.nodeName).to.equal('DIV');
            expect(shareButton.getAttribute('class')).to.equal('social-button share-colors icon-share2');
        });
    });
});
