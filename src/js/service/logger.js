export default class Logger {
    constructor() {
        this.enable = false;
    }

    /**
     * @param {boolean} value - A value.
     */
    set debug(value) {
        this.enable = value;
    }

    /**
     * @param {string|object} message - A message or an object to display in the console.
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
     * @param {string} label - A group name.
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
