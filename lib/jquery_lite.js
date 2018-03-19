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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__ = __webpack_require__(1);


window.DomNodeCollection = __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */];

window.snack = (selector) => {
  // creates a function on the window called $l
  // $l is a function that takes a selector
  // receives one argument

  if ( typeof selector === 'string') {
    return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */](Array.from(document.querySelectorAll(selector)));
  } else if ( selector instanceof HTMLElement){
    return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection_js__["a" /* default */]([selector]);
  } else {
    return [selector];
  }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DomNodeCollection {
  constructor(HTMLElemArr){
    this.nodes = HTMLElemArr;
    this.empty = this.empty.bind(this);
  }

  html(string){
    if (string) {
      this.nodes.forEach((node)=>{
        node.innerHTML = string;
      });
    } else {
      return (this.nodes[0].innerHTML);
    }
  }

  empty(){
    this.html(" ");
  }

  append(children){
    if (this.nodes.length === 0) return;
    if (typeof children === 'object' &&
        !(children instanceof DomNodeCollection)) {
      children = snack(children);
    }
    if (typeof children === 'string') {
      this.nodes.forEach((node)=>{
        node.innerHTML += children;
      });
    } else if ( children instanceof DomNodeCollection) {
      this.nodes.forEach((node)=>{
        children.nodes.forEach((child)=>{
          node.appendChild(child.cloneNode(true));
        });
      });
    }
  }

  attr(){

  }

  addClass(){

  }

  removeClass(){
    
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DomNodeCollection);


/***/ })
/******/ ]);