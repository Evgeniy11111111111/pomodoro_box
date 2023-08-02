"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatereactapp"]("main",{

/***/ "./src/api/InitData.ts":
/*!*****************************!*\
  !*** ./src/api/InitData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initData = void 0;\nfunction initData() {\n    var initDataUnsafe = window.Telegram.WebApp.initDataUnsafe || {};\n    if (!!initDataUnsafe.user) {\n        window.Telegram.WebApp.expand();\n    }\n    else {\n        initDataUnsafe.user = {\n            id: 980981769,\n            first_name: \"Евгений\",\n            last_name: \"Волков\",\n            username: \"evgeniyvolkov93\",\n            language_code: \"ru\",\n            account: \"6\"\n        };\n    }\n    return initDataUnsafe;\n}\nexports.initData = initData;\n\n\n//# sourceURL=webpack://reactapp/./src/api/InitData.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("456a992ee50317c47843")
/******/ })();
/******/ 
/******/ }
);