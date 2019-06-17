import BaseItem from "./baseItem";
import DomHelper from "../helper/domHelper";
import FileHelper from "./../helper/fileHelper";

/**
 * @extends BaseItem
 */
export default class AudioItem extends BaseItem {
    /**
     * Allowed file extensions
     *
     * @returns {{mp3: string, wav: string, ogg: string}}
     */
    static supportedFileFormats() {
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

        FileHelper.checkFileFormat(this.fileExtension, AudioItem.supportedFileFormats());
    }

    /**
     * @returns {HTMLElement}
     */
    createAudio() {
        const audio = DomHelper.createElement('audio', {'class': 'genuine-theme'}, AudioItem.unsupportedTagMessage());
        audio.setAttribute('controls', '');
        audio.setAttribute('preload', 'metadata');

        const source = DomHelper.createElement('source');
        source.setAttribute('src', this.path);
        source.setAttribute('type', AudioItem.supportedFileFormats()[this.fileExtension]);

        audio.appendChild(source);

        return audio;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const audioItem = DomHelper.createElement('div', {'class': 'audio-item'});

        audioItem.appendChild(this.createAudio());

        if ('undefined' !== typeof this.caption) {
            const caption = DomHelper.createElement('span', {'class': 'caption'}, this.caption);
            audioItem.appendChild(caption);
        }

        element.appendChild(audioItem);

        return element;
    }
}
