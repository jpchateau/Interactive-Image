const expect = require('chai').expect;
const ItemHelper = require('./../../src/js/helper/itemHelper');

describe('Item useful functions', function() {
    describe('calculateInitialContainerPosition', function() {
        it('should return a valid array', function() {
            expect(new ItemHelper().calculateInitialContainerPosition(200, 100, 100)).to.deep.equal([165, 140]);
        });
    });
});
