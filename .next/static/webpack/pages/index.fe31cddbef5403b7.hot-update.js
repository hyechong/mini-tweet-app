"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet\"), data = ref1.data, error = ref1.error;\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-auto w-full items-center justify-center p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-extrabold flex justify-center items-center\",\n                    children: \"Tweets\"\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data === null || data === void 0 ? void 0 : (ref = data.tweets) === null || ref === void 0 ? void 0 : ref.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border-b border-white last:border-b-0 pb-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/tweet/\".concat(tweet.id),\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"flex flex-col px-4 pt-5 cursor-pointer justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between space-x-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"pt-2 flex flex-col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"text-sm font-bold text-gray-800 \",\n                                                        children: [\n                                                            tweet.user.name,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-xs text-neutral-500 font-normal ml-3\",\n                                                                children: tweet.createdAt.toString().substring(0, 10)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                                lineNumber: 46,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-medium mt-1 text-gray-900\",\n                                                        children: tweet.message\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex space-x-0.5 items-center text-sm text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        className: \"w-4 h-4\",\n                                                        fill: \"none\",\n                                                        stroke: \"currentColor\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            strokeLinecap: \"round\",\n                                                            strokeLinejoin: \"round\",\n                                                            strokeWidth: \"2\",\n                                                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: tweet._count.likes\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/tweet/upload\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"bg-yellow-400 px-5 py-2 flex justify-center items-center w-full rounded-lg border-2 border-b-4 border-r-4 border-black font-bold\",\n                        children: \"add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n}, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSTtrRUFBRVQsS0FBSyxDQUFDd0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs4REFBUTs7Ozs7O3NEQUM3Qjs7Ozs7OzhDQUNGOzs7OzswQ0FDSjs7Ozs7c0NBQ0M7Ozs7O2tDQUNKO3FCQUNOLENBQUM7Ozs7O3lCQUNDOzhCQUNMLDhEQUFDdEMsa0RBQUk7b0JBQUNlLElBQUksRUFBQyxlQUFlO29CQUFDRSxjQUFjOzhCQUN2Qyw0RUFBQ0MsR0FBQzt3QkFBQ1YsU0FBUyxFQUFDLGtJQUFrSTtrQ0FBQyxLQUVoSjs7Ozs7NkJBQUk7Ozs7O3lCQUNDOzs7Ozs7aUJBQ0g7Ozs7O2FBQ0YsQ0FDTjtDQUNIOztRQWhFZ0JaLGtEQUFTO1FBQ0FHLDJDQUFNOztJQStEOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBUd2VldCwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW50ZXJmYWNlIFR3ZWV0V2l0aENvdW50IGV4dGVuZHMgVHdlZXQge1xuICB1c2VyOiBVc2VyO1xuICBfY291bnQ6IHtcbiAgICBsaWtlczogbnVtYmVyO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgVHdlZXRzUmVzcG9uc2Uge1xuICBzdGF0dXM6IHN0cmluZztcbiAgdHdlZXRzOiBUd2VldFdpdGhDb3VudFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1I8VHdlZXRzUmVzcG9uc2U+KCcvYXBpL3R3ZWV0Jyk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcm91dGVyLnJlcGxhY2UoJy9jcmVhdGUtYWNjb3VudCcpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgZXJyb3JdKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWF1dG8gdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1waW5rLTEwMCBwLTQgdy1mdWxsIG1heC13LXNtIHJvdW5kZWQtM3hsIGJvcmRlci0yIGJvcmRlci1iLTQgYm9yZGVyLXItNCBib3JkZXItYmxhY2snPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtZXh0cmFib2xkIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICBUd2VldHNcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkYXRhPy50d2VldHM/Lm1hcCgodHdlZXQpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2JvcmRlci1iIGJvcmRlci13aGl0ZSBsYXN0OmJvcmRlci1iLTAgcGItNSc+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHt0d2VldC5pZH1gfSBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcHgtNCBwdC01IGN1cnNvci1wb2ludGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC01Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTIgZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCAnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3R3ZWV0LnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LW5ldXRyYWwtNTAwIGZvbnQtbm9ybWFsIG1sLTMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHdlZXQuY3JlYXRlZEF0LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gbXQtMSB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldC5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggc3BhY2UteC0wLjUgaXRlbXMtY2VudGVyIHRleHQtc20gIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy00IGgtNCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6Jz48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3R3ZWV0Ll9jb3VudC5saWtlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8TGluayBocmVmPScvdHdlZXQvdXBsb2FkJyBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2JnLXllbGxvdy00MDAgcHgtNSBweS0yIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1iLTQgYm9yZGVyLXItNCBib3JkZXItYmxhY2sgZm9udC1ib2xkJz5cbiAgICAgICAgICAgIGFkZFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwiTGluayIsImRhdGEiLCJyb3V0ZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwibGkiLCJocmVmIiwiaWQiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJoNCIsInVzZXIiLCJuYW1lIiwic3BhbiIsImNyZWF0ZWRBdCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwibWVzc2FnZSIsInN2ZyIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiX2NvdW50IiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});