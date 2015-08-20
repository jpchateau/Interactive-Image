define(function() {
    'use strict';

    var Logger = function (settings) {
        this.settings = settings;
    };

    Logger.prototype.debug = function (message) {
        if (window.console && window.console.log && true === this.settings.debug) {
            window.console.log(message);
        }
    };

   return function(settings) {
       return new Logger(settings);
   };
});