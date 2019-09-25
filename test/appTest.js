const expect = require('chai').expect;
const App = require('./../src/js/app');
const jQuery = require('jquery');

describe('App', function() {
    const $image = jQuery('<div class="interactive-image"></div>');
    const items = {};
    const settings = {debug: false};
    const app = new App($image, items, settings);
    expect(app.constructor.name).to.equal('App');
});
