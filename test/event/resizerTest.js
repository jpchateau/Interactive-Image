const Behavior = require('../../src/js/event/behavior');
const expect = require('chai').expect;
const jQuery = require('jquery');
const Resizer = require('../../src/js/event/resizer');

describe('Resizer', function() {
    describe('constructor', function() {
        it('should initialize Resizer', function() {
            const $image = jQuery('<div class="interactive-image"></div>');
            const behavior = new Behavior($image);
            const resizer = new Resizer(behavior);
            expect(resizer.constructor.name).to.equal('Resizer');
        });
    });

    describe('breakpoints', function() {
        it('should return an associative array of breakpoints', function() {
            expect(Resizer.breakpoints()).to.deep.equal({'smartphones-portrait': 320});
        });
    });
});
