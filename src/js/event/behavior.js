import DomHelper from "../helper/domHelper";

export default class Behavior {
    /**
     * @param {jQuery} $image
     */
    constructor($image) {
        this.$image = $image;
        this.enabled = false;
    }

    bindAll() {
        if (this.enabled === false) {
            this.enabled = true;
        }

        this.bindSceneEvents();
        this.bindItemsEvents();
    }

    unbindAll() {
        if (this.enabled === true) {
            this.enabled = false;
        }

        this.$image.off();
    }

    bindSceneEvents() {
        // Mouse enters scene -> show all hotspots and share box
        this.$image.on('mouseenter', function() {
            const $hotspots = $(this).find('.hotspot');
            $.each($hotspots, function() {
                $(this).fadeIn();
            });

            const $shareBox = $(this).find('.social-share-box');
            setTimeout(() => {
                $shareBox.css('display', 'flex');
            }, 100);
        });

        // Mouse leaves scene -> hide all hotspots, containers and share box
        this.$image.on('mouseleave', function() {
            const $elements = $(this).find('.hotspot, .item');
            $.each($elements, function() {
                DomHelper.hideElement($(this));
            });

            const $shareBox = $(this).find('.social-share-box');
            $shareBox.hide();
        });
    }

    bindItemsEvents() {
        let that = this;

        let bindHostpotMouseLeave = ($hotspot) => {
            $hotspot.on('mouseleave', function(event) {
                const $relatedTarget = $(event.relatedTarget);
                // if parent has class item, it enters container so there is no need to hide it
                if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                    return;
                }
                const $container = $('div[data-id="' + $hotspot.attr('data-for') + '"]');
                DomHelper.hideElement($container);
            });
        };

        let unbindHotspotMouseLeave = ($hotspot) => {
            $hotspot.off('mouseleave');
        };

        // Initialize events on each hotspots and items
        that.$image.find('.hotspot').each(function() {
            const $hotspot = $(this);
            const $container = $('div[data-id="' + $hotspot.attr('data-for') + '"]');

            if ($container.hasClass('behavior-sticky')) {
                return;
            }

            bindHostpotMouseLeave($hotspot);

            $container.on('mouseenter', function() {
                unbindHotspotMouseLeave($hotspot);
            });

            // Bind event to hide the related container when mouse leaves it
            $container.on('mouseleave', function(event) {
                const $relatedTarget = $(event.relatedTarget);
                // if related target has class hotpost, it enters hotspot so there is no need to hide the container
                if ($relatedTarget.hasClass('hotspot')) {
                    return;
                }
                DomHelper.hideElement($(this));
                bindHostpotMouseLeave($hotspot);
            });
        });

        // Bind event on sticky containers
        that.$image.find('.item').each(function() {
            let $container = $(this);
            if (!$container.hasClass('behavior-sticky')) {
                return;
            }

            // Bind event to hide the related container when close button is clicked
            $container.on('click', '.close-button' , function() {
                DomHelper.hideElement($container);
            });
        });

        // Mouse enters a hotspot
        that.$image.on('mouseenter', '.hotspot', function(event) {
            const $hotspot = $(this);
            const $relatedTarget = $(event.relatedTarget);
            if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                // if parent has class item, it only re-enters from item
                return bindHostpotMouseLeave($hotspot);
            }

            // Retrieve the related item
            const $container = $('div[data-id="' + $hotspot.attr('data-for') + '"]');

            // Hide all other containers that are not sticky
            const $containers = that.$image.find('.item').not('.behavior-sticky');
            $.each($containers, function() {
                DomHelper.hideElement($(this));
            });

            // Finally, show the related item
            DomHelper.showElement($container);
        });
    }
}
