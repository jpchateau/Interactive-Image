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
     * @param {string,object} message - message or object to display in console
     */
    log(message) {
        if (!window.console || !window.console.log || false === this.enable) {
            return;
        }

        if (typeof message === 'object') {
            return window.console.dir(message);
        }

        window.console.log(message);
    }

    /**
     * @param {string} label - group name
     */
    group(label) {
        if (!window.console || !window.console.log || false === this.enable) {
            return;
        }

        window.console.group(label);
    }

    groupEnd() {
        if (!window.console || !window.console.log || false === this.enable) {
            return;
        }

        window.console.groupEnd();
    }
}
