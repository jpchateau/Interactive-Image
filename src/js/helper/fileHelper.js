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
        if (allowedFormats.hasOwnProperty(extension)) {
            return;
        }

        throw Error('Unsupported file extension "' + extension + '"');
    }
}
