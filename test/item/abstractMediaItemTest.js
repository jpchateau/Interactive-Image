const expect = require('chai').expect;
const AbstractMediaItem = require('./../../src/js/item/abstractMediaItem');

describe('AbstractMediaItem', function() {
    describe('constructor', function() {
        it('should throw an exception when trying to instantiate an abstract class', function() {
            expect(() => new AbstractMediaItem({})).to.throw('Abstract Class "AbstractMediaItem" cannot be instantiated directly');
        });
    });
});
