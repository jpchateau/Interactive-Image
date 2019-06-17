const expect = require('chai').expect;
const VideoItem = require('./../../src/js/item/videoItem');

describe('Video Item', function() {
    describe('renderHtml', function() {
        it('should return a complete video item', function() {
            let parameters = {
                path: "test.mp4",
                caption: "my test caption",
                poster: "test.png",
                position: {
                    top: 100,
                    left: 100
                }
            };

            let item = new VideoItem(parameters);
            expect(item.constructor.name).to.equal('VideoItem');

            let containerElement = item.renderHtml();
            expect(containerElement.nodeName).to.equal('DIV');
            expect(containerElement.getAttribute('class')).to.equal('item');
            expect(containerElement.hasAttribute('data-id')).to.be.true;

            let videoContainerElement = containerElement.childNodes[0];
            expect(videoContainerElement.nodeName).to.equal('DIV');
            expect(videoContainerElement.getAttribute('class')).to.equal('video-item');

            let videoElement = videoContainerElement.childNodes[0];
            expect(videoElement.nodeName).to.equal('VIDEO');
            expect(videoElement.getAttribute('class')).to.equal('genuine-theme');
            expect(videoElement.hasAttribute('controls')).to.be.true;
            expect(videoElement.getAttribute('controlsList')).to.equal('nodownload');
            expect(videoElement.getAttribute('preload')).to.equal('metadata');
            expect(videoElement.getAttribute('poster')).to.equal('test.png');
            expect(videoElement.textContent).to.equal('Your browser does not support the video tag.');

            let sourceElement = videoElement.childNodes[1];
            expect(sourceElement.nodeName).to.equal('SOURCE');
            expect(sourceElement.getAttribute('src')).to.equal('test.mp4');
            expect(sourceElement.getAttribute('type')).to.equal('video/mp4');

            let captionElement = videoContainerElement.childNodes[1];
            expect(captionElement.nodeName).to.equal('SPAN');
            expect(captionElement.getAttribute('class')).to.equal('caption');
            expect(captionElement.textContent).to.equal('my test caption');
        });
    });
});
