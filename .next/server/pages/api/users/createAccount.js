"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/createAccount";
exports.ids = ["pages/api/users/createAccount"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/createAccount.ts":
/*!******************************************!*\
  !*** ./pages/api/users/createAccount.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email  } = req.body;\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user) {\n            return res.status(200).end();\n        }\n        await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n            data: {\n                name,\n                email\n            }\n        });\n        return res.status(201).end();\n    }\n    return res.status(405).end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlQWNjb3VudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNpQztBQUVsQixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBa0MsRUFDbEM7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFDaEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLCtEQUFrQixDQUFDO1lBQ3BDVSxLQUFLLEVBQUU7Z0JBQ0xKLEtBQUs7YUFDTjtTQUNGLENBQUM7UUFDRixJQUFJRSxJQUFJLEVBQUU7WUFDUixPQUFPTCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxNQUFNWiwyREFBYyxDQUFDO1lBQ25CYyxJQUFJLEVBQUU7Z0JBQ0pULElBQUk7Z0JBQ0pDLEtBQUs7YUFDTjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU9ILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUM5QjtJQUNELE9BQU9ULEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztDQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlQWNjb3VudC50cz9jNGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9saWIvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICh1c2VyKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZCgpO1xuICAgIH1cbiAgICBhd2FpdCBkYi51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmVuZCgpO1xuICB9XG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG59XG4iXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImVtYWlsIiwiYm9keSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdGF0dXMiLCJlbmQiLCJjcmVhdGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/createAccount.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/createAccount.ts"));
module.exports = __webpack_exports__;

})();