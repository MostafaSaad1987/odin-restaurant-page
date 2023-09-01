/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: #ff9922;\n    margin: 0;\n}\n\np,\nh1 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    font-family: 'Indie Flower', cursive;\n}\n\n.subtitle {\n    font-family: 'PT Serif', serif;\n    margin: 0;\n}\n\n.small-text-home {\n    font-family: 'Roboto', sans-serif;\n}\n\n#content {\n    transition: all 0.5s;\n    margin: 25px 175px;\n    padding: 50px 25px;\n    background-color: white;\n\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);\n}\n\nbutton {\n    border: 2px solid #ff9922;\n    padding: 16px 32px;\n    margin: 4px 2px;\n    border-radius: 5px;\n\n    font-family: 'Roboto', sans-serif;\n\n    text-decoration: none;\n    font-size: 16px;\n    transition-duration: 0.4s;\n    cursor: pointer;\n    background-color: white;\n    color: black;\n}\n\nbutton:hover {\n    background-color: #ff9922;\n    color: white;\n}\n\n.current-button {\n    border-color: #ff9922;\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Nav Bar */\n#tab {\n    max-width: 100%;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n\n    background-color: #EE8000;\n\n    padding: 5px 0;\n\n    z-index: 99;\n}\n\n\n/* Home Content */\n#home-content,\n#contact-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n/* Menu Stuff */\n#menu-content {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 450px));\n    grid-auto-rows: 500px;\n    justify-items: center;\n    align-items: center;\n    justify-content: space-around;\n    gap: 25px;\n    padding-bottom: 25px;\n}\n\n.food-image {\n    height: 400px;\n    width: 100%;\n    object-fit: cover;\n\n    border-radius: 5.5% 5.5% 0 0;\n}\n\n.food-item {\n    height: 450px;\n    width: 450px;\n    background-color: white;\n    border: 1px black solid;\n    position: relative;\n\n    transition: all 0.5s;\n\n    font-size: 1.5rem;\n\n    border-radius: 5%;\n}\n\n.food-item:hover {\n    transform: scale(1.1) translate(0, -10px);\n}\n\n.food-name {\n    position: absolute;\n    bottom: 1px;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    height: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: all .5s;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 5%;\n}\n\n.food-item:hover .overlay {\n    opacity: 1;\n}\n\n.food-description {\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    font-size: 20px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n\n#content>* {\n    transition: all 0.5s;\n}\n\n/* Contact Styling */\n#contact-content {\n    gap: 25px;\n}\n\n.contact-item {\n    width: 80%;\n    border: black 5px solid;\n    padding: 0 10px;\n\n    position: relative;\n\n    background-color: #2288FF;\n    color: white;\n\n    transition: all 0.5s;\n}\n\n.contact-item:hover {\n    width: 90%;\n}\n\n.contact-title {\n    margin-top: 0.5em;\n    font-size: 2rem;\n    text-align: left;\n\n    font-family: 'Oswald', sans-serif;\n}\n\n.contact-text {\n    font-size: 1.1rem;\n    font-family: 'PT Serif', serif;\n}\n\n.contact-number {\n    margin-bottom: 0.5em;\n    font-size: 1.5rem;\n    text-align: right;\n\n    font-family: 'PT Serif', serif;\n}\n\n.contact-image {\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n\n    position: absolute;\n    top: -25px;\n    right: -15px;\n\n    object-fit: cover;\n}\n\n\n/* Media */\n@media (max-width: 1250px) {\n    #content {\n        margin: 25px;\n    }\n}\n\n@media (max-width: 1050px) {\n    .goku-eating {\n        width: 700px;\n    }\n}\n\n@media (max-width: 780px) {\n    .goku-eating {\n        width: 550px;\n    }\n\n    .food-item {\n        height: 400px;\n        width: 400px;\n        color: white;\n        -webkit-text-stroke: 0.5px black;\n    }\n\n    .food-image {\n        border-radius: 5.5%;\n    }\n}\n\n@media (max-width: 620px) {\n    .goku-eating {\n        width: 350px;\n    }\n\n    .food-item {\n        height: 300px;\n        width: 300px;\n        color: white;\n        -webkit-text-stroke: 0.5px black;\n    }\n\n    #menu-content {\n        grid-auto-rows: 400px;\n    }\n\n    .food-image {\n        height: 300px;\n    }\n}\n\n@media (max-width: 420px) {\n    .goku-eating {\n        width: 275px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddContactInfo: () => (/* binding */ AddContactInfo)\n/* harmony export */ });\n/* harmony import */ var _src_images_Contact_IT_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/Contact/IT.gif */ \"./src/images/Contact/IT.gif\");\n/* harmony import */ var _src_images_Contact_Nimbus_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/Contact/Nimbus.gif */ \"./src/images/Contact/Nimbus.gif\");\n/* harmony import */ var _src_images_Contact_TM_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/Contact/TM.gif */ \"./src/images/Contact/TM.gif\");\nconst contentDiv = document.querySelector(\"#content\");\n\n\n\n\nconst AddContactInfo = () => {\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Contact Kooky\";\n    contentDiv.append(header);\n\n    const contactMethods = [\n        { name: \"Instant Transmission\", FlavourText: \"We'll be right there in an instant.\", Number: \"142-123\", Image: _src_images_Contact_IT_gif__WEBPACK_IMPORTED_MODULE_0__ },\n        { name: \"Flying Nimbus\", FlavourText: \"Someone pure of heart will come flying down from the sky.\", Number: \"003-003\", Image: _src_images_Contact_Nimbus_gif__WEBPACK_IMPORTED_MODULE_1__ },\n        { name: \"Time Machine\", FlavourText: \"We're already on the job before you contact us, and it's probably already done.\", Number: \"335-122\", Image: _src_images_Contact_TM_gif__WEBPACK_IMPORTED_MODULE_2__ }\n    ];\n\n    let contactContent = document.createElement(\"div\");\n    contactContent.id = \"contact-content\";\n\n    for (let method of contactMethods) {\n        let newContactCard = document.createElement(\"div\");\n        newContactCard.classList.add(\"contact-item\");\n\n        let methodName = method.name;\n        let methodText = method.FlavourText;\n        let methodNumber = method.Number;\n\n        let nameP = document.createElement(\"p\");\n        nameP.classList.add(\"contact-title\");\n        nameP.textContent = methodName;\n\n        let textP = document.createElement(\"p\");\n        textP.classList.add(\"contact-text\");\n        textP.textContent = methodText;\n\n        let numP = document.createElement(\"p\");\n        numP.classList.add(\"contact-number\");\n        numP.textContent = methodNumber;\n\n        let contactImg = document.createElement(\"img\");\n        contactImg.src = method.Image;\n        contactImg.classList.add(\"contact-image\");\n\n        newContactCard.append(nameP, textP, numP, contactImg);\n        contactContent.append(newContactCard);\n    }\n\n    header.style.opacity = 0;\n    contactContent.style.opacity = 0;\n    contentDiv.append(contactContent);\n    setTimeout(() => {\n        header.style.opacity = 1;\n        contactContent.style.opacity = 1;\n    }, 250);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddContent: () => (/* binding */ AddContent)\n/* harmony export */ });\n/* harmony import */ var _src_images_Goku_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/Goku.gif */ \"./src/images/Goku.gif\");\n/* harmony import */ var _src_images_DBIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/DBIcon.png */ \"./src/images/DBIcon.png\");\nconst contentDiv = document.querySelector(\"#content\");\n\n\n\nlet link = document.querySelector(\"link[rel~='icon']\");\nif (!link) {\n    link = document.createElement('link');\n    link.rel = 'icon';\n    document.head.appendChild(link);\n}\nlink.href = _src_images_DBIcon_png__WEBPACK_IMPORTED_MODULE_1__;\n\nconst AddContent = () => {\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Kooky Cook's Cooks\";\n\n    const subText = document.createElement(\"h2\");\n    subText.classList.add(\"subtitle\");\n    subText.textContent = \"For all your Saiyan needs.\";\n\n    const flavourText = document.createElement(\"p\");\n    flavourText.classList.add(\"small-text-home\");\n    flavourText.textContent = \"This is a wonderful restaurant full of different kinds of food. Everything a Saiyan needs.\";\n\n    const gokuImage = document.createElement(\"img\");\n    gokuImage.classList.add(\"goku-eating\");\n    gokuImage.src = _src_images_Goku_gif__WEBPACK_IMPORTED_MODULE_0__;\n\n    let homeContent = document.createElement(\"div\");\n    homeContent.id = \"home-content\";\n\n    homeContent.append(header, subText, flavourText, gokuImage);\n\n    homeContent.style.opacity = 0;\n    contentDiv.append(homeContent);\n    setTimeout(() => {\n        homeContent.style.opacity = 1;\n    }, 250);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nCreateButtons();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.AddContent)();\n\nconst contentDiv = document.querySelector(\"#content\");\n\nconsole.log(\"Hey! It's me! Goku!\");\n\nfunction CreateButtons() {\n    const tabDiv = document.createElement(\"div\");\n    tabDiv.id = \"tab\";\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.id = \"home-button\";\n    homeButton.classList.add(\"current-button\");\n    homeButton.textContent = \"Home\";\n\n    const menuButton = document.createElement(\"button\");\n    menuButton.id = \"menu-button\";\n    menuButton.textContent = \"Menu\";\n\n    const contactButton = document.createElement(\"button\");\n    contactButton.id = \"contact-button\";\n    contactButton.textContent = \"Contact\";\n\n    tabDiv.append(homeButton, menuButton, contactButton);\n\n    document.body.prepend(tabDiv);\n}\n\nconst homeClick = document.querySelector(\"#home-button\");\nconst menuClick = document.querySelector(\"#menu-button\");\nconst contactClick = document.querySelector(\"#contact-button\");\n\ndocument.body.addEventListener(\"click\", (e) => {\n    if (e.target.id == \"home-button\") {\n        AddStuff(_home__WEBPACK_IMPORTED_MODULE_0__.AddContent, homeClick)\n    } else if (e.target.id == \"menu-button\") {\n        AddStuff(_menu__WEBPACK_IMPORTED_MODULE_1__.AddMenuItems, menuClick);\n    } else if (e.target.id == \"contact-button\") {\n        AddStuff(_contact__WEBPACK_IMPORTED_MODULE_2__.AddContactInfo, contactClick);\n    }\n});\n\nfunction ToggleButton(buttonClicked) {\n    homeClick.classList.remove(\"current-button\");\n    menuClick.classList.remove(\"current-button\");\n    contactClick.classList.remove(\"current-button\");\n    buttonClicked.classList.add(\"current-button\");\n}\n\nfunction AddStuff(stuffToAdd, buttonToToggle) {\n    for (let i = 0; i < contentDiv.children.length; i++) {\n        contentDiv.children[i].style.opacity = 0;\n    }\n    setTimeout(() => {\n        contentDiv.innerHTML = \"\";\n        stuffToAdd();\n        ToggleButton(buttonToToggle);\n    }, 250);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddMenuItems: () => (/* binding */ AddMenuItems)\n/* harmony export */ });\n/* harmony import */ var _src_images_Food_puddings_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/Food/puddings.png */ \"./src/images/Food/puddings.png\");\n/* harmony import */ var _src_images_Food_paradise_herb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/Food/paradise-herb.png */ \"./src/images/Food/paradise-herb.png\");\n/* harmony import */ var _src_images_Food_ramendbs_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/Food/ramendbs.png */ \"./src/images/Food/ramendbs.png\");\n/* harmony import */ var _src_images_Food_FOTTOM_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/Food/FOTTOM.png */ \"./src/images/Food/FOTTOM.png\");\n/* harmony import */ var _src_images_Food_eggs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/Food/eggs.png */ \"./src/images/Food/eggs.png\");\n/* harmony import */ var _src_images_Food_choco_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/Food/choco.png */ \"./src/images/Food/choco.png\");\nconst contentDiv = document.querySelector(\"#content\");\n\n\n\n\n\n\n\nconst foodAvailable = [\n    { name: 'Pudding', link: _src_images_Food_puddings_png__WEBPACK_IMPORTED_MODULE_0__, description: \"Almost caused the universe to be destroyed from how good it is.\" },\n    { name: 'Paradise herb', link: _src_images_Food_paradise_herb_png__WEBPACK_IMPORTED_MODULE_1__, description: \"Increase your life span by 1,000 years, but you'd have to live on an island alone with a talking turtle.\" },\n    { name: 'Ramen', link: _src_images_Food_ramendbs_png__WEBPACK_IMPORTED_MODULE_2__, description: \"Good ol' ramen. Most common food, but tasets especially good from Kooky Cook.\" },\n    { name: 'Fruit of the Tree of Might', link: _src_images_Food_FOTTOM_png__WEBPACK_IMPORTED_MODULE_3__, description: \"Fills you with energy that is extracted from an entire planet.\" },\n    { name: 'Eggs', link: _src_images_Food_eggs_png__WEBPACK_IMPORTED_MODULE_4__, description: \"Chicken eggs, Dragon eggs, Demon King eggs, Cell eggs, Magic eggs, you name it.\" },\n    { name: 'Fancy Chocolates', link: _src_images_Food_choco_png__WEBPACK_IMPORTED_MODULE_5__, description: \"Totally not poisonous.\" }\n];\n\nconst AddMenuItems = () => {\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Kooky Cook's Specials\";\n    contentDiv.append(header);\n\n    let menuContent = document.createElement(\"div\");\n    menuContent.id = \"menu-content\";\n\n    for (let food of foodAvailable) {\n        let newFoodCard = document.createElement(\"div\");\n        newFoodCard.classList.add(\"food-item\");\n\n        let foodName = food.name;\n        let imgLink = food.link;\n\n        let newP = document.createElement(\"p\");\n        newP.textContent = foodName;\n        newP.classList.add(\"food-name\");\n\n        let newImg = document.createElement(\"img\");\n        newImg.classList.add(\"food-image\");\n        newImg.src = imgLink;\n\n        let overlayElement = document.createElement(\"div\");\n        overlayElement.classList.add(\"overlay\");\n\n        let foodDescription = document.createElement(\"div\");\n        foodDescription.classList.add(\"food-description\");\n        foodDescription.textContent = food.description;\n\n        overlayElement.append(foodDescription);\n        newFoodCard.append(newImg, newP, overlayElement);\n        menuContent.append(newFoodCard);\n    }\n\n    header.style.opacity = 0;\n    menuContent.style.opacity = 0;\n    contentDiv.append(menuContent);\n    setTimeout(() => {\n        header.style.opacity = 1;\n        menuContent.style.opacity = 1;\n    }, 250);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/Contact/IT.gif":
/*!***********************************!*\
  !*** ./src/images/Contact/IT.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6322dfbc02b54fd74d5.gif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Contact/IT.gif?");

/***/ }),

/***/ "./src/images/Contact/Nimbus.gif":
/*!***************************************!*\
  !*** ./src/images/Contact/Nimbus.gif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"988c2699e52961de191b.gif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Contact/Nimbus.gif?");

/***/ }),

/***/ "./src/images/Contact/TM.gif":
/*!***********************************!*\
  !*** ./src/images/Contact/TM.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa3de5c06c07c776009c.gif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Contact/TM.gif?");

/***/ }),

/***/ "./src/images/DBIcon.png":
/*!*******************************!*\
  !*** ./src/images/DBIcon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6be73cf00bad10cf2c0.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/DBIcon.png?");

/***/ }),

/***/ "./src/images/Food/FOTTOM.png":
/*!************************************!*\
  !*** ./src/images/Food/FOTTOM.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89abc9536cdf7834479f.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/FOTTOM.png?");

/***/ }),

/***/ "./src/images/Food/choco.png":
/*!***********************************!*\
  !*** ./src/images/Food/choco.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce5598c227d8a3208b7e.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/choco.png?");

/***/ }),

/***/ "./src/images/Food/eggs.png":
/*!**********************************!*\
  !*** ./src/images/Food/eggs.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b02d0ec8250697ebd583.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/eggs.png?");

/***/ }),

/***/ "./src/images/Food/paradise-herb.png":
/*!*******************************************!*\
  !*** ./src/images/Food/paradise-herb.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4567661ef85da3291ab1.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/paradise-herb.png?");

/***/ }),

/***/ "./src/images/Food/puddings.png":
/*!**************************************!*\
  !*** ./src/images/Food/puddings.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e5a212c66f321c47cda.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/puddings.png?");

/***/ }),

/***/ "./src/images/Food/ramendbs.png":
/*!**************************************!*\
  !*** ./src/images/Food/ramendbs.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b58555e1ad32b89dcd4.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Food/ramendbs.png?");

/***/ }),

/***/ "./src/images/Goku.gif":
/*!*****************************!*\
  !*** ./src/images/Goku.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb3d07e8712290c9f0d8.gif\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/Goku.gif?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;