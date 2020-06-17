const expect = require('chai').expect;
const App = require('./../src/js/app');
const jQuery = require('jquery');

describe('App', function() {
    const $image = jQuery('<div class="interactive-image"></div>');

    describe('constructor', function() {
        it('should construct App object with correct default settings', function() {
            const app = new App($image, {});
            expect(app.constructor.name).to.equal('App');
            expect(app.settings.debug).to.be.false;
            expect(app.settings.allowHtml).to.be.false;
            expect(app.settings.shareBox).to.be.true;
            expect(app.settings.triggerEvent).to.equal('hover');
        });

        it('should construct App object with correct overriden settings', function() {
            const settings = {
                debug: true,
                allowHtml: true,
                shareBox: false,
                triggerEvent: 'click'
            };
            const app = new App($image,{}, settings);
            expect(app.constructor.name).to.equal('App');
            expect(app.settings.debug).to.be.true;
            expect(app.settings.allowHtml).to.be.true;
            expect(app.settings.shareBox).to.be.false;
            expect(app.settings.triggerEvent).to.equal('click');
        });

        it('should throw errors when constructing App object with invalid settings', function() {
            expect(() => new App($image, {}, {debug: "string"}).to.throw('Check the "allowHtml" option. Allowed type: boolean.'));
            expect(() => new App($image, {}, {allowHtml: "string"}).to.throw('Check the "allowHtml" option. Allowed type: boolean.'));
            expect(() => new App($image, {}, {shareBox: "string"}).to.throw('Check the "shareBox" option. Allowed type: boolean.'));
            expect(() => new App($image, {}, {triggerEvent: "mouseleave"}).to.throw('Check the "triggerEvent" option. Allowed values: "hover", "click".'));
            expect(() => new App($image, {}, {socialMedia: "string"}).to.throw('Check the "socialMedia" option.'));
        });
    });
});
