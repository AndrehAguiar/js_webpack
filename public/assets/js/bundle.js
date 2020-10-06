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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/form.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/form.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "form{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\nspan{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}", "",{"version":3,"sources":["webpack://src/assets/css/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB","sourcesContent":["form{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\nspan{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".font-heading-lg{\r\n    font-weight: 900;\r\n    font-size: 2rem;\r\n}\r\n.course-overview--grid-row--1nKqQ>div:first-of-type{\r\n    font-weight: 700;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.course-overview--grid-row--1nKqQ{\r\n    margin-bottom: 1rem;\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>p:first-of-type{\r\n    font-weight: 700;\r\n    font-size: 1.2rem;\r\n\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>div>a{\r\n    text-decoration: none;\r\n    color: var(--btnPrimary);    \r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>div>a:hover{\r\n    \r\n    color: var(--btnHover);  \r\n}", "",{"version":3,"sources":["webpack://src/assets/css/home.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;AACzB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,iBAAiB;;AAErB;AACA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,gBAAgB;IAChB,eAAe;AACnB;AACA;;IAEI,sBAAsB;AAC1B","sourcesContent":[".font-heading-lg{\r\n    font-weight: 900;\r\n    font-size: 2rem;\r\n}\r\n.course-overview--grid-row--1nKqQ>div:first-of-type{\r\n    font-weight: 700;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n.course-overview--grid-row--1nKqQ{\r\n    margin-bottom: 1rem;\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>p:first-of-type{\r\n    font-weight: 700;\r\n    font-size: 1.2rem;\r\n\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>div>a{\r\n    text-decoration: none;\r\n    color: var(--btnPrimary);    \r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n.instructor-profile--title-wrapper--2V1u6>div>a:hover{\r\n    \r\n    color: var(--btnHover);  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "menu{\r\n    margin: 0 0 1rem;\r\n    padding: 1rem;\r\n    background-color: var(--primary);\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    box-shadow: var(--contentShadown);\r\n}\r\nnav{\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 0.3rem;\r\n    border: 0.01rem solid lightgray;\r\n    background-color: black;\r\n    color: var(--primary);\r\n}\r\nnav:hover{\r\n    background-color: var(--btnHover);\r\n    box-shadow: var(--contHovShadown);\r\n}", "",{"version":3,"sources":["webpack://src/assets/css/menu.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,+BAA+B;IAC/B,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,iCAAiC;IACjC,iCAAiC;AACrC","sourcesContent":["menu{\r\n    margin: 0 0 1rem;\r\n    padding: 1rem;\r\n    background-color: var(--primary);\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    box-shadow: var(--contentShadown);\r\n}\r\nnav{\r\n    cursor: pointer;\r\n    padding: 0.5rem;\r\n    border-radius: 0.3rem;\r\n    border: 0.01rem solid lightgray;\r\n    background-color: black;\r\n    color: var(--primary);\r\n}\r\nnav:hover{\r\n    background-color: var(--btnHover);\r\n    box-shadow: var(--contHovShadown);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.i, ":root{\r\n    box-sizing: content-box;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --backGround:darkslategrey;\r\n    --primary:ghostwhite;\r\n    --btnPrimary:orange;\r\n    --btnHover:orangered;\r\n    --contentShadown:0 0.1rem 0.3rem black;\r\n    --contHovShadown:0 0.1rem 0.1rem black;\r\n}\r\nhtml, body{\r\n    background-color: var(--backGround);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nh1{\r\n    border-bottom: 0.1rem solid var(--backGround);\r\n\r\n}\r\nh2{\r\n    font-size: 120%;\r\n}\r\nh1,h2{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.container{\r\n    width: 50%;\r\n    min-width: 25rem;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n    line-height: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    background-color: var(--primary);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n", "",{"version":3,"sources":["webpack://src/assets/css/style.css"],"names":[],"mappings":"AACA;IACI,uBAAuB;IACvB,qCAAqC;IACrC,0BAA0B;IAC1B,oBAAoB;IACpB,mBAAmB;IACnB,oBAAoB;IACpB,sCAAsC;IACtC,sCAAsC;AAC1C;AACA;IACI,mCAAmC;IACnC,SAAS;IACT,UAAU;AACd;AACA;IACI,6CAA6C;;AAEjD;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gCAAgC;IAChC,iCAAiC;AACrC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;800&display=swap');\r\n:root{\r\n    box-sizing: content-box;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --backGround:darkslategrey;\r\n    --primary:ghostwhite;\r\n    --btnPrimary:orange;\r\n    --btnHover:orangered;\r\n    --contentShadown:0 0.1rem 0.3rem black;\r\n    --contHovShadown:0 0.1rem 0.1rem black;\r\n}\r\nhtml, body{\r\n    background-color: var(--backGround);\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nh1{\r\n    border-bottom: 0.1rem solid var(--backGround);\r\n\r\n}\r\nh2{\r\n    font-size: 120%;\r\n}\r\nh1,h2{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton{\r\n    cursor: pointer;\r\n    padding: 0.5rem 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.container{\r\n    width: 50%;\r\n    min-width: 25rem;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n    line-height: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    background-color: var(--primary);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/css/form.css":
/*!*********************************!*\
  !*** ./src/assets/css/form.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/form.css");

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

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/home.css");

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

/***/ "./src/assets/css/menu.css":
/*!*********************************!*\
  !*** ./src/assets/css/menu.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/menu.css");

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
/*! exports provided: createH1, createNav, createSpan, createForm, createInput, createLabel, createButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createH1", function() { return createH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNav", function() { return createNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpan", function() { return createSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInput", function() { return createInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
var createH1 = function createH1(args) {
  var h1 = document.createElement('h1');
  h1.innerText = args.text;
  return h1;
};

var createNav = function createNav(args) {
  var nav = document.createElement('nav');
  nav.id = args.id;
  nav.innerText = args.id;
  return nav;
};

var createSpan = function createSpan(args) {
  var span = document.createElement('span');
  span.id = args.id;
  span.innerText = args.text;
  return span;
};

var createLabel = function createLabel(args) {
  var label = document.createElement('label');
  label.id = args.id;
  label.htmlFor = args["for"];
  label.innerText = args.text;
  return label;
};

var createForm = function createForm(args) {
  var form = document.createElement('form');
  form.id = args.id;
  form.method = args.method;
  form.action = args.action;
  return form;
};

var createInput = function createInput(args) {
  var input = document.createElement('input');
  input.type = args.type;
  input.id = args.id;
  input["class"] = args["class"];
  return input;
};

var createButton = function createButton(args) {
  var button = document.createElement('button');
  button.type = args.type;
  button.id = args.id;
  button.innerText = args.text;
  return button;
};



/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! exports provided: getCPF, getHome, getPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCPF", function() { return getCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPassword", function() { return getPassword; });
/* harmony import */ var _modules_cpf_GenerateCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/cpf/GenerateCPF */ "./src/modules/cpf/GenerateCPF.js");
/* harmony import */ var _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/password/view/vwPassword */ "./src/modules/password/view/vwPassword.js");
/* harmony import */ var _modules_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/home/Home */ "./src/modules/home/Home.js");



var path = window.location.pathname;
var container = document.querySelector('.container');

var getHome = function getHome() {
  container.innerHTML = _modules_home_Home__WEBPACK_IMPORTED_MODULE_2__["Home"];
};

var getCPF = function getCPF() {
  var generator = new _modules_cpf_GenerateCPF__WEBPACK_IMPORTED_MODULE_0__["default"]();
  container.innerText = generator.newCPF();
};

var getPassword = function getPassword() {
  var clsForm = new _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_1__["default"]();
  container.appendChild(clsForm.form);
  var formPass = document.getElementById('formPass');
};

switch (path) {
  case '/public/home/':
    getHome();
    break;

  case '/public/cpf/':
    getCPF();
    break;

  case '/public/password/':
    getPassword();
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
/* harmony import */ var _assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/menu.css */ "./src/assets/css/menu.css");
/* harmony import */ var _assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/home.css */ "./src/assets/css/home.css");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/form.css */ "./src/assets/css/form.css");
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_form_css__WEBPACK_IMPORTED_MODULE_4__);






(function () {
  Object(_modules_menu_Menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/***/ }),

/***/ "./src/modules/cpf/GenerateCPF.js":
/*!****************************************!*\
  !*** ./src/modules/cpf/GenerateCPF.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenerateCPF; });
/* harmony import */ var _ValidCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValidCPF */ "./src/modules/cpf/ValidCPF.js");
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

/***/ "./src/modules/cpf/ValidCPF.js":
/*!*************************************!*\
  !*** ./src/modules/cpf/ValidCPF.js ***!
  \*************************************/
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

/***/ "./src/modules/home/Home.js":
/*!**********************************!*\
  !*** ./src/modules/home/Home.js ***!
  \**********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
var Home = "<div class=\"course-overview--container--2OKKD\" data-purpose=\"dashboard-overview-container\">\n    <div class=\"course-overview--heading--290FL\" data-purpose=\"course-headline\">\n        <div class=\"font-heading-lg mb-space-sm\">About this course</div>\n        <p>Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks,\n            Redux, Design Patterns</p>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>By the numbers</div>\n        <div data-purpose=\"course-main-stats\">\n            <div>Skill level: All Levels</div>\n            <div>Students: 10265</div>\n            <div>Languages: Portuguese</div>\n            <div>Captions: Yes</div>\n        </div>\n        <div data-purpose=\"course-additional-stats\">\n            <div>Lectures: 408</div>\n            <div>Video: 106.5 total hours</div>\n        </div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ course-overview--course-features--2fF12\"\n        data-purpose=\"course-features\">\n        <div>Features</div>\n        <div class=\"course-overview--wide--37Lev\"><span>Available on <a href=\"https://udemy.app.link/Gn5pYZoPZ9\"\n                    target=\"_blank\" rel=\"noopener noreferrer\">iOS</a> and <a href=\"https://udemy.app.link/Gn5pYZoPZ9\"\n                    target=\"_blank\" rel=\"noopener noreferrer\">Android</a></span></div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>Description</div>\n        <div class=\"course-overview--wide--37Lev course-overview--description--2m1iq\" data-purpose=\"course-description\">\n            <div data-purpose=\"safely-set-inner-html:trusted-html:content\">\n                <p>Curso de JavaScript e TypeScript do b\xE1sico ao avan\xE7ado - Atualizado para 2020 - O curso mais\n                    completo sobre todas as nuances do JavaScript voc\xEA voc\xEA vai encontrar na atualidade.</p>\n                <p>Aprenda Javascript moderno (ES6+) para front-end (com Webpack, babel, React, React Hooks e\n                    Redux) e back-end (com Node, Express, MySQL e MongoDB) e se torne um(a) desenvolvedor(a)\n                    full stack. </p>\n                <p>Este curso inclui <strong>JavaScript</strong> e <strong>TypeScript</strong>, voc\xEA vai\n                    aprender ambas as linguagens.</p>\n                <p><strong>Fundamentos</strong></p>\n                <p>Inicialmente, o aluno aprender\xE1 a utilizar recursos nativos do JavaScript sem a necessidade\n                    de utilizar frameworks ou bibliotecas adicionais (Javascript puro, conhecido como Vanilla\n                    JS).</p>\n                <p><strong>NodeJS, Frameworks e bibliotecas </strong></p>\n                <p>Apresentarei o Node JS, Express e o MongoDB (noSQL) para trabalhar com Javascript no\n                    Back-end. Apresentarei frameworks e bibliotecas que s\xE3o padr\xE3o no mercado atualmente, como\n                    Express (servidor Web) e Mongoose (para modelar bases de dados MongoDB). Tamb\xE9m apresentarei\n                    em detalhes o sistema de m\xF3dulos do NodeJS.</p>\n                <p><strong>JS Tooling</strong></p>\n                <p>Falaremos do Babel e Webpack, o que nos permitir\xE1 utilizar o sistema de m\xF3dulos do ES6 em\n                    navegadores mais antigos que n\xE3o teriam suporte para tal.</p>\n                <p><strong>Projeto #1</strong></p>\n                <p>Tamb\xE9m vamos criar um projeto realizando um CRUD (create, read, update e delete) na base de\n                    dados mongo com sistema de login real usando sessions (posteriormente com JWT).</p>\n                <p><strong>Deploy (Linux)</strong></p>\n                <p>Ao longo do curso, o aluno aprender\xE1 tecnologias adicionais ao JS, como: criar um servidor\n                    web com NGINX para fazer proxy reverso com Node; gerenciar projetos node com o pm2;\n                    configurar um servidor linux no Google Cloud Platform (GCP), adicionar certificado SSL/TLS\n                    (HTTPS) com letsencrypt gratuitamente, configurar um reposit\xF3rio com o Git (e comandos\n                    adicionais do git em geral), configurar chaves SSH no servidor e computador pessoal,\n                    TypeScript do b\xE1sico ao avan\xE7ado e muito mais.</p>\n                <p><strong>TypeScript</strong></p>\n                <p>Uma novidade neste curso \xE9 o TypeScript, o aluno n\xE3o precisar\xE1 comprar outro curso para\n                    aprender essa linguagem que est\xE1 t\xE3o em alta no momento.</p>\n                <p><strong>Seguran\xE7a</strong></p>\n                <p>Tamb\xE9m tive o cuidado de focar bastante na parte de seguran\xE7a de todos os servi\xE7os utilizados\n                    ao longo do curso, com isso o aluno poder\xE1 fazer deploy de suas aplica\xE7\xF5es sem medo. </p>\n                <p><strong>API Rest</strong></p>\n                <p>Criaremos uma API Rest utilizando MariaDB/MySQL (SQL) e o Sequelize, com sistema de login que\n                    utiliza JSON Web Tokens (JWT). Nesta se\xE7\xE3o, o aluno aprender\xE1 ainda mais recursos que s\xE3o\n                    padr\xE3o de mercado, como: editorconfig, eslint, prettier, JWT, middlewares e mais.</p>\n                <p><strong>React</strong></p>\n                <p>Na se\xE7\xE3o b\xE1sica de React JS, criaremos uma lista de tarefas utilizando class components e\n                    functional components (com classes e fun\xE7\xF5es). Tamb\xE9m utilizaremos o localStorage do\n                    navegador para salvar os dados da lista de tarefas, fazendo algo muito similar ao que\n                    far\xEDamos com bases de dados.</p>\n                <p>Na se\xE7\xE3o avan\xE7ada do React JS utilizaremos React Hooks, Redux + Redux Saga e muito mais.\n                    Tamb\xE9m vamos consumir a API Rest que criamos em aulas anteriores. Criaremos um sistema de\n                    Login com JWT e o axios e faremos um CRUD (create, read, update e delete) na base de dados\n                    MySQL/MariaDB da nossa API&nbsp;Rest.</p>\n                <p><strong>Express\xF5es Regulares</strong></p>\n                <p>Voc\xEA vai aprender a criar suas pr\xF3prias express\xF5es regulares (regex). Melhor que isso, voc\xEA\n                    vai entender o que est\xE1 fazendo com suas express\xF5es regulares.</p>\n                <p><strong>Princ\xEDpios SOLID</strong></p>\n                <p>O curso tem se\xE7\xF5es espec\xEDficas sobre os pilares da programa\xE7\xE3o orientada a objetos (POO) e\n                    <strong>princ\xEDpios SOLID</strong> (S.O.L.I.D), que s\xE3o parte extremamente importante na\n                    forma\xE7\xE3o de qualquer programador, independente da linguagem de programa\xE7\xE3o escolhida.</p>\n                <p><strong>Testes com o Jest</strong></p>\n                <p>Testes automatizados s\xE3o de extrema import\xE2ncia para qualquer desenvolvedor. Abordaremos\n                    testes unit\xE1rios e testes de integra\xE7\xE3o utilizando o jest.</p>\n                <p><strong>Design Patterns (Padr\xF5es de projeto)</strong></p>\n                <p>Uma outra novidade deste curso \xE9 que temos uma se\xE7\xE3o inteira sobre padr\xF5es de projeto (Design\n                    patterns). O foco aqui \xE9 aprender os padr\xF5es de projeto da GoF (que s\xE3o os mais cl\xE1ssicos e\n                    mais relevantes atualmente).</p>\n                <p><strong>Listagem do conte\xFAdo principal</strong></p>\n                <p>Lista do que ser\xE1 ensinado nas se\xE7\xF5es:</p>\n                <ul>\n                    <li>\n                        <p>Instala\xE7\xE3o dos programas utilizados ao longo do curso (Node, Visual Studio Code e\n                            mais)</p>\n                    </li>\n                    <li>\n                        <p>Javascript b\xE1sico (vari\xE1veis e coisas b\xE1sicas de programa\xE7\xE3o)</p>\n                    </li>\n                    <li>\n                        <p>Javascript com l\xF3gica de programa\xE7\xE3o (estruturas condicionais, de repeti\xE7\xE3o e mais)\n                        </p>\n                    </li>\n                    <li>\n                        <p>Javascript orientado a objetos (classes, fun\xE7\xF5es construtoras, factory functions, e\n                            mais)</p>\n                    </li>\n                    <li>\n                        <p>Javascript funcional (se\xE7\xF5es espec\xEDficas para fun\xE7\xF5es, arrays e objetos)</p>\n                    </li>\n                    <li>\n                        <p>Javascript ass\xEDncrono (com promises, ajax, axios e fetch API)</p>\n                    </li>\n                    <li>\n                        <p>Webpack e Babel (para uso de recursos modernos em navegadores mais antigos)</p>\n                    </li>\n                    <li>\n                        <p>Node.js (b\xE1sico de Node + Express e MongoDB)</p>\n                    </li>\n                    <li>\n                        <p>Projeto agenda (Um projeto real utilizando tudo o que foi descrito anteriormente)</p>\n                    </li>\n                    <li>\n                        <p>Deploy - Criar, configurar e manter um servidor Linux (inclui configura\xE7\xE3o de v\xE1rias\n                            tecnologias diferentes)</p>\n                    </li>\n                    <li>\n                        <p>Api rest - Criar uma API Rest do zero usando Express, JWT e o Sequelize (com\n                            MariaDB/MySQL).</p>\n                    </li>\n                    <li>\n                        <p>React JS B\xE1sico - Nesta se\xE7\xE3o, criaremos uma lista de tarefas utilizando o React JS e\n                            o localStorage do navegador. </p>\n                    </li>\n                    <li>\n                        <p>React JS Avan\xE7ado - React Hooks, Redux + Redux Saga, Autentica\xE7\xE3o com JWT, Redux\n                            Persist e muito mais.</p>\n                    </li>\n                    <li>\n                        <p>B\xF4nus: Express\xF5es Regulares (Regex)</p>\n                    </li>\n                    <li>\n                        <p>TypeScript - Voc\xEA n\xE3o precisa comprar outro curso para aprender TypeScript</p>\n                    </li>\n                    <li>\n                        <p>Princ\xEDpios da programa\xE7\xE3o orientada a objetos e princ\xEDpios S.O.L.I.D (SOLID)</p>\n                    </li>\n                    <li>\n                        <p>Testes automatizados com o Jest</p>\n                    </li>\n                    <li>\n                        <p>B\xF4nus: Padr\xF5es de projeto (Design patterns)</p>\n                    </li>\n                </ul>\n                <p><strong>Recomenda\xE7\xF5es</strong></p>\n                <p>Recomendo que o aluno conhe\xE7a o b\xE1sico de HTML e CSS para absorver melhor o conhecimento.\n                    (este curso n\xE3o inclui HTML e CSS).</p>\n            </div>\n            <h4>What you\u2019ll learn</h4>\n            <ul>\n                <li>JavaScript B\xE1sico, Funcional e Orientado a Objetos (ES6+, front-end e back-end)</li>\n                <li>TypeScript - um superset do JavaScript com tipagem est\xE1tica (front-end e back-end)</li>\n                <li>Node, Express, MongoDB e MySQL/MariaDB (Back-end)</li>\n                <li>Webpack e Babel (Front-end)</li>\n                <li>Sistema de login com session (front-end e back-end)</li>\n                <li>Sistema de login com JWT (front-end e back-end)</li>\n                <li>Cria\xE7\xE3o de projetos com Node, Express e EJS (front-end e back-end)</li>\n                <li>Configura\xE7\xE3o de um servidor Linux para Deploy (Ubuntu Server)</li>\n                <li>Configura\xE7\xF5es de seguran\xE7a para o servidor (SSH e TLS - Https)</li>\n                <li>Utiliza\xE7\xE3o de noSQL com mongoose (MongoDB)</li>\n                <li>Utiliza\xE7\xE3o de SQL com sequelize (MySQL/MariaDB)</li>\n                <li>Cria\xE7\xE3o de API Rest com Node + Express + Sequelize (back-end)</li>\n                <li>React JS com React Hooks + Redux com Redux Saga (front-end)</li>\n                <li>Princ\xEDpios da programa\xE7\xE3o orientada a objetos</li>\n                <li>Princ\xEDpios S.O.L.I.D</li>\n                <li>Testes automatizados com o Jest</li>\n                <li>Express\xF5es Regulares (B\xF4nus)</li>\n                <li>Padr\xF5es de projeto - Design Patterns (B\xF4nus)</li>\n            </ul>\n            <h4>Are there any course requirements or prerequisites?</h4>\n            <ul>\n                <li>Conhecer HTML e CSS ajudar\xE1 a fixar melhor o conte\xFAdo</li>\n                <li>Computador ou Laptop com Windows, Linux ou Mac</li>\n            </ul>\n            <h4>Who this course is for:</h4>\n            <ul>\n                <li>Para aqueles que desejam aprender JavaScript Moderno (ES6+) do zero</li>\n                <li>Para desenvolvedores experientes que desejam aprimorar seu conhecimento em JS</li>\n                <li>Para desenvolvedores que desejam trabalhar com front-end e back-end (fullstack)</li>\n                <li>Para quem deseja aprender TypeScript</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"course-overview--grid-row--1nKqQ\">\n        <div>Instructor</div>\n        <div class=\"course-overview--wide--37Lev\">\n            <div class=\"instructor-profile--header-row--n0Prm\"><img alt=\"User photo\" aria-label=\"User photo\"\n                    class=\"user-avatar user-avatar--image\" data-purpose=\"user-avatar\" height=\"64\" width=\"64\"\n                    src=\"https://img-a.udemycdn.com/user/200_H/59453841_aec6_2.jpg\">\n                <div class=\"instructor-profile--title-wrapper--2V1u6\">\n                    <div class=\"instructor-profile--title--1rlDt\"><a href=\"/user/leticia-barbosa-silva-3/\"\n                            data-purpose=\"instructor-url\">Luiz Ot\xE1vio Miranda</a></div>\n                    <p>Desenvolvedor de Software</p>\n                </div>\n            </div>\n            <div class=\"instructor-profile--social-links-row--14uvr\"><a href=\"https://twitter.com/OtavioMirandaBR\"\n                    class=\"instructor-profile--social-profile-btn--fs2ve\" target=\"_blank\"\n                    rel=\"noopener noreferrer nofollow\"><span aria-label=\"Twitter\" class=\"udi udi-twitter\"></span></a><a\n                    href=\"https://www.youtube.com/otaviomiranda\" class=\"instructor-profile--social-profile-btn--fs2ve\"\n                    target=\"_blank\" rel=\"noopener noreferrer nofollow\"><span aria-label=\"YouTube\"\n                        class=\"udi udi-youtube\"></span></a><a href=\"https://www.otaviomiranda.com.br/\"\n                    class=\"instructor-profile--social-profile-btn--fs2ve\" target=\"_blank\"\n                    rel=\"noopener noreferrer nofollow\"><span aria-label=\"Personal website\"\n                        class=\"udi udi-globe\"></span></a></div>\n            <div class=\"instructor-profile--description--vCsKv\">\n                <div data-purpose=\"safely-set-inner-html:trusted-html:content\">\n                    <p>Trabalha h\xE1 mais de 12 anos com desenvolvimento de softwares para terceiros usando v\xE1rias\n                        linguagens, libs e frameworks diferentes. </p>\n                    <p>Especializado em desenvolvimento web voltado para e-commerces.</p>\n                    <p>Atua tanto em front-end quanto back-end.</p>\n                    <p>Atuou no setor de provedores de internet, trabalhando com infraestrutura de redes\n                        (wireless, fibra \xF3ptica, cabeamento, etc...). No mesmo seguimento, tamb\xE9m atuou na \xE1rea\n                        de&nbsp; administra\xE7\xE3o de servidores Linux.</p>\n                    <p>Est\xE1 em cont\xEDnuo aprendizado.</p>\n                    <p>Atualmente, mantem softwares pr\xF3prios criados para terceiros e ensina o que sabe para\n                        outros desenvolvedores. </p>\n                    <p>M\xFAsico nas horas vagas.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>";


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


var menuDOM = document.querySelector('#menu');
var menu = {
  home: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getHome"],
  cpf: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getCPF"],
  password: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getPassword"]
};

var setMenu = function setMenu() {
  Object.keys(menu).forEach(function (element) {
    var navMenu = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_1__["createNav"])({
      id: element
    });
    menuDOM.appendChild(navMenu);
    navMenu.addEventListener('click', function () {
      element !== 'home' ? location.replace("/public/".concat(element, "/")) : location.replace("/public/");
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
/* harmony import */ var _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/PassGenerator */ "./src/modules/password/model/PassGenerator.js");

/*
MAIUSCULAS: 65 a 90
MINUSCULAS: 97 a122
NUMEROS: 48 a 57
TODOS CARACTERES: 33 a 126
*/

var checkChar = function checkChar(charCode, password) {
  var strChar = null;
  if (password.small.includes(charCode) && password.lower) return String.fromCharCode(charCode);
  if (password.capital.includes(charCode) && password.upper) return String.fromCharCode(charCode);
  if (password.number.includes(charCode) && password.num) return String.fromCharCode(charCode);
  if (password.special.includes(charCode) && password.specialChar) return String.fromCharCode(charCode);
  return strChar;
};

var createPass = function createPass(password) {
  var newPassword = '';

  while (newPassword.length < password.len) {
    var charCode = password.rand();
    var strChar = checkChar(charCode, password);
    if (strChar !== null) newPassword += strChar;
    console.log(newPassword);
  }

  return newPassword;
};

var control = function control(child) {
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
  return createPass(password);
};

/* harmony default export */ __webpack_exports__["default"] = (control);

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

  _createClass(PassGenerator, [{
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

  this.title = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createH1"])({
    text: 'Password Generator'
  });
  this.form = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createForm"])({
    id: 'formPass',
    method: 'dialog'
  });
  this.span = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createSpan"])({
    id: 'spnPassword',
    text: ''
  });
  this.input = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createInput"])({
    type: 'number',
    id: 'inpQtdChars',
    "class": 'qtdChars'
  });
  this.input.value = 6;
  this.lblChars = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createLabel"])({
    id: 'chars',
    "for": 'inpQtdChars',
    text: 'Number of characters'
  });
  this.checkNumber = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createInput"])({
    type: 'checkbox',
    id: 'inpNumber',
    "class": 'Number'
  });
  this.checkNumber.checked = true;
  this.lblNumber = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createLabel"])({
    id: 'number',
    "for": 'inpNumber',
    text: 'Numbers'
  });
  this.checkUpper = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createInput"])({
    type: 'checkbox',
    id: 'inpUpper',
    "class": 'Upper'
  });
  this.checkUpper.checked = true;
  this.lblUpper = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createLabel"])({
    id: 'upper',
    "for": 'inpUpper',
    text: 'Capital letters'
  });
  this.checkLower = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createInput"])({
    type: 'checkbox',
    id: 'inpLower',
    "class": 'Lower'
  });
  this.checkLower.checked = true;
  this.lblLower = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createLabel"])({
    id: 'lower',
    "for": 'inpLower',
    text: 'Small letters'
  });
  this.checkSpecial = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createInput"])({
    type: 'checkbox',
    id: 'inpSpecial',
    "class": 'Special'
  });
  this.checkSpecial.checked = true;
  this.lblSpecial = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createLabel"])({
    id: 'special',
    "for": 'inpSpecial',
    text: 'Special Characters'
  });
  this.btnSubmit = Object(_assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["createButton"])({
    type: 'submit',
    id: 'btnSubmit',
    text: 'Generate'
  });
  this.form.appendChild(this.title);
  this.form.appendChild(this.span);
  this.form.appendChild(this.lblChars);
  this.lblChars.appendChild(this.input);
  this.form.appendChild(this.lblNumber);
  this.lblNumber.appendChild(this.checkNumber);
  this.form.appendChild(this.lblUpper);
  this.lblUpper.appendChild(this.checkUpper);
  this.form.appendChild(this.lblLower);
  this.lblLower.appendChild(this.checkLower);
  this.form.appendChild(this.lblSpecial);
  this.lblSpecial.appendChild(this.checkSpecial);
  this.form.appendChild(this.btnSubmit);
  this.form.addEventListener('submit', function (event) {
    event.target.children['spnPassword'].innerText = Object(_control_ctrlPassword__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target.children);
  });
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map