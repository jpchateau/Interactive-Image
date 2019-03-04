const expect = require('chai').expect;
const PictureItem = require('./../../src/js/item/pictureItem');

describe('Picture Item', function() {
    describe('renderHtml', function() {
        it('should return a complete picture item', function() {
            let parameters = {
                path: "test.png",
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
            expect(pictureElement.getAttribute('src')).to.equal('test.png');
            expect(pictureElement.getAttribute('alt')).to.equal('my test caption');
        });
    });
});
