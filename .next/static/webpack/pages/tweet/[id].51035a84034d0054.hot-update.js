"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutation */ \"./lib/useMutation.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TweetDetail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var goBackHandler = function() {\n        router.push(\"/\");\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref.data, mutate = ref.mutate;\n    var ref1 = _slicedToArray((0,_lib_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet/\".concat(router.query.id, \"/like\")), 1), toggleLike = ref1[0];\n    var onLikeClick = function() {\n        if (!data) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: !data.isLiked\n        }), false);\n        toggleLike({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-auto w-full items-center justify-center p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goBackHandler,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-6 h-6\",\n                        fill: \"none\",\n                        stroke: \"currentColor\",\n                        \"stroke-width\": \"1.5\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            d: \"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold\",\n                    children: data === null || data === void 0 ? void 0 : data.tweet.user.name\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-2 border-black rounded-lg w-full resize-none min-h-[200px] p-3\",\n                    children: data === null || data === void 0 ? void 0 : data.tweet.message\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onLikeClick,\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cls)(\"w-full flex items-center justify-center h-9 boder-1 border-[#FC5200] text-white  px-4 border border-transparent rounded-md shadow-sm font-medium\", (data === null || data === void 0 ? void 0 : data.isLiked) ? \"bg-[#fdbc9b]\" : \"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-7 h-7\",\n                        fill: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"red\" : \"none\",\n                        stroke: \"red\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: \"2\",\n                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(TweetDetail, \"jxQMzpluc2SxMBy5BJXf/19LDWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _lib_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = TweetDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetDetail);\nvar _c;\n$RefreshReg$(_c, \"TweetDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRUksT0FBTyxJQUFHLEtBQUssR0FBRyxNQUFNO3dCQUNwQ08sTUFBTSxFQUFDLEtBQUs7d0JBQ1pFLE9BQU8sRUFBQyxXQUFXO3dCQUNuQkMsS0FBSyxFQUFDLDRCQUE0QjtrQ0FDbEMsNEVBQUNFLE1BQUk7NEJBQ0hRLGFBQWEsRUFBQyxPQUFPOzRCQUNyQkMsY0FBYyxFQUFDLE9BQU87NEJBQ3RCQyxXQUFXLEVBQUMsR0FBRzs0QkFDZlAsQ0FBQyxFQUFDLDZIQUE2SDs7Ozs7aUNBQVE7Ozs7OzZCQUNySTs7Ozs7eUJBQ0M7Ozs7OztpQkFDTDs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E1REt6QixXQUFXOztRQUNBSCxrREFBUztRQUlDRCwyQ0FBTTtRQUlWRSx3REFBVzs7O0FBVDVCRSxLQUFBQSxXQUFXO0FBOERqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgVHdlZXQsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSAnLi4vLi4vbGliL3VzZU11dGF0aW9uJztcbmltcG9ydCB7IGNscyB9IGZyb20gJy4uLy4uL2xpYi91dGlscyc7XG5cbmludGVyZmFjZSBUd2VldFdpdGhVc2VyIGV4dGVuZHMgVHdlZXQge1xuICB1c2VyOiBVc2VyO1xufVxuXG5pbnRlcmZhY2UgVHdlZXREZXRhaWxSZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuICB0d2VldDogVHdlZXRXaXRoVXNlcjtcbiAgaXNMaWtlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgVHdlZXREZXRhaWw6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZ29CYWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnLycpO1xuICB9O1xuICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlU1dSPFR3ZWV0RGV0YWlsUmVzcG9uc2U+KFxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXG4gICk7XG5cbiAgY29uc3QgW3RvZ2dsZUxpa2VdID0gdXNlTXV0YXRpb24oYC9hcGkvdHdlZXQvJHtyb3V0ZXIucXVlcnkuaWR9L2xpa2VgKTtcbiAgY29uc3Qgb25MaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKHsgLi4uZGF0YSwgaXNMaWtlZDogIWRhdGEuaXNMaWtlZCB9LCBmYWxzZSk7XG4gICAgdG9nZ2xlTGlrZSh7fSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWF1dG8gdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1waW5rLTEwMCBwLTQgdy1mdWxsIG1heC13LXNtIHJvdW5kZWQtM3hsIGJvcmRlci0yIGJvcmRlci1iLTQgYm9yZGVyLXItNCBib3JkZXItYmxhY2snPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvQmFja0hhbmRsZXJ9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNidcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD0nMS41J1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgYXJpYS1oaWRkZW49J3RydWUnPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJ1xuICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICBkPSdNOSAxNUwzIDltMCAwbDYtNk0zIDloMTJhNiA2IDAgMDEwIDEyaC0zJz48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1ib2xkJz57ZGF0YT8udHdlZXQudXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1mdWxsIHJlc2l6ZS1ub25lIG1pbi1oLVsyMDBweF0gcC0zJz5cbiAgICAgICAgICB7ZGF0YT8udHdlZXQubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkxpa2VDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NscyhcbiAgICAgICAgICAgICd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC05IGJvZGVyLTEgYm9yZGVyLVsjRkM1MjAwXSB0ZXh0LXdoaXRlICBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9udC1tZWRpdW0nLFxuICAgICAgICAgICAgZGF0YT8uaXNMaWtlZCA/ICdiZy1bI2ZkYmM5Yl0nIDogJydcbiAgICAgICAgICApfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctNyBoLTcnXG4gICAgICAgICAgICBmaWxsPXtkYXRhPy5pc0xpa2VkID8gJ3JlZCcgOiAnbm9uZSd9XG4gICAgICAgICAgICBzdHJva2U9J3JlZCdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgZD0nTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6Jz48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUd2VldERldGFpbDtcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsImNscyIsIlR3ZWV0RGV0YWlsIiwicm91dGVyIiwiZ29CYWNrSGFuZGxlciIsInB1c2giLCJxdWVyeSIsImlkIiwiZGF0YSIsIm11dGF0ZSIsInRvZ2dsZUxpa2UiLCJvbkxpa2VDbGljayIsImlzTGlrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZS13aWR0aCIsInZpZXdCb3giLCJ4bWxucyIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsInR3ZWV0IiwidXNlciIsIm5hbWUiLCJtZXNzYWdlIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});