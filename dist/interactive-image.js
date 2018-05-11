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

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(undefined);

//# sourceMappingURL=performance-now.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

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

var _factory = __webpack_require__(/*! ./item/factory */ "./src/js/item/factory.js");

var _factory2 = _interopRequireDefault(_factory);

var _hover = __webpack_require__(/*! ./event/hover */ "./src/js/event/hover.js");

var _hover2 = _interopRequireDefault(_hover);

var _imagesloaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _logHelper = __webpack_require__(/*! ./helper/logHelper */ "./src/js/helper/logHelper.js");

var _logHelper2 = _interopRequireDefault(_logHelper);

var _performanceNow = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js");

var _performanceNow2 = _interopRequireDefault(_performanceNow);

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
        this.logHelper = new _logHelper2.default(settings.debug);
        this.itemFactory = new _factory2.default();
    }

    /**
     * @param {object} settings
     */


    _createClass(App, [{
        key: "checkSettings",
        value: function checkSettings(settings) {
            var start = (0, _performanceNow2.default)();
            if ('undefined' === typeof settings.debug || 'boolean' !== typeof settings.debug) {
                this.settings.debug = true;
                throw 'Error: check "debug" plugin option';
            }

            var end = (0, _performanceNow2.default)();
            this.logHelper.log('Options successfully checked', end - start);
        }

        /**
         * @param {object} options
         * @returns {jQuery|HTMLElement}
         */

    }, {
        key: "createElement",
        value: function createElement(options) {
            var type = options.type;
            delete options.type;

            this.logHelper.log(options);

            var element = this.itemFactory.createItem(type, options);
            this.logHelper.log(element.constructor.name + ' created');

            this.$image.append(element.createHotspotElement());

            return $(element.renderHtml());
        }

        /**
         * @param items
         */

    }, {
        key: "buildElements",
        value: function buildElements(items) {
            var start = (0, _performanceNow2.default)();
            for (var i in items) {
                if (items.hasOwnProperty(i)) {
                    this.$image.append(this.createElement(items[i]));
                }
            }

            var end = (0, _performanceNow2.default)();
            this.logHelper.log('All elements built', end - start);
        }
    }, {
        key: "positionItems",
        value: function positionItems() {
            var start = (0, _performanceNow2.default)();

            /**
             * @param {number} hotspotLeft
             * @param {number} hotspotTop
             * @param {number} width
             */
            var calculateItemPosition = function calculateItemPosition(hotspotLeft, hotspotTop, width) {
                return [hotspotLeft + 15 - width / 2, hotspotTop + 40];
            };

            var $items = this.$image.find('.item');
            $.each($items, function () {
                var $hotspot = $('div[data-for="' + $(this).attr('data-id') + '"]'),
                    width = $(this).width(),
                    left = 0,
                    top = 0;

                var _calculateItemPositio = calculateItemPosition(parseInt($hotspot.css('left'), 10), parseInt($hotspot.css('top'), 10), width);

                var _calculateItemPositio2 = _slicedToArray(_calculateItemPositio, 2);

                left = _calculateItemPositio2[0];
                top = _calculateItemPositio2[1];


                $(this).css('left', left);
                $(this).css('top', top);
                $(this).find('.arrow-up').css('left', width / 2 - 7);
            });

            var end = (0, _performanceNow2.default)();
            this.logHelper.log('Items positioned', end - start);
        }
    }, {
        key: "execute",
        value: function execute() {
            var _this = this;

            try {
                this.checkSettings(this.settings);
                this.buildElements(this.items);

                if (this.$image.find('img').length) {
                    (0, _imagesloaded2.default)(this.$image, function () {
                        _this.logHelper.log('Images loaded');
                        _this.positionItems();
                    });
                } else {
                    this.positionItems();
                }

                new _hover2.default().bindAll(this.$image);
            } catch (exception) {
                this.logHelper.log(exception);
            }
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
    function Hover() {
        _classCallCheck(this, Hover);
    }

    _createClass(Hover, [{
        key: 'bindMainImageEvents',


        /**
         * @param $image
         */
        value: function bindMainImageEvents($image) {
            // Mouse enters main image to show all hotspots
            $image.on('mouseenter.interactiveImage', function () {
                var $hotspots = $(this).find('.hotspot');
                $.each($hotspots, function () {
                    $(this).fadeIn();
                });
            });

            // Mouse leaves main image to hide all hotspots and containers
            $image.on('mouseleave.interactiveImage', function () {
                var $elements = $(this).find('.hotspot, .item');
                $.each($elements, function () {
                    Hover.hideElement($(this));
                });
            });
        }

        /**
         * @param $image
         */

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

        /**
         * @param $image
         */

    }, {
        key: 'bindAll',
        value: function bindAll($image) {
            this.bindMainImageEvents($image);
            this.bindSpecificEvents($image);
        }
    }], [{
        key: 'hideElement',

        /**
         * @param $element
         */
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
         * @param {string} tag
         * @param {string=''} cssClass
         * @param {string} [text]
         * @returns {HTMLElement}
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
    /**
     * @param {boolean} debug
     */
    function LogHelper(debug) {
        _classCallCheck(this, LogHelper);

        this.debug = debug;
    }

    /**
     * @param {string}      message
     * @param {number=null} milliseconds
     */


    _createClass(LogHelper, [{
        key: 'log',
        value: function log(message) {
            var milliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!window.console || !window.console.log || false === this.debug) {
                return;
            }

            if (null !== milliseconds) {
                window.console.log(message + ' in ' + milliseconds.toFixed(3) + ' milliseconds');
            } else {
                window.console.log(message);
            }
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

var _app = __webpack_require__(/*! ./app */ "./src/js/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _uniqid = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseItem = function () {
    /**
     * @param {object} parameters
     */
    function BaseItem(parameters) {
        _classCallCheck(this, BaseItem);

        this.domHelper = new _domHelper2.default();
        this.identifier = (0, _uniqid2.default)();
        this.position = parameters.position;
    }

    /**
     * @returns {HTMLElement}
     */


    _createClass(BaseItem, [{
        key: "createHotspotElement",
        value: function createHotspotElement() {
            var element = this.domHelper.createElement('div', 'hotspot icon-radio-checked');
            element.setAttribute('data-for', this.identifier);
            element.style.left = this.position.left + 'px';
            element.style.top = this.position.top + 'px';

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createArrowElement",
        value: function createArrowElement() {
            var element = this.domHelper.createElement('div', 'arrow-up');

            return element;
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: "createItemElement",
        value: function createItemElement() {
            var element = this.domHelper.createElement('div', 'item');
            element.setAttribute('data-id', this.identifier);
            element.appendChild(this.createArrowElement());

            return element;
        }
    }, {
        key: "renderHtml",
        value: function renderHtml() {
            throw 'Error: render method not implemented';
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

var _pictureItem = __webpack_require__(/*! ./pictureItem */ "./src/js/item/pictureItem.js");

var _pictureItem2 = _interopRequireDefault(_pictureItem);

var _textItem = __webpack_require__(/*! ./textItem */ "./src/js/item/textItem.js");

var _textItem2 = _interopRequireDefault(_textItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
    function Factory() {
        _classCallCheck(this, Factory);
    }

    _createClass(Factory, [{
        key: "createItem",

        /**
         * @param {string} type
         * @param {object} parameters
         * @returns {TextItem|PictureItem}
         */
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

        var requiredParameters = ['position', 'path'];
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

    /**
     * @returns {HTMLElement}
     */


    _createClass(PictureItem, [{
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', 'picture');
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

        var requiredParameters = ['position', 'title', 'description'];
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

    /**
     * @returns {HTMLElement}
     */


    _createClass(TextItem, [{
        key: 'createTitle',
        value: function createTitle() {
            return this.domHelper.createElement('span', 'title', this.title);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'createDescription',
        value: function createDescription() {
            return this.domHelper.createElement('p', 'description', this.description);
        }

        /**
         * @returns {HTMLElement}
         */

    }, {
        key: 'createPicture',
        value: function createPicture() {
            var element = this.domHelper.createElement('img', 'picture');
            element.src = this.picturePath;
            element.alt = this.title;

            return element;
        }

        /**
         * @returns {HTMLAnchorElement}
         */

    }, {
        key: 'createLink',
        value: function createLink() {
            var label = void 0,
                element = document.createElement('a');
            element.href = this.link.url;

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


var _main = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");

var _main2 = _interopRequireDefault(_main);

var _icomoon = __webpack_require__(/*! ../css/icomoon.css */ "./src/css/icomoon.css");

var _icomoon2 = _interopRequireDefault(_icomoon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
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