const expect = require('chai').expect;
const StringHelper = require('./../../src/js/helper/stringHelper');

describe('StringHelper', function() {
    describe('param', function() {
        it('should build URL parameters', function() {
            expect(StringHelper.param({a:"foo", b:"bar"})).to.equal('a=foo&b=bar');
        });
    });
});
