const expect = require('chai').expect;
const DomHelper = require('./../../src/js/helper/domHelper');
const jQuery = require('jquery');

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
            let element = DomHelper.createElement('div', {id: 'my-id', class: 'my-class'}, '<b>my text</b>');
            expect(element.nodeName).to.equal('DIV');
            expect(element.getAttribute('id')).to.equal('my-id');
            expect(element.getAttribute('class')).to.equal('my-class');
            expect(element.textContent).to.equal('<b>my text</b>');
            expect(element.innerHTML).to.equal('&lt;b&gt;my text&lt;/b&gt;');
        });

        it('should return a tag with multiple attributes and html markup', function() {
            let element = DomHelper.createElement('div', {id: 'my-id', class: 'my-class'}, '<b>my text</b>', true);
            expect(element.nodeName).to.equal('DIV');
            expect(element.getAttribute('id')).to.equal('my-id');
            expect(element.getAttribute('class')).to.equal('my-class');
            expect(element.textContent).to.equal('my text');
            expect(element.innerHTML).to.equal('<b>my text</b>');
        });
    });

    describe('showElement', function() {
        it('should change css property', function() {
            let element = document.createElement('div');
            element.style.display = 'none';
            let $element = jQuery(element);
            DomHelper.showElement($element);
            expect($element.css('display')).to.equal('block');
        });
    });

    describe('hideElement', function() {
        it('should change css property', function() {
            let element = document.createElement('div');
            element.style.display = 'block';
            let $element = jQuery(element);
            DomHelper.hideElement($element);
            expect($element.css('display')).to.equal('none');
        });
    });
});
