const expect = require('chai').expect;
const ItemFactory = require('./../../src/js/item/factory');

describe('Factory', function() {
    describe('constructor', function() {
        it('should return a valid TextItem object when given valid type and parameters', function() {
            let parameters = {
                title: "test",
                description: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(new ItemFactory().create('text', parameters).constructor.name).to.equal('TextItem');
        });

        it('should return a valid PictureItem object when given valid type and parameters', function() {
            let parameters = {
                path: "test",
                position: {
                    "top": 100,
                    "left": 100
                }
            };
            expect(new ItemFactory().create('picture', parameters).constructor.name).to.equal('PictureItem');
        });

        it('should return a valid AudioItem object when given valid type and parameters', function() {
            let parameters = {
                path: "test.mp3",
                caption: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(new ItemFactory().create('audio', parameters).constructor.name).to.equal('AudioItem');
        });

        it('should return a valid VideoItem object when given valid type and parameters', function() {
            let parameters = {
                path: "test.mp4",
                caption: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(new ItemFactory().create('video', parameters).constructor.name).to.equal('VideoItem');
        });

        it('should return a valid ProviderItem object when given valid type and parameters', function() {
            let parameters = {
                providerName: "youtube",
                parameters: {},
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(new ItemFactory().create('provider', parameters).constructor.name).to.equal('ProviderItem');
        });

        it('should return a valid PictureItem object when given valid type (not well written) and valid parameters', function() {
            let parameters = {
                path: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(new ItemFactory().create('piCturE', parameters).constructor.name).to.equal('PictureItem');
        });

        it('should throw an exception when given type is not valid', function() {
            let parameters = {
                title: "test",
                description: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(() => new ItemFactory().create('tex', parameters).constructor.name).to.throw('Invalid item type "tex" (allowed values: "audio", "picture", "provider", "text", "video")');
        });

        it('should throw an exception when given parameters are not valid', function() {
            let parameters = {
                description: "test",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(() => new ItemFactory().create('text', parameters).constructor.name).to.throw('Missing required parameter named "title"');
        });

        it('should throw an exception when given audio format is not allowed', function() {
            let parameters = {
                type: "audio",
                path: "test.flac",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(() => new ItemFactory().create('audio', parameters).constructor.name).to.throw('Unsupported file extension "flac"');
        });

        it('should throw an exception when given video format is not allowed', function() {
            let parameters = {
                type: "video",
                path: "test.avi",
                position: {
                    top: 100,
                    left: 100
                }
            };
            expect(() => new ItemFactory().create('video', parameters).constructor.name).to.throw('Unsupported file extension "avi"');
        });
    });
});
