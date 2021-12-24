/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/functions/commentstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/functions/commentstyle.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --tenne-tawny: #d65108;\r\n  --tenne-tawny-dark: #b54507;\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.8;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* meal details */\r\n.meal-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  background: var(--tenne-tawny);\r\n  border-radius: 1rem;\r\n  -webkit-border-radius: 1rem;\r\n  -moz-border-radius: 1rem;\r\n  -ms-border-radius: 1rem;\r\n  -o-border-radius: 1rem;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar-thumb {\r\n  background: #f0f0f0;\r\n  border-radius: 2rem;\r\n  -webkit-border-radius: 2rem;\r\n  -moz-border-radius: 2rem;\r\n  -ms-border-radius: 2rem;\r\n  -o-border-radius: 2rem;\r\n}\r\n\r\n/* js related */\r\n.displayComment {\r\n  display: block;\r\n}\r\n\r\n.meal-details-content {\r\n  margin: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.meal-details-content p:not(.recipe-category) {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-close-btn {\r\n  position: absolute;\r\n  right: 2rem;\r\n  top: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #fff;\r\n  border: none;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.recipe-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.recipe-category {\r\n  background: #fff;\r\n  font-weight: 600;\r\n  color: var(--tenne-tawny);\r\n  display: inline-block;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 0.3rem;\r\n  -webkit-border-radius: 0.3rem;\r\n  -moz-border-radius: 0.3rem;\r\n  -ms-border-radius: 0.3rem;\r\n  -o-border-radius: 0.3rem;\r\n}\r\n\r\n.recipe-instruct {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-meal-img img {\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.recipe-link {\r\n  margin: 1.4rem 0;\r\n}\r\n\r\n.recipe-link a {\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all 0.4s linear;\r\n  -webkit-transition: all 0.4s linear;\r\n  -moz-transition: all 0.4s linear;\r\n  -ms-transition: all 0.4s linear;\r\n  -o-transition: all 0.4s linear;\r\n}\r\n\r\n.recipe-link a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n#list-comment {\r\n  margin: 5px 2px;\r\n  width: 90%;\r\n}\r\n\r\n.comment-list {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.comment-list:nth-child(even) {\r\n  background-color: #ae441f;\r\n  border-radius: 8px;\r\n  padding: 4px;\r\n}\r\n\r\n.comment-list:nth-child(odd) {\r\n  background-color: #983c1b;\r\n  border-radius: 8px;\r\n  padding: 4px;\r\n}\r\n\r\n#comment,\r\n#commentator {\r\n  width: 90%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-bottom: 3vh;\r\n}\r\n\r\n.commentBtn {\r\n  padding: 5px 10px;\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  font-size: 16px;\r\n  color: #000;\r\n  border: 1px solid #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .meal-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .meal-details {\r\n    width: 700px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/functions/commentstyle.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,wCAAwC;EACxC,qCAAqC;EACrC,oCAAoC;EACpC,mCAAmC;EACnC,WAAW;EACX,8BAA8B;EAC9B,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA,eAAe;AACf;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,6BAA6B;EAC7B,0BAA0B;EAC1B,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,mCAAmC;EACnC,gCAAgC;EAChC,+BAA+B;EAC/B,8BAA8B;AAChC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE;IACE,SAAS;EACX;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --tenne-tawny: #d65108;\r\n  --tenne-tawny-dark: #b54507;\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.8;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n/* meal details */\r\n.meal-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  color: #fff;\r\n  background: var(--tenne-tawny);\r\n  border-radius: 1rem;\r\n  -webkit-border-radius: 1rem;\r\n  -moz-border-radius: 1rem;\r\n  -ms-border-radius: 1rem;\r\n  -o-border-radius: 1rem;\r\n  width: 90%;\r\n  height: 90%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n.meal-details::-webkit-scrollbar-thumb {\r\n  background: #f0f0f0;\r\n  border-radius: 2rem;\r\n  -webkit-border-radius: 2rem;\r\n  -moz-border-radius: 2rem;\r\n  -ms-border-radius: 2rem;\r\n  -o-border-radius: 2rem;\r\n}\r\n\r\n/* js related */\r\n.displayComment {\r\n  display: block;\r\n}\r\n\r\n.meal-details-content {\r\n  margin: 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.meal-details-content p:not(.recipe-category) {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-close-btn {\r\n  position: absolute;\r\n  right: 2rem;\r\n  top: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #fff;\r\n  border: none;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.recipe-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.recipe-category {\r\n  background: #fff;\r\n  font-weight: 600;\r\n  color: var(--tenne-tawny);\r\n  display: inline-block;\r\n  padding: 0.2rem 0.5rem;\r\n  border-radius: 0.3rem;\r\n  -webkit-border-radius: 0.3rem;\r\n  -moz-border-radius: 0.3rem;\r\n  -ms-border-radius: 0.3rem;\r\n  -o-border-radius: 0.3rem;\r\n}\r\n\r\n.recipe-instruct {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.recipe-meal-img img {\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  -webkit-border-radius: 50%;\r\n  -moz-border-radius: 50%;\r\n  -ms-border-radius: 50%;\r\n  -o-border-radius: 50%;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.recipe-link {\r\n  margin: 1.4rem 0;\r\n}\r\n\r\n.recipe-link a {\r\n  color: #fff;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  transition: all 0.4s linear;\r\n  -webkit-transition: all 0.4s linear;\r\n  -moz-transition: all 0.4s linear;\r\n  -ms-transition: all 0.4s linear;\r\n  -o-transition: all 0.4s linear;\r\n}\r\n\r\n.recipe-link a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n#list-comment {\r\n  margin: 5px 2px;\r\n  width: 90%;\r\n}\r\n\r\n.comment-list {\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.comment-list:nth-child(even) {\r\n  background-color: #ae441f;\r\n  border-radius: 8px;\r\n  padding: 4px;\r\n}\r\n\r\n.comment-list:nth-child(odd) {\r\n  background-color: #983c1b;\r\n  border-radius: 8px;\r\n  padding: 4px;\r\n}\r\n\r\n#comment,\r\n#commentator {\r\n  width: 90%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  margin-bottom: 3vh;\r\n}\r\n\r\n.commentBtn {\r\n  padding: 5px 10px;\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  font-size: 16px;\r\n  color: #000;\r\n  border: 1px solid #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .meal-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .meal-details {\r\n    width: 700px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  font-family: 'IBM Plex Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\nh1 {\r\n  font-weight: 700;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.buttonsize {\r\n  width: 20%;\r\n}\r\n\r\n#card {\r\n  border: 3px solid black;\r\n}\r\n\r\n.divider {\r\n  width: 4rem;\r\n  padding: 0.1rem 0;\r\n  background-color: black;\r\n  opacity: 100%;\r\n}\r\n\r\ndiv.card:nth-child(even) {\r\n  background-color: antiquewhite;\r\n}\r\n\r\ndiv.card:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n\r\n  /* Set the fixed height of the footer here */\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.comment {\r\n  background-color: #d65108;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.reserve {\r\n  background-color: #18a999;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.nav-link {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.counter {\r\n  cursor: pointer;\r\n}\r\n\r\n#logo {\r\n  width: 20%;\r\n}\r\n\r\nfooter {\r\n  margin-top: 3vh;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  padding-top: 2vh;\r\n  font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    width: 30%;\r\n  }\r\n\r\n  #meals,\r\n  #ingredients,\r\n  #about {\r\n    font-size: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,yJAAyJ;EACzJ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;;EAEZ,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;;;IAGE,eAAe;EACjB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');\r\n\r\nbody {\r\n  font-family: 'IBM Plex Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\nh1 {\r\n  font-weight: 700;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.buttonsize {\r\n  width: 20%;\r\n}\r\n\r\n#card {\r\n  border: 3px solid black;\r\n}\r\n\r\n.divider {\r\n  width: 4rem;\r\n  padding: 0.1rem 0;\r\n  background-color: black;\r\n  opacity: 100%;\r\n}\r\n\r\ndiv.card:nth-child(even) {\r\n  background-color: antiquewhite;\r\n}\r\n\r\ndiv.card:nth-child(odd) {\r\n  background-color: white;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n\r\n  /* Set the fixed height of the footer here */\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.comment {\r\n  background-color: #d65108;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.reserve {\r\n  background-color: #18a999;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.nav-link {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.counter {\r\n  cursor: pointer;\r\n}\r\n\r\n#logo {\r\n  width: 20%;\r\n}\r\n\r\nfooter {\r\n  margin-top: 3vh;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  padding-top: 2vh;\r\n  font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    width: 30%;\r\n  }\r\n\r\n  #meals,\r\n  #ingredients,\r\n  #about {\r\n    font-size: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/functions/commentstyle.css":
/*!****************************************!*\
  !*** ./src/functions/commentstyle.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_commentstyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./commentstyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/functions/commentstyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_commentstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_commentstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_commentstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_commentstyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/functions/addComment.js":
/*!*************************************!*\
  !*** ./src/functions/addComment.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addComment = async (data) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hM8vrlzdwqrlgb4w96Yn/comments';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);

/***/ }),

/***/ "./src/functions/commentCounter.js":
/*!*****************************************!*\
  !*** ./src/functions/commentCounter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (myComment) => {
  const count = myComment.length ? myComment.length : 0;
  return count;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/functions/displayList.js":
/*!**************************************!*\
  !*** ./src/functions/displayList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meals)
/* harmony export */ });
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ "./src/functions/getLikes.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postLikes.js */ "./src/functions/postLikes.js");
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addComment.js */ "./src/functions/addComment.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ "./src/functions/commentCounter.js");
/* eslint-disable no-alert */





const board = document.querySelector('#board');
const mealDetailsContent = document.querySelector('.meal-details-content');
const closeBtn = document.querySelector('.recipe-close-btn');

class Meals {
    static showDish = (meal) => {
      const board = document.getElementById('board');
      const dish = document.createElement('div');
      dish.className = 'col-md-4 col-sm-6 col-xs-6 card d-flex my-1 p-4';
      dish.innerHTML = `<img src=${meal.strMealThumb} alt="${meal.strMeal}">
        <div class="d-flex align-baseline justify-content-between py-2">
          <h2 class="col-9">${meal.strMeal}</h2>
          <div class="col-3 text-decoration-none text-reset counter" id=${meal.idMeal}>&#10084;&#65039; 0</div>
        </div>

        <input type="submit" name="comments" id="${meal.idMeal}" value="Comments"
          class="btn comment text-light btn-block my-2 " >
        <input type="submit" name="reservations" id="reservation-0" value="Reservations"
          class="btn reserve  text-light my-2 btn-block">
    `;
      board.appendChild(dish);
      document.getElementById(meal.idMeal).addEventListener('click', () => {
        Meals.getRecipe(meal.idMeal);
      });
    };

    static showBoard = (list) => {
      const mealBoard = document.getElementById('board');
      list.forEach((dish) => {
        Meals.showDish(dish);
      });
      mealBoard.addEventListener('click', (e) => {
        if (e.target.classList.contains('counter')) {
          (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.id);
          setTimeout(() => {
            (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
          }, 1000);
        }
      });
    };
}

const getComment = async (item) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hM8vrlzdwqrlgb4w96Yn/comments?item_id=${item.idMeal}`;
  const myComment = await fetch(url);
  let data = await myComment.json();
  const ul = document.querySelector('#list-comment');
  ul.innerHTML = '';
  const h3 = document.querySelector('.comment-count');
  h3.innerHTML = `Comments(${(0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data)})`;
  if (!data.length) data = [];
  data.forEach((comment) => {
    ul.innerHTML += `
      <li class="comment-list d-flex justify-content-start align-items-center">
        <p class="me-3">${comment.creation_date}</p>
        <p class="me-3">${comment.username}</p>
        <p>${comment.comment}</p>
      </li>
    `;
  });
};

const mealPopUp = async (meal) => {
  [meal] = meal;
  mealDetailsContent.innerHTML = `

    <div class = "recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}>
      <img src = "${meal.strMealThumb ? meal.strMealThumb : 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'}" alt = "food">
    </div>
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-link">
    <a href="${meal.strYoutube}" target = "_blank">Watch Youtube</a>
    </div>
    <h3 class="m-3 comment-count"></h3>
    <div class="d-flex justify-content-center align-items-center">
      <ul id="list-comment" class="list-unstyled">
      </ul>
    </div>
    <h3 class="m-3">Add a comment</h3>
    <form autocomplete="off" class="form-class">
      <input type="text" class="form-control" id="commentator" required placeholder="Your name">
      <textarea id="comment" name="comment" cols="30" rows="10" required placeholder="Your comment..."></textarea>
      <button type="button" class="btn commentBtn">Comment</button>
    </form>

  `;

  mealDetailsContent.parentElement.classList.add('displayComment');
  const commentBtn = document.querySelector('.commentBtn');
  commentBtn.addEventListener('click', () => {
    const username = document.querySelector('#commentator').value;
    const comment = document.querySelector('#comment').value;

    const mealId = meal.idMeal;
    if (username !== '' && comment !== '') {
      const newComment = {
        item_id: mealId,
        username,
        comment,
      };
      (0,_addComment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newComment);
    } else alert('Empty fields are not allowed');
    document.querySelector('#commentator').value = '';
    document.querySelector('#comment').value = '';
    setTimeout(() => {
      getComment(meal);
    }, 1000);
    getComment(meal);
  });
  getComment(meal);
};

const getSingleMeal = async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('comment')) {
    const { id } = e.target;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    mealPopUp(data.meals);
  }
};

board.addEventListener('click', getSingleMeal);

closeBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('displayComment');
});



/***/ }),

/***/ "./src/functions/getLikes.js":
/*!***********************************!*\
  !*** ./src/functions/getLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLikes)
/* harmony export */ });
/* harmony import */ var _likeCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeCounter.js */ "./src/functions/likeCounter.js");


const getLikes = async () => {
  try {
    const getMealId = async () => {
      try {
        return await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
          .then((response) => response.json())
          .then((json) => json.meals.map((x) => x.idMeal));
      } catch (e) {
        return null;
      }
    };

    const idList = await getMealId();
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Js4xkj6ulHIn50hbAxjn/likes')
      .then((response) => response.json())
      .then((json) => {
        json.forEach((like) => {
          if (idList.includes(like.item_id)) {
            (0,_likeCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(like);
          }
        });
      });
  } catch (e) {
    return null;
  }
};


/***/ }),

/***/ "./src/functions/likeCounter.js":
/*!**************************************!*\
  !*** ./src/functions/likeCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ likeCounter)
/* harmony export */ });
const likeCounter = (item) => {
  const likes = document.getElementById(`${item.item_id}`);
  likes.innerHTML = `&#10084;&#65039; (${item.likes})`;
};



/***/ }),

/***/ "./src/functions/mealCounter.js":
/*!**************************************!*\
  !*** ./src/functions/mealCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mealCounter)
/* harmony export */ });
const mealCounter = (length) => {
  const title = document.getElementById('meals');
  title.innerHTML = `Meals (${length})`;
};



/***/ }),

/***/ "./src/functions/mealsApi.js":
/*!***********************************!*\
  !*** ./src/functions/mealsApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMeals)
/* harmony export */ });
/* harmony import */ var _displayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayList.js */ "./src/functions/displayList.js");
/* harmony import */ var _mealCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealCounter.js */ "./src/functions/mealCounter.js");



const getMeals = async () => {
  try {
    return await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .then((response) => response.json())
      .then((json) => {
        _displayList_js__WEBPACK_IMPORTED_MODULE_0__["default"].showBoard(json.meals);
        (0,_mealCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(json.meals.length);
      });
  } catch (e) {
    return null;
  }
};



/***/ }),

/***/ "./src/functions/postLikes.js":
/*!************************************!*\
  !*** ./src/functions/postLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ postLikes)
/* harmony export */ });
const postLikes = async (id) => {
  const newLike = { item_id: `${id}` };
  try {
    return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Js4xkj6ulHIn50hbAxjn/likes', {
      method: 'POST',
      body: JSON.stringify(newLike),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  } catch (e) {
    return null;
  }
};




/***/ }),

/***/ "./src/functions/images/meal-logo.png":
/*!********************************************!*\
  !*** ./src/functions/images/meal-logo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b6e311e8fbcaee4a4f7.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_commentstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/commentstyle.css */ "./src/functions/commentstyle.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _functions_images_meal_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/images/meal-logo.png */ "./src/functions/images/meal-logo.png");
/* harmony import */ var _functions_mealsApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/mealsApi.js */ "./src/functions/mealsApi.js");
/* harmony import */ var _functions_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/getLikes.js */ "./src/functions/getLikes.js");
/* eslint-disable import/no-cycle */






const logoLink = document.getElementById('logo');
logoLink.src = _functions_images_meal_logo_png__WEBPACK_IMPORTED_MODULE_2__;

document.addEventListener('DOMContentLoaded', (0,_functions_mealsApi_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
document.addEventListener('DOMContentLoaded', (0,_functions_getLikes_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPO0FBQ1AsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBLG9CQUFvQixZQUFZLEdBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3NDO0FBQ2hCO0FBQzhCO0FBQ0w7QUFDQTtBQUMvQztBQUNBO0FBQ0EsZUFBZSw0REFBSTtBQUNuQjtBQUNBLDhDQUE4QyxrRUFBUTtBQUN0RCw4Q0FBOEMsa0VBQVEsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL2NvbW1lbnRzdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2Z1bmN0aW9ucy9jb21tZW50c3R5bGUuY3NzPzQ5MDUiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2Z1bmN0aW9ucy9hZGRDb21tZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL2Rpc3BsYXlMaXN0LmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL2dldExpa2VzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL2xpa2VDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL21lYWxDb3VudGVyLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL21lYWxzQXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3QvLi9zcmMvZnVuY3Rpb25zL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS10ZW5uZS10YXdueTogI2Q2NTEwODtcXHJcXG4gIC0tdGVubmUtdGF3bnktZGFyazogI2I1NDUwNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIG1lYWwgZGV0YWlscyAqL1xcclxcbi5tZWFsLWRldGFpbHMge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRlbm5lLXRhd255KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtbXMtYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWxzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAtbXMtYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGpzIHJlbGF0ZWQgKi9cXHJcXG4uZGlzcGxheUNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbHMtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbHMtY29udGVudCBwOm5vdCgucmVjaXBlLWNhdGVnb3J5KSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAycmVtO1xcclxcbiAgdG9wOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtdGl0bGUge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWNhdGVnb3J5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHZhcigtLXRlbm5lLXRhd255KTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1pbnN0cnVjdCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbWVhbC1pbWcgaW1nIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1saW5rIHtcXHJcXG4gIG1hcmdpbjogMS40cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGluayBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGluayBhOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3QtY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDVweCAycHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdDpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlNDQxZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdDpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTgzYzFiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCxcXHJcXG4jY29tbWVudGF0b3Ige1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gIG1hcmdpbjogOHB4IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG4ge1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZWFsLWRldGFpbHMge1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mdW5jdGlvbnMvY29tbWVudHN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHdDQUF3QztFQUN4QyxxQ0FBcUM7RUFDckMsb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tdGVubmUtdGF3bnk6ICNkNjUxMDg7XFxyXFxuICAtLXRlbm5lLXRhd255LWRhcms6ICNiNTQ1MDc7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZWFsIGRldGFpbHMgKi9cXHJcXG4ubWVhbC1kZXRhaWxzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZW5uZS10YXdueSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRldGFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBqcyByZWxhdGVkICovXFxyXFxuLmRpc3BsYXlDb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWxzLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXRhaWxzLWNvbnRlbnQgcDpub3QoLnJlY2lwZS1jYXRlZ29yeSkge1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIHRvcDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMC45O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLXRpdGxlIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZS1jYXRlZ29yeSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZW5uZS10YXdueSk7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtaW5zdHJ1Y3Qge1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLW1lYWwtaW1nIGltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUtbGluayB7XFxyXFxuICBtYXJnaW46IDEuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWxpbmsgYSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlLWxpbmsgYTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiA1cHggMnB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Q6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZTQ0MWY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWxpc3Q6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4M2MxYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQsXFxyXFxuI2NvbW1lbnRhdG9yIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDhweCAwO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWl0ZW0ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbC1kZXRhaWxzIHtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtNb25vOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnNpemUge1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmQge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kaXZpZGVyIHtcXHJcXG4gIHdpZHRoOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMC4xcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmRpdi5jYXJkOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcblxcclxcbmRpdi5jYXJkOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG5cXHJcXG4gIC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NTEwODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOGE5OTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi5jb3VudGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDN2aDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDJ2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtZWFscyxcXHJcXG4gICNpbmdyZWRpZW50cyxcXHJcXG4gICNhYm91dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5SkFBeUo7RUFDekosZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7O0VBRVosNENBQTRDO0VBQzVDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTs7O0lBR0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUlCTStQbGV4K01vbm86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uc2l6ZSB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRpdmlkZXIge1xcclxcbiAgd2lkdGg6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAwLjFyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmNhcmQ6bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcblxcclxcbiAgLyogU2V0IHRoZSBmaXhlZCBoZWlnaHQgb2YgdGhlIGZvb3RlciBoZXJlICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDY1MTA4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4YTk5OTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogM3ZoO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMnZoO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgI2xvZ28ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21lYWxzLFxcclxcbiAgI2luZ3JlZGllbnRzLFxcclxcbiAgI2Fib3V0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnRzdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbW1lbnRzdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaE04dnJsemR3cXJsZ2I0dzk2WW4vY29tbWVudHMnO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2Uub2s7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRDb21tZW50OyIsImNvbnN0IGNvbW1lbnRDb3VudGVyID0gKG15Q29tbWVudCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gbXlDb21tZW50Lmxlbmd0aCA/IG15Q29tbWVudC5sZW5ndGggOiAwO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXHJcbmltcG9ydCBnZXRMaWtlcyBmcm9tICcuL2dldExpa2VzLmpzJztcclxuaW1wb3J0IHBvc3RMaWtlcyBmcm9tICcuL3Bvc3RMaWtlcy5qcyc7XHJcbmltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XHJcbmltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XHJcbmNvbnN0IG1lYWxEZXRhaWxzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLWRldGFpbHMtY29udGVudCcpO1xyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtY2xvc2UtYnRuJyk7XHJcblxyXG5jbGFzcyBNZWFscyB7XHJcbiAgICBzdGF0aWMgc2hvd0Rpc2ggPSAobWVhbCkgPT4ge1xyXG4gICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xyXG4gICAgICBjb25zdCBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpc2guY2xhc3NOYW1lID0gJ2NvbC1tZC00IGNvbC1zbS02IGNvbC14cy02IGNhcmQgZC1mbGV4IG15LTEgcC00JztcclxuICAgICAgZGlzaC5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHttZWFsLnN0ck1lYWxUaHVtYn0gYWx0PVwiJHttZWFsLnN0ck1lYWx9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1iYXNlbGluZSBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweS0yXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9XCJjb2wtOVwiPiR7bWVhbC5zdHJNZWFsfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTMgdGV4dC1kZWNvcmF0aW9uLW5vbmUgdGV4dC1yZXNldCBjb3VudGVyXCIgaWQ9JHttZWFsLmlkTWVhbH0+JiMxMDA4NDsmIzY1MDM5OyAwPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImNvbW1lbnRzXCIgaWQ9XCIke21lYWwuaWRNZWFsfVwiIHZhbHVlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gY29tbWVudCB0ZXh0LWxpZ2h0IGJ0bi1ibG9jayBteS0yIFwiID5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJyZXNlcnZhdGlvbnNcIiBpZD1cInJlc2VydmF0aW9uLTBcIiB2YWx1ZT1cIlJlc2VydmF0aW9uc1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biByZXNlcnZlICB0ZXh0LWxpZ2h0IG15LTIgYnRuLWJsb2NrXCI+XHJcbiAgICBgO1xyXG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChkaXNoKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWVhbC5pZE1lYWwpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIE1lYWxzLmdldFJlY2lwZShtZWFsLmlkTWVhbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgc2hvd0JvYXJkID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgbWVhbEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XHJcbiAgICAgIGxpc3QuZm9yRWFjaCgoZGlzaCkgPT4ge1xyXG4gICAgICAgIE1lYWxzLnNob3dEaXNoKGRpc2gpO1xyXG4gICAgICB9KTtcclxuICAgICAgbWVhbEJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb3VudGVyJykpIHtcclxuICAgICAgICAgIHBvc3RMaWtlcyhlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZ2V0TGlrZXMoKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBnZXRDb21tZW50ID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaE04dnJsemR3cXJsZ2I0dzk2WW4vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW0uaWRNZWFsfWA7XHJcbiAgY29uc3QgbXlDb21tZW50ID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBsZXQgZGF0YSA9IGF3YWl0IG15Q29tbWVudC5qc29uKCk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1jb21tZW50Jyk7XHJcbiAgdWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudCcpO1xyXG4gIGgzLmlubmVySFRNTCA9IGBDb21tZW50cygke2NvbW1lbnRDb3VudGVyKGRhdGEpfSlgO1xyXG4gIGlmICghZGF0YS5sZW5ndGgpIGRhdGEgPSBbXTtcclxuICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgIHVsLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxsaSBjbGFzcz1cImNvbW1lbnQtbGlzdCBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibWUtM1wiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm1lLTNcIj4ke2NvbW1lbnQudXNlcm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cclxuICAgICAgPC9saT5cclxuICAgIGA7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBtZWFsUG9wVXAgPSBhc3luYyAobWVhbCkgPT4ge1xyXG4gIFttZWFsXSA9IG1lYWw7XHJcbiAgbWVhbERldGFpbHNDb250ZW50LmlubmVySFRNTCA9IGBcclxuXHJcbiAgICA8ZGl2IGNsYXNzID0gXCJyZWNpcGUtbWVhbC1pbWdcIj5cclxuICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke21lYWwuc3RyTWVhbH0+XHJcbiAgICAgIDxpbWcgc3JjID0gXCIke21lYWwuc3RyTWVhbFRodW1iID8gbWVhbC5zdHJNZWFsVGh1bWIgOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9pbWFnZXMvbWVkaWEvbWVhbHMvd3Zwc3h4MTQ2ODI1NjMyMS5qcGcnfVwiIGFsdCA9IFwiZm9vZFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aDIgY2xhc3MgPSBcInJlY2lwZS10aXRsZVwiPiR7bWVhbC5zdHJNZWFsfTwvaDI+XHJcbiAgICA8cCBjbGFzcyA9IFwicmVjaXBlLWNhdGVnb3J5XCI+JHttZWFsLnN0ckNhdGVnb3J5fTwvcD5cclxuICAgIDxkaXYgY2xhc3MgPSBcInJlY2lwZS1pbnN0cnVjdFwiPlxyXG4gICAgICA8aDM+SW5zdHJ1Y3Rpb25zOjwvaDM+XHJcbiAgICAgIDxwPiR7bWVhbC5zdHJJbnN0cnVjdGlvbnN9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJyZWNpcGUtbGlua1wiPlxyXG4gICAgPGEgaHJlZj1cIiR7bWVhbC5zdHJZb3V0dWJlfVwiIHRhcmdldCA9IFwiX2JsYW5rXCI+V2F0Y2ggWW91dHViZTwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGgzIGNsYXNzPVwibS0zIGNvbW1lbnQtY291bnRcIj48L2gzPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8dWwgaWQ9XCJsaXN0LWNvbW1lbnRcIiBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGgzIGNsYXNzPVwibS0zXCI+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICA8Zm9ybSBhdXRvY29tcGxldGU9XCJvZmZcIiBjbGFzcz1cImZvcm0tY2xhc3NcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbW1lbnRhdG9yXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cclxuICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnQuLi5cIj48L3RleHRhcmVhPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBjb21tZW50QnRuXCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICBgO1xyXG5cclxuICBtZWFsRGV0YWlsc0NvbnRlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Q29tbWVudCcpO1xyXG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudEJ0bicpO1xyXG4gIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50YXRvcicpLnZhbHVlO1xyXG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50JykudmFsdWU7XHJcblxyXG4gICAgY29uc3QgbWVhbElkID0gbWVhbC5pZE1lYWw7XHJcbiAgICBpZiAodXNlcm5hbWUgIT09ICcnICYmIGNvbW1lbnQgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XHJcbiAgICAgICAgaXRlbV9pZDogbWVhbElkLFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIGNvbW1lbnQsXHJcbiAgICAgIH07XHJcbiAgICAgIGFkZENvbW1lbnQobmV3Q29tbWVudCk7XHJcbiAgICB9IGVsc2UgYWxlcnQoJ0VtcHR5IGZpZWxkcyBhcmUgbm90IGFsbG93ZWQnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50YXRvcicpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnZhbHVlID0gJyc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZ2V0Q29tbWVudChtZWFsKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgZ2V0Q29tbWVudChtZWFsKTtcclxuICB9KTtcclxuICBnZXRDb21tZW50KG1lYWwpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlTWVhbCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnQnKSkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgbWVhbFBvcFVwKGRhdGEubWVhbHMpO1xyXG4gIH1cclxufTtcclxuXHJcbmJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0U2luZ2xlTWVhbCk7XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBtZWFsRGV0YWlsc0NvbnRlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Q29tbWVudCcpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IE1lYWxzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgbGlrZUNvdW50ZXIgZnJvbSAnLi9saWtlQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZ2V0TWVhbElkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/Zj1iJylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24ubWVhbHMubWFwKCh4KSA9PiB4LmlkTWVhbCkpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaWRMaXN0ID0gYXdhaXQgZ2V0TWVhbElkKCk7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0pzNHhrajZ1bEhJbjUwaGJBeGpuL2xpa2VzJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAganNvbi5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaWRMaXN0LmluY2x1ZGVzKGxpa2UuaXRlbV9pZCkpIHtcclxuICAgICAgICAgICAgbGlrZUNvdW50ZXIobGlrZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IHsgZ2V0TGlrZXMgYXMgZGVmYXVsdCB9OyIsImNvbnN0IGxpa2VDb3VudGVyID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW0uaXRlbV9pZH1gKTtcclxuICBsaWtlcy5pbm5lckhUTUwgPSBgJiMxMDA4NDsmIzY1MDM5OyAoJHtpdGVtLmxpa2VzfSlgO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgbGlrZUNvdW50ZXIgYXMgZGVmYXVsdCB9OyIsImNvbnN0IG1lYWxDb3VudGVyID0gKGxlbmd0aCkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWxzJyk7XHJcbiAgdGl0bGUuaW5uZXJIVE1MID0gYE1lYWxzICgke2xlbmd0aH0pYDtcclxufTtcclxuXHJcbmV4cG9ydCB7IG1lYWxDb3VudGVyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgTWVhbHMgZnJvbSAnLi9kaXNwbGF5TGlzdC5qcyc7XHJcbmltcG9ydCBtZWFsQ291bnRlciBmcm9tICcuL21lYWxDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGdldE1lYWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9YicpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIE1lYWxzLnNob3dCb2FyZChqc29uLm1lYWxzKTtcclxuICAgICAgICBtZWFsQ291bnRlcihqc29uLm1lYWxzLmxlbmd0aCk7XHJcbiAgICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGdldE1lYWxzIGFzIGRlZmF1bHQgfTsiLCJjb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBuZXdMaWtlID0geyBpdGVtX2lkOiBgJHtpZH1gIH07XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvSnM0eGtqNnVsSEluNTBoYkF4am4vbGlrZXMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdMaWtlKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGpzb24pID0+IGpzb24pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBvc3RMaWtlcyBhcyBkZWZhdWx0IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCAnLi9mdW5jdGlvbnMvY29tbWVudHN0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9mdW5jdGlvbnMvaW1hZ2VzL21lYWwtbG9nby5wbmcnO1xyXG5pbXBvcnQgZ2V0TWVhbHMgZnJvbSAnLi9mdW5jdGlvbnMvbWVhbHNBcGkuanMnO1xyXG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9mdW5jdGlvbnMvZ2V0TGlrZXMuanMnO1xyXG5cclxuY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nbycpO1xyXG5sb2dvTGluay5zcmMgPSBMb2dvO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGdldE1lYWxzKCkpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZ2V0TGlrZXMoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9