export default class LogHelper {
    /**
     * @param {boolean} debug
     */
    constructor(debug) {
        this.debug = debug;
    }

    /**
     * @param {string}      message
     * @param {number=null} milliseconds
     */
    log(message, milliseconds = null) {
        if (!window.console || !window.console.log || false === this.debug) {
            return;
        }

        if (null !== milliseconds) {
            window.console.log(message + ' in ' + milliseconds.toFixed(3) + ' milliseconds');
        } else {
            window.console.log(message);
        }
    }
}