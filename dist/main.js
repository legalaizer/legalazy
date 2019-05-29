/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);



document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".content");

  if (container) {
    _Starter__WEBPACK_IMPORTED_MODULE_1__["default"].init(container).then(function () {
      var game = new _Game_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Starter =
/*#__PURE__*/
function () {
  function Starter() {
    var _this = this;

    _classCallCheck(this, Starter);

    // pixi app
    this.app = null;
    this._paused = false; // this.isDeveloperMode = true;

    this._init = {};
    this._init.initPromise = new Promise(function (resolve) {
      _this._init.setInitiated = resolve;
    });
    this.size = {
      width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
      height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height
    };
  }

  _createClass(Starter, [{
    key: "pause",
    value: function pause() {
      if (this._paused) {
        this.ticker.start();
      } else {
        this.ticker.stop();
      }

      this._paused = !this._paused;
    }
  }, {
    key: "init",
    value: function init() {
      var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
      var _this$size = this.size,
          width = _this$size.width,
          height = _this$size.height;
      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
        width: width,
        height: height,
        transparent: true
      });
      container.appendChild(this.app.view);
      this.field = _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].drawSvgSprite({
        parent: this.app.stage,
        name: "bg_1",
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height,
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        anchor: 0.5
      });
      this.field.interactive = true;
      this.ticker = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Ticker"]();
      this.ticker.start();
      this.ticker.add(function () {
        tween_js__WEBPACK_IMPORTED_MODULE_1___default.a.update();
      });

      this._init.setInitiated();

      return this._init.initPromise;
    }
  }, {
    key: "registerTick",
    value: function registerTick(action) {
      var _this2 = this;

      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(action)) {
        return this.initiated.then(function () {
          var delta = _this2.app.ticker.deltaMS;

          var wrap = function wrap() {
            action(delta);
          };

          _this2.ticker.add(wrap);

          return wrap;
        });
      }

      return Promise.reject();
    }
  }, {
    key: "unregisterTick",
    value: function unregisterTick(action) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(action)) {
        this.ticker.remove(action);
      }
    }
  }, {
    key: "initiated",
    get: function get() {
      return this._init.initPromise;
    }
  }]);

  return Starter;
}();

var starter = new Starter();
/* harmony default export */ __webpack_exports__["default"] = (starter);

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SETTINGS = {
  appSizes: {
    width: 1024,
    height: 768
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SETTINGS);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "drawSvgSprite",
    value: function drawSvgSprite(settings) {
      var name = settings.name,
          text = settings.text,
          width = settings.width,
          height = settings.height,
          x = settings.x,
          y = settings.y,
          parent = settings.parent,
          onClick = settings.onClick,
          styles = settings.styles,
          anchor = settings.anchor,
          alpha = settings.alpha;
      var base64source = _images__WEBPACK_IMPORTED_MODULE_1__["default"][name];
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromLoader(base64source);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      width && (sprite.width = width);
      height && (sprite.height = height);
      sprite.x = x;
      sprite.y = y;
      sprite.anchor.set(anchor || 0);
      parent.addChild(sprite);
      sprite.alpha = alpha || 1;

      if (text && width && height) {
        var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, styles);
        txt.x = sprite.width / 2;
        txt.y = sprite.height / 2;
        txt.anchor.set(0.5);
        sprite.addChild(txt);
      }

      if (onClick) {
        sprite.interactive = true;
        sprite.on("pointerdown", onClick);
      }

      return sprite;
    }
  }, {
    key: "drawText",
    value: function drawText(settings) {
      var text = settings.text,
          x = settings.x,
          y = settings.y,
          color = settings.color,
          parent = settings.parent,
          style = settings.style;
      var txt = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"](text, style);
      txt.x = x;
      txt.y = y;
      txt.anchor.set(0.5);
      return parent.addChild(txt);
    }
  }, {
    key: "drawGraphics",
    value: function drawGraphics(parent, setting) {
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(setting.color, setting.alpha);
      graphics.drawRoundedRect(setting.x, setting.y, setting.w, setting.h, setting.rounded);
      graphics.endFill();

      if (parent) {
        parent.addChild(graphics);
      }

      return graphics;
    }
  }, {
    key: "drawRoundedEmptyGraphic",
    value: function drawRoundedEmptyGraphic(settings) {
      var x = settings.x,
          y = settings.y,
          lineColor = settings.lineColor,
          parent = settings.parent,
          width = settings.width,
          height = settings.height,
          rounded = settings.rounded,
          lineWidth = settings.lineWidth,
          fillAlpha = settings.fillAlpha,
          fillColor = settings.fillColor,
          text = settings.text,
          style = settings.style;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(lineWidth, lineColor, 1);
      graphics.beginFill(fillColor || 0x000000, fillAlpha);
      graphics.drawRoundedRect(x, y, width, height, rounded);
      graphics.endFill();
      parent.addChild(graphics);

      if (text) {
        Utils.drawText({
          parent: graphics,
          text: text,
          x: x + width / 2,
          y: y + height / 2,
          style: style
        });
      }

      return graphics;
    }
  }, {
    key: "createContainer",
    value: function createContainer(settings) {
      var menuIconContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      menuIconContainer.x = settings.x;
      menuIconContainer.y = settings.y;
      menuIconContainer.interactive = settings.isInteractive;
      settings.w && (menuIconContainer.width = settings.w);
      settings.h && (menuIconContainer.height = settings.h);

      if (settings.cb) {
        menuIconContainer.interactive = true;
        menuIconContainer.on("pointerdown", settings.cb);
      }

      settings.parent.addChild(menuIconContainer);
      return menuIconContainer;
    }
  }, {
    key: "isFunction",
    value: function isFunction(target) {
      return typeof target === "function";
    }
  }, {
    key: "randomNumber",
    value: function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, {
    key: "getGuid",
    value: function getGuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Utils;
}();

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _ControlPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _LevelManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);
/* harmony import */ var _scenes_GamePauseScene_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87);
/* harmony import */ var _scenes_RestartScene_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88);
/* harmony import */ var _scenes_StarScene_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }












var Game = function Game() {
  _classCallCheck(this, Game);

  _LevelManager_js__WEBPACK_IMPORTED_MODULE_3__["default"].restart();
  this.controlPanel = new _ControlPanel_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("pause", new _scenes_GamePauseScene_js__WEBPACK_IMPORTED_MODULE_6__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("restart", new _scenes_RestartScene_js__WEBPACK_IMPORTED_MODULE_7__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].registerScene("startGame", new _scenes_StarScene_js__WEBPACK_IMPORTED_MODULE_8__["default"]());
  _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_5__["default"].showScene("startGame");
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _Lives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _HandleUsersActions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_7__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Player =
/*#__PURE__*/
function () {
  function Player(x, y, name) {
    _classCallCheck(this, Player);

    this.container = null;
    this.board = null;
    this.sprite = null;
    this.gun = null;
    this.muzzle = null;
    this.healthBar = null;
    this.gunTween = null;
    this.maxLives = 5;
    this.lives = this.maxLives;
    this.healthBarOffset = 30;
    this._timeBetweenShot = 500;
    this._destroyed = false;
    this.init(name, x, y);
    this.sprite.setParent(this.container);

    this._updateHealthBar();

    new component_emitter__WEBPACK_IMPORTED_MODULE_4___default.a(this);
    this.lifes = new _Lives_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, -(_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2));
  }

  _createClass(Player, [{
    key: "init",
    value: function init(name, x, y) {
      this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createContainer({
        x: x,
        y: y
      });
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this.container);
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createSprite({
        name: "player_board_1",
        x: 0,
        y: -10
      });
      this.board.anchor.set(0.5);
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createSprite({
        name: name,
        x: 0,
        y: -60
      });
      this.sprite.anchor.set(0.5);
      this.sprite.setParent(this.container);
      this.gun = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createSprite({
        name: "gun_1",
        x: 75,
        y: this.board.y - 20
      });
      this.gun.anchor.set(0.5);
      this.gun.setParent(this.container);
      this.muzzle = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].createSprite({
        name: "Muzzle",
        x: 75,
        y: this.board.y - 90
      });
      this.muzzle.anchor.set(0.5);
      this.muzzle.alpha = 0;
      this.muzzle.setParent(this.container);
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_6__["default"].fillRect({
        width: 100,
        height: 8,
        alpha: 0.8,
        color: 0xfff133
      });
      this.healthBar.x -= 45;
      this.healthBar.y += 15;
      this.healthBar.setParent(this.container);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      var cursorPosX = _HandleUsersActions_js__WEBPACK_IMPORTED_MODULE_3__["default"].cursorPosition.x;
      var speed = 1;
      var dx = cursorPosX - this.container.x;

      if (dx !== 0) {
        var distance = Math.min(Math.abs(dx), speed * delta);
        this.container.x += Math.sign(dx) * distance;
      }

      var halfWidth = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2;
      var halfPlayerWidth = this.container.width / 2;

      if (this.container.x + halfPlayerWidth > halfWidth || this.container.x - halfPlayerWidth < -halfWidth) {
        this.container.x = this.container.x + halfPlayerWidth > halfWidth ? halfWidth - halfPlayerWidth : -halfWidth + halfPlayerWidth;
      }
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        this.animateGun();
        var _this$gun = this.gun,
            gun_x = _this$gun.x,
            board_y = _this$gun.y,
            gun_height = _this$gun.height;
        var _this$container = this.container,
            base_x = _this$container.x,
            base_y = _this$container.y; // create bullet

        var bulletX = base_x + gun_x;
        var bulletY = base_y - gun_height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_5__["PlayerDefaultBullet"](bulletX, bulletY, 1, this));
        this._timeBetweenShot = 1000;
      }
    }
  }, {
    key: "_updateHealthBar",
    value: function _updateHealthBar() {
      this.healthBar.width = 100 / this.maxLives * this.lives;
    }
  }, {
    key: "canInteract",
    value: function canInteract() {
      return true;
    }
  }, {
    key: "onCollision",
    value: function onCollision() {
      this.lives--;
      this.lifes.decreaseLive = 1;

      this._updateHealthBar();

      if (this.lives <= 0) {
        this.destroy();
      }
    }
  }, {
    key: "animateGun",
    value: function animateGun() {
      var _this = this;

      if (this.gunTween) {
        this.gunTween.stop();
        this.gun.pivot.x = 0;
      }

      this.muzzle.alpha = 1;
      this.gunTween = new tween_js__WEBPACK_IMPORTED_MODULE_7___default.a.Tween(this.gun.pivot).to({
        y: [-10, 0]
      }, 60).yoyo(false).easing(tween_js__WEBPACK_IMPORTED_MODULE_7___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this.muzzle.alpha = 1 - k;
      }).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.emit("destroy");
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this.container);
      this.container.destroy(true);
      this.container = null;
      this.sprite = null;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this._move(delta);

      this._shoot(delta);
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$container2 = this.container,
          base_x = _this$container2.x,
          base_y = _this$container2.y;
      var _this$sprite = this.sprite,
          width = _this$sprite.width,
          height = _this$sprite.height,
          x = _this$sprite.x,
          y = _this$sprite.y;
      return {
        x: base_x + x,
        y: base_y + y,
        width: width,
        height: height
      };
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Lives =
/*#__PURE__*/
function () {
  function Lives(x, y) {
    var _this = this;

    _classCallCheck(this, Lives);

    this.lives = 3;
    this._container = null;
    this._substrate = null;
    this._sprite = null;
    this._spriteText = null;
    this._heartTweenDecrease = null;
    this._heartTweenIncrease = null;
    this._text = "x";
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init(x, y);

      _this._startAnimation();
    });
  }

  _createClass(Lives, [{
    key: "_init",
    value: function _init(x, y) {
      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createContainer({
        x: _settings_js__WEBPACK_IMPORTED_MODULE_5__["default"].appSizes.width / 2 - 70,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_5__["default"].appSizes.height / 2)
      });
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this._container);
      this._substrate = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "lives_substrate",
        x: 0,
        y: 10
      });

      this._substrate.scale.set(0.6);

      this._substrate.anchor.set(0.5, 0);

      this._substrate.setParent(this._container);

      this._sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "live",
        x: -60,
        y: 90
      });

      this._sprite.setParent(this._substrate);

      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this._substrate,
        text: "".concat(this._text, " ").concat(this.lives),
        x: 30,
        y: 110,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_2__["default"].score
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._substrate).to({
        rotation: [-0.1, 0, 0.1, 0]
      }, 5000).yoyo(false).repeat(Infinity).start();
    }
  }, {
    key: "showDecrease",
    value: function showDecrease() {
      var _this2 = this;

      this._spriteDuplicate.alpha = 1;
      this._heartTweenDecrease = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._spriteDuplicate.pivot).to({
        y: 550
      }, 1000).yoyo(false).easing(tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this2._spriteDuplicate.alpha = 1 - k;
      }).start();
    }
  }, {
    key: "showIncrease",
    value: function showIncrease() {
      var _this3 = this;

      this._spriteDuplicate.alpha = 1;
      var sizes = {
        x: [1, 1.2, 1],
        y: [1, 1.2, 1]
      };
      this._heartTweenIncrease = new tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Tween(this._spriteDuplicate.scale).to({
        x: sizes.x,
        y: sizes.y
      }, 300).yoyo(false).easing(tween_js__WEBPACK_IMPORTED_MODULE_4___default.a.Easing.Quadratic.Out).onComplete(function () {
        _this3._spriteDuplicate.alpha = 0;
      }).start();
    }
  }, {
    key: "increaseLive",
    set: function set(val) {
      this.lives += val;
      this._spriteText.text = "".concat(this._text, " ").concat(this.lives);
    }
  }, {
    key: "decreaseLive",
    set: function set(val) {
      if (this.lives < 0) {
        // this.emit('end game');
        return;
      }

      this.lives -= val;
      this._spriteText.text = "".concat(this._text, " ").concat(this.lives);
    }
  }]);

  return Lives;
}();

/* harmony default export */ __webpack_exports__["default"] = (Lives);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var STYLES = {
  score: {
    align: "center",
    dropShadow: true,
    dropShadowAngle: 0.4,
    dropShadowColor: "#0d1144",
    dropShadowDistance: 2,
    fill: "#857833",
    fillGradientStops: [1],
    fontFamily: "Comic Sans MS",
    fontSize: 40,
    fontWeight: 900,
    letterSpacing: 2,
    lineJoin: "round",
    miterLimit: 5,
    padding: 4,
    stroke: "#f64949",
    strokeThickness: 2,
    whiteSpace: "normal"
  },
  lives: {
    align: "center",
    dropShadow: true,
    dropShadowAngle: 0.4,
    dropShadowColor: "#0d1144",
    dropShadowDistance: 1,
    fill: "#857833",
    fillGradientStops: [1],
    fontFamily: "Comic Sans MS",
    fontSize: 20,
    fontWeight: 900,
    letterSpacing: 2,
    lineJoin: "round",
    miterLimit: 5,
    padding: 4,
    stroke: "#f64949",
    strokeThickness: 2,
    whiteSpace: "normal"
  },
  IntroPlayerName: {
    align: "center",
    dropShadow: true,
    dropShadowAngle: 0.4,
    dropShadowColor: "#0d1144",
    dropShadowDistance: 2,
    fill: "#857833",
    fillGradientStops: [1],
    fontFamily: "Comic Sans MS",
    fontSize: 30,
    fontWeight: 900,
    letterSpacing: 2,
    lineJoin: "round",
    miterLimit: 5,
    padding: 4,
    stroke: "#f64949",
    strokeThickness: 2,
    whiteSpace: "normal"
  },
  miniBoss: {
    align: "center",
    dropShadow: true,
    dropShadowAlpha: 0.6,
    dropShadowAngle: 1,
    dropShadowBlur: 3,
    dropShadowColor: "#121612",
    dropShadowDistance: 2,
    fill: "#cc5353",
    fillGradientStops: [0.8],
    fontFamily: "Comic Sans MS",
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: 1,
    lineHeight: 1,
    lineJoin: "round",
    miterLimit: 11,
    stroke: "#23291e",
    strokeThickness: 2,
    whiteSpace: "normal"
  },
  logo: {
    align: "center",
    dropShadow: true,
    dropShadowAlpha: 0.6,
    dropShadowAngle: 1,
    dropShadowBlur: 3,
    dropShadowColor: "#121612",
    dropShadowDistance: 2,
    fill: "#cc5353",
    fillGradientStops: [0.8],
    fontFamily: "Comic Sans MS",
    fontSize: 54,
    fontWeight: 900,
    letterSpacing: 16,
    lineHeight: 1,
    lineJoin: "round",
    miterLimit: 11,
    stroke: "#23291e",
    strokeThickness: 2,
    whiteSpace: "normal"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (STYLES);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphicsHelper; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GraphicsHelper =
/*#__PURE__*/
function () {
  function GraphicsHelper() {
    _classCallCheck(this, GraphicsHelper);
  }

  _createClass(GraphicsHelper, null, [{
    key: "createContainer",
    value: function createContainer() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _settings$x = settings.x,
          x = _settings$x === void 0 ? 0 : _settings$x,
          _settings$y = settings.y,
          y = _settings$y === void 0 ? 0 : _settings$y,
          _settings$width = settings.width,
          width = _settings$width === void 0 ? 0 : _settings$width,
          _settings$height = settings.height,
          height = _settings$height === void 0 ? 0 : _settings$height;
      var container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
      container.x = x;
      container.y = y;
      container.width = width;
      container.height = height;
      return container;
    }
  }, {
    key: "createSprite",
    value: function createSprite(settings) {
      var name = settings.name,
          _settings$x2 = settings.x,
          x = _settings$x2 === void 0 ? 0 : _settings$x2,
          _settings$y2 = settings.y,
          y = _settings$y2 === void 0 ? 0 : _settings$y2,
          onClick = settings.onClick;
      var base64source = _images__WEBPACK_IMPORTED_MODULE_1__["default"][name];
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].fromLoader(base64source);
      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](texture);
      sprite.x = x;
      sprite.y = y;

      if (onClick) {
        sprite.buttonMode = true;
        sprite.interactive = true;
        sprite.on("pointerdown", onClick);
      }

      return sprite;
    }
  }, {
    key: "drawGrid",
    value: function drawGrid(settings) {
      var size = settings.size,
          _settings$capacity = settings.capacity,
          capacity = _settings$capacity === void 0 ? 10 : _settings$capacity,
          _settings$color = settings.color,
          color = _settings$color === void 0 ? 0x00ff00 : _settings$color,
          _settings$alpha = settings.alpha,
          alpha = _settings$alpha === void 0 ? 1 : _settings$alpha;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(1, color, alpha);
      var cellSize = size / capacity;

      _toConsumableArray(Array(capacity).keys()).map(function (x) {
        _toConsumableArray(Array(capacity).keys()).map(function (y) {
          graphics.drawRect(cellSize * x, cellSize * y, cellSize, cellSize);
        });
      });

      return graphics;
    }
  }, {
    key: "drawRect",
    value: function drawRect(settings) {
      var _settings$x3 = settings.x,
          x = _settings$x3 === void 0 ? 0 : _settings$x3,
          _settings$y3 = settings.y,
          y = _settings$y3 === void 0 ? 0 : _settings$y3,
          width = settings.width,
          height = settings.height,
          _settings$color2 = settings.color,
          color = _settings$color2 === void 0 ? 0x00ff00 : _settings$color2,
          _settings$alpha2 = settings.alpha,
          alpha = _settings$alpha2 === void 0 ? 1 : _settings$alpha2;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.lineStyle(1, color, alpha);
      graphics.drawRect(x, y, width, height);
      return graphics;
    }
  }, {
    key: "fillRect",
    value: function fillRect(settings) {
      var _settings$x4 = settings.x,
          x = _settings$x4 === void 0 ? 0 : _settings$x4,
          _settings$y4 = settings.y,
          y = _settings$y4 === void 0 ? 0 : _settings$y4,
          width = settings.width,
          height = settings.height,
          _settings$color3 = settings.color,
          color = _settings$color3 === void 0 ? 0x00ff00 : _settings$color3,
          _settings$alpha3 = settings.alpha,
          alpha = _settings$alpha3 === void 0 ? 1 : _settings$alpha3;
      var graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
      graphics.beginFill(color, alpha);
      graphics.drawRect(x, y, width, height);
      graphics.endFill();
      return graphics;
    }
  }]);

  return GraphicsHelper;
}();



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var HandleUsersActions =
/*#__PURE__*/
function () {
  function HandleUsersActions() {
    var _this = this;

    _classCallCheck(this, HandleUsersActions);

    this.cursorPosition = {
      x: 0,
      y: 0
    };
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.on("pointermove", function (e) {
        return _this.onPointerMove(e);
      });
    });
  }

  _createClass(HandleUsersActions, [{
    key: "onPointerMove",
    value: function onPointerMove(event) {
      var location = event.data.getLocalPosition(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);
      this.cursorPosition.x = location.x;
      this.cursorPosition.y = location.y;
    }
  }]);

  return HandleUsersActions;
}();

/* harmony default export */ __webpack_exports__["default"] = (new HandleUsersActions());

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarBullet", function() { return StarBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyBulletWater", function() { return EasyBulletWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumBulletWater", function() { return MediumBulletWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDefaultBullet", function() { return PlayerDefaultBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrappDillerDefaultBullet", function() { return TrappDillerDefaultBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiunkDefaultBullet", function() { return LiunkDefaultBullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OzmenDefaultBullet", function() { return OzmenDefaultBullet; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Bullet =
/*#__PURE__*/
function () {
  function Bullet(x, y, dir, owner) {
    _classCallCheck(this, Bullet);

    this.sprite = null;
    this._owner = owner;
    this._shotTime = 0;
    this._dir = dir;
    this._destroyed = false;
    this.speed = 0.1;
    this.rotation = 0;
    this.init(x, y);
    this.sprite.setParent(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(Bullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "canInteract",
    value: function canInteract(obj) {
      return obj.constructor != this._owner.constructor;
    }
  }, {
    key: "onCollision",
    value: function onCollision(obj) {
      this.destroy();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      this.emit("destroy");
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this.sprite);
      this._owner = null;
      this.sprite.destroy();
      this.sprite = null;
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      if (!this.sprite) {
        return;
      }

      this._move(delta);

      if (2 * _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height < this.sprite.y || this.sprite.y < -2 * _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height) {
        this.destroy();
      }
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$sprite = this.sprite,
          width = _this$sprite.width,
          height = _this$sprite.height,
          x = _this$sprite.x,
          y = _this$sprite.y;
      return {
        x: x - width / 2,
        y: y - height / 2,
        width: width,
        height: height
      };
    }
  }]);

  return Bullet;
}();


var StarBullet =
/*#__PURE__*/
function (_Bullet) {
  _inherits(StarBullet, _Bullet);

  function StarBullet(x, y, dir, owner) {
    var _this;

    _classCallCheck(this, StarBullet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StarBullet).call(this, x, y, dir, owner));
    _this.speed = 0.3;
    _this.rotation = 0.15;
    return _this;
  }

  _createClass(StarBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "star-shuriken",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }]);

  return StarBullet;
}(Bullet);
var EasyBulletWater =
/*#__PURE__*/
function (_Bullet2) {
  _inherits(EasyBulletWater, _Bullet2);

  function EasyBulletWater(x, y, dir, owner) {
    var _this2;

    _classCallCheck(this, EasyBulletWater);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(EasyBulletWater).call(this, x, y, dir, owner));
    _this2.speed = 0.2;
    _this2.rotation = 0.1;
    return _this2;
  }

  _createClass(EasyBulletWater, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(EasyBulletWater.prototype), "destroy", this).call(this);
    }
  }]);

  return EasyBulletWater;
}(Bullet);
var MediumBulletWater =
/*#__PURE__*/
function (_Bullet3) {
  _inherits(MediumBulletWater, _Bullet3);

  function MediumBulletWater(x, y, dir, owner) {
    var _this3;

    _classCallCheck(this, MediumBulletWater);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MediumBulletWater).call(this, x, y, dir, owner));
    _this3.speed = 0.25;
    _this3.rotation = 0.5;
    return _this3;
  }

  _createClass(MediumBulletWater, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemy_default_bullet_2",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..10", this.collisionInfo.x, this.collisionInfo.y);

      _get(_getPrototypeOf(MediumBulletWater.prototype), "destroy", this).call(this);
    }
  }]);

  return MediumBulletWater;
}(Bullet);
var PlayerDefaultBullet =
/*#__PURE__*/
function (_Bullet4) {
  _inherits(PlayerDefaultBullet, _Bullet4);

  function PlayerDefaultBullet(x, y, dir, owner) {
    var _this4;

    _classCallCheck(this, PlayerDefaultBullet);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PlayerDefaultBullet).call(this, x, y, dir, owner));
    _this4.speed = 0.4;
    _this4.rotation = 0;
    return _this4;
  }

  _createClass(PlayerDefaultBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "player_default_bullet_1",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(PlayerDefaultBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return PlayerDefaultBullet;
}(Bullet);
var TrappDillerDefaultBullet =
/*#__PURE__*/
function (_Bullet5) {
  _inherits(TrappDillerDefaultBullet, _Bullet5);

  function TrappDillerDefaultBullet(x, y, dir, owner) {
    var _this5;

    _classCallCheck(this, TrappDillerDefaultBullet);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(TrappDillerDefaultBullet).call(this, x, y, dir, owner));
    _this5.speed = 0.35;
    _this5.rotation = 0.17;
    _this5._dirX = _this5.sprite.x < 0 ? Math.random() : -Math.random();
    return _this5;
  }

  _createClass(TrappDillerDefaultBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "trapDillerDefaultBullet",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(TrappDillerDefaultBullet.prototype), "destroy", this).call(this);
    }
  }]);

  return TrappDillerDefaultBullet;
}(Bullet);
var LiunkDefaultBullet =
/*#__PURE__*/
function (_Bullet6) {
  _inherits(LiunkDefaultBullet, _Bullet6);

  function LiunkDefaultBullet(x, y, dir, owner) {
    var _this6;

    _classCallCheck(this, LiunkDefaultBullet);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(LiunkDefaultBullet).call(this, x, y, dir, owner));
    _this6.speed = 0.35;
    _this6.rotation = 0.14;
    _this6._dirX = _this6.sprite.x < 0 ? Math.random() : -Math.random();
    return _this6;
  }

  _createClass(LiunkDefaultBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "LiunkDefaultBullet",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      _get(_getPrototypeOf(LiunkDefaultBullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return LiunkDefaultBullet;
}(Bullet);
var OzmenDefaultBullet =
/*#__PURE__*/
function (_Bullet7) {
  _inherits(OzmenDefaultBullet, _Bullet7);

  function OzmenDefaultBullet(x, y, dir, owner) {
    var _this7;

    _classCallCheck(this, OzmenDefaultBullet);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(OzmenDefaultBullet).call(this, x, y, dir, owner));
    _this7.speed = 0.4;
    _this7.rotation = 0.12;
    _this7._dirX = _this7.sprite.x < 0 ? Math.random() : -Math.random();

    _this7._startAnimation();

    return _this7;
  }

  _createClass(OzmenDefaultBullet, [{
    key: "init",
    value: function init(x, y) {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "OzmenDefaultBullet",
        x: x,
        y: y
      });
      this.sprite.anchor.set(0.5);
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._animationTween = new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(this.sprite.scale).to({
        x: [1.3, 0.8, 1],
        y: [1.3, 0.8, 1]
      }, 1000).repeat(Infinity).start();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("b:1..15", this.collisionInfo.x, this.collisionInfo.y, 1);

      this._animationTween.stop();

      _get(_getPrototypeOf(OzmenDefaultBullet.prototype), "destroy", this).call(this);
    }
  }, {
    key: "_move",
    value: function _move(delta) {
      this.sprite.y -= delta * this.speed * this._dir;
      this.sprite.x += delta * this.speed * this._dirX;
      this.sprite.rotation += this.rotation;
    }
  }]);

  return OzmenDefaultBullet;
}(Bullet);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Explosion =
/*#__PURE__*/
function () {
  function Explosion() {
    _classCallCheck(this, Explosion);
  }

  _createClass(Explosion, [{
    key: "animate",
    value: function animate(alias, x, y, speed) {
      var textures = Explosion._textures;

      if (!textures[alias]) {
        var _alias$split = alias.split(/[:(?:\.\.)]+/),
            _alias$split2 = _slicedToArray(_alias$split, 3),
            prefix = _alias$split2[0],
            from = _alias$split2[1],
            to = _alias$split2[2];

        textures[alias] = [];

        for (var i = from; i <= to; i++) {
          textures[alias].push(pixi_js__WEBPACK_IMPORTED_MODULE_1__["Texture"].fromLoader(_images__WEBPACK_IMPORTED_MODULE_0__["default"]["".concat(prefix).concat(i)]));
        }
      }

      var animatedSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["AnimatedSprite"](textures[alias]);
      animatedSprite.anchor.set(0.5, 0.5);
      animatedSprite.x = x;
      animatedSprite.y = y;
      animatedSprite.animationSpeed = speed || 0.2;
      animatedSprite.loop = false;

      animatedSprite.onComplete = function () {
        animatedSprite.stop();
        _Starter__WEBPACK_IMPORTED_MODULE_2__["default"].field.removeChild(animatedSprite);
        animatedSprite.destroy();
      };

      _Starter__WEBPACK_IMPORTED_MODULE_2__["default"].field.addChild(animatedSprite);
      animatedSprite.play();
    }
  }]);

  return Explosion;
}();


Explosion._textures = {};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ControlPanel =
/*#__PURE__*/
function () {
  function ControlPanel() {
    _classCallCheck(this, ControlPanel);

    this._container = null;
    this._pauseButton = null;
    this._restartButton = null;

    this._init();
  }

  _createClass(ControlPanel, [{
    key: "_init",
    value: function _init() {
      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createContainer({
        x: 0,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2 - 30
      });
      _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this._container);
      this._pauseButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "pause",
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 50,
        y: -10,
        onClick: function onClick() {
          _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("pause");
        }
      });
      this._pauseButton.buttonMode = true;

      this._pauseButton.anchor.set(0.5);

      this._pauseButton.scale.set(0.6);

      this._pauseButton.setParent(this._container);

      this._restartButton = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_3__["default"].createSprite({
        name: "restart",
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 115,
        y: -10,
        onClick: function onClick() {
          _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].showScene("pause");
        }
      });
      this._restartButton.buttonMode = true;

      this._restartButton.anchor.set(0.5);

      this._restartButton.scale.set(0.6);

      this._restartButton.setParent(this._container);
    }
  }]);

  return ControlPanel;
}();

/* harmony default export */ __webpack_exports__["default"] = (ControlPanel);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SceneManager =
/*#__PURE__*/
function () {
  function SceneManager() {
    _classCallCheck(this, SceneManager);

    this._scenes = {};
    this._activeScene = null;
  }

  _createClass(SceneManager, [{
    key: "showScene",
    value: function showScene(name) {
      if (this._activeScene !== null && this._scenes[name] === this._activeScene) {
        console.info("Scene ".concat(name, " is already displaying"));
      }

      if (this._scenes.hasOwnProperty(name)) {
        if (this._activeScene !== null) {
          this._activeScene.hide();
        }

        this._scenes[name].show();

        this._activeScene = this._scenes[name];
      } else {
        console.error("Scene ".concat(name, " is not found"));
      }
    }
  }, {
    key: "registerScene",
    value: function registerScene(name, scene) {
      this._scenes[name] = scene;
    }
  }]);

  return SceneManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SceneManager());

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _Enemy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _ScoreBar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);
/* harmony import */ var _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var ENEMY_BY_ID = {
  1: _Enemy_js__WEBPACK_IMPORTED_MODULE_3__["EnemyEasyLevel"],
  2: _Enemy_js__WEBPACK_IMPORTED_MODULE_3__["EnemyMediumLevel"],
  50: _Enemy_js__WEBPACK_IMPORTED_MODULE_3__["TrapDillerMediumBoss"],
  51: _Enemy_js__WEBPACK_IMPORTED_MODULE_3__["LiunkMediumBoss"],
  70: _Enemy_js__WEBPACK_IMPORTED_MODULE_3__["OzmenHardBoss"]
};

var LevelManager =
/*#__PURE__*/
function () {
  function LevelManager() {
    var _this = this;

    _classCallCheck(this, LevelManager);

    this.level = 2;
    _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerTick(function (d) {
      _this.tick(d);
    });
    this.scoreBar = new _ScoreBar_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _Manager_js__WEBPACK_IMPORTED_MODULE_4__["gameManager"].on("updateScore", function (data) {
      switch (data.action) {
        case "enemy:destroy":
          {
            // TODO: use different value depending on data.info
            _this.scoreBar.update(100);

            break;
          }

        default:
          console.info("Cannot update score due to unknown action '".concat(data.action, "'"));
      }
    });
    this.avatars = [];
    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].createContainer({
      x: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2 - 200,
      y: _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2 - 70
    });
    _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(_this.container);
    });
  }

  _createClass(LevelManager, [{
    key: "setEnemy",
    value: function setEnemy(settings) {
      var id = settings.id;
      var enemyClass = ENEMY_BY_ID[id] || ENEMY_BY_ID[1];
      return new enemyClass(settings);
    }
  }, {
    key: "_setEnemyName",
    value: function _setEnemyName(obj) {
      if (obj.avatarImagePath) {
        var avatar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_7__["default"].createSprite({
          name: obj.avatarImagePath,
          x: 0,
          y: 0
        });
        avatar.setParent(this.container);
        avatar.scale.set(0.4);
        avatar.alpha = 0;
        this.avatars.push(avatar);
      }

      var xPosition = 0;
      this.avatars.forEach(function (el) {
        el.x = xPosition;
        el.alpha = 1;
        xPosition += 70;
      });
    }
  }, {
    key: "restart",
    value: function restart() {
      this.scoreBar.reset();
      _Manager_js__WEBPACK_IMPORTED_MODULE_4__["gameManager"].reset(); // this.level = 0;

      this._changeLevel();
    }
  }, {
    key: "_changeLevel",
    value: function _changeLevel() {
      this.level += 1;

      this._initEnemies();
    }
  }, {
    key: "_checkLevelChange",
    value: function _checkLevelChange() {
      if (!_Manager_js__WEBPACK_IMPORTED_MODULE_4__["gameManager"].enemiesExist) {
        this._changeLevel();
      }
    }
  }, {
    key: "_initEnemies",
    value: function _initEnemies() {
      if (!_settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level]) {
        console.log("You don't have map");
        return;
      }

      var y = -180;

      for (var i = 0; i < _settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level].length; i++) {
        var step = _settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / _settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level][i].length;
        var x = -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2);

        for (var j = 0; j < _settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level][i].length; j++) {
          if (_settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level][i][j] === 0) {
            continue;
          }

          var enemy = this.setEnemy({
            x: x + step * j,
            y: y,
            step: step,
            id: _settings_levelSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"][this.level][i][j]
          });

          this._setEnemyName(enemy);

          _Manager_js__WEBPACK_IMPORTED_MODULE_4__["gameManager"].registerEnemy(enemy);
        }

        y -= 75;
      }
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      // check GAME OVER
      if (!_Manager_js__WEBPACK_IMPORTED_MODULE_4__["gameManager"].playerExists) {
        _scenes_SceneManager_js__WEBPACK_IMPORTED_MODULE_6__["default"].showScene("restart");
        return;
      }

      this._checkLevelChange();
    }
  }]);

  return LevelManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (new LevelManager());

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var levelSettings = {
  // 1: [[6]],
  1: [[1, 0, 1, 0, 1, 0, 1, 0, 1]],
  2: [[0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1]],
  3: [[0, 50, 0, 0, 70, 0, 0, 51, 0]],
  4: [[0, 1, 0, 1, 0, 1, 0, 1, 0], [2, 0, 2, 0, 2, 0, 2, 0, 2]],
  5: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [2, 0, 2, 0, 2, 0, 2, 0, 2], [0, 2, 0, 2, 0, 2, 0, 2, 0]],
  6: [[0, 2, 0, 2, 0, 2, 0, 2, 0], [2, 0, 2, 0, 2, 0, 2, 0, 2], [0, 3, 0, 3, 0, 3, 0, 3, 0]],
  7: [[0, 3, 0, 3, 0, 3, 0, 3, 0], [3, 0, 3, 0, 3, 0, 3, 0, 3]],
  8: [[0, 3, 0, 3, 0, 3, 0, 3, 0], [3, 0, 3, 0, 3, 0, 3, 0, 3], [0, 3, 0, 3, 0, 3, 0, 3, 0]],
  9: [[0, 4, 0, 4, 0, 4, 0, 4, 0], [3, 0, 3, 0, 3, 0, 3, 0, 3]],
  10: [[0, 4, 0, 4, 0, 4, 0, 4, 0], [3, 0, 3, 0, 3, 0, 3, 0, 3], [0, 3, 0, 3, 0, 3, 0, 3, 0]],
  11: [[0, 4, 0, 4, 0, 4, 0, 4, 0], [4, 0, 4, 0, 4, 0, 4, 0, 4], [0, 3, 0, 3, 0, 3, 0, 3, 0]],
  12: [[0, 4, 0, 4, 0, 4, 0, 4, 0], [4, 0, 4, 0, 4, 0, 4, 0, 4], [0, 4, 0, 4, 0, 4, 0, 4, 0]]
};
/* harmony default export */ __webpack_exports__["default"] = (levelSettings);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyEasyLevel", function() { return EnemyEasyLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyMediumLevel", function() { return EnemyMediumLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrapDillerMediumBoss", function() { return TrapDillerMediumBoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiunkMediumBoss", function() { return LiunkMediumBoss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OzmenHardBoss", function() { return OzmenHardBoss; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _Money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Enemy =
/*#__PURE__*/
function () {
  function Enemy(settings) {
    _classCallCheck(this, Enemy);

    var x = settings.x,
        y = settings.y,
        step = settings.step;
    this.container = null;
    this.sprite = null;
    this.healthBar = null;
    this.step = step;
    this.biasX = step;
    this.maxLives = 0;
    this.healthWidth = 70; // TODO: rename to lives

    this._lives = this.maxLives;
    this.speed = 2;
    this.dir = 1;
    this._destroyed = false;
    this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(500, 5000);
    this.container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createContainer({
      x: x,
      y: y
    });
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(this.container);
    this.init();
    this.sprite.setParent(this.container);
    this.healthBar.setParent(this.container);

    this._updateHealthBar();

    new component_emitter__WEBPACK_IMPORTED_MODULE_2___default.a(this);
  }

  _createClass(Enemy, [{
    key: "init",
    value: function init() {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "bullet_1",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: width,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }, {
    key: "canInteract",
    value: function canInteract() {
      return true;
    }
  }, {
    key: "_move",
    value: function _move() {
      this.container.x += this.speed * this.dir;
      this.biasX -= this.speed;

      if (this.biasX <= 0) {
        this.dir *= -1;
        this.biasX = this.step;
      }
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        var _this$container = this.container,
            base_x = _this$container.x,
            base_y = _this$container.y;
        var _this$sprite = this.sprite,
            _width = _this$sprite.width,
            height = _this$sprite.height,
            x = _this$sprite.x,
            y = _this$sprite.y; // create bullet

        var bulletX = base_x + x + _width / 2;
        var bulletY = base_y + height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["EasyBulletWater"](bulletX, bulletY - this.sprite.height / 2, -1, this));
        this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(500, 5000);
      }
    }
  }, {
    key: "_updateHealthBar",
    value: function _updateHealthBar() {
      this.healthBar.width = this.healthWidth / this.maxLives * this._lives;
    }
  }, {
    key: "onCollision",
    value: function onCollision() {
      this._lives -= 1;

      this._updateHealthBar();

      if (this._lives <= 0) {
        this.destroy();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._destroyed = true;
      this.emit("destroy");

      if (this._animationTween) {
        this._animationTween.stop();
      }

      if (animate) {
        new _Money__WEBPACK_IMPORTED_MODULE_5__["default"](this.container.x + this.sprite.width / 2, this.container.y + this.sprite.height / 2);
        new _Explosion__WEBPACK_IMPORTED_MODULE_6__["default"]().animate("a:1..10", this.collisionInfo.center.x, this.collisionInfo.center.y);
      }

      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this.container);
      this.container.destroy(true);
      this.container = null;
      this.sprite = null;
    }
  }, {
    key: "tick",
    value: function tick(delta) {
      this._move(delta);

      this._shoot(delta);
    }
  }, {
    key: "collisionInfo",
    get: function get() {
      var _this$container2 = this.container,
          base_x = _this$container2.x,
          base_y = _this$container2.y;
      var _this$sprite2 = this.sprite,
          width = _this$sprite2.width,
          height = _this$sprite2.height,
          x = _this$sprite2.x,
          y = _this$sprite2.y;
      return {
        x: base_x + x,
        y: base_y + y,
        width: width,
        height: height,
        center: {
          x: base_x + x + width / 2,
          y: base_y + y + height / 2
        }
      };
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }]);

  return Enemy;
}();


var EnemyEasyLevel =
/*#__PURE__*/
function (_Enemy) {
  _inherits(EnemyEasyLevel, _Enemy);

  function EnemyEasyLevel(settings) {
    var _this;

    _classCallCheck(this, EnemyEasyLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EnemyEasyLevel).call(this, settings));
    _this.maxLives = 3;
    _this._lives = _this.maxLives;
    _this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(3000, 5000);

    _this._updateHealthBar();

    return _this;
  }

  _createClass(EnemyEasyLevel, [{
    key: "init",
    value: function init() {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemyEasy",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: 75,
        height: 8,
        alpha: 0.8,
        color: 0xffffff
      });
    }
  }]);

  return EnemyEasyLevel;
}(Enemy);
var EnemyMediumLevel =
/*#__PURE__*/
function (_Enemy2) {
  _inherits(EnemyMediumLevel, _Enemy2);

  function EnemyMediumLevel(settings) {
    var _this2;

    _classCallCheck(this, EnemyMediumLevel);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(EnemyMediumLevel).call(this, settings));
    _this2.maxLives = 4;
    _this2._lives = _this2.maxLives;
    _this2._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000);
    return _this2;
  }

  _createClass(EnemyMediumLevel, [{
    key: "init",
    value: function init() {
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "enemyMedium",
        x: 0,
        y: 10
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: 75,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        var _this$container3 = this.container,
            base_x = _this$container3.x,
            base_y = _this$container3.y;
        var _this$sprite3 = this.sprite,
            _width2 = _this$sprite3.width,
            height = _this$sprite3.height,
            x = _this$sprite3.x,
            y = _this$sprite3.y; // create bullet

        var bulletX = base_x + x + _width2 / 2;
        var bulletY = base_y + height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["MediumBulletWater"](bulletX, bulletY - this.sprite.height / 2, -1, this));
        this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000);
      }
    }
  }]);

  return EnemyMediumLevel;
}(Enemy);
var TrapDillerMediumBoss =
/*#__PURE__*/
function (_Enemy3) {
  _inherits(TrapDillerMediumBoss, _Enemy3);

  function TrapDillerMediumBoss(settings) {
    var _this3;

    _classCallCheck(this, TrapDillerMediumBoss);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TrapDillerMediumBoss).call(this, settings));
    _this3.healthWidth = 90;
    _this3.maxLives = 10;
    _this3._lives = _this3.maxLives;
    _this3.speed = 0;
    _this3.avatarImagePath = "avatar_TrapDiller";
    _this3._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000);

    _this3._startAnimation();

    _this3._updateHealthBar();

    return _this3;
  }

  _createClass(TrapDillerMediumBoss, [{
    key: "init",
    value: function init() {
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -50,
        y: 0
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "BossTrapDiller",
        x: 0,
        y: -130
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -150;
      this.healthBar.x = 10;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "TrapDiller",
        x: 50,
        y: 80,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      var base_y = this.container.y;
      this._animationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        var _this$container4 = this.container,
            base_x = _this$container4.x,
            base_y = _this$container4.y;
        var _this$sprite4 = this.sprite,
            _width3 = _this$sprite4.width,
            height = _this$sprite4.height,
            x = _this$sprite4.x,
            y = _this$sprite4.y; // create bullet

        var bulletX = base_x + x + _width3 / 2;
        var bulletY = base_y + height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["TrappDillerDefaultBullet"](bulletX, bulletY - this.sprite.height, -1, this));
        this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500);
      }
    }
  }]);

  return TrapDillerMediumBoss;
}(Enemy);
var LiunkMediumBoss =
/*#__PURE__*/
function (_Enemy4) {
  _inherits(LiunkMediumBoss, _Enemy4);

  function LiunkMediumBoss(settings) {
    var _this4;

    _classCallCheck(this, LiunkMediumBoss);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(LiunkMediumBoss).call(this, settings));
    _this4.healthWidth = 90;
    _this4.maxLives = 10;
    _this4._lives = _this4.maxLives;
    _this4.speed = 0;
    _this4.avatarImagePath = "avatar_Liunk";
    _this4._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000);

    _this4._startAnimation();

    _this4._updateHealthBar();

    return _this4;
  }

  _createClass(LiunkMediumBoss, [{
    key: "init",
    value: function init() {
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_1",
        x: -50,
        y: 0
      });
      this.board.setParent(this.container);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MiniBossLiunk",
        x: 0,
        y: -150
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = 20;
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "Liunk",
        x: 50,
        y: 80,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      var base_y = this.container.y;
      this._animationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        y: [base_y + 10, base_y, base_y - 10, base_y]
      }, 5000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        var _this$container5 = this.container,
            base_x = _this$container5.x,
            base_y = _this$container5.y;
        var _this$sprite5 = this.sprite,
            _width4 = _this$sprite5.width,
            height = _this$sprite5.height,
            x = _this$sprite5.x,
            y = _this$sprite5.y; // create bullet

        var bulletX = base_x + x + _width4 / 2;
        var bulletY = base_y + height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["LiunkDefaultBullet"](bulletX, bulletY - this.sprite.height, -1, this));
        this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500);
      }
    }
  }]);

  return LiunkMediumBoss;
}(Enemy);
var OzmenHardBoss =
/*#__PURE__*/
function (_Enemy5) {
  _inherits(OzmenHardBoss, _Enemy5);

  function OzmenHardBoss(settings) {
    var _this5;

    _classCallCheck(this, OzmenHardBoss);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(OzmenHardBoss).call(this, settings));
    _this5.healthWidth = 150;
    _this5.maxLives = 20;
    _this5._lives = _this5.maxLives;
    _this5.speed = 0;
    _this5._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(2500, 5000);
    _this5.avatarImagePath = "avatar_OZMEN";

    _this5._startAnimation();

    _this5._updateHealthBar();

    return _this5;
  }

  _createClass(OzmenHardBoss, [{
    key: "init",
    value: function init() {
      this.board = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "boss_board_2",
        x: -80,
        y: +10
      });
      this.board.setParent(this.container);
      this.board.scale.set(1.3);
      this.sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "MainBossOzmen",
        x: -50,
        y: -150,
        width: 200,
        height: 208
      });
      this.healthBar = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].fillRect({
        width: this.healthWidth,
        height: 8,
        alpha: 0.8,
        color: 0xff4c21
      });
      this.healthBar.y = -165;
      this.healthBar.x = -20;
      this.healthBar.setParent(this.container);
      this._spriteText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.container,
        text: "OZMEN",
        x: 50,
        y: 120,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_7__["default"].miniBoss
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      var base_x = this.container.x;
      this._animationTween = new tween_js__WEBPACK_IMPORTED_MODULE_8___default.a.Tween(this.container).to({
        x: [base_x + 30, base_x, base_x - 30, base_x]
      }, 7000).repeat(Infinity).start();
    }
  }, {
    key: "_shoot",
    value: function _shoot(delta) {
      this._timeBetweenShot -= delta;

      if (this._timeBetweenShot <= 0) {
        var _this$container6 = this.container,
            base_x = _this$container6.x,
            base_y = _this$container6.y;
        var _this$sprite6 = this.sprite,
            _width5 = _this$sprite6.width,
            height = _this$sprite6.height,
            x = _this$sprite6.x,
            y = _this$sprite6.y; // create bullet

        var bulletX = base_x + x + _width5 / 2;
        var bulletY = base_y + height;
        gameManager.registerBullet(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["OzmenDefaultBullet"](bulletX, bulletY - this.sprite.height, -1, this));
        this._timeBetweenShot = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].randomNumber(1000, 2500);
      }
    }
  }]);

  return OzmenHardBoss;
}(Enemy);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Money =
/*#__PURE__*/
function () {
  function Money(x, y) {
    _classCallCheck(this, Money);

    this._sprite = null;
    this._coinTween = null;

    this._init(x, y);
  }

  _createClass(Money, [{
    key: "_init",
    value: function _init(x, y) {
      this._sprite = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_1__["default"].createSprite({
        name: "coin",
        x: x,
        y: y
      });

      this._sprite.setParent(_Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field);

      this._sprite.anchor.set(0.5);

      this._animate();
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.removeChild(this._sprite);

      this._sprite.destroy();

      this._sprite = null;
      tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.remove(this._coinTween);
      tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.remove(this.rotateCoinTween);
      this._coinTween = null;
      this.rotateCoinTween = null;
    }
  }, {
    key: "_animate",
    value: function _animate() {
      var _this = this;

      var y = this.positionInfo.y;
      this._coinTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._sprite).to({
        y: this._sprite.y - 150
      }, 1600).yoyo(false).easing(tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Easing.Quadratic.Out).onUpdate(function (k) {
        _this._sprite.alpha = 1 - k;
      }).start();
      var endWidth = this._sprite.width;
      this.rotateCoinTween = new tween_js__WEBPACK_IMPORTED_MODULE_2___default.a.Tween(this._sprite).to({
        width: [0, endWidth]
      }, 400).repeat(4).onComplete(function () {
        _this._destroy();
      }).start();
    }
  }, {
    key: "positionInfo",
    get: function get() {
      return {
        x: this._sprite.x,
        y: this._sprite.y
      };
    }
  }]);

  return Money;
}();

/* harmony default export */ __webpack_exports__["default"] = (Money);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameManager", function() { return gameManager; });
/* harmony import */ var _Starter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var component_emitter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(component_emitter__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    this._tick = this._tick.bind(this);
    this._player = null;
    this._enemies = {};
    this._bullets = {};
    _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerTick(this._tick);
    this._muteEvents = false;
    new component_emitter__WEBPACK_IMPORTED_MODULE_3___default.a(this);
  }

  _createClass(Manager, [{
    key: "reset",
    value: function reset() {
      this._muteEvents = true;
      this._player && this._player.destroy();
      Object.values(this._enemies).forEach(function (x) {
        return x.destroy(false);
      });
      Object.values(this._bullets).forEach(function (x) {
        return x.destroy();
      });
      this._muteEvents = false;
    }
  }, {
    key: "registerEnemy",
    value: function registerEnemy(enemy) {
      var _this = this;

      var id = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getGuid();
      this._enemies[id] = enemy;

      this._registerTick(enemy).then(function (registration) {
        enemy.once("destroy", function () {
          _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterTick(registration);
          delete _this._enemies[id];

          if (!_this._muteEvents) {
            _this.emit("updateScore", {
              action: "enemy:destroy",
              info: {
                enemyType: enemy.enemyType
              }
            });
          }
        });
      });
    }
  }, {
    key: "registerPlayer",
    value: function registerPlayer(player) {
      var _this2 = this;

      this._player = player;

      this._registerTick(player).then(function (registration) {
        player.once("destroy", function () {
          _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterTick(registration);
          _this2._player = null;
        });
      });
    }
  }, {
    key: "registerBullet",
    value: function registerBullet(bullet) {
      var _this3 = this;

      var id = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].getGuid();
      this._bullets[id] = bullet;

      this._registerTick(bullet).then(function (registration) {
        bullet.once("destroy", function () {
          _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterTick(registration);
          delete _this3._bullets[id];
        });
      });
    }
  }, {
    key: "_registerTick",
    value: function _registerTick(object) {
      if (object && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(object.tick)) {
        return _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerTick(function (delta) {
          return object.tick(delta);
        });
      }

      return Promise.reject();
    }
  }, {
    key: "_tick",
    value: function _tick(delta) {
      this._checkCollision(); // dev mode
      // this._drawCollisionInfo(this._bullets);
      // this._drawCollisionInfo(this._objects);

    }
  }, {
    key: "_drawCollisionInfo",
    value: function _drawCollisionInfo(source) {
      var _this4 = this;

      this._devModeGraphics = this._devModeGraphics || {};
      Object.keys(source).forEach(function (key) {
        var o = source[key];
        var rect = o.collisionInfo;

        if (!_this4._devModeGraphics[key]) {
          _this4._devModeGraphics[key] = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_2__["default"].drawRect({
            x: 0,
            y: 0,
            width: rect.width,
            height: rect.height
          });
          _Starter_js__WEBPACK_IMPORTED_MODULE_0__["default"].field.addChild(_this4._devModeGraphics[key]);
        }

        _this4._devModeGraphics[key].x = rect.x;
        _this4._devModeGraphics[key].y = rect.y;
      });
    }
  }, {
    key: "_isCollide",
    value: function _isCollide(obj1, obj2) {
      if (!obj1 || !obj2 || obj1.destroyed || obj2.destroyed) {
        return false;
      }

      var ci1 = obj1.collisionInfo;
      var ci2 = obj2.collisionInfo; // rectangle collision

      return ci2.x < ci1.x + ci1.width && ci2.x + ci2.width > ci1.x && ci2.y < ci1.y + ci1.height && ci2.y + ci2.height > ci1.y && obj1.canInteract(obj2) && obj2.canInteract(obj1); // const distance = obj1.collisionInfo.size + obj2.collisionInfo.size;
      // const dx = obj1.collisionInfo.x - obj2.collisionInfo.x;
      // const dy = obj1.collisionInfo.y - obj2.collisionInfo.y;
      // return distance > Math.sqrt(dx * dx + dy * dy) && obj1.canInteract(obj2) && obj2.canInteract(obj1);
    }
  }, {
    key: "_checkCollision",
    value: function _checkCollision() {
      var _this5 = this;

      var enemies = Object.values(this._enemies);
      var bullets = Object.values(this._bullets);
      bullets.forEach(function (b) {
        if (_this5._isCollide(_this5._player, b)) {
          _this5._player.onCollision();

          b.onCollision();
        }

        enemies.forEach(function (o) {
          if (_this5._isCollide(o, b)) {
            o.onCollision();
            b.onCollision();
          }
        });
      });
    }
  }, {
    key: "enemiesExist",
    get: function get() {
      return Object.values(this._enemies).length !== 0;
    }
  }, {
    key: "playerExists",
    get: function get() {
      return this._player !== null;
    }
  }]);

  return Manager;
}();

var gameManager = new Manager(); // dev mode

window.gameManager = gameManager;

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreBar; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var tween_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tween_js__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ScoreBar =
/*#__PURE__*/
function () {
  function ScoreBar() {
    var _this = this;

    _classCallCheck(this, ScoreBar);

    this._container = null;
    this._scoreText = null;
    this._substrate = null;
    this._score = 0;
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].initiated.then(function () {
      _this._init();

      _this._startAnimation();
    });
  }

  _createClass(ScoreBar, [{
    key: "_init",
    value: function _init() {
      this._container = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].createContainer({
        parent: _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field,
        x: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.width / 2) + 70,
        y: -(_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"].appSizes.height / 2) + 10,
        interactive: false,
        w: 0,
        h: 0
      });
      this._substrate = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_4__["default"].createSprite({
        name: "score_substrate",
        x: 0,
        y: 0
      });

      this._substrate.scale.set(0.6);

      this._substrate.anchor.set(0.5, 0);

      this._substrate.setParent(this._container);

      this._scoreText = _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].drawText({
        parent: this._substrate,
        text: this._score,
        x: 0,
        y: this._substrate.height / 2 + 50,
        style: _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].score
      });
    }
  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      this._rotationTween = new tween_js__WEBPACK_IMPORTED_MODULE_5___default.a.Tween(this._substrate).to({
        rotation: [-0.1, 0, 0.1, 0]
      }, 5000).yoyo(false).repeat(Infinity).start();
    }
  }, {
    key: "update",
    value: function update(val) {
      this._score += val;
      this._scoreText.text = this._score;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._score = 0;
      this._scoreText.text = this._score;
    }
  }]);

  return ScoreBar;
}(); //TODO Вынести очки куда-то в настройки, так как за всех врагов будут разные очки и боссов!




/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GamePauseScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GamePauseScene =
/*#__PURE__*/
function () {
  function GamePauseScene() {
    _classCallCheck(this, GamePauseScene);

    this.init();
  }

  _createClass(GamePauseScene, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.background = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage,
        name: "bg_1",
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height,
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        anchor: 0.5
      });
      this.playButton = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this.background,
        name: "play",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 0,
        onClick: function onClick() {
          _this.hide();

          _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
        }
      });
      this.playButton.buttonMode = true;
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = false;
      this.background.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = true;
      this.background.visible = false;
    }
  }]);

  return GamePauseScene;
}();



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RestartScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _LevelManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var RestartScene =
/*#__PURE__*/
function () {
  function RestartScene() {
    _classCallCheck(this, RestartScene);

    var container = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Container"]();
    _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(container);
    container.x = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2;
    container.y = _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2; // Center bunny sprite in local container coordinates

    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    this.container = container;
    this.init();
  }

  _createClass(RestartScene, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.background = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage,
        name: "bg_1",
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height,
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        anchor: 0.5
      });
      this.playButton = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this.background,
        name: "restart",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 0,
        onClick: function onClick() {
          _this.hide();

          _LevelManager_js__WEBPACK_IMPORTED_MODULE_4__["default"].restart();
          _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
        }
      });
      this._scoreText = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        parent: this.background,
        text: "Restart game ?",
        x: 0,
        y: 60,
        style: {
          align: "center",
          dropShadow: true,
          dropShadowAngle: 0.4,
          dropShadowColor: "#0d1144",
          dropShadowDistance: 2,
          fill: "#857833",
          fillGradientStops: [1],
          fontFamily: "Comic Sans MS",
          fontSize: 20,
          fontWeight: 900,
          letterSpacing: 2,
          lineJoin: "round",
          miterLimit: 5,
          padding: 4,
          stroke: "#f64949",
          strokeThickness: 2,
          whiteSpace: "normal"
        }
      });
      this.playButton.buttonMode = true;
      this.hide();
    }
  }, {
    key: "show",
    value: function show() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = false;
      this.background.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = true;
      this.background.visible = false;
    }
  }]);

  return RestartScene;
}();



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StarScene; });
/* harmony import */ var _Starter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
/* harmony import */ var _Manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var StarScene =
/*#__PURE__*/
function () {
  function StarScene() {
    _classCallCheck(this, StarScene);

    this._container = null;
    this._background = null;
    this._playButton = null;
    this._leftArrow = null;
    this._rightArrow = null;
    this._activePlayer = null;
    this._internetKrokodil = null;
    this._gerard = null;
    this._oldSchoolBro = null;
    this._currentPlayer = 0;
    this.names = ["InternetKrokodil", "OldSchool bro", "Жерард"];
    this.players = [];

    this._init();

    this.addAnimations();
  }

  _createClass(StarScene, [{
    key: "_init",
    value: function _init() {
      var _this = this;

      this._container = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createContainer({
        x: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2
      });
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].app.stage.addChild(this._container);
      this._background = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "bg_2",
        x: -_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width / 2,
        y: -_settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2,
        width: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.width,
        height: _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height
      });

      this._background.setParent(this._container);

      this.name = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        text: "LEGALAXY",
        x: 0,
        y: -280,
        color: 0xff43c3,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].logo
      });
      this._leftArrow = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "left_arrow",
        x: -400,
        y: -100,
        width: 200,
        height: 112,
        onClick: function onClick() {
          _this.changePlayer(1);
        }
      });
      this._leftArrow.buttonMode = true;

      this._leftArrow.setParent(this._container);

      this._rightArrow = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "right_arrow",
        x: 200,
        y: -100,
        width: 200,
        height: 112,
        onClick: function onClick() {
          _this.changePlayer(-1);
        }
      });
      this._rightArrow.buttonMode = true;

      this._rightArrow.setParent(this._container);

      var currentPlayer = ["InternetKrokodil", "OldSchoolBro", "Gerard"];
      this._playButton = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawSvgSprite({
        parent: this._container,
        name: "play",
        width: 100,
        height: 100,
        anchor: 0.5,
        x: 0,
        y: 180,
        onClick: function onClick() {
          _Manager_js__WEBPACK_IMPORTED_MODULE_3__["gameManager"].registerPlayer(new _Player_js__WEBPACK_IMPORTED_MODULE_4__["default"](0, _settings_js__WEBPACK_IMPORTED_MODULE_2__["default"].appSizes.height / 2 - 75, currentPlayer[_this._currentPlayer]));

          _this.hide();

          _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
        }
      });
      this._playButton.buttonMode = true;
      this.initialPlayers();
    }
  }, {
    key: "changePlayer",
    value: function changePlayer(dir) {
      this._currentPlayer += dir;

      if (this._currentPlayer > 2) {
        this._currentPlayer = 0;
      }

      if (this._currentPlayer < 0) {
        this._currentPlayer = 2;
      }

      this._activePlayer.alpha = 0;
      this._activePlayer = this.players[this._currentPlayer];
      this._activePlayer.alpha = 1;
      this.updatePlayerName();
    }
  }, {
    key: "initialPlayers",
    value: function initialPlayers() {
      this._internetKrokodil = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "InternetKrokodilPreview",
        x: 0,
        y: -50,
        width: 150,
        height: 205
      });

      this._internetKrokodil.anchor.set(0.5);

      this._internetKrokodil.setParent(this._container);

      this._activePlayer = this._internetKrokodil;
      this.players.push(this._internetKrokodil);
      this._oldSchoolBro = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "OldSchoolBroPreview",
        x: 0,
        y: -50,
        width: 150,
        height: 205
      });

      this._oldSchoolBro.anchor.set(0.5);

      this._oldSchoolBro.alpha = 0;

      this._oldSchoolBro.setParent(this._container);

      this.players.push(this._oldSchoolBro);
      this.gerard = _GraphicsHelper__WEBPACK_IMPORTED_MODULE_5__["default"].createSprite({
        name: "GerardPreview",
        x: 0,
        y: -50,
        width: 150,
        height: 205
      });
      this.gerard.anchor.set(0.5);
      this.gerard.alpha = 0;
      this.gerard.setParent(this._container);
      this.players.push(this.gerard);
      this.name = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].drawText({
        text: this.names[this._currentPlayer],
        x: 0,
        y: 80,
        color: 0xff43c3,
        parent: this._container,
        style: _styles__WEBPACK_IMPORTED_MODULE_6__["default"].IntroPlayerName
      });
      this.updatePlayerName();
    }
  }, {
    key: "updatePlayerName",
    value: function updatePlayerName() {
      this.name.text = this.names[this._currentPlayer];
    }
  }, {
    key: "addAnimations",
    value: function addAnimations() {}
  }, {
    key: "show",
    value: function show() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = false;
      this._container.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      _Starter__WEBPACK_IMPORTED_MODULE_0__["default"].field.visible = true;
      this._container.visible = false;
    }
  }]);

  return StarScene;
}();



/***/ })
/******/ ]);