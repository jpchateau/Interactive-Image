var config = require('Config/parameters.json'),
    xPathHelper = require('casper').selectXPath,
    mouse = require("mouse").create(casper);

casper.options.viewportSize = {width: 1920, height: 1080};
casper.options.waitTimeout = 10000;
casper.options.verbose = true;
casper.options.logLevel = "warning";