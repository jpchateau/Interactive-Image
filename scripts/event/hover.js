define(function() {
    'use strict';

    return {
        bindEvents: function ($image) {
            $image.on('mouseover.interactiveImage', '.icon-button', function () {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') !== 'block') {
                    $container.fadeIn('fast');
                }
            });

            $image.on('mouseleave.interactiveImage', '.icon-button', function () {
                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                if ($container.css('display') === 'block') {
                    $container.hide();
                }
            });

            $image.on('mouseover.interactiveImage', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    if ($(this).css('display') !== 'block') {
                        $(this).fadeIn('fast');
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
        }
    };
});