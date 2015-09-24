/* Copyright (c) 2014 Halász Ádám mail@adamhalasz.com https://github.com/adamhalasz/uniqid */
define(function() {
    'use strict';

    var time = new Date().getTime();
    while (time === new Date().getTime()){}

    return function() {
        return new Date().getTime().toString(36);
    };
});