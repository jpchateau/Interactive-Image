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
            hotspotLeft + 15 - width / 2,
            hotspotTop + 40
        ];
    }
}
