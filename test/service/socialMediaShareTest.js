const expect = require('chai').expect;
const SocialMediaShare = require('./../../src/js/service/socialMediaShare');
const jQuery = require('jquery');

describe('Social Media Share', function() {
    const $image = jQuery('<div class="interactive-image"></div>');
    const socialMediaShare = new SocialMediaShare($image);
    expect(socialMediaShare.constructor.name).to.equal('SocialMediaShare');
});
