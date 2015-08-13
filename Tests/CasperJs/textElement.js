casper.test.begin('Text element behaves correctly', function suite(test) {
    var url = config.baseUrl + '/demo/interactive-image',
        interactiveImage = '.interactive-image';

    casper.start(url, function (response) {
        test.assertEquals(response.status, 200, url + " is alive!");
        test.assertTitle('Interactive Image');
    });

    casper.then(function () {
        test.assertExists(interactiveImage);
    });

    casper.then(function () {
        var icon = xPathHelper('//*[@data-for="Vitres tintées"]');
        var container = xPathHelper('//*[@data-id="Vitres tintées"]');

        test.assertNotVisible(icon);
        mouse.move(interactiveImage);
        test.assertVisible(icon);
        test.assertExists(container);
        test.assertNotVisible(container);

        mouse.move(icon);
        test.assertVisible(container);

        var title = 'span.title';
        test.assertSelectorHasText(title, 'Vitres tintées');
        test.assertVisible(title);

        var description = 'p.description';
        test.assertSelectorHasText(description, 'Revêtement unique');
        test.assertVisible(description);

        mouse.move(50, 150);
        this.wait(1000, function () {
            this.echo('waited for 1 second');
            test.assertVisible(icon);
            test.assertNotVisible(container);
            mouse.move(0, 0);
            test.assertNotVisible(icon);
        });
    });

    casper.run(function () {
        test.done();
    });
});