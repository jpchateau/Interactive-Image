export default class Logger {
    constructor() {
        this.enable = false;
    }

    /**
     * @param {boolean} value
     */
    set debug(value) {
        this.enable = value;
    }

    /**
     * @param {string} message         - message to display in console
     * @param {?number} [milliseconds] - time
     * @param {string} [color=black]   - message color
     */
    log(message, milliseconds = null, color = 'black') {
        if (!window.console || !window.console.log || false === this.enable) {
            return;
        }

        if ('number' === typeof milliseconds) {
            message += ' in ' + milliseconds.toFixed(0) + ' ms';
        }

        window.console.log('%c' + message, 'color:' + color);
    }
}
