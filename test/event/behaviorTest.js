const Behavior = require('../../src/js/event/behavior');
const expect = require('chai').expect;
const jQuery = require('jquery');

describe('Behavior', function() {
    describe('constructor', function() {
        it('should initialize Behavior', function() {
            const $image = jQuery('<div class="interactive-image"></div>');
            const behavior = new Behavior($image, 'hover');
            expect(behavior.constructor.name).to.equal('Behavior');
            expect(behavior.enabled).to.be.false;
            expect(behavior.triggerEventName).to.be.a('string');
        });
    });

    describe('mouseEvents', function() {
        it('should return an associative array of mouse events', function() {
            expect(Behavior.mouseEvents()).to.deep.equal({
                'hover': 'mouseenter',
                'click': 'click'
            });
        });
    });
});
