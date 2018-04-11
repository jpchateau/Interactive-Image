import Hover from "./event/hover";
import LogHelper from "./helper/logHelper";
import Factory from "./item/factory";

export default class InteractiveImage {
    constructor(items, settings, $image) {
        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.logHelper = new LogHelper(settings.debug);
        this.itemFactory = new Factory();
    }

    checkSettings(settings) {
        if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
            this.settings.debug = true;
            throw 'Error: check "debug" plugin option';
        }
        if ('undefined' === typeof settings.fontColor || 'string' !== typeof settings.fontColor) {
            throw 'Error: check "fontColor" plugin option';
        }
        if ('undefined' === typeof settings.backgroundColor || 'string' !== typeof settings.backgroundColor) {
            throw 'Error: check "backgroundColor" plugin option';
        }

        this.logHelper.log('Options successfully checked');
    }

    createElement(options) {
        let type = options.type;
        delete options.type;

        let defaults = {
            fontColor: this.settings.fontColor,
            backgroundColor: this.settings.backgroundColor
        };
        options = $.extend(defaults, options);
        this.logHelper.log(options);

        let element = this.itemFactory.createItem(type, options);
        this.logHelper.log(element.constructor.name + ' created');

        this.$image.append(element.createHotspotElement());

        return $(element.renderHtml());
    }

    buildElements(items) {
        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                this.$image.append(this.createElement(items[i]));
            }
        }
    }

    execute() {
        try {
            this.checkSettings(this.settings);
            this.buildElements(this.items);
            (new Hover().bindAll(this.$image));
        } catch (exception) {
            this.logHelper.log(exception);
        }
    }
}
