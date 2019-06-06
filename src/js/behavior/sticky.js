import BaseBehavior from "./baseBehavior";
import DomHelper from "../helper/domHelper";

export default class Sticky extends BaseBehavior {
    constructor($image) {
        super($image);
    }

    bindSpecificEvents() {
        let that = this;

        // Bind Mouse leaves container to hide it
        const bindContainerMouseLeaveEvent = () => {
            that.$image.on('mouseleave', '.item', function() {
                const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                //DomHelper.hideElement($container);
            });
        };

        // Mouse enters icon to show its container and close all others
        that.$image.on('mouseenter', '.hotspot', function() {
            const $containers = that.$image.find('.item').not('.sticky');
            $.each($containers, function() {
                DomHelper.hideElement($(this));
            });

            const $container = $('div[data-id="' + $(this).attr('data-for') + '"]');

            const closeButton = DomHelper.createElement('div', {'class': 'close-button icon-cross'});
            $container.append(closeButton);
            $container.addClass('sticky');

            DomHelper.showElement($container);
            $container.on('click', '.close-button' , function() {
                DomHelper.hideElement($container);
                bindContainerMouseLeaveEvent();
            });
        });
    }
}
