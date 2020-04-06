import BaseItem from "./baseItem";
import FileHelper from "./../helper/fileHelper";
import DomHelper from "../helper/domHelper";

/**
 * @extends BaseItem
 */
export default class MediaItem extends BaseItem {
    static unsupportedTagMessage() {
        throw Error('UnsupportedTagMessage method not implemented');
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

        FileHelper.checkFileFormat(this.fileExtension, this.supportedFileFormats());
    }

    supportedFileFormats() {
        throw Error('SupportedFileFormats method not implemented');
    }

    /**
     * @returns {HTMLElement}
     */
    createSource() {
        const source = DomHelper.createElement('source');
        source.setAttribute('src', this.path);
        source.setAttribute('type', this.supportedFileFormats()[this.fileExtension]);

        return source;
    }

    /**
     * @param {string} className
     * @returns {HTMLElement}
     */
    createItem(className) {
        const item = DomHelper.createElement('div', {'class': className});
        item.appendChild(this.createMedia());

        if ('undefined' !== typeof this.caption) {
            const caption = DomHelper.createElement('span', {'class': 'caption'}, this.caption, this.globalSettings.allowHtml);
            item.appendChild(caption);
        }

        const element = this.createItemElement();
        element.appendChild(item);

        return element;
    }

    createMedia() {
        throw Error('CreateMedia method not implemented');
    }
}
