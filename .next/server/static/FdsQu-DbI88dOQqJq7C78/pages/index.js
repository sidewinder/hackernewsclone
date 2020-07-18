module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js


var __jsx = external_react_default.a.createElement;

/* harmony default export */ var Layout = (({
  title,
  children
}) => {
  return __jsx("div", {
    className: "jsx-3052894950"
  }, __jsx(head_default.a, null, __jsx("title", {
    className: "jsx-3052894950"
  }, __jsx("span", {
    className: "jsx-3052894950" + " " + "Logo"
  }), " ", title), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-3052894950"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ff6600",
    className: "jsx-3052894950"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/public/icon.png",
    className: "jsx-3052894950"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Hacker News",
    className: "jsx-3052894950"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "default",
    className: "jsx-3052894950"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes",
    className: "jsx-3052894950"
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    className: "jsx-3052894950"
  }), __jsx("link", {
    rel: "manifest",
    href: "/public/manifest.webmanifest",
    className: "jsx-3052894950"
  })), children, __jsx(style_default.a, {
    id: "3052894950"
  }, ["body{background:#eee;font-family:system-ui;margin:0;}", ".Logo{background-image:url(public/icon.png);}"]));
});
// CONCATENATED MODULE: ./pages/index.js


var pages_jsx = external_react_default.a.createElement;



const Index = ({
  stories
}) => {
  return pages_jsx(Layout, {
    title: "Latest News"
  }, pages_jsx("h1", {
    className: "jsx-2213540143"
  }, "Latest News"), stories.map(story => pages_jsx("h2", {
    className: "jsx-2213540143"
  }, pages_jsx("a", {
    href: story.url,
    className: "jsx-2213540143"
  }, story.title))), pages_jsx(style_default.a, {
    id: "2213540143"
  }, ["h1.jsx-2213540143{font-family:system-ui;font-weight:300;color:#333;}"]));
};

Index.getInitialProps = async () => {
  const req = await fetch(`https://api.hackerwebapp.com/news`);
  const stories = await req.json();
  return {
    stories
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });