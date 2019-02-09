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
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting settings check...');
            const start = Date.now();

            if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
                this.settings.debug = true;
                throw Error('Check "debug" plugin option');
            }

            const end = Date.now();
            this.logHelper.log('Options successfully checked', end - start, 'green');

            resolve();
        });
    }

    /**
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        this.logHelper.log(JSON.stringify(options), null, 'blue');

        const type = options.type;
        delete options.type;
        const element = this.itemFactory.create(type, options);
        this.$image.append(element.createHotspotElement());

        this.logHelper.log('Item (' + type + ') created');

        return $(element.renderHtml());
    }

    /**
     * @param items
     */
    createElements(items) {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting elements creation...');
            const start = Date.now();

            for (let i in items) {
                if (items.hasOwnProperty(i)) {
                    this.$image.append(this.createElement(items[i]));
                }
            }

            const end = Date.now();
            this.logHelper.log('All items have been created', end - start, 'green');

            resolve();
        });
    }

    positionItems() {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting items positioning...');
            const start = Date.now();

            const $items = this.$image.find('.item');
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
            this.logHelper.log('All items have been positioned', end - start, 'green');

            resolve();
        });
    }

    bindEvents() {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting events binding...');
            const start = Date.now();

            (new Hover().bindAll(this.$image));

            const end = Date.now();
            this.logHelper.log('All events have been bound', end - start, 'green');

            resolve();
        });
    }

    loadImages() {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting images loading...');
            const start = Date.now();

            if (this.$image.find('img').length) {
                ImagesLoaded(this.$image, () => {
                    const end = Date.now();
                    this.logHelper.log('All images have been detected and loaded', end - start, 'green');

                    resolve();
                });
            } else {
                const end = Date.now();
                this.logHelper.log('No image detected', end - start, 'green');

                resolve();
            }
        });
    }

    execute() {
        const start = Date.now();

        // Add the interactive-image class on the main scene
        if (!this.$image.hasClass('interactive-image')) {
            this.$image.addClass('interactive-image');
        }

        this
            .checkSettings(this.settings)
            .then(() => {
                return this.createElements(this.items);
            })
            .then(() => {
                return this.loadImages();
            })
            .then(() => {
                return this.positionItems();
            })
            .then(() => {
                return this.bindEvents();
            })
            .then(() => {
                const end = Date.now();
                this.logHelper.log('Execution completed', end - start);
            })
            .catch((exception) => {
                this.logHelper.log(exception.message, null, 'red');
            });
    }
}
