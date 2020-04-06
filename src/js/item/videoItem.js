import DomHelper from "../helper/domHelper";
import MediaItem from "./mediaItem";

/**
 * @extends MediaItem
 */
export default class VideoItem extends MediaItem {
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

        this.poster = parameters.poster;
    }

    /**
     * Allowed file extensions
     *
     * @returns {{mp4: string, webm: string}}
     */
    supportedFileFormats() {
        return {
            'mp4': 'video/mp4',
            'webm': 'video/webm'
        };
    }

    /**
     * @returns {HTMLElement}
     */
    createMedia() {
        const video = DomHelper.createElement('video', {'class': 'genuine-theme'}, VideoItem.unsupportedTagMessage());
        video.setAttribute('controls', '');
        video.setAttribute('controlsList', 'nodownload');
        video.setAttribute('preload', 'metadata');

        if ('undefined' !== typeof this.poster) {
            video.setAttribute('poster', this.poster);
        }

        video.appendChild(this.createSource());

        return video;
    }

    /**
     * @returns {HTMLElement}
     */
    renderHtml() {
        return this.createItem('video-item');
    }
}
