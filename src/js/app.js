import Factory from "./item/factory";
import Hover from "./event/hover";
import ImagesLoaded from "imagesloaded";
import LogHelper from "./helper/logHelper";
import Now from "performance-now";

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
        this.logHelper = new LogHelper(settings.debug);
    }

    /**
     * @param {object} settings
     */
    checkSettings(settings) {
        const start = Now();
        if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
            this.settings.debug = true;
            throw 'Error: check "debug" plugin option';
        }

        const end = Now();
        this.logHelper.log('Options successfully checked', end - start);
    }

    /**
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        const start = Now();

        const type = options.type;
        delete options.type;

        this.logHelper.log(JSON.stringify(options), null, 'blue');

        const element = new Factory(type, options);
        this.$image.append(element.createHotspotElement());

        const end = Now();
        this.logHelper.log('item (' + type + ') created', end - start);

        return $(element.renderHtml());
    }

    /**
     * @param items
     */
    buildElements(items) {
        const start = Now();
        for (let i in items) {
            if (items.hasOwnProperty(i)) {
                this.$image.append(this.createElement(items[i]));
            }
        }

        const end = Now();
        this.logHelper.log('Items built', end - start);
    }

    positionItems() {
        const start = Now();

        /**
         * @param {number} hotspotLeft
         * @param {number} hotspotTop
         * @param {number} width
         */
        let calculateItemPosition = (hotspotLeft, hotspotTop, width) => {
            return [
                hotspotLeft + 15 - width / 2,
                hotspotTop + 40
            ];
        };

        const $items = this.$image.find('.item');
        $.each($items, function() {
            const $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]'),
                  width = $(this).width();
            let left = 0,
                top = 0;

            [left, top] = calculateItemPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);

            $(this).css('left', left);
            $(this).css('top', top);
            $(this).find('.arrow-up').css('left', width / 2 - 7);
        });

        const end = Now();
        this.logHelper.log('Items positioned', end - start);
    }

    execute() {
        try {
            const start = Now();

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

            const end = Now();
            this.logHelper.log('Execution completed', end - start);
        } catch (exception) {
            this.logHelper.log(exception.message, null, 'red');
        }
    }
}