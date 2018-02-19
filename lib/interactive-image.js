/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(12);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _interactiveImage = __webpack_require__(3);

var _interactiveImage2 = _interopRequireDefault(_interactiveImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
    $.fn.interactiveImage = function (items, options) {
        var defaults = {
            debug: false,
            fontColor: "#000000",
            backgroundColor: "#FFFFFF"
        };

        options = $.extend(defaults, options);

        return this.each(function () {
            new _interactiveImage2.default(items, options, $(this)).execute();
        });
    };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hover = __webpack_require__(4);

var _hover2 = _interopRequireDefault(_hover);

var _domHelper = __webpack_require__(5);

var _domHelper2 = _interopRequireDefault(_domHelper);

var _logHelper = __webpack_require__(6);

var _logHelper2 = _interopRequireDefault(_logHelper);

var _textItem = __webpack_require__(7);

var _textItem2 = _interopRequireDefault(_textItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InteractiveImage = function () {
    function InteractiveImage(items, settings, $image) {
        _classCallCheck(this, InteractiveImage);

        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.logHelper = new _logHelper2.default(settings.debug);
        this.domHelper = new _domHelper2.default();
    }

    _createClass(InteractiveImage, [{
        key: "checkSettings",
        value: function checkSettings(settings) {
            if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
                this.settings.debug = true;
                throw 'Error: check "debug" plugin option';
            }
            if ('undefined' === typeof settings.fontColor || 'string' !== typeof settings.fontColor) {
                throw 'Error: check "fontColor" plugin option';
            }
            if ('undefined' === typeof settings.backgroundColor || 'string' !== typeof settings.backgroundColor) {
                throw 'Error: check "backgroundColor" plugin option';
            }

            this.logHelper.log('Settings checked');
        }
    }, {
        key: "createElement",
        value: function createElement(options) {
            var defaults = {
                fontColor: this.settings.fontColor,
                backgroundColor: this.settings.backgroundColor
            };

            options = $.extend(defaults, options);

            this.logHelper.log('Options:');
            this.logHelper.log(options);

            var parameters = {
                position: options.position,
                backgroundColor: options.backgroundColor,
                fontColor: options.fontColor,
                title: options.title,
                description: options.description,
                picture: options.picture,
                link: options.link
            };

            var element = new _textItem2.default(this.domHelper, parameters);
            this.logHelper.log('Item ' + element.title + ' created');

            this.$image.append(element.createIcon());

            return $(element.renderHtml());
        }
    }, {
        key: "buildElements",
        value: function buildElements(items) {
            for (var i in items) {
                if (items.hasOwnProperty(i)) {
                    this.$image.append(this.createElement(items[i]));
                }
            }
        }
    }, {
        key: "execute",
        value: function execute() {
            try {
                this.checkSettings(this.settings);
                this.buildElements(this.items);
                new _hover2.default().bindAll(this.$image);
            } catch (exception) {
                this.logHelper.log(exception);
            }
        }
    }]);

    return InteractiveImage;
}();

exports.default = InteractiveImage;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hover = function () {
    function Hover() {
        _classCallCheck(this, Hover);
    }

    _createClass(Hover, [{
        key: 'bindMainImageEvents',
        value: function bindMainImageEvents($image) {
            // Mouse enters main image to show all icons
            $image.on('mouseenter.interactiveImage', function () {
                var $icons = $(this).find('.icon-button');
                $.each($icons, function () {
                    Hover.showElement($(this));
                });
            });

            // Mouse leaves main image to hide all icons and containers
            $image.on('mouseleave.interactiveImage', function () {
                var $elements = $(this).find('.icon-button, .container');
                $.each($elements, function () {
                    Hover.hideElement($(this));
                });
            });
        }
    }, {
        key: 'bindSpecificEvents',
        value: function bindSpecificEvents($image) {
            // Bind Mouse leaves container to hide it
            var bindContainerMouseLeaveEvent = function bindContainerMouseLeaveEvent() {
                $image.on('mouseleave.interactiveImage', '.container', function () {
                    var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                    Hover.hideElement($container);
                });
            };

            // Mouse enters icon to show its container and close all others
            $image.on('mouseenter.interactiveImage', '.icon-button', function () {
                var $containers = $image.find('.container');
                $.each($containers, function () {
                    Hover.hideElement($(this));
                });

                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                Hover.showElement($container);
                $container.on('mouseleave.interactiveImage', function () {
                    Hover.hideElement($(this));
                    bindContainerMouseLeaveEvent();
                });
            });
        }
    }, {
        key: 'bindAll',
        value: function bindAll($image) {
            this.bindMainImageEvents($image);
            this.bindSpecificEvents($image);
        }
    }], [{
        key: 'hideElement',
        value: function hideElement($element) {
            if ($element.css('display') === 'block') {
                $element.hide();
            }
        }
    }, {
        key: 'showElement',
        value: function showElement($element) {
            if ($element.css('display') !== 'block') {
                $element.show();
            }
        }
    }]);

    return Hover;
}();

exports.default = Hover;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomHelper = function () {
    function DomHelper() {
        _classCallCheck(this, DomHelper);
    }

    _createClass(DomHelper, [{
        key: 'createElement',

        /**
         * Create a DOM element
         *
         * @param tag
         * @param cssClass
         * @param text
         * @returns HTMLElement
         */
        value: function createElement(tag, cssClass, text) {
            var domElement = document.createElement(tag);
            domElement.setAttribute('class', cssClass);

            if ('undefined' !== typeof text) {
                domElement.appendChild(document.createTextNode(text));
            }

            return domElement;
        }
    }]);

    return DomHelper;
}();

exports.default = DomHelper;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogHelper = function () {
    function LogHelper(debug) {
        _classCallCheck(this, LogHelper);

        this.debug = debug;
    }

    _createClass(LogHelper, [{
        key: "log",
        value: function log(message) {
            if (window.console && window.console.log && true === this.debug) {
                window.console.log(message);
            }
        }
    }]);

    return LogHelper;
}();

exports.default = LogHelper;
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(8);

var _baseItem2 = _interopRequireDefault(_baseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextItem = function (_BaseItem) {
    _inherits(TextItem, _BaseItem);

    function TextItem(DomHelper, parameters) {
        _classCallCheck(this, TextItem);

        var requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title', 'description'];
        for (var i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in TextItem';
            }
        }

        var _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, DomHelper, parameters));

        _this.description = parameters.description;
        _this.picture = parameters.picture;
        _this.link = parameters.link;
        return _this;
    }

    _createClass(TextItem, [{
        key: 'createDescription',
        value: function createDescription() {
            return this.domHelper.createElement('p', 'description', this.description);
        }
    }, {
        key: 'createPicture',
        value: function createPicture() {
            var pictureElement = this.domHelper.createElement('img', 'picture');
            pictureElement.src = this.picture;

            return pictureElement;
        }
    }, {
        key: 'createLink',
        value: function createLink() {
            var label = void 0,
                linkElement = document.createElement('a');
            linkElement.href = this.link.href;
            linkElement.style.color = this.fontColor;

            if ('undefined' !== typeof this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.href;
            }

            linkElement.appendChild(document.createTextNode(label));

            return linkElement;
        }
    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var containerElement = this.domHelper.createElement('div', 'container');
            containerElement.setAttribute('data-id', this.identifier);
            containerElement.style.color = this.fontColor;
            containerElement.style.backgroundColor = this.backgroundColor;
            containerElement.style.left = this.position.left - 65 + 'px';
            containerElement.style.top = this.position.top + 40 + 'px';

            containerElement.appendChild(this.createTitle());
            containerElement.appendChild(this.createDescription());

            if ('undefined' !== typeof this.picture) {
                containerElement.appendChild(this.createPicture());
            }

            if ('undefined' !== typeof this.link) {
                containerElement.appendChild(this.createLink());
            }

            return containerElement;
        }
    }]);

    return TextItem;
}(_baseItem2.default);

exports.default = TextItem;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqid = __webpack_require__(9);

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseItem = function () {
    function BaseItem(DomHelper, parameters) {
        _classCallCheck(this, BaseItem);

        this.domHelper = DomHelper;
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
        this.identifier = (0, _uniqid2.default)(parameters.title + '-');
    }

    _createClass(BaseItem, [{
        key: 'createIcon',
        value: function createIcon() {
            var iconElement = this.domHelper.createElement('div', 'icon-button icon-radio-checked');
            iconElement.setAttribute('data-for', this.identifier);
            iconElement.style.left = this.position.left + 'px';
            iconElement.style.top = this.position.top + 'px';

            return iconElement;
        }
    }, {
        key: 'createTitle',
        value: function createTitle() {
            return this.domHelper.createElement('span', 'title', this.title);
        }
    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            throw 'Error: render method not implemented';
        }
    }]);

    return BaseItem;
}();

exports.default = BaseItem;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, module) {

/* 
(The MIT License)
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = process && process.pid ? process.pid.toString(36) : '';
var mac =  false ? require('macaddress').one(macHandler) : null;
var address = mac ? parseInt(mac.replace(/\:|\D+/gi, '')).toString(36) : '';

//  Exports
// ================================================
module.exports = function (prefix) {
    return (prefix || '') + address + pid + now().toString(36);
};
module.exports.process = function (prefix) {
    return (prefix || '') + pid + now().toString(36);
};
module.exports.time = function (prefix) {
    return (prefix || '') + now().toString(36);
};

//  Helpers
// ================================================
function now() {
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

function macHandler(error) {
    if (module.parent && module.parent.uniqid_debug) {
        if (error) console.error('Info: No mac address - uniqid() falls back to uniqid.process().', error);
        if (pid == '') console.error('Info: No process.pid - uniqid.process() falls back to uniqid.time().');
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(11)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(13);

var _styles2 = _interopRequireDefault(_styles);

var _icomoon = __webpack_require__(14);

var _icomoon2 = _interopRequireDefault(_icomoon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);