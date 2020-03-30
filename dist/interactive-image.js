/*!
 * interactive-image v2.5.0
 * https://github.com/jpchateau
 * Jean-Philippe Chateau - <contact@jpchateau.com>
 * MIT License
 */
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _behavior = __webpack_require__(/*! ./event/behavior */ "./src/js/event/behavior.js");

var _behavior2 = _interopRequireDefault(_behavior);

var _domHelper = __webpack_require__(/*! ./helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

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

var _socialMediaShare = __webpack_require__(/*! ./service/socialMediaShare */ "./src/js/service/socialMediaShare.js");

var _socialMediaShare2 = _interopRequireDefault(_socialMediaShare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    /**
     * @param {jQuery} $image
     * @param {array}  items
     * @param {object} settings
     */
    function App($image, items, settings) {
        _classCallCheck(this, App);

        this.$image = $image;
        this.items = items;
        this.settings = settings;
        this.itemFactory = new _factory2.default();

        if ('boolean' !== typeof this.settings.debug) {
            throw Error('Check the "debug" option. Allowed type: boolean.');
        }

        this.logHelper = new _logHelper2.default();
        this.logHelper.debug = this.settings.debug;
    }

    _createClass(App, [{
        key: "checkSettings",
        value: function checkSettings() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.logHelper.log('Starting settings check...');
                var start = Date.now();

                if ('boolean' !== typeof _this.settings.allowHtml) {
                    throw Error('Check the "allowHtml" option. Allowed type: boolean.');
                }

                if ('boolean' !== typeof _this.settings.shareBox) {
                    throw Error('Check the "shareBox" option. Allowed type: boolean.');
                }

                if ('undefined' !== typeof _this.settings.socialMedia && 'object' !== _typeof(_this.settings.socialMedia)) {
                    throw Error('Check the "socialMedia" option.');
                }

                var end = Date.now();
                _this.logHelper.log('Options checked', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "consolidateDOM",
        value: function consolidateDOM() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.logHelper.log('Starting DOM consolidation...');
                var start = Date.now();

                // Add interactive-image class on the main scene
                if (!_this2.$image.hasClass('interactive-image')) {
                    _this2.$image.addClass('interactive-image');
                }

                // Add message for unsupported screen sizes
                var unsupportedScreenElement = _domHelper2.default.createElement('div', { class: 'unsupported-screen' }, 'Please rotate your device.');
                _this2.$image.append(unsupportedScreenElement);

                var end = Date.now();
                _this2.logHelper.log('DOM consolidated', end - start, 'green');

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
            element.applicationSettings = this.settings;
            this.$image.append(element.createHotspotElement());

            this.logHelper.log('Item (' + type + ') created.');

            return $(element.renderHtml());
        }
    }, {
        key: "createElements",
        value: function createElements() {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.logHelper.log('Starting elements creation...');
                var start = Date.now();

                _this3.items.forEach(function (item) {
                    _this3.$image.append(_this3.createElement(item));
                });

                var end = Date.now();
                _this3.logHelper.log('All items have been created', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "positionItems",
        value: function positionItems() {
            var _this4 = this;

            return new Promise(function (resolve) {
                _this4.logHelper.log('Starting items positioning...');
                var start = Date.now();

                var $items = _this4.$image.find('.item');
                $.each($items, function () {
                    var $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]');

                    var _ItemHelper$calculate = _itemHelper2.default.calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), $(this).width()),
                        _ItemHelper$calculate2 = _slicedToArray(_ItemHelper$calculate, 2),
                        left = _ItemHelper$calculate2[0],
                        top = _ItemHelper$calculate2[1];

                    $(this).css('left', left);
                    $(this).css('top', top);
                });

                var end = Date.now();
                _this4.logHelper.log('All items have been positioned', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            var _this5 = this;

            return new Promise(function (resolve) {
                _this5.logHelper.log('Starting events binding...');
                var start = Date.now();

                var behavior = new _behavior2.default(_this5.$image);
                behavior.bindAll();

                var resizer = new _resizer2.default(behavior);
                resizer.bind();

                var end = Date.now();
                _this5.logHelper.log('All events have been bound', end - start, 'green');

                resolve();
            });
        }
    }, {
        key: "processShareCapabilities",
        value: function processShareCapabilities() {
            var _this6 = this;

            return new Promise(function (resolve) {
                _this6.logHelper.log('Starting to evaluate social media share capabilities...');
                var start = Date.now();

                if (true === _this6.settings.shareBox) {
                    var socialMediaShare = new _socialMediaShare2.default(_this6.$image);
                    socialMediaShare.buildShareBox(_this6.settings.socialMedia || {});
                }

                var end = Date.now();
                _this6.logHelper.log('Social media share capabilities executed', end - start, 'green');
                resolve();
            });
        }
    }, {
        key: "loadImages",
        value: function loadImages() {
            var _this7 = this;

            return new Promise(function (resolve) {
                _this7.logHelper.log('Starting images loading...');
                var start = Date.now();

                if (_this7.$image.find('img').length) {
                    (0, _imagesloaded2.default)(_this7.$image, function () {
                        var end = Date.now();
                        _this7.logHelper.log('All images have been detected and loaded', end - start, 'green');

                        resolve();
                    });
                } else {
                    var end = Date.now();
                    _this7.logHelper.log('No image detected', end - start, 'green');

                    resolve();
                }
            });
        }
    }, {
        key: "execute",
        value: function execute() {
            var _this8 = this;

            var start = Date.now();

            this.checkSettings().then(function () {
                return _this8.consolidateDOM();
            }).then(function () {
                return _this8.createElements();
            }).then(function () {
                return _this8.loadImages();
            }).then(function () {
                return _this8.positionItems();
            }).then(function () {
                return _this8.bindEvents();
            }).then(function () {
                return _this8.processShareCapabilities();
            }).catch(function (exception) {
                _this8.logHelper.log(exception.message, undefined, 'red');
            }).finally(function () {
                var end = Date.now();
                _this8.logHelper.log('Execution completed', end - start, 'green');
            });
        }
    }]);

    return App;
}();

exports.default = App;
module.exports = exports.default;

/***/ }),

/***/ "./src/js/event/behavior.js":
/*!**********************************!*\
  !*** ./src/js/event/behavior.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Behavior = function () {
    /**
     * @param {jQuery} $image
     */
    function Behavior($image) {
        _classCallCheck(this, Behavior);

        this.$image = $image;
        this.enabled = false;
    }

    _createClass(Behavior, [{
        key: 'bindAll',
        value: function bindAll() {
            if (this.enabled === false) {
                this.enabled = true;
            }

            this.bindSceneEvents();
            this.bindItemsEvents();
        }
    }, {
        key: 'unbindAll',
        value: function unbindAll() {
            if (this.enabled === true) {
                this.enabled = false;
            }

            this.$image.off();
        }
    }, {
        key: 'bindSceneEvents',
        value: function bindSceneEvents() {
            // Mouse enters scene -> show all hotspots and share box
            this.$image.on('mouseenter', function () {
                var $hotspots = $(this).find('.hotspot');
                $.each($hotspots, function () {
                    $(this).fadeIn();
                });

                var $shareBox = $(this).find('.social-share-box');
                setTimeout(function () {
                    $shareBox.css('display', 'flex');
                }, 100);
            });

            // Mouse leaves scene -> hide all hotspots, containers and share box
            this.$image.on('mouseleave', function () {
                var $elements = $(this).find('.hotspot, .item');
                $.each($elements, function () {
                    _domHelper2.default.hideElement($(this)[0]);
                });

                var $shareBox = $(this).find('.social-share-box');
                _domHelper2.default.hideElement($shareBox[0]);
            });
        }
    }, {
        key: 'bindItemsEvents',
        value: function bindItemsEvents() {
            var that = this;

            var bindHostpotMouseLeave = function bindHostpotMouseLeave($hotspot) {
                $hotspot.on('mouseleave', function (event) {
                    var $relatedTarget = $(event.relatedTarget);
                    // If parent has class "item", it enters container so there is no need to hide it
                    if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                        return;
                    }

                    var container = _domHelper2.default.retrieveContainerFromHotspot($hotspot[0]);
                    if (container.classList.contains('behavior-sticky')) {
                        return;
                    }

                    _domHelper2.default.hideElement(container);
                });
            };

            var unbindHotspotMouseLeave = function unbindHotspotMouseLeave($hotspot) {
                $hotspot.off('mouseleave');
            };

            // Initialize events on each hotspots and items
            that.$image.find('.hotspot').each(function () {
                var $hotspot = $(this);
                var $container = $(_domHelper2.default.retrieveContainerFromHotspot($hotspot[0]));

                if ($container[0].classList.contains('behavior-sticky')) {
                    return;
                }

                bindHostpotMouseLeave($hotspot);
                $container.on('mouseenter', function () {
                    unbindHotspotMouseLeave($hotspot);
                });

                // Bind event to hide the related container when mouse leaves it
                $container.on('mouseleave', function (event) {
                    var $relatedTarget = $(event.relatedTarget);
                    // If related target has class "hotpost", it enters hotspot so there is no need to hide the container
                    if ($relatedTarget.hasClass('hotspot')) {
                        return;
                    }

                    _domHelper2.default.hideElement($(this)[0]);
                    bindHostpotMouseLeave($hotspot);
                });
            });

            // Bind event on each sticky item
            that.$image.find('.item').each(function () {
                var $container = $(this);
                if (!$container[0].classList.contains('behavior-sticky')) {
                    return;
                }

                // Bind event to hide the related container when close button is clicked
                $container.on('click', '.close-button', function () {
                    _domHelper2.default.hideElement($container[0]);
                });
            });

            // Mouse enters a hotspot
            that.$image.on('mouseenter', '.hotspot', function (event) {
                var $hotspot = $(this);
                var $relatedTarget = $(event.relatedTarget);
                if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
                    // If parent has class "item", it only re-enters from item
                    return bindHostpotMouseLeave($hotspot);
                }

                // Hide all other containers that are not sticky
                var $containers = that.$image.find('.item').not('.behavior-sticky');
                $.each($containers, function () {
                    _domHelper2.default.hideElement($(this)[0]);
                });

                // Finally, show the related item
                var container = _domHelper2.default.retrieveContainerFromHotspot($hotspot[0]);
                _domHelper2.default.showElement(container);
            });
        }
    }]);

    return Behavior;
}();

exports.default = Behavior;
module.exports = exports.default;

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
     * @param {Behavior} behavior
     */
    function Resizer(behavior) {
        _classCallCheck(this, Resizer);

        this.behavior = behavior;
    }

    _createClass(Resizer, [{
        key: 'enable',
        value: function enable() {
            if (this.behavior.enabled === false) {
                this.behavior.bindAll();
            }
        }
    }, {
        key: 'disable',
        value: function disable() {
            if (this.behavior.enabled === true) {
                this.behavior.unbindAll();
            }
        }
    }, {
        key: 'bind',
        value: function bind() {
            var resizeTimer = void 0;
            var that = this;

            var enableEffects = function enableEffects() {
                if (window.innerWidth <= 320) {
                    that.disable();

                    return;
                }

                that.enable();
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
module.exports = exports.default;

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

    _createClass(DomHelper, null, [{
        key: 'createElement',

        /**
         * Create a DOM element
         *
         * @param {string} name         - tag name
         * @param {object} [attributes] - html attributes
         * @param {string} [text]       - text
         * @param {?boolean} allowHtml  - allow HTML markup
         * @returns {HTMLElement}
         */
        value: function createElement(name, attributes, text) {
            var allowHtml = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var node = document.createElement(name);

            DomHelper.addAttributes(node, attributes);
            DomHelper.addText(node, allowHtml, text);

            return node;
        }

        /**
         * @param {HTMLElement} node
         * @param {object} [attributes]
         */

    }, {
        key: 'addAttributes',
        value: function addAttributes(node, attributes) {
            if ('undefined' === typeof attributes) {
                return;
            }

            for (var attribute in attributes) {
                if (attributes.hasOwnProperty(attribute)) {
                    node.setAttribute(attribute, attributes[attribute]);
                }
            }
        }

        /**
         * @param {HTMLElement} node
         * @param {boolean} allowHtml
         * @param {string} text
         */

    }, {
        key: 'addText',
        value: function addText(node, allowHtml, text) {
            if ('undefined' === typeof text) {
                return;
            }

            if (false === allowHtml) {
                node.textContent = text;

                return;
            }

            node.innerHTML = text;
        }

        /**
         * Hide a DOM element
         *
         * @param {HTMLElement} element
         */

    }, {
        key: 'hideElement',
        value: function hideElement(element) {
            if (element.style.display === 'block') {
                element.style.display = 'none';

                if (DomHelper.elementContainsMediaItem(element) === true) {
                    DomHelper.stopMedia(element);
                }
            }
        }

        /**
         * Show a DOM element
         *
         * @param {HTMLElement} element
         */

    }, {
        key: 'showElement',
        value: function showElement(element) {
            if (element.style.display !== 'block') {
                element.style.display = 'block';
            }
        }

        /**
         * @param {HTMLElement} hotspot
         * @returns {HTMLElement}
         */

    }, {
        key: 'retrieveContainerFromHotspot',
        value: function retrieveContainerFromHotspot(hotspot) {
            return document.querySelector('div[data-id="' + hotspot.getAttribute('data-for') + '"]');
        }

        /**
         * Detect if an item contains media
         *
         * @param {HTMLElement} element
         * @returns {boolean}
         */

    }, {
        key: 'elementContainsMediaItem',
        value: function elementContainsMediaItem(element) {
            return element.querySelectorAll('.audio-item, .video-item, .provider-item').length !== 0;
        }

        /**
         * Stop a Media Element from playing and reinitialize it
         *
         * @param {HTMLElement} element
         */

    }, {
        key: 'stopMedia',
        value: function stopMedia(element) {
            var selector = "div[data-id='" + element.getAttribute('data-id') + "'] ";
            var htmlMedia = document.querySelector(selector + 'audio, ' + selector + 'video');
            if (null !== htmlMedia) {
                htmlMedia.pause();
                htmlMedia.currentTime = 0;

                return;
            }

            var providerMedia = document.querySelector(selector + 'iframe');
            if (null !== providerMedia) {
                var source = providerMedia.src;
                providerMedia.src = source;
            }
        }
    }]);

    return DomHelper;
}();

exports.default = DomHelper;
module.exports = exports.default;

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

        /**
         * Throw an error if file extension is not allowed
         *
         * @param {string} extension
         * @param {object} allowedFormats
         */

    }, {
        key: 'checkFileFormat',
        value: function checkFileFormat(extension, allowedFormats) {
            if (allowedFormats.hasOwnProperty(extension)) {
                return;
            }

            throw Error('Unsupported file extension "' + extension + '"');
        }
    }]);

    return FileHelper;
}();

exports.default = FileHelper;
module.exports = exports.default;

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
            return [hotspotLeft + 25 - width / 2, // 25 is the width of the hotspot (50px) divided by 2
            hotspotTop + 40 // 40 is the offset to position the container below the hotspot
            ];
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
module.exports = exports.default;

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
    function LogHelper() {
        _classCallCheck(this, LogHelper);

        this.enable = false;
    }

    /**
     * @param {boolean} value
     */


    _createClass(LogHelper, [{
        key: 'log',


        /**
         * @param {string} message         - message to display in console
         * @param {?number} [milliseconds] - time
         * @param {string} [color=black]   - message color
         */
        value: function log(message) {
            var milliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'black';

            if (!window.console || !window.console.log || false === this.enable) {
                return;
            }

            if ('number' === typeof milliseconds) {
                message += ' in ' + milliseconds.toFixed(0) + ' ms';
            }

            window.console.log('%c' + message, 'color:' + color);
        }
    }, {
        key: 'debug',
        set: function set(value) {
            this.enable = value;
        }
    }]);

    return LogHelper;
}();

exports.default = LogHelper;
module.exports = exports.default;

/***/ }),

/***/ "./src/js/helper/stringHelper.js":
/*!***************************************!*\
  !*** ./src/js/helper/stringHelper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringHelper = function () {
    function StringHelper() {
        _classCallCheck(this, StringHelper);
    }

    _createClass(StringHelper, null, [{
        key: "param",
        value: function param(parameters) {
            var urlParams = new URLSearchParams(Object.entries(parameters));

            return urlParams.toString();
        }
    }]);

    return StringHelper;
}();

exports.default = StringHelper;
module.exports = exports.default;

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

var _app = __webpack_require__(/*! ./app */ "./src/js/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($, window, document, undefined) {
    $.fn.interactiveImage = function (items, options) {
        var _this = this;

        var defaults = {
            debug: false,
            allowHtml: false,
            shareBox: true
        };

        options = $.extend(defaults, options);

        return this.each(function () {
            new _app2.default($(_this), items, options).execute();
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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

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
        key: "supportedFileFormats",

        /**
         * Allowed file extensions
         *
         * @returns {{mp3: string, wav: string, ogg: string}}
         */
        value: function supportedFileFormats() {
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

        _fileHelper2.default.checkFileFormat(_this.fileExtension, AudioItem.supportedFileFormats());
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(AudioItem, [{
        key: "createAudio",
        value: function createAudio() {
            var audio = _domHelper2.default.createElement('audio', { 'class': 'genuine-theme' }, AudioItem.unsupportedTagMessage());
            audio.setAttribute('controls', '');
            audio.setAttribute('preload', 'metadata');

            var source = _domHelper2.default.createElement('source');
            source.setAttribute('src', this.path);
            source.setAttribute('type', AudioItem.supportedFileFormats()[this.fileExtension]);

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
            var audioItem = _domHelper2.default.createElement('div', { 'class': 'audio-item' });

            audioItem.appendChild(this.createAudio());

            if ('undefined' !== typeof this.caption) {
                var caption = _domHelper2.default.createElement('span', { 'class': 'caption' }, this.caption, this.globalSettings.allowHtml);
                audioItem.appendChild(caption);
            }

            element.appendChild(audioItem);

            return element;
        }
    }]);

    return AudioItem;
}(_baseItem2.default);

exports.default = AudioItem;
module.exports = exports.default;

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
    _createClass(BaseItem, null, [{
        key: "stickyClassName",

        /**
         * @returns {string}
         */
        value: function stickyClassName() {
            return 'behavior-sticky';
        }

        /**
         * @param {object} parameters
         */

    }]);

    function BaseItem(parameters) {
        _classCallCheck(this, BaseItem);

        this.identifier = _uniqueId2.default.generate('item');
        this.position = typeof parameters.position !== 'undefined' ? parameters.position : { left: 0, top: 0 };
        this.sticky = typeof parameters.sticky !== 'undefined' ? parameters.sticky : false;
        this.customClassName = typeof parameters.customClassName !== 'undefined' ? parameters.customClassName : null;
        this.globalSettings = {
            allowHtml: false
        };
    }

    /**
     * @param {object} settings
     */


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
            var element = _domHelper2.default.createElement('div', { 'class': 'hotspot icon-radio-checked' });
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
            var itemClass = 'item';
            if (this.sticky === true) {
                itemClass += ' ' + BaseItem.stickyClassName();
            }

            if (typeof this.customClassName === 'string') {
                itemClass += ' ' + this.customClassName;
            }

            var element = _domHelper2.default.createElement('div', { 'class': itemClass });
            element.setAttribute('data-id', this.identifier);

            if (this.sticky === true) {
                var closeButton = _domHelper2.default.createElement('div', { 'class': 'close-button icon-cancel-circle' });
                element.appendChild(closeButton);
            }

            return element;
        }
    }, {
        key: "renderHtml",
        value: function renderHtml() {
            throw Error('Render method not implemented');
        }
    }, {
        key: "applicationSettings",
        set: function set(settings) {
            this.globalSettings = settings;
        }
    }]);

    return BaseItem;
}();

exports.default = BaseItem;
module.exports = exports.default;

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
module.exports = exports.default;

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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

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
        key: "createPicture",
        value: function createPicture() {
            var element = _domHelper2.default.createElement('img', { 'class': 'picture' });
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
        key: "renderHtml",
        value: function renderHtml() {
            var element = this.createItemElement();
            var pictureItem = _domHelper2.default.createElement('div', { 'class': 'picture-item' });

            if ('undefined' !== typeof this.caption) {
                pictureItem.setAttribute('data-caption', this.caption);
                pictureItem.classList.add("with-caption");
            }

            if ('undefined' !== typeof this.linkUrl) {
                var link = _domHelper2.default.createElement('a');
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
module.exports = exports.default;

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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @extends BaseItem
 */
var ProviderItem = function (_BaseItem) {
    _inherits(ProviderItem, _BaseItem);

    _createClass(ProviderItem, null, [{
        key: "supportedProviders",

        /**
         * @returns {string[]}
         */
        value: function supportedProviders() {
            return ['youtube', 'dailymotion'];
        }

        /**
         * @returns {{youtube: string, dailymotion: string}}
         */

    }, {
        key: "providersUrls",
        value: function providersUrls() {
            return {
                'youtube': 'https://www.youtube.com/embed/',
                'dailymotion': 'https://www.dailymotion.com/embed/video/'
            };
        }

        /**
         * @param {object} parameters
         */

    }]);

    function ProviderItem(parameters) {
        _classCallCheck(this, ProviderItem);

        var _this = _possibleConstructorReturn(this, (ProviderItem.__proto__ || Object.getPrototypeOf(ProviderItem)).call(this, parameters));

        _this.checkRequiredParameters(parameters, ['providerName', 'parameters']);

        _this.providerName = parameters.providerName.toLowerCase();
        _this.parameters = parameters.parameters;

        if (ProviderItem.supportedProviders().indexOf(_this.providerName) === -1) {
            throw Error('Unsupported provider "' + _this.providerName + '"');
        }
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(ProviderItem, [{
        key: "createIframe",
        value: function createIframe() {
            return _domHelper2.default.createElement('iframe', {
                'frameborder': '0',
                'src': ProviderItem.providersUrls()[this.providerName] + this.parameters.videoId + (this.providerName === 'youtube' ? '?origin=' + ProviderItem.guessOrigin() : '')
            });
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "renderHtml",
        value: function renderHtml() {
            var element = this.createItemElement();
            var providerItem = _domHelper2.default.createElement('div', { 'class': 'provider-item' });

            providerItem.appendChild(this.createIframe());

            element.appendChild(providerItem);

            return element;
        }

        /**
         * @returns {string}
         */

    }], [{
        key: "guessOrigin",
        value: function guessOrigin() {
            var urlSplit = window.location.href.split("/");

            return urlSplit[0] + "//" + urlSplit[2];
        }
    }]);

    return ProviderItem;
}(_baseItem2.default);

exports.default = ProviderItem;
module.exports = exports.default;

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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

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
        key: "createTitle",
        value: function createTitle() {
            return _domHelper2.default.createElement('span', { 'class': 'title' }, this.title);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createDescription",
        value: function createDescription() {
            return _domHelper2.default.createElement('p', { 'class': 'description' }, this.description, this.globalSettings.allowHtml);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createPicture",
        value: function createPicture() {
            var element = _domHelper2.default.createElement('img', { 'class': 'picture' });
            element.src = this.picturePath;
            element.alt = this.title;

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createLink",
        value: function createLink() {
            var element = _domHelper2.default.createElement('a');
            element.href = this.link.url;

            var label = void 0;
            if ('undefined' !== typeof this.link.label) {
                label = this.link.label;
            } else {
                label = this.link.url;
            }

            element.appendChild(document.createTextNode(label));

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "renderHtml",
        value: function renderHtml() {
            var element = this.createItemElement();
            var textElement = _domHelper2.default.createElement('div', { 'class': 'text-item' });

            textElement.appendChild(this.createTitle());

            if ('undefined' !== typeof this.picturePath) {
                textElement.appendChild(this.createPicture());
            }

            textElement.appendChild(this.createDescription());

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
module.exports = exports.default;

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

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

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
        key: "supportedFileFormats",

        /**
         * Allowed file extensions
         *
         * @returns {{mp4: string, webm: string}}
         */
        value: function supportedFileFormats() {
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
        _this.poster = parameters.poster;
        _this.fileExtension = _fileHelper2.default.guessExtension(_this.path);

        _fileHelper2.default.checkFileFormat(_this.fileExtension, VideoItem.supportedFileFormats());
        return _this;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(VideoItem, [{
        key: "createVideo",
        value: function createVideo() {
            var video = _domHelper2.default.createElement('video', { 'class': 'genuine-theme' }, VideoItem.unsupportedTagMessage());
            video.setAttribute('controls', '');
            video.setAttribute('controlsList', 'nodownload');
            video.setAttribute('preload', 'metadata');

            var source = _domHelper2.default.createElement('source');
            source.setAttribute('src', this.path);
            source.setAttribute('type', VideoItem.supportedFileFormats()[this.fileExtension]);

            if ('undefined' !== typeof this.poster) {
                video.setAttribute('poster', this.poster);
            }

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
            var videoItem = _domHelper2.default.createElement('div', { 'class': 'video-item' });

            videoItem.appendChild(this.createVideo());

            if ('undefined' !== typeof this.caption) {
                var caption = _domHelper2.default.createElement('span', { 'class': 'caption' }, this.caption, this.globalSettings.allowHtml);
                videoItem.appendChild(caption);
            }

            element.appendChild(videoItem);

            return element;
        }
    }]);

    return VideoItem;
}(_baseItem2.default);

exports.default = VideoItem;
module.exports = exports.default;

/***/ }),

/***/ "./src/js/service/socialMediaShare.js":
/*!********************************************!*\
  !*** ./src/js/service/socialMediaShare.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domHelper = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");

var _domHelper2 = _interopRequireDefault(_domHelper);

var _stringHelper = __webpack_require__(/*! ../helper/stringHelper */ "./src/js/helper/stringHelper.js");

var _stringHelper2 = _interopRequireDefault(_stringHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocialMediaShare = function () {
    /**
     * @param {jQuery} $image
     */
    function SocialMediaShare($image) {
        _classCallCheck(this, SocialMediaShare);

        this.$image = $image;
    }

    /**
     * @param {object} options
     * @returns {string}
     */


    _createClass(SocialMediaShare, [{
        key: "buildFacebookButton",


        /**
         * @param {object} options
         * @returns {HTMLElement}
         */
        value: function buildFacebookButton(options) {
            return SocialMediaShare.buildButton('social-button facebook-colors icon-facebook', SocialMediaShare.buildFacebookUrl(options));
        }

        /**
         * @param {object} options
         * @returns {HTMLElement}
         */

    }, {
        key: "buildTwitterButton",
        value: function buildTwitterButton(options) {
            return SocialMediaShare.buildButton('social-button twitter-colors icon-twitter', SocialMediaShare.buildTwitterUrl(options));
        }

        /**
         * @param {object} options
         * @returns {HTMLElement}
         */

    }, {
        key: "buildMailButton",
        value: function buildMailButton(options) {
            return SocialMediaShare.buildButton('social-button mail-colors icon-envelop', SocialMediaShare.buildMailUrl(options));
        }

        /**
         * @param {object} socialMediaOptions
         */

    }, {
        key: "buildShareBox",
        value: function buildShareBox(socialMediaOptions) {
            var elementBox = _domHelper2.default.createElement('div', { 'class': 'social-share-box' });
            var elementShareButton = _domHelper2.default.createElement('div', { 'class': 'social-button share-colors icon-share2' });

            elementBox.appendChild(this.buildFacebookButton(socialMediaOptions));
            elementBox.appendChild(this.buildTwitterButton(socialMediaOptions));
            elementBox.appendChild(this.buildMailButton(socialMediaOptions));
            elementBox.appendChild(elementShareButton);

            this.$image.append(elementBox);

            this.bindEvents();
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            $('.social-button.share-colors').on('mouseenter', function () {
                $(this).parent().addClass('expanded');
            });

            $('.social-share-box').on('mouseleave', function () {
                $(this).removeClass('expanded');
            });
        }
    }], [{
        key: "buildFacebookUrl",
        value: function buildFacebookUrl(options) {
            var parameters = {
                u: options.url || window.location.href
            };

            return 'https://www.facebook.com/sharer.php?' + _stringHelper2.default.param(parameters);
        }

        /**
         * @param {object} options
         * @returns {string}
         */

    }, {
        key: "buildTwitterUrl",
        value: function buildTwitterUrl(options) {
            var parameters = {
                url: options.url || window.location.href,
                text: options.text || window.document.title
            };

            if (typeof options.twitterUsername === 'string') {
                parameters.via = options.twitterUsername;
            }

            if (_typeof(options.hashtags) === 'object') {
                parameters.hashtags = options.hashtags.join(',');
            }

            return 'https://twitter.com/intent/tweet?' + _stringHelper2.default.param(parameters);
        }

        /**
         * @param {object} options
         * @returns {string}
         */

    }, {
        key: "buildMailUrl",
        value: function buildMailUrl(options) {
            var parameters = {
                subject: window.document.title,
                body: (options.text || window.document.title) + ' ' + (options.url || window.location.href)
            };

            return 'mailto:?' + _stringHelper2.default.param(parameters);
        }

        /**
         *
         * @param {string} classes
         * @param {string} href
         * @returns {HTMLElement}
         */

    }, {
        key: "buildButton",
        value: function buildButton(classes, href) {
            var link = _domHelper2.default.createElement('a', { 'class': classes });
            link.setAttribute('target', '_blank');
            link.setAttribute('href', href);

            return link;
        }
    }]);

    return SocialMediaShare;
}();

exports.default = SocialMediaShare;
module.exports = exports.default;

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
module.exports = exports.default;

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