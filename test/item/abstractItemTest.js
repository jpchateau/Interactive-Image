const expect = require('chai').expect;
const AbstractItem = require('./../../src/js/item/abstractItem');

describe('AbstractItem', function() {
    describe('constructor', function() {
        it('should throw an exception when trying to instantiate an abstract class', function() {
            expect(() => new AbstractItem({})).to.throw('Abstract Class "AbstractItem" cannot be instantiated directly');
        });
    });
});
