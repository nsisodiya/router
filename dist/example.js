(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@nsisodiya/router"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactRouter"], factory);
	else if(typeof exports === 'object')
		exports["example"] = factory(require("@nsisodiya/router"));
	else
		root["example"] = factory(root["ReactRouter"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/({

	/***/ 0:
/***/ function(module, exports, __webpack_require__) {

		"use strict";

		var _router = __webpack_require__(9);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		console.log(_router.PageHolder.isHolded());
		_router.PageHolder.hold("You cannot navigate from this page");
		console.log(_router.PageHolder.isHolded());
		_router.PageHolder.unHold();
		console.log(_router.PageHolder.isHolded());

		console.log(_router2.default);

/***/ },

	/***/ 9:
/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }

	/******/
})
});
;