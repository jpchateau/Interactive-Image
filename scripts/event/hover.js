define(function() {
    'use strict';

    return {
        bindEvents: function ($image) {
            $image.on('mouseenter.interactiveImage', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') !== 'block') {
                        $(this).show();
                    }
                });
            });

            $image.on('mouseleave.interactiveImage', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') === 'block') {
                        $(this).hide();
                    }
                });
            });

            var bindIconMouseLeaveEvent = function () {
                $image.on('mouseleave.interactiveImage', '.icon-button', function () {
                    var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                    if ($container.css('display') === 'block') {
                        $container.hide();
                    }
                });
            };

            var unbindIconMouseLeaveEvent = function () {
                $image.off('mouseleave.interactiveImage', '.icon-button');
            };

            $image.on('mouseenter.interactiveImage', '.icon-button', function () {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
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
    };
});