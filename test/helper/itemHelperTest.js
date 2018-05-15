const assert = require('assert');
const ItemHelper = require('./../../src/js/helper/itemHelper');

describe('ItemHelper', function() {
    describe('.calculateInitialContainerPosition', function() {
        it('should return a valid array', function() {
            assert.deepStrictEqual([165, 140], new ItemHelper().calculateInitialContainerPosition(200, 100, 100));
        });
    });

    describe('.calculateInitialArrowPosition', function() {
        it('should return a valid number', function() {
            assert.strictEqual(43, new ItemHelper().calculateInitialArrowPosition(100));
        });
    });
});