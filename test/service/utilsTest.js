const expect = require('chai').expect;
const Utils = require('./../../src/js/service/utils');

describe('Utils', function() {
    describe('param', function() {
        it('should build URL parameters', function() {
            expect(Utils.param({a:"foo", b:"bar"})).to.equal('a=foo&b=bar');
        });
    });
});
