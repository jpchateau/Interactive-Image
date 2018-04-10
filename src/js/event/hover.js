export default class Hover {
    static hideElement($element) {
        if ($element.css('display') === 'block') {
            $element.hide();
        }
    }

    static showElement($element) {
        if ($element.css('display') !== 'block') {
            $element.show();
        }
    }

    bindMainImageEvents($image) {
        // Mouse enters main image to show all icons
        $image.on('mouseenter.interactiveImage', function() {
            let $icons = $(this).find('.hotspot');
            $.each($icons, function() {
                $(this).fadeIn();
            });
        });

        // Mouse leaves main image to hide all icons and containers
        $image.on('mouseleave.interactiveImage', function() {
            let $elements = $(this).find('.hotspot, .item');
            $.each($elements, function() {
                Hover.hideElement($(this));
            });
        });
    }

    bindSpecificEvents($image) {
        // Bind Mouse leaves container to hide it
        let bindContainerMouseLeaveEvent = function() {
            $image.on('mouseleave.interactiveImage', '.item', function() {
                let $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                Hover.hideElement($container);
            });
        };

        // Mouse enters icon to show its container and close all others
        $image.on('mouseenter.interactiveImage', '.hotspot', function() {
            let $containers = $image.find('.item');
            $.each($containers, function() {
                Hover.hideElement($(this));
            });

            let $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
            Hover.showElement($container);
            $container.on('mouseleave.interactiveImage', function() {
                Hover.hideElement($(this));
                bindContainerMouseLeaveEvent();
            });
        });
    }

    bindAll($image) {
        this.bindMainImageEvents($image);
        this.bindSpecificEvents($image);
    }
}