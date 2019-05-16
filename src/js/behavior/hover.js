import BaseBehavior from "./baseBehavior";

export default class Hover extends BaseBehavior {
    constructor($image) {
        super($image);
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
}
