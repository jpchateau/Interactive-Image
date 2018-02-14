import Hover from "./event/hover";
import DomHelper from "./helper/domHelper";
import LogHelper from "./helper/logHelper";
import TextItem from "./item/textItem";

export default class InteractiveImage {
    constructor(items, settings, $image) {
        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.logHelper = new LogHelper(settings.debug);
        this.domHelper = new DomHelper();
    }

    checkSettings(settings) {
        if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
            this.settings.debug = true;
            throw 'Error: check "debug" plugin option';
        }
        if ('undefined' === typeof  settings.fontColor || 'string' !== typeof  settings.fontColor) {
            throw 'Error: check "fontColor" plugin option';
        }
        if ('undefined' === typeof  settings.backgroundColor || 'string' !== typeof  settings.backgroundColor) {
            throw 'Error: check "backgroundColor" plugin option';
        }

        this.logHelper.log('Settings checked');
    }

    createElement(options) {
        let defaults = {
            fontColor: this.settings.fontColor,
            backgroundColor: this.settings.backgroundColor
        };

        options = $.extend(defaults, options);

        this.logHelper.log('Options:');
        this.logHelper.log(options);

        let parameters = {
            position: options.position,
            backgroundColor: options.backgroundColor,
            fontColor: options.fontColor,
            title: options.title,
            description: options.description,
            picture: options.picture,
            link: options.link
        };

        let element = new TextItem(this.domHelper, parameters);
        this.logHelper.log('Item ' + element.title + ' created');

        this.$image.append(element.createIcon());

        return $(element.renderHtml());
    };

    buildElements(items) {
        let i;
        for (i in items) {
            if (items.hasOwnProperty(i)) {
                this.$image.append(this.createElement(items[i]));
            }
        }
    }

    execute() {
        try {
            this.checkSettings(this.settings);
            this.buildElements(this.items);
            (new Hover().bindEvents(this.$image));
        } catch (exception) {
            this.logHelper.log(exception);
        }
    }
}
