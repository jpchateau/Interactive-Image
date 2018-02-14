export default class Hover {
    bindEvents($image) {
        $image.on('mouseenter.interactiveImage', function () {
            let $icons = $(this).find('.icon-button');
            $.each($icons, function () {
                if ($(this).css('display') !== 'block') {
                    $(this).show();
                }
            });
        });

        $image.on('mouseleave.interactiveImage', function () {
            let $icons = $(this).find('.icon-button');
            $.each($icons, function () {
                if ($(this).css('display') === 'block') {
                    $(this).hide();
                }
            });
        });

        let bindIconMouseLeaveEvent = function() {
            $image.on('mouseleave.interactiveImage', '.icon-button', function () {
                let $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') === 'block') {
                    $container.hide();
                }
            });
        };

        let unbindIconMouseLeaveEvent = function () {
            $image.off('mouseleave.interactiveImage', '.icon-button');
        };

        $image.on('mouseenter.interactiveImage', '.icon-button', function () {
            let $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
            if ($container.css('display') !== 'block') {
                $container.show();
                $container.on('mouseenter.interactiveImage', function () {
                    unbindIconMouseLeaveEvent();
                });
                $container.on('mouseleave.interactiveImage', function () {
                    $(this).hide();
                    bindIconMouseLeaveEvent();
                });
            }
        });

        bindIconMouseLeaveEvent();
    }
}