const expect = require('chai').expect;
const FileHelper = require('./../../src/js/helper/fileHelper');

describe('File useful functions', function() {
    describe('guessExtension', function() {
        it('should return the extension', function() {
            expect(FileHelper.guessExtension('test.test.wav')).to.equal('wav');
        });
    });
});
