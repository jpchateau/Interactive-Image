const expect = require('chai').expect;
const FileHelper = require('./../../src/js/helper/fileHelper');

describe('File useful functions', function() {
    describe('guessExtension', function() {
        it('should return the extension', function() {
            expect(FileHelper.guessExtension('test.test.wav')).to.equal('wav');
        });
    });

    describe('checkFileFormat', function() {
        it('should not throw an error thanks to a recognized extension', function() {
            expect(() => FileHelper.checkFileFormat('mp3', {'mp3': 'audio/mpeg', 'mp4': 'video/mp4'})).to.not.throw();
        });

        it('should throw an error because of an unrecognized extension', function() {
            expect(() => FileHelper.checkFileFormat('mp5', {'mp3': 'audio/mpeg', 'mp4': 'video/mp4'})).to.throw('Unsupported file extension "mp5"');
        });
    });
});


