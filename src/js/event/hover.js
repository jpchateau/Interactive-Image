export default class Hover {
    constructor($image) {
        this.$image = $image;
        this.enabled = false;
    }

    /**
     * @param $element
     */
    static hideElement($element) {
        if ($element.css('display') === 'block') {
            $element.hide();
        }
    }

    /**
     * @param $element
     */
    static showElement($element) {
        if ($element.css('display') !== 'block') {
            $element.show();
        }
    }

    bindMainImageEvents() {
        // Mouse enters main image to show all hotspots
        this.$image.on('mouseenter', function() {
            const $hotspots = $(this).find('.hotspot');
            $.each($hotspots, function() {
                $(this).fadeIn();
            });
        });

        // Mouse leaves main image to hide all hotspots and containers
        this.$image.on('mouseleave', function() {
            const $elements = $(this).find('.hotspot, .item');
            $.each($elements, function() {
                Hover.hideElement($(this));
            });
        });
    }

    bindSpecificEvents() {
        let that = this;

        // Bind Mouse leaves container to hide it
        const bindContainerMouseLeaveEvent = () => {
            that.$image.on('mouseleave', '.item', function() {
                const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                Hover.hideElement($container);
            });
        };

        // Mouse enters icon to show its container and close all others
        that.$image.on('mouseenter', '.hotspot', function() {
            const $containers = that.$image.find('.item');
            $.each($containers, function() {
                Hover.hideElement($(this));
            });

            const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
            Hover.showElement($container);
            $container.on('mouseleave', function() {
                Hover.hideElement($(this));
                bindContainerMouseLeaveEvent();
            });
        });
    }

    bindAll() {
        if (this.enabled === false) {
            this.enabled = true;
        }

        this.bindMainImageEvents();
        this.bindSpecificEvents();
    }

    unbindAll() {
        if (this.enabled === true) {
            this.enabled = false;
        }

        this.$image.off();
    }
}
