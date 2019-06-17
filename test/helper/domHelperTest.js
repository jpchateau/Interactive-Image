const expect = require('chai').expect;
const DomHelper = require('./../../src/js/helper/domHelper');

describe('DOM Helper', function() {
    describe('createElement', function() {
        it('should return a simple tag', function() {
            expect(DomHelper.createElement('span').nodeName).to.equal('SPAN');
        });

        it('should return a tag with an attribute', function() {
            let element = DomHelper.createElement('img', {src: 'path/to/image.png'});
            expect(element.nodeName).to.equal('IMG');
            expect(element.getAttribute('src')).to.equal('path/to/image.png');
        });

        it('should return a tag with multiple attributes and text', function() {
            let element = DomHelper.createElement('div', {id: 'my-id', class: 'my-class'}, 'my text');
            expect(element.nodeName).to.equal('DIV');
            expect(element.getAttribute('id')).to.equal('my-id');
            expect(element.getAttribute('class')).to.equal('my-class');
            expect(element.textContent).to.equal('my text');
        });
    });
});
