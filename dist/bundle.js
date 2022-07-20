/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sea.jpg */ "./src/images/sea.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/wood.jpg */ "./src/images/wood.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/parrot.jpg */ "./src/images/parrot.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gold.jpg */ "./src/images/gold.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    min-width: 100vw;\n    max-width: 100vw;\n    margin: 0;\n    padding: 0; \n    font-family: 'Luxurious Roman', cursive;\n    color:antiquewhite;\n}\n\nbutton{\n    font-family: 'Luxurious Roman', cursive;\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\nbody{\n    min-height: 100vh;\n    min-width: 100vw;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\n.page-container{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    min-width: 500px;\n    width: 100%;\n    display: grid;\n    grid-template-rows: .8fr .8fr 80% .5fr .5fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n}\n\n.title{\n    grid-row: 1;\n    justify-self: center;\n    align-self: center;\n    text-align: center;\n    background-color: black;\n    padding: 0 10px;\n}\n\n.new-game-button-container{\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n}\n\n.game-container{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    min-width: 500px;\n    border: 2px solid black;\n    width: fit-content;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-column: 1/ 4;\n    justify-content: center;\n}\n\n.user-container,\n.ai-container{\n    min-width: 250px;\n    max-width: 80vw;\n    justify-content: center;\n    justify-items: center;\n    \n}\n\n.player-title{\n    border: .5px solid black;\n    width: 80%;\n    height: 90%;\n    text-align: center;\n    flex: .5;\n    display: flex;\n    justify-self: center;\n    align-self: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-title.enemy{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-position: center;\n    border: ridge 1px gold;\n}\n\n.player-title.user{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: center;\n    border: groove 1px whitesmoke;\n}\n\n\n.ai-board-container,\n.user-board{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.ai-board,\n.user-board {\n    border: 1px solid black;\n    height: 50%;\n    width: 50%;\n    display: grid;\n    grid-column: 1 / 3;\n}\n\n.ai-container{\n    grid-row: 1;\n}\n\n.user-container{\n    grid-row: 2;\n}\n\n.ai-container,\n.user-container{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n}\n\n.board-cell{\n    border: .1px solid black;\n    height: 1.6rem;\n    width: 1.6rem;\n}\n\n.board-cell:hover{\n    cursor: pointer;\n}\n\n.empty{\n    background-color: aqua;\n}\n\n.occupied{\n    background-color: darkorange;\n}\n\n.ai.occupied{\n    background-color: aqua;\n}\n\n.missed{\n    background-color: purple;\n}\n\n.hit{\n    background-color: red;\n}\n\n.sunk{\n    background-color: brown;\n}\n\n.hover{\n    background-color: beige;\n}\n\n.alignment-button-container{\n    grid-row: 5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,OAAO;AACX;AACA;;;IAGI,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,mDAAiC;IACjC,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,2CAA2C;IAC3C,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,mDAAoC;IACpC,sBAAsB;IACtB,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;;IAEI,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,qBAAqB;;AAEzB;;AAEA;IACI,wBAAwB;IACxB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mDAAsC;IACtC,2BAA2B;IAC3B,sBAAsB;AAC1B;;AAEA;IACI,mDAAoC;IACpC,2BAA2B;IAC3B,6BAA6B;AACjC;;;AAGA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,wBAAwB;IACxB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf","sourcesContent":["html,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    min-width: 100vw;\n    max-width: 100vw;\n    margin: 0;\n    padding: 0; \n    font-family: 'Luxurious Roman', cursive;\n    color:antiquewhite;\n}\n\nbutton{\n    font-family: 'Luxurious Roman', cursive;\n}\n\nbutton:hover{\n    cursor: pointer;\n}\n\nbody{\n    min-height: 100vh;\n    min-width: 100vw;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\n.page-container{\n    background: url(./images/sea.jpg);\n    background-size: cover;\n    min-width: 500px;\n    width: 100%;\n    display: grid;\n    grid-template-rows: .8fr .8fr 80% .5fr .5fr;\n    grid-template-columns: 1fr;\n    justify-items: center;\n}\n\n.title{\n    grid-row: 1;\n    justify-self: center;\n    align-self: center;\n    text-align: center;\n    background-color: black;\n    padding: 0 10px;\n}\n\n.new-game-button-container{\n    grid-row: 2;\n    justify-self: center;\n    align-self: center;\n}\n\n.game-container{\n    background: url(\"./images/wood.jpg\");\n    background-size: cover;\n    min-width: 500px;\n    border: 2px solid black;\n    width: fit-content;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-column: 1/ 4;\n    justify-content: center;\n}\n\n.user-container,\n.ai-container{\n    min-width: 250px;\n    max-width: 80vw;\n    justify-content: center;\n    justify-items: center;\n    \n}\n\n.player-title{\n    border: .5px solid black;\n    width: 80%;\n    height: 90%;\n    text-align: center;\n    flex: .5;\n    display: flex;\n    justify-self: center;\n    align-self: center;\n    justify-content: center;\n    align-items: center;\n}\n\n.player-title.enemy{\n    background: url(\"./images/parrot.jpg\");\n    background-position: center;\n    border: ridge 1px gold;\n}\n\n.player-title.user{\n    background: url(\"./images/gold.jpg\");\n    background-position: center;\n    border: groove 1px whitesmoke;\n}\n\n\n.ai-board-container,\n.user-board{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.ai-board,\n.user-board {\n    border: 1px solid black;\n    height: 50%;\n    width: 50%;\n    display: grid;\n    grid-column: 1 / 3;\n}\n\n.ai-container{\n    grid-row: 1;\n}\n\n.user-container{\n    grid-row: 2;\n}\n\n.ai-container,\n.user-container{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(12, 1fr);\n}\n\n.board-cell{\n    border: .1px solid black;\n    height: 1.6rem;\n    width: 1.6rem;\n}\n\n.board-cell:hover{\n    cursor: pointer;\n}\n\n.empty{\n    background-color: aqua;\n}\n\n.occupied{\n    background-color: darkorange;\n}\n\n.ai.occupied{\n    background-color: aqua;\n}\n\n.missed{\n    background-color: purple;\n}\n\n.hit{\n    background-color: red;\n}\n\n.sunk{\n    background-color: brown;\n}\n\n.hover{\n    background-color: beige;\n}\n\n.alignment-button-container{\n    grid-row: 5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-boards.js":
/*!*******************************!*\
  !*** ./src/display-boards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayBoards": () => (/* binding */ displayBoards),
/* harmony export */   "refreshBoards": () => (/* binding */ refreshBoards)
/* harmony export */ });
const displayBoard = function displayOneBoard(owner) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i <= 11; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= 11; j++) {
      const cell = document.createElement("div");
      const coordinates = `_${i}_${j}`;
      column.appendChild(cell);
      cell.classList.add(coordinates);
      cell.classList.add("board-cell");
      cell.classList.add(`${owner}`);
      cell.classList.add("empty");
    }
    board.appendChild(column);
  }
  return board;
};

const displayBoards = function displayTheBoards() {
  const userBoardContainer = document.querySelector(".user-board-container");
  userBoardContainer.appendChild(displayBoard("user"));

  const aiBoardContainer = document.querySelector(".ai-board-container");
  aiBoardContainer.appendChild(displayBoard("ai"));
};

const refreshBoards = function clearAndPopulateAgain() {
  const userBoardContainer = document.querySelector(".user-board-container");

  while (userBoardContainer.firstChild) {
    userBoardContainer.removeChild(userBoardContainer.firstChild);
  }
  userBoardContainer.appendChild(displayBoard("user"));

  const aiBoardContainer = document.querySelector(".ai-board-container");
  aiBoardContainer.removeChild(aiBoardContainer.firstChild);

  while (aiBoardContainer.firstChild) {
    aiBoardContainer.removeChild(aiBoardContainer.firstChild);
  }
  aiBoardContainer.appendChild(displayBoard("ai"));
};




/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _populate_boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate-boards */ "./src/populate-boards.js");
/* harmony import */ var _update_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-board */ "./src/update-board.js");








const newGame = function createPlayersAndGameBoards() {
  const user = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("human");

  const userBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)("user");

  (0,_populate_boards__WEBPACK_IMPORTED_MODULE_2__.populateBoards)("user", userBoard);

  const ai = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("ai");

  const aiBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)("ai");

  aiBoard.autoPlace("dinghy");

  aiBoard.autoPlace("skipper");

  aiBoard.autoPlace("submarine");

  aiBoard.autoPlace("battleship");

  aiBoard.autoPlace("carrier");

  (0,_populate_boards__WEBPACK_IMPORTED_MODULE_2__.populateBoards)("ai", aiBoard);

  let updatedBoard = (0,_update_board__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(aiBoard, "ai");

  let gameOver = false;

  const alignment = "vertical";

  const boardCells = document.querySelectorAll(".board-cell");

  const shipList = ["dinghy", "skipper", "submarine", "battleship", "carrier"];
  const lengthList = [2, 2, 3, 4, 5, 5];

  let setup = true;

  let battle = false;

  const alignmentButton = document.querySelector(".alignment");

  const messageContainer = document.querySelector(".message-container");

  const delay = 1000;

  messageContainer.textContent = `The ${shipList[0]} shall now be placed.`;

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (
        setup === false ||
        cell.classList.contains("ai") ||
        gameOver === true
      ) {
        return;
      }
      const coordinates = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.format)(cell.classList[0]);
      const activeShip = shipList[0];

      let nextShip = shipList[1];

      messageContainer.textContent = `The ${nextShip} shall now be placed.`;

      let placed = userBoard.placeShip(
        activeShip,
        alignmentButton.textContent,
        coordinates
      );
      if (placed === "Out of bounds" || placed === "Ships cannot overlap") {
        messageContainer.textContent =
          "Make sure ships are within boundaries and don't overlap";
        return;
      }

      (0,_populate_boards__WEBPACK_IMPORTED_MODULE_2__.populateBoards)("user", userBoard);
      shipList.shift();
      lengthList.shift();

      if (shipList.length === 0) {
        setup = false;
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === true && cell.classList.contains("ai")) {
        return;
      }
      if (setup === false) {
        return;
      }
      // Convert cell to array form, expand, convert arrays back to cell form

      const activeCells = getCellPreview(cell, alignment, lengthList[0]);
      cell.classList.add("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.add("hover");
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("mouseleave", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === false) {
        return;
      }
      // Convert cell to array form, expand, convert arrays back to cell form
      const activeCells = getCellPreview(cell, alignment, lengthList[0]);
      cell.classList.remove("hover");

      for (let cell of activeCells) {
        let next = document.querySelector(`.${cell}`);
        next.classList.remove("hover");
      }
    });
  });

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (gameOver === true) {
        return;
      }
      if (setup === true) {
        return;
      }

      if (setup === false && battle === false) {
        battle = true;
        messageContainer.textContent = "Let the battle begin!";
        boardCells.forEach((cell) => {
          // Clean up display
          if (cell.classList.contains("hover")) {
            cell.classList.remove("hover");
          }
        });
        return;
      }

      const coordinates = cell.classList[0];
      let cellOwner = cell.classList[2];

      if (cellOwner === "user") {
        messageContainer.textContent = "One shall not strike their own waters!";
        return;
      }
      let userAttack = user.attack(aiBoard, coordinates);
      if (userAttack.includes("struck")) {
        messageContainer.textContent = `Ye have stricken a ship!`;
      }

      if (userAttack.includes("sunk")) {
        messageContainer.textContent = `Ye have sunk Barbosa's prized ${userAttack[1]}!`;
      }

      if (userAttack.includes("miss")) {
        messageContainer.textContent =
          "Alas, ye have stricken only the blue...";
      }

      // Don't count invalid attacks;
      if (userAttack.includes("twice")) {
        messageContainer.textContent =
          "The same spot shall not be attacked twice.";
        return;
      }
      updatedBoard = (0,_update_board__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(aiBoard, "ai");

      updatedBoard.displayUpdates();

      let aiSunk = aiBoard.checkGame();
      console.log(aiSunk);

      if (aiSunk) {
        messageContainer.textContent =
          "At last, Barbosa shall terrorize the world's oceans no longer.";
        gameOver = true;
        return;
      }

      setTimeout(function () {
        let aiAttack = ai.attack(userBoard, "auto");
        if (aiAttack.includes("struck") || aiAttack.includes("sunk")) {
          messageContainer.textContent = `Barbosa has ${aiAttack[0]} your ${aiAttack[1]}!`;
        } else {
          messageContainer.textContent = `Ye have evaded Barbosa's cruel hand for now.`;
        }
        updatedBoard = (0,_update_board__WEBPACK_IMPORTED_MODULE_3__.updateBoard)(userBoard, "user");
        updatedBoard.displayUpdates();

        let userSunk = userBoard.checkGame();

        if (userSunk) {
          messageContainer.textContent = "Alas, Cap'n Barbosa wins again!";
          gameOver = true;
          return;
        }
      }, delay);
    });
  });
};



const deformat = function convertArrayToCellFormat(array) {
  const cell = `_${array[0]}_${array[1]}`;
  return cell;
};

const getCellPreview = function getPotentialCellCoords(
  cell,
  alignment,
  length
) {
  const activeCells = [];
  const alignmentButton = document.querySelector(".alignment");
  let alignmentText = alignmentButton.textContent;
  if (alignmentText === "horizontal") {
    const start = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.format)(cell.classList[0]);
    for (let i = start[0]; i < start[0] + length; i++) {
      let nextCell = [];
      let x = i;
      let y = start[1];
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }
  } else if (alignmentText === "vertical") {
    const start = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.format)(cell.classList[0]);
    for (let i = start[1]; i < start[1] + length; i++) {
      let nextCell = [];
      let x = start[0];
      let y = i;
      nextCell.push(x);
      nextCell.push(y);
      nextCell = deformat(nextCell);
      activeCells.push(nextCell);
    }
  }
  return activeCells;
};


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format),
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");




const gameBoardFactory = function makeGameBoard() {
  const gameOver = false;

  /**
   * Keep track of which spaces are occupied, hit or miss
   * Each space will be designated by an array with an x and y value
   */
  const occupiedSpaces = [];

  // Record each ship's name with its respective coordinates

  const shipLocations = {};

  /**
   * Record each ship object in its entirety
   * They will always be stored in the same order, ascending in length
   */

  const shipObjects = [];

  /**
   * Keep track of which spaces have been attacked, regardless of hit or miss
   */
  const attackedSpaces = [];

  const missedLocations = [];

  // Whenever a ship is sunk, add to this array
  const sunkShips = [];

  const placeShip = function placeShipWithOrientation(
    shipName,
    orientation,
    startingCoordinate
  ) {
    const currentShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipName);

    const currentShipCoordinates = [];

    const length = currentShip.shipLength;

    // If ship is placed horizontally, it will occupy several spaces along x-axis, and vice versa
    const axisIndex = orientation === "horizontal" ? 0 : 1;

    // Use ship length and orientation to spaces that it occupies, add those to gameboard's record

    const startingIndex = startingCoordinate[axisIndex];
    const endingIndex = startingIndex + length - 1;

    const potentialSpaces = [];

    if (axisIndex === 0) {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [i, startingCoordinate[1]];
        potentialSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    } else {
      for (let i = startingIndex; i <= endingIndex; i++) {
        let nextCoordinate = [startingCoordinate[0], i];
        potentialSpaces.push(nextCoordinate);
        currentShipCoordinates.push(nextCoordinate);
      }
    }

    /**
     *  Before updating gameboard's info, make sure new ship will not overlap others.
     *  Calculate which spaces will be occupied, and make sure those spaces are not in the occupiedSpaces array
     */

    const conflict = checkAvailability(potentialSpaces);

    if (conflict) {
      return "Ships cannot overlap";
    }

    const outOfBounds = checkBounds(potentialSpaces);

    if (outOfBounds) {
      return "Out of bounds";
    }

    for (const space in potentialSpaces) {
      occupiedSpaces.push(potentialSpaces[space]);
    }
    // Keep a record of entire ship object
    shipObjects.push(currentShip);

    shipLocations[currentShip.shipName] = currentShipCoordinates;

    return `${shipName} was placed`;
  };

  const autoPlace = function aiPlaceShip(name) {
    const coinFlip = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberBetween)(0, 1);
    let alignment = "";
    coinFlip === 0 ? (alignment = "vertical") : (alignment = "horizontal");

    let placed = placeShip(name, alignment, generateCoordinates());

    while (placed === "Out of bounds" || placed === "Ships cannot overlap") {
      placed = placeShip(name, alignment, generateCoordinates());
    }
    return placed;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    // Coordinates must be stored in board cells as _x_y to prevent CSS errors

    if (typeof coordinates === "string" && coordinates !== "auto") {
      coordinates = format(coordinates);
    }

    // Must check if spot has already been attacked
    const hitConflict = checkOverlap(attackedSpaces, coordinates);

    if (hitConflict) {
      return "cannot attack same spot twice";
    }

    this.attackedSpaces.push(coordinates);

    const isHit = checkOverlap(occupiedSpaces, coordinates);
    if (isHit) {
      const hitShip = checkHit(coordinates);

      logHit(hitShip, coordinates);

      const sunk = checkStatus(hitShip);
      if (sunk) {
        return ["sunk", hitShip];
      }
      return ["struck", hitShip];
    } else {
      missedLocations.push(coordinates);
      return "missed";
    }
  };

  const checkOverlap = function checkIfCoordinatesMatchArray(
    array,
    coordinates
  ) {
    return array.some((a) => coordinates.every((v, i) => v === a[i]));
  };

  // Takes a pair of coordinates and see which boat they belong to
  const checkHit = function checkWhichBoatWasHit(coordinates) {
    for (const ship in shipLocations) {
      const shipSpaces = Object.values(shipLocations[ship]);
      const hit = shipSpaces.some((a) =>
        coordinates.every((v, i) => v === a[i])
      );
      if (hit) return ship;
    }
  };

  // Take an array of spaces and make sure none of them are occupied
  const checkAvailability = function checkIfSpacesAreOccupied(potentialSpaces) {
    // Iterate through array of potential coords and see if any are occupied
    for (const space in potentialSpaces) {
      const conflict = occupiedSpaces.some((a) =>
        potentialSpaces[space].every((v, i) => v === a[i])
      );
      if (conflict) {
        return true;
      }
    }
  };

  // Take an array of spaces and make sure none are out of bounds
  const checkBounds = function checkIfOutOfBounds(potentialSpaces) {
    for (const space in potentialSpaces) {
      let coord = potentialSpaces[space];
      if (coord[0] > 11 || coord[1] > 11) {
        return true;
      }
    }
  };

  const logHit = function recordHit(hitShip, coordinates) {
    for (const ship in shipObjects) {
      if (shipObjects[ship].shipName === hitShip) {
        shipObjects[ship].hit(coordinates);
      }
    }
  };

  const checkStatus = function checkIfShipSank(hitShip) {
    for (const ship in shipObjects) {
      if (shipObjects[ship].shipName === hitShip) {
        if (shipObjects[ship].isSunk) {
          sunkShips.push(shipObjects[ship]);
          return true;
        }
      }
    }
  };

  const checkGame = function checkIfGameOver() {
    if (this.sunkShips.length === 5) {
      this.gameOver = !this.gameOver;
    }

    return this.gameOver;
  };

  const showHitLocations = function iterateThroughShipObjects() {
    const hits = [];
    for (let ship of shipObjects) {
      for (let hit of ship.hitLocations) {
        hits.push(hit);
      }
    }
    return hits;
  };

  const showSunkLocations = function iterateThroughSunkShips() {
    const sunkLocations = [];
    for (let ship of sunkShips) {
      for (let hit of ship.hitLocations) {
        sunkLocations.push(hit);
      }
    }
    return sunkLocations;
  };

  const generateCoordinates = function generateXAndY() {
    let target = "invalid";

    while (target === "invalid") {
      let possibleCoordinates = [];
      let x = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberBetween)(0, 11);
      let y = (0,_player__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberBetween)(0, 11);
      possibleCoordinates.push(x);
      possibleCoordinates.push(y);

      let conflict = board.checkOverlap(
        board.occupiedSpaces,
        possibleCoordinates
      );

      if (!conflict) {
        target = "valid";
        return possibleCoordinates;
      }
    }
  };

  const board = {
    checkGame,
    gameOver,
    placeShip,
    autoPlace,
    occupiedSpaces,
    shipLocations,
    shipObjects,
    sunkShips,
    receiveAttack,
    attackedSpaces,
    missedLocations,
    checkOverlap,
    showHitLocations,
    showSunkLocations,
  };

  return board;
};



const format = function convertCellToArray(coordinates) {
  let formatted = coordinates.split("_");
  formatted.shift();
  let x;
  let y;
  formatted[0] === "0" ? (x = 0) : (x = parseInt(formatted[0]));
  formatted[1] === "0" ? (y = 0) : (y = parseInt(formatted[1]));

  formatted = [x, y];
  coordinates = formatted;
  return coordinates;
};


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomNumberBetween": () => (/* binding */ getRandomNumberBetween),
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/**
 * playerFactory will take a name and give that player a gameboard
 * with ships placed upon it.  Player can have an attack function
 * that calls receiveAttack() on the enemy board.
 *
 * It will be necessary to keep track of the player's own ships, while also
 * providing the human player with a display of the enemy's attacked coordinates
 * The human player should be able to see which attacks failed or succeeded
 */

const playerFactory = function createPlayer(playerName) {
  const successfulAttacks = [];

  const potentialAttacks = [];

  const missedAttacks = [];

  /**
   * Attempts to take a gameBoard object (created with a factory function), and
   * then call that object's receiveAttack method.  receiveAttack() is meant to modify the gameBoard object
   * and return a string describing the modifications that took place
   */

  const attack = function attackEnemy(enemyBoard, coordinates) {
    // If AI is attacking, generate random, available coordinates
    if (coordinates === "auto") {
      coordinates = generateCoordinates(enemyBoard);

      if (coordinates === "No available spaces") {
        return "No available spaces";
      }
    }

    const result = enemyBoard.receiveAttack(coordinates);

    logResult(result, coordinates);

    return result;
  };

  const generateCoordinates = function generateXAndY(board) {
    let target = "invalid";

    while (target === "invalid") {
      if (board.attackedSpaces.length > 143) {
        return "No available spaces";
      }

      // Check list of potential attacks before generating a random one
      while (potentialAttacks.length > 0) {
        // flip a coin to decide whether to try a coordinate to left/right, or one above/below hit spot
        let coinflip = getRandomNumberBetween(0, 1);
        let possibleCoordinates;
        coinflip === 0
          ? (possibleCoordinates = potentialAttacks.shift())
          : (possibleCoordinates = potentialAttacks.pop());

        let conflict = board.checkOverlap(
          board.attackedSpaces,
          possibleCoordinates
        );
        if (!conflict) {
          target = "valid";
          return possibleCoordinates;
        }
      }
      let possibleCoordinates = [];
      let x = getRandomNumberBetween(0, 11);
      let y = getRandomNumberBetween(0, 11);
      possibleCoordinates.push(x);
      possibleCoordinates.push(y);

      let conflict = board.checkOverlap(
        board.attackedSpaces,
        possibleCoordinates
      );

      if (!conflict) {
        target = "valid";
        return possibleCoordinates;
      }
    }
  };

  const logResult = function pushCoordinatesToArray(result, coordinates) {
    if (result.includes("struck")) {
      const successfulX = coordinates[0];
      const successfulY = coordinates[1];

      const possibleDirections = [];

      const approvedDirections = [];

      const left = [successfulX - 1, successfulY];
      const above = [successfulX, successfulY + 1];
      const right = [successfulX + 1, successfulY];
      const below = [successfulX, successfulY - 1];

      possibleDirections.push(left);
      possibleDirections.push(above);
      possibleDirections.push(right);
      possibleDirections.push(below);

      for (let direction of possibleDirections) {
        if (direction[0] < 12 && direction[1] < 12) {
          approvedDirections.push(direction);
        }
      }

      for (let direction of approvedDirections) {
        potentialAttacks.push(direction);
      }
    } else if (result.includes("sunk")) {
      // If ship is sunk, don't keep attacking adjacent spots;
      while (potentialAttacks.length > 0) {
        potentialAttacks.shift();
      }
    }
  };

  const getSuccessfulAttacks = function showSuccess() {
    return this.successfulAttacks;
  };

  const player = {
    missedAttacks,
    successfulAttacks,
    potentialAttacks,
    attack,
    getSuccessfulAttacks,
    generateCoordinates,
  };
  return player;
};



function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


/***/ }),

/***/ "./src/populate-boards.js":
/*!********************************!*\
  !*** ./src/populate-boards.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateBoards": () => (/* binding */ populateBoards)
/* harmony export */ });
const populateBoards = function displayShips(name, board) {
  for (const [key, value] of Object.entries(board.shipLocations)) {
    for (const coordinate of value) {
      const coordinateString = `_${coordinate[0]}_${coordinate[1]}`;
      const occupiedCells = document.querySelectorAll(`.${coordinateString}`);
      occupiedCells.forEach((cell) => {
        if (cell.classList.contains(name)) {
          cell.classList.remove("empty");
          cell.classList.add("occupied");
          // Keep track of which cells' respective ships
          cell.classList.add(key);
        }
      });
    }
  }
};




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (name) => {
  const shipLength = getShipLength(name);
  const shipName = name;
  const isSunk = false;

  // An array of arrays, each containing a coordinate occupied by ship
  const hitLocations = [];

  const hit = function recordHitToHitLocations(location) {
    this.hitLocations.push(location);
    this.isSunk = checkIfSunk(this.hitLocations, this.shipLength);
  };

  return { shipLength, shipName, isSunk, hitLocations, hit };
};

const getShipLength = function measureShip(name) {
  switch (name) {
    case "dinghy":
      return 2;
      break;
    case "skipper":
      return 2;
      break;
    case "submarine":
      return 3;
      break;
    case "battleship":
      return 4;
      break;
    case "carrier":
      return 5;
      break;
  }
};

const checkIfSunk = function reviewHitLocations(hits, shipLength) {
  const numberOfHits = hits.length;
  if (numberOfHits === shipLength) {
    return true;
  }
  return false;
};




/***/ }),

/***/ "./src/update-board.js":
/*!*****************************!*\
  !*** ./src/update-board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard)
/* harmony export */ });
// Read a player's board and use it to update display

const updateBoard = function readBoardAndUpdateDisplay(board, name) {
  const owner = name;

  const hitLocations = board.showHitLocations();

  const missedLocations = board.missedLocations;

  const sunkLocations = board.showSunkLocations();

  const displayUpdates = function displayHitsMissesAndSunks() {
    displayHits();
    displayMisses();
    displaySunk();
  };

  const displayHits = function iterateThroughHitsAndUpdateDOM() {
    for (let hit of hitLocations) {
      const cells = document.querySelectorAll(`._${hit[0]}_${hit[1]}`);
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          cell.classList.remove("occupied");
          cell.classList.add("hit");
        }
      });
    }
  };

  const displayMisses = function iterateThroughMisses() {
    for (let miss of missedLocations) {
      const cells = document.querySelectorAll(`._${miss[0]}_${miss[1]}`);
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          cell.classList.remove("empty");
          cell.classList.add("missed");
        }
      });
    }
  };

  const displaySunk = function iterateThroughSunkLocations() {
    for (let location of sunkLocations) {
      const cells = document.querySelectorAll(
        `._${location[0]}_${location[1]}`
      );
      cells.forEach((cell) => {
        if (cell.classList.contains(owner)) {
          if (cell.classList.contains("hit")) {
            cell.classList.remove("hit");
          }
          cell.classList.add("sunk");
        }
      });
    }
  };
  return {
    owner,
    hitLocations,
    displayUpdates,
    missedLocations,
    sunkLocations,
  };
};




/***/ }),

/***/ "./src/images/gold.jpg":
/*!*****************************!*\
  !*** ./src/images/gold.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "421b5dd328f89735202a.jpg";

/***/ }),

/***/ "./src/images/parrot.jpg":
/*!*******************************!*\
  !*** ./src/images/parrot.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62247da4352f4e1ab590.jpg";

/***/ }),

/***/ "./src/images/sea.jpg":
/*!****************************!*\
  !*** ./src/images/sea.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9f27cf544f61f03f077.jpg";

/***/ }),

/***/ "./src/images/wood.jpg":
/*!*****************************!*\
  !*** ./src/images/wood.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75084e9e0d0bfedc5682.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _display_boards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-boards */ "./src/display-boards.js");
/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-loop */ "./src/game-loop.js");






(0,_display_boards__WEBPACK_IMPORTED_MODULE_1__.displayBoards)();

(0,_game_loop__WEBPACK_IMPORTED_MODULE_2__.newGame)();

const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener("click", () => {
  (0,_display_boards__WEBPACK_IMPORTED_MODULE_1__.refreshBoards)();
  (0,_game_loop__WEBPACK_IMPORTED_MODULE_2__.newGame)();
});

const alignmentButton = document.querySelector(".alignment");

alignmentButton.addEventListener(
  "click",
  () => {
    let text = alignmentButton.textContent;

    text === "horizontal"
      ? (alignmentButton.textContent = "vertical")
      : (alignmentButton.textContent = "horizontal");
  },
  0
);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map