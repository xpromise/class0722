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

/***/ "./src/css/test1.css":
/*!***************************!*\
  !*** ./src/css/test1.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #box1{\\n|   width: 100px;\\n|   height: 100px;\");\n\n//# sourceURL=webpack:///./src/css/test1.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/data.json */ \"./src/json/data.json\");\nvar _json_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/data.json */ \"./src/json/data.json\", 1);\n/* harmony import */ var _css_test1_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/test1.css */ \"./src/css/test1.css\");\n/* harmony import */ var _css_test1_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_test1_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n// 引入目的：让webpack打包css资源\r\n\r\n/*\r\n  1. 下载包\r\n    npm i webpack webpack-cli -g\r\n    npm i webpack webpack-cli -D\r\n  2. 编写代码\r\n  3. 使用webpack编译代码\r\n    webpack ./src/js/app.js -o ./build/js/built.js --mode=development  \r\n      功能：\r\n        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法\r\n        2. 不能将ES6其他语法编译成ES5以下的低级语法\r\n    webpack ./src/js/app.js -o ./build/js/built.js --mode=production  \r\n      功能：\r\n        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法\r\n        2. 不能将ES6其他语法编译成ES5以下的低级语法\r\n        3. 压缩js代码\r\n  4. webpack核心概念\r\n    1. entry 入口文件：指示webpack从哪个文件开始打包\r\n    2. output 输出：指示webpack打包后资源输出到哪里去\r\n    3. loader 加载器：帮助webpack解析非js/json的文件\r\n    4. plugin 插件：执行功能更加强大的任务（执行loader干不了的事）\r\n    5. mode 模式： \r\n      development\r\n      production\r\n*/\r\n_module1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n  .then((value) => {\r\n    console.log(value);\r\n  })\r\n\r\nconsole.log(_json_data_json__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=webpack:///./src/js/app.js?");

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

/***/ })

/******/ });