import Hover from "./event/hover";
import ImagesLoaded from "imagesloaded";
import ItemFactory from "./item/factory";
import ItemHelper from "./helper/itemHelper";
import LogHelper from "./helper/logHelper";

export default class App {
    /**
     * @param items
     * @param {object} settings
     * @param $image
     */
    constructor(items, settings, $image) {
        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.itemFactory = new ItemFactory();
        this.itemHelper = new ItemHelper();
        this.logHelper = new LogHelper(settings.debug);
    }

    /**
     * @param {object} settings
     */
    checkSettings(settings) {
        const start = Date.now();
        if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
            this.settings.debug = true;
            throw Error('Check "debug" plugin option');
        }

        const end = Date.now();
        this.logHelper.log('Options successfully checked', end - start);
    }

    /**
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        const start = Date.now();

        const type = options.type;
        delete options.type;

        this.logHelper.log(JSON.stringify(options), null, 'blue');

        const element = this.itemFactory.create(type, options);

        if (!this.$image.hasClass('interactive-image')) {
            this.$image.addClass('interactive-image');
        }

        this.$image.append(element.createHotspotElement());

        const end = Date.now();
        this.logHelper.log('item (' + type + ') created', end - start);

        return $(element.renderHtml());
    }

    /**
     * @param items
     */
    buildElements(items) {
        const start = Date.now();
        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                this.$image.append(this.createElement(items[i]));
            }
        }

        const end = Date.now();
        this.logHelper.log('Items built', end - start);
    }

    positionItems() {
        const start = Date.now(),
              $items = this.$image.find('.item');

        var _this = this;
        $.each($items, function() {
            const $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]'),
                  width = $(this).width();
            let left = 0,
                top = 0;

            [left, top] = _this.itemHelper.calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);

            $(this).css('left', left);
            $(this).css('top', top);
            $(this).find('.arrow-up').css('left', _this.itemHelper.calculateInitialArrowPosition(width));
        });

        const end = Date.now();
        this.logHelper.log('Items positioned', end - start);
    }

    execute() {
        try {
            const start = Date.now();

            this.checkSettings(this.settings);
            this.buildElements(this.items);

            if (this.$image.find('img').length) {
                ImagesLoaded(this.$image, () => {
                    this.logHelper.log('Images loaded');
                    this.positionItems();
                });
            } else {
                this.positionItems();
            }

            (new Hover().bindAll(this.$image));

            const end = Date.now();
            this.logHelper.log('Execution completed', end - start);
        } catch (exception) {
            this.logHelper.log(exception.message, null, 'red');
        }
    }
}