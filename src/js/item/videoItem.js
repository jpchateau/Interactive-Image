import BaseItem from "./baseItem";
import DomHelper from "../helper/domHelper";
import FileHelper from "./../helper/fileHelper";

/**
 * @extends BaseItem
 */
export default class VideoItem extends BaseItem {
    /**
     * Allowed file extensions
     *
     * @returns {{mp4: string, webm: string}}
     */
    static supportedFileFormats() {
        return {
            'mp4': 'video/mp4',
            'webm': 'video/webm'
        };
    }

    /**
     * @returns {string}
     */
    static unsupportedTagMessage() {
        return 'Your browser does not support the video tag.';
    }

    /**
     * @param {object} parameters
     */
    constructor(parameters) {
        super(parameters);

        this.checkRequiredParameters(parameters, ['path']);

        this.path = parameters.path;
        this.caption = parameters.caption;
        this.poster = parameters.poster;
        this.fileExtension = FileHelper.guessExtension(this.path);

        FileHelper.checkFileFormat(this.fileExtension, VideoItem.supportedFileFormats());
    }

    /**
     * @returns {HTMLElement}
     */
    createVideo() {
        const video = DomHelper.createElement('video', {'class': 'genuine-theme'}, VideoItem.unsupportedTagMessage());
        video.setAttribute('controls', '');
        video.setAttribute('controlsList', 'nodownload');
        video.setAttribute('preload', 'metadata');

        const source = DomHelper.createElement('source');
        source.setAttribute('src', this.path);
        source.setAttribute('type', VideoItem.supportedFileFormats()[this.fileExtension]);

        if ('undefined' !== typeof this.poster) {
            video.setAttribute('poster', this.poster);
        }

        video.appendChild(source);

        return video;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        const element = this.createItemElement();
        const videoItem = DomHelper.createElement('div', {'class': 'video-item'});

        videoItem.appendChild(this.createVideo());

        if ('undefined' !== typeof this.caption) {
            const caption = DomHelper.createElement('span', {'class': 'caption'}, this.caption);
            videoItem.appendChild(caption);
        }

        element.appendChild(videoItem);

        return element;
    }
}
