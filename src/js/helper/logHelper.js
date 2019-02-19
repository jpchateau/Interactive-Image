export default class LogHelper {
    /**
     * @param {boolean} debug
     */
    constructor(debug) {
        this.debug = debug;
    }

    /**
     * @param {string}         message
     * @param {number}         milliseconds
     * @param {string='black'} color
     */
    log(message, milliseconds, color = 'black') {
        if (!window.console || !window.console.log || false === this.debug) {
            return;
        }

        if ('number' === typeof milliseconds) {
            message += ' in ' + milliseconds.toFixed(0) + ' ms';
        }

        window.console.log('%c' + message, 'color:' + color);
    }
}
