/*!
 * interactive-image v2.7.1
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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */
(function (global, factory) {
  // universal module definition

  /* jshint strict: false */

  /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : this, function () {
  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // set events hash


    var events = this._events = this._events || {}; // set listeners array

    var listeners = events[eventName] = events[eventName] || []; // only add once

    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    } // add event


    this.on(eventName, listener); // set once flag
    // set onceEvents hash

    var onceEvents = this._onceEvents = this._onceEvents || {}; // set onceListeners object

    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {}; // set flag

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
    } // copy over to avoid interference if .off() in listener


    listeners = listeners.slice(0);
    args = args || []; // once stuff

    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];

      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener); // unset once flag

        delete onceListeners[listener];
      } // trigger listener


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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (window, factory) {
  'use strict'; // universal module definition

  /*global define: false, module: false, require: false */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, // --------------------------  factory -------------------------- //
function factory(window, EvEmitter) {
  'use strict';

  var $ = window.jQuery;
  var console = window.console; // -------------------------- helpers -------------------------- //
  // extend objects

  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }

    return a;
  }

  var arraySlice = Array.prototype.slice; // turn element or nodeList into an array

  function makeArray(obj) {
    if (Array.isArray(obj)) {
      // use object if already an array
      return obj;
    }

    var isArrayLike = _typeof(obj) == 'object' && typeof obj.length == 'number';

    if (isArrayLike) {
      // convert nodeList to array
      return arraySlice.call(obj);
    } // array of single index


    return [obj];
  } // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */


  function ImagesLoaded(elem, options, onAlways) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if (!(this instanceof ImagesLoaded)) {
      return new ImagesLoaded(elem, options, onAlways);
    } // use elem as selector string


    var queryElem = elem;

    if (typeof elem == 'string') {
      queryElem = document.querySelectorAll(elem);
    } // bail if bad element


    if (!queryElem) {
      console.error('Bad element for imagesLoaded ' + (queryElem || elem));
      return;
    }

    this.elements = makeArray(queryElem);
    this.options = extend({}, this.options); // shift arguments if no options set

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
    } // HACK check async to allow time to bind listeners


    setTimeout(this.check.bind(this));
  }

  ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function () {
    this.images = []; // filter & find items if we have an item selector

    this.elements.forEach(this.addElementImages, this);
  };
  /**
   * @param {Node} element
   */


  ImagesLoaded.prototype.addElementImages = function (elem) {
    // filter siblings
    if (elem.nodeName == 'IMG') {
      this.addImage(elem);
    } // get background image on element


    if (this.options.background === true) {
      this.addElementBackgroundImages(elem);
    } // find children
    // no non-element nodes, #143


    var nodeType = elem.nodeType;

    if (!nodeType || !elementNodeTypes[nodeType]) {
      return;
    }

    var childImgs = elem.querySelectorAll('img'); // concat childElems to filterFound array

    for (var i = 0; i < childImgs.length; i++) {
      var img = childImgs[i];
      this.addImage(img);
    } // get child background images


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
    } // get url inside url("...")


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
    this.hasAnyBroken = false; // complete if no images

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
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded; // progress event

    this.emitEvent('progress', [this, image, elem]);

    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, image);
    } // check if completed


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
  }; // --------------------------  -------------------------- //


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
    } // If none of the checks above matched, simulate loading on detached element.


    this.proxyImage = new Image();
    this.proxyImage.addEventListener('load', this);
    this.proxyImage.addEventListener('error', this); // bind to image as well for Firefox. #191

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
  }; // ----- events ----- //
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
  }; // -------------------------- Background -------------------------- //


  function Background(url, element) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  } // inherit LoadingImage prototype


  Background.prototype = Object.create(LoadingImage.prototype);

  Background.prototype.check = function () {
    this.img.addEventListener('load', this);
    this.img.addEventListener('error', this);
    this.img.src = this.url; // check if image is already complete

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
  }; // -------------------------- jQuery -------------------------- //


  ImagesLoaded.makeJQueryPlugin = function (jQuery) {
    jQuery = jQuery || window.jQuery;

    if (!jQuery) {
      return;
    } // set local variable


    $ = jQuery; // $().imagesLoaded()

    $.fn.imagesLoaded = function (options, callback) {
      var instance = new ImagesLoaded(this, options, callback);
      return instance.jqDeferred.promise($(this));
    };
  }; // try making plugin


  ImagesLoaded.makeJQueryPlugin(); // --------------------------  -------------------------- //

  return ImagesLoaded;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _event_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/behavior */ "./src/js/event/behavior.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/domHelper */ "./src/js/helper/domHelper.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _item_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/factory */ "./src/js/item/factory.js");
/* harmony import */ var _helper_itemHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/itemHelper */ "./src/js/helper/itemHelper.js");
/* harmony import */ var _service_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/logger */ "./src/js/service/logger.js");
/* harmony import */ var _event_resizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event/resizer */ "./src/js/event/resizer.js");
/* harmony import */ var _service_shareBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/shareBox */ "./src/js/service/shareBox.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var App = /*#__PURE__*/function () {
  _createClass(App, null, [{
    key: "defaultSettings",

    /**
     * @returns {{allowHtml: boolean, debug: boolean, shareBox: boolean, triggerEvent: string}}
     */
    value: function defaultSettings() {
      return {
        allowHtml: false,
        debug: false,
        shareBox: true,
        triggerEvent: 'hover'
      };
    }
    /**
     * @param {jQuery} $image
     * @param {array}  items
     * @param {object} options
     */

  }]);

  function App($image, items, options) {
    _classCallCheck(this, App);

    this.settings = Object.assign(App.defaultSettings(), options);
    this.$image = $image;
    this.items = items;
    this.itemFactory = new _item_factory__WEBPACK_IMPORTED_MODULE_3__["default"]();

    if ('boolean' !== typeof this.settings.debug) {
      throw Error('Check the "debug" option. Allowed type: boolean.');
    }

    this.logger = new _service_logger__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.logger.debug = this.settings.debug;
  }

  _createClass(App, [{
    key: "checkSettings",
    value: function checkSettings() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.logger.group('Settings');

        _this.logger.log(_this.settings);

        var t0 = performance.now();

        if ('boolean' !== typeof _this.settings.allowHtml) {
          throw Error('Check the "allowHtml" option. Allowed type: boolean.');
        }

        if (_this.settings.triggerEvent !== 'click' && _this.settings.triggerEvent !== 'hover') {
          throw Error('Check the "triggerEvent" option. Allowed values: "hover", "click".');
        }

        if ('boolean' !== typeof _this.settings.shareBox) {
          throw Error('Check the "shareBox" option. Allowed type: boolean.');
        }

        if ('undefined' !== typeof _this.settings.socialMedia && 'object' !== _typeof(_this.settings.socialMedia)) {
          throw Error('Check the "socialMedia" option.');
        }

        var t1 = performance.now();

        _this.logger.log('Settings checked in ' + (t1 - t0) + 'ms');

        _this.logger.groupEnd();

        resolve();
      });
    }
  }, {
    key: "consolidateDOM",
    value: function consolidateDOM() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.logger.group('DOM consolidation');

        var t0 = performance.now(); // Add interactive-image class on the main scene

        if (!_this2.$image.hasClass('interactive-image')) {
          _this2.$image.addClass('interactive-image');
        } // Add message for unsupported screen sizes


        var unsupportedScreenElement = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
          "class": 'unsupported-screen'
        });

        _this2.$image.append(unsupportedScreenElement);

        var t1 = performance.now();

        _this2.logger.log('DOM consolidated in ' + (t1 - t0) + 'ms');

        _this2.logger.groupEnd();

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
      this.logger.log(options);
      var parameters = Object.assign({}, options);
      delete parameters.type;
      var element = this.itemFactory.create(options.type, parameters);
      element.applicationSettings = this.settings;
      this.$image.append(element.createHotspotElement());
      return $(element.renderHtml());
    }
  }, {
    key: "createElements",
    value: function createElements() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.logger.group('Items creation');

        var t0 = performance.now();

        _this3.items.forEach(function (item) {
          _this3.$image.append(_this3.createElement(item));
        });

        var t1 = performance.now();

        _this3.logger.log('All items created in ' + (t1 - t0) + 'ms');

        _this3.logger.groupEnd();

        resolve();
      });
    }
  }, {
    key: "positionItems",
    value: function positionItems() {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.logger.group('Items positioning');

        var t0 = performance.now();

        var $items = _this4.$image.find('.item');

        $.each($items, function () {
          var $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]');

          var _ItemHelper$calculate = _helper_itemHelper__WEBPACK_IMPORTED_MODULE_4__["default"].calculateInitialContainerPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), $(this).width()),
              _ItemHelper$calculate2 = _slicedToArray(_ItemHelper$calculate, 2),
              left = _ItemHelper$calculate2[0],
              top = _ItemHelper$calculate2[1];

          $(this).css('left', left);
          $(this).css('top', top);
        });
        var t1 = performance.now();

        _this4.logger.log('All items positioned in ' + (t1 - t0) + 'ms');

        _this4.logger.groupEnd();

        resolve();
      });
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this5 = this;

      return new Promise(function (resolve) {
        _this5.logger.group('Events binding');

        var t0 = performance.now();
        var behavior = new _event_behavior__WEBPACK_IMPORTED_MODULE_0__["default"](_this5.$image, _this5.settings.triggerEvent);
        behavior.bindAll();
        var resizer = new _event_resizer__WEBPACK_IMPORTED_MODULE_6__["default"](behavior);
        resizer.bind();
        var t1 = performance.now();

        _this5.logger.log('All events bound in ' + (t1 - t0) + 'ms');

        _this5.logger.groupEnd();

        resolve();
      });
    }
  }, {
    key: "processShareBox",
    value: function processShareBox() {
      var _this6 = this;

      return new Promise(function (resolve) {
        _this6.logger.group('ShareBox');

        var t0 = performance.now();

        if (true === _this6.settings.shareBox) {
          var _this6$settings$socia;

          var shareBox = new _service_shareBox__WEBPACK_IMPORTED_MODULE_7__["default"](_this6.$image[0]);
          shareBox.build((_this6$settings$socia = _this6.settings.socialMedia) !== null && _this6$settings$socia !== void 0 ? _this6$settings$socia : {});
          shareBox.bindEvents();
        }

        var t1 = performance.now();

        _this6.logger.log('ShareBox built in ' + (t1 - t0) + 'ms');

        _this6.logger.groupEnd();

        resolve();
      });
    }
  }, {
    key: "loadImages",
    value: function loadImages() {
      var _this7 = this;

      return new Promise(function (resolve) {
        _this7.logger.group('Images');

        if (_this7.$image.find('img').length) {
          var t0 = performance.now();
          imagesloaded__WEBPACK_IMPORTED_MODULE_2___default()(_this7.$image, function () {
            var t1 = performance.now();

            _this7.logger.log('All images detected and loaded in ' + (t1 - t0) + 'ms');

            _this7.logger.groupEnd();

            resolve();
          });
        } else {
          _this7.logger.log('No image detected');

          _this7.logger.groupEnd();

          resolve();
        }
      });
    }
  }, {
    key: "execute",
    value: function execute() {
      var _this8 = this;

      this.logger.group('Interactive Image');
      var t0 = performance.now();
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
        return _this8.processShareBox();
      })["catch"](function (exception) {
        _this8.logger.log(exception.message);
      })["finally"](function () {
        var t1 = performance.now();

        _this8.logger.log('Execution completed in ' + (t1 - t0) + 'ms');

        _this8.logger.groupEnd();
      });
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/js/event/behavior.js":
/*!**********************************!*\
  !*** ./src/js/event/behavior.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behavior; });
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Behavior = /*#__PURE__*/function () {
  _createClass(Behavior, null, [{
    key: "mouseEvents",

    /**
     * @returns {{hover: string, click: string}}
     */
    value: function mouseEvents() {
      return {
        'hover': 'mouseenter',
        'click': 'click'
      };
    }
    /**
     * @param {jQuery} $image
     * @param {string} triggerEventName
     */

  }]);

  function Behavior($image, triggerEventName) {
    _classCallCheck(this, Behavior);

    this.$image = $image;
    this.triggerEventName = triggerEventName;
    this.enabled = false;
  }

  _createClass(Behavior, [{
    key: "bindAll",
    value: function bindAll() {
      if (this.enabled === false) {
        this.enabled = true;
      }

      this.bindSceneEvents();
      this.bindItemsEvents();
      this.bindHotspotsEvents();
    }
  }, {
    key: "unbindAll",
    value: function unbindAll() {
      if (this.enabled === true) {
        this.enabled = false;
      }

      this.$image.off();
    }
    /**
     * @param {jQuery} $hotspot
     */

  }, {
    key: "bindHotspotMouseLeave",
    value: function bindHotspotMouseLeave($hotspot) {
      $hotspot.on('mouseleave', function (event) {
        var $relatedTarget = $(event.relatedTarget); // If parent has class "item", it enters container so there is no need to hide it

        if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
          return;
        }

        var container = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveContainerFromHotspot($hotspot[0]);

        if (container.classList.contains('behavior-sticky')) {
          return;
        }

        _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement(container);
      });
    }
    /**
     * @param {HTMLElement} hotspot
     */

  }, {
    key: "unbindHotspotMouseLeave",
    value: function unbindHotspotMouseLeave(hotspot) {
      hotspot.removeEventListener('mouseleave', function () {});
    }
  }, {
    key: "bindSceneEvents",
    value: function bindSceneEvents() {
      // Mouse enters scene -> show all hotspots and share box (if exists)
      this.$image.on('mouseenter', function () {
        var $hotspots = $(this).find('.hotspot');
        $.each($hotspots, function () {
          $(this).fadeIn();
        });
        var $shareBox = $(this).find('.social-share-box');

        if (!$shareBox.length) {
          return;
        }

        setTimeout(function () {
          $shareBox.css('display', 'flex');
        }, 100);
      }); // Mouse leaves scene -> hide all hotspots, containers and share box (if exists)

      this.$image.on('mouseleave', function () {
        var $elements = $(this).find('.hotspot, .item');
        $.each($elements, function () {
          _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement($(this)[0]);
        });
        var $shareBox = $(this).find('.social-share-box');

        if (!$shareBox.length) {
          return;
        }

        _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement($shareBox[0]);
      });
    }
  }, {
    key: "bindStickyItemsEvents",
    value: function bindStickyItemsEvents() {
      this.$image.find('.item').each(function () {
        var $container = $(this);

        if (!$container[0].classList.contains('behavior-sticky')) {
          return;
        } // Bind event to hide the related sticky container when close button is clicked


        $container.on('click', '.close-button', function () {
          _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement($container[0]);
        });
      });
    }
    /**
     * Initialize events on each item
     */

  }, {
    key: "bindItemsEvents",
    value: function bindItemsEvents() {
      var that = this;
      that.$image.find('.hotspot').each(function () {
        var $hotspot = $(this);
        var $container = $(_helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveContainerFromHotspot($hotspot[0]));

        if ($container[0].classList.contains('behavior-sticky')) {
          return;
        }

        that.bindHotspotMouseLeave($hotspot);
        $container.on('mouseenter', function () {
          that.unbindHotspotMouseLeave($hotspot[0]);
        }); // Bind event to hide the related container when mouse leaves it

        $container.on('mouseleave', function (event) {
          var $relatedTarget = $(event.relatedTarget); // If related target has class "hotpost", it enters hotspot so there is no need to hide the container

          if ($relatedTarget.hasClass('hotspot')) {
            return;
          }

          _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement($(this)[0]);
          that.bindHotspotMouseLeave($hotspot);
        });
      });
      this.bindStickyItemsEvents();
    }
    /**
     * Initialize events on each hotspot
     */

  }, {
    key: "bindHotspotsEvents",
    value: function bindHotspotsEvents() {
      var that = this;
      that.$image.on(Behavior.mouseEvents()[this.triggerEventName], '.hotspot', function (event) {
        var $hotspot = $(this);
        var $relatedTarget = $(event.relatedTarget);

        if ($relatedTarget.parent() && $relatedTarget.parent().hasClass('item')) {
          // If parent has class "item", it only re-enters from item
          return that.bindHotspotMouseLeave($hotspot);
        } // Hide all other containers that are not sticky


        var $containers = that.$image.find('.item').not('.behavior-sticky');
        $.each($containers, function () {
          _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement($(this)[0]);
        }); // Finally, show the related item

        var container = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveContainerFromHotspot($hotspot[0]);
        _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].showElement(container);
      });
    }
  }]);

  return Behavior;
}();



/***/ }),

/***/ "./src/js/event/resizer.js":
/*!*********************************!*\
  !*** ./src/js/event/resizer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resizer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Resizer = /*#__PURE__*/function () {
  _createClass(Resizer, null, [{
    key: "breakpoints",

    /**
     * @returns {{"smartphones-portrait": number}}
     */
    value: function breakpoints() {
      return {
        'smartphones-portrait': 320
      };
    }
    /**
     * @param {Behavior} behavior
     */

  }]);

  function Resizer(behavior) {
    _classCallCheck(this, Resizer);

    this.behavior = behavior;
  }

  _createClass(Resizer, [{
    key: "enable",
    value: function enable() {
      if (this.behavior.enabled === false) {
        this.behavior.bindAll();
      }
    }
  }, {
    key: "disable",
    value: function disable() {
      if (this.behavior.enabled === true) {
        this.behavior.unbindAll();
      }
    }
  }, {
    key: "bind",
    value: function bind() {
      var resizeTimer;
      var that = this;

      var enableEffects = function enableEffects() {
        if (window.innerWidth <= Resizer.breakpoints()['smartphones-portrait']) {
          that.disable();
          return;
        }

        that.enable();
      };

      $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(enableEffects, 300);
      });
    }
  }]);

  return Resizer;
}();



/***/ }),

/***/ "./src/js/helper/domHelper.js":
/*!************************************!*\
  !*** ./src/js/helper/domHelper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomHelper = /*#__PURE__*/function () {
  function DomHelper() {
    _classCallCheck(this, DomHelper);
  }

  _createClass(DomHelper, null, [{
    key: "createElement",

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
    key: "addAttributes",
    value: function addAttributes(node, attributes) {
      if ('undefined' === typeof attributes) {
        return;
      }

      for (var attribute in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attribute)) {
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
    key: "addText",
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
    key: "hideElement",
    value: function hideElement(element) {
      if (element.style.display === 'block' || element.style.display === 'flex') {
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
    key: "showElement",
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
    key: "retrieveContainerFromHotspot",
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
    key: "elementContainsMediaItem",
    value: function elementContainsMediaItem(element) {
      return element.querySelectorAll('.audio-item, .video-item, .provider-item').length !== 0;
    }
    /**
     * Stop a Media Element from playing and reinitialize it
     *
     * @param {HTMLElement} element
     */

  }, {
    key: "stopMedia",
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



/***/ }),

/***/ "./src/js/helper/fileHelper.js":
/*!*************************************!*\
  !*** ./src/js/helper/fileHelper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FileHelper = /*#__PURE__*/function () {
  function FileHelper() {
    _classCallCheck(this, FileHelper);
  }

  _createClass(FileHelper, null, [{
    key: "guessExtension",

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
    key: "checkFileFormat",
    value: function checkFileFormat(extension, allowedFormats) {
      var formatsMap = new Map(Object.entries(allowedFormats));

      if (false === formatsMap.has(extension)) {
        throw Error('Unsupported file extension "' + extension + '"');
      }
    }
  }]);

  return FileHelper;
}();



/***/ }),

/***/ "./src/js/helper/itemHelper.js":
/*!*************************************!*\
  !*** ./src/js/helper/itemHelper.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ItemHelper = /*#__PURE__*/function () {
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



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/js/app.js");



(function ($, window, document) {
  $.fn.interactiveImage = function (items, options) {
    var _this = this;

    return this.each(function () {
      new _app__WEBPACK_IMPORTED_MODULE_1__["default"]($(_this), items, options).execute();
    });
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/item/abstractItem.js":
/*!*************************************!*\
  !*** ./src/js/item/abstractItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractItem; });
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
/* harmony import */ var _service_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/uniqueId */ "./src/js/service/uniqueId.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AbstractItem = /*#__PURE__*/function () {
  _createClass(AbstractItem, null, [{
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

  function AbstractItem(parameters) {
    _classCallCheck(this, AbstractItem);

    if (this.constructor === AbstractItem) {
      throw new TypeError('Abstract Class "AbstractItem" cannot be instantiated directly');
    }

    this.identifier = _service_uniqueId__WEBPACK_IMPORTED_MODULE_1__["default"].generate('item');
    this.position = typeof parameters.position !== 'undefined' ? parameters.position : {
      left: 0,
      top: 0
    };
    this.sticky = typeof parameters.sticky !== 'undefined' ? parameters.sticky : false;
    this.customClassName = typeof parameters.customClassName !== 'undefined' ? parameters.customClassName : null;
    this.globalSettings = {
      allowHtml: false
    };
  }
  /**
   * @param {object} settings
   */


  _createClass(AbstractItem, [{
    key: "checkRequiredParameters",
    value: function checkRequiredParameters(parameters, requiredParameters) {
      var parametersMap = new Map(Object.entries(parameters));

      var isParameterDefined = function isParameterDefined(name) {
        return parametersMap.has(name);
      };

      requiredParameters.forEach(function (name) {
        if (false === isParameterDefined(name)) {
          throw Error('Missing required parameter named "' + name + '"');
        }
      });
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createHotspotElement",
    value: function createHotspotElement() {
      var element = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
        'class': 'hotspot icon-radio-checked'
      });
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
        itemClass += ' ' + AbstractItem.stickyClassName();
      }

      if (typeof this.customClassName === 'string') {
        itemClass += ' ' + this.customClassName;
      }

      var element = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
        'class': itemClass
      });
      element.setAttribute('data-id', this.identifier);

      if (this.sticky === true) {
        var closeButton = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
          'class': 'close-button icon-cancel-circle'
        });
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

  return AbstractItem;
}();



/***/ }),

/***/ "./src/js/item/abstractMediaItem.js":
/*!******************************************!*\
  !*** ./src/js/item/abstractMediaItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractMediaItem; });
/* harmony import */ var _abstractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractItem */ "./src/js/item/abstractItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
/* harmony import */ var _helper_fileHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helper/fileHelper */ "./src/js/helper/fileHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * @extends AbstractItem
 */

var AbstractMediaItem = /*#__PURE__*/function (_AbstractItem) {
  _inherits(AbstractMediaItem, _AbstractItem);

  var _super = _createSuper(AbstractMediaItem);

  _createClass(AbstractMediaItem, null, [{
    key: "unsupportedTagMessage",
    value: function unsupportedTagMessage() {
      throw Error('UnsupportedTagMessage method not implemented');
    }
    /**
     * @param {object} parameters
     */

  }]);

  function AbstractMediaItem(parameters) {
    var _this;

    _classCallCheck(this, AbstractMediaItem);

    _this = _super.call(this, parameters);

    if (_this.constructor === AbstractMediaItem) {
      throw new TypeError('Abstract Class "AbstractMediaItem" cannot be instantiated directly');
    }

    _this.checkRequiredParameters(parameters, ['path']);

    _this.path = parameters.path;
    _this.caption = parameters.caption;
    _this.fileExtension = _helper_fileHelper__WEBPACK_IMPORTED_MODULE_2__["default"].guessExtension(_this.path);
    _helper_fileHelper__WEBPACK_IMPORTED_MODULE_2__["default"].checkFileFormat(_this.fileExtension, _this.supportedFileFormats());
    return _this;
  }

  _createClass(AbstractMediaItem, [{
    key: "supportedFileFormats",
    value: function supportedFileFormats() {
      throw Error('SupportedFileFormats method not implemented');
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createSource",
    value: function createSource() {
      var source = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('source');
      source.setAttribute('src', this.path);
      source.setAttribute('type', this.supportedFileFormats()[this.fileExtension]);
      return source;
    }
    /**
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createItem",
    value: function createItem(className) {
      var item = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
        'class': className
      });
      item.appendChild(this.createMedia());

      if ('undefined' !== typeof this.caption) {
        var caption = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('span', {
          'class': 'caption'
        }, this.caption, this.globalSettings.allowHtml);
        item.appendChild(caption);
      }

      var element = this.createItemElement();
      element.appendChild(item);
      return element;
    }
  }, {
    key: "createMedia",
    value: function createMedia() {
      throw Error('CreateMedia method not implemented');
    }
  }]);

  return AbstractMediaItem;
}(_abstractItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/item/audioItem.js":
/*!**********************************!*\
  !*** ./src/js/item/audioItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioItem; });
/* harmony import */ var _abstractMediaItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractMediaItem */ "./src/js/item/abstractMediaItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @extends AbstractMediaItem
 */

var AudioItem = /*#__PURE__*/function (_AbstractMediaItem) {
  _inherits(AudioItem, _AbstractMediaItem);

  var _super = _createSuper(AudioItem);

  _createClass(AudioItem, null, [{
    key: "unsupportedTagMessage",

    /**
     * @returns {string}
     */
    value: function unsupportedTagMessage() {
      return 'Your browser does not support the audio tag.';
    }
    /**
     * @param {object} parameters
     */

  }]);

  function AudioItem(parameters) {
    _classCallCheck(this, AudioItem);

    return _super.call(this, parameters);
  }
  /**
   * Allowed file extensions
   *
   * @returns {{mp3: string, wav: string, ogg: string}}
   */


  _createClass(AudioItem, [{
    key: "supportedFileFormats",
    value: function supportedFileFormats() {
      return {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav'
      };
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createMedia",
    value: function createMedia() {
      var audio = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('audio', {
        'class': 'genuine-theme'
      }, AudioItem.unsupportedTagMessage());
      audio.setAttribute('controls', '');
      audio.setAttribute('preload', 'metadata');
      audio.appendChild(this.createSource());
      return audio;
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "renderHtml",
    value: function renderHtml() {
      return this.createItem('audio-item');
    }
  }]);

  return AudioItem;
}(_abstractMediaItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/item/factory.js":
/*!********************************!*\
  !*** ./src/js/item/factory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Factory; });
/* harmony import */ var _audioItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audioItem */ "./src/js/item/audioItem.js");
/* harmony import */ var _pictureItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictureItem */ "./src/js/item/pictureItem.js");
/* harmony import */ var _providerItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providerItem */ "./src/js/item/providerItem.js");
/* harmony import */ var _textItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textItem */ "./src/js/item/textItem.js");
/* harmony import */ var _videoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoItem */ "./src/js/item/videoItem.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var classes = {
  AudioItem: _audioItem__WEBPACK_IMPORTED_MODULE_0__["default"],
  PictureItem: _pictureItem__WEBPACK_IMPORTED_MODULE_1__["default"],
  ProviderItem: _providerItem__WEBPACK_IMPORTED_MODULE_2__["default"],
  TextItem: _textItem__WEBPACK_IMPORTED_MODULE_3__["default"],
  VideoItem: _videoItem__WEBPACK_IMPORTED_MODULE_4__["default"]
};

var Factory = /*#__PURE__*/function () {
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
        var message;

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



/***/ }),

/***/ "./src/js/item/pictureItem.js":
/*!************************************!*\
  !*** ./src/js/item/pictureItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PictureItem; });
/* harmony import */ var _abstractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractItem */ "./src/js/item/abstractItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @extends AbstractItem
 */

var PictureItem = /*#__PURE__*/function (_AbstractItem) {
  _inherits(PictureItem, _AbstractItem);

  var _super = _createSuper(PictureItem);

  /**
   * @param {object} parameters
   */
  function PictureItem(parameters) {
    var _this;

    _classCallCheck(this, PictureItem);

    _this = _super.call(this, parameters);

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
      var element = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('img', {
        'class': 'picture'
      });
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
      var pictureItem = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
        'class': 'picture-item'
      });

      if ('undefined' !== typeof this.caption) {
        pictureItem.setAttribute('data-caption', this.caption);
        pictureItem.classList.add("with-caption");
      }

      if ('undefined' !== typeof this.linkUrl) {
        var link = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('a');
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
}(_abstractItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/item/providerItem.js":
/*!*************************************!*\
  !*** ./src/js/item/providerItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProviderItem; });
/* harmony import */ var _abstractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractItem */ "./src/js/item/abstractItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @extends AbstractItem
 */

var ProviderItem = /*#__PURE__*/function (_AbstractItem) {
  _inherits(ProviderItem, _AbstractItem);

  var _super = _createSuper(ProviderItem);

  _createClass(ProviderItem, null, [{
    key: "supportedProviders",

    /**
     * @returns {string[]}
     */
    value: function supportedProviders() {
      return Object.keys(ProviderItem.providersUrls());
    }
    /**
     * @returns {{dailymotion: string, vimeo: string, youtube: string}}
     */

  }, {
    key: "providersUrls",
    value: function providersUrls() {
      return {
        'dailymotion': 'https://www.dailymotion.com/embed/video/%id%',
        'soundcloud': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/%id%&color=%2326203e&auto_play=false&hide_related=false&sharing=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        'vimeo': 'https://player.vimeo.com/video/%id%',
        'youtube': 'https://www.youtube.com/embed/%id%?origin=' + ProviderItem.guessOrigin()
      };
    }
    /**
     * @param {object} parameters
     */

  }]);

  function ProviderItem(parameters) {
    var _this;

    _classCallCheck(this, ProviderItem);

    _this = _super.call(this, parameters);

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
      var _this$parameters$vide;

      var id = (_this$parameters$vide = this.parameters.videoId) !== null && _this$parameters$vide !== void 0 ? _this$parameters$vide : this.parameters.soundId;
      return _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('iframe', {
        'loading': 'lazy',
        'src': ProviderItem.providersUrls()[this.providerName].replace('%id%', id)
      });
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "renderHtml",
    value: function renderHtml() {
      var element = this.createItemElement();
      var providerItem = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
        'class': 'provider-item'
      });
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
}(_abstractItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/item/textItem.js":
/*!*********************************!*\
  !*** ./src/js/item/textItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextItem; });
/* harmony import */ var _abstractItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractItem */ "./src/js/item/abstractItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @extends AbstractItem
 */

var TextItem = /*#__PURE__*/function (_AbstractItem) {
  _inherits(TextItem, _AbstractItem);

  var _super = _createSuper(TextItem);

  /**
   * @param {object} parameters
   */
  function TextItem(parameters) {
    var _this;

    _classCallCheck(this, TextItem);

    _this = _super.call(this, parameters);

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
      return _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('span', {
        'class': 'title'
      }, this.title);
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createDescription",
    value: function createDescription() {
      return _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('p', {
        'class': 'description'
      }, this.description, this.globalSettings.allowHtml);
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createPicture",
    value: function createPicture() {
      var element = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('img', {
        'class': 'picture'
      });
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
      var element = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('a');
      element.href = this.link.url;
      var label;

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
      var textElement = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('div', {
        'class': 'text-item'
      });
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
}(_abstractItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/item/videoItem.js":
/*!**********************************!*\
  !*** ./src/js/item/videoItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoItem; });
/* harmony import */ var _abstractMediaItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractMediaItem */ "./src/js/item/abstractMediaItem.js");
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * @extends AbstractMediaItem
 */

var VideoItem = /*#__PURE__*/function (_AbstractMediaItem) {
  _inherits(VideoItem, _AbstractMediaItem);

  var _super = _createSuper(VideoItem);

  _createClass(VideoItem, null, [{
    key: "unsupportedTagMessage",

    /**
     * @returns {string}
     */
    value: function unsupportedTagMessage() {
      return 'Your browser does not support the video tag.';
    }
    /**
     * @param {object} parameters
     */

  }]);

  function VideoItem(parameters) {
    var _this;

    _classCallCheck(this, VideoItem);

    _this = _super.call(this, parameters);
    _this.poster = parameters.poster;
    return _this;
  }
  /**
   * Allowed file extensions
   *
   * @returns {{mp4: string, webm: string}}
   */


  _createClass(VideoItem, [{
    key: "supportedFileFormats",
    value: function supportedFileFormats() {
      return {
        'mp4': 'video/mp4',
        'webm': 'video/webm'
      };
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "createMedia",
    value: function createMedia() {
      var video = _helper_domHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createElement('video', {
        'class': 'genuine-theme'
      }, VideoItem.unsupportedTagMessage());
      video.setAttribute('controls', '');
      video.setAttribute('controlsList', 'nodownload');
      video.setAttribute('preload', 'metadata');

      if ('undefined' !== typeof this.poster) {
        video.setAttribute('poster', this.poster);
      }

      video.appendChild(this.createSource());
      return video;
    }
    /**
     * @returns {HTMLElement}
     */

  }, {
    key: "renderHtml",
    value: function renderHtml() {
      return this.createItem('video-item');
    }
  }]);

  return VideoItem;
}(_abstractMediaItem__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/service/logger.js":
/*!**********************************!*\
  !*** ./src/js/service/logger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.enable = false;
  }
  /**
   * @param {boolean} value
   */


  _createClass(Logger, [{
    key: "log",

    /**
     * @param {string,object} message - message or object to display in console
     */
    value: function log(message) {
      if (!window.console || !window.console.log || false === this.enable) {
        return;
      }

      if (_typeof(message) === 'object') {
        return window.console.dir(message);
      }

      window.console.log(message);
    }
    /**
     * @param {string} label - group name
     */

  }, {
    key: "group",
    value: function group(label) {
      if (!window.console || !window.console.log || false === this.enable) {
        return;
      }

      window.console.group(label);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      if (!window.console || !window.console.log || false === this.enable) {
        return;
      }

      window.console.groupEnd();
    }
  }, {
    key: "debug",
    set: function set(value) {
      this.enable = value;
    }
  }]);

  return Logger;
}();



/***/ }),

/***/ "./src/js/service/shareBox.js":
/*!************************************!*\
  !*** ./src/js/service/shareBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareBox; });
/* harmony import */ var _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/domHelper */ "./src/js/helper/domHelper.js");
/* harmony import */ var _service_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/utils */ "./src/js/service/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ShareBox = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} scene
   */
  function ShareBox(scene) {
    _classCallCheck(this, ShareBox);

    this.scene = scene;
  }
  /**
   * @param {object} options
   * @returns {string}
   */


  _createClass(ShareBox, [{
    key: "buildFacebookButton",

    /**
     * @param {object} options
     * @returns {HTMLElement}
     */
    value: function buildFacebookButton(options) {
      return ShareBox.buildButton('social-button facebook-colors icon-facebook', ShareBox.buildFacebookUrl(options));
    }
    /**
     * @param {object} options
     * @returns {HTMLElement}
     */

  }, {
    key: "buildTwitterButton",
    value: function buildTwitterButton(options) {
      return ShareBox.buildButton('social-button twitter-colors icon-twitter', ShareBox.buildTwitterUrl(options));
    }
    /**
     * @param {object} options
     * @returns {HTMLElement}
     */

  }, {
    key: "buildMailButton",
    value: function buildMailButton(options) {
      return ShareBox.buildButton('social-button mail-colors icon-envelop', ShareBox.buildMailUrl(options));
    }
    /**
     * @param {object} socialMediaOptions
     */

  }, {
    key: "build",
    value: function build(socialMediaOptions) {
      var box = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
        'class': 'social-share-box'
      });
      var shareButton = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('div', {
        'class': 'social-button share-colors icon-share2'
      });
      box.appendChild(this.buildFacebookButton(socialMediaOptions));
      box.appendChild(this.buildTwitterButton(socialMediaOptions));
      box.appendChild(this.buildMailButton(socialMediaOptions));
      box.appendChild(shareButton);
      this.scene.appendChild(box);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.querySelector('.social-button.share-colors').addEventListener('mouseenter', function (event) {
        event.target.parentNode.classList.add('expanded');
      });
      document.querySelector('.social-share-box').addEventListener('mouseleave', function (event) {
        event.target.classList.remove('expanded');
      });
    }
  }], [{
    key: "buildFacebookUrl",
    value: function buildFacebookUrl(options) {
      var _options$url;

      var parameters = {
        u: (_options$url = options.url) !== null && _options$url !== void 0 ? _options$url : window.location.href
      };
      return 'https://www.facebook.com/sharer.php?' + _service_utils__WEBPACK_IMPORTED_MODULE_1__["default"].param(parameters);
    }
    /**
     * @param {object} options
     * @returns {string}
     */

  }, {
    key: "buildTwitterUrl",
    value: function buildTwitterUrl(options) {
      var _options$url2, _options$text;

      var parameters = {
        url: (_options$url2 = options.url) !== null && _options$url2 !== void 0 ? _options$url2 : window.location.href,
        text: (_options$text = options.text) !== null && _options$text !== void 0 ? _options$text : window.document.title
      };

      if (typeof options.twitterUsername === 'string') {
        parameters.via = options.twitterUsername;
      }

      if (_typeof(options.hashtags) === 'object') {
        parameters.hashtags = options.hashtags.join(',');
      }

      return 'https://twitter.com/intent/tweet?' + _service_utils__WEBPACK_IMPORTED_MODULE_1__["default"].param(parameters);
    }
    /**
     * @param {object} options
     * @returns {string}
     */

  }, {
    key: "buildMailUrl",
    value: function buildMailUrl(options) {
      var _options$text2, _options$url3;

      var parameters = {
        subject: window.document.title,
        body: ((_options$text2 = options.text) !== null && _options$text2 !== void 0 ? _options$text2 : window.document.title) + ' ' + ((_options$url3 = options.url) !== null && _options$url3 !== void 0 ? _options$url3 : window.location.href)
      };
      return 'mailto:?' + _service_utils__WEBPACK_IMPORTED_MODULE_1__["default"].param(parameters);
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
      var link = _helper_domHelper__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('a', {
        'class': classes
      });
      link.setAttribute('target', '_blank');
      link.setAttribute('href', href);
      return link;
    }
  }]);

  return ShareBox;
}();



/***/ }),

/***/ "./src/js/service/uniqueId.js":
/*!************************************!*\
  !*** ./src/js/service/uniqueId.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UniqueId; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UniqueId = /*#__PURE__*/function () {
  function UniqueId() {
    _classCallCheck(this, UniqueId);
  }

  _createClass(UniqueId, null, [{
    key: "now",

    /**
     * @returns {number}
     */
    value: function now() {
      var _this$last;

      var time = Date.now();
      this.last = (_this$last = this.last) !== null && _this$last !== void 0 ? _this$last : time;
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
    key: "generate",
    value: function generate(prefix) {
      return (typeof prefix !== 'undefined' ? prefix + '_' : '') + UniqueId.now().toString(36);
    }
  }]);

  return UniqueId;
}();



/***/ }),

/***/ "./src/js/service/utils.js":
/*!*********************************!*\
  !*** ./src/js/service/utils.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "param",
    value: function param(parameters) {
      var urlParams = new URLSearchParams(Object.entries(parameters));
      return urlParams.toString();
    }
  }]);

  return Utils;
}();



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