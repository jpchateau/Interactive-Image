export default class ItemHelper {
    /**
     * @param {number} hotspotLeft
     * @param {number} hotspotTop
     * @param {number} width
     * @returns {*[]}
     */
    calculateInitialContainerPosition(hotspotLeft, hotspotTop, width) {
        return [
            hotspotLeft + 15 - width / 2,
            hotspotTop + 40
        ];
    }

    /**
     * @param {number} width
     * @returns {number}
     */
    calculateInitialArrowPosition(width) {
        return width / 2 - 7;
    }

    /**
     * Generate an unique id
     *
     * @param {string=''} prefix
     * @returns {string}
     */
    static uniqid(prefix = '') {
        const time = Date.now();
        var last = this.last || time;

        last = time > last ? time : last + 1;

        return prefix + '_' + last.toString(36);
    }
}