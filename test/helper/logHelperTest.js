const expect = require('chai').expect;
const LogHelper = require('./../../src/js/helper/logHelper');

describe('LogHelper', function() {
    describe('constructor', function() {
        it('should initialize Log Helper', function() {
            let logHelper = new LogHelper();
            expect(logHelper.constructor.name).to.equal('LogHelper');
            expect(logHelper.enable).to.be.false;
            logHelper.debug = true;
            expect(logHelper.enable).to.be.true;
        });
    });
});
