const expect = require('chai').expect;
const TextItem = require('./../../src/js/item/textItem');

describe('TextItem', function() {
    describe('renderHtml', function() {
        it('should return a basic Text item', function () {
            let parameters = {
                title: "my title 1",
                description: "my description 1",
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
            expect(titleElement.textContent).to.equal('my title 1');

            let descriptionElement = textContainerElement.childNodes[1];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(descriptionElement.textContent).to.equal('my description 1');
        });

        it('should return a Text item with a picture', function () {
            let parameters = {
                title: "my title 2",
                description: "my description 2",
                picturePath: "my/path/picture-name.jpg",
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
            expect(titleElement.textContent).to.equal('my title 2');

            let pictureElement = textContainerElement.childNodes[1];
            expect(pictureElement.nodeName).to.equal('IMG');
            expect(pictureElement.getAttribute('class')).to.equal('picture');
            expect(pictureElement.getAttribute('src')).to.equal('my/path/picture-name.jpg');
            expect(pictureElement.getAttribute('alt')).to.equal('my title 2');

            let descriptionElement = textContainerElement.childNodes[2];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(descriptionElement.textContent).to.equal('my description 2');
        });

        it('should return a Text item with a link', function () {
            let parameters = {
                title: "my title 3",
                description: "my description 3",
                position: {
                    top: 100,
                    left: 100
                },
                link: {
                    url: "https://www.jpchateau.com/demo/interactive-image",
                    label: "Interactive Image Demo"
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
            expect(titleElement.textContent).to.equal('my title 3');

            let descriptionElement = textContainerElement.childNodes[1];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(descriptionElement.textContent).to.equal('my description 3');

            let linkElement = textContainerElement.childNodes[2];
            expect(linkElement.nodeName).to.equal('A');
            expect(linkElement.getAttribute('href')).to.equal('https://www.jpchateau.com/demo/interactive-image');
            expect(linkElement.textContent).to.equal('Interactive Image Demo');
        });

        it('should return a Text item with a picture and a link without label', function () {
            let parameters = {
                title: "my title 4",
                description: "my description 4",
                picturePath: "my/path/picture-name.jpg",
                position: {
                    top: 100,
                    left: 100
                },
                link: {
                    url: "https://www.jpchateau.com/demo/interactive-image"
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
            expect(titleElement.textContent).to.equal('my title 4');

            let pictureElement = textContainerElement.childNodes[1];
            expect(pictureElement.nodeName).to.equal('IMG');
            expect(pictureElement.getAttribute('class')).to.equal('picture');
            expect(pictureElement.getAttribute('alt')).to.equal('my title 4');

            let descriptionElement = textContainerElement.childNodes[2];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(pictureElement.getAttribute('src')).to.equal('my/path/picture-name.jpg');
            expect(descriptionElement.textContent).to.equal('my description 4');

            let linkElement = textContainerElement.childNodes[3];
            expect(linkElement.nodeName).to.equal('A');
            expect(linkElement.getAttribute('href')).to.equal('https://www.jpchateau.com/demo/interactive-image');
            expect(linkElement.textContent).to.equal('https://www.jpchateau.com/demo/interactive-image');
        });

        it('should return a Text item with a custom class and a sticky behavior', function () {
            let parameters = {
                title: "my title 5",
                description: "my description 5",
                position: {
                    top: 100,
                    left: 100
                },
                customClassName: "custom-class",
                sticky: true
            };

            let item = new TextItem(parameters);
            expect(item.constructor.name).to.equal('TextItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item behavior-sticky custom-class');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let closeButton = containerElement.childNodes[0];
            expect(closeButton.nodeName).to.equal('DIV');
            expect(closeButton.getAttribute('class')).to.equal('close-button icon-cancel-circle');

            let textContainerElement = containerElement.childNodes[1];
            expect(textContainerElement.nodeName).to.equal('DIV');
            expect(textContainerElement.getAttribute('class')).to.equal('text-item');

            let titleElement = textContainerElement.childNodes[0];
            expect(titleElement.nodeName).to.equal('SPAN');
            expect(titleElement.getAttribute('class')).to.equal('title');
            expect(titleElement.textContent).to.equal('my title 5');

            let descriptionElement = textContainerElement.childNodes[1];
            expect(descriptionElement.nodeName).to.equal('P');
            expect(descriptionElement.getAttribute('class')).to.equal('description');
            expect(descriptionElement.textContent).to.equal('my description 5');
        });
    });
});
