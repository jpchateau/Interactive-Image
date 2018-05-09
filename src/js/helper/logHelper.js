export default class LogHelper {
    /**
     * @param {boolean} debug
     */
    constructor(debug) {
        this.debug = debug;
    }

    /**
     * @param {string} message
     */
    log(message) {
        if (window.console && window.console.log && true === this.debug) {
            window.console.log(message);
        }
    }
}