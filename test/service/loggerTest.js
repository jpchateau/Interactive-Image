const expect = require('chai').expect;
const Logger = require('../../src/js/service/logger');

describe('Logger', function() {
    describe('constructor', function() {
        it('should initialize Logger', function() {
            const logger = new Logger();
            expect(logger.constructor.name).to.equal('Logger');
            expect(logger.enable).to.be.false;
            logger.debug = true;
            expect(logger.enable).to.be.true;
        });
    });
});
