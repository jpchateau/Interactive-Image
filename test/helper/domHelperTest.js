const DomHelper = require('./../../src/js/helper/domHelper');
const expect = require('chai').expect;

describe('DOMHelper', function() {
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
            DomHelper.showElement(element);
            expect(element.style.display).to.equal('block');
        });
    });

    describe('hideElement', function() {
        it('should change css property', function() {
            let element = document.createElement('div');
            element.style.display = 'block';
            DomHelper.hideElement(element);
            expect(element.style.display).to.equal('none');
        });
    });

    describe('elementContainsMediaItem', function() {
        it('should indicate an element contains a media', function() {
            let element = document.createElement('div');
            let mediaElement = document.createElement('div');
            mediaElement.classList.add('audio-item');
            element.appendChild(mediaElement);
            expect(DomHelper.elementContainsMediaItem(element)).to.be.true;
        });

        it('should indicate an element does not contain a media', function() {
            let element = document.createElement('div');
            let mediaElement = document.createElement('div');
            mediaElement.classList.add('text-item');
            element.appendChild(mediaElement);
            expect(DomHelper.elementContainsMediaItem(element)).to.be.false;
        });
    });
});
