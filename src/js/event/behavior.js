import DomHelper from "../helper/domHelper";

export default class Behavior {
    /**
     * @returns {{hover: string, click: string}}
     */
    static mouseEvents() {
        return {
            'hover': 'mouseenter',
            'click': 'click'
        };
    }

    /**
     * @param {jQuery} $image
     * @param {string} triggerEventName
     */
    constructor($image, triggerEventName) {
        this.$image = $image;
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

        this.$image.off();
    }

    /**
     * Attach event to hide container when mouse leaves hotspot
     *
     * @param {jQuery} $hotspot
     */
    bindHotspotMouseLeave($hotspot) {
        $hotspot.on('mouseleave', function(event) {
            const $relatedTarget = $(event.relatedTarget);

            // If relatedTarget has class "item", it enters container so there is no need to hide it
            if ($relatedTarget.hasClass('item')) {
                return;
            }

            // Idem for the parent of the relatedTarget
            if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                return;
            }

            // If container is sticky, no need to hide it
            const container = DomHelper.retrieveContainerFromHotspot($hotspot[0]);
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
        hotspot.removeEventListener('mouseleave', function() {});
    }

    bindSceneEvents() {
        // Mouse enters scene -> show all hotspots and share box (if exists)
        this.$image.on('mouseenter', function() {
            const $hotspots = $(this).find('.hotspot');
            $.each($hotspots, function() {
                $(this).fadeIn();
            });

            const $shareBox = $(this).find('.social-share-box');
            if (!$shareBox.length) {
                return;
            }

            setTimeout(() => {
                $shareBox.css('display', 'flex');
            }, 100);
        });

        // Mouse leaves scene -> hide all hotspots, containers and share box (if exists)
        this.$image.on('mouseleave', function() {
            const $elements = $(this).find('.hotspot, .item');
            $.each($elements, function() {
                DomHelper.hideElement($(this)[0]);
            });

            const $shareBox = $(this).find('.social-share-box');
            if (!$shareBox.length) {
                return;
            }

            DomHelper.hideElement($shareBox[0]);
        });
    }

    bindStickyItemsEvents() {
        this.$image.find('.item').each(function() {
            const $container = $(this);
            if (!$container[0].classList.contains('behavior-sticky')) {
                return;
            }

            // Bind event to hide the related sticky container when close button is clicked
            $container.on('click', '.close-button' , function() {
                DomHelper.hideElement($container[0]);
            });
        });
    }

    /**
     * Initialize events on each item
     */
    bindItemsEvents() {
        let that = this;

        that.$image.find('.hotspot').each(function() {
            const $hotspot = $(this);
            const $container = $(DomHelper.retrieveContainerFromHotspot($hotspot[0]));

            // If item is sticky, no need to bind events
            if ($container[0].classList.contains('behavior-sticky')) {
                return;
            }

            that.bindHotspotMouseLeave($hotspot);
            $container.on('mouseenter', function() {
                that.unbindHotspotMouseLeave($hotspot[0]);
            });

            // Bind event to hide the related container when mouse leaves it
            $container.on('mouseleave', function(event) {
                // If relatedTarget has class "hotspot", it enters hotspot so there is no need to hide the container
                const $relatedTarget = $(event.relatedTarget);
                if ($relatedTarget.hasClass('hotspot')) {
                    return;
                }

                DomHelper.hideElement($(this)[0]);
            });
        });

        this.bindStickyItemsEvents();
    }

    /**
     * Initialize events on each hotspot
     */
    bindHotspotsEvents() {
        let that = this;

        that.$image.on(Behavior.mouseEvents()[this.triggerEventName], '.hotspot', function(event) {
            const $hotspot = $(this);
            const $relatedTarget = $(event.relatedTarget);
            if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                // If parent has class "item", it only re-enters from item
                return that.bindHotspotMouseLeave($hotspot);
            }

            // Hide all other containers that are not sticky
            const $containers = that.$image.find('.item').not('.behavior-sticky');
            $.each($containers, function() {
                DomHelper.hideElement($(this)[0]);
            });

            // Finally, show the related item
            const container = DomHelper.retrieveContainerFromHotspot($hotspot[0]);
            DomHelper.showElement(container);
        });
    }
}
