(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactRouter"] = factory(require("react"));
	else
		root["ReactRouter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _PageHolder = __webpack_require__(1);

	var _PageHolder2 = _interopRequireDefault(_PageHolder);

	var _Link = __webpack_require__(2);

	var _Link2 = _interopRequireDefault(_Link);

	var _routeEventBus = __webpack_require__(4);

	var _routeEventBus2 = _interopRequireDefault(_routeEventBus);

	var _RouteLoader = __webpack_require__(7);

	var _RouteLoader2 = _interopRequireDefault(_RouteLoader);

	var _addEvent = __webpack_require__(9);

	var _addEvent2 = _interopRequireDefault(_addEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _addEvent2.default)(window, 'popstate', function (event) {
		if (_PageHolder2.default.isHolded() === false || confirm(_PageHolder2.default.isHolded())) {
			_PageHolder2.default.unHold();
			_routeEventBus2.default.publish("ROUTE_CHANGE_REQUESTED_POPSTATE", {
				event: event
			});
		} else {
			console.log("Back/Forward Button Clicked, but Page is currently holded");
			event.preventDefault();
			history.go(1); //This will make two alertBOX but working !!
			return false;
		}
	}); /*
	    
	     The MIT License (MIT)
	     Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya
	    
	     */

	setTimeout(function () {
		_routeEventBus2.default.publish("ROUTE_CHANGE_REQUESTED", {
			path: window.location.pathname
		});
	}, 0);

	module.exports = {
		PageHolder: _PageHolder2.default,
		Link: _Link2.default,
		routeEventBus: _routeEventBus2.default,
		RouteLoader: _RouteLoader2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by narendrasisodiya on 14/03/16.
	 */
	var currentPageHolded = false;
	exports.default = {
		hold: function hold(message) {
			currentPageHolded = message;
		},
		isHolded: function isHolded() {
			return currentPageHolded;
		},
		unHold: function unHold() {
			currentPageHolded = false;
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _PageHolder = __webpack_require__(1);

	var _PageHolder2 = _interopRequireDefault(_PageHolder);

	var _routeEventBus = __webpack_require__(4);

	var _routeEventBus2 = _interopRequireDefault(_routeEventBus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by narendrasisodiya on 14/03/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Link = function (_Component) {
		_inherits(Link, _Component);

		function Link(props, context) {
			_classCallCheck(this, Link);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this, props, context));
		}

		_createClass(Link, [{
			key: 'linkClicked',
			value: function linkClicked(synthEvt) {
				//Stop Event
				synthEvt.preventDefault();
				synthEvt.stopPropagation();

				if (_PageHolder2.default.isHolded() === false || confirm(_PageHolder2.default.isHolded())) {
					_PageHolder2.default.unHold();
					//Send RouteChange Signal to everywhere
					_routeEventBus2.default.publish("ROUTE_CHANGE_REQUESTED", {
						path: synthEvt.currentTarget.getAttribute("href")
					});
				} else {
					//Do nothing, If False !!
					console.log("Link Clicked, but Page is currently holded");
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'a',
					_extends({ onClick: this.linkClicked.bind(this) }, this.props),
					this.props.children
				);
			}
		}]);

		return Link;
	}(_react.Component);

	Link.defaultProps = {};
	Link.propTypes = {};

	exports.default = Link;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eventbus = __webpack_require__(5);

	var _eventbus2 = _interopRequireDefault(_eventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routeEventBus = new _eventbus2.default(); /**
	                                               * Created by narendrasisodiya on 14/03/16.
	                                               */

	exports.default = routeEventBus;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["EventBus"] = factory();else root["EventBus"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports) {

				"use strict";

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				/*
	   	 The MIT License (MIT)
	    Copyright (c) 2016 Narendra Sisodiya https://github.com/nsisodiya
	   	 */

				var EventBus = function () {
					function EventBus() {
						_classCallCheck(this, EventBus);

						this._topicList = {};
						this._globalCallbackList = [];
					}

					_createClass(EventBus, [{
						key: "subscribe",
						value: function subscribe(topic, callback) {
							var _this = this;

							if (typeof topic !== "string" || typeof callback !== "function") {
								throw "EventBus Unable to subscribe - topic is not string or callback is not a function";
							}
							if (this._topicList[topic] === undefined) {
								this._topicList[topic] = [];
							}

							var i = this._topicList[topic].push(callback) - 1;

							//UnSub function !!
							return function () {
								//Setting Callback as null;
								_this._topicList[topic][i] = null;
							};
						}
					}, {
						key: "subscribeAll",
						value: function subscribeAll(callback) {
							var _this2 = this;

							var i = this._globalCallbackList.push(callback) - 1;
							return function () {
								_this2._globalCallbackList[i] = null;
							};
						}
					}, {
						key: "publish",
						value: function publish(topic) {
							for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
								args[_key - 1] = arguments[_key];
							}

							if (this._topicList[topic] !== undefined) {
								this._topicList[topic].map(function (callback) {
									if (callback !== null) {
										//SKIP the unsubscribed callback !
										callback.apply(null, args);
									}
								});
							}
							this._globalCallbackList.map(function (callback) {
								if (callback !== null) {
									//SKIP the unsubscribed callback !
									callback.apply(null, [topic].concat(args));
								}
							});
						}
					}]);

					return EventBus;
				}();

				module.exports = EventBus;

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pathparser = __webpack_require__(8);

	var _pathparser2 = _interopRequireDefault(_pathparser);

	var _routeEventBus = __webpack_require__(4);

	var _routeEventBus2 = _interopRequireDefault(_routeEventBus);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by narendrasisodiya on 14/03/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var simplePathParser = new _pathparser2.default();

	var RouteLoader = function (_Component) {
		_inherits(RouteLoader, _Component);

		function RouteLoader(props, context) {
			_classCallCheck(this, RouteLoader);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RouteLoader).call(this, props, context));

			console.log("%c RouteLoader Component -> Init ", 'background: red; color: white');
			_this.state = {
				currentRoute: null
			};

			_this.unsub1 = _routeEventBus2.default.subscribe("ROUTE_CHANGE_REQUESTED", function (routeObj) {
				simplePathParser.run(routeObj.path);
			});

			_this.unsub2 = _routeEventBus2.default.subscribe("ROUTE_CHANGE_REQUESTED_POPSTATE", function (routeObj) {
				console.log("Path Requested", window.location.pathname);
				_routeEventBus2.default.publish("ROUTE_CHANGE_REQUESTED", {
					path: window.location.pathname
				});
				//simplePathParser.run(window.location.pathname);
			});

			var self = _this;
			Object.keys(_this.props.config.routes).map(function (i) {
				console.log("adding", i);
				simplePathParser.add(i, function () {
					//Load Component which mached with {i}
					this.url = "/" + this.url;

					// Change State if new Component is requested
					//if (self.state.currentRoute !== i) {
					self.setState({
						currentRoute: i,
						url: this.url,
						args: this
					});
					//}

					//Now Set Path
					if (window.location.pathname !== this.url) {
						history.pushState({}, "WTF", this.url);
					}

					_routeEventBus2.default.publish("ROUTE_CHANGE_DONE", {
						currentRoute: i,
						url: this.url,
						args: this
					});
				});
			});
			return _this;
		}

		_createClass(RouteLoader, [{
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unsub1();
				this.unsub2();
				console.log("%c RouteLoader Component -> UnMount ", 'background: black; color: yellow');
			}
		}, {
			key: 'render',
			value: function render() {
				console.log("%c RouteLoader Component -> Render ", 'background: black; color: pink');
				if (this.state.currentRoute === null) {
					return _react2.default.createElement('div', null);
				}
				var C = this.props.config.routes[this.state.currentRoute];
				return _react2.default.createElement(
					'div',
					{ styleName: 'container' },
					_react2.default.createElement(C, this.state.args)
				);
			}
		}]);

		return RouteLoader;
	}(_react.Component);

	RouteLoader.defaultProps = {};
	RouteLoader.propTypes = {};

	exports.default = RouteLoader;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * pathparser.js - tiny URL parser/router
	 *
	 * Copyright (c) 2014-2016 Dan Stillman
	 * License: MIT
	 * https://github.com/dstillman/pathparser.js
	 */
	(function (factory) {
	    // AMD/RequireJS
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        // CommonJS/Node
	    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	            module.exports = factory();
	            // Mozilla JSM
	        } else if (~String(this).indexOf('BackstagePass')) {
	                EXPORTED_SYMBOLS = ["PathParser"];
	                PathParser = factory();
	                // Browser global
	            } else {
	                    PathParser = factory();
	                }
	})(function () {
	    "use strict";

	    var PathParser = function PathParser(params) {
	        this.rules = [];
	        this.params = params;
	    };

	    PathParser.prototype = function () {
	        function getParamsFromRule(rule, pathParts, queryParts) {
	            var params = {};
	            var missingParams = {};

	            // Don't match if fixed rule is longer than path
	            if (rule.parts.length < pathParts.length) return false;

	            // Parse path components
	            for (var i = 0; i < rule.parts.length; i++) {
	                var rulePart = rule.parts[i];
	                var part = pathParts[i];

	                if (part !== undefined) {
	                    // Assign part to named parameter
	                    if (rulePart.charAt(0) == ':') {
	                        params[rulePart.substr(1)] = part;
	                        continue;
	                    }
	                    // If explicit parts differ, no match
	                    else if (rulePart !== part) {
	                            return false;
	                        }
	                }
	                // If no path part and not a named parameter, no match
	                else if (rulePart.charAt(0) != ':') {
	                        return false;
	                    } else {
	                        missingParams[rulePart.substr(1)] = true;
	                    }
	            }

	            // Parse query strings
	            for (var i = 0; i < queryParts.length; i++) {
	                var nameValue = queryParts[i].split('=', 2);
	                var key = nameValue[0];
	                // But ignore empty parameters and don't override named parameters
	                if (nameValue.length == 2 && !params[key] && !missingParams[key]) {
	                    params[key] = nameValue[1];
	                }
	            }

	            return params;
	        }

	        return {
	            add: function add(route, handler) {
	                this.rules.push({
	                    parts: route.replace(/^\//, '').split('/'),
	                    handler: handler
	                });
	            },

	            run: function run(url) {
	                if (url.length) {
	                    url = url
	                    // Remove redundant slashes
	                    .replace(/\/+/g, '/')
	                    // Strip leading and trailing '/' (at end or before query string)
	                    .replace(/^\/|\/($|\?)/, '')
	                    // Strip fragment identifiers
	                    .replace(/#.*$/, '');
	                }

	                var urlSplit = url.split('?', 2);
	                var pathParts = urlSplit[0].split('/', 50);
	                var queryParts = urlSplit[1] ? urlSplit[1].split('&', 50) : [];

	                for (var i = 0; i < this.rules.length; i++) {
	                    var rule = this.rules[i];
	                    var params = getParamsFromRule(rule, pathParts, queryParts);
	                    if (params) {
	                        params.url = url;
	                        // Automatic parameter assignment
	                        if (this.params) {
	                            for (var param in params) {
	                                this.params[param] = params[param];
	                            }
	                        }
	                        // Call handler with 'this' bound to parameter object
	                        if (rule.handler) {
	                            rule.handler.call(params);
	                        }
	                        return true;
	                    }
	                }
	                return false;
	            }
	        };
	    }();

	    return PathParser;
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by narendrasisodiya on 14/03/16.
	 */

	//TODO - use some external lib for this function.

	exports.default = function () {
		if (document.addEventListener) {
			return function (el, type, fn) {
				if (el && el.nodeName || el === window) {
					el.addEventListener(type, fn, false);
				} else if (el && el.length) {
					for (var i = 0; i < el.length; i++) {
						addEvent(el[i], type, fn);
					}
				}
			};
		} else {
			return function (el, type, fn) {
				if (el && el.nodeName || el === window) {
					el.attachEvent('on' + type, function () {
						return fn.call(el, window.event);
					});
				} else if (el && el.length) {
					for (var i = 0; i < el.length; i++) {
						addEvent(el[i], type, fn);
					}
				}
			};
		}
	}();

/***/ }
/******/ ])
});
;