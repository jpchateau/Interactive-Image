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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : undefined, function () {

  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function (window, factory) {
  'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : undefined,

// --------------------------  factory -------------------------- //

function factory(window, EvEmitter) {

  'use strict';

  var $ = window.jQuery;
  var console = window.console;

  // -------------------------- helpers -------------------------- //

  // extend objects
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }

  var arraySlice = Array.prototype.slice;

  // turn element or nodeList into an array
  function makeArray(obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    }

    var isArrayLike = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && typeof obj.length == 'number';
    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    }

    // array of single index
    return [obj];
  }

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    }
    // use elem as selector string
    var queryElem = elem;
    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    }
    // bail if bad element
    if (!queryElem) {
      console.error('Bad element for imagesLoaded ' + (queryElem || elem));
      return;
    }

    this.elements = makeArray(queryElem);
    this.options = extend({}, this.options);
    // shift arguments if no options set
    if (typeof options == 'function') {
      onAlways = options;
    } else {
      extend(this.options, options);
    }

    if (onAlways) {
      this.on('always', onAlways);
    }

    this.getImages();

    if ($) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    setTimeout(this.check.bind(this));
  }

  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function () {
    this.images = [];

    // filter & find items if we have an item selector
    this.elements.forEach(this.addElementImages, this);
  };

  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    }
    // get background image on element
    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    }

    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    }

    // get child background images
    if (typeof this.options.background == 'string') {
      var children = elem.querySelectorAll(this.options.background);
      for (i = 0; i < children.length; i++) {
        var child = children[i];
        this.addElementBackgroundImages(child);
      }
    }
  };

  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };

  ImagesLoaded.prototype.addElementBackgroundImages = function (elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec(style.backgroundImage);
    while (matches !== null) {
      var url = matches && matches[2];
      if (url) {
        this.addBackground(url, elem);
      }
      matches = reURL.exec(style.backgroundImage);
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function (img) {
    var loadingImage = new LoadingImage(img);
    this.images.push(loadingImage);
  };

  ImagesLoaded.prototype.addBackground = function (url, elem) {
    var background = new Background(url, elem);
    this.images.push(background);
  };

  ImagesLoaded.prototype.check = function () {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if (!this.images.length) {
      this.complete();
      return;
    }

    function onProgress(image, elem, message) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout(function () {
        _this.progress(image, elem, message);
      });
    }

    this.images.forEach(function (loadingImage) {
      loadingImage.once('progress', onProgress);
      loadingImage.check();
    });
  };

  ImagesLoaded.prototype.progress = function (image, elem, message) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent('progress', [this, image, elem]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    }
    // check if completed
    if (this.progressedCount == this.images.length) {
      this.complete();
    }

    if (this.options.debug && console) {
      console.log('progress: ' + message, image, elem);
    }
  };

  ImagesLoaded.prototype.complete = function () {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent(eventName, [this]);
    this.emitEvent('always', [this]);
    if (this.jqDeferred) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[jqMethod](this);
    }
  };

  // --------------------------  -------------------------- //

  function LoadingImage(img) {
    this.img = img;
  }

  LoadingImage.prototype = Object.create(EvEmitter.prototype);

  LoadingImage.prototype.check = function () {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      // report based on naturalWidth
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this);
    // bind to image as well for Firefox. #191
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.getIsImageComplete = function () {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };

  LoadingImage.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.img, message]);
  };

  // ----- events ----- //

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  LoadingImage.prototype.onload = function () {
    this.confirm(true, 'onload');
    this.unbindEvents();
  };

  LoadingImage.prototype.onerror = function () {
    this.confirm(false, 'onerror');
    this.unbindEvents();
  };

  LoadingImage.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener('load', this);
    this.proxyImage.removeEventListener('error', this);
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  // -------------------------- Background -------------------------- //

  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }

  // inherit LoadingImage prototype
  Background.prototype = Object.create(LoadingImage.prototype);

  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if (isComplete) {
      this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
      this.unbindEvents();
    }
  };

  Background.prototype.unbindEvents = function () {
    this.img.removeEventListener('load', this);
    this.img.removeEventListener('error', this);
  };

  Background.prototype.confirm = function (isLoaded, message) {
    this.isLoaded = isLoaded;
    this.emitEvent('progress', [this, this.element, message]);
  };

  // -------------------------- jQuery -------------------------- //

  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;
    if (!jQuery) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function (options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();

  // --------------------------  -------------------------- //

  return ImagesLoaded;
});

/***/ }),

/***/ "./src/css/icomoon.css":
/*!*****************************!*\
  !*** ./src/css/icomoon.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domHelper = __webpack_require__(/*! ./helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

var _hover = __webpack_require__(/*! ./event/hover */ "./src/js/event/hover.js");

var _hover2 = _interopRequireDefault(_hover);

var _imagesloaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _factory = __webpack_require__(/*! ./item/factory */ "./src/js/item/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _itemHelper = __webpack_require__(/*! ./helper/itemHelper */ "./src/js/helper/itemHelper.js");

var _itemHelper2 = _interopRequireDefault(_itemHelper);

var _logHelper = __webpack_require__(/*! ./helper/logHelper */ "./src/js/helper/logHelper.js");

var _logHelper2 = _interopRequireDefault(_logHelper);

var _resizer = __webpack_require__(/*! ./event/resizer */ "./src/js/event/resizer.js");

var _resizer2 = _interopRequireDefault(_resizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    /**
     * @param items
     * @param {object} settings
     * @param $image
     */
    function App(items, settings, $image) {
        _classCallCheck(this, App);

        this.items = items;
        this.settings = settings;
        this.$image = $image;
        this.itemFactory = new _factory2.default();
        this.domHelper = new _domHelper2.default();
        this.logHelper = new _logHelper2.default(settings.debug);
    }

    /**
     * @param {object} settings
     */


    _createClass(App, [{
        key: "checkSettings",
        value: function checkSettings(settings) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.logHelper.log('Starting settings check...');
                var start = Date.now();

                if ('boolean' !== typeof settings.debug) {
                    _this.settings.debug = true;
                    throw Error('Check "debug" plugin option');
                }

                var end = Date.now();
                _this.logHelper.log('Options successfully checked', end - start, 'green');

                resolve();
            });
        }

        /**
         * @param {object} options
         * @returns {jQuery|HTMLElement}
         */

    }, {
        key: "createElement",
        value: function createElement(options) {
            this.logHelper.log(JSON.stringify(options), undefined, 'blue');

            var type = options.type;
            delete options.type;

            var element = this.itemFactory.create(type, options);
            this.$image.append(element.createHotspotElement());

            this.logHelper.log('Item (' + type + ') created');

            return $(element.renderHtml());
        }

        /**
         * @param items
         */

    }, {
        key: "createElements",
        value: function createElements(items) {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.logHelper.log('Starting elements creation...');
                var start = Date.now();

                items.forEach(function (item) {
                    _this2.$image.append(_this2.createElement(item));
                });

                var end = Date.now();
                _this2.logHelper.log('All items have been created', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "positionItems",
        value: function positionItems() {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.logHelper.log('Starting items positioning...');
                var start = Date.now();

                var $items = _this3.$image.find('.item');
                $.each($items, function () {
                    var $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]');
                    var width = $(this).width();
                    var left = void 0;
                    var top = void 0;

                    var _ItemHelper$calculate = _itemHelper2.default.calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);

                    var _ItemHelper$calculate2 = _slicedToArray(_ItemHelper$calculate, 2);

                    left = _ItemHelper$calculate2[0];
                    top = _ItemHelper$calculate2[1];


                    $(this).css('left', left);
                    $(this).css('top', top);
                });

                var end = Date.now();
                _this3.logHelper.log('All items have been positioned', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            var _this4 = this;

            return new Promise(function (resolve) {
                _this4.logHelper.log('Starting events binding...');
                var start = Date.now();

                var hover = new _hover2.default(_this4.$image);
                hover.bindAll();

                var resizer = new _resizer2.default(hover);
                resizer.bind(_this4.$image);

                var end = Date.now();
                _this4.logHelper.log('All events have been bound', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "loadImages",
        value: function loadImages() {
            var _this5 = this;

            return new Promise(function (resolve) {
                _this5.logHelper.log('Starting images loading...');
                var start = Date.now();

                if (_this5.$image.find('img').length) {
                    (0, _imagesloaded2.default)(_this5.$image, function () {
                        var end = Date.now();
                        _this5.logHelper.log('All images have been detected and loaded', end - start, 'green');

                        resolve();
                    });
                } else {
                    var end = Date.now();
                    _this5.logHelper.log('No image detected', end - start, 'green');

                    resolve();
                }
            });
        }
    }, {
        key: "execute",
        value: function execute() {
            var _this6 = this;

            var start = Date.now();

            // Add the interactive-image class on the main scene
            if (!this.$image.hasClass('interactive-image')) {
                this.$image.addClass('interactive-image');
            }

            // Add message for unsupported screen sizes
            var unsupportedScreenElement = this.domHelper.createElement('div', { class: 'unsupported-screen' }, 'Interacte with your device first ;)');
            this.$image.append(unsupportedScreenElement);

            this.checkSettings(this.settings).then(function () {
                return _this6.createElements(_this6.items);
            }).then(function () {
                return _this6.loadImages();
            }).then(function () {
                return _this6.positionItems();
            }).then(function () {
                return _this6.bindEvents();
            }).then(function () {
                var end = Date.now();
                _this6.logHelper.log('Execution completed', end - start, 'green');
            }).catch(function (exception) {
                _this6.logHelper.log(exception.message, undefined, 'red');
            });
        }
    }]);

    return App;
}();

exports.default = App;
module.exports = exports["default"];

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
    function Hover($image) {
        _classCallCheck(this, Hover);

        this.$image = $image;
        this.enabled = false;
    }

    /**
     * @param $element
     */


    _createClass(Hover, [{
        key: 'bindMainImageEvents',
        value: function bindMainImageEvents() {
            // Mouse enters main image to show all hotspots
            this.$image.on('mouseenter', function () {
                var $hotspots = $(this).find('.hotspot');
                $.each($hotspots, function () {
                    $(this).fadeIn();
                });
            });

            // Mouse leaves main image to hide all hotspots and containers
            this.$image.on('mouseleave', function () {
                var $elements = $(this).find('.hotspot, .item');
                $.each($elements, function () {
                    Hover.hideElement($(this));
                });
            });
        }
    }, {
        key: 'bindSpecificEvents',
        value: function bindSpecificEvents() {
            var that = this;

            // Bind Mouse leaves container to hide it
            var bindContainerMouseLeaveEvent = function bindContainerMouseLeaveEvent() {
                that.$image.on('mouseleave', '.item', function () {
                    var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                    Hover.hideElement($container);
                });
            };

            // Mouse enters icon to show its container and close all others
            that.$image.on('mouseenter', '.hotspot', function () {
                var $containers = that.$image.find('.item');
                $.each($containers, function () {
                    Hover.hideElement($(this));
                });

                var $container = $('div[data-id="' + $(this).attr('data-for') + '"]');
                Hover.showElement($container);
                $container.on('mouseleave', function () {
                    Hover.hideElement($(this));
                    bindContainerMouseLeaveEvent();
                });
            });
        }
    }, {
        key: 'bindAll',
        value: function bindAll() {
            if (this.enabled === false) {
                this.enabled = true;
            }

            this.bindMainImageEvents();
            this.bindSpecificEvents();
        }
    }, {
        key: 'unbindAll',
        value: function unbindAll() {
            if (this.enabled === true) {
                this.enabled = false;
            }

            this.$image.off();
        }
    }], [{
        key: 'hideElement',
        value: function hideElement($element) {
            if ($element.css('display') === 'block') {
                $element.hide();
            }
        }

        /**
         * @param $element
         */

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

/***/ "./src/js/event/resizer.js":
/*!*********************************!*\
  !*** ./src/js/event/resizer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resizer = function () {
    /**
     * @param {Hover} hover
     */
    function Resizer(hover) {
        _classCallCheck(this, Resizer);

        this.hover = hover;
    }

    _createClass(Resizer, [{
        key: 'bind',
        value: function bind() {
            var resizeTimer = void 0;
            var that = this;

            var enableEffects = function enableEffects() {
                if (window.innerWidth <= 320) {
                    if (that.hover.enabled === true) {
                        that.hover.unbindAll();
                    }
                } else {
                    if (that.hover.enabled === false) {
                        that.hover.bindAll();
                    }
                }
            };

            $(window).on('resize', function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(enableEffects, 250);
            });
        }
    }]);

    return Resizer;
}();

exports.default = Resizer;
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
         * @param {string} name
         * @param {object} attributes
         * @returns {HTMLElement}
         */
        value: function createElement(name, attributes) {
            var node = document.createElement(name);

            if ('undefined' !== typeof attributes) {
                for (var attribute in attributes) {
                    if (attributes.hasOwnProperty(attribute)) {
                        node.setAttribute(attribute, attributes[attribute]);
                    }
                }
            }

            for (var i = 2; i < arguments.length; i++) {
                var child = arguments[i];
                if ('string' === typeof child) {
                    child = document.createTextNode(child);
                    node.appendChild(child);
                }
            }

            return node;
        }
    }]);

    return DomHelper;
}();

exports.default = DomHelper;
module.exports = exports['default'];

/***/ }),

/***/ "./src/js/helper/fileHelper.js":
/*!*************************************!*\
  !*** ./src/js/helper/fileHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileHelper = function () {
    function FileHelper() {
        _classCallCheck(this, FileHelper);
    }

    _createClass(FileHelper, null, [{
        key: 'guessExtension',

        /**
         * Guess extension of a filename
         *
         * @param {string} filename
         * @returns {string}
         */
        value: function guessExtension(filename) {
            return filename.split('.').pop();
        }
    }]);

    return FileHelper;
}();

exports.default = FileHelper;
module.exports = exports['default'];

/***/ }),

/***/ "./src/js/helper/itemHelper.js":
/*!*************************************!*\
  !*** ./src/js/helper/itemHelper.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemHelper = function () {
    function ItemHelper() {
        _classCallCheck(this, ItemHelper);
    }

    _createClass(ItemHelper, null, [{
        key: "calculateInitialContainerPosition",

        /**
         * Determinate the position (left, top) of the item container after the hotspot position
         *
         * @param {number} hotspotLeft
         * @param {number} hotspotTop
         * @param {number} width
         * @returns {*[]}
         */
        value: function calculateInitialContainerPosition(hotspotLeft, hotspotTop, width) {
            return [hotspotLeft + 15 - width / 2, hotspotTop + 40];
        }

        /**
         * Convert a position in pixels into a percentage of a total size
         *
         * @param {number} pixels
         * @param {number} size
         * @returns {string}
         */

    }, {
        key: "convertPixelsToPercentage",
        value: function convertPixelsToPercentage(pixels, size) {
            return (pixels * 100 / size).toFixed(2);
        }
    }]);

    return ItemHelper;
}();

exports.default = ItemHelper;
module.exports = exports["default"];

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
    /**
     * @param {boolean} debug
     */
    function LogHelper(debug) {
        _classCallCheck(this, LogHelper);

        this.debug = debug;
    }

    /**
     * @param {string}         message
     * @param {number}         milliseconds
     * @param {string='black'} color
     */


    _createClass(LogHelper, [{
        key: 'log',
        value: function log(message, milliseconds) {
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'black';

            if (!window.console || !window.console.log || false === this.debug) {
                return;
            }

            if ('number' === typeof milliseconds) {
                message += ' in ' + milliseconds.toFixed(0) + ' ms';
            }

            window.console.log('%c' + message, 'color:' + color);
        }
    }]);

    return LogHelper;
}();

exports.default = LogHelper;
module.exports = exports['default'];

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

__webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");

__webpack_require__(/*! ../css/icomoon.css */ "./src/css/icomoon.css");

var _app = __webpack_require__(/*! ./app */ "./src/js/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * interactiveimagejs v2.1.0
 * A jQuery plugin to embed interactive images on your website
 * MIT License
 */
(function ($, window, document, undefined) {
    $.fn.interactiveImage = function (items, options) {
        var _this = this;

        var defaults = {
            debug: false
        };

        options = $.extend(defaults, options);

        return this.each(function () {
            new _app2.default(items, options, $(_this)).execute();
        });
    };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/item/audioItem.js":
/*!**********************************!*\
  !*** ./src/js/item/audioItem.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(/*! ./baseItem */ "./src/js/item/baseItem.js");

var _baseItem2 = _interopRequireDefault(_baseItem);

var _fileHelper = __webpack_require__(/*! ./../helper/fileHelper */ "./src/js/helper/fileHelper.js");

var _fileHelper2 = _interopRequireDefault(_fileHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @extends BaseItem
 */
var AudioItem = function (_BaseItem) {
    _inherits(AudioItem, _BaseItem);

    _createClass(AudioItem, null, [{
        key: "fileFormats",

        /**
         * Allowed file extensions for audio tag
         *
         * @returns {{mp3: string, wav: string, ogg: string}}
         */
        value: function fileFormats() {
            return {
                'mp3': 'audio/mpeg',
                'ogg': 'audio/ogg',
                'wav': 'audio/wav'
            };
        }

        /**
         * @returns {string}
         */

    }, {
        key: "unsupportedTagMessage",
        value: function unsupportedTagMessage() {
            return 'Your browser does not support the audio tag.';
        }

        /**
         * @param {object} parameters
         */

    }]);

    function AudioItem(parameters) {
        _classCallCheck(this, AudioItem);

        var _this = _possibleConstructorReturn(this, (AudioItem.__proto__ || Object.getPrototypeOf(AudioItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['path']);

        _this.path = parameters.path;
        _this.caption = parameters.caption;

        _this.fileExtension = _fileHelper2.default.guessExtension(_this.path);

        if (!AudioItem.fileFormats().hasOwnProperty(_this.fileExtension)) {
            throw Error('Unsupported file extension "' + _this.fileExtension + '"');
        }
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(AudioItem, [{
        key: "createAudio",
        value: function createAudio() {
            var audio = this.domHelper.createElement('audio', { 'class': 'genuine-theme' }, AudioItem.unsupportedTagMessage());
            audio.setAttribute('controls', '');
            audio.setAttribute('preload', 'metadata');

            var source = this.domHelper.createElement('source');
            source.setAttribute('src', this.path);
            source.setAttribute('type', AudioItem.fileFormats()[this.fileExtension]);

            audio.appendChild(source);

            return audio;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "renderHtml",
        value: function renderHtml() {
            var element = this.createItemElement();
            var audioItem = this.domHelper.createElement('div', { 'class': 'audio-item' });

            if ('undefined' !== typeof this.caption) {
                var caption = this.domHelper.createElement('span', { 'class': 'caption' }, this.caption);
                audioItem.appendChild(caption);
            }

            audioItem.appendChild(this.createAudio());

            element.appendChild(audioItem);

            return element;
        }
    }]);

    return AudioItem;
}(_baseItem2.default);

exports.default = AudioItem;
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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

var _uniqueId = __webpack_require__(/*! ../service/uniqueId */ "./src/js/service/uniqueId.js");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseItem = function () {
    /**
     * @param {object} parameters
     */
    function BaseItem(parameters) {
        _classCallCheck(this, BaseItem);

        this.domHelper = new _domHelper2.default();

        this.identifier = _uniqueId2.default.generate('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : { left: 0, top: 0 };
    }

    _createClass(BaseItem, [{
        key: "checkRequiredParameters",
        value: function checkRequiredParameters(parameters, requiredParameters) {
            for (var i in requiredParameters) {
                if ('undefined' === typeof parameters[requiredParameters[i]] || null === parameters[requiredParameters[i]] || '' === parameters[requiredParameters[i]]) {
                    throw Error('Missing required parameter named "' + requiredParameters[i] + '"');
                }
            }
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createHotspotElement",
        value: function createHotspotElement() {
            var element = this.domHelper.createElement('div', { 'class': 'hotspot icon-radio-checked' });
            element.setAttribute('data-for', this.identifier);
            element.style.left = this.position.left + 'px';
            element.style.top = this.position.top + 'px';

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createItemElement",
        value: function createItemElement() {
            var element = this.domHelper.createElement('div', { 'class': 'item' });
            element.setAttribute('data-id', this.identifier);

            return element;
        }
    }, {
        key: "renderHtml",
        value: function renderHtml() {
            throw Error('Render method not implemented');
        }
    }]);

    return BaseItem;
}();

exports.default = BaseItem;
module.exports = exports["default"];

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

var _audioItem = __webpack_require__(/*! ./audioItem */ "./src/js/item/audioItem.js");

var _audioItem2 = _interopRequireDefault(_audioItem);

var _pictureItem = __webpack_require__(/*! ./pictureItem */ "./src/js/item/pictureItem.js");

var _pictureItem2 = _interopRequireDefault(_pictureItem);

var _providerItem = __webpack_require__(/*! ./providerItem */ "./src/js/item/providerItem.js");

var _providerItem2 = _interopRequireDefault(_providerItem);

var _textItem = __webpack_require__(/*! ./textItem */ "./src/js/item/textItem.js");

var _textItem2 = _interopRequireDefault(_textItem);

var _videoItem = __webpack_require__(/*! ./videoItem */ "./src/js/item/videoItem.js");

var _videoItem2 = _interopRequireDefault(_videoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var classes = {
    AudioItem: _audioItem2.default,
    PictureItem: _pictureItem2.default,
    ProviderItem: _providerItem2.default,
    TextItem: _textItem2.default,
    VideoItem: _videoItem2.default
};

var Factory = function () {
    function Factory() {
        _classCallCheck(this, Factory);
    }

    _createClass(Factory, [{
        key: "create",

        /**
         * @param {string} name
         * @param {object} parameters
         * @returns {AudioItem|PictureItem|ProviderItem|TextItem|VideoItem}
         */
        value: function create(name, parameters) {
            var className = name.toLowerCase() + 'Item';
            className = className.charAt(0).toUpperCase() + className.slice(1);

            try {
                return new classes[className](parameters);
            } catch (exception) {
                var message = void 0;
                if ('undefined' !== typeof exception.name && exception.name === 'TypeError') {
                    message = 'Invalid item type "' + name + '" (allowed values: "audio", "picture", "provider", "text", "video")';
                } else {
                    message = exception.message;
                }

                throw Error(message);
            }
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

/**
 * @extends BaseItem
 */
var PictureItem = function (_BaseItem) {
    _inherits(PictureItem, _BaseItem);

    /**
     * @param {object} parameters
     */
    function PictureItem(parameters) {
        _classCallCheck(this, PictureItem);

        var _this = _possibleConstructorReturn(this, (PictureItem.__proto__ || Object.getPrototypeOf(PictureItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['path']);

        _this.path = parameters.path;
        _this.caption = parameters.caption;
        _this.linkUrl = parameters.linkUrl;
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(PictureItem, [{
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', { 'class': 'picture' });
            element.src = this.path;

            if ('undefined' !== typeof this.caption) {
                element.alt = this.caption;
            } else {
                element.alt = 'Picture #' + this.identifier;
            }

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var element = this.createItemElement();
            var pictureItem = this.domHelper.createElement('div', { 'class': 'picture-item' });

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

/***/ "./src/js/item/providerItem.js":
/*!*************************************!*\
  !*** ./src/js/item/providerItem.js ***!
  \*************************************/
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

/**
 * @extends BaseItem
 */
var ProviderItem = function (_BaseItem) {
    _inherits(ProviderItem, _BaseItem);

    /**
     * @param {object} parameters
     */
    function ProviderItem(parameters) {
        _classCallCheck(this, ProviderItem);

        var _this = _possibleConstructorReturn(this, (ProviderItem.__proto__ || Object.getPrototypeOf(ProviderItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['providerName', 'parameters']);

        _this.providerName = parameters.providerName;
        _this.parameters = parameters.parameters;

        if ('youtube' !== _this.providerName) {
            throw Error('Unsupported provider "' + _this.providerName + '"');
        }
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(ProviderItem, [{
        key: 'createIframe',
        value: function createIframe() {
            return this.domHelper.createElement('iframe', {
                'frameborder': '0',
                'src': 'https://www.youtube.com/embed/' + this.parameters.videoId
            });
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var element = this.createItemElement();
            var providerItem = this.domHelper.createElement('div', { 'class': 'provider-item' });

            providerItem.appendChild(this.createIframe());

            element.appendChild(providerItem);

            return element;
        }
    }]);

    return ProviderItem;
}(_baseItem2.default);

exports.default = ProviderItem;
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

/**
 * @extends BaseItem
 */
var TextItem = function (_BaseItem) {
    _inherits(TextItem, _BaseItem);

    /**
     * @param {object} parameters
     */
    function TextItem(parameters) {
        _classCallCheck(this, TextItem);

        var _this = _possibleConstructorReturn(this, (TextItem.__proto__ || Object.getPrototypeOf(TextItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['title', 'description']);

        _this.title = parameters.title.toLowerCase();
        _this.description = parameters.description;
        _this.picturePath = parameters.picturePath;
        _this.link = parameters.link;
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(TextItem, [{
        key: 'createTitle',
        value: function createTitle() {
            return this.domHelper.createElement('span', { 'class': 'title' }, this.title);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'createDescription',
        value: function createDescription() {
            return this.domHelper.createElement('p', { 'class': 'description' }, this.description);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', { 'class': 'picture' });
            element.src = this.picturePath;
            element.alt = this.title;

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'createLink',
        value: function createLink() {
            var element = document.createElement('a');
            element.href = this.link.url;

            var label = void 0;
            if ('undefined' !== typeof this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.href;
            }

            element.appendChild(document.createTextNode(label));

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'renderHtml',
        value: function renderHtml() {
            var element = this.createItemElement();
            var textElement = this.domHelper.createElement('div', { 'class': 'text-item' });

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

/***/ "./src/js/item/videoItem.js":
/*!**********************************!*\
  !*** ./src/js/item/videoItem.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseItem = __webpack_require__(/*! ./baseItem */ "./src/js/item/baseItem.js");

var _baseItem2 = _interopRequireDefault(_baseItem);

var _fileHelper = __webpack_require__(/*! ./../helper/fileHelper */ "./src/js/helper/fileHelper.js");

var _fileHelper2 = _interopRequireDefault(_fileHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @extends BaseItem
 */
var VideoItem = function (_BaseItem) {
    _inherits(VideoItem, _BaseItem);

    _createClass(VideoItem, null, [{
        key: "fileFormats",

        /**
         * Allowed file extensions for video tag
         *
         * @returns {{mp4: string, webm: string}}
         */
        value: function fileFormats() {
            return {
                'mp4': 'video/mp4',
                'webm': 'video/webm'
            };
        }

        /**
         * @returns {string}
         */

    }, {
        key: "unsupportedTagMessage",
        value: function unsupportedTagMessage() {
            return 'Your browser does not support the video tag.';
        }

        /**
         * @param {object} parameters
         */

    }]);

    function VideoItem(parameters) {
        _classCallCheck(this, VideoItem);

        var _this = _possibleConstructorReturn(this, (VideoItem.__proto__ || Object.getPrototypeOf(VideoItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['path']);

        _this.path = parameters.path;
        _this.caption = parameters.caption;

        _this.fileExtension = _fileHelper2.default.guessExtension(_this.path);

        if (!VideoItem.fileFormats().hasOwnProperty(_this.fileExtension)) {
            throw Error('Unsupported file extension "' + _this.fileExtension + '"');
        }
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(VideoItem, [{
        key: "createVideo",
        value: function createVideo() {
            var video = this.domHelper.createElement('video', { 'class': 'genuine-theme' }, VideoItem.unsupportedTagMessage());
            video.setAttribute('controls', '');
            video.setAttribute('controlsList', 'nodownload');
            video.setAttribute('preload', 'metadata');

            var source = this.domHelper.createElement('source');
            source.setAttribute('src', this.path);
            source.setAttribute('type', VideoItem.fileFormats()[this.fileExtension]);

            video.appendChild(source);

            return video;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "renderHtml",
        value: function renderHtml() {
            var element = this.createItemElement();
            var videoItem = this.domHelper.createElement('div', { 'class': 'video-item' });

            if ('undefined' !== typeof this.caption) {
                var caption = this.domHelper.createElement('span', { 'class': 'caption' }, this.caption);
                videoItem.appendChild(caption);
            }

            videoItem.appendChild(this.createVideo());

            element.appendChild(videoItem);

            return element;
        }
    }]);

    return VideoItem;
}(_baseItem2.default);

exports.default = VideoItem;
module.exports = exports["default"];

/***/ }),

/***/ "./src/js/service/uniqueId.js":
/*!************************************!*\
  !*** ./src/js/service/uniqueId.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniqueId = function () {
    function UniqueId() {
        _classCallCheck(this, UniqueId);
    }

    _createClass(UniqueId, null, [{
        key: 'now',

        /**
         * @returns {number}
         */
        value: function now() {
            var time = Date.now();
            this.last = this.last || time;
            this.last = time > this.last ? time : this.last + 1;

            return this.last;
        }

        /**
         * Get a unique identifier from date and a prefix
         *
         * @param {string} prefix
         * @returns {string}
         */

    }, {
        key: 'generate',
        value: function generate(prefix) {
            return (typeof prefix !== 'undefined' ? prefix + '_' : '') + UniqueId.now().toString(36);
        }
    }]);

    return UniqueId;
}();

exports.default = UniqueId;
module.exports = exports['default'];

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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