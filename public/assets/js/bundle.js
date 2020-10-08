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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/bank.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/bank.css ***!
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
___CSS_LOADER_EXPORT___.push([module.i, ".bank>#option>h1{\r\n    border: none;\r\n    background-color: var(--backGround);\r\n    padding: 1rem;\r\n    margin: 0.8rem 0;\r\n    color: whitesmoke;\r\n    border-radius: 0.3rem 0.3rem 0 0;\r\n}\r\n.bank>h2{\r\n    padding: 1rem;\r\n    text-align: left;\r\n    max-width: 25rem;\r\n}\r\n.bank>h3{\r\n    text-align: right;\r\n    margin-top: -3.5rem;\r\n}\r\n#barOption>label{\r\n    padding: 1rem;\r\n}\r\n\r\n#barOption>label,#barOption>label>input, #barOption>button{\r\n    cursor: pointer;\r\n}\r\n\r\n#option{\r\n    width: 40%;\r\n    min-width: 25rem;\r\n    max-width: 50em;\r\n    margin: 0 auto;\r\n}\r\n\r\n#barOption>input{\r\n    padding: 0.5rem;\r\n}\r\n#option, #optAccount{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n#barOption>label{\r\n    background-color: var(--btnHover);\r\n    \r\n}\r\n#barAccount>label{\r\n    background-color: var(--btnPrimary);\r\n    padding: 0.5rem;\r\n\r\n}\r\n#barAccount>label:first-of-type{\r\n    border-radius: 5rem 0 0 5rem;\r\n}\r\n#barAccount>label:last-of-type{\r\n    border-radius: 0 5rem 5rem 0;\r\n}\r\n#barOption>label, #barAccount>label{\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n\r\n#barOption>label:hover, #barAccount>label:hover{\r\n    box-shadow: var(--contentShadown);\r\n}\r\n\r\n#barOption>label>input, #barAccount>label>input{\r\n    display: none;\r\n}\r\n\r\n#content{\r\n    font-weight: bold;\r\n    display: flex;\r\n    padding: 1rem;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    max-width: 30rem;\r\n    margin: 0 auto;\r\n}\r\n#bankForm{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#bankForm>label{\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    background-color: lightgrey;\r\n    box-shadow: var(--contHovShadown);\r\n    font-weight: bold;\r\n}\r\n#bankForm>label:hover{\r\n    background-color: gray;\r\n    box-shadow: 0 0.1rem 0.1rem gray;\r\n}\r\n#bankForm>div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 65%;\r\n}\r\n#bankForm>div>input{\r\n    max-width: 230%;\r\n    min-width: 7rem;\r\n    text-align: right;\r\n    font-size: 1.5rem;\r\n}\r\n#bankForm>div>button{\r\n    width: 6.5rem;\r\n    text-transform: uppercase;\r\n    font-size: 0.8rem;\r\n    border-radius: 0 5rem 5rem 0;\r\n    background-color: var(--backGround);\r\n    color: whitesmoke;\r\n}\r\n#bankForm>div>button:hover{\r\n    background-color: yellowgreen;\r\n    color: black;\r\n}\r\n#bankForm>div>button:focus{\r\n    outline: none;\r\n}", "",{"version":3,"sources":["webpack://src/assets/css/bank.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,mCAAmC;IACnC,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,iCAAiC;;AAErC;AACA;IACI,mCAAmC;IACnC,eAAe;;AAEnB;AACA;IACI,4BAA4B;AAChC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,iCAAiC;AACrC;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,2BAA2B;IAC3B,iCAAiC;IACjC,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,iBAAiB;IACjB,4BAA4B;IAC5B,mCAAmC;IACnC,iBAAiB;AACrB;AACA;IACI,6BAA6B;IAC7B,YAAY;AAChB;AACA;IACI,aAAa;AACjB","sourcesContent":[".bank>#option>h1{\r\n    border: none;\r\n    background-color: var(--backGround);\r\n    padding: 1rem;\r\n    margin: 0.8rem 0;\r\n    color: whitesmoke;\r\n    border-radius: 0.3rem 0.3rem 0 0;\r\n}\r\n.bank>h2{\r\n    padding: 1rem;\r\n    text-align: left;\r\n    max-width: 25rem;\r\n}\r\n.bank>h3{\r\n    text-align: right;\r\n    margin-top: -3.5rem;\r\n}\r\n#barOption>label{\r\n    padding: 1rem;\r\n}\r\n\r\n#barOption>label,#barOption>label>input, #barOption>button{\r\n    cursor: pointer;\r\n}\r\n\r\n#option{\r\n    width: 40%;\r\n    min-width: 25rem;\r\n    max-width: 50em;\r\n    margin: 0 auto;\r\n}\r\n\r\n#barOption>input{\r\n    padding: 0.5rem;\r\n}\r\n#option, #optAccount{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n#barOption>label{\r\n    background-color: var(--btnHover);\r\n    \r\n}\r\n#barAccount>label{\r\n    background-color: var(--btnPrimary);\r\n    padding: 0.5rem;\r\n\r\n}\r\n#barAccount>label:first-of-type{\r\n    border-radius: 5rem 0 0 5rem;\r\n}\r\n#barAccount>label:last-of-type{\r\n    border-radius: 0 5rem 5rem 0;\r\n}\r\n#barOption>label, #barAccount>label{\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n\r\n#barOption>label:hover, #barAccount>label:hover{\r\n    box-shadow: var(--contentShadown);\r\n}\r\n\r\n#barOption>label>input, #barAccount>label>input{\r\n    display: none;\r\n}\r\n\r\n#content{\r\n    font-weight: bold;\r\n    display: flex;\r\n    padding: 1rem;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    max-width: 30rem;\r\n    margin: 0 auto;\r\n}\r\n#bankForm{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#bankForm>label{\r\n    padding: 0.5rem;\r\n    font-size: 0.8rem;\r\n    background-color: lightgrey;\r\n    box-shadow: var(--contHovShadown);\r\n    font-weight: bold;\r\n}\r\n#bankForm>label:hover{\r\n    background-color: gray;\r\n    box-shadow: 0 0.1rem 0.1rem gray;\r\n}\r\n#bankForm>div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 65%;\r\n}\r\n#bankForm>div>input{\r\n    max-width: 230%;\r\n    min-width: 7rem;\r\n    text-align: right;\r\n    font-size: 1.5rem;\r\n}\r\n#bankForm>div>button{\r\n    width: 6.5rem;\r\n    text-transform: uppercase;\r\n    font-size: 0.8rem;\r\n    border-radius: 0 5rem 5rem 0;\r\n    background-color: var(--backGround);\r\n    color: whitesmoke;\r\n}\r\n#bankForm>div>button:hover{\r\n    background-color: yellowgreen;\r\n    color: black;\r\n}\r\n#bankForm>div>button:focus{\r\n    outline: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.i, "form{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\n#btnSubmit{\r\n    color: var(--primary);\r\n    text-transform: uppercase;\r\n    background-color: var(--backGround);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n#btnSubmit:hover{\r\n    background-color: darkcyan;\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n#spnPassword{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n    color: darkcyan;\r\n}\r\n#spnValidate{\r\n    font-weight: bold;\r\n}\r\n.errorText{\r\n    color: red;\r\n    font-weight: bold;\r\n}", "",{"version":3,"sources":["webpack://src/assets/css/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,mCAAmC;IACnC,iCAAiC;AACrC;AACA;IACI,0BAA0B;IAC1B,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,UAAU;IACV,iBAAiB;AACrB","sourcesContent":["form{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nlabel{\r\n    cursor: pointer;\r\n    padding: 1rem;\r\n}\r\ninput{\r\n    margin-left: 0.3rem;\r\n    padding: 0.5rem;\r\n    min-width: 1rem;\r\n    min-height: 1rem;\r\n}\r\n#btnSubmit{\r\n    color: var(--primary);\r\n    text-transform: uppercase;\r\n    background-color: var(--backGround);\r\n    box-shadow: var(--contentShadown);\r\n}\r\n#btnSubmit:hover{\r\n    background-color: darkcyan;\r\n    box-shadow: var(--contHovShadown);\r\n}\r\n#spnPassword{\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    margin-bottom: 1rem;\r\n    color: darkcyan;\r\n}\r\n#spnValidate{\r\n    font-weight: bold;\r\n}\r\n.errorText{\r\n    color: red;\r\n    font-weight: bold;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/css/bank.css":
/*!*********************************!*\
  !*** ./src/assets/css/bank.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./bank.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/bank.css");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dom; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = function Dom() {
  _classCallCheck(this, Dom);

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
    return span;
  };

  this.createDiv = function (args) {
    var div = document.createElement('div');
    div.id = args.id;
    div.innerText = args.text;
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
    input["class"] = args["class"];
    return input;
  };

  this.createButton = function (args) {
    var button = document.createElement('button');
    button.type = args.type;
    button.id = args.id;
    button.innerText = args.text;
    return button;
  };
};



/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! exports provided: getCPF, getHome, getPassword, getBank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCPF", function() { return getCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPassword", function() { return getPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBank", function() { return getBank; });
/* harmony import */ var _modules_cpf_view_vwCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/cpf/view/vwCPF */ "./src/modules/cpf/view/vwCPF.js");
/* harmony import */ var _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/password/view/vwPassword */ "./src/modules/password/view/vwPassword.js");
/* harmony import */ var _modules_bank_view_vwBank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/bank/view/vwBank */ "./src/modules/bank/view/vwBank.js");
/* harmony import */ var _modules_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/home/Home */ "./src/modules/home/Home.js");




var path = window.location.pathname;
var container = document.querySelector('.container');

var getHome = function getHome() {
  container.innerHTML = _modules_home_Home__WEBPACK_IMPORTED_MODULE_3__["Home"];
};

var getCPF = function getCPF() {
  var clsForm = new _modules_cpf_view_vwCPF__WEBPACK_IMPORTED_MODULE_0__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('cpf');
};

var getPassword = function getPassword() {
  var clsForm = new _modules_password_view_vwPassword__WEBPACK_IMPORTED_MODULE_1__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('password');
};

var getBank = function getBank() {
  var clsForm = new _modules_bank_view_vwBank__WEBPACK_IMPORTED_MODULE_2__["default"]();
  container.appendChild(clsForm.form);
  container.classList.add('bank');
  clsForm.form.insertAdjacentElement('afterend', clsForm.h2);
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

  case '/public/bank/':
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
/* harmony import */ var _assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/menu.css */ "./src/assets/css/menu.css");
/* harmony import */ var _assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_menu_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/css/home.css */ "./src/assets/css/home.css");
/* harmony import */ var _assets_css_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/form.css */ "./src/assets/css/form.css");
/* harmony import */ var _assets_css_form_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_form_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_css_bank_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/css/bank.css */ "./src/assets/css/bank.css");
/* harmony import */ var _assets_css_bank_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_css_bank_css__WEBPACK_IMPORTED_MODULE_5__);







(function () {
  Object(_modules_menu_Menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/***/ }),

/***/ "./src/modules/bank/control/ctrlAccess.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/ctrlAccess.js ***!
  \************************************************/
/*! exports provided: setAccess, setLogout, setUserAccess, checkAccess, revokAccess, getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccess", function() { return setAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogout", function() { return setLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserAccess", function() { return setUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAccess", function() { return checkAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokAccess", function() { return revokAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var _ctrlAccount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrlAccount.js */ "./src/modules/bank/control/ctrlAccount.js");


var getSession = function getSession() {
  var strAccess = localStorage.getItem('Access');
  if (!strAccess) return false;
  var access = JSON.parse(strAccess);
  return access;
};

var checkAccess = function checkAccess() {
  var access = getSession();
  if (!access) return true;
  var date = new Date(access.date);
  date.setHours(date.getHours + 3);
  var now = new Date();
  now.setHours(now.getHours + 3);
  now.setHours(now.getHours() - 1);
  return now > date;
};

var revokAccess = function revokAccess() {
  localStorage.removeItem('Access');
};

var setLogout = function setLogout() {
  revokAccess();
  window.location.reload();
};

var setAccess = function setAccess(e) {
  var clientName = e.target.children['inpName'].value;
  var numAccount = e.target.children['inpAccount'].value;
  var access = Object(_ctrlAccount_js__WEBPACK_IMPORTED_MODULE_0__["getClient"])(clientName, numAccount);
  var elChild = document.querySelector("#".concat(e.target.id));
  elChild.remove();
  setUserAccess(access);
};

var setUserAccess = function setUserAccess(access) {
  if (!access) return;
  access.registerAccess(access);
};



/***/ }),

/***/ "./src/modules/bank/control/ctrlAccount.js":
/*!*************************************************!*\
  !*** ./src/modules/bank/control/ctrlAccount.js ***!
  \*************************************************/
/*! exports provided: setAccount, getClient, withdraw, deposit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccount", function() { return setAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClient", function() { return getClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdraw", function() { return withdraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deposit", function() { return deposit; });
/* harmony import */ var _model_pessoa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/pessoa.js */ "./src/modules/bank/model/pessoa.js");
/* harmony import */ var _model_account_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/account.js */ "./src/modules/bank/model/account.js");
/* harmony import */ var _model_accCurrent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/accCurrent.js */ "./src/modules/bank/model/accCurrent.js");
/* harmony import */ var _model_accSavings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/accSavings.js */ "./src/modules/bank/model/accSavings.js");
/* harmony import */ var _model_access_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/access.js */ "./src/modules/bank/model/access.js");
/* harmony import */ var _ctrlAccess_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ctrlAccess.js */ "./src/modules/bank/control/ctrlAccess.js");







var getAccounts = function getAccounts() {
  var clients = JSON.parse(localStorage.getItem('Client'));
  return clients === null ? {} : clients;
};

var registerPessoa = function registerPessoa(clients) {
  var users = JSON.stringify(clients);
  localStorage.setItem('Client', users);
};

var getClient = function getClient(clientName, numAccount) {
  var clients = getAccounts();
  var client = clients[numAccount];

  if (!client) {
    alert('Account not found!');
    return;
  }

  var check = clientName === client.Account.name && numAccount === client.Account.number;

  if (check) {
    var user = new _model_pessoa_js__WEBPACK_IMPORTED_MODULE_0__["default"](client.Account.name, client.Account.id);
    var account = new _model_account_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, client.Account.number, client.Account.balance, client.Account.date);
    var accCurrent = new _model_accCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, client.limit);
    var accSavings = new _model_accSavings_js__WEBPACK_IMPORTED_MODULE_3__["default"](account, client.income);
    account.balance = accSavings.sumIncome();
    var access = new _model_access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, accCurrent.limit, accSavings.income);
    return access;
  } else {
    return false;
  }
};

var setAccount = function setAccount(e) {
  var clients = getAccounts();
  var name = e.target.children['inpName'].value;
  var id = e.target.children['inpID'].value;
  var user = new _model_pessoa_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, id);
  var account = new _model_account_js__WEBPACK_IMPORTED_MODULE_1__["default"](user);
  account.createNumber();
  var current = new _model_accCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, 100);
  var savings = new _model_accSavings_js__WEBPACK_IMPORTED_MODULE_3__["default"](account, 0);
  var client = new _model_access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, current.limit, savings.income);
  clients[account.number] = client;
  registerPessoa(clients);
  var elChild = document.querySelector("#".concat(e.target.id));
  elChild.remove();
  Object(_ctrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["setUserAccess"])(client);
};

var updateAccount = function updateAccount(account, current, session) {
  account.balance = current.balance;
  var client = new _model_access_js__WEBPACK_IMPORTED_MODULE_4__["default"](account, current.limit, session.income);
  var clients = getAccounts();
  clients[account.number] = client;
  registerPessoa(clients);
  Object(_ctrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["setUserAccess"])(client);
};

var withdraw = function withdraw(value) {
  var session = Object(_ctrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["getSession"])();
  var account = new _model_account_js__WEBPACK_IMPORTED_MODULE_1__["default"](session.Account, session.Account.number, session.Account.balance);
  account.setDate();
  var current = new _model_accCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, session.limit);
  current.withdraw(value);
  updateAccount(account, current, session);
};

var deposit = function deposit(value) {
  var session = Object(_ctrlAccess_js__WEBPACK_IMPORTED_MODULE_5__["getSession"])();
  var account = new _model_account_js__WEBPACK_IMPORTED_MODULE_1__["default"](session.Account, session.Account.number, session.Account.balance);
  account.setDate();
  var current = new _model_accCurrent_js__WEBPACK_IMPORTED_MODULE_2__["default"](account, session.limit);
  current.deposit(value);
  updateAccount(account, current, session);
};



/***/ }),

/***/ "./src/modules/bank/control/ctrlAction.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/ctrlAction.js ***!
  \************************************************/
/*! exports provided: action, optDeposit, optWithdraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optDeposit", function() { return optDeposit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optWithdraw", function() { return optWithdraw; });
/* harmony import */ var _view_vwResume__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/vwResume */ "./src/modules/bank/view/vwResume.js");
/* harmony import */ var _ctrlAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctrlAccount */ "./src/modules/bank/control/ctrlAccount.js");



var optWithdraw = function optWithdraw(inpWithdraw, bntWithdraw) {
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

var optDeposit = function optDeposit(inpDeposit, bntDeposit) {
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

var action = function action(e) {
  var action = e.submitter.value;
  var content = document.querySelector('#content');
  var optAccount = document.querySelector('#optAccount');

  switch (action) {
    case 'Withdraw':
      var withdrawValue = Number(e.target[0].value).toFixed(2);
      Object(_ctrlAccount__WEBPACK_IMPORTED_MODULE_1__["withdraw"])(withdrawValue);
      e.target.remove();
      content.remove();
      optAccount.remove();
      new _view_vwResume__WEBPACK_IMPORTED_MODULE_0__["default"]();
      break;

    case 'Deposit':
      var depositValue = Number(e.target[0].value).toFixed(2);
      Object(_ctrlAccount__WEBPACK_IMPORTED_MODULE_1__["deposit"])(depositValue);
      e.target.remove();
      content.remove();
      optAccount.remove();
      new _view_vwResume__WEBPACK_IMPORTED_MODULE_0__["default"]();
      break;
  }
};



/***/ }),

/***/ "./src/modules/bank/control/ctrlBank.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/control/ctrlBank.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vwAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/vwAccess */ "./src/modules/bank/view/vwAccess.js");
/* harmony import */ var _view_vwAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/vwAccount */ "./src/modules/bank/view/vwAccount.js");
/* harmony import */ var _view_vwResume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume */ "./src/modules/bank/view/vwResume.js");
/* harmony import */ var _view_vwLogout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/vwLogout */ "./src/modules/bank/view/vwLogout.js");
/* harmony import */ var _ctrlAccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ctrlAccess */ "./src/modules/bank/control/ctrlAccess.js");






var resumeAccount = function resumeAccount() {
  if (!document.querySelector('#content')) {
    var btnLogout = document.querySelector('#btnLogout');
    if (btnLogout) btnLogout.remove();
    new _view_vwResume__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
};

var accountForm = function accountForm() {
  if (!document.querySelector('#formAccount')) {
    var formAccess = document.querySelector('#formAccess');
    if (formAccess) formAccess.remove();
    new _view_vwAccount__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
};

var accessForm = function accessForm() {
  if (!document.querySelector('#formAccess')) {
    var formAccount = document.querySelector('#formAccount');
    if (formAccount) formAccount.remove();
    new _view_vwAccess__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
};

var logoutForm = function logoutForm() {
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

var setOption = function setOption(event) {
  var bankForm = document.querySelector('#bankForm');
  if (bankForm) bankForm.remove();
  var optUser = event.target.children[0].value;
  var check = event.target.children[0];
  check.checked = true;

  switch (optUser) {
    case 'account':
      Object(_ctrlAccess__WEBPACK_IMPORTED_MODULE_4__["checkAccess"])() ? accountForm() : logoutForm();
      break;

    case 'access':
      Object(_ctrlAccess__WEBPACK_IMPORTED_MODULE_4__["checkAccess"])() ? accessForm() : resumeAccount();
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setOption);

/***/ }),

/***/ "./src/modules/bank/control/ctrlResume.js":
/*!************************************************!*\
  !*** ./src/modules/bank/control/ctrlResume.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ctrlAccess__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrlAccess */ "./src/modules/bank/control/ctrlAccess.js");
/* harmony import */ var _view_vwCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/vwCurrent */ "./src/modules/bank/view/vwCurrent.js");
/* harmony import */ var _view_vwSavings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwSavings */ "./src/modules/bank/view/vwSavings.js");




var createSavings = function createSavings(session) {
  if (!document.querySelector('#spnIncome')) {
    var spnLimit = document.querySelector('#spnLimit');
    if (spnLimit) spnLimit.remove();
    if (document.querySelector('#bankForm')) bankForm.remove();
    new _view_vwSavings__WEBPACK_IMPORTED_MODULE_2__["default"](session);
  }
};

var createCurrent = function createCurrent(session) {
  if (!document.querySelector('#spnLimit')) {
    if (document.querySelector('#spnIncome')) spnIncome.remove();
    if (document.querySelector('#bankForm')) bankForm.remove();
    new _view_vwCurrent__WEBPACK_IMPORTED_MODULE_1__["default"](session);
  }
};

var resumeAccount = function resumeAccount(e) {
  var session = Object(_ctrlAccess__WEBPACK_IMPORTED_MODULE_0__["getSession"])();
  if (!e) return session;
  var optAccount = e.target.children[0].value;
  e.target.children[0].checked = true;

  switch (optAccount) {
    case 'savings':
      createSavings(session);
      break;

    case 'current':
      createCurrent(session);
      break;
  }

  var numAccount = document.querySelector('#numAccount');
  if (numAccount) numAccount.remove();
};

/* harmony default export */ __webpack_exports__["default"] = (resumeAccount);

/***/ }),

/***/ "./src/modules/bank/model/accCurrent.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/model/accCurrent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Current; });
/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.js */ "./src/modules/bank/model/account.js");
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
}(_account_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/accSavings.js":
/*!**********************************************!*\
  !*** ./src/modules/bank/model/accSavings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Savings; });
/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.js */ "./src/modules/bank/model/account.js");
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
}(_account_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/access.js":
/*!******************************************!*\
  !*** ./src/modules/bank/model/access.js ***!
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

/***/ "./src/modules/bank/model/account.js":
/*!*******************************************!*\
  !*** ./src/modules/bank/model/account.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ "./src/modules/bank/model/pessoa.js");
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
}(_pessoa__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/modules/bank/model/pessoa.js":
/*!******************************************!*\
  !*** ./src/modules/bank/model/pessoa.js ***!
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
/* harmony import */ var _control_ctrlAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlAccess */ "./src/modules/bank/control/ctrlAccess.js");
/* harmony import */ var _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume.js */ "./src/modules/bank/view/vwResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var AccessForm = function AccessForm() {
  _classCallCheck(this, AccessForm);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.subTitle = document.querySelector('#subTitle');
  this.subTitle.innerText = 'Access account';
  this.formAccess = this.dom.createForm({
    id: 'formAccess',
    method: 'dialog',
    action: ''
  });
  this.inpName = this.dom.createInput({
    type: 'text',
    id: 'inpName'
  });
  this.inpName.name = 'nameAccount';
  this.inpName.placeholder = 'Type your name';
  this.inpName.required = true;
  this.inpAccount = this.dom.createInput({
    type: 'text',
    id: 'inpAccount'
  });
  this.inpAccount.name = 'numAccount';
  this.inpAccount.placeholder = 'Enter the account number';
  this.inpAccount.required = true;
  this.bntSubmit = this.dom.createButton({
    type: 'submit',
    id: 'btnAccess',
    text: 'Access'
  });
  this.bntSubmit.value = 'Access';
  this.formAccess.appendChild(this.inpName);
  this.formAccess.appendChild(this.inpAccount);
  this.formAccess.appendChild(this.bntSubmit);
  this.subTitle.insertAdjacentElement('afterend', this.formAccess);
  this.formAccess.addEventListener('submit', function (event) {
    event.preventDefault();
    Object(_control_ctrlAccess__WEBPACK_IMPORTED_MODULE_1__["setAccess"])(event);
    new _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
/* harmony import */ var _control_ctrlAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlAccount */ "./src/modules/bank/control/ctrlAccount.js");
/* harmony import */ var _view_vwResume_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/vwResume.js */ "./src/modules/bank/view/vwResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var accountForm = function accountForm() {
  _classCallCheck(this, accountForm);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.subTitle = document.querySelector('#subTitle');
  this.subTitle.innerText = 'Create new account';
  this.formAccount = this.dom.createForm({
    id: 'formAccount',
    action: '',
    method: 'dialog'
  });
  this.inpName = this.dom.createInput({
    type: 'text',
    id: 'inpName'
  });
  this.inpName.name = 'nameAccount';
  this.inpName.placeholder = 'Type your name';
  this.inpName.required = true;
  this.inpAccount = this.dom.createInput({
    type: 'text',
    id: 'inpID'
  });
  this.inpAccount.name = 'numID';
  this.inpAccount.placeholder = 'Type your ID number';
  this.inpAccount.required = true;
  this.bntSubmit = this.dom.createButton({
    type: 'submit',
    text: 'Create',
    id: 'btnAccount'
  });
  this.bntSubmit.value = 'Create';
  this.formAccount.appendChild(this.inpName);
  this.formAccount.appendChild(this.inpAccount);
  this.formAccount.appendChild(this.bntSubmit);
  this.subTitle.insertAdjacentElement('afterend', this.formAccount);
  this.formAccount.addEventListener('submit', function (event) {
    event.preventDefault();
    Object(_control_ctrlAccount__WEBPACK_IMPORTED_MODULE_1__["setAccount"])(event);
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
/* harmony import */ var _control_ctrlAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlAction */ "./src/modules/bank/control/ctrlAction.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Action = function Action() {
  var _this = this;

  _classCallCheck(this, Action);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.bankForm = this.dom.createForm({
    id: 'bankForm',
    action: '',
    method: 'dialog'
  });
  this.labelWithdraw = this.dom.createLabel({
    "for": 'inpWithdraw',
    text: 'Withdraw',
    id: 'lblWidraw'
  });
  this.inpWithdraw = this.dom.createInput({
    type: 'number',
    id: 'inpWithdraw'
  });
  this.inpWithdraw.placeholder = '0.00';
  this.inpWithdraw.step = '0.01';
  this.inpWithdraw.name = 'withdraw';
  this.inpWithdraw.required = true;
  this.bntWithdraw = this.dom.createButton({
    type: 'submit',
    text: 'Withdraw',
    id: 'btnWithdraw'
  });
  this.bntWithdraw.value = 'Withdraw';
  this.labelDeposit = this.dom.createLabel({
    "for": 'inpDeposit',
    text: 'Deposit',
    id: 'lblDeposit'
  });
  this.inpDeposit = this.dom.createInput({
    type: 'number',
    id: 'inpDeposit'
  });
  this.inpDeposit.placeholder = '0.00';
  this.inpDeposit.step = '0.01';
  this.inpDeposit.name = 'deposit';
  this.inpDeposit.required = true;
  this.bntDeposit = this.dom.createButton({
    type: 'submit',
    text: 'Deposit',
    id: 'btnDeposit'
  });
  this.bntDeposit.value = 'Deposit';
  this.dvInput = this.dom.createDiv({
    id: 'dvInput',
    text: ''
  });
  this.bankForm.appendChild(this.labelWithdraw);
  this.bankForm.appendChild(this.labelDeposit);
  this.bankForm.appendChild(this.dvInput);
  this.labelWithdraw.addEventListener('click', function (event) {
    event.preventDefault();
    Object(_control_ctrlAction__WEBPACK_IMPORTED_MODULE_1__["optWithdraw"])(_this.inpWithdraw, _this.bntWithdraw);
  });
  this.labelDeposit.addEventListener('click', function (event) {
    event.preventDefault();
    Object(_control_ctrlAction__WEBPACK_IMPORTED_MODULE_1__["optDeposit"])(_this.inpDeposit, _this.bntDeposit);
  });
  this.bankForm.addEventListener('submit', function (event) {
    event.preventDefault();
    Object(_control_ctrlAction__WEBPACK_IMPORTED_MODULE_1__["action"])(event);
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
/* harmony import */ var _control_ctrlBank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlBank */ "./src/modules/bank/control/ctrlBank.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BankForm = function BankForm() {
  _classCallCheck(this, BankForm);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.h1 = this.dom.createH1({
    text: 'Bank'
  });
  this.h2 = this.dom.createH2({
    text: 'Select an option'
  });
  this.h2.id = 'subTitle';
  this.form = this.dom.createForm({
    id: 'option',
    method: 'dialog',
    action: ''
  });
  this.labelAcc = this.dom.createLabel({
    id: 'accAccount',
    text: 'Access Account',
    "for": 'accAccount'
  });
  this.accAccount = this.dom.createInput({
    type: 'radio',
    id: 'accAccount'
  });
  this.accAccount.value = 'access';
  this.accAccount.name = 'optAccount';
  this.labelNew = this.dom.createLabel({
    id: 'newAccount',
    text: 'Create Account',
    "for": 'newAccount'
  });
  this.newAccount = this.dom.createInput({
    type: 'radio',
    id: 'newAccount'
  });
  this.newAccount.value = 'account';
  this.newAccount.name = 'optAccount';
  this.dvContent = this.dom.createDiv({
    id: 'barOption',
    text: ''
  });
  this.form.appendChild(this.h1);
  this.form.appendChild(this.dvContent);
  this.dvContent.appendChild(this.labelAcc);
  this.labelAcc.appendChild(this.accAccount);
  this.dvContent.appendChild(this.labelNew);
  this.labelNew.appendChild(this.newAccount);
  this.form.addEventListener('click', function (event) {
    event.preventDefault();
    Object(_control_ctrlBank__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CreateCurrent = /*#__PURE__*/function (_Action) {
  _inherits(CreateCurrent, _Action);

  var _super = _createSuper(CreateCurrent);

  function CreateCurrent(session) {
    var _this;

    _classCallCheck(this, CreateCurrent);

    _this = _super.call(this, _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]);
    _this.session = session;
    _this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.spnLimit = _this.dom.createSpan({
      id: 'spnLimit',
      text: 'Limit: R$ '
    });
    _this.content = document.querySelector('#content');

    _this.content.appendChild(_this.spnLimit);

    _this.spnLimit.innerText += Number(session.limit).toFixed(2);

    _this.content.insertAdjacentElement('afterend', new _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]().bankForm);

    return _this;
  }

  return CreateCurrent;
}(_vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
/* harmony import */ var _control_ctrlAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlAccess */ "./src/modules/bank/control/ctrlAccess.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var LogoutForm = function LogoutForm() {
  _classCallCheck(this, LogoutForm);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.subTitle = document.querySelector('#subTitle');
  this.subTitle.innerText = 'Logout first';
  this.btnLogout = this.dom.createButton({
    type: 'button',
    text: 'Logout',
    id: 'btnLogout'
  });
  this.btnLogout.value = 'Logout';
  this.subTitle.insertAdjacentElement('afterend', this.btnLogout);
  this.btnLogout.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
    Object(_control_ctrlAccess__WEBPACK_IMPORTED_MODULE_1__["setLogout"])();
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
/* harmony import */ var _control_ctrlResume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../control/ctrlResume */ "./src/modules/bank/control/ctrlResume.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ResumeAccount = function ResumeAccount() {
  _classCallCheck(this, ResumeAccount);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.subtitle = document.querySelector('#subTitle');
  this.formOptAccount = this.dom.createForm({
    id: 'optAccount',
    action: '',
    method: 'dialog'
  });
  this.dvBarOption = this.dom.createDiv({
    id: 'barAccount',
    text: ''
  });
  this.labelCurrent = this.dom.createLabel({
    id: 'inpCurrent',
    text: 'Current Account',
    "for": 'inpCurrent'
  });
  this.inpCurrent = this.dom.createInput({
    type: 'radio',
    id: 'inpCurrent'
  });
  this.inpCurrent.name = 'optAccount';
  this.inpCurrent.value = 'current';
  this.labelSavings = this.dom.createLabel({
    id: 'inpSavings',
    text: 'Savings Account',
    "for": 'inpSavings'
  });
  this.inpSavings = this.dom.createInput({
    type: 'radio',
    id: 'inpSavings'
  });
  this.inpSavings.name = 'optAccount';
  this.inpSavings.value = 'savings';
  this.content = this.dom.createDiv({
    id: 'content',
    text: ''
  });
  this.balance = this.dom.createSpan({
    id: 'spnBalance',
    text: 'Balance: R$ '
  });
  this.formOptAccount.appendChild(this.dvBarOption);
  this.dvBarOption.appendChild(this.labelCurrent);
  this.labelCurrent.appendChild(this.inpCurrent);
  this.dvBarOption.appendChild(this.labelSavings);
  this.labelSavings.appendChild(this.inpSavings);
  this.content.appendChild(this.balance);
  this.subtitle.insertAdjacentElement('afterend', this.formOptAccount);
  this.formOptAccount.insertAdjacentElement('afterend', this.content);
  this.session = Object(_control_ctrlResume__WEBPACK_IMPORTED_MODULE_1__["default"])();
  this.subtitle.innerText = "Ol\xE1, ".concat(this.session.Account.name, "!");
  this.h3 = this.dom.createH3({
    text: "Acc: ".concat(this.session.Account.number)
  });
  this.h3.id = 'numAccount';
  this.subtitle.insertAdjacentElement('afterend', this.h3);
  this.balance.innerText += Number(this.session.Account.balance).toFixed(2);
  this.formOptAccount.addEventListener('click', function (event) {
    event.preventDefault();
    Object(_control_ctrlResume__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CreateSavings = /*#__PURE__*/function (_Action) {
  _inherits(CreateSavings, _Action);

  var _super = _createSuper(CreateSavings);

  function CreateSavings(session) {
    var _this;

    _classCallCheck(this, CreateSavings);

    _this = _super.call(this, _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]);
    _this.session = session;
    _this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
    _this.spnIncome = _this.dom.createSpan({
      id: 'spnIncome',
      text: 'Income: R$ '
    });
    _this.content = document.querySelector('#content');

    _this.content.appendChild(_this.spnIncome);

    _this.spnIncome.innerText += Number(_this.session.income.toFixed(2));

    _this.content.insertAdjacentElement('afterend', new _vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]().bankForm);

    return _this;
  }

  return CreateSavings;
}(_vwAction__WEBPACK_IMPORTED_MODULE_1__["default"]);



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
  var _this = this;

  _classCallCheck(this, CpfForm);

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.title = this.dom.createH1({
    text: 'Valid CPF Generator'
  });
  this.form = this.dom.createForm({
    id: 'formCPF',
    method: 'dialog'
  });
  this.label = this.dom.createLabel({
    id: 'lblCPF',
    "for": 'inpCPF',
    text: 'Type the CPF to check if is valid'
  });
  this.input = this.dom.createInput({
    type: 'text',
    id: 'inpCPF'
  });
  this.input.placeholder = '___.___.___-__';
  this.input.maxLength = 14;
  this.input.minLength = 14;
  this.span = this.dom.createSpan({
    id: 'spnValidate',
    text: ''
  });
  this.button = this.dom.createButton({
    type: 'submit',
    id: 'btnSubmit',
    text: 'Generate'
  });
  this.form.appendChild(this.title);
  this.form.appendChild(this.label);
  this.form.appendChild(this.input);
  this.form.appendChild(this.span);
  this.form.appendChild(this.button);
  this.form.addEventListener('submit', function (event) {
    _this.input.value = Object(_control_ctrlCPF__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
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
var dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_1__["default"]();
var menu = {
  home: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getHome"],
  cpf: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getCPF"],
  password: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getPassword"],
  bank: _assets_js_main__WEBPACK_IMPORTED_MODULE_0__["getBank"]
};

var setMenu = function setMenu() {
  Object.keys(menu).forEach(function (element) {
    var navMenu = dom.createNav({
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
    var charCode = _model_PassGenerator__WEBPACK_IMPORTED_MODULE_0__["default"].rand();
    var strChar = checkChar(charCode, password);
    if (strChar !== null) newPassword += strChar;
  }

  return newPassword;
};

var createError = function createError(input, msg) {
  console.log(input['special']);
  var span = document.createElement('span');
  span.classList.add('errorText');
  span.id = 'error';
  span.innerText = msg;
  input['special'].insertAdjacentElement('afterend', span);
};

var ctrlPass = function ctrlPass(child) {
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
    createError(child, 'Select an option.');
    return 'Nothing Selected';
  } else {
    return createPass(password);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ctrlPass);

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

  this.dom = new _assets_js_dom__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.title = this.dom.createH1({
    text: 'Password Generator'
  });
  this.form = this.dom.createForm({
    id: 'formPass',
    method: 'dialog'
  });
  this.span = this.dom.createSpan({
    id: 'spnPassword',
    text: ''
  });
  this.lblChars = this.dom.createLabel({
    id: 'chars',
    "for": 'inpQtdChars',
    text: 'Number of characters'
  });
  this.input = this.dom.createInput({
    type: 'number',
    id: 'inpQtdChars',
    "class": 'qtdChars'
  });
  this.input.value = 6;
  this.input.maxlength = '2';
  this.input.max = 12;
  this.input.minlength = '1';
  this.input.min = 6;
  this.input.required = true;
  this.lblNumber = this.dom.createLabel({
    id: 'number',
    "for": 'inpNumber',
    text: 'Numbers'
  });
  this.checkNumber = this.dom.createInput({
    type: 'checkbox',
    id: 'inpNumber',
    "class": 'Number'
  });
  this.checkNumber.checked = true;
  this.lblUpper = this.dom.createLabel({
    id: 'upper',
    "for": 'inpUpper',
    text: 'Capital letters'
  });
  this.checkUpper = this.dom.createInput({
    type: 'checkbox',
    id: 'inpUpper',
    "class": 'Upper'
  });
  this.checkUpper.checked = true;
  this.lblLower = this.dom.createLabel({
    id: 'lower',
    "for": 'inpLower',
    text: 'Small letters'
  });
  this.checkLower = this.dom.createInput({
    type: 'checkbox',
    id: 'inpLower',
    "class": 'Lower'
  });
  this.checkLower.checked = true;
  this.lblSpecial = this.dom.createLabel({
    id: 'special',
    "for": 'inpSpecial',
    text: 'Special Characters'
  });
  this.checkSpecial = this.dom.createInput({
    type: 'checkbox',
    id: 'inpSpecial',
    "class": 'Special'
  });
  this.checkSpecial.checked = true;
  this.btnSubmit = this.dom.createButton({
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
    event.preventDefault();
    event.target.children['spnPassword'].innerText = Object(_control_ctrlPassword__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target.children);
  });
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map