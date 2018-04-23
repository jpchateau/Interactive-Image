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

        this.logHelper.log('Options successfully checked');
    }

    createElement(options) {
        let type = options.type;
        delete options.type;

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

    positionItems() {
        let calculatePosition = (hotspotLeft, hotspotTop, width) => {
            return [
                hotspotLeft + 15 - width / 2,
                hotspotTop + 40
            ];
        };

        let $items = this.$image.find('.item');
        $.each($items, function() {
            let $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]'),
                width = parseInt($(this).css('width'), 10),
                left = 0,
                top = 0,
                arrowLeft = 0;

            [left, top] = calculatePosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);
            arrowLeft = width / 2 - 7;

            $(this).css('left', left);
            $(this).css('top', top);
            $(this).find('.arrow-up').css('left', arrowLeft);
        });

        this.logHelper.log('Items are all positioned');
    }

    execute() {
        try {
            this.checkSettings(this.settings);
            this.buildElements(this.items);
            this.positionItems();
            (new Hover().bindAll(this.$image));
        } catch (exception) {
            this.logHelper.log(exception);
        }
    }
}