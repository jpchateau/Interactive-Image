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
eval("\n\n// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout() {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n})();\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e) {\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e) {\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while (len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) {\n    return [];\n};\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () {\n    return '/';\n};\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function () {\n    return 0;\n};\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process, module) {\n\n/* \n(The MIT License)\nCopyright (c) 2014 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '';\nvar mac =  false ? undefined : null;\nvar address = mac ? parseInt(mac.replace(/\\:|\\D+/gi, '')).toString(36) : '';\n\n//  Exports\n// ================================================\nmodule.exports = function (prefix) {\n    return (prefix || '') + address + pid + now().toString(36);\n};\nmodule.exports.process = function (prefix) {\n    return (prefix || '') + pid + now().toString(36);\n};\nmodule.exports.time = function (prefix) {\n    return (prefix || '') + now().toString(36);\n};\n\n//  Helpers\n// ================================================\nfunction now() {\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\nfunction macHandler(error) {\n    if (module.parent && module.parent.uniqid_debug) {\n        if (error) console.error('Info: No mac address - uniqid() falls back to uniqid.process().', error);\n        if (pid == '') console.error('Info: No process.pid - uniqid.process() falls back to uniqid.time().');\n    }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/css/icomoon.css":
/*!*****************************!*\
  !*** ./src/css/icomoon.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/icomoon.css?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/event/hover.js":
/*!*******************************!*\
  !*** ./src/js/event/hover.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Hover = function () {\n    function Hover() {\n        _classCallCheck(this, Hover);\n    }\n\n    _createClass(Hover, [{\n        key: 'bindMainImageEvents',\n        value: function bindMainImageEvents($image) {\n            // Mouse enters main image to show all icons\n            $image.on('mouseenter.interactiveImage', function () {\n                var $icons = $(this).find('.icon-button');\n                $.each($icons, function () {\n                    $(this).fadeIn();\n                });\n            });\n\n            // Mouse leaves main image to hide all icons and containers\n            $image.on('mouseleave.interactiveImage', function () {\n                var $elements = $(this).find('.icon-button, .container');\n                $.each($elements, function () {\n                    Hover.hideElement($(this));\n                });\n            });\n        }\n    }, {\n        key: 'bindSpecificEvents',\n        value: function bindSpecificEvents($image) {\n            // Bind Mouse leaves container to hide it\n            var bindContainerMouseLeaveEvent = function bindContainerMouseLeaveEvent() {\n                $image.on('mouseleave.interactiveImage', '.container', function () {\n                    var $container = $('div[data-id=\"' + $(this).attr('data-for') + '\"]');\n                    Hover.hideElement($container);\n                });\n            };\n\n            // Mouse enters icon to show its container and close all others\n            $image.on('mouseenter.interactiveImage', '.icon-button', function () {\n                var $containers = $image.find('.container');\n                $.each($containers, function () {\n                    Hover.hideElement($(this));\n                });\n\n                var $container = $('div[data-id=\"' + $(this).attr('data-for') + '\"]');\n                Hover.showElement($container);\n                $container.on('mouseleave.interactiveImage', function () {\n                    Hover.hideElement($(this));\n                    bindContainerMouseLeaveEvent();\n                });\n            });\n        }\n    }, {\n        key: 'bindAll',\n        value: function bindAll($image) {\n            this.bindMainImageEvents($image);\n            this.bindSpecificEvents($image);\n        }\n    }], [{\n        key: 'hideElement',\n        value: function hideElement($element) {\n            if ($element.css('display') === 'block') {\n                $element.hide();\n            }\n        }\n    }, {\n        key: 'showElement',\n        value: function showElement($element) {\n            if ($element.css('display') !== 'block') {\n                $element.show();\n            }\n        }\n    }]);\n\n    return Hover;\n}();\n\nexports.default = Hover;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/js/event/hover.js?");

/***/ }),

/***/ "./src/js/helper/domHelper.js":
/*!************************************!*\
  !*** ./src/js/helper/domHelper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DomHelper = function () {\n    function DomHelper() {\n        _classCallCheck(this, DomHelper);\n    }\n\n    _createClass(DomHelper, [{\n        key: 'createElement',\n\n        /**\r\n         * Create a DOM element\r\n         *\r\n         * @param tag\r\n         * @param cssClass\r\n         * @param text\r\n         * @returns HTMLElement\r\n         */\n        value: function createElement(tag, cssClass, text) {\n            var domElement = document.createElement(tag);\n            domElement.setAttribute('class', cssClass);\n\n            if ('undefined' !== typeof text) {\n                domElement.appendChild(document.createTextNode(text));\n            }\n\n            return domElement;\n        }\n    }]);\n\n    return DomHelper;\n}();\n\nexports.default = DomHelper;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/js/helper/domHelper.js?");

/***/ }),

/***/ "./src/js/helper/logHelper.js":
/*!************************************!*\
  !*** ./src/js/helper/logHelper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LogHelper = function () {\n    function LogHelper(debug) {\n        _classCallCheck(this, LogHelper);\n\n        this.debug = debug;\n    }\n\n    _createClass(LogHelper, [{\n        key: \"log\",\n        value: function log(message) {\n            if (window.console && window.console.log && true === this.debug) {\n                window.console.log(message);\n            }\n        }\n    }]);\n\n    return LogHelper;\n}();\n\nexports.default = LogHelper;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack:///./src/js/helper/logHelper.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\nvar _interactiveImage = __webpack_require__(/*! ./interactiveImage.js */ \"./src/js/interactiveImage.js\");\n\nvar _interactiveImage2 = _interopRequireDefault(_interactiveImage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function ($, window, document, undefined) {\n    $.fn.interactiveImage = function (items, options) {\n        var defaults = {\n            debug: false,\n            fontColor: \"#000000\",\n            backgroundColor: \"#FFFFFF\"\n        };\n\n        options = $.extend(defaults, options);\n\n        return this.each(function () {\n            new _interactiveImage2.default(items, options, $(this)).execute();\n        });\n    };\n})(jQuery, window, document);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"jquery\")))\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/interactiveImage.js":
/*!************************************!*\
  !*** ./src/js/interactiveImage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _hover = __webpack_require__(/*! ./event/hover */ \"./src/js/event/hover.js\");\n\nvar _hover2 = _interopRequireDefault(_hover);\n\nvar _domHelper = __webpack_require__(/*! ./helper/domHelper */ \"./src/js/helper/domHelper.js\");\n\nvar _domHelper2 = _interopRequireDefault(_domHelper);\n\nvar _logHelper = __webpack_require__(/*! ./helper/logHelper */ \"./src/js/helper/logHelper.js\");\n\nvar _logHelper2 = _interopRequireDefault(_logHelper);\n\nvar _textItem = __webpack_require__(/*! ./item/textItem */ \"./src/js/item/textItem.js\");\n\nvar _textItem2 = _interopRequireDefault(_textItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar InteractiveImage = function () {\n    function InteractiveImage(items, settings, $image) {\n        _classCallCheck(this, InteractiveImage);\n\n        this.items = items;\n        this.settings = settings;\n        this.$image = $image;\n        this.logHelper = new _logHelper2.default(settings.debug);\n        this.domHelper = new _domHelper2.default();\n    }\n\n    _createClass(InteractiveImage, [{\n        key: \"checkSettings\",\n        value: function checkSettings(settings) {\n            if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {\n                this.settings.debug = true;\n                throw 'Error: check \"debug\" plugin option';\n            }\n            if ('undefined' === typeof settings.fontColor || 'string' !== typeof settings.fontColor) {\n                throw 'Error: check \"fontColor\" plugin option';\n            }\n            if ('undefined' === typeof settings.backgroundColor || 'string' !== typeof settings.backgroundColor) {\n                throw 'Error: check \"backgroundColor\" plugin option';\n            }\n\n            this.logHelper.log('Options successfully checked');\n        }\n    }, {\n        key: \"createElement\",\n        value: function createElement(options) {\n            var defaults = {\n                fontColor: this.settings.fontColor,\n                backgroundColor: this.settings.backgroundColor\n            };\n\n            options = $.extend(defaults, options);\n\n            this.logHelper.log(options);\n\n            var parameters = {\n                position: options.position,\n                backgroundColor: options.backgroundColor,\n                fontColor: options.fontColor,\n                title: options.title,\n                description: options.description,\n                picture: options.picture,\n                link: options.link\n            };\n\n            var element = new _textItem2.default(this.domHelper, parameters);\n            this.logHelper.log('TextItem ' + element.title + ' created');\n\n            this.$image.append(element.createIcon());\n\n            return $(element.renderHtml());\n        }\n    }, {\n        key: \"buildElements\",\n        value: function buildElements(items) {\n            for (var i in items) {\n                if (items.hasOwnProperty(i)) {\n                    this.$image.append(this.createElement(items[i]));\n                }\n            }\n        }\n    }, {\n        key: \"execute\",\n        value: function execute() {\n            try {\n                this.checkSettings(this.settings);\n                this.buildElements(this.items);\n                new _hover2.default().bindAll(this.$image);\n            } catch (exception) {\n                this.logHelper.log(exception);\n            }\n        }\n    }]);\n\n    return InteractiveImage;\n}();\n\nexports.default = InteractiveImage;\nmodule.exports = exports[\"default\"];\n\n//# sourceURL=webpack:///./src/js/interactiveImage.js?");

/***/ }),

/***/ "./src/js/item/baseItem.js":
/*!*********************************!*\
  !*** ./src/js/item/baseItem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nvar _uniqid2 = _interopRequireDefault(_uniqid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BaseItem = function () {\n    function BaseItem(DomHelper, parameters) {\n        _classCallCheck(this, BaseItem);\n\n        this.domHelper = DomHelper;\n        this.position = parameters.position;\n        this.backgroundColor = parameters.backgroundColor;\n        this.fontColor = parameters.fontColor;\n        this.title = parameters.title;\n        this.identifier = (0, _uniqid2.default)(parameters.title + '-');\n    }\n\n    _createClass(BaseItem, [{\n        key: 'createIcon',\n        value: function createIcon() {\n            var iconElement = this.domHelper.createElement('div', 'icon-button icon-radio-checked');\n            iconElement.setAttribute('data-for', this.identifier);\n            iconElement.style.left = this.position.left + 'px';\n            iconElement.style.top = this.position.top + 'px';\n\n            return iconElement;\n        }\n    }, {\n        key: 'createTitle',\n        value: function createTitle() {\n            return this.domHelper.createElement('span', 'title', this.title);\n        }\n    }, {\n        key: 'renderHtml',\n        value: function renderHtml() {\n            throw 'Error: render method not implemented';\n        }\n    }]);\n\n    return BaseItem;\n}();\n\nexports.default = BaseItem;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/js/item/baseItem.js?");

/***/ }),

/***/ "./src/js/item/textItem.js":
/*!*********************************!*\
  !*** ./src/js/item/textItem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _baseItem = __webpack_require__(/*! ./baseItem */ \"./src/js/item/baseItem.js\");\n\nvar _baseItem2 = _interopRequireDefault(_baseItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextItem = function (_BaseItem) {\n    _inherits(TextItem, _BaseItem);\n\n    function TextItem(DomHelper, parameters) {\n        _classCallCheck(this, TextItem);\n\n        var requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title', 'description'];\n        for (var i in requiredParameters) {\n            if (\"undefined\" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {\n                throw 'Error: missing required parameter \"' + requiredParameters[i] + '\" in TextItem';\n            }\n        }\n\n        var _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, DomHelper, parameters));\n\n        _this.description = parameters.description;\n        _this.picture = parameters.picture;\n        _this.link = parameters.link;\n        return _this;\n    }\n\n    _createClass(TextItem, [{\n        key: 'createDescription',\n        value: function createDescription() {\n            return this.domHelper.createElement('p', 'description', this.description);\n        }\n    }, {\n        key: 'createPicture',\n        value: function createPicture() {\n            var pictureElement = this.domHelper.createElement('img', 'picture');\n            pictureElement.src = this.picture;\n\n            return pictureElement;\n        }\n    }, {\n        key: 'createLink',\n        value: function createLink() {\n            var label = void 0,\n                linkElement = document.createElement('a');\n            linkElement.href = this.link.href;\n            linkElement.style.color = this.fontColor;\n\n            if ('undefined' !== typeof this.link.label) {\n                label = this.link.label;\n            } else {\n                label = this.link.href;\n            }\n\n            linkElement.appendChild(document.createTextNode(label));\n\n            return linkElement;\n        }\n    }, {\n        key: 'renderHtml',\n        value: function renderHtml() {\n            var containerElement = this.domHelper.createElement('div', 'container');\n            containerElement.setAttribute('data-id', this.identifier);\n            containerElement.style.color = this.fontColor;\n            containerElement.style.backgroundColor = this.backgroundColor;\n            containerElement.style.left = this.position.left - 65 + 'px';\n            containerElement.style.top = this.position.top + 40 + 'px';\n\n            containerElement.appendChild(this.createTitle());\n            containerElement.appendChild(this.createDescription());\n\n            if ('undefined' !== typeof this.picture) {\n                containerElement.appendChild(this.createPicture());\n            }\n\n            if ('undefined' !== typeof this.link) {\n                containerElement.appendChild(this.createLink());\n            }\n\n            return containerElement;\n        }\n    }]);\n\n    return TextItem;\n}(_baseItem2.default);\n\nexports.default = TextItem;\nmodule.exports = exports['default'];\n\n//# sourceURL=webpack:///./src/js/item/textItem.js?");

/***/ }),

/***/ "./src/js/styles.js":
/*!**************************!*\
  !*** ./src/js/styles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _styles = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _icomoon = __webpack_require__(/*! ../css/icomoon.css */ \"./src/css/icomoon.css\");\n\nvar _icomoon2 = _interopRequireDefault(_icomoon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/js/styles.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/js/index.js ./src/js/styles.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/js/styles.js */\"./src/js/styles.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/js/styles.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });