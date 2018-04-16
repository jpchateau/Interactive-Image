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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
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
var mac =  false ? undefined : null;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/css/icomoon.css":
/*!*****************************!*\
  !*** ./src/css/icomoon.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/event/hover.js":
/*!*******************************!*\
  !*** ./src/js/event/hover.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
                var $icons = $(this).find('.hotspot');
                $.each($icons, function () {
                    $(this).fadeIn();
                });
            });

            // Mouse leaves main image to hide all icons and containers
            $image.on('mouseleave.interactiveImage', function () {
                var $elements = $(this).find('.hotspot, .item');
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
                $image.on('mouseleave.interactiveImage', '.item', function () {
                    var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                    Hover.hideElement($container);
                });
            };

            // Mouse enters icon to show its container and close all others
            $image.on('mouseenter.interactiveImage', '.hotspot', function () {
                var $containers = $image.find('.item');
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

/***/ }),

/***/ "./src/js/helper/domHelper.js":
/*!************************************!*\
  !*** ./src/js/helper/domHelper.js ***!
  \************************************/
/*! no static exports found */
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
        value: function createElement(tag) {
            var cssClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var text = arguments[2];

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

/***/ "./src/js/helper/logHelper.js":
/*!************************************!*\
  !*** ./src/js/helper/logHelper.js ***!
  \************************************/
/*! no static exports found */
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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _interactiveImage = __webpack_require__(/*! ./interactiveImage.js */ "./src/js/interactiveImage.js");

var _interactiveImage2 = _interopRequireDefault(_interactiveImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, window, document, undefined) {
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
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/interactiveImage.js":
/*!************************************!*\
  !*** ./src/js/interactiveImage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hover = __webpack_require__(/*! ./event/hover */ "./src/js/event/hover.js");

var _hover2 = _interopRequireDefault(_hover);

var _logHelper = __webpack_require__(/*! ./helper/logHelper */ "./src/js/helper/logHelper.js");

var _logHelper2 = _interopRequireDefault(_logHelper);

var _factory = __webpack_require__(/*! ./item/factory */ "./src/js/item/factory.js");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InteractiveImage = function () {
    function InteractiveImage(items, settings, $image) {
        _classCallCheck(this, InteractiveImage);

        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.logHelper = new _logHelper2.default(settings.debug);
        this.itemFactory = new _factory2.default();
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

            this.logHelper.log('Options successfully checked');
        }
    }, {
        key: "createElement",
        value: function createElement(options) {
            var type = options.type;
            delete options.type;

            var defaults = {
                fontColor: this.settings.fontColor,
                backgroundColor: this.settings.backgroundColor
            };
            options = $.extend(defaults, options);
            this.logHelper.log(options);

            var element = this.itemFactory.createItem(type, options);
            this.logHelper.log(element.constructor.name + ' created');

            this.$image.append(element.createHotspotElement());

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

/***/ }),

/***/ "./src/js/item/baseItem.js":
/*!*********************************!*\
  !*** ./src/js/item/baseItem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqid = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");

var _uniqid2 = _interopRequireDefault(_uniqid);

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseItem = function () {
    function BaseItem(parameters) {
        _classCallCheck(this, BaseItem);

        this.domHelper = new _domHelper2.default();
        this.identifier = (0, _uniqid2.default)();
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
    }

    _createClass(BaseItem, [{
        key: 'createHotspotElement',
        value: function createHotspotElement() {
            var element = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
            element.setAttribute('data-for', this.identifier);
            element.style.left = this.position.left + 'px';
            element.style.top = this.position.top + 'px';

            return element;
        }
    }, {
        key: 'createItemElement',
        value: function createItemElement() {
            var element = this.domHelper.createElement('div', 'item');
            element.setAttribute('data-id', this.identifier);
            element.style.color = this.fontColor;
            element.style.backgroundColor = this.backgroundColor;
            element.style.left = this.position.left - 65 + 'px';
            element.style.top = this.position.top + 40 + 'px';

            return element;
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

/***/ "./src/js/item/factory.js":
/*!********************************!*\
  !*** ./src/js/item/factory.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textItem = __webpack_require__(/*! ./textItem */ "./src/js/item/textItem.js");

var _textItem2 = _interopRequireDefault(_textItem);

var _pictureItem = __webpack_require__(/*! ./pictureItem */ "./src/js/item/pictureItem.js");

var _pictureItem2 = _interopRequireDefault(_pictureItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
    function Factory() {
        _classCallCheck(this, Factory);
    }

    _createClass(Factory, [{
        key: "createItem",
        value: function createItem(type, parameters) {
            var item = void 0;
            switch (type.toLowerCase()) {
                case 'text':
                    item = new _textItem2.default(parameters);
                    break;
                case 'picture':
                    item = new _pictureItem2.default(parameters);
                    break;
                default:
                    throw 'Error: item type property not allowed. Saw "' + type + '" instead of "text", "picture".';
            }

            return item;
        }
    }]);

    return Factory;
}();

exports.default = Factory;
module.exports = exports["default"];

/***/ }),

/***/ "./src/js/item/pictureItem.js":
/*!************************************!*\
  !*** ./src/js/item/pictureItem.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(/*! ./baseItem */ "./src/js/item/baseItem.js");

var _baseItem2 = _interopRequireDefault(_baseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PictureItem = function (_BaseItem) {
    _inherits(PictureItem, _BaseItem);

    function PictureItem(parameters) {
        _classCallCheck(this, PictureItem);

        var requiredParameters = ['position', 'backgroundColor', 'fontColor', 'path'];
        for (var i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in PictureItem';
            }
        }

        var _this = _possibleConstructorReturn(this, (PictureItem.__proto__ || Object.getPrototypeOf(PictureItem)).call(this, parameters));

        _this.path = parameters.path;
        _this.caption = parameters.caption;
        _this.linkUrl = parameters.linkUrl;
        return _this;
    }

    _createClass(PictureItem, [{
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', 'picture');
            element.src = this.path;

            return element;
        }
    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var element = this.createItemElement();

            var pictureItem = this.domHelper.createElement('div', 'picture-item');

            if ('undefined' !== typeof this.caption) {
                pictureItem.setAttribute('data-caption', this.caption);
            }

            if ('undefined' !== typeof this.linkUrl) {
                var link = this.domHelper.createElement('a');
                link.href = this.linkUrl;
                link.appendChild(this.createPicture());
                pictureItem.appendChild(link);
            } else {
                pictureItem.appendChild(this.createPicture());
            }

            element.appendChild(pictureItem);

            return element;
        }
    }]);

    return PictureItem;
}(_baseItem2.default);

exports.default = PictureItem;
module.exports = exports['default'];

/***/ }),

/***/ "./src/js/item/textItem.js":
/*!*********************************!*\
  !*** ./src/js/item/textItem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(/*! ./baseItem */ "./src/js/item/baseItem.js");

var _baseItem2 = _interopRequireDefault(_baseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextItem = function (_BaseItem) {
    _inherits(TextItem, _BaseItem);

    function TextItem(parameters) {
        _classCallCheck(this, TextItem);

        var requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title', 'description'];
        for (var i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in TextItem';
            }
        }

        var _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, parameters));

        _this.title = parameters.title;
        _this.description = parameters.description;
        _this.picturePath = parameters.picturePath;
        _this.link = parameters.link;
        return _this;
    }

    _createClass(TextItem, [{
        key: 'createTitle',
        value: function createTitle() {
            return this.domHelper.createElement('span', 'title', this.title);
        }
    }, {
        key: 'createDescription',
        value: function createDescription() {
            return this.domHelper.createElement('p', 'description', this.description);
        }
    }, {
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', 'picture');
            element.src = this.picturePath;

            return element;
        }
    }, {
        key: 'createLink',
        value: function createLink() {
            var label = void 0,
                element = document.createElement('a');
            element.href = this.link.url;
            element.style.color = this.fontColor;

            if ('undefined' !== typeof this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.href;
            }

            element.appendChild(document.createTextNode(label));

            return element;
        }
    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var element = this.createItemElement();

            var textElement = this.domHelper.createElement('div', 'text-item');

            textElement.appendChild(this.createTitle());
            textElement.appendChild(this.createDescription());

            if ('undefined' !== typeof this.picturePath) {
                textElement.appendChild(this.createPicture());
            }

            if ('undefined' !== typeof this.link) {
                textElement.appendChild(this.createLink());
            }

            element.appendChild(textElement);

            return element;
        }
    }]);

    return TextItem;
}(_baseItem2.default);

exports.default = TextItem;
module.exports = exports['default'];

/***/ }),

/***/ "./src/js/styles.js":
/*!**************************!*\
  !*** ./src/js/styles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styles = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

var _icomoon = __webpack_require__(/*! ../css/icomoon.css */ "./src/css/icomoon.css");

var _icomoon2 = _interopRequireDefault(_icomoon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/index.js ./src/js/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/js/styles.js */"./src/js/styles.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=interactive-image.js.map