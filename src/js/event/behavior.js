import DomHelper from '../helper/domHelper';
import EventManager from './eventManager';

export default class Behavior {
    /**
     * @returns {{hover: string, click: string}}
     */
    static mouseEvents() {
        return {
            'hover': 'mouseenter',
            'click': 'click',
        };
    }

    /**
     * @param {HTMLElement} image       - A scene.
     * @param {string} triggerEventName - A trigger event name.
     */
    constructor(image, triggerEventName) {
        this.image = image;
        this.eventManager = new EventManager(this.image);
        this.triggerEventName = triggerEventName;
        this.enabled = false;
    }

    bindAll() {
        if (this.enabled === false) {
            this.enabled = true;
        }

        this.bindSceneEvents();
        this.bindItemsEvents();
        this.bindHotspotsEvents();
    }

    unbindAll() {
        if (this.enabled === true) {
            this.enabled = false;
        }

        this.eventManager.offAll();
    }

    /**
     * Attach event to hide container when mouse leaves hotspot
     *
     * @param {HTMLElement} hotspot
     */
    bindHotspotMouseLeave(hotspot) {
        hotspot.addEventListener('mouseleave', (event) => {
            const relatedTarget = event.relatedTarget;

            // If relatedTarget has class "item", it enters container so there is no need to hide it
            if (relatedTarget.classList.contains('item')) {
                return;
            }

            // Idem for the parent of the relatedTarget
            if (relatedTarget.parentNode && relatedTarget.parentNode.classList.contains('item')) {
                return;
            }

            // If container is sticky, no need to hide it
            const container = DomHelper.retrieveContainerFromHotspot(hotspot[0]);
            if (container.classList.contains('behavior-sticky')) {
                return;
            }

            DomHelper.hideElement(container);
        });
    }

    /**
     * Remove event to hide container when mouse leaves hotspot
     *
     * @param {HTMLElement} hotspot
     */
    unbindHotspotMouseLeave(hotspot) {
        hotspot.removeEventListener('mouseleave', () => {});
    }

    bindSceneEvents() {
        // Mouse enters scene -> show all hotspots and share box (if exists)
        this.image.addEventListener('mouseenter', function() {
            const hotspots = this.image.querySelectorAll('.hotspot');
            hotspots.forEach((item) => {
                item.classList.add('display', 'block');
                //$(this).fadeIn();
            });

            const shareBox = this.image.querySelectorAll('.social-share-box');
            if (!shareBox.length) {
                return;
            }

            window.setTimeout(() => {
                shareBox[0].classList.add('display', 'flex');
            }, 100);
        });

        // Mouse leaves scene -> hide all hotspots, containers and share box (if exists)
        this.image.addEventListener('mouseleave', function() {
            const elements = this.image.querySelectorAll('.hotspot, .item');
            elements.forEach( (element) => {
                DomHelper.hideElement(element[0]);
            });

            const shareBox = this.images.querySelectorAll('.social-share-box');
            if (!shareBox.length) {
                return;
            }

            DomHelper.hideElement(shareBox[0]);
        });
    }

    bindStickyItemsEvents() {
        this.image.querySelectorAll('.item').forEach( (item) => {
            if (!item[0].classList.contains('behavior-sticky')) {
                return;
            }

            // Bind event to hide the related sticky container when close button is clicked
            item.addEventListener('click', '.close-button' , () => {
                DomHelper.hideElement(item[0]);
            });
        });
    }

    /**
     * Initialize events on each item
     */
    bindItemsEvents() {
        const that = this;

        that.image.querySelectorAll('.hotspot').forEach((hotspot) => {
            const container = DomHelper.retrieveContainerFromHotspot(hotspot[0]);

            // If item is sticky, no need to bind events
            if (container[0].classList.contains('behavior-sticky')) {
                return;
            }

            that.bindHotspotMouseLeave(hotspot);
            container.addEventListener('mouseenter', () => {
                that.unbindHotspotMouseLeave(hotspot[0]);
            });

            // Bind event to hide the related container when mouse leaves it
            container.addEventListener('mouseleave', (event) => {
                // If relatedTarget has class "hotspot", it enters hotspot so there is no need to hide the container
                const relatedTarget = event.relatedTarget;
                if (relatedTarget.classList.contains('hotspot')) {
                    return;
                }

                DomHelper.hideElement(event[0]);
            });
        });

        this.bindStickyItemsEvents();
    }

    /**
     * Initialize events on each hotspot
     */
    bindHotspotsEvents() {
        const that = this;
        const eventName = Behavior.mouseEvents()[this.triggerEventName];

        that.image.addEventListener(eventName, (event) => {
            const hotspot = event.target.closest('.hotspot');
            if (!hotspot || !that.image.contains(hotspot)) {
                return;
            }

            const relatedTarget = event.relatedTarget;
            if (
                relatedTarget &&
                relatedTarget.parentElement &&
                relatedTarget.parentElement.classList.contains('item')
            ) {
                return that.bindHotspotMouseLeave(hotspot);
            }

            // Hide all other containers that are not sticky
            const containers = that.image.querySelectorAll('.item:not(.behavior-sticky)');
            containers.forEach(container => {
                DomHelper.hideElement(container);
            });

            // Finally, show the related item
            const container = DomHelper.retrieveContainerFromHotspot(hotspot[0]);
            DomHelper.showElement(container);
        });
    }
}
