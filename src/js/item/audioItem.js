import DomHelper from "../helper/domHelper";
import MediaItem from "./mediaItem";

/**
 * @extends MediaItem
 */
export default class AudioItem extends MediaItem {
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
    }

    /**
     * Allowed file extensions
     *
     * @returns {{mp3: string, wav: string, ogg: string}}
     */
    supportedFileFormats() {
        return {
            'mp3': 'audio/mpeg',
            'ogg': 'audio/ogg',
            'wav': 'audio/wav'
        };
    }

    /**
     * @returns {HTMLElement}
     */
    createMedia() {
        const audio = DomHelper.createElement('audio', {'class': 'genuine-theme'}, AudioItem.unsupportedTagMessage());
        audio.setAttribute('controls', '');
        audio.setAttribute('preload', 'metadata');

        audio.appendChild(this.createSource());

        return audio;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        return this.createItem('audio-item');
    }
}
