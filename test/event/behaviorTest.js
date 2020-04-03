const Behavior = require('../../src/js/event/behavior');
const expect = require('chai').expect;
const jQuery = require('jquery');

describe('Behavior', function() {
    describe('constructor', function() {
        it('should initialize Behavior', function() {
            const $image = jQuery('<div class="interactive-image"></div>');
            const behavior = new Behavior($image);
            expect(behavior.constructor.name).to.equal('Behavior');
            expect(behavior.enabled).to.be.false;
        });
    });
});
