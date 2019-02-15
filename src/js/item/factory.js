import PictureItem from "./pictureItem";
import TextItem from "./textItem";

const classes = {
    PictureItem,
    TextItem
};

export default class Factory {
    /**
     * @param {string} name
     * @param {object} args
     * @returns {TextItem|PictureItem}
     */
    create(name, args) {
        let className = name.toLowerCase() + 'Item';
        className = className.charAt(0).toUpperCase() + className.slice(1);

        try {
            return new classes[className](args);
        } catch (exception) {
            let message;
            if ("undefined" !== typeof exception.name && exception.name === 'TypeError') {
                message = 'Invalid item type "' + name + '" (allowed values: "text", "picture")';
            } else {
                message = exception.message;
            }

            throw Error(message);
        }
    }
}