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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root{\r\n    box-sizing: content-box;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --backGround:darkslategrey;\r\n    --primary:ghostwhite;\r\n    --btnPrimary:orange;\r\n    --btnHover:orangered;\r\n    --contentShadown:0 0.1rem 0.3rem black;\r\n    --contHovShadown:0 0.1rem 0.1rem black;\r\n}\r\nhtml, body{\r\n    background-color: var(--backGround);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nh1{\r\n    border-bottom: 0.1rem solid var(--backGround);\r\n\r\n}\r\nh2{\r\n    font-size: 120%;\r\n}\r\nh1,h2{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    font-weight: 600;\r\n}\r\n/* MENU */\r\nmenu{\r\n    margin: 0 0 1rem;\r\n    padding: 1rem;\r\n    background-color: var(--primary);\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    box-shadow: var(--contentShadown);\r\n}\r\nnav{\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 0.3rem;\r\n    border: 0.01rem solid lightgray;\r\n    background-color: black;\r\n    color: var(--primary);\r\n}\r\nnav:hover{\r\n    background-color: var(--btnHover);\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n.container{\r\n    width: 50%;\r\n    min-width: 25rem;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n    line-height: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    background-color: var(--primary);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n\r\n/* FORM */\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\n#btnSubmit{\r\n    color: var(--primary);\r\n    text-transform: uppercase;\r\n    background-color: var(--backGround);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n#btnSubmit:hover{\r\n    background-color: darkcyan;\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n#spnPassword{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n    color: darkcyan;\r\n}\r\n#spnValidate{\r\n    font-weight: bold;\r\n}\r\n.errorText{\r\n    color: red;\r\n    font-weight: 400;\r\n    font-size:small;\r\n}", "",{"version":3,"sources":["webpack://src/assets/css/style.css"],"names":[],"mappings":"AACA;IACI,uBAAuB;IACvB,qCAAqC;IACrC,0BAA0B;IAC1B,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,sCAAsC;IACtC,sCAAsC;AAC1C;AACA;IACI,mCAAmC;IACnC,SAAS;IACT,UAAU;AACd;AACA;IACI,6CAA6C;;AAEjD;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,gBAAgB;AACpB;AACA,SAAS;AACT;IACI,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,+BAA+B;IAC/B,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,iCAAiC;IACjC,iCAAiC;AACrC;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,mCAAmC;IACnC,iCAAiC;AACrC;AACA;IACI,0BAA0B;IAC1B,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap');\r\n:root{\r\n    box-sizing: content-box;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --backGround:darkslategrey;\r\n    --primary:ghostwhite;\r\n    --btnPrimary:orange;\r\n    --btnHover:orangered;\r\n    --contentShadown:0 0.1rem 0.3rem black;\r\n    --contHovShadown:0 0.1rem 0.1rem black;\r\n}\r\nhtml, body{\r\n    background-color: var(--backGround);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nh1{\r\n    border-bottom: 0.1rem solid var(--backGround);\r\n\r\n}\r\nh2{\r\n    font-size: 120%;\r\n}\r\nh1,h2{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    font-weight: 600;\r\n}\r\n/* MENU */\r\nmenu{\r\n    margin: 0 0 1rem;\r\n    padding: 1rem;\r\n    background-color: var(--primary);\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    box-shadow: var(--contentShadown);\r\n}\r\nnav{\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 0.3rem;\r\n    border: 0.01rem solid lightgray;\r\n    background-color: black;\r\n    color: var(--primary);\r\n}\r\nnav:hover{\r\n    background-color: var(--btnHover);\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n.container{\r\n    width: 50%;\r\n    min-width: 25rem;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n    line-height: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    background-color: var(--primary);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n\r\n/* FORM */\r\nform{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\n#btnSubmit{\r\n    color: var(--primary);\r\n    text-transform: uppercase;\r\n    background-color: var(--backGround);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n#btnSubmit:hover{\r\n    background-color: darkcyan;\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n#spnPassword{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n    color: darkcyan;\r\n}\r\n#spnValidate{\r\n    font-weight: bold;\r\n}\r\n.errorText{\r\n    color: red;\r\n    font-weight: 400;\r\n    font-size:small;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/js/dom.js":
/*!******************************!*\
  !*** ./src/assets/js/dom.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dom; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = function Dom() {
  _classCallCheck(this, Dom);

  this.createStyle = function (args) {
    var style = document.createElement('style');
    style.innerText = args.text;
    return style;
  };

  this.createH1 = function (args) {
    var h1 = document.createElement('h1');
    h1.innerText = args.text;
    return h1;
  };

  this.createH2 = function (args) {
    var h2 = document.createElement('h2');
    h2.innerText = args.text;
    return h2;
  };

  this.createH3 = function (args) {
    var h3 = document.createElement('h3');
    h3.innerText = args.text;
    return h3;
  };

  this.createNav = function (args) {
    var nav = document.createElement('nav');
    nav.id = args.id;
    nav.innerText = args.id;
    return nav;
  };

  this.createSpan = function (args) {
    var span = document.createElement('span');
    span.id = args.id;
    span.innerText = args.text;
    span.className = args["class"];
    return span;
  };

  this.createDiv = function (args) {
    var div = document.createElement('div');
    div.id = args.id;
    div.innerText = args.text;
    div.className = args["class"];
    return div;
  };

  this.createLabel = function (args) {
    var label = document.createElement('label');
    label.id = args.id;
    label.htmlFor = args["for"];
    label.innerText = args.text;
    return label;
  };

  this.createForm = function (args) {
    var form = document.createElement('form');
    form.id = args.id;
    form.method = args.method;
    form.action = args.action;
    return form;
  };

  this.createInput = function (args) {
    var input = document.createElement('input');
    input.type = args.type;
    input.id = args.id;
    input.className = args["class"];
    return input;
  };

  this.createButton = function (args) {
    var button = document.createElement('button');
    button.type = args.type;
    button.id = args.id;
    button.innerText = args.text;
    button.className = args["class"];
    return button;
  };

  this.createDL = function (args) {
    var dl = document.createElement('dl');
    dl.id = args.id;
    dl.innerText = args.text;
    return dl;
  };

  this.createDT = function (args) {
    var dt = document.createElement('dt');
    dt.id = args.id;
    dt.innerText = args.text;
    return dt;
  };

  this.createDD = function (args) {
    var dd = document.createElement('dd');
    dd.id = args.id;
    dd.innerText = args.text;
    return dd;
  };

  this.createP = function (args) {
    var p = document.createElement('p');
    p.id = args.id;
    p["class"] = args["class"];
    p.text = args.text;
    return p;
  };

  this.createUL = function (args) {
    var ul = document.createElement('ul');
    ul.id = args.id;
    ul.className = args["class"];
    return ul;
  };

  this.createOL = function (args) {
    var ol = document.createElement('ol');
    ol.id = args.id;
    ol.className = args["class"];
    return ol;
  };

  this.createLI = function (args) {
    var li = document.createElement('li');
    li.id = args.id;
    li.className = args["class"];
    li.innerText = args.text;
    return li;
  };
};



/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! exports provided: getCPF, getHome, getTimer, getPassword, getBank, getCalculator, getRegister, getIMC, getTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCPF", function() { return getCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimer", function() { return getTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPassword", function() { return getPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBank", function() { return getBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalculator", function() { return getCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegister", function() { return getRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIMC", function() { return getIMC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTask", function() { return getTask; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_calculator_view_vwCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/calculator/view/vwCalculator */ "./src/modules/calculator/view/vwCalculator.js");
/* harmony import */ var _modules_timer_view_vwTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/timer/view/vwTimer */ "./src/modules/timer/view/vwTimer.js");
/* harmony import */ var _modules_task_view_vwTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/task/view/vwTask */ "./src/modules/task/view/vwTask.js");
/* harmony import */ var _modules_imc_view_vwIMC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/imc/view/vwIMC */ "./src/modules/imc/view/vwIMC.js");
/* harmony import */ var _modules_cpf_view_vwCPF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/cpf/view/vwCPF */ "./src/modules/cpf/view/vwCPF.js");
/* harmony import */ var _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/password/view/vwPassword */ "./src/modules/password/view/vwPassword.js");
/* harmony import */ var _modules_register_view_vwForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/register/view/vwForm */ "./src/modules/register/view/vwForm.js");
/* harmony import */ var _modules_bank_view_vwBank__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/bank/view/vwBank */ "./src/modules/bank/view/vwBank.js");
/* harmony import */ var _modules_home_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/home/Home */ "./src/modules/home/Home.js");










var path = window.location.pathname; //const urlPath = "/js_webpack/public"; // test

var urlPath = "/public"; // dev

var head = document.querySelector('head');
var container = document.querySelector('.container');

var getHome = function getHome() {
  head.appendChild(_modules_home_Home__WEBPACK_IMPORTED_MODULE_9__["style"]);
  container.innerHTML = _modules_home_Home__WEBPACK_IMPORTED_MODULE_9__["Home"];
};

var getTask = function getTask() {
  var clsForm = new _modules_task_view_vwTask__WEBPACK_IMPORTED_MODULE_3__["default"]();
  head.appendChild(clsForm.style);
  container.appendChild(clsForm.dvTask);
  container.classList.add('task');
};

var getTimer = function getTimer() {
  var clsForm = new _modules_timer_view_vwTimer__WEBPACK_IMPORTED_MODULE_2__["default"]();
  head.appendChild(clsForm.style);
  container.appendChild(clsForm.dvTimer);
  container.classList.add('timer');
};

var getIMC = function getIMC() {
  var clsForm = new _modules_imc_view_vwIMC__WEBPACK_IMPORTED_MODULE_4__["default"]();
  head.appendChild(clsForm.style);
  container.appendChild(clsForm.dvTable);
  container.appendChild(clsForm.dvForm);
  container.classList.add('imc');
};

var getCalculator = function getCalculator() {
  var clsForm = new _modules_calculator_view_vwCalculator__WEBPACK_IMPORTED_MODULE_1__["default"]();
  head.appendChild(clsForm.style);
  container.appendChild(clsForm.dvGrid);
  container.classList.add('calculator');
};

var getCPF = function getCPF() {
  var clsForm = new _modules_cpf_view_vwCPF__WEBPACK_IMPORTED_MODULE_5__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('cpf');
};

var getPassword = function getPassword() {
  var clsForm = new _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_6__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('password');
};

var getRegister = function getRegister() {
  var clsForm = new _modules_register_view_vwForm__WEBPACK_IMPORTED_MODULE_7__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('registerForm');
};

var getBank = function getBank() {
  var clsForm = new _modules_bank_view_vwBank__WEBPACK_IMPORTED_MODULE_8__["default"]();
  head.appendChild(clsForm.style);
  container.appendChild(clsForm.form);
  container.classList.add('bank');
  clsForm.form.insertAdjacentElement('afterend', clsForm.h2);
};

switch (path) {
  case "".concat(urlPath, "/home/"):
    getHome();
    break;

  case "".concat(urlPath, "/timer/"):
    getTimer();
    break;

  case "".concat(urlPath, "/task/"):
    getTask();
    break;

  case "".concat(urlPath, "/imc/"):
    getIMC();
    break;

  case "".concat(urlPath, "/calculator/"):
    getCalculator();
    break;

  case "".concat(urlPath, "/cpf/"):
    getCPF();
    break;

  case "".concat(urlPath, "/password/"):
    getPassword();
    break;

  case "".concat(urlPath, "/register/"):
    getRegister();
    break;

  case "".concat(urlPath, "/bank/"):
    getBank();
    break;

  default:
    getHome();
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu/Menu */ "./src/modules/menu/Menu.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__);



(function () {
  Object(_modules_menu_Menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/***/ }),

/***/ "./src/modules/bank/assets/style.js":
/*!******************************************!*\
  !*** ./src/modules/bank/assets/style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = ".bank>#option>h1{border: none;background-color: var(--backGround);padding: 1rem;margin: 0.8rem 0;color: whitesmoke;border-radius: 0.3rem 0.3rem 0 0;}.bank>h2{padding: 1rem;text-align: left;max-width: 25rem;}.bank>h3{text-align: right;margin-top: -3.5rem;}#barOption>label{padding: 1rem;}#barOption>label,#barOption>label>input, #barOption>button{cursor: pointer;}#option{width: 40%;min-width: 25rem;max-width: 50em;margin: 0 auto;}#barOption>input{padding: 0.5rem;}#option, #optAccount{display: flex;flex-direction: column;text-align: center;}#barOption>label{background-color: var(--btnHover);}#barAccount>label{background-color: var(--btnPrimary);padding: 0.5rem;}#barAccount>label:first-of-type{border-radius: 5rem 0 0 5rem;}#barAccount>label:last-of-type{border-radius: 0 5rem 5rem 0;}#barOption>label, #barAccount>label{box-shadow: var(--contHovShadown);}#barOption>label:hover, #barAccount>label:hover{box-shadow: var(--contentShadown);}#barOption>label>input, #barAccount>label>input{display: none;}#content{font-weight: bold;display: flex;padding: 1rem;flex-direction: row;justify-content: space-between;max-width: 30rem;margin: 0 auto;}#bankForm{display: flex;flex-direction: row;}#bankForm>label{padding: 0.5rem;font-size: 0.8rem;background-color: lightgrey;box-shadow: var(--contHovShadown);font-weight: bold;}#bankForm>label:hover{background-color: gray;box-shadow: 0 0.1rem 0.1rem gray;}#bankForm>div{display: flex;flex-direction: row;width: 65%;}#bankForm>div>input{max-width: 230%;min-width: 7rem;text-align: right;font-size: 1.5rem;}#bankForm>div>button{width: 6.5rem;text-transform: uppercase;font-size: 0.8rem;border-radius: 0 5rem 5rem 0;background-color: var(--backGround);color: whitesmoke;}#bankForm>div>button:hover{background-color: yellowgreen;color: black;}#bankForm>div>button:focus{outline: none;}";
};



/***/ }),

/***/ "./src/modules/bank/control/CtrlAccess.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/CtrlAccess.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlSession; });
/* harmony import */ var _model_Access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Access */ "./src/modules/bank/model/Access.js");
/* harmony import */ var _CtrlAccount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CtrlAccount.js */ "./src/modules/bank/control/CtrlAccount.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CtrlSession = /*#__PURE__*/function (_Access) {
  _inherits(CtrlSession, _Access);

  var _super = _createSuper(CtrlSession);

  function CtrlSession() {
    var _this;

    _classCallCheck(this, CtrlSession);

    _this = _super.call(this, _model_Access__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _this.getSession = function () {
      var strAccess = localStorage.getItem('Access');
      if (!strAccess) return false;
      var access = JSON.parse(strAccess);
      return access;
    };

    _this.revokAccess = function () {
      localStorage.removeItem('Access');
    };

    _this.setLogout = function () {
      _this.revokAccess();

      window.location.reload();
    };

    _this.setUserAccess = function (access) {
      if (!access) return;

      _this.registerAccess(access);
    };

    _this.checkAccess = function () {
      var access = _this.getSession();

      if (!access) return true;
      var date = new Date(access.date);
      date.setHours(date.getHours + 3);
      var now = new Date();
      now.setHours(now.getHours + 3);
      now.setHours(now.getHours() - 1);
      return now > date;
    };

    _this.setAccess = function (e) {
      var clientName = e.target.children['inpName'].value;
      var numAccount = e.target.children['inpAccount'].value;
      _this.ctrlAcount = new _CtrlAccount_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      var access = _this.ctrlAcount.getClient(clientName, numAccount);

      if (access) {
        var elChild = document.querySelector("#".concat(e.target.id));
        elChild.remove();

        _this.setUserAccess(access);

        return true;
      } else {
        return false;
      }
    };

    return _this;
  }

  return CtrlSession;
}(_model_Access__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/control/CtrlAccount.js":
/*!*************************************************!*\
  !*** ./src/modules/bank/control/CtrlAccount.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlAccount; });
/* harmony import */ var _model_Pessoa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Pessoa.js */ "./src/modules/bank/model/Pessoa.js");
/* harmony import */ var _model_Account_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Account.js */ "./src/modules/bank/model/Account.js");
/* harmony import */ var _model_AccCurrent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/AccCurrent.js */ "./src/modules/bank/model/AccCurrent.js");
/* harmony import */ var _model_AccSavings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/AccSavings.js */ "./src/modules/bank/model/AccSavings.js");
/* harmony import */ var _model_Access_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Access.js */ "./src/modules/bank/model/Access.js");
/* harmony import */ var _CtrlAccess_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CtrlAccess.js */ "./src/modules/bank/control/CtrlAccess.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var CtrlAccount = function CtrlAccount() {
  var _this = this;

  _classCallCheck(this, CtrlAccount);

  this.getAccounts = function () {
    var clients = JSON.parse(localStorage.getItem('Client'));
    return clients === null ? {} : clients;
  };

  this.registerPessoa = function (clients) {
    var users = JSON.stringify(clients);
    localStorage.setItem('Client', users);
  };

  this.withdraw = function (value) {
    var session = new _CtrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getSession();
    var account = new _model_Account_js__WEBPACK_IMPORTED_MODULE_1__["default"](session.Account, session.Account.number, session.Account.balance);
    account.setDate();
    var current = new _model_AccCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, session.limit);
    current.withdraw(value);

    _this.updateAccount(account, current, session);
  };

  this.deposit = function (value) {
    var session = new _CtrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getSession();
    var account = new _model_Account_js__WEBPACK_IMPORTED_MODULE_1__["default"](session.Account, session.Account.number, session.Account.balance);
    account.setDate();
    var current = new _model_AccCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, session.limit);
    current.deposit(value);

    _this.updateAccount(account, current, session);
  };

  this.updateAccount = function (account, current, session) {
    account.balance = current.balance;
    var client = new _model_Access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, current.limit, session.income);

    var clients = _this.getAccounts();

    clients[account.number] = client;

    _this.registerPessoa(clients);

    new _CtrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["default"]().setUserAccess(client);
  };

  this.getClient = function (clientName, numAccount) {
    var clients = _this.getAccounts();

    var client = clients[numAccount];

    if (!client) {
      alert('Account not found!');
      return false;
    }

    var check = clientName === client.Account.name && numAccount === client.Account.number;

    if (check) {
      var user = new _model_Pessoa_js__WEBPACK_IMPORTED_MODULE_0__["default"](client.Account.name, client.Account.id);
      var account = new _model_Account_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, client.Account.number, client.Account.balance, client.Account.date);
      var accCurrent = new _model_AccCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, client.limit);
      var accSavings = new _model_AccSavings_js__WEBPACK_IMPORTED_MODULE_3__["default"](account, client.income);
      account.balance = accSavings.sumIncome();
      var access = new _model_Access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, accCurrent.limit, accSavings.income);
      return access;
    } else {
      return false;
    }
  };

  this.setAccount = function (e) {
    var clients = _this.getAccounts();

    var name = e.target.children['inpName'].value;
    var id = e.target.children['inpID'].value;
    var user = new _model_Pessoa_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, id);
    var account = new _model_Account_js__WEBPACK_IMPORTED_MODULE_1__["default"](user);
    account.createNumber();
    var current = new _model_AccCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, 100);
    var savings = new _model_AccSavings_js__WEBPACK_IMPORTED_MODULE_3__["default"](account, 0);
    var client = new _model_Access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, current.limit, savings.income);
    clients[account.number] = client;

    _this.registerPessoa(clients);

    var elChild = document.querySelector("#".concat(e.target.id));
    elChild.remove();
    new _CtrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["default"]().setUserAccess(client);
  };
};



/***/ }),

/***/ "./src/modules/bank/control/CtrlAction.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/CtrlAction.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlAction; });
/* harmony import */ var _view_vwResume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/vwResume */ "./src/modules/bank/view/vwResume.js");
/* harmony import */ var _CtrlAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CtrlAccount */ "./src/modules/bank/control/CtrlAccount.js");
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




var CtrlAction = /*#__PURE__*/function (_CtrlAccount) {
  _inherits(CtrlAction, _CtrlAccount);

  var _super = _createSuper(CtrlAction);

  function CtrlAction() {
    var _this;

    _classCallCheck(this, CtrlAction);

    _this = _super.call(this, _CtrlAccount__WEBPACK_IMPORTED_MODULE_1__["default"]);

    _this.optWithdraw = function (inpWithdraw, bntWithdraw) {
      var inpDopsit = document.querySelector('#inpDeposit');
      var btnDopsit = document.querySelector('#btnDeposit');
      var formDiv = document.querySelector('#dvInput');

      if (inpDopsit !== null) {
        inpDopsit.value = null;
        formDiv.removeChild(inpDopsit);
        formDiv.removeChild(btnDopsit);
      }

      dvInput.appendChild(inpWithdraw);
      dvInput.appendChild(bntWithdraw);
    };

    _this.optDeposit = function (inpDeposit, bntDeposit) {
      var inpWithdraw = document.querySelector('#inpWithdraw');
      var btnWithdraw = document.querySelector('#btnWithdraw');
      var formDiv = document.querySelector('#dvInput');

      if (inpWithdraw !== null) {
        inpWithdraw.value = null;
        formDiv.removeChild(inpWithdraw);
        formDiv.removeChild(btnWithdraw);
      }

      dvInput.appendChild(inpDeposit);
      dvInput.appendChild(bntDeposit);
    };

    return _this;
  }

  _createClass(CtrlAction, [{
    key: "action",
    value: function action(e) {
      var action = e.submitter.value;
      var content = document.querySelector('#content');
      var optAccount = document.querySelector('#optAccount');

      switch (action) {
        case 'Withdraw':
          var withdrawValue = Number(e.target[0].value).toFixed(2);
          this.withdraw(withdrawValue);
          e.target.remove();
          content.remove();
          optAccount.remove();
          new _view_vwResume__WEBPACK_IMPORTED_MODULE_0__["default"]();
          break;

        case 'Deposit':
          var depositValue = Number(e.target[0].value).toFixed(2);
          this.deposit(depositValue);
          e.target.remove();
          content.remove();
          optAccount.remove();
          new _view_vwResume__WEBPACK_IMPORTED_MODULE_0__["default"]();
          break;
      }
    }
  }]);

  return CtrlAction;
}(_CtrlAccount__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/bank/control/CtrlBank.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/control/CtrlBank.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlBank; });
/* harmony import */ var _view_vwAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/vwAccess */ "./src/modules/bank/view/vwAccess.js");
/* harmony import */ var _view_vwAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/vwAccount */ "./src/modules/bank/view/vwAccount.js");
/* harmony import */ var _view_vwResume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume */ "./src/modules/bank/view/vwResume.js");
/* harmony import */ var _view_vwLogout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/vwLogout */ "./src/modules/bank/view/vwLogout.js");
/* harmony import */ var _CtrlAccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CtrlAccess */ "./src/modules/bank/control/CtrlAccess.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var CtrlBank = /*#__PURE__*/function (_CtrlSession) {
  _inherits(CtrlBank, _CtrlSession);

  var _super = _createSuper(CtrlBank);

  function CtrlBank() {
    var _this;

    _classCallCheck(this, CtrlBank);

    _this = _super.call(this, _CtrlAccess__WEBPACK_IMPORTED_MODULE_4__["default"]);

    _this.resumeAccount = function () {
      if (!document.querySelector('#content')) {
        var btnLogout = document.querySelector('#btnLogout');
        if (btnLogout) btnLogout.remove();
        new _view_vwResume__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }
    };

    _this.accountForm = function () {
      if (!document.querySelector('#formAccount')) {
        var formAccess = document.querySelector('#formAccess');
        if (formAccess) formAccess.remove();
        new _view_vwAccount__WEBPACK_IMPORTED_MODULE_1__["default"]();
      }
    };

    _this.accessForm = function () {
      if (!document.querySelector('#formAccess')) {
        var formAccount = document.querySelector('#formAccount');
        if (formAccount) formAccount.remove();
        new _view_vwAccess__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
    };

    _this.logoutForm = function () {
      if (!document.querySelector('#btnLogout')) {
        var content = document.querySelector('#content');
        var optAccount = document.querySelector('#optAccount');
        var numAccount = document.querySelector('#numAccount');
        if (numAccount) numAccount.remove();

        if (optAccount || content) {
          content.remove();
          optAccount.remove();
        }

        new _view_vwLogout__WEBPACK_IMPORTED_MODULE_3__["default"]();
      }
    };

    _this.setOption = function (event) {
      var bankForm = document.querySelector('#bankForm');
      if (bankForm) bankForm.remove();
      var optUser = event.target.children[0].value;
      var check = event.target.children[0];
      check.checked = true;

      switch (optUser) {
        case 'account':
          _this.checkAccess() ? _this.accountForm() : _this.logoutForm();
          break;

        case 'access':
          _this.checkAccess() ? _this.accessForm() : _this.resumeAccount();
          break;
      }
    };

    return _this;
  }

  return CtrlBank;
}(_CtrlAccess__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/modules/bank/control/CtrlResume.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/CtrlResume.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlResume; });
/* harmony import */ var _CtrlAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CtrlAccess */ "./src/modules/bank/control/CtrlAccess.js");
/* harmony import */ var _view_vwCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/vwCurrent */ "./src/modules/bank/view/vwCurrent.js");
/* harmony import */ var _view_vwSavings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwSavings */ "./src/modules/bank/view/vwSavings.js");
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





var CtrlResume = /*#__PURE__*/function (_CtrlSession) {
  _inherits(CtrlResume, _CtrlSession);

  var _super = _createSuper(CtrlResume);

  function CtrlResume() {
    var _this;

    _classCallCheck(this, CtrlResume);

    _this = _super.call(this, _CtrlAccess__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _this.createSavings = function (session) {
      if (!document.querySelector('#spnIncome')) {
        var spnLimit = document.querySelector('#spnLimit');
        if (spnLimit) spnLimit.remove();
        if (document.querySelector('#bankForm')) bankForm.remove();
        new _view_vwSavings__WEBPACK_IMPORTED_MODULE_2__["default"](session);
      }
    };

    _this.createCurrent = function (session) {
      if (!document.querySelector('#spnLimit')) {
        if (document.querySelector('#spnIncome')) spnIncome.remove();
        if (document.querySelector('#bankForm')) bankForm.remove();
        new _view_vwCurrent__WEBPACK_IMPORTED_MODULE_1__["default"](session);
      }
    };

    return _this;
  }

  _createClass(CtrlResume, [{
    key: "resumeAccount",
    value: function resumeAccount(e) {
      var session = this.getSession();
      if (!e) return session;
      var optAccount = e.target.children[0].value;
      e.target.children[0].checked = true;

      switch (optAccount) {
        case 'savings':
          this.createSavings(session);
          break;

        case 'current':
          this.createCurrent(session);
          break;
      }

      var numAccount = document.querySelector('#numAccount');
      if (numAccount) numAccount.remove();
    }
  }]);

  return CtrlResume;
}(_CtrlAccess__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/AccCurrent.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/model/AccCurrent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Current; });
/* harmony import */ var _Account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.js */ "./src/modules/bank/model/Account.js");
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



var Current = /*#__PURE__*/function (_Account) {
  _inherits(Current, _Account);

  var _super = _createSuper(Current);

  function Current(Account, limit) {
    var _this;

    _classCallCheck(this, Current);

    _this = _super.call(this, Account);
    _this.number = Account.number;
    _this.balance = Account.balance;
    _this.limit = limit;
    return _this;
  }

  _createClass(Current, [{
    key: "withdraw",
    value: function withdraw(value) {
      if (Number(value) <= Number(this.balance) + Number(this.limit) || Number(value) <= Number(this.limit)) {
        if (Number(value) > Number(this.balance)) {
          if (Number(this.balance) > 0) {
            this.limit -= Number(value) - Number(this.balance);
          } else {
            this.limit -= Number(value);
          }
        }

        this.accWithdraw(value);
      } else {
        alert('The balance and limit is not enough!');
      }
    }
  }, {
    key: "deposit",
    value: function deposit(value) {
      if (this.balance <= 0 || this.limit < 100) {
        this.limit = Number(value) + Number(this.limit) >= 100 ? 100 : Number(value) + Number(this.limit);
      }

      this.accDeposit(value);
    }
  }]);

  return Current;
}(_Account_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/AccSavings.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/model/AccSavings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Savings; });
/* harmony import */ var _Account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.js */ "./src/modules/bank/model/Account.js");
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



var Savings = /*#__PURE__*/function (_Account) {
  _inherits(Savings, _Account);

  var _super = _createSuper(Savings);

  function Savings(Account, income) {
    var _this;

    _classCallCheck(this, Savings);

    _this = _super.call(this, Account);
    _this.number = Account.number;
    _this.balance = Account.balance;
    _this.date = Account.date;
    _this.income = income;
    return _this;
  }

  _createClass(Savings, [{
    key: "sumIncome",
    value: function sumIncome() {
      var now = new Date();
      now.setHours(now.getHours() - 3);
      var lastMoviment = new Date(this.date);
      var period = ((now.getTime() - lastMoviment.getTime()) / (1000 * 60 * 60)).toFixed(0);
      this.income = Number(this.balance) * (0.01 * Number(period));
      return Number(this.balance) + Number(this.income);
    }
  }]);

  return Savings;
}(_Account_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/Access.js":
/*!******************************************!*\
  !*** ./src/modules/bank/model/Access.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Access; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Access = /*#__PURE__*/function () {
  function Access(Account, limit, income) {
    _classCallCheck(this, Access);

    this.Account = Account;
    this.limit = limit;
    this.income = income;
    this.date = this.setDate();
  }

  _createClass(Access, [{
    key: "setDate",
    value: function setDate() {
      var date = new Date();
      date.setHours(date.getHours() - 3);
      this.date = date;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.date;
    }
  }, {
    key: "registerAccess",
    value: function registerAccess(access) {
      var strAccess = JSON.stringify(access);
      localStorage.setItem('Access', strAccess);
    }
  }, {
    key: "checkAccess",
    value: function checkAccess() {
      var strAccess = localStorage.getItem('Access');
      var access = JSON.parse(strAccess);
      return access;
    }
  }]);

  return Access;
}();



/***/ }),

/***/ "./src/modules/bank/model/Account.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/model/Account.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var _Pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pessoa */ "./src/modules/bank/model/Pessoa.js");
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



var Account = /*#__PURE__*/function (_Pessoa) {
  _inherits(Account, _Pessoa);

  var _super = _createSuper(Account);

  function Account(Pessoa, number, balance, date) {
    var _this;

    _classCallCheck(this, Account);

    _this = _super.call(this, Pessoa);
    _this.name = Pessoa.name;
    _this.id = Pessoa.id;
    _this.number = number;
    _this.balance = balance;
    _this.date = date;
    return _this;
  }

  _createClass(Account, [{
    key: "setDate",
    value: function setDate() {
      var date = new Date();
      date.setHours(date.getHours() - 3);
      this.date = date;
    }
  }, {
    key: "accDeposit",
    value: function accDeposit(value) {
      this.balance = (Number(this.balance) + Number(value)).toFixed(2);
      this.setDate();
    }
  }, {
    key: "accWithdraw",
    value: function accWithdraw(value) {
      Number(this.balance -= value).toFixed(2);
      this.setDate();
    }
  }, {
    key: "createNumber",
    value: function createNumber() {
      var numberAccount = '';

      for (var i = 0; i < 6; i++) {
        numberAccount += String(Math.floor(Math.random() * 10));
      }

      this.number = numberAccount;
      this.balance = 0;
      this.setDate();
    }
  }]);

  return Account;
}(_Pessoa__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/Pessoa.js":
/*!******************************************!*\
  !*** ./src/modules/bank/model/Pessoa.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pessoa; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pessoa = function Pessoa(name, id) {
  _classCallCheck(this, Pessoa);

  this.name = name;
  this.id = id;
};



/***/ }),

/***/ "./src/modules/bank/view/vwAccess.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/view/vwAccess.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccessForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_CtrlAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/CtrlAccess */ "./src/modules/bank/control/CtrlAccess.js");
/* harmony import */ var _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume.js */ "./src/modules/bank/view/vwResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var AccessForm = function AccessForm() {
  _classCallCheck(this, AccessForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var ctrlAccess = new _control_CtrlAccess__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var subTitle = document.querySelector('#subTitle');
  subTitle.innerText = 'Access account';
  this.formAccess = dom.createForm({
    id: 'formAccess',
    method: 'dialog',
    action: ''
  });
  var inpName = dom.createInput({
    type: 'text',
    id: 'inpName'
  });
  inpName.name = 'nameAccount';
  inpName.placeholder = 'Type your name';
  inpName.required = true;
  var inpAccount = dom.createInput({
    type: 'text',
    id: 'inpAccount'
  });
  inpAccount.name = 'numAccount';
  inpAccount.placeholder = 'Enter the account number';
  inpAccount.required = true;
  var bntSubmit = dom.createButton({
    type: 'submit',
    id: 'btnAccess',
    text: 'Access'
  });
  bntSubmit.value = 'Access';
  this.formAccess.appendChild(inpName);
  this.formAccess.appendChild(inpAccount);
  this.formAccess.appendChild(bntSubmit);
  subTitle.insertAdjacentElement('afterend', this.formAccess);
  this.formAccess.addEventListener('submit', function (event) {
    event.preventDefault();
    var chkAccess = ctrlAccess.setAccess(event);
    if (chkAccess) new _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });
};



/***/ }),

/***/ "./src/modules/bank/view/vwAccount.js":
/*!********************************************!*\
  !*** ./src/modules/bank/view/vwAccount.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accountForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_CtrlAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/CtrlAccount */ "./src/modules/bank/control/CtrlAccount.js");
/* harmony import */ var _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume.js */ "./src/modules/bank/view/vwResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var accountForm = function accountForm() {
  _classCallCheck(this, accountForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var ctrlAccount = new _control_CtrlAccount__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var subTitle = document.querySelector('#subTitle');
  subTitle.innerText = 'Create new account';
  this.formAccount = dom.createForm({
    id: 'formAccount',
    action: '',
    method: 'dialog'
  });
  var inpName = dom.createInput({
    type: 'text',
    id: 'inpName'
  });
  inpName.name = 'nameAccount';
  inpName.placeholder = 'Type your name';
  inpName.required = true;
  var inpAccount = dom.createInput({
    type: 'text',
    id: 'inpID'
  });
  inpAccount.name = 'numID';
  inpAccount.placeholder = 'Type your ID number';
  inpAccount.required = true;
  var bntSubmit = dom.createButton({
    type: 'submit',
    text: 'Create',
    id: 'btnAccount'
  });
  bntSubmit.value = 'Create';
  this.formAccount.appendChild(inpName);
  this.formAccount.appendChild(inpAccount);
  this.formAccount.appendChild(bntSubmit);
  subTitle.insertAdjacentElement('afterend', this.formAccount);
  this.formAccount.addEventListener('submit', function (event) {
    event.preventDefault();
    ctrlAccount.setAccount(event);
    new _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  });
};



/***/ }),

/***/ "./src/modules/bank/view/vwAction.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/view/vwAction.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_CtrlAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/CtrlAction */ "./src/modules/bank/control/CtrlAction.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Action = function Action() {
  _classCallCheck(this, Action);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var ctrlAction = new _control_CtrlAction__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.bankForm = dom.createForm({
    id: 'bankForm',
    action: '',
    method: 'dialog'
  });
  var labelWithdraw = dom.createLabel({
    "for": 'inpWithdraw',
    text: 'Withdraw',
    id: 'lblWidraw'
  });
  var inpWithdraw = dom.createInput({
    type: 'number',
    id: 'inpWithdraw'
  });
  inpWithdraw.placeholder = '0.00';
  inpWithdraw.step = '0.01';
  inpWithdraw.name = 'withdraw';
  inpWithdraw.required = true;
  var bntWithdraw = dom.createButton({
    type: 'submit',
    text: 'Withdraw',
    id: 'btnWithdraw'
  });
  bntWithdraw.value = 'Withdraw';
  var labelDeposit = dom.createLabel({
    "for": 'inpDeposit',
    text: 'Deposit',
    id: 'lblDeposit'
  });
  var inpDeposit = dom.createInput({
    type: 'number',
    id: 'inpDeposit'
  });
  inpDeposit.placeholder = '0.00';
  inpDeposit.step = '0.01';
  inpDeposit.name = 'deposit';
  inpDeposit.required = true;
  var bntDeposit = dom.createButton({
    type: 'submit',
    text: 'Deposit',
    id: 'btnDeposit'
  });
  bntDeposit.value = 'Deposit';
  var dvInput = dom.createDiv({
    id: 'dvInput',
    text: ''
  });
  this.bankForm.appendChild(labelWithdraw);
  this.bankForm.appendChild(labelDeposit);
  this.bankForm.appendChild(dvInput);
  labelWithdraw.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlAction.optWithdraw(inpWithdraw, bntWithdraw);
  });
  labelDeposit.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlAction.optDeposit(inpDeposit, bntDeposit);
  });
  this.bankForm.addEventListener('submit', function (event) {
    event.preventDefault();
    ctrlAction.action(event);
  });
};



/***/ }),

/***/ "./src/modules/bank/view/vwBank.js":
/*!*****************************************!*\
  !*** ./src/modules/bank/view/vwBank.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BankForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style */ "./src/modules/bank/assets/style.js");
/* harmony import */ var _control_CtrlBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control/CtrlBank */ "./src/modules/bank/control/CtrlBank.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var BankForm = function BankForm() {
  _classCallCheck(this, BankForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var css = new _assets_style__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var ctrlBank = new _control_CtrlBank__WEBPACK_IMPORTED_MODULE_2__["default"]();
  this.style = dom.createStyle({
    text: css.style
  });
  this.form = dom.createForm({
    id: 'option',
    method: 'dialog',
    action: ''
  });
  var h1 = dom.createH1({
    text: 'Bank'
  });
  this.h2 = dom.createH2({
    text: 'Select an option'
  });
  this.h2.id = 'subTitle';
  var labelAcc = dom.createLabel({
    id: 'accAccount',
    text: 'Access Account',
    "for": 'accAccount'
  });
  var accAccount = dom.createInput({
    type: 'radio',
    id: 'accAccount'
  });
  accAccount.value = 'access';
  accAccount.name = 'optAccount';
  var labelNew = dom.createLabel({
    id: 'newAccount',
    text: 'Create Account',
    "for": 'newAccount'
  });
  var newAccount = dom.createInput({
    type: 'radio',
    id: 'newAccount'
  });
  newAccount.value = 'account';
  newAccount.name = 'optAccount';
  var dvContent = dom.createDiv({
    id: 'barOption',
    text: ''
  });
  this.form.appendChild(h1);
  this.form.appendChild(dvContent);
  dvContent.appendChild(labelAcc);
  labelAcc.appendChild(accAccount);
  dvContent.appendChild(labelNew);
  labelNew.appendChild(newAccount);
  this.form.addEventListener('click', function (e) {
    e.preventDefault();
    ctrlBank.setOption(e);
  });
};


;

/***/ }),

/***/ "./src/modules/bank/view/vwCurrent.js":
/*!********************************************!*\
  !*** ./src/modules/bank/view/vwCurrent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateCurrent; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _vwAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vwAction */ "./src/modules/bank/view/vwAction.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CreateCurrent = function CreateCurrent(session) {
  _classCallCheck(this, CreateCurrent);

  this.session = session;
  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var spnLimit = dom.createSpan({
    id: 'spnLimit',
    text: 'Limit: R$ '
  });
  var content = document.querySelector('#content');
  content.appendChild(spnLimit);
  spnLimit.innerText += Number(this.session.limit).toFixed(2);
  content.insertAdjacentElement('afterend', new _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]().bankForm);
};



/***/ }),

/***/ "./src/modules/bank/view/vwLogout.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/view/vwLogout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_CtrlAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/CtrlAccess */ "./src/modules/bank/control/CtrlAccess.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var LogoutForm = function LogoutForm() {
  _classCallCheck(this, LogoutForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var ctrlAccess = new _control_CtrlAccess__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var subTitle = document.querySelector('#subTitle');
  subTitle.innerText = 'Logout first';
  var btnLogout = dom.createButton({
    type: 'button',
    text: 'Logout',
    id: 'btnLogout'
  });
  btnLogout.value = 'Logout';
  subTitle.insertAdjacentElement('afterend', btnLogout);
  btnLogout.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlAccess.setLogout();
  });
};



/***/ }),

/***/ "./src/modules/bank/view/vwResume.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/view/vwResume.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResumeAccount; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_CtrlResume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/CtrlResume */ "./src/modules/bank/control/CtrlResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ResumeAccount = function ResumeAccount() {
  _classCallCheck(this, ResumeAccount);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var subtitle = document.querySelector('#subTitle');
  var formOptAccount = dom.createForm({
    id: 'optAccount',
    action: '',
    method: 'dialog'
  });
  var dvBarOption = dom.createDiv({
    id: 'barAccount',
    text: ''
  });
  var labelCurrent = dom.createLabel({
    id: 'inpCurrent',
    text: 'Current Account',
    "for": 'inpCurrent'
  });
  var inpCurrent = dom.createInput({
    type: 'radio',
    id: 'inpCurrent'
  });
  inpCurrent.name = 'optAccount';
  inpCurrent.value = 'current';
  var labelSavings = dom.createLabel({
    id: 'inpSavings',
    text: 'Savings Account',
    "for": 'inpSavings'
  });
  var inpSavings = dom.createInput({
    type: 'radio',
    id: 'inpSavings'
  });
  inpSavings.name = 'optAccount';
  inpSavings.value = 'savings';
  var content = dom.createDiv({
    id: 'content',
    text: ''
  });
  var balance = dom.createSpan({
    id: 'spnBalance',
    text: 'Balance: R$ '
  });
  formOptAccount.appendChild(dvBarOption);
  dvBarOption.appendChild(labelCurrent);
  labelCurrent.appendChild(inpCurrent);
  dvBarOption.appendChild(labelSavings);
  labelSavings.appendChild(inpSavings);
  content.appendChild(balance);
  subtitle.insertAdjacentElement('afterend', formOptAccount);
  formOptAccount.insertAdjacentElement('afterend', content);
  var ctrlResume = new _control_CtrlResume__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var session = ctrlResume.resumeAccount();
  subtitle.innerText = "Ol\xE1, ".concat(session.Account.name, "!");
  var h3 = dom.createH3({
    text: "Acc: ".concat(session.Account.number)
  });
  h3.id = 'numAccount';
  subtitle.insertAdjacentElement('afterend', h3);
  balance.innerText += Number(session.Account.balance).toFixed(2);
  formOptAccount.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlResume.resumeAccount(event);
  });
};



/***/ }),

/***/ "./src/modules/bank/view/vwSavings.js":
/*!********************************************!*\
  !*** ./src/modules/bank/view/vwSavings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateSavings; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _vwAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vwAction */ "./src/modules/bank/view/vwAction.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CreateSavings = function CreateSavings(session) {
  _classCallCheck(this, CreateSavings);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.session = session;
  var spnIncome = dom.createSpan({
    id: 'spnIncome',
    text: 'Income: R$ '
  });
  var content = document.querySelector('#content');
  content.appendChild(spnIncome);
  spnIncome.innerText += Number(this.session.income.toFixed(2));
  content.insertAdjacentElement('afterend', new _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]().bankForm);
};



/***/ }),

/***/ "./src/modules/calculator/assets/style.js":
/*!************************************************!*\
  !*** ./src/modules/calculator/assets/style.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = ".calculator>.grdCalculator{width: 80%;margin: 0 auto;display: grid;grid-template-columns: auto auto auto auto;grid-gap: 0.2rem;}.calculator>.grdCalculator>h1{grid-column-start:1;grid-column-end:5;}.calculator>.grdCalculator>span{text-align: right;grid-column-start:1;grid-column-end:5;}.calculator>.grdCalculator>div{cursor: pointer;height: 3rem;text-align: center;font-size: 1.8rem;font-weight: 600;padding-top: 1rem;border-radius: 0.1rem;border: 0.01rem solid slategrey;background-image: linear-gradient(whitesmoke, white, white, white, white,  white,whitesmoke);}.calculator>.grdCalculator>div:hover{box-shadow: 0 0 0.1rem gray;background-image: linear-gradient(lightgray, white, white, white, white,  white,lightgray);}.calculator>.grdCalculator>input{border-radius: 0.3rem;width: 95%;height: 3rem;font-size: 2rem;text-align : right;margin: 0 auto;}.calculator>.grdCalculator>.display{border: none !important;grid-column-start:1;grid-column-end:5;margin-bottom: 0.5rem;}.calculator>.grdCalculator>.display:focus{outline:none !important;}.calculator>.grdCalculator>.display:hover{box-shadow:none !important;}.calculator>.grdCalculator>.equal{color: white;background-color: rgb(34, 148, 255) !important;background-image: none;}.calculator>.grdCalculator>.equal:hover{background-color: rgb(0, 132, 255) !important;background-image: none;}";
};



/***/ }),

/***/ "./src/modules/calculator/control/ctrlCalculator.js":
/*!**********************************************************!*\
  !*** ./src/modules/calculator/control/ctrlCalculator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlCalc; });
/* harmony import */ var _model_Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Calculator */ "./src/modules/calculator/model/Calculator.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ControlCalc = /*#__PURE__*/function (_Calculator) {
  _inherits(ControlCalc, _Calculator);

  var _super = _createSuper(ControlCalc);

  function ControlCalc() {
    var _this;

    _classCallCheck(this, ControlCalc);

    _this = _super.call(this, _model_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _this.btnDisplay = function (btnValue) {
      if (_this.display.value === '0' && btnValue !== '0' || _this.resultState.value === 'true') {
        _this.display.value = btnValue;
        _this.resultState.value = false;
      } else {
        console.log('btn', _this.formula.innerText);
        _this.display.value += btnValue;
        _this.resultState.value = false;
      }
    };

    _this.setFormula = function (btnValue) {
      if (_this.operations.includes(btnValue) && _this.resultState.value === 'true' || _this.formula.innerText.includes('=')) {
        _this.formula.innerText = "".concat(display.value).concat(btnValue);
        _this.resultState.value = true;
      } else {
        if (_this.formula.innerText.slice(-1) === ')') {
          _this.formula.innerText += "".concat(btnValue);
        } else {
          _this.formula.innerText += "".concat(_this.display.value).concat(btnValue);
        }

        _this.resultState.value = true;
      }

      _this.preResult();
    };

    _this.checkFormula = function () {
      var arrFormula = Array.from(_this.formula.innerText);
      var qtdRpar = arrFormula.reduce(function (accumulator, val) {
        if (val === ')') accumulator += 1;
        return accumulator;
      }, 0);
      var qtdLpar = arrFormula.reduce(function (accumulator, val) {
        if (val === '(') accumulator += 1;
        return accumulator;
      }, 0);
      return qtdRpar < qtdLpar;
    };

    _this.formatFormula = function (btnValue) {
      if (btnValue === ')') {
        if (_this.checkFormula()) {
          _this.resultState.value = false;

          _this.setFormula(btnValue);
        }

        ;
        _this.resultState.value = false;
      } else {
        if (_this.operations.includes(_this.formula.innerText.slice(-1))) {
          if (!_this.formula.innerText.includes('=')) {
            _this.formula.innerText += "".concat(btnValue);
          } else {
            _this.formula.innerText = "".concat(btnValue);
          }
        }
      }
    };

    _this.preResult = function () {
      var math = _this.result();

      if (math) _this.display.value = "".concat(math);
      _this.resultState.value = true;
    };

    _this.setResult = function () {
      _this.setFormula('=');

      var math = _this.result();

      _this.formula.innerText += "".concat(math);
      _this.display.value = "".concat(math);
      _this.resultState.value = true;
    };

    return _this;
  }

  return ControlCalc;
}(_model_Calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/calculator/control/ctrlClick.js":
/*!*****************************************************!*\
  !*** ./src/modules/calculator/control/ctrlClick.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlClick; });
/* harmony import */ var _ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrlCalculator */ "./src/modules/calculator/control/ctrlCalculator.js");
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



var ControlClick = /*#__PURE__*/function (_ControlCalc) {
  _inherits(ControlClick, _ControlCalc);

  var _super = _createSuper(ControlClick);

  function ControlClick(event) {
    var _this;

    _classCallCheck(this, ControlClick);

    _this = _super.call(this, _ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _this.event = event;
    return _this;
  }

  _createClass(ControlClick, [{
    key: "clickButton",
    value: function clickButton() {
      var el = this.event.target;
      var btnValue = el.innerText;
      if (el.classList[0] != 'func') return;

      switch (el.classList[1]) {
        case 'num':
          this.btnDisplay(btnValue);
          break;

        case 'dot':
          this.formatDecimal(btnValue);
          break;

        case 'equal':
          this.setResult();
          break;

        case 'del':
          this.delValue();
          break;

        case 'clear':
          this.clearDisplay();
          break;

        case 'lpar':
          this.formatFormula(btnValue);
          break;

        case 'rpar':
          this.formatFormula(btnValue);
          break;

        default:
          this.setFormula(btnValue);
      }
    }
  }]);

  return ControlClick;
}(_ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/calculator/control/ctrlKey.js":
/*!***************************************************!*\
  !*** ./src/modules/calculator/control/ctrlKey.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlKey; });
/* harmony import */ var _ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrlCalculator */ "./src/modules/calculator/control/ctrlCalculator.js");
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



var ControlKey = /*#__PURE__*/function (_ControlCalc) {
  _inherits(ControlKey, _ControlCalc);

  var _super = _createSuper(ControlKey);

  function ControlKey(event) {
    var _this;

    _classCallCheck(this, ControlKey);

    _this = _super.call(this, _ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _this.event = event;
    return _this;
  }

  _createClass(ControlKey, [{
    key: "pressKey",
    value: function pressKey() {
      var funcValue = this.event.key;
      if (this.event.key in this.numbers) funcValue = 'num';
      if (this.operations.includes(this.event.key)) funcValue = 'oper';

      switch (funcValue) {
        case 'Escape':
          this.clearDisplay();
          break;

        case 'Enter':
          this.setResult('=');
          break;

        case 'num':
          this.btnDisplay(this.event.key);
          break;

        case 'oper':
          this.setFormula(this.event.key);
          break;

        case '.':
          this.formatDecimal(this.event.key);
          break;

        case '(':
          this.formatFormula(this.event.key);
          break;

        case ')':
          this.formatFormula(this.event.key);
          break;

        case 'Backspace':
          this.delValue();
          break;

        default:
          break;
      }
    }
  }]);

  return ControlKey;
}(_ctrlCalculator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/calculator/model/Calculator.js":
/*!****************************************************!*\
  !*** ./src/modules/calculator/model/Calculator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);

    this.resultState = document.querySelector('#resultState');
    this.display = document.querySelector('#display');
    this.formula = document.querySelector('.formula');
    this.operations = ['-', '+', '/', '*'];
    this.numbers = _toConsumableArray(Array(10).keys());
  }

  _createClass(Calculator, [{
    key: "clearDisplay",
    value: function clearDisplay() {
      this.display.value = 0;
      this.formula.innerText = '';
    }
  }, {
    key: "delValue",
    value: function delValue() {
      var val = this.display.value.length;
      this.display.value = val === 1 ? '0' : this.display.value.slice(0, -1);
    }
  }, {
    key: "formatDecimal",
    value: function formatDecimal(btnValue) {
      if (!this.display.value.includes('.')) this.display.value += btnValue;
    }
  }, {
    key: "result",
    value: function result() {
      try {
        var mathAccount = eval(this.formula.innerText.slice(0, -1)).toFixed(2);
        return mathAccount;
      } catch (e) {}
    }
  }]);

  return Calculator;
}();



/***/ }),

/***/ "./src/modules/calculator/view/vwCalculator.js":
/*!*****************************************************!*\
  !*** ./src/modules/calculator/view/vwCalculator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Display; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_ctrlClick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlClick */ "./src/modules/calculator/control/ctrlClick.js");
/* harmony import */ var _control_ctrlKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control/ctrlKey */ "./src/modules/calculator/control/ctrlKey.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/style */ "./src/modules/calculator/assets/style.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Display = function Display() {
  var _this = this;

  _classCallCheck(this, Display);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var css = new _assets_style__WEBPACK_IMPORTED_MODULE_3__["default"]();
  this.style = dom.createStyle({
    text: css.style
  });
  this.dvGrid = dom.createDiv({
    id: 'grdCalculator',
    text: '',
    "class": 'grdCalculator'
  });
  var h1 = dom.createH1({
    text: 'Calculator'
  });
  var span = dom.createSpan({
    id: 'spnResult',
    text: '',
    "class": 'formula'
  });
  var inpDisplay = dom.createInput({
    type: 'text',
    id: 'display',
    "class": 'display'
  });
  inpDisplay.readOnly = 'readonly';
  inpDisplay.value = 0;
  var itensGrid = [{
    'itemClass': "func clear",
    'text': 'C'
  }, {
    'itemClass': 'func lpar',
    'text': '('
  }, {
    'itemClass': 'func rpar',
    'text': ')'
  }, {
    'itemClass': 'func div',
    'text': '/'
  }, {
    'itemClass': 'func num',
    'text': 7
  }, {
    'itemClass': 'func num',
    'text': 9
  }, {
    'itemClass': 'func num',
    'text': 8
  }, {
    'itemClass': 'func mult',
    'text': '*'
  }, {
    'itemClass': 'func num',
    'text': 4
  }, {
    'itemClass': 'func num',
    'text': 5
  }, {
    'itemClass': 'func num',
    'text': 6
  }, {
    'itemClass': 'func plus',
    'text': '+'
  }, {
    'itemClass': 'func num',
    'text': 1
  }, {
    'itemClass': 'func num',
    'text': 2
  }, {
    'itemClass': 'func num',
    'text': 3
  }, {
    'itemClass': 'func sub',
    'text': '-'
  }, {
    'itemClass': 'func dot',
    'text': '.'
  }, {
    'itemClass': 'func num',
    'text': 0
  }, {
    'itemClass': 'func del',
    'text': '«'
  }, {
    'itemClass': 'func equal',
    'text': '='
  }];
  this.dvGrid.appendChild(h1);
  this.dvGrid.appendChild(span);
  this.dvGrid.appendChild(inpDisplay);
  itensGrid.forEach(function (element) {
    var item = element.itemClass;
    item = dom.createDiv({
      id: 'item',
      text: element.text
    });
    item.classList = element.itemClass;

    _this.dvGrid.appendChild(item);
  });
  var inpResult = dom.createInput({
    type: 'hidden',
    id: 'resultState',
    "class": 'result'
  });
  inpResult.value = false;
  this.dvGrid.appendChild(inpResult);
  this.dvGrid.addEventListener('click', function (event) {
    event.preventDefault();
    var control = new _control_ctrlClick__WEBPACK_IMPORTED_MODULE_1__["default"](event);
    control.clickButton();
  });
  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    var control = new _control_ctrlKey__WEBPACK_IMPORTED_MODULE_2__["default"](event);
    control.pressKey();
  });
};



/***/ }),

/***/ "./src/modules/cpf/control/ctrlCPF.js":
/*!********************************************!*\
  !*** ./src/modules/cpf/control/ctrlCPF.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_GenerateCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/GenerateCPF */ "./src/modules/cpf/model/GenerateCPF.js");
/* harmony import */ var _model_ValidCPF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/ValidCPF */ "./src/modules/cpf/model/ValidCPF.js");



var checkValue = function checkValue(event) {
  var objCPF = new _model_ValidCPF__WEBPACK_IMPORTED_MODULE_1__["default"](event.target.value);
  event.target.value = objCPF.formatCPF();
  if (objCPF.cleanCPF.length === 11) return objCPF.validate();
};

var validate = function validate(result) {
  if (result) {
    inpCPF.style.backgroundColor = 'yellowgreen';
    spnValidate.innerText = 'Valid CPF';
    spnValidate.style.color = 'green';
  } else {
    inpCPF.style.backgroundColor = 'tomato';
    spnValidate.innerText = 'Invalid CPF';
    spnValidate.style.color = 'red';
  }
};

var ctrlCPF = function ctrlCPF(event) {
  switch (event.type) {
    case 'keyup':
      validate(checkValue(event));
      break;

    case 'submit':
      var cpf = new _model_GenerateCPF__WEBPACK_IMPORTED_MODULE_0__["default"]();
      validate(true);
      return cpf.newCPF();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ctrlCPF);

/***/ }),

/***/ "./src/modules/cpf/model/GenerateCPF.js":
/*!**********************************************!*\
  !*** ./src/modules/cpf/model/GenerateCPF.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateCPF; });
/* harmony import */ var _ValidCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidCPF */ "./src/modules/cpf/model/ValidCPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GenerateCPF = /*#__PURE__*/function () {
  function GenerateCPF() {
    _classCallCheck(this, GenerateCPF);
  }

  _createClass(GenerateCPF, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
      return String(Math.floor(Math.random() * (max - min) + min));
    }
  }, {
    key: "formatCPF",
    value: function formatCPF(cpf) {
      return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
  }, {
    key: "newCPF",
    value: function newCPF() {
      var cpfPart = this.rand();
      var digitOne = _ValidCPF__WEBPACK_IMPORTED_MODULE_0__["default"].generateDigit(cpfPart);
      var digitTwo = _ValidCPF__WEBPACK_IMPORTED_MODULE_0__["default"].generateDigit(cpfPart + digitOne);
      this.newCPF = "".concat(cpfPart).concat(digitOne).concat(digitTwo);
      return this.formatCPF(this.newCPF);
    }
  }]);

  return GenerateCPF;
}();



/***/ }),

/***/ "./src/modules/cpf/model/ValidCPF.js":
/*!*******************************************!*\
  !*** ./src/modules/cpf/model/ValidCPF.js ***!
  \*******************************************/
/*! exports provided: default, ValidCPF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidCPF", function() { return ValidCPF; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidCPF = /*#__PURE__*/function () {
  function ValidCPF(postedCPF) {
    _classCallCheck(this, ValidCPF);

    Object.defineProperty(this, 'cleanCPF', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: postedCPF.replace(/\D+/g, '')
    });
  }

  _createClass(ValidCPF, [{
    key: "formatCPF",
    value: function formatCPF() {
      if (this.cleanCPF.length === 3) return "".concat(this.cleanCPF, ".");
      if (this.cleanCPF.length === 6) return "".concat(this.cleanCPF.slice(0, 3), ".").concat(this.cleanCPF.slice(3, 6), ".");
      if (this.cleanCPF.length === 9) return "".concat(this.cleanCPF.slice(0, 3), ".").concat(this.cleanCPF.slice(3, 6), ".").concat(this.cleanCPF.slice(6, 9), "-");
      if (this.cleanCPF.length >= 10) return "".concat(this.cleanCPF.slice(0, 3), ".").concat(this.cleanCPF.slice(3, 6), ".").concat(this.cleanCPF.slice(6, 9), "-").concat(this.cleanCPF.slice(9, 12));
      return this.cleanCPF;
    }
  }, {
    key: "isSequence",
    value: function isSequence() {
      return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }
  }, {
    key: "cpfGenerate",
    value: function cpfGenerate() {
      var cpfPart = this.cleanCPF.slice(0, -2);
      var digitOne = ValidCPF.generateDigit(cpfPart);
      var digitTwo = ValidCPF.generateDigit(cpfPart + digitOne);
      this.newCPF = "".concat(cpfPart).concat(digitOne).concat(digitTwo);
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.cleanCPF) return false;
      if (typeof this.cleanCPF !== 'string') return false;
      if (this.cleanCPF.length !== 11) return false;
      if (this.isSequence()) return false;
      this.cpfGenerate();
      return this.newCPF === this.cleanCPF;
    }
  }], [{
    key: "generateDigit",
    value: function generateDigit(cpfPart) {
      var total = 0;
      var decrement = cpfPart.length + 1;

      var _iterator = _createForOfIteratorHelper(cpfPart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var strNumeric = _step.value;
          total += decrement * Number(strNumeric);
          decrement--;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var digit = 11 - total % 11;
      return digit <= 9 ? String(digit) : '0';
    }
  }]);

  return ValidCPF;
}();




/***/ }),

/***/ "./src/modules/cpf/view/vwCPF.js":
/*!***************************************!*\
  !*** ./src/modules/cpf/view/vwCPF.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CpfForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_ctrlCPF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlCPF */ "./src/modules/cpf/control/ctrlCPF.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CpfForm = function CpfForm() {
  _classCallCheck(this, CpfForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.form = dom.createForm({
    id: 'formCPF',
    method: 'dialog'
  });
  var title = dom.createH1({
    text: 'Valid CPF Generator'
  });
  var label = dom.createLabel({
    id: 'lblCPF',
    "for": 'inpCPF',
    text: 'Type the CPF to check if is valid'
  });
  var input = dom.createInput({
    type: 'text',
    id: 'inpCPF'
  });
  input.placeholder = '___.___.___-__';
  input.maxLength = 14;
  input.minLength = 14;
  var span = dom.createSpan({
    id: 'spnValidate',
    text: ''
  });
  var button = dom.createButton({
    type: 'submit',
    id: 'btnSubmit',
    text: 'Generate'
  });
  this.form.appendChild(title);
  this.form.appendChild(label);
  this.form.appendChild(input);
  this.form.appendChild(span);
  this.form.appendChild(button);
  this.form.addEventListener('submit', function (event) {
    input.value = Object(_control_ctrlCPF__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
  });
  this.form.addEventListener('keyup', function (event) {
    Object(_control_ctrlCPF__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
  });
};



/***/ }),

/***/ "./src/modules/home/Home.js":
/*!**********************************!*\
  !*** ./src/modules/home/Home.js ***!
  \**********************************/
/*! exports provided: Home, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style */ "./src/modules/home/assets/style.js");


var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
var css = new _assets_style__WEBPACK_IMPORTED_MODULE_1__["default"]();
var style = dom.createStyle({
  text: css.style
});
var Home = "<div class=\"course-overview--container--2OKKD\" data-purpose=\"dashboard-overview-container\">\n    <div class=\"course-overview--heading--290FL\" data-purpose=\"course-headline\">\n        <div class=\"font-heading-lg mb-space-sm\">About this course</div>\n        <p>Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks,\n            Redux, Design Patterns</p>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>By the numbers</div>\n        <div data-purpose=\"course-main-stats\">\n            <div>Skill level: All Levels</div>\n            <div>Students: 10265</div>\n            <div>Languages: Portuguese</div>\n            <div>Captions: Yes</div>\n        </div>\n        <div data-purpose=\"course-additional-stats\">\n            <div>Lectures: 408</div>\n            <div>Video: 106.5 total hours</div>\n        </div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ course-overview--course-features--2fF12\"\n        data-purpose=\"course-features\">\n        <div>Features</div>\n        <div class=\"course-overview--wide--37Lev\"><span>Available on <a href=\"https://udemy.app.link/Gn5pYZoPZ9\"\n                    target=\"_blank\" rel=\"noopener noreferrer\">iOS</a> and <a href=\"https://udemy.app.link/Gn5pYZoPZ9\"\n                    target=\"_blank\" rel=\"noopener noreferrer\">Android</a></span></div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>Description</div>\n        <div class=\"course-overview--wide--37Lev course-overview--description--2m1iq\" data-purpose=\"course-description\">\n            <div data-purpose=\"safely-set-inner-html:trusted-html:content\">\n                <p>Curso de JavaScript e TypeScript do b\xE1sico ao avan\xE7ado - Atualizado para 2020 - O curso mais\n                    completo sobre todas as nuances do JavaScript voc\xEA voc\xEA vai encontrar na atualidade.</p>\n                <p>Aprenda Javascript moderno (ES6+) para front-end (com Webpack, babel, React, React Hooks e\n                    Redux) e back-end (com Node, Express, MySQL e MongoDB) e se torne um(a) desenvolvedor(a)\n                    full stack. </p>\n                <p>Este curso inclui <strong>JavaScript</strong> e <strong>TypeScript</strong>, voc\xEA vai\n                    aprender ambas as linguagens.</p>\n                <p><strong>Fundamentos</strong></p>\n                <p>Inicialmente, o aluno aprender\xE1 a utilizar recursos nativos do JavaScript sem a necessidade\n                    de utilizar frameworks ou bibliotecas adicionais (Javascript puro, conhecido como Vanilla\n                    JS).</p>\n                <p><strong>NodeJS, Frameworks e bibliotecas </strong></p>\n                <p>Apresentarei o Node JS, Express e o MongoDB (noSQL) para trabalhar com Javascript no\n                    Back-end. Apresentarei frameworks e bibliotecas que s\xE3o padr\xE3o no mercado atualmente, como\n                    Express (servidor Web) e Mongoose (para modelar bases de dados MongoDB). Tamb\xE9m apresentarei\n                    em detalhes o sistema de m\xF3dulos do NodeJS.</p>\n                <p><strong>JS Tooling</strong></p>\n                <p>Falaremos do Babel e Webpack, o que nos permitir\xE1 utilizar o sistema de m\xF3dulos do ES6 em\n                    navegadores mais antigos que n\xE3o teriam suporte para tal.</p>\n                <p><strong>Projeto #1</strong></p>\n                <p>Tamb\xE9m vamos criar um projeto realizando um CRUD (create, read, update e delete) na base de\n                    dados mongo com sistema de login real usando sessions (posteriormente com JWT).</p>\n                <p><strong>Deploy (Linux)</strong></p>\n                <p>Ao longo do curso, o aluno aprender\xE1 tecnologias adicionais ao JS, como: criar um servidor\n                    web com NGINX para fazer proxy reverso com Node; gerenciar projetos node com o pm2;\n                    configurar um servidor linux no Google Cloud Platform (GCP), adicionar certificado SSL/TLS\n                    (HTTPS) com letsencrypt gratuitamente, configurar um reposit\xF3rio com o Git (e comandos\n                    adicionais do git em geral), configurar chaves SSH no servidor e computador pessoal,\n                    TypeScript do b\xE1sico ao avan\xE7ado e muito mais.</p>\n                <p><strong>TypeScript</strong></p>\n                <p>Uma novidade neste curso \xE9 o TypeScript, o aluno n\xE3o precisar\xE1 comprar outro curso para\n                    aprender essa linguagem que est\xE1 t\xE3o em alta no momento.</p>\n                <p><strong>Seguran\xE7a</strong></p>\n                <p>Tamb\xE9m tive o cuidado de focar bastante na parte de seguran\xE7a de todos os servi\xE7os utilizados\n                    ao longo do curso, com isso o aluno poder\xE1 fazer deploy de suas aplica\xE7\xF5es sem medo. </p>\n                <p><strong>API Rest</strong></p>\n                <p>Criaremos uma API Rest utilizando MariaDB/MySQL (SQL) e o Sequelize, com sistema de login que\n                    utiliza JSON Web Tokens (JWT). Nesta se\xE7\xE3o, o aluno aprender\xE1 ainda mais recursos que s\xE3o\n                    padr\xE3o de mercado, como: editorconfig, eslint, prettier, JWT, middlewares e mais.</p>\n                <p><strong>React</strong></p>\n                <p>Na se\xE7\xE3o b\xE1sica de React JS, criaremos uma lista de tarefas utilizando class components e\n                    functional components (com classes e fun\xE7\xF5es). Tamb\xE9m utilizaremos o localStorage do\n                    navegador para salvar os dados da lista de tarefas, fazendo algo muito similar ao que\n                    far\xEDamos com bases de dados.</p>\n                <p>Na se\xE7\xE3o avan\xE7ada do React JS utilizaremos React Hooks, Redux + Redux Saga e muito mais.\n                    Tamb\xE9m vamos consumir a API Rest que criamos em aulas anteriores. Criaremos um sistema de\n                    Login com JWT e o axios e faremos um CRUD (create, read, update e delete) na base de dados\n                    MySQL/MariaDB da nossa API&nbsp;Rest.</p>\n                <p><strong>Express\xF5es Regulares</strong></p>\n                <p>Voc\xEA vai aprender a criar suas pr\xF3prias express\xF5es regulares (regex). Melhor que isso, voc\xEA\n                    vai entender o que est\xE1 fazendo com suas express\xF5es regulares.</p>\n                <p><strong>Princ\xEDpios SOLID</strong></p>\n                <p>O curso tem se\xE7\xF5es espec\xEDficas sobre os pilares da programa\xE7\xE3o orientada a objetos (POO) e\n                    <strong>princ\xEDpios SOLID</strong> (S.O.L.I.D), que s\xE3o parte extremamente importante na\n                    forma\xE7\xE3o de qualquer programador, independente da linguagem de programa\xE7\xE3o escolhida.</p>\n                <p><strong>Testes com o Jest</strong></p>\n                <p>Testes automatizados s\xE3o de extrema import\xE2ncia para qualquer desenvolvedor. Abordaremos\n                    testes unit\xE1rios e testes de integra\xE7\xE3o utilizando o jest.</p>\n                <p><strong>Design Patterns (Padr\xF5es de projeto)</strong></p>\n                <p>Uma outra novidade deste curso \xE9 que temos uma se\xE7\xE3o inteira sobre padr\xF5es de projeto (Design\n                    patterns). O foco aqui \xE9 aprender os padr\xF5es de projeto da GoF (que s\xE3o os mais cl\xE1ssicos e\n                    mais relevantes atualmente).</p>\n                <p><strong>Listagem do conte\xFAdo principal</strong></p>\n                <p>Lista do que ser\xE1 ensinado nas se\xE7\xF5es:</p>\n                <ul>\n                    <li>\n                        <p>Instala\xE7\xE3o dos programas utilizados ao longo do curso (Node, Visual Studio Code e\n                            mais)</p>\n                    </li>\n                    <li>\n                        <p>Javascript b\xE1sico (vari\xE1veis e coisas b\xE1sicas de programa\xE7\xE3o)</p>\n                    </li>\n                    <li>\n                        <p>Javascript com l\xF3gica de programa\xE7\xE3o (estruturas condicionais, de repeti\xE7\xE3o e mais)\n                        </p>\n                    </li>\n                    <li>\n                        <p>Javascript orientado a objetos (classes, fun\xE7\xF5es construtoras, factory functions, e\n                            mais)</p>\n                    </li>\n                    <li>\n                        <p>Javascript funcional (se\xE7\xF5es espec\xEDficas para fun\xE7\xF5es, arrays e objetos)</p>\n                    </li>\n                    <li>\n                        <p>Javascript ass\xEDncrono (com promises, ajax, axios e fetch API)</p>\n                    </li>\n                    <li>\n                        <p>Webpack e Babel (para uso de recursos modernos em navegadores mais antigos)</p>\n                    </li>\n                    <li>\n                        <p>Node.js (b\xE1sico de Node + Express e MongoDB)</p>\n                    </li>\n                    <li>\n                        <p>Projeto agenda (Um projeto real utilizando tudo o que foi descrito anteriormente)</p>\n                    </li>\n                    <li>\n                        <p>Deploy - Criar, configurar e manter um servidor Linux (inclui configura\xE7\xE3o de v\xE1rias\n                            tecnologias diferentes)</p>\n                    </li>\n                    <li>\n                        <p>Api rest - Criar uma API Rest do zero usando Express, JWT e o Sequelize (com\n                            MariaDB/MySQL).</p>\n                    </li>\n                    <li>\n                        <p>React JS B\xE1sico - Nesta se\xE7\xE3o, criaremos uma lista de tarefas utilizando o React JS e\n                            o localStorage do navegador. </p>\n                    </li>\n                    <li>\n                        <p>React JS Avan\xE7ado - React Hooks, Redux + Redux Saga, Autentica\xE7\xE3o com JWT, Redux\n                            Persist e muito mais.</p>\n                    </li>\n                    <li>\n                        <p>B\xF4nus: Express\xF5es Regulares (Regex)</p>\n                    </li>\n                    <li>\n                        <p>TypeScript - Voc\xEA n\xE3o precisa comprar outro curso para aprender TypeScript</p>\n                    </li>\n                    <li>\n                        <p>Princ\xEDpios da programa\xE7\xE3o orientada a objetos e princ\xEDpios S.O.L.I.D (SOLID)</p>\n                    </li>\n                    <li>\n                        <p>Testes automatizados com o Jest</p>\n                    </li>\n                    <li>\n                        <p>B\xF4nus: Padr\xF5es de projeto (Design patterns)</p>\n                    </li>\n                </ul>\n                <p><strong>Recomenda\xE7\xF5es</strong></p>\n                <p>Recomendo que o aluno conhe\xE7a o b\xE1sico de HTML e CSS para absorver melhor o conhecimento.\n                    (este curso n\xE3o inclui HTML e CSS).</p>\n            </div>\n            <h4>What you\u2019ll learn</h4>\n            <ul>\n                <li>JavaScript B\xE1sico, Funcional e Orientado a Objetos (ES6+, front-end e back-end)</li>\n                <li>TypeScript - um superset do JavaScript com tipagem est\xE1tica (front-end e back-end)</li>\n                <li>Node, Express, MongoDB e MySQL/MariaDB (Back-end)</li>\n                <li>Webpack e Babel (Front-end)</li>\n                <li>Sistema de login com session (front-end e back-end)</li>\n                <li>Sistema de login com JWT (front-end e back-end)</li>\n                <li>Cria\xE7\xE3o de projetos com Node, Express e EJS (front-end e back-end)</li>\n                <li>Configura\xE7\xE3o de um servidor Linux para Deploy (Ubuntu Server)</li>\n                <li>Configura\xE7\xF5es de seguran\xE7a para o servidor (SSH e TLS - Https)</li>\n                <li>Utiliza\xE7\xE3o de noSQL com mongoose (MongoDB)</li>\n                <li>Utiliza\xE7\xE3o de SQL com sequelize (MySQL/MariaDB)</li>\n                <li>Cria\xE7\xE3o de API Rest com Node + Express + Sequelize (back-end)</li>\n                <li>React JS com React Hooks + Redux com Redux Saga (front-end)</li>\n                <li>Princ\xEDpios da programa\xE7\xE3o orientada a objetos</li>\n                <li>Princ\xEDpios S.O.L.I.D</li>\n                <li>Testes automatizados com o Jest</li>\n                <li>Express\xF5es Regulares (B\xF4nus)</li>\n                <li>Padr\xF5es de projeto - Design Patterns (B\xF4nus)</li>\n            </ul>\n            <h4>Are there any course requirements or prerequisites?</h4>\n            <ul>\n                <li>Conhecer HTML e CSS ajudar\xE1 a fixar melhor o conte\xFAdo</li>\n                <li>Computador ou Laptop com Windows, Linux ou Mac</li>\n            </ul>\n            <h4>Who this course is for:</h4>\n            <ul>\n                <li>Para aqueles que desejam aprender JavaScript Moderno (ES6+) do zero</li>\n                <li>Para desenvolvedores experientes que desejam aprimorar seu conhecimento em JS</li>\n                <li>Para desenvolvedores que desejam trabalhar com front-end e back-end (fullstack)</li>\n                <li>Para quem deseja aprender TypeScript</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>Instructor</div>\n        <div class=\"course-overview--wide--37Lev\">\n            <div class=\"instructor-profile--header-row--n0Prm\"><img alt=\"User photo\" aria-label=\"User photo\"\n                    class=\"user-avatar user-avatar--image\" data-purpose=\"user-avatar\" height=\"64\" width=\"64\"\n                    src=\"https://img-a.udemycdn.com/user/200_H/59453841_aec6_2.jpg\">\n                <div class=\"instructor-profile--title-wrapper--2V1u6\">\n                    <div class=\"instructor-profile--title--1rlDt\"><a href=\"/user/leticia-barbosa-silva-3/\"\n                            data-purpose=\"instructor-url\">Luiz Ot\xE1vio Miranda</a></div>\n                    <p>Desenvolvedor de Software</p>\n                </div>\n            </div>\n            <div class=\"instructor-profile--social-links-row--14uvr\"><a href=\"https://twitter.com/OtavioMirandaBR\"\n                    class=\"instructor-profile--social-profile-btn--fs2ve\" target=\"_blank\"\n                    rel=\"noopener noreferrer nofollow\"><span aria-label=\"Twitter\" class=\"udi udi-twitter\"></span></a><a\n                    href=\"https://www.youtube.com/otaviomiranda\" class=\"instructor-profile--social-profile-btn--fs2ve\"\n                    target=\"_blank\" rel=\"noopener noreferrer nofollow\"><span aria-label=\"YouTube\"\n                        class=\"udi udi-youtube\"></span></a><a href=\"https://www.otaviomiranda.com.br/\"\n                    class=\"instructor-profile--social-profile-btn--fs2ve\" target=\"_blank\"\n                    rel=\"noopener noreferrer nofollow\"><span aria-label=\"Personal website\"\n                        class=\"udi udi-globe\"></span></a></div>\n            <div class=\"instructor-profile--description--vCsKv\">\n                <div data-purpose=\"safely-set-inner-html:trusted-html:content\">\n                    <p>Trabalha h\xE1 mais de 12 anos com desenvolvimento de softwares para terceiros usando v\xE1rias\n                        linguagens, libs e frameworks diferentes. </p>\n                    <p>Especializado em desenvolvimento web voltado para e-commerces.</p>\n                    <p>Atua tanto em front-end quanto back-end.</p>\n                    <p>Atuou no setor de provedores de internet, trabalhando com infraestrutura de redes\n                        (wireless, fibra \xF3ptica, cabeamento, etc...). No mesmo seguimento, tamb\xE9m atuou na \xE1rea\n                        de&nbsp; administra\xE7\xE3o de servidores Linux.</p>\n                    <p>Est\xE1 em cont\xEDnuo aprendizado.</p>\n                    <p>Atualmente, mantem softwares pr\xF3prios criados para terceiros e ensina o que sabe para\n                        outros desenvolvedores. </p>\n                    <p>M\xFAsico nas horas vagas.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>";


/***/ }),

/***/ "./src/modules/home/assets/style.js":
/*!******************************************!*\
  !*** ./src/modules/home/assets/style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = ".font-heading-lg{font-weight: 900;font-size: 2rem;}.course-overview--grid-row--1nKqQ>div:first-of-type{font-weight: 700;font-size: 1.5rem;margin-bottom: 0.5rem;}.course-overview--grid-row--1nKqQ{margin-bottom: 1rem;}.instructor-profile--title-wrapper--2V1u6>p:first-of-type{font-weight: 700;font-size: 1.2rem;}.instructor-profile--title-wrapper--2V1u6>div>a{text-decoration: none;color: var(--btnPrimary);font-weight: 600;font-size: 1rem;}.instructor-profile--title-wrapper--2V1u6>div>a:hover{color: var(--btnHover);}";
};



/***/ }),

/***/ "./src/modules/imc/assets/style.js":
/*!*****************************************!*\
  !*** ./src/modules/imc/assets/style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = ".flexRow{display: flex;flex-direction: row;justify-content: space-around;border-bottom-style: double;}.flexRow>dl{line-height: 1.8rem;}.flexRow>dl>dt{font-weight: 900;line-height: 3rem;text-transform: uppercase;}.flexRow>dl>dd{margin-left: 0;}.container>.flexCol>form{display: flex;flex-direction: column;justify-content: center;}.container>.flexCol>form>span{display: flex;flex-direction: column;}.container>.flexCol>form>span>label{font-weight: 600;}.container>.flexCol>form>span>input{width: 80%;padding: 0.5rem;font-size: 1.2rem;}.container>.flexCol>form>button{cursor: pointer;font-size: 1.5rem;line-height: 2rem;font-weight: 800;text-transform: uppercase;background-color: var(--btnPrimary);margin-top: 1rem;border-radius: 0.5rem;outline: none;}.container>.flexCol>form>button:hover,.container>.flexCol>form>button:active{background-color: var(--btnHover);outline: none;}#result>p{padding: 1rem;font-weight: 700;text-transform: uppercase;font-size: 1.2rem;text-align: center;margin-bottom: 0;}.valid{background-color: greenyellow;}.invalid{background-color: red;}";
};



/***/ }),

/***/ "./src/modules/imc/control/ctrlIMC.js":
/*!********************************************!*\
  !*** ./src/modules/imc/control/ctrlIMC.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlIMC; });
/* harmony import */ var _model_CalculateIMC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/CalculateIMC */ "./src/modules/imc/model/CalculateIMC.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ControlIMC = /*#__PURE__*/function (_CalculateIMC) {
  _inherits(ControlIMC, _CalculateIMC);

  var _super = _createSuper(ControlIMC);

  function ControlIMC(event) {
    var _this;

    _classCallCheck(this, ControlIMC);

    _this = _super.call(this, _model_CalculateIMC__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _this.event = event;
    _this.peso = event.path[0][0].value;
    _this.altura = event.path[0][1].value;
    _this.imc = _this.getIMC();

    _this.getResult = function () {
      if (_this.imc >= 40) return 'Obesidade grau 3';
      if (_this.imc >= 35) return 'Obesidade grau 2';
      if (_this.imc >= 30) return 'Obesivade grau 1';
      if (_this.imc >= 25) return 'Sobrepeso';
      if (_this.imc >= 18.5) return 'Peso normal';
      if (_this.imc < 18.5) return 'Abaixo do peso';
    };

    _this.setResult = function (msg, isValid) {
      this.pResult = document.querySelector('.result p');
      this.spResult = document.querySelector('.result');
      isValid ? this.pResult.className = 'valid' : this.pResult.className = 'invalid';
      this.pResult.innerText = msg;
    };

    _this.calcular = function () {
      var args = {
        'peso': _this.checkPeso(),
        'altura': _this.checkAltura()
      };

      if (args.peso && args.altura) {
        var msg = _this.getResult();

        _this.setResult("Seu IMC \xE9 ".concat(_this.imc, ": (").concat(msg, ")"), true);
      }
    };

    return _this;
  }

  return ControlIMC;
}(_model_CalculateIMC__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/imc/model/CalculateIMC.js":
/*!***********************************************!*\
  !*** ./src/modules/imc/model/CalculateIMC.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalculateIMC; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalculateIMC = /*#__PURE__*/function () {
  function CalculateIMC(altura, peso) {
    var _this = this;

    _classCallCheck(this, CalculateIMC);

    this.peso = peso;
    this.altura = altura;

    this.checkAltura = function () {
      if (_this.altura > 0) return _this.altura;
      return _this.setResult('Altura inválida', false);
    };

    this.checkPeso = function () {
      if (_this.peso > 0) return _this.peso;
      return _this.setResult('Peso inválido', false);
    };
  }

  _createClass(CalculateIMC, [{
    key: "getIMC",
    value: function getIMC() {
      return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }
  }]);

  return CalculateIMC;
}();



/***/ }),

/***/ "./src/modules/imc/view/vwIMC.js":
/*!***************************************!*\
  !*** ./src/modules/imc/view/vwIMC.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImcForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_ctrlIMC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlIMC */ "./src/modules/imc/control/ctrlIMC.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/style */ "./src/modules/imc/assets/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ImcForm = /*#__PURE__*/function (_Dom) {
  _inherits(ImcForm, _Dom);

  var _super = _createSuper(ImcForm);

  function ImcForm() {
    var _this;

    _classCallCheck(this, ImcForm);

    _this = _super.call(this, _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _this.css = new _assets_style__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.style = _this.createStyle({
      text: _this.css.style
    });
    _this.description = ["Menos que 18,5", "Entre 18,5 e 24,9", "Entre 25 e 29,9", "Entre 30 e 34,9", "Entre 35 e 39,9", "Mais que 39,9"];
    _this.result = ["Resultado", "Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
    _this.dvTable = _this.createDiv({
      id: 'flexCol',
      text: '',
      "class": 'flexCol'
    });

    var title = _this.createH1({
      text: 'IMC Table'
    });

    var dvRowList = _this.createDiv({
      id: 'flexRow',
      text: '',
      "class": 'flexRow'
    });

    var dlIMC = _this.createDL({
      id: 'imcTable',
      text: ''
    });

    var dtIMC = _this.createDT({
      id: 'imcTitle',
      text: 'IMC'
    });

    dlIMC.appendChild(_this.dtIMC);

    var dlResult = _this.createDL({
      id: 'resultTable',
      text: ''
    });

    var dtResult = _this.createDT({
      id: 'resultTitle',
      text: 'Resultado'
    });

    dlResult.appendChild(_this.dtResult);

    var setTable = function setTable(val, idx) {
      var dd = _this.createDD({
        id: "".concat(idx),
        text: "".concat(val)
      });

      _this.dlIMC.appendChild(dd);

      dd = _this.createDD({
        id: "".concat(idx),
        text: "".concat(_this.result[idx])
      });

      _this.dlResult.appendChild(dd);
    };

    _this.description.forEach(_this.setTable);

    _this.dvForm = _this.createDiv({
      id: 'formIMC',
      "class": 'flexCol',
      text: ''
    });

    var form = _this.createForm({
      id: 'calculator',
      action: '',
      method: 'dialog'
    });

    var subtitle = _this.createH2({
      id: 'subtitle',
      text: 'Calcule seu IMC'
    });

    var dvFormInputs = _this.createDiv({
      id: 'flexRow',
      text: '',
      "class": 'flexRow'
    });

    var spInpPeso = _this.createSpan({
      id: 'spPeso',
      text: '',
      clas: 'spPeso'
    });

    var lbPeso = _this.createLabel({
      id: 'lbPeso',
      "for": 'peso',
      text: 'Peso(kg):'
    });

    var inpPeso = _this.createInput({
      type: 'number',
      id: 'peso'
    });

    inpPeso.placeholder = '0.00';
    inpPeso.name = 'peso';
    inpPeso.required = true;
    inpPeso.step = '0.01';

    var spInpAltura = _this.createSpan({
      id: 'spAltura',
      text: '',
      "class": 'spAltura'
    });

    var lbAltura = _this.createLabel({
      id: 'lbAltura',
      "for": 'altura',
      text: 'Altura(m):'
    });

    var inpAltura = _this.createInput({
      type: 'number',
      id: 'altura'
    });

    inpAltura.placeholder = '0.00';
    inpAltura.name = 'peso';
    inpAltura.required = true;
    inpAltura.step = '0.01';

    var spResult = _this.createSpan({
      id: 'result',
      text: '',
      "class": 'result'
    });

    var pResult = _this.createP({
      id: 'result',
      text: '',
      "class": 'result'
    });

    var btnSubmit = _this.createButton({
      type: 'submit',
      id: 'btnSubmit',
      text: 'Calcular'
    });

    _this.dvTable.appendChild(title);

    _this.dvTable.appendChild(dvRowList);

    dvRowList.appendChild(dlIMC);
    dvRowList.appendChild(dlResult);

    _this.dvForm.appendChild(form);

    form.appendChild(subtitle);
    form.appendChild(dvFormInputs);
    dvFormInputs.appendChild(spInpPeso);
    spInpPeso.appendChild(lbPeso);
    spInpPeso.appendChild(inpPeso);
    form.appendChild(dvFormInputs);
    dvFormInputs.appendChild(spInpAltura);
    spInpAltura.appendChild(lbAltura);
    spInpAltura.appendChild(inpAltura);

    _this.dvForm.appendChild(spResult);

    spResult.appendChild(pResult);
    form.appendChild(btnSubmit);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var imc = new _control_ctrlIMC__WEBPACK_IMPORTED_MODULE_1__["default"](event);
      imc.calcular();
    });
    return _this;
  }

  return ImcForm;
}(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/menu/Menu.js":
/*!**********************************!*\
  !*** ./src/modules/menu/Menu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/js/main */ "./src/assets/js/main.js");
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/dom */ "./src/assets/js/dom.js");

 //const urlPath = '/js_webpack/public'; //test

var urlPath = '/public'; // dev

var menuDOM = document.querySelector('#menu');
var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_1__["default"]();
var menu = {
  home: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getHome"],
  timer: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getTimer"],
  task: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getTask"],
  imc: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getIMC"],
  calculator: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getCalculator"],
  cpf: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getCPF"],
  password: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getPassword"],
  register: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getRegister"],
  bank: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getBank"]
};

var setMenu = function setMenu() {
  Object.keys(menu).forEach(function (element) {
    var navMenu = dom.createNav({
      id: element
    });
    menuDOM.appendChild(navMenu);
    navMenu.addEventListener('click', function () {
      element !== 'home' ? location.replace("".concat(urlPath, "/").concat(element, "/")) : location.replace("".concat(urlPath, "/"));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setMenu);

/***/ }),

/***/ "./src/modules/password/control/ctrlPassword.js":
/*!******************************************************!*\
  !*** ./src/modules/password/control/ctrlPassword.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlPassword; });
/* harmony import */ var _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/PassGenerator */ "./src/modules/password/model/PassGenerator.js");
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



var CtrlPassword = /*#__PURE__*/function (_PassGenerator) {
  _inherits(CtrlPassword, _PassGenerator);

  var _super = _createSuper(CtrlPassword);

  function CtrlPassword() {
    var _this;

    _classCallCheck(this, CtrlPassword);

    _this = _super.call(this, _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _this.checkChar = function (charCode, password) {
      var strChar = null;
      if (password.small.includes(charCode) && password.lower) return String.fromCharCode(charCode);
      if (password.capital.includes(charCode) && password.upper) return String.fromCharCode(charCode);
      if (password.number.includes(charCode) && password.num) return String.fromCharCode(charCode);
      if (password.special.includes(charCode) && password.specialChar) return String.fromCharCode(charCode);
      return strChar;
    };

    _this.createError = function (input, msg) {
      console.log(input['special']);
      var span = document.createElement('span');
      span.classList.add('errorText');
      span.id = 'error';
      span.innerText = msg;
      input['special'].insertAdjacentElement('afterend', span);
    };

    _this.createPass = function (password) {
      var newPassword = '';

      while (newPassword.length < password.len) {
        var charCode = _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__["default"].rand();

        var strChar = _this.checkChar(charCode, password);

        if (strChar !== null) newPassword += strChar;
      }

      return newPassword;
    };

    return _this;
  }

  _createClass(CtrlPassword, [{
    key: "ctrlPass",
    value: function ctrlPass(child) {
      if (!child['error'] === false) child['error'].remove();
      var passLen = child['chars'].children['inpQtdChars'].value;
      var num = child['number'].children['inpNumber'].checked;
      var upper = child['upper'].children['inpUpper'].checked;
      var lower = child['lower'].children['inpLower'].checked;
      var special = child['special'].children['inpSpecial'].checked;
      var password = new _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__["default"]({
        'passLen': passLen,
        'num': num,
        'upper': upper,
        'lower': lower,
        'special': special
      });

      if (!num && !upper && !lower && !special) {
        this.createError(child, 'Select an option.');
        return 'Nothing Selected';
      } else {
        return this.createPass(password);
      }
    }
  }]);

  return CtrlPassword;
}(_model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/password/model/PassGenerator.js":
/*!*****************************************************!*\
  !*** ./src/modules/password/model/PassGenerator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PassGenerator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// MAIUSCULAS: 65 a 90
// MINUSCULAS: 97 a 122
// NUMEROS: 48 a 57
// TODOS CARACTERES: 33 a 47, 58 a 64, 91 a 96, 123 a 126
var PassGenerator = /*#__PURE__*/function () {
  function PassGenerator(args) {
    _classCallCheck(this, PassGenerator);

    this.len = args.passLen;
    this.num = args.num;
    this.upper = args.upper;
    this.lower = args.lower;
    this.specialChar = args.special;
    this.capital = Array.from({
      length: 91 - 65
    }, function (v, k) {
      return k + 65;
    });
    this.small = Array.from({
      length: 123 - 97
    }, function (v, k) {
      return k + 97;
    });
    this.number = Array.from({
      length: 58 - 48
    }, function (v, k) {
      return k + 48;
    });
    this.special = Array.from({
      length: 48 - 33
    }, function (v, k) {
      return k + 33;
    }) + Array.from({
      length: 65 - 58
    }, function (v, k) {
      return k + 58;
    }) + Array.from({
      length: 97 - 91
    }, function (v, k) {
      return k + 91;
    }) + Array.from({
      length: 127 - 123
    }, function (v, k) {
      return k + 123;
    });
  }

  _createClass(PassGenerator, null, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 48;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 126;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }]);

  return PassGenerator;
}();



/***/ }),

/***/ "./src/modules/password/view/vwPassword.js":
/*!*************************************************!*\
  !*** ./src/modules/password/view/vwPassword.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PassForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_ctrlPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlPassword */ "./src/modules/password/control/ctrlPassword.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var PassForm = function PassForm() {
  _classCallCheck(this, PassForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.form = dom.createForm({
    id: 'formPass',
    method: 'dialog'
  });
  var title = dom.createH1({
    text: 'Password Generator'
  });
  var span = dom.createSpan({
    id: 'spnPassword',
    text: ''
  });
  var lblChars = dom.createLabel({
    id: 'chars',
    "for": 'inpQtdChars',
    text: 'Number of characters'
  });
  var input = dom.createInput({
    type: 'number',
    id: 'inpQtdChars',
    "class": 'qtdChars'
  });
  input.value = 6;
  input.maxlength = '2';
  input.max = 12;
  input.minlength = '1';
  input.min = 6;
  input.required = true;
  var lblNumber = dom.createLabel({
    id: 'number',
    "for": 'inpNumber',
    text: 'Numbers'
  });
  var checkNumber = dom.createInput({
    type: 'checkbox',
    id: 'inpNumber',
    "class": 'Number'
  });
  checkNumber.checked = true;
  var lblUpper = dom.createLabel({
    id: 'upper',
    "for": 'inpUpper',
    text: 'Capital letters'
  });
  var checkUpper = dom.createInput({
    type: 'checkbox',
    id: 'inpUpper',
    "class": 'Upper'
  });
  checkUpper.checked = true;
  var lblLower = dom.createLabel({
    id: 'lower',
    "for": 'inpLower',
    text: 'Small letters'
  });
  var checkLower = dom.createInput({
    type: 'checkbox',
    id: 'inpLower',
    "class": 'Lower'
  });
  checkLower.checked = true;
  var lblSpecial = dom.createLabel({
    id: 'special',
    "for": 'inpSpecial',
    text: 'Special Characters'
  });
  var checkSpecial = dom.createInput({
    type: 'checkbox',
    id: 'inpSpecial',
    "class": 'Special'
  });
  checkSpecial.checked = true;
  var btnSubmit = dom.createButton({
    type: 'submit',
    id: 'btnSubmit',
    text: 'Generate'
  });
  this.form.appendChild(title);
  this.form.appendChild(span);
  this.form.appendChild(lblChars);
  lblChars.appendChild(input);
  this.form.appendChild(lblNumber);
  lblNumber.appendChild(checkNumber);
  this.form.appendChild(lblUpper);
  lblUpper.appendChild(checkUpper);
  this.form.appendChild(lblLower);
  lblLower.appendChild(checkLower);
  this.form.appendChild(lblSpecial);
  lblSpecial.appendChild(checkSpecial);
  this.form.appendChild(btnSubmit);
  this.form.addEventListener('submit', function (event) {
    event.preventDefault();
    var control = new _control_ctrlPassword__WEBPACK_IMPORTED_MODULE_1__["default"]();
    event.target.children['spnPassword'].innerText = control.ctrlPass(event.target.children);
  });
};



/***/ }),

/***/ "./src/modules/register/control/ctrlRegister.js":
/*!******************************************************!*\
  !*** ./src/modules/register/control/ctrlRegister.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlRegister; });
/* harmony import */ var _model_ValidForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ValidForm */ "./src/modules/register/model/ValidForm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ControlRegister = /*#__PURE__*/function (_ValidForm) {
  _inherits(ControlRegister, _ValidForm);

  var _super = _createSuper(ControlRegister);

  function ControlRegister() {
    var _this;

    _classCallCheck(this, ControlRegister);

    _this = _super.call(this, _model_ValidForm__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _this.form = document.querySelector('#registerForm');

    _this.handleSubmit = function (e) {
      e.preventDefault();

      var validInputs = _this.isValidInputs();

      var validPassword = _this.isValidPassowds();

      if (validInputs && validPassword) {
        alert('Form submitted');

        _this.form.submit();
      }
    };

    _this.isValidPassowds = function () {
      var isValid = true;

      var passowrd = _this.form.querySelector('#inpPassword');

      var rePassowrd = _this.form.querySelector('#inpConfirmPass');

      if (passowrd.value !== rePassowrd.value) {
        isValid = false;

        _this.createError(passowrd, 'Passwords are not the same.');

        _this.createError(rePassowrd, 'Passwords are not the same.');
      }

      if (passowrd.value.length < 6 || passowrd.value.length > 12) {
        isValid = false;

        _this.createError(passowrd, 'Password must be 6 to 12 characters long.');
      }

      return isValid;
    };

    _this.isValidInputs = function () {
      var isValid = true;

      var _iterator = _createForOfIteratorHelper(_this.form.querySelectorAll('.errorText')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var errorText = _step.value;
          errorText.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(_this.form.querySelectorAll('.validate')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          var label = input.previousElementSibling.innerText;

          if (!input.value) {
            _this.createError(input, "The \"".concat(label.slice(0, -1), "\" cant be empty."));

            isValid = false;
          }

          if (input.classList.contains('inpCPF')) {
            console.log(_this.validateCPF);
            if (!_this.validateCPF(input)) isValid = false;
          }

          if (input.classList.contains('inpLogin')) {
            if (!_this.validateUser(input)) isValid = false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return isValid;
    };

    return _this;
  }

  return ControlRegister;
}(_model_ValidForm__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/register/model/ValidCPF.js":
/*!************************************************!*\
  !*** ./src/modules/register/model/ValidCPF.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidCPF; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidCPF = /*#__PURE__*/function () {
  function ValidCPF() {
    var _this = this;

    _classCallCheck(this, ValidCPF);

    this.cleanCPF = function (postedCPF) {
      _this.cleanCPF = postedCPF.replace(/\D+/g, '');
    };
  }

  _createClass(ValidCPF, [{
    key: "isSequence",
    value: function isSequence() {
      return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length) === this.cleanCPF;
    }
  }, {
    key: "cpfGenerate",
    value: function cpfGenerate() {
      var cpfPart = this.cleanCPF.slice(0, -2);
      var digitOne = ValidCPF.generateDigit(cpfPart);
      var digitTwo = ValidCPF.generateDigit(cpfPart + digitOne);
      this.newCPF = "".concat(cpfPart).concat(digitOne).concat(digitTwo);
    }
  }, {
    key: "validate",
    value: function validate() {
      if (!this.cleanCPF) return false;
      if (typeof this.cleanCPF !== 'string') return false;
      if (this.cleanCPF.length !== 11) return false;
      if (this.isSequence()) return false;
      this.cpfGenerate();
      return this.newCPF === this.cleanCPF;
    }
  }], [{
    key: "generateDigit",
    value: function generateDigit(cpfPart) {
      var total = 0;
      var decrement = cpfPart.length + 1;

      var _iterator = _createForOfIteratorHelper(cpfPart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var strNumeric = _step.value;
          total += decrement * Number(strNumeric);
          decrement--;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var digit = 11 - total % 11;
      return digit <= 9 ? String(digit) : '0';
    }
  }]);

  return ValidCPF;
}();



/***/ }),

/***/ "./src/modules/register/model/ValidForm.js":
/*!*************************************************!*\
  !*** ./src/modules/register/model/ValidForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidForm; });
/* harmony import */ var _ValidCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidCPF.js */ "./src/modules/register/model/ValidCPF.js");
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



var ValidForm = /*#__PURE__*/function (_ValidCPF) {
  _inherits(ValidForm, _ValidCPF);

  var _super = _createSuper(ValidForm);

  function ValidForm() {
    _classCallCheck(this, ValidForm);

    return _super.call(this, _ValidCPF_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  _createClass(ValidForm, [{
    key: "validateUser",
    value: function validateUser(input) {
      var user = input.value;
      var isValid = true;

      if (user.length < 3 || user.length > 12) {
        this.createError(input, 'Username must be 3 to 12 characters long.');
        isValid = false;
      }

      if (!user.match(/^[a-zA-Z0-9]+$/g)) {
        this.createError(input, 'Username must have only letters and/or numbers.');
        isValid = false;
      }

      return isValid;
    }
  }, {
    key: "validateCPF",
    value: function validateCPF(input) {
      this.cleanCPF(input.value);

      if (!this.validate()) {
        this.createError(input, 'Invalid CPF');
        return false;
      }

      return true;
    }
  }, {
    key: "createError",
    value: function createError(input, msg) {
      var div = document.createElement('div');
      div.innerText = msg;
      div.classList.add('errorText');
      input.insertAdjacentElement('afterend', div);
    }
  }]);

  return ValidForm;
}(_ValidCPF_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/register/view/vwForm.js":
/*!*********************************************!*\
  !*** ./src/modules/register/view/vwForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegiterForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _control_ctrlRegister__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlRegister */ "./src/modules/register/control/ctrlRegister.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var RegiterForm = function RegiterForm() {
  _classCallCheck(this, RegiterForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.form = dom.createForm({
    id: 'registerForm',
    action: '',
    method: 'dialog'
  });
  var title = dom.createH1({
    text: 'Register Form'
  });
  var lblName = dom.createLabel({
    "for": 'inpName',
    id: 'lbName',
    text: 'Name:'
  });
  var inpName = dom.createInput({
    type: 'text',
    id: 'inpName'
  });
  inpName.className = 'validate';
  inpName.placeholder = 'Type your name';
  var lblLastName = dom.createLabel({
    "for": 'inpLastName',
    id: 'lbLastName',
    text: 'Last Name:'
  });
  var inpLastName = dom.createInput({
    type: 'text',
    id: 'inpLastName'
  });
  inpLastName.className = 'validate';
  inpLastName.placeholder = 'Type your last name';
  var lblCPF = dom.createLabel({
    id: 'lblCPF',
    "for": 'inpCPF',
    text: 'Type the CPF:'
  });
  var inpCPF = dom.createInput({
    type: 'text',
    id: 'inpCPF'
  });
  inpCPF.className = 'validate';
  inpCPF.classList.add('inpCPF');
  inpCPF.placeholder = '___.___.___-__';
  inpCPF.maxLength = 14;
  inpCPF.minLength = 14;
  var lblUser = dom.createLabel({
    "for": 'inpLogin',
    id: 'lbLogin',
    text: 'Username:'
  });
  var inpUser = dom.createInput({
    type: 'text',
    id: 'inpLogin'
  });
  inpUser.className = 'validate';
  inpUser.placeholder = 'Create a login user';
  var lblPass = dom.createLabel({
    "for": 'inpPassord',
    id: 'lbPassword',
    text: 'Password:'
  });
  var inpPass = dom.createInput({
    type: 'password',
    id: 'inpPassword'
  });
  inpPass.className = 'validate';
  inpPass.placeholder = 'Create a password';
  var lblConfirmPass = dom.createLabel({
    "for": 'inpConfirmPass',
    id: 'lbConfirmPass',
    text: 'Confirm Password:'
  });
  var inpConfirmPass = dom.createInput({
    type: 'password',
    id: 'inpConfirmPass'
  });
  inpConfirmPass.className = 'validate';
  inpConfirmPass.placeholder = 'Retype the password';
  var btnSubmit = dom.createButton({
    type: 'submit',
    id: 'btnSubmit',
    text: 'Register'
  });
  this.form.appendChild(title);
  this.form.appendChild(lblName);
  this.form.appendChild(inpName);
  this.form.appendChild(lblLastName);
  this.form.appendChild(inpLastName);
  this.form.appendChild(lblCPF);
  this.form.appendChild(inpCPF);
  this.form.appendChild(lblUser);
  this.form.appendChild(inpUser);
  this.form.appendChild(lblPass);
  this.form.appendChild(inpPass);
  this.form.appendChild(lblConfirmPass);
  this.form.appendChild(inpConfirmPass);
  this.form.appendChild(btnSubmit);
  this.form.addEventListener('submit', function (event) {
    event.preventDefault();
    var control = new _control_ctrlRegister__WEBPACK_IMPORTED_MODULE_1__["default"]();
    control.handleSubmit(event);
  });
};



/***/ }),

/***/ "./src/modules/task/assets/style.js":
/*!******************************************!*\
  !*** ./src/modules/task/assets/style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = "button{float: right;}input{padding: 0.5rem;}ol{padding-inline-start: 0;border-top: 0.03rem solid gray;border-bottom: 0.03rem solid var(--backGround)}ol>li{display: flex;margin-top: 0.8rem;margin-left: 0;justify-content: space-between;border-bottom: 0.01rem solid lightgrey;}";
};



/***/ }),

/***/ "./src/modules/task/control/CtrlTask.js":
/*!**********************************************!*\
  !*** ./src/modules/task/control/CtrlTask.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlTask; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _model_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Task */ "./src/modules/task/model/Task.js");
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




var CtrlTask = /*#__PURE__*/function (_Task) {
  _inherits(CtrlTask, _Task);

  var _super = _createSuper(CtrlTask);

  function CtrlTask() {
    var _this;

    _classCallCheck(this, CtrlTask);

    _this = _super.call(this, _model_Task__WEBPACK_IMPORTED_MODULE_1__["default"]);

    _this.setTask = function (task) {
      _this.list = document.querySelector('.lstTask');
      var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
      var itemList = dom.createLI({
        id: 'task',
        text: task
      });
      var brnDel = dom.createButton({
        type: 'button',
        id: 'delete',
        "class": 'delete',
        text: 'Delete'
      });
      brnDel.addEventListener('click', function (event) {
        event.preventDefault();

        _this.buttonClicked(event);
      });
      itemList.appendChild(brnDel);

      _this.list.appendChild(itemList);
    };

    _this.setTasks = function () {
      _this.list = document.querySelector('.lstTask');

      var itemsTask = _this.list.querySelectorAll('li');

      var tasks = [];
      itemsTask.forEach(function (task) {
        var taskText = task.innerText;
        tasks.push(taskText.replace("Delete", '').trim());
      });

      _this.saveTasks(tasks);
    };

    _this.getTasks = function () {
      _this.readTasks();

      if (!_this.lstTasks) return;

      _this.lstTasks.forEach(function (task) {
        _this.setTask(task);
      });
    };

    _this.cleanInput = function (input) {
      input.value = '';
      input.focus();
    };

    return _this;
  }

  _createClass(CtrlTask, [{
    key: "buttonClicked",
    value: function buttonClicked(event) {
      var criarTarefa = event.path[1].children[1];
      var el = event.target;

      if (el.classList.contains('addTask')) {
        if (!criarTarefa.value) return criarTarefa.focus();
        this.setTask(criarTarefa.value);
        this.cleanInput(criarTarefa);
        this.setTasks();
      }

      if (el.classList.contains('delete')) {
        el.parentElement.remove();
        this.setTasks();
      }
    }
  }, {
    key: "keyPressed",
    value: function keyPressed(event) {
      var criarTarefa = event.path[1].children[1];

      if (event.keyCode === 13 && criarTarefa.value) {
        this.setTask(criarTarefa.value);
        this.cleanInput(criarTarefa);
        this.setTasks();
      }
    }
  }]);

  return CtrlTask;
}(_model_Task__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/modules/task/model/Task.js":
/*!****************************************!*\
  !*** ./src/modules/task/model/Task.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
  var _this = this;

  _classCallCheck(this, Task);

  this.saveTasks = function (tasks) {
    var strTasks = JSON.stringify(tasks);
    localStorage.setItem('Tasks', strTasks);
  };

  this.readTasks = function () {
    var tasks = localStorage.getItem('Tasks');
    _this.lstTasks = JSON.parse(tasks);
  };
};



/***/ }),

/***/ "./src/modules/task/view/vwTask.js":
/*!*****************************************!*\
  !*** ./src/modules/task/view/vwTask.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style */ "./src/modules/task/assets/style.js");
/* harmony import */ var _control_CtrlTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control/CtrlTask */ "./src/modules/task/control/CtrlTask.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var TaskForm = function TaskForm() {
  _classCallCheck(this, TaskForm);

  var ctrlTask = new _control_CtrlTask__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var css = new _assets_style__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.style = dom.createStyle({
    text: css.style
  });
  this.dvTask = dom.createDiv({
    id: 'dvTask',
    "class": 'dvTask',
    text: ''
  });
  var title = dom.createH1({
    text: 'Task list'
  });
  var inpTask = dom.createInput({
    id: 'inpTask',
    type: 'text',
    "class": 'criarTarefa'
  });
  var list = dom.createOL({
    id: 'lstTask',
    "class": 'lstTask'
  });
  var btnAdd = dom.createButton({
    id: 'btnTask',
    type: 'button',
    "class": 'addTask',
    text: 'Add Task'
  });
  this.dvTask.appendChild(title);
  this.dvTask.appendChild(inpTask);
  this.dvTask.appendChild(btnAdd);
  this.dvTask.appendChild(list);
  btnAdd.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlTask.buttonClicked(event);
  });
  inpTask.addEventListener('keypress', function (event) {
    ctrlTask.keyPressed(event);
  });
  document.addEventListener('DOMContentLoaded', function (event) {
    ctrlTask.getTasks();
  });
};



/***/ }),

/***/ "./src/modules/timer/assets/style.js":
/*!*******************************************!*\
  !*** ./src/modules/timer/assets/style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style() {
  _classCallCheck(this, Style);

  this.style = "#crono{font-size: 3rem;font-weight: 600;width: 100%;float: left;text-align: center;margin-bottom: 1rem;padding-bottom: 1rem;border-bottom: 0.1rem solid var(--backGround);}";
};



/***/ }),

/***/ "./src/modules/timer/control/CtrlTimer.js":
/*!************************************************!*\
  !*** ./src/modules/timer/control/CtrlTimer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CtrlTimer; });
/* harmony import */ var _model_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Timer */ "./src/modules/timer/model/Timer.js");
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



var CtrlTimer = /*#__PURE__*/function (_Timer) {
  _inherits(CtrlTimer, _Timer);

  var _super = _createSuper(CtrlTimer);

  function CtrlTimer() {
    var _this;

    _classCallCheck(this, CtrlTimer);

    _this = _super.call(this, _model_Timer__WEBPACK_IMPORTED_MODULE_0__["default"]);

    _this.timerInit = function () {
      _this.cronoCounter = setInterval(function () {
        _this.ms++;
        crono.innerText = _this.setTime(_this.ms);
      }, 1000);
      crono.style.color = 'black';
    };

    _this.timerPause = function () {
      clearInterval(_this.cronoCounter);
      crono.style.color = 'red';
    };

    _this.timerReset = function () {
      clearInterval(_this.cronoCounter);
      _this.ms = 0;
      crono.innerText = _this.setTime(_this.ms);
      crono.style.color = 'black';
    };

    return _this;
  }

  _createClass(CtrlTimer, [{
    key: "action",
    value: function action(event) {
      var el = event.target;
      if (el.classList.contains('init')) this.timerInit();
      if (el.classList.contains('pause')) this.timerPause();
      if (el.classList.contains('reset')) this.timerReset();
    }
  }]);

  return CtrlTimer;
}(_model_Timer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/timer/model/Timer.js":
/*!******************************************!*\
  !*** ./src/modules/timer/model/Timer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function Timer() {
  _classCallCheck(this, Timer);

  this.ms = 0;
  this.cronoCounter;

  this.setTime = function (ms) {
    var time = new Date(ms * 1000);
    return time.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  };
};



/***/ }),

/***/ "./src/modules/timer/view/vwTimer.js":
/*!*******************************************!*\
  !*** ./src/modules/timer/view/vwTimer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimerForm; });
/* harmony import */ var _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/dom */ "./src/assets/js/dom.js");
/* harmony import */ var _assets_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style */ "./src/modules/timer/assets/style.js");
/* harmony import */ var _control_CtrlTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control/CtrlTimer */ "./src/modules/timer/control/CtrlTimer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var TimerForm = function TimerForm() {
  _classCallCheck(this, TimerForm);

  var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var ctrlTimer = new _control_CtrlTimer__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var css = new _assets_style__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.style = dom.createStyle({
    text: css.style
  });
  this.dvTimer = dom.createDiv({
    id: 'dvTimer',
    text: '',
    "class": 'timer'
  });
  var title = dom.createH1({
    text: 'Timer'
  });
  var timer = dom.createSpan({
    id: 'crono',
    text: "".concat(ctrlTimer.setTime(ctrlTimer.ms)),
    "class": 'crono'
  });
  var btnInit = dom.createButton({
    id: 'init',
    "class": 'init',
    type: 'button',
    text: 'Start'
  });
  var btnPause = dom.createButton({
    id: 'pause',
    "class": 'pause',
    type: 'button',
    text: 'Pause'
  });
  var btnReset = dom.createButton({
    id: 'reset',
    "class": 'reset',
    type: 'button',
    text: 'Reset'
  });
  this.dvTimer.appendChild(title);
  this.dvTimer.appendChild(timer);
  this.dvTimer.appendChild(btnInit);
  this.dvTimer.appendChild(btnPause);
  this.dvTimer.appendChild(btnReset);
  document.addEventListener('click', function (event) {
    event.preventDefault();
    ctrlTimer.action(event);
  });
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map