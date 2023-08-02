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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n__webpack_require__(/*! ./main.global.scss */ \"./src/main.global.scss\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar Text_1 = __webpack_require__(/*! ./shared/Text */ \"./src/shared/Text/index.ts\");\nvar Footer_1 = __webpack_require__(/*! ./shared/Footer */ \"./src/shared/Footer/index.ts\");\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(false), mounted = _a[0], setMounted = _a[1];\n    (0, react_1.useEffect)(function () {\n        setMounted(true);\n    }, []);\n    return (react_1.default.createElement(react_1.default.Fragment, null, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\n        react_1.default.createElement(Layout_1.Layout, null,\n            react_1.default.createElement(react_router_dom_1.Routes, null,\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: \"/shop/\" }) }),\n                react_1.default.createElement(react_router_dom_1.Route, { path: \"/shop/\", element: react_1.default.createElement(react_1.default.Fragment, null,\n                        react_1.default.createElement(Text_1.Text, null, \"\\u041A\\u043E\\u0442\\u043E\\u043B\\u043E\\u0433\"),\n                        react_1.default.createElement(Footer_1.Footer, null)) },\n                    react_1.default.createElement(react_router_dom_1.Route, { path: \"/basket\", element: react_1.default.createElement(Text_1.Text, null, \"\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430\") }))))))));\n}\nexports.App = (0, root_1.hot)(function () { return (react_1.default.createElement(AppComponent, null)); });\n\n\n//# sourceURL=webpack://reactapp/./src/App.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a2087a11065d8a74ab8")
/******/ })();
/******/ 
/******/ }
);