import DomHelper from "./helper/domHelper";
import Hover from "./event/hover";
import ImagesLoaded from "imagesloaded";
import ItemFactory from "./item/factory";
import ItemHelper from "./helper/itemHelper";
import LogHelper from "./helper/logHelper";
import Resizer from "./event/resizer";

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
        this.domHelper = new DomHelper();
        this.logHelper = new LogHelper(settings.debug);
    }

    checkSettings() {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting settings check...');
            const start = Date.now();

            if ('boolean' !== typeof this.settings.debug) {
                this.settings.debug = true;
                throw Error('Check "debug" plugin option');
            }

            const end = Date.now();
            this.logHelper.log('Options checked', end - start, 'green');

            resolve();
        });
    }

    consolidateDOM() {
        return new Promise((resolve, reject) => {
            this.logHelper.log('Starting DOM consolidation...');
            const start = Date.now();

            // Add interactive-image class on the main scene
            if (!this.$image.hasClass('interactive-image')) {
                this.$image.addClass('interactive-image');
            }

            // Add message for unsupported screen sizes
            const unsupportedScreenElement = this.domHelper.createElement(
                'div',
                {class: 'unsupported-screen'},
                'Interacte with your device first ;)'
            );
            this.$image.append(unsupportedScreenElement);

            const end = Date.now();
            this.logHelper.log('DOM consolidated', end - start, 'green');

            resolve();
        });
    }

    /**
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        this.logHelper.log(JSON.stringify(options), undefined, 'blue');

        const type = options.type;
        delete options.type;

        const element = this.itemFactory.create(type, options);
        this.$image.append(element.createHotspotElement());

        this.logHelper.log('Item (' + type + ') created');

        return $(element.renderHtml());
    }

    createElements() {
        return new Promise((resolve) => {
            this.logHelper.log('Starting elements creation...');
            const start = Date.now();

            this.items.forEach((item) => {
                this.$image.append(this.createElement(item));
            });

            const end = Date.now();
            this.logHelper.log('All items have been created', end - start, 'green');

            resolve();
        });
    }

    positionItems() {
        return new Promise((resolve) => {
            this.logHelper.log('Starting items positioning...');
            const start = Date.now();

            const $items = this.$image.find('.item');
            $.each($items, function() {
                const $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]');
                const width = $(this).width();
                let left;
                let top;

                [left, top] = ItemHelper.calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);

                $(this).css('left', left);
                $(this).css('top', top);
            });

            const end = Date.now();
            this.logHelper.log('All items have been positioned', end - start, 'green');

            resolve();
        });
    }

    bindEvents() {
        return new Promise((resolve) => {
            this.logHelper.log('Starting events binding...');
            const start = Date.now();

            let hover = new Hover(this.$image);
            hover.bindAll();

            let resizer = new Resizer(hover);
            resizer.bind(this.$image);

            const end = Date.now();
            this.logHelper.log('All events have been bound', end - start, 'green');

            resolve();
        });
    }

    loadImages() {
        return new Promise((resolve) => {
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

        this
            .checkSettings()
            .then(() => {
                return this.consolidateDOM();
            })
            .then(() => {
                return this.createElements();
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
                this.logHelper.log('Execution completed', end - start, 'green');
            })
            .catch((exception) => {
                this.logHelper.log(exception.message, undefined, 'red');
            });
    }
}
