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
            xPathHelper('//div[contains(@data-for, "Distribution")]'),
            xPathHelper('//div[contains(@data-for, "Canines")]'),
            xPathHelper('//div[contains(@data-for, "Threats")]'),
            xPathHelper('//div[contains(@data-for, "Fur")]'),
        ];

        var containers = [
            xPathHelper('//div[contains(@data-id, "Distribution")]'),
            xPathHelper('//div[contains(@data-id, "Canines")]'),
            xPathHelper('//div[contains(@data-id, "Threats")]'),
            xPathHelper('//div[contains(@data-id, "Fur")]'),
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
        this.log('Text item', 'info');

        var icon = xPathHelper('//div[contains(@data-for, "Distribution")]');
        var container = xPathHelper('//div[contains(@data-id, "Distribution")]');

        mouse.move(icon);
        test.assertVisible(icon);
        test.assertVisible(container, 'Container for "Distribution" is visible');

        var title = 'span.title';
        test.assertSelectorHasText(title, 'Distribution');
        test.assertVisible(title);

        var description = 'p.description';
        test.assertSelectorHasText(description, 'Clouded leopards occur from the Himalayan foothills in Nepal and India to Myanmar, Bhutan, Thailand, Peninsular Malaysia, Indochina, and in China south of the Yangtze River.');
        test.assertVisible(description);
    });

    casper.run(function () {
        test.done();
    });
});