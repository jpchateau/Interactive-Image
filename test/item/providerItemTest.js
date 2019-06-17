const expect = require('chai').expect;
const ProviderItem = require('./../../src/js/item/providerItem');

describe('Provider Item', function() {
    describe('renderHtml', function() {
        it('should return a complete provider item', function() {
            let parameters = {
                providerName: "youtube",
                parameters: {
                    videoId: "XXXYYYZZZ"
                },
                position: {
                    top: 100,
                    left: 100
                }
            };

            let item = new ProviderItem(parameters);
            expect(item.constructor.name).to.equal('ProviderItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let providerContainerElement = containerElement.childNodes[0];
            expect(providerContainerElement.nodeName).to.equal('DIV');
            expect(providerContainerElement.getAttribute('class')).to.equal('provider-item');

            let iframeElement = providerContainerElement.childNodes[0];
            expect(iframeElement.nodeName).to.equal('IFRAME');
            expect(iframeElement.getAttribute('src')).to.contain('https://www.youtube.com/embed/XXXYYYZZZ');
            expect(iframeElement.getAttribute('frameborder')).to.equal('0');
        });

        it('should throw an exception when given provider is not supported', function() {
            let parameters = {
                providerName: "vimeo",
                parameters: {
                    videoId: "XXXYYYZZZ"
                },
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(() => new ProviderItem(parameters)).to.throw('Unsupported provider "vimeo"');
        });
    });
});
