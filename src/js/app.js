import Behavior from "./event/behavior";
import DomHelper from "./helper/domHelper";
import ImagesLoaded from "imagesloaded";
import ItemFactory from "./item/factory";
import ItemHelper from "./helper/itemHelper";
import Logger from "./service/logger";
import Resizer from "./event/resizer";
import ShareBox from "./service/shareBox";

export default class App {
    /**
     * @param {jQuery} $image
     * @param {array}  items
     * @param {object} settings
     */
    constructor($image, items, settings) {
        this.$image = $image;
        this.items = items;
        this.settings = settings;
        this.itemFactory = new ItemFactory();

        if ('boolean' !== typeof this.settings.debug) {
            throw Error('Check the "debug" option. Allowed type: boolean.');
        }

        this.logger = new Logger();
        this.logger.debug = this.settings.debug;
    }

    checkSettings() {
        return new Promise((resolve, reject) => {
            this.logger.group('Settings');
            const t0 = performance.now();

            if ('boolean' !== typeof this.settings.allowHtml) {
                throw Error('Check the "allowHtml" option. Allowed type: boolean.');
            }

            if ('boolean' !== typeof this.settings.shareBox) {
                throw Error('Check the "shareBox" option. Allowed type: boolean.');
            }

            if ('undefined' !== typeof this.settings.socialMedia && 'object' !== typeof this.settings.socialMedia) {
                throw Error('Check the "socialMedia" option.');
            }

            const t1 = performance.now();
            this.logger.log('Options checked in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    consolidateDOM() {
        return new Promise((resolve, reject) => {
            this.logger.group('DOM consolidation');
            const t0 = performance.now();

            // Add interactive-image class on the main scene
            if (!this.$image.hasClass('interactive-image')) {
                this.$image.addClass('interactive-image');
            }

            // Add message for unsupported screen sizes
            const unsupportedScreenElement = DomHelper.createElement(
                'div',
                {class: 'unsupported-screen'},
                'Please rotate your device.'
            );
            this.$image.append(unsupportedScreenElement);

            const t1 = performance.now();
            this.logger.log('DOM consolidated in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    /**
     * @param {object} options
     * @returns {jQuery|HTMLElement}
     */
    createElement(options) {
        this.logger.log(options);

        const type = options.type;
        delete options.type;

        const element = this.itemFactory.create(type, options);
        element.applicationSettings = this.settings;
        this.$image.append(element.createHotspotElement());

        return $(element.renderHtml());
    }

    createElements() {
        return new Promise((resolve) => {
            this.logger.group('Items creation');
            const t0 = performance.now();

            this.items.forEach((item) => {
                this.$image.append(this.createElement(item));
            });

            const t1 = performance.now();
            this.logger.log('All items created in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    positionItems() {
        return new Promise((resolve) => {
            this.logger.group('Items positioning');
            const t0 = performance.now();

            const $items = this.$image.find('.item');
            $.each($items, function() {
                const $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]');
                let [left, top] = ItemHelper.calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), $(this).width());

                $(this).css('left', left);
                $(this).css('top', top);
            });

            const t1 = performance.now();
            this.logger.log('All items positioned in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    bindEvents() {
        return new Promise((resolve) => {
            this.logger.group('Events binding');
            const t0 = performance.now();

            const behavior = new Behavior(this.$image);
            behavior.bindAll();

            const resizer = new Resizer(behavior);
            resizer.bind();

            const t1 = performance.now();
            this.logger.log('All events bound in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    processShareBox() {
        return new Promise((resolve) => {
            this.logger.group('ShareBox');
            const t0 = performance.now();

            if (true === this.settings.shareBox) {
                const shareBox = new ShareBox(this.$image[0]);
                shareBox.build(this.settings.socialMedia || {});
                shareBox.bindEvents();
            }

            const t1 = performance.now();
            this.logger.log('ShareBox built in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();

            resolve();
        });
    }

    loadImages() {
        return new Promise((resolve) => {
            this.logger.group('Images');

            if (this.$image.find('img').length) {
                const t0 = performance.now();
                ImagesLoaded(this.$image, () => {
                    const t1 = performance.now();
                    this.logger.log('All images detected and loaded in ' + (t1 - t0) + 'ms');
                    this.logger.groupEnd();

                    resolve();
                });
            } else {
                this.logger.log('No image detected');
                this.logger.groupEnd();

                resolve();
            }
        });
    }

    execute() {
        this.logger.group('Interactive Image');
        const t0 = performance.now();

        this.checkSettings().then(() => {
            return this.consolidateDOM();
        }).then(() => {
            return this.createElements();
        }).then(() => {
            return this.loadImages();
        }).then(() => {
            return this.positionItems();
        }).then(() => {
            return this.bindEvents();
        }) .then(() => {
            return this.processShareBox();
        }).catch((exception) => {
            this.logger.log(exception.message);
        }).finally( () => {
            const t1 = performance.now();
            this.logger.log('Execution completed in ' + (t1 - t0) + 'ms');
            this.logger.groupEnd();
        });
    }
}
