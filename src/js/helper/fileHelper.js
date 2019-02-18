export default class FileHelper {
    /**
     * Guess extension of a filename
     *
     * @param {string} filename
     * @returns {string}
     */
    static guessExtension(filename) {
        return filename.split('.').pop();
    }
}
