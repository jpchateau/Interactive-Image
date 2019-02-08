export default class UniqueId {
    /**
     * Generate a unique id
     *
     * @returns {number}
     */
    now() {
        let time = Date.now();
        let last = this.last || time;

        return this.last = time > last ? time : last + 1;
    }

    /**
     * Get a unique string from a unique id and a prefix
     *
     * @param {string=''} prefix
     * @returns {string}
     */
    generate(prefix = '') {
        return prefix + '_' + this.now().toString(36);
    }
}