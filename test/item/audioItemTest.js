const expect = require('chai').expect;
const AudioItem = require('./../../src/js/item/audioItem');

describe('Audio Item', function() {
    describe('renderHtml', function() {
        it('should return a complete audio item', function() {
            let parameters = {
                path: "test.mp3",
                caption: "my test caption",
                position: {
                    top: 100,
                    left: 100
                }
            };

            let item = new AudioItem(parameters);
            expect(item.constructor.name).to.equal('AudioItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let audioContainerElement = containerElement.childNodes[0];
            expect(audioContainerElement.nodeName).to.equal('DIV');
            expect(audioContainerElement.getAttribute('class')).to.equal('audio-item');

            let audioElement = audioContainerElement.childNodes[0];
            expect(audioElement.nodeName).to.equal('AUDIO');
            expect(audioElement.getAttribute('class')).to.equal('genuine-theme');
            expect(audioElement.hasAttribute('controls')).to.be.true;
            expect(audioElement.getAttribute('preload')).to.equal('metadata');
            expect(audioElement.textContent).to.equal('Your browser does not support the audio tag.')

            let sourceElement = audioElement.childNodes[1];
            expect(sourceElement.nodeName).to.equal('SOURCE');
            expect(sourceElement.getAttribute('src')).to.equal('test.mp3');
            expect(sourceElement.getAttribute('type')).to.equal('audio/mpeg');

            let captionElement = audioContainerElement.childNodes[1];
            expect(captionElement.nodeName).to.equal('SPAN');
            expect(captionElement.getAttribute('class')).to.equal('caption');
            expect(captionElement.textContent).to.equal('my test caption');
        });
    });
});
