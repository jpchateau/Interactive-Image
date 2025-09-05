export default class Utils {
    /**
     * @param parameters
     * @returns {string}
     */
    static param(parameters) {
        const urlParams = new URLSearchParams(Object.entries(parameters));

        return urlParams.toString();
    }
}
