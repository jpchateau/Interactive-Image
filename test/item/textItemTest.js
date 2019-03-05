const expect = require('chai').expect;
const TextItem = require('./../../src/js/item/textItem');

describe('Text Item', function() {
    describe('renderHtml', function() {
        it('should return a complete text item', function() {
            let parameters = {
                title: "my test title",
                description: "my test description",
                position: {
                    top: 100,
                    left: 100
                }
            };

            let item = new TextItem(parameters);
            expect(item.constructor.name).to.equal('TextItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let textContainerElement = containerElement.childNodes[0];
            expect(textContainerElement.nodeName).to.equal('DIV');
            expect(textContainerElement.getAttribute('class')).to.equal('text-item');

            let titleElement = textContainerElement.childNodes[0];
            expect(titleElement.nodeName).to.equal('SPAN');
            expect(titleElement.getAttribute('class')).to.equal('title');
            expect(titleElement.textContent).to.equal('my test title');

            let descriptionElement = textContainerElement.childNodes[1];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(descriptionElement.textContent).to.equal('my test description');
        });
    });
});
