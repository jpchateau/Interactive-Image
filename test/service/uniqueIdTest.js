const expect = require('chai').expect;
const UniqueId = require('./../../src/js/service/uniqueId');

describe('Unique Id generator', function() {
    describe('generate', function() {
        it('should return a valid identifier', function() {
            let identifier = UniqueId.generate();
            expect(identifier).to.be.a('string');
            expect(identifier).to.have.lengthOf(8);
        });

        it('should return valid and unique identifiers', function() {
            let identifier1 = UniqueId.generate('item');
            let identifier2 = UniqueId.generate('item');
            expect(identifier1).to.be.a('string');
            expect(identifier2).to.be.a('string');
            expect(identifier1).to.have.lengthOf(8+5);
            expect(identifier2).to.have.lengthOf(8+5);
            expect(identifier1).to.have.string('item');
            expect(identifier2).to.have.string('item');
            expect(identifier1).to.not.be.equals(identifier2);
        });
    });
});
