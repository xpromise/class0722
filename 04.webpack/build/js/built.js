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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/test1.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/test1.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/2.png */ \"./src/images/2.png\"));\n// Module\nexports.push([module.i, \"#box2 {\\n  width: 150px;\\n  height: 150px;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: cover;\\n}\\n#box2 p {\\n  font-size: 25px;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/less/test1.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/test1.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/test1.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/1.jpg */ \"./src/images/1.jpg\"));\n// Module\nexports.push([module.i, \"#box1{\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n  background-size: cover;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/test1.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/test1.css":
/*!***************************!*\
  !*** ./src/css/test1.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./test1.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/test1.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/test1.css?");

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/jpeg;base64,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\"\n\n//# sourceURL=webpack:///./src/images/1.jpg?");

/***/ }),

/***/ "./src/images/2.png":
/*!**************************!*\
  !*** ./src/images/2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/e9b116eef4.png\";\n\n//# sourceURL=webpack:///./src/images/2.png?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/data.json */ \"./src/json/data.json\");\nvar _json_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/data.json */ \"./src/json/data.json\", 1);\n/* harmony import */ var _css_test1_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/test1.css */ \"./src/css/test1.css\");\n/* harmony import */ var _css_test1_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_test1_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _less_test1_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../less/test1.less */ \"./src/less/test1.less\");\n/* harmony import */ var _less_test1_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_less_test1_less__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n// 引入目的：让webpack打包css资源\r\n\r\n\r\n\r\n//#region \r\n/*\r\n  1. 下载包\r\n    npm i webpack webpack-cli -g\r\n    npm i webpack webpack-cli -D\r\n  2. 编写代码\r\n  3. 使用webpack编译代码\r\n    webpack ./src/js/app.js -o ./build/js/built.js --mode=development  \r\n      功能：\r\n        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法\r\n        2. 不能将ES6其他语法编译成ES5以下的低级语法\r\n    webpack ./src/js/app.js -o ./build/js/built.js --mode=production  \r\n      功能：\r\n        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法\r\n        2. 不能将ES6其他语法编译成ES5以下的低级语法\r\n        3. 压缩js代码\r\n  4. webpack核心概念\r\n    1. entry 入口文件：指示webpack从哪个文件开始打包\r\n    2. output 输出：指示webpack打包后资源输出到哪里去\r\n    3. loader 加载器：帮助webpack解析非js/json的文件\r\n    4. plugin 插件：执行功能更加强大的任务（执行loader干不了的事）\r\n    5. mode 模式： \r\n      development\r\n      production\r\n*/\r\n//#endregion\r\n\r\n_module1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n  .then((value) => {\r\n    console.log(value);\r\n  })\r\n\r\nconsole.log(_json_data_json__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst promise = new Promise((resolve, reject) => {\r\n  setTimeout(() => {\r\n    console.log('延时1秒执行了~');\r\n    resolve('aaa');\r\n  }, 1000)\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (promise);\n\n//# sourceURL=webpack:///./src/js/module1.js?");

/***/ }),

/***/ "./src/json/data.json":
/*!****************************!*\
  !*** ./src/json/data.json ***!
  \****************************/
/*! exports provided: name, wife, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"damu\\\",\\\"wife\\\":\\\"qbl\\\"}\");\n\n//# sourceURL=webpack:///./src/json/data.json?");

/***/ }),

/***/ "./src/less/test1.less":
/*!*****************************!*\
  !*** ./src/less/test1.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./test1.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/test1.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/less/test1.less?");

/***/ })

/******/ });