const expect = require('chai').expect;
const UniqueId = require('./../../src/js/service/uniqueId');

describe('Unique Id generator', function() {
    describe('generate', function() {
        it('should return a valid identifier', function() {
            let identifier = UniqueId.generate('item');
            expect(identifier).to.be.a('string');
            expect(identifier).to.have.lengthOf(8+5);
            expect(identifier).to.have.string('item');
        });
    });
});
