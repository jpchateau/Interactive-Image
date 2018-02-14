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

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _interactiveImage = __webpack_require__(2);

var _interactiveImage2 = _interopRequireDefault(_interactiveImage);

var _styles = __webpack_require__(8);

var _styles2 = _interopRequireDefault(_styles);

var _icomoon = __webpack_require__(9);

var _icomoon2 = _interopRequireDefault(_icomoon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
    'use strict';

    $.fn.interactiveImage = function (items, options) {
        var defaults = {
            debug: false,
            fontColor: "#000000",
            backgroundColor: "#FFFFFF"
        };

        var options = $.extend(defaults, options);

        return this.each(function () {
            new _interactiveImage2.default(items, options, $(this)).execute();
        });
    };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hover = __webpack_require__(3);

var _hover2 = _interopRequireDefault(_hover);

var _domHelper = __webpack_require__(4);

var _domHelper2 = _interopRequireDefault(_domHelper);

var _logHelper = __webpack_require__(5);

var _logHelper2 = _interopRequireDefault(_logHelper);

var _textItem = __webpack_require__(6);

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
            var i = void 0;
            for (i in items) {
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
                new _hover2.default().bindEvents(this.$image);
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
/* 3 */
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
        key: 'bindEvents',
        value: function bindEvents($image) {
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

            var bindIconMouseLeaveEvent = function bindIconMouseLeaveEvent() {
                $image.on('mouseleave.interactiveImage', '.icon-button', function () {
                    var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                    if ($container.css('display') === 'block') {
                        $container.hide();
                    }
                });
            };

            var unbindIconMouseLeaveEvent = function unbindIconMouseLeaveEvent() {
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
    }]);

    return Hover;
}();

exports.default = Hover;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
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
        key: 'createDomElement',
        value: function createDomElement(tag, cssClass) {
            var domElement = document.createElement(tag);
            domElement.setAttribute('class', cssClass);

            return domElement;
        }
    }]);

    return DomHelper;
}();

exports.default = DomHelper;
module.exports = exports['default'];

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(7);

var _baseItem2 = _interopRequireDefault(_baseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextItem = function (_BaseItem) {
    _inherits(TextItem, _BaseItem);

    function TextItem(DomHelper, parameters) {
        _classCallCheck(this, TextItem);

        var i = void 0,
            requiredParameters = ['description'];
        for (i in requiredParameters) {
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
        key: "createDescription",
        value: function createDescription() {
            var descriptionElement = this.domHelper.createDomElement('p', 'description');
            descriptionElement.appendChild(document.createTextNode(this.description));

            return descriptionElement;
        }
    }, {
        key: "createPicture",
        value: function createPicture() {
            var pictureElement = this.domHelper.createDomElement('img', 'picture');
            pictureElement.src = this.picture;

            return pictureElement;
        }
    }, {
        key: "createLink",
        value: function createLink() {
            var label = void 0,
                linkElement = document.createElement('a');
            linkElement.href = this.link.href;
            linkElement.style.color = this.fontColor;

            if ("undefined" !== this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.href;
            }

            linkElement.appendChild(document.createTextNode(label));

            return linkElement;
        }
    }, {
        key: "renderHtml",
        value: function renderHtml() {
            var containerElement = this.domHelper.createDomElement('div', 'container');
            containerElement.setAttribute('data-id', this.identifier);
            containerElement.style.color = this.fontColor;
            containerElement.style.backgroundColor = this.backgroundColor;
            containerElement.style.left = this.position.left - 50 + 'px';
            containerElement.style.top = this.position.top + 50 + 'px';

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
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseItem = function () {
    function BaseItem(DomHelper, parameters) {
        _classCallCheck(this, BaseItem);

        var i = void 0,
            requiredParameters = ['position', 'backgroundColor', 'fontColor', 'title'];
        for (i in requiredParameters) {
            if ("undefined" === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                throw 'Error: missing required parameter "' + requiredParameters[i] + '" in BaseItem';
            }
        }

        this.domHelper = DomHelper;
        this.position = parameters.position;
        this.backgroundColor = parameters.backgroundColor;
        this.fontColor = parameters.fontColor;
        this.title = parameters.title;
        this.identifier = parameters.title;
    }

    _createClass(BaseItem, [{
        key: 'createIcon',
        value: function createIcon() {
            var iconElement = this.domHelper.createDomElement('div', 'icon-button icon-radio-checked');
            iconElement.setAttribute('data-for', this.identifier);
            iconElement.style.left = this.position.left + 'px';
            iconElement.style.top = this.position.top + 'px';

            return iconElement;
        }
    }, {
        key: 'createTitle',
        value: function createTitle() {
            var titleElement = this.domHelper.createDomElement('span', 'title');
            titleElement.appendChild(document.createTextNode(this.title));

            return titleElement;
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
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);