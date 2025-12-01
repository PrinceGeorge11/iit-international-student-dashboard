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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/profile/route.ts */ \"(rsc)/./app/api/profile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Legacy\\\\Desktop\\\\iit-international-student-dashboard\\\\app\\\\api\\\\profile\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZWdhY3klNUNEZXNrdG9wJTVDaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0xlZ2FjeSU1Q0Rlc2t0b3AlNUNpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNEM7QUFDekg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZC8/NTNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxMZWdhY3lcXFxcRGVza3RvcFxcXFxpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZFxcXFxhcHBcXFxcYXBpXFxcXHByb2ZpbGVcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2ZpbGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9maWxlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9maWxlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTGVnYWN5XFxcXERlc2t0b3BcXFxcaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmRcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9maWxlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/profile/route.ts":
/*!**********************************!*\
  !*** ./app/api/profile/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n// app/api/profile/route.ts\n\n\n\n\nconst COOKIE_NAME = \"student_session\";\nfunction getCurrentStudentId() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    const token = cookieStore.get(COOKIE_NAME)?.value;\n    const secret = process.env.AUTH_JWT_SECRET;\n    if (!token || !secret) return null;\n    try {\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, secret);\n        return payload.id;\n    } catch  {\n        return null;\n    }\n}\nasync function GET() {\n    const studentId = getCurrentStudentId();\n    if (!studentId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Not authenticated\"\n        }, {\n            status: 401\n        });\n    }\n    const student = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.student.findUnique({\n        where: {\n            id: studentId\n        },\n        select: {\n            id: true,\n            fullName: true,\n            email: true,\n            studentType: true,\n            program: true,\n            avatarUrl: true,\n            isAdmin: true,\n            lastActiveRoom: {\n                select: {\n                    slug: true,\n                    name: true\n                }\n            }\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        student\n    });\n}\nasync function PUT(req) {\n    const studentId = getCurrentStudentId();\n    if (!studentId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Not authenticated\"\n        }, {\n            status: 401\n        });\n    }\n    const body = await req.json();\n    const { fullName, program, avatarUrl } = body;\n    if (!fullName || !program) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Full name and program are required.\"\n        }, {\n            status: 400\n        });\n    }\n    const updated = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.student.update({\n        where: {\n            id: studentId\n        },\n        data: {\n            fullName,\n            program,\n            avatarUrl: avatarUrl ?? undefined\n        },\n        select: {\n            id: true,\n            fullName: true,\n            email: true,\n            studentType: true,\n            program: true,\n            avatarUrl: true,\n            isAdmin: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        student: updated\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2ZpbGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUNnQjtBQUNKO0FBQ1I7QUFDTztBQUV0QyxNQUFNSSxjQUFjO0FBU3BCLFNBQVNDO0lBQ1AsTUFBTUMsY0FBY0wscURBQU9BO0lBQzNCLE1BQU1NLFFBQVFELFlBQVlFLEdBQUcsQ0FBQ0osY0FBY0s7SUFDNUMsTUFBTUMsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBRTFDLElBQUksQ0FBQ04sU0FBUyxDQUFDRyxRQUFRLE9BQU87SUFFOUIsSUFBSTtRQUNGLE1BQU1JLFVBQVVaLDBEQUFVLENBQUNLLE9BQU9HO1FBQ2xDLE9BQU9JLFFBQVFFLEVBQUU7SUFDbkIsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFTyxlQUFlQztJQUNwQixNQUFNQyxZQUFZYjtJQUNsQixJQUFJLENBQUNhLFdBQVc7UUFDZCxPQUFPbEIscURBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFvQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN6RTtJQUVBLE1BQU1DLFVBQVUsTUFBTW5CLCtDQUFNQSxDQUFDbUIsT0FBTyxDQUFDQyxVQUFVLENBQUM7UUFDOUNDLE9BQU87WUFBRVIsSUFBSUU7UUFBVTtRQUN2Qk8sUUFBUTtZQUNOVCxJQUFJO1lBQ0pVLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxTQUFTO1lBQ1RDLGdCQUFnQjtnQkFDZFAsUUFBUTtvQkFBRVEsTUFBTTtvQkFBTUMsTUFBTTtnQkFBSztZQUNuQztRQUNGO0lBQ0Y7SUFFQSxPQUFPbEMscURBQVlBLENBQUNtQixJQUFJLENBQUM7UUFBRUc7SUFBUTtBQUNyQztBQUVPLGVBQWVhLElBQUlDLEdBQVk7SUFDcEMsTUFBTWxCLFlBQVliO0lBQ2xCLElBQUksQ0FBQ2EsV0FBVztRQUNkLE9BQU9sQixxREFBWUEsQ0FBQ21CLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0lBRUEsTUFBTWdCLE9BQU8sTUFBTUQsSUFBSWpCLElBQUk7SUFDM0IsTUFBTSxFQUFFTyxRQUFRLEVBQUVHLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdPO0lBTXpDLElBQUksQ0FBQ1gsWUFBWSxDQUFDRyxTQUFTO1FBQ3pCLE9BQU83QixxREFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUFzQyxHQUMvQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNaUIsVUFBVSxNQUFNbkMsK0NBQU1BLENBQUNtQixPQUFPLENBQUNpQixNQUFNLENBQUM7UUFDMUNmLE9BQU87WUFBRVIsSUFBSUU7UUFBVTtRQUN2QnNCLE1BQU07WUFDSmQ7WUFDQUc7WUFDQUMsV0FBV0EsYUFBYVc7UUFDMUI7UUFDQWhCLFFBQVE7WUFDTlQsSUFBSTtZQUNKVSxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxTQUFTO1lBQ1RDLFdBQVc7WUFDWEMsU0FBUztRQUNYO0lBQ0Y7SUFFQSxPQUFPL0IscURBQVlBLENBQUNtQixJQUFJLENBQUM7UUFBRUcsU0FBU2dCO0lBQVE7QUFDOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZC8uL2FwcC9hcGkvcHJvZmlsZS9yb3V0ZS50cz81M2FiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvcHJvZmlsZS9yb3V0ZS50c1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJzdHVkZW50X3Nlc3Npb25cIjtcclxuXHJcbnR5cGUgSnd0UGF5bG9hZCA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBpc0FkbWluPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRTdHVkZW50SWQoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBjb29raWVzKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoQ09PS0lFX05BTUUpPy52YWx1ZTtcclxuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5BVVRIX0pXVF9TRUNSRVQ7XHJcblxyXG4gIGlmICghdG9rZW4gfHwgIXNlY3JldCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0gand0LnZlcmlmeSh0b2tlbiwgc2VjcmV0KSBhcyBKd3RQYXlsb2FkO1xyXG4gICAgcmV0dXJuIHBheWxvYWQuaWQ7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3Qgc3R1ZGVudElkID0gZ2V0Q3VycmVudFN0dWRlbnRJZCgpO1xyXG4gIGlmICghc3R1ZGVudElkKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJOb3QgYXV0aGVudGljYXRlZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgcHJpc21hLnN0dWRlbnQuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogc3R1ZGVudElkIH0sXHJcbiAgICBzZWxlY3Q6IHtcclxuICAgICAgaWQ6IHRydWUsXHJcbiAgICAgIGZ1bGxOYW1lOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgc3R1ZGVudFR5cGU6IHRydWUsXHJcbiAgICAgIHByb2dyYW06IHRydWUsXHJcbiAgICAgIGF2YXRhclVybDogdHJ1ZSxcclxuICAgICAgaXNBZG1pbjogdHJ1ZSxcclxuICAgICAgbGFzdEFjdGl2ZVJvb206IHtcclxuICAgICAgICBzZWxlY3Q6IHsgc2x1ZzogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3R1ZGVudCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IFJlcXVlc3QpIHtcclxuICBjb25zdCBzdHVkZW50SWQgPSBnZXRDdXJyZW50U3R1ZGVudElkKCk7XHJcbiAgaWYgKCFzdHVkZW50SWQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIGNvbnN0IHsgZnVsbE5hbWUsIHByb2dyYW0sIGF2YXRhclVybCB9ID0gYm9keSBhcyB7XHJcbiAgICBmdWxsTmFtZT86IHN0cmluZztcclxuICAgIHByb2dyYW0/OiBzdHJpbmc7XHJcbiAgICBhdmF0YXJVcmw/OiBzdHJpbmcgfCBudWxsO1xyXG4gIH07XHJcblxyXG4gIGlmICghZnVsbE5hbWUgfHwgIXByb2dyYW0pIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGdWxsIG5hbWUgYW5kIHByb2dyYW0gYXJlIHJlcXVpcmVkLlwiIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBwcmlzbWEuc3R1ZGVudC51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQ6IHN0dWRlbnRJZCB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBmdWxsTmFtZSxcclxuICAgICAgcHJvZ3JhbSxcclxuICAgICAgYXZhdGFyVXJsOiBhdmF0YXJVcmwgPz8gdW5kZWZpbmVkXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGlkOiB0cnVlLFxyXG4gICAgICBmdWxsTmFtZTogdHJ1ZSxcclxuICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIHN0dWRlbnRUeXBlOiB0cnVlLFxyXG4gICAgICBwcm9ncmFtOiB0cnVlLFxyXG4gICAgICBhdmF0YXJVcmw6IHRydWUsXHJcbiAgICAgIGlzQWRtaW46IHRydWVcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3R1ZGVudDogdXBkYXRlZCB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29va2llcyIsImp3dCIsInByaXNtYSIsIkNPT0tJRV9OQU1FIiwiZ2V0Q3VycmVudFN0dWRlbnRJZCIsImNvb2tpZVN0b3JlIiwidG9rZW4iLCJnZXQiLCJ2YWx1ZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX0pXVF9TRUNSRVQiLCJwYXlsb2FkIiwidmVyaWZ5IiwiaWQiLCJHRVQiLCJzdHVkZW50SWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzdHVkZW50IiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2VsZWN0IiwiZnVsbE5hbWUiLCJlbWFpbCIsInN0dWRlbnRUeXBlIiwicHJvZ3JhbSIsImF2YXRhclVybCIsImlzQWRtaW4iLCJsYXN0QWN0aXZlUm9vbSIsInNsdWciLCJuYW1lIiwiUFVUIiwicmVxIiwiYm9keSIsInVwZGF0ZWQiLCJ1cGRhdGUiLCJkYXRhIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/profile/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"error\",\n        \"warn\"\n    ]\n});\n// Avoid multiple instances in dev with Next.js hot reload\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDOEI7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7S0FBTztBQUN4QixHQUFHO0FBRUwsMERBQTBEO0FBQzFELElBQUlDLElBQXFDLEVBQUU7SUFDekNKLGdCQUFnQkUsTUFBTSxHQUFHQTtBQUMzQjtBQUVBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgcHJpc21hPzogUHJpc21hQ2xpZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xyXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgbG9nOiBbXCJlcnJvclwiLCBcIndhcm5cIl0sIC8vIGtlZXAgbG9ncyBtaW5pbWFsIGJ1dCB1c2VmdWxcclxuICB9KTtcclxuXHJcbi8vIEF2b2lkIG11bHRpcGxlIGluc3RhbmNlcyBpbiBkZXYgd2l0aCBOZXh0LmpzIGhvdCByZWxvYWRcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();