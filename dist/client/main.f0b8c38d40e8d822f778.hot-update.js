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

/***/ "./src/shared/Footer/FooterBtns/BtnBasket/BtnBasket.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/Footer/FooterBtns/BtnBasket/BtnBasket.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BtnBasket = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar btnbasket_scss_1 = __importDefault(__webpack_require__(/*! ./btnbasket.scss */ \"./src/shared/Footer/FooterBtns/BtnBasket/btnbasket.scss\"));\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nfunction BtnBasket() {\n    var btnBasketClasses = (0, classnames_1.default)(\"btn-reset\", \"footerBtn\", btnbasket_scss_1.default.basket);\n    return (react_1.default.createElement(react_router_dom_1.Link, { className: btnBasketClasses },\n        react_1.default.createElement(\"span\", { className: btnbasket_scss_1.default.svgBasket },\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcon.Basket })),\n        react_1.default.createElement(Text_1.Text, { className: btnbasket_scss_1.default.text, size: 12, lheight: 14, bold: Text_1.EBold.medium, color: Text_1.EColor.red }, \"\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430\"),\n        react_1.default.createElement(Text_1.Text, { className: btnbasket_scss_1.default.count, size: 8, lheight: 14, color: Text_1.EColor.black, bold: Text_1.EBold.medium }, \"0\")));\n}\nexports.BtnBasket = BtnBasket;\n\n\n//# sourceURL=webpack://reactapp/./src/shared/Footer/FooterBtns/BtnBasket/BtnBasket.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea8497f58aa7da751b69")
/******/ })();
/******/ 
/******/ }
);