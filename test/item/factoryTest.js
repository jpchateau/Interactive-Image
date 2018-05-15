const assert = require('assert');
const FactoryTest = require('./../../src/js/item/factory');

describe('Factory', function() {
    describe('.constructor', function() {
        it('should return a valid TextItem object when given valid type and parameters', function() {
            let parameters = {
                "title": "test",
                "description": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            assert.strictEqual('TextItem', (new FactoryTest('text', parameters)).constructor.name);
        });

        it('should return a valid PictureItem object when given valid type and parameters', function() {
            let parameters = {
                "path": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            assert.strictEqual('PictureItem', (new FactoryTest('picture', parameters)).constructor.name);
        });

        it('should return a valid PictureItem object when given valid type (not well written) and valid parameters', function() {
            let parameters = {
                "path": "test",
                "position": {
                    "top": 100,
                    "left": 100,
                }
            };
            assert.strictEqual('PictureItem', (new FactoryTest('piCturE', parameters)).constructor.name);
        });
    });
});