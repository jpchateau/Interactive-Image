export default class ItemHelper {
    /**
     * Determinate the position (left, top) of the item container after the hotspot position
     *
     * @param {number} hotspotLeft
     * @param {number} hotspotTop
     * @param {number} width
     * @returns {*[]}
     */
    static calculateInitialContainerPosition(hotspotLeft, hotspotTop, width) {
        return [
            hotspotLeft + 25 - width / 2, // 25 is the width of the hotspot divided by 2
            hotspotTop + 40
        ];
    }

    /**
     * Convert a position in pixels into a percentage of a total size
     *
     * @param {number} pixels
     * @param {number} size
     * @returns {string}
     */
    static convertPixelsToPercentage(pixels, size) {
        return (pixels * 100 / size).toFixed(2);
    }
}
