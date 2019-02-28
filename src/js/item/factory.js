import AudioItem from "./audioItem";
import PictureItem from "./pictureItem";
import ProviderItem from "./providerItem";
import TextItem from "./textItem";
import VideoItem from "./videoItem";

const classes = {
    AudioItem,
    PictureItem,
    ProviderItem,
    TextItem,
    VideoItem
};

export default class Factory {
    /**
     * @param {string} name
     * @param {object} parameters
     * @returns {AudioItem|PictureItem|ProviderItem|TextItem|VideoItem}
     */
    create(name, parameters) {
        let className = name.toLowerCase() + 'Item';
        className = className.charAt(0).toUpperCase() + className.slice(1);

        try {
            return new classes[className](parameters);
        } catch (exception) {
            let message;
            if ('undefined' !== typeof exception.name && exception.name === 'TypeError') {
                message = 'Invalid item type "' + name + '" (allowed values: "audio", "picture", "provider", "text", "video")';
            } else {
                message = exception.message;
            }

            throw Error(message);
        }
    }
}
