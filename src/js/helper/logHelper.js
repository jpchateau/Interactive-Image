export default class LogHelper {
    constructor(debug) {
        this.debug = debug;
    }

    log(message) {
        if (window.console && window.console.log && true === this.debug) {
            window.console.log(message);
        }
    }
}