export default class UniqueId {
    /**
     * @returns {number}
     */
    static now() {
        let time = Date.now();
        this.last = this.last || time;
        this.last = time > this.last ? time : this.last + 1;

        return this.last;
    }

    /**
     * Get a unique identifier from date and a prefix
     *
     * @param {string} prefix
     * @returns {string}
     */
    static generate(prefix) {
        return (typeof prefix !== 'undefined' ? prefix + '_' : '') + UniqueId.now().toString(36);
    }
}
