import DomHelper from "../helper/domHelper";

export default class Behavior {
    /**
     * @param $image
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

        // Mouse enters a hotspot
        that.$image.on('mouseenter', '.hotspot', function() {
            // Hide all other containers that are not sticky
            const $containers = that.$image.find('.item').not('.behavior-sticky');
            $.each($containers, function() {
                DomHelper.hideElement($(this));
            });

            // Show the related container
            const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
            DomHelper.showElement($container);

            if ($container.hasClass('behavior-sticky')) {
                // Bind event to hide the related container when close button is clicked
                $container.on('click', '.close-button' , function() {
                    DomHelper.hideElement($container);
                });
            } else {
                // Bind event to hide the related container when mouse leaves it
                $container.on('mouseleave', function() {
                    DomHelper.hideElement($(this));
                });
            }
        });
    }
}
