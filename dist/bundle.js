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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    min-width: 800px;\n    max-width: 100vw;\n    margin: 0;\n    padding: 0; \n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\n.page-container{\n    min-width: 800px;\n    width: 100%;\n    display: grid;\n    grid-template-rows: .8fr 80% 1fr;\n    grid-template-columns: 100%;\n}\n\n.game-container{\n    min-width: 800px;\n    border: 2px solid black;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column: 1/ 4;\n}\n\n.user-container,\n.ai-container{\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 10fr 1fr;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    \n}\n\n.player-title{\n    border: .5px solid black;\n    width: 90%;\n    height: 90%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.user-board,\n.ai-board{\n    border: 1px solid black;\n    height: 90%;\n    width: 90%;\n    display: grid;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n}\n\n.board-cell{\n    border: .1px solid black;\n    font-size: 1rem;\n}\n\n.empty{\n    background-color: aqua;\n}\n\n.occupied{\n    background-color: darkorange;\n}\n\n.missed{\n    background-color: grey;\n}\n\n.hit{\n    background-color: red;\n}\n\n.sunk{\n    background-color: brown;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,OAAO;AACX;AACA;;;IAGI,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,gCAAgC;IAChC,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;;IAEI,uBAAuB;IACvB,aAAa;IACb,gCAAgC;IAChC,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;;AAEf;;AAEA;IACI,wBAAwB;IACxB,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["html,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    min-width: 800px;\n    max-width: 100vw;\n    margin: 0;\n    padding: 0; \n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\n.page-container{\n    min-width: 800px;\n    width: 100%;\n    display: grid;\n    grid-template-rows: .8fr 80% 1fr;\n    grid-template-columns: 100%;\n}\n\n.game-container{\n    min-width: 800px;\n    border: 2px solid black;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column: 1/ 4;\n}\n\n.user-container,\n.ai-container{\n    border: 1px solid black;\n    display: grid;\n    grid-template-rows: 1fr 10fr 1fr;\n    justify-items: center;\n    align-items: center;\n    width: 100%;\n    \n}\n\n.player-title{\n    border: .5px solid black;\n    width: 90%;\n    height: 90%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.user-board,\n.ai-board{\n    border: 1px solid black;\n    height: 90%;\n    width: 90%;\n    display: grid;\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n}\n\n.board-cell{\n    border: .1px solid black;\n    font-size: 1rem;\n}\n\n.empty{\n    background-color: aqua;\n}\n\n.occupied{\n    background-color: darkorange;\n}\n\n.missed{\n    background-color: grey;\n}\n\n.hit{\n    background-color: red;\n}\n\n.sunk{\n    background-color: brown;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayBoards": () => (/* binding */ displayBoards)
/* harmony export */ });
const displayBoard = function displayOneBoard(owner) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i <= 15; i++) {
    const column = document.createElement("div");
    for (let j = 0; j <= 15; j++) {
      const cell = document.createElement("div");
      const coordinates = `_${i}_${j}`;
      column.appendChild(cell);
      cell.classList.add(coordinates);
      cell.classList.add("board-cell");
      cell.classList.add(`${owner}`);
      cell.classList.add("empty");
      cell.textContent = `_${i}_${j}`;
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");








// Eventually need to find a way to allow player to position ships

const newGame = function createPlayersAndGameBoards() {
  const user = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("human");

  const userBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)("user");

  userBoard.placeShip("dinghy", "vertical", [0, 0]);
  userBoard.placeShip("dinghy2", "vertical", [1, 0]);
  userBoard.placeShip("submarine", "vertical", [2, 0]);
  userBoard.placeShip("battleship", "vertical", [3, 0]);
  userBoard.placeShip("carrier", "vertical", [4, 0]);

  (0,_populate_boards__WEBPACK_IMPORTED_MODULE_2__.populateBoards)("user", userBoard);

  const ai = (0,_player__WEBPACK_IMPORTED_MODULE_1__.playerFactory)("ai");

  const aiBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameBoardFactory)("ai");

  aiBoard.placeShip("dinghy", "vertical", [0, 0]);
  aiBoard.placeShip("dinghy2", "vertical", [1, 0]);
  aiBoard.placeShip("submarine", "vertical", [2, 0]);
  aiBoard.placeShip("battleship", "vertical", [3, 0]);
  aiBoard.placeShip("carrier", "vertical", [4, 0]);

  (0,_populate_boards__WEBPACK_IMPORTED_MODULE_2__.populateBoards)("ai", aiBoard);

  user.turn = true;

  const boardCells = document.querySelectorAll(".board-cell");

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const coordinates = cell.classList[0];
      const owner = cell.classList[2];
      const ship = cell.classList[4];
      let attack = user.attack(aiBoard, coordinates);

      console.log(aiBoard);
    });
  });
};




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const gameBoardFactory = function makeGameBoard(ownerName = "name") {
  const owner = ownerName;

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
      this.occupiedSpaces.push(potentialSpaces[space]);
    }
    // Keep a record of entire ship object
    this.shipObjects.push(currentShip);

    this.shipLocations[currentShip.shipName] = currentShipCoordinates;

    return `${shipName} was placed`;
  };

  const receiveAttack = function determineHitByCoordinates(coordinates) {
    // Must check if spot has already been attacked

    // Coordinates must be stored in board cells as _x_y to prevent CSS errors

    if (typeof coordinates === "string" && coordinates !== "auto") {
      coordinates = coordinates.split("_");
      coordinates.shift();
      coordinates = [parseInt(coordinates[0]), parseInt(coordinates[1])];
    }

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
        return `${hitShip} has been sunk`;
      }
      return `${hitShip} has been hit`;
    } else {
      return "miss";
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
      if (coord[0] > 10 || coord[1] > 10) {
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
    if (this.sunkShips.length === 2) {
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

  const board = {
    owner,
    checkGame,
    gameOver,
    placeShip,
    occupiedSpaces,
    shipLocations,
    shipObjects,
    sunkShips,
    receiveAttack,
    attackedSpaces,
    checkOverlap,
    showHitLocations,
    showSunkLocations,
  };

  return board;
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
  const name = playerName;

  const turn = false;

  const successfulAttacks = [];

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
      if (board.attackedSpaces.length > 256) {
        return "No available spaces";
      }
      let possibleCoordinates = [];
      let x = getRandomNumberBetween(0, 15);
      let y = getRandomNumberBetween(0, 15);
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
    if (result.includes("hit") || result.includes("sunk")) {
      successfulAttacks.push(coordinates);
    } else if (result.includes("miss")) {
      missedAttacks.push(coordinates);
    }
  };

  const getSuccessfulAttacks = function showSuccess() {
    return this.successfulAttacks;
  };

  const player = {
    missedAttacks,
    successfulAttacks,
    attack,
    getSuccessfulAttacks,
    generateCoordinates,
    turn,
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
    case "dinghy2":
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

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map