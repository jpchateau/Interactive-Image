export default class Hover {
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

    /**
     * @param $image
     */
    bindMainImageEvents($image) {
        // Mouse enters main image to show all hotspots
        $image.on('mouseenter.interactiveImage', function() {
            const $hotspots = $(this).find('.hotspot');
            $.each($hotspots, function() {
                $(this).fadeIn();
            });
        });

        // Mouse leaves main image to hide all hotspots and containers
        $image.on('mouseleave.interactiveImage', function() {
            const $elements = $(this).find('.hotspot, .item');
            $.each($elements, function() {
                Hover.hideElement($(this));
            });
        });
    }

    /**
     * @param $image
     */
    bindSpecificEvents($image) {
        // Bind Mouse leaves container to hide it
        const bindContainerMouseLeaveEvent = () => {
            $image.on('mouseleave.interactiveImage', '.item', function() {
                const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                Hover.hideElement($container);
            });
        };

        // Mouse enters icon to show its container and close all others
        $image.on('mouseenter.interactiveImage', '.hotspot', function() {
            const $containers = $image.find('.item');
            $.each($containers, function() {
                Hover.hideElement($(this));
            });

            const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
            Hover.showElement($container);
            $container.on('mouseleave.interactiveImage', function() {
                Hover.hideElement($(this));
                bindContainerMouseLeaveEvent();
            });
        });
    }

    /**
     * @param $image
     */
    bindAll($image) {
        this.bindMainImageEvents($image);
        this.bindSpecificEvents($image);
    }
}