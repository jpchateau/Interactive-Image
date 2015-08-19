casper.test.begin('Text element', function suite(test) {
    var url = config.baseUrl + '/demo/interactive-image',
        interactiveImage = '.interactive-image';

    casper.start(url, function (response) {
        test.assertEquals(response.status, 200, url + " page is alive!");
        test.assertTitle('Interactive Image');
    });

    casper.then(function () {
        this.log('Main picture', 'info');

        var icons = [
            xPathHelper('//*[@data-for="Distribution"]'),
            xPathHelper('//*[@data-for="Canines"]'),
            xPathHelper('//*[@data-for="Threats"]'),
            xPathHelper('//*[@data-for="Fur"]')
        ];

        var containers = [
            xPathHelper('//*[@data-id="Distribution"]'),
            xPathHelper('//*[@data-id="Canines"]'),
            xPathHelper('//*[@data-id="Threats"]'),
            xPathHelper('//*[@data-id="Fur"]')
        ];

        test.assertExists(interactiveImage);

        for (var i = 0; i < 4; i++) {
            test.assertExists(icons[i]);
            test.assertNotVisible(icons[i]);
            test.assertExists(containers[i]);
            test.assertNotVisible(containers[i]);
        }

        mouse.move(interactiveImage);
        for (var i = 0; i < 4; i++) {
            test.assertVisible(icons[i]);
            test.assertNotVisible(containers[i]);
        }

        this.wait(100);

        mouse.move('h1');
        for (var i = 0; i < 4; i++) {
            test.assertNotVisible(icons[i]);
            test.assertNotVisible(containers[i]);
        }

        this.wait(100);

        mouse.move(interactiveImage);
    });

    casper.then(function () {
        this.log('Text - with mandatory elements only', 'info');

        var icon = xPathHelper('//*[@data-for="Distribution"]');
        var container = xPathHelper('//*[@data-id="Distribution"]');

        mouse.move(icon);
        test.assertVisible(icon);
        test.assertVisible(container, 'Container for "Distribution" is visible');

        var title = 'span.title';
        test.assertSelectorHasText(title, 'Distribution');
        test.assertVisible(title);

        var description = 'p.description';
        test.assertSelectorHasText(description, 'Clouded leopards occur from the Himalayan foothills in Nepal and India to Myanmar, Bhutan, Thailand, Peninsular Malaysia, Indochina, and in China south of the Yangtze River.');
        test.assertVisible(description);

        mouse.move(interactiveImage);
        test.assertVisible(icon);
        test.assertNotVisible(container);
    });

    casper.then(function () {
        this.log('Text - with picture', 'info');

        var icon = xPathHelper('//*[@data-for="Canines"]');
        var container = xPathHelper('//*[@data-id="Canines"]');

        mouse.move(icon);
        test.assertVisible(icon);
        test.assertVisible(container, 'Container for "Canines" is visible');

        var title = 'span.title';
        test.assertSelectorHasText(title, 'Canines');
        test.assertVisible(title);

        var description = 'p.description';
        test.assertSelectorHasText(description, 'They are often referred to as a "modern-day saber tooth" because they have the largest canines in proportion to their body size.');
        test.assertVisible(description);

        var picture = 'img.picture';
        test.assertEquals(this.getElementAttribute(picture, 'src'), '/images/demo/interactive-image/clouded-leopard-head.jpg');
        test.assertVisible(picture);

        mouse.move(interactiveImage);
        test.assertVisible(icon);
        test.assertNotVisible(container);
    });

    casper.then(function () {
        this.log('Text - with link', 'info');

        var icon = xPathHelper('//*[@data-for="Threats"]');
        var container = xPathHelper('//*[@data-id="Threats"]');

        mouse.move(icon);
        test.assertVisible(icon);
        test.assertVisible(container, 'Container for "Threats" is visible"');

        var title = 'span.title';
        test.assertSelectorHasText(title, 'Threats');
        test.assertVisible(title);

        var description = 'p.description';
        test.assertSelectorHasText(description, 'Many of the remaining forest areas are too small to ensure the long-term persistence of clouded leopard populations. They are threatened by habitat loss following large–scale deforestation and commercial poaching for the wildlife trade.');
        test.assertVisible(description);

        var link = '.container a';
        test.assertEquals(this.getElementAttribute(link, 'href'), 'http://www.cloudedleopard.org/');
        test.assertSelectorHasText(link, 'Clouded Leopard Project');
        test.assertVisible(link);

        mouse.move(interactiveImage);
        test.assertVisible(icon);
        test.assertNotVisible(container);
    });

    casper.run(function () {
        test.done();
    });
});