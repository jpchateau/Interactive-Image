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

    /**
     * Throw an error if file extension is not allowed
     *
     * @param {string} extension
     * @param {object} allowedFormats
     */
    static checkFileFormat(extension, allowedFormats) {
        const formatsMap = new Map(Object.entries(allowedFormats));

        if (false === formatsMap.has(extension)) {
            throw Error('Unsupported file extension "' + extension + '"');
        }
    }
}
