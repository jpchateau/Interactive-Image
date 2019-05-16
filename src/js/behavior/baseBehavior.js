export default class BaseBehavior {
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
                BaseBehavior.hideElement($(this));
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

    bindSpecificEvents() {
        throw Error('bindSpecificEvents method not implemented');
    }
}
