export default class ItemHelper {
    /**
     * Determinate the position (left, top) of the item container after the hotspot position
     *
     * @param {number} hotspotLeft - Hotspot left.
     * @param {number} hotspotTop  - Hotspot top.
     * @param {number} width       - A width.
     * @returns {*[]}
     */
    static calculateInitialContainerPosition(hotspotLeft, hotspotTop, width) {
        return [
            (hotspotLeft + 25) - width / 2, // 25 is the width of the hotspot (50px) divided by 2
            hotspotTop + 40, // 40 is the offset to position the container below the hotspot
        ];
    }

    /**
     * Convert a position in pixels into a percentage of a total size
     *
     * @param {number} pixels - Pixels number.
     * @param {number} size   - Size.
     * @returns {string}
     */
    static convertPixelsToPercentage(pixels, size) {
        return (pixels * 100 / size).toFixed(2);
    }
}
