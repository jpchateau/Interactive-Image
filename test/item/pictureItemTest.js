const expect = require('chai').expect;
const PictureItem = require('./../../src/js/item/pictureItem');

describe('Picture Item', function() {
    describe('renderHtml', function() {
        it('should return a complete picture item', function() {
            let parameters = {
                path: "test1.png",
                caption: "my test caption",
                position: {
                    "top": 100,
                    "left": 100
                }
            };

            let item = new PictureItem(parameters);
            expect(item.constructor.name).to.equal('PictureItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let pictureContainerElement = containerElement.childNodes[0];
            expect(pictureContainerElement.nodeName).to.equal('DIV');
            expect(pictureContainerElement.getAttribute('class')).to.equal('picture-item');
            expect(pictureContainerElement.getAttribute('data-caption')).to.equal('my test caption');

            let pictureElement = pictureContainerElement.childNodes[0];
            expect(pictureElement.nodeName).to.equal('IMG');
            expect(pictureElement.getAttribute('src')).to.equal('test1.png');
            expect(pictureElement.getAttribute('alt')).to.equal('my test caption');
        });

        it('should return a picture item with a link and a default alt attribute', function() {
            let parameters = {
                path: "test2.png",
                linkUrl: "https://www.nationalgeographic.com",
                position: {
                    "top": 100,
                    "left": 100
                }
            };

            let item = new PictureItem(parameters);
            expect(item.constructor.name).to.equal('PictureItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let pictureContainerElement = containerElement.childNodes[0];
            expect(pictureContainerElement.nodeName).to.equal('DIV');
            expect(pictureContainerElement.getAttribute('class')).to.equal('picture-item');
            expect(pictureContainerElement.hasAttribute('data-caption')).to.be.false;

            let linkElement = pictureContainerElement.childNodes[0];
            expect(linkElement.nodeName).to.equal('A');
            expect(linkElement.getAttribute('href')).to.equal('https://www.nationalgeographic.com');

            let pictureElement = linkElement.childNodes[0];
            expect(pictureElement.nodeName).to.equal('IMG');
            expect(pictureElement.getAttribute('src')).to.equal('test2.png');
            expect(pictureElement.getAttribute('alt')).to.equal('Picture #' + containerElement.getAttribute('data-id'));
        });
    });
});
