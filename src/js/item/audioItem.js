import BaseItem from "./baseItem";
import FileHelper from "./../helper/fileHelper";

/**
 * @extends BaseItem
 */
export default class AudioItem extends BaseItem {
    /**
     * Allowed file extensions for audio tag
     *
     * @returns {{mp3: string, wav: string, ogg: string}}
     */
    static fileFormats() {
        return {
            'mp3': 'audio/mpeg',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav'
        };
    }

    /**
     * @returns {string}
     */
    static unsupportedTagMessage() {
        return 'Your browser does not support the audio tag.';
    }

    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        super(parameters);

        this.checkRequiredParameters(parameters, ['path']);

        this.path = parameters.path;
        this.caption = parameters.caption;

        this.fileExtension = FileHelper.guessExtension(this.path);

        if (!AudioItem.fileFormats().hasOwnProperty(this.fileExtension)) {
            throw Error('Unsupported file extension "' + this.fileExtension + '"');
        }
    }

    /**
     * @returns {HTMLElement}
     */
    createAudio() {
        const audio = this.domHelper.createElement('audio', 'genuine-theme', AudioItem.unsupportedTagMessage());
        audio.setAttribute('controls', '');
        audio.setAttribute('preload', 'auto');

        const source = this.domHelper.createElement('source');
        source.setAttribute('src', this.path);
        source.setAttribute('type', AudioItem.fileFormats()[this.fileExtension]);

        audio.appendChild(source);

        return audio;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const audioItem = this.domHelper.createElement('div', 'audio-item');

        if ('undefined' !== typeof this.caption) {
            const caption = this.domHelper.createElement('span', 'caption', this.caption);
            audioItem.appendChild(caption);
        }

        audioItem.appendChild(this.createAudio());

        element.appendChild(audioItem);

        return element;
    }
}
