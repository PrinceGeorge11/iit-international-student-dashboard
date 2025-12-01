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
exports.id = "app/api/chat/messages/route";
exports.ids = ["app/api/chat/messages/route"];
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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Fmessages%2Froute&page=%2Fapi%2Fchat%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Fmessages%2Froute&page=%2Fapi%2Fchat%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_chat_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/messages/route.ts */ \"(rsc)/./app/api/chat/messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/messages/route\",\n        pathname: \"/api/chat/messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/messages/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Legacy\\\\Desktop\\\\iit-international-student-dashboard\\\\app\\\\api\\\\chat\\\\messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_chat_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGbWVzc2FnZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNoYXQlMkZtZXNzYWdlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoYXQlMkZtZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZWdhY3klNUNEZXNrdG9wJTVDaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0xlZ2FjeSU1Q0Rlc2t0b3AlNUNpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUQ7QUFDaEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZC8/Nzk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxMZWdhY3lcXFxcRGVza3RvcFxcXFxpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZFxcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxcbWVzc2FnZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvbWVzc2FnZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0L21lc3NhZ2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L21lc3NhZ2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTGVnYWN5XFxcXERlc2t0b3BcXFxcaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmRcXFxcYXBwXFxcXGFwaVxcXFxjaGF0XFxcXG1lc3NhZ2VzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGF0L21lc3NhZ2VzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Fmessages%2Froute&page=%2Fapi%2Fchat%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/chat/messages/route.ts":
/*!****************************************!*\
  !*** ./app/api/chat/messages/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_pusher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/pusher */ \"(rsc)/./lib/pusher.ts\");\n// app/api/chat/messages/route.ts\n\n\n\n\n\nconst COOKIE_NAME = \"student_session\";\nasync function GET(req) {\n    try {\n        const { searchParams } = new URL(req.url);\n        const roomSlug = searchParams.get(\"room\");\n        if (!roomSlug) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing room parameter\"\n            }, {\n                status: 400\n            });\n        }\n        const room = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatRoom.findUnique({\n            where: {\n                slug: roomSlug\n            }\n        });\n        if (!room) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Room not found\"\n            }, {\n                status: 404\n            });\n        }\n        const messages = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatMessage.findMany({\n            where: {\n                roomId: room.id\n            },\n            orderBy: {\n                createdAt: \"asc\"\n            },\n            take: 100,\n            include: {\n                student: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            room,\n            messages\n        });\n    } catch (error) {\n        console.error(\"GET /api/chat/messages error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to load messages\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { roomSlug, content } = body;\n        if (!roomSlug || !content?.trim()) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"roomSlug and content are required\"\n            }, {\n                status: 400\n            });\n        }\n        // Get current student from JWT cookie\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)();\n        const token = cookieStore.get(COOKIE_NAME)?.value;\n        const secret = process.env.AUTH_JWT_SECRET;\n        if (!token || !secret) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        let payload;\n        try {\n            payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(token, secret);\n        } catch  {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid session\"\n            }, {\n                status: 401\n            });\n        }\n        const room = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatRoom.findUnique({\n            where: {\n                slug: roomSlug\n            }\n        });\n        if (!room) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Room not found\"\n            }, {\n                status: 404\n            });\n        }\n        const message = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatMessage.create({\n            data: {\n                roomId: room.id,\n                studentId: payload.id,\n                content: content.trim()\n            },\n            include: {\n                student: true\n            }\n        });\n        const payloadForClients = {\n            id: message.id,\n            content: message.content,\n            createdAt: message.createdAt,\n            roomSlug,\n            student: {\n                id: message.student.id,\n                fullName: message.student.fullName,\n                avatarUrl: message.student.avatarUrl ?? null\n            }\n        };\n        // 🔴 Trigger Pusher event to update all subscribed clients\n        const channel = `chat-room-${roomSlug}`;\n        await _lib_pusher__WEBPACK_IMPORTED_MODULE_4__.pusherServer.trigger(channel, \"message:new\", payloadForClients);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: payloadForClients\n        });\n    } catch (error) {\n        console.error(\"POST /api/chat/messages error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to send message\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN3QixNQUFNLENBQUM7WUFDOUNDLE1BQU07Z0JBQ0p2QixRQUFRUixLQUFLUyxFQUFFO2dCQUNmdUIsV0FBV0wsUUFBUWxCLEVBQUU7Z0JBQ3JCUyxTQUFTQSxRQUFRQyxJQUFJO1lBQ3ZCO1lBQ0FOLFNBQVM7Z0JBQUVDLFNBQVM7WUFBSztRQUMzQjtRQUVBLE1BQU1tQixvQkFBb0I7WUFDeEJ4QixJQUFJb0IsUUFBUXBCLEVBQUU7WUFDZFMsU0FBU1csUUFBUVgsT0FBTztZQUN4QlAsV0FBV2tCLFFBQVFsQixTQUFTO1lBQzVCaEI7WUFDQW1CLFNBQVM7Z0JBQ1BMLElBQUlvQixRQUFRZixPQUFPLENBQUNMLEVBQUU7Z0JBQ3RCeUIsVUFBVUwsUUFBUWYsT0FBTyxDQUFDb0IsUUFBUTtnQkFDbENDLFdBQVdOLFFBQVFmLE9BQU8sQ0FBQ3FCLFNBQVMsSUFBSTtZQUMxQztRQUNGO1FBRUEsMkRBQTJEO1FBQzNELE1BQU1DLFVBQVUsQ0FBQyxVQUFVLEVBQUV6QyxTQUFTLENBQUM7UUFDdkMsTUFBTVAscURBQVlBLENBQUNpRCxPQUFPLENBQUNELFNBQVMsZUFBZUg7UUFFbkQsT0FBT2pELHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRWdDLFNBQVNJO1FBQWtCO0lBQ3hELEVBQUUsT0FBT25DLE9BQU87UUFDZGlCLFFBQVFqQixLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPZCxxREFBWUEsQ0FBQ2EsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQXlCLEdBQ2xDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQvLi9hcHAvYXBpL2NoYXQvbWVzc2FnZXMvcm91dGUudHM/NWExMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYXBpL2NoYXQvbWVzc2FnZXMvcm91dGUudHNcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcbmltcG9ydCB7IHB1c2hlclNlcnZlciB9IGZyb20gXCJAL2xpYi9wdXNoZXJcIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJzdHVkZW50X3Nlc3Npb25cIjtcclxuXHJcbnR5cGUgSnd0UGF5bG9hZCA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhdmF0YXJVcmw/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcclxuICAgIGNvbnN0IHJvb21TbHVnID0gc2VhcmNoUGFyYW1zLmdldChcInJvb21cIik7XHJcblxyXG4gICAgaWYgKCFyb29tU2x1Zykge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJNaXNzaW5nIHJvb20gcGFyYW1ldGVyXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAwIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb29tID0gYXdhaXQgcHJpc21hLmNoYXRSb29tLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBzbHVnOiByb29tU2x1ZyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJvb20pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiUm9vbSBub3QgZm91bmRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcHJpc21hLmNoYXRNZXNzYWdlLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgcm9vbUlkOiByb29tLmlkIH0sXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImFzY1wiIH0sXHJcbiAgICAgIHRha2U6IDEwMCxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIHN0dWRlbnQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcm9vbSwgbWVzc2FnZXMgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgL2FwaS9jaGF0L21lc3NhZ2VzIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGxvYWQgbWVzc2FnZXNcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCB7IHJvb21TbHVnLCBjb250ZW50IH0gPSBib2R5IGFzIHtcclxuICAgICAgcm9vbVNsdWc/OiBzdHJpbmc7XHJcbiAgICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcm9vbVNsdWcgfHwgIWNvbnRlbnQ/LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJyb29tU2x1ZyBhbmQgY29udGVudCBhcmUgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBjdXJyZW50IHN0dWRlbnQgZnJvbSBKV1QgY29va2llXHJcbiAgICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcclxuICAgIGNvbnN0IHRva2VuID0gY29va2llU3RvcmUuZ2V0KENPT0tJRV9OQU1FKT8udmFsdWU7XHJcbiAgICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5BVVRIX0pXVF9TRUNSRVQ7XHJcblxyXG4gICAgaWYgKCF0b2tlbiB8fCAhc2VjcmV0KSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGF5bG9hZDogSnd0UGF5bG9hZDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHBheWxvYWQgPSBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQpIGFzIEp3dFBheWxvYWQ7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiSW52YWxpZCBzZXNzaW9uXCIgfSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb29tID0gYXdhaXQgcHJpc21hLmNoYXRSb29tLmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBzbHVnOiByb29tU2x1ZyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXJvb20pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiUm9vbSBub3QgZm91bmRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBwcmlzbWEuY2hhdE1lc3NhZ2UuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHJvb21JZDogcm9vbS5pZCxcclxuICAgICAgICBzdHVkZW50SWQ6IHBheWxvYWQuaWQsXHJcbiAgICAgICAgY29udGVudDogY29udGVudC50cmltKClcclxuICAgICAgfSxcclxuICAgICAgaW5jbHVkZTogeyBzdHVkZW50OiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBheWxvYWRGb3JDbGllbnRzID0ge1xyXG4gICAgICBpZDogbWVzc2FnZS5pZCxcclxuICAgICAgY29udGVudDogbWVzc2FnZS5jb250ZW50LFxyXG4gICAgICBjcmVhdGVkQXQ6IG1lc3NhZ2UuY3JlYXRlZEF0LFxyXG4gICAgICByb29tU2x1ZyxcclxuICAgICAgc3R1ZGVudDoge1xyXG4gICAgICAgIGlkOiBtZXNzYWdlLnN0dWRlbnQuaWQsXHJcbiAgICAgICAgZnVsbE5hbWU6IG1lc3NhZ2Uuc3R1ZGVudC5mdWxsTmFtZSxcclxuICAgICAgICBhdmF0YXJVcmw6IG1lc3NhZ2Uuc3R1ZGVudC5hdmF0YXJVcmwgPz8gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIPCflLQgVHJpZ2dlciBQdXNoZXIgZXZlbnQgdG8gdXBkYXRlIGFsbCBzdWJzY3JpYmVkIGNsaWVudHNcclxuICAgIGNvbnN0IGNoYW5uZWwgPSBgY2hhdC1yb29tLSR7cm9vbVNsdWd9YDtcclxuICAgIGF3YWl0IHB1c2hlclNlcnZlci50cmlnZ2VyKGNoYW5uZWwsIFwibWVzc2FnZTpuZXdcIiwgcGF5bG9hZEZvckNsaWVudHMpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IHBheWxvYWRGb3JDbGllbnRzIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiUE9TVCAvYXBpL2NoYXQvbWVzc2FnZXMgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBlcnJvcjogXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIgfSxcclxuICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiY29va2llcyIsImp3dCIsInB1c2hlclNlcnZlciIsIkNPT0tJRV9OQU1FIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicm9vbVNsdWciLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJyb29tIiwiY2hhdFJvb20iLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzbHVnIiwibWVzc2FnZXMiLCJjaGF0TWVzc2FnZSIsImZpbmRNYW55Iiwicm9vbUlkIiwiaWQiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwidGFrZSIsImluY2x1ZGUiLCJzdHVkZW50IiwiY29uc29sZSIsIlBPU1QiLCJib2R5IiwiY29udGVudCIsInRyaW0iLCJjb29raWVTdG9yZSIsInRva2VuIiwidmFsdWUiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9KV1RfU0VDUkVUIiwicGF5bG9hZCIsInZlcmlmeSIsIm1lc3NhZ2UiLCJjcmVhdGUiLCJkYXRhIiwic3R1ZGVudElkIiwicGF5bG9hZEZvckNsaWVudHMiLCJmdWxsTmFtZSIsImF2YXRhclVybCIsImNoYW5uZWwiLCJ0cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"error\",\n        \"warn\"\n    ]\n});\n// Avoid multiple instances in dev with Next.js hot reload\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnQkFBZ0I7QUFDOEI7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUlqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO1FBQVM7S0FBTztBQUN4QixHQUFHO0FBRUwsMERBQTBEO0FBQzFELElBQUlDLElBQXFDLEVBQUU7SUFDekNKLGdCQUFnQkUsTUFBTSxHQUFHQTtBQUMzQjtBQUVBLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQvLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3ByaXNtYS50c1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgcHJpc21hPzogUHJpc21hQ2xpZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xyXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgbG9nOiBbXCJlcnJvclwiLCBcIndhcm5cIl0sIC8vIGtlZXAgbG9ncyBtaW5pbWFsIGJ1dCB1c2VmdWxcclxuICB9KTtcclxuXHJcbi8vIEF2b2lkIG11bHRpcGxlIGluc3RhbmNlcyBpbiBkZXYgd2l0aCBOZXh0LmpzIGhvdCByZWxvYWRcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/pusher.ts":
/*!***********************!*\
  !*** ./lib/pusher.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPusherClient: () => (/* binding */ createPusherClient),\n/* harmony export */   pusherServer: () => (/* binding */ pusherServer)\n/* harmony export */ });\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher */ \"(rsc)/./node_modules/pusher/lib/pusher.js\");\n/* harmony import */ var pusher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ \"(rsc)/./node_modules/pusher-js/dist/node/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);\n// lib/pusher.ts\n\n\nconst appId = process.env.PUSHER_APP_ID;\nconst key = process.env.PUSHER_KEY;\nconst secret = process.env.PUSHER_SECRET;\nconst cluster = process.env.PUSHER_CLUSTER;\nif (!appId || !key || !secret || !cluster) {\n    console.warn(\"[PUSHER] Missing env vars. Realtime chat will not work until set.\");\n}\nconst pusherServer = new (pusher__WEBPACK_IMPORTED_MODULE_0___default())({\n    appId,\n    key,\n    secret,\n    cluster,\n    useTLS: true\n});\n// Client factory for Next.js client components\nfunction createPusherClient() {\n    if (true) return null;\n    const clientKey = \"your-key\";\n    const clientCluster = \"your-cluster\";\n    return new (pusher_js__WEBPACK_IMPORTED_MODULE_1___default())(clientKey, {\n        cluster: clientCluster,\n        forceTLS: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHVzaGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUNrQjtBQUNHO0FBRXJDLE1BQU1FLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtBQUN2QyxNQUFNQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7QUFDbEMsTUFBTUMsU0FBU0wsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO0FBQ3hDLE1BQU1DLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sY0FBYztBQUUxQyxJQUFJLENBQUNULFNBQVMsQ0FBQ0ksT0FBTyxDQUFDRSxVQUFVLENBQUNFLFNBQVM7SUFDekNFLFFBQVFDLElBQUksQ0FBQztBQUNmO0FBRU8sTUFBTUMsZUFBZSxJQUFJZCwrQ0FBWUEsQ0FBQztJQUMzQ0U7SUFDQUk7SUFDQUU7SUFDQUU7SUFDQUssUUFBUTtBQUNWLEdBQUc7QUFFSCwrQ0FBK0M7QUFDeEMsU0FBU0M7SUFDZCxJQUFJLElBQTZCLEVBQUUsT0FBTztJQUUxQyxNQUFNQyxZQUFZZCxVQUFrQztJQUNwRCxNQUFNZ0IsZ0JBQWdCaEIsY0FBc0M7SUFFNUQsT0FBTyxJQUFJRixrREFBWUEsQ0FBQ2dCLFdBQVc7UUFDakNQLFNBQVNTO1FBQ1RFLFVBQVU7SUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQvLi9saWIvcHVzaGVyLnRzPzkwMzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3B1c2hlci50c1xyXG5pbXBvcnQgUHVzaGVyU2VydmVyIGZyb20gXCJwdXNoZXJcIjtcclxuaW1wb3J0IFB1c2hlckNsaWVudCBmcm9tIFwicHVzaGVyLWpzXCI7XHJcblxyXG5jb25zdCBhcHBJZCA9IHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfSUQhO1xyXG5jb25zdCBrZXkgPSBwcm9jZXNzLmVudi5QVVNIRVJfS0VZITtcclxuY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuUFVTSEVSX1NFQ1JFVCE7XHJcbmNvbnN0IGNsdXN0ZXIgPSBwcm9jZXNzLmVudi5QVVNIRVJfQ0xVU1RFUiE7XHJcblxyXG5pZiAoIWFwcElkIHx8ICFrZXkgfHwgIXNlY3JldCB8fCAhY2x1c3Rlcikge1xyXG4gIGNvbnNvbGUud2FybihcIltQVVNIRVJdIE1pc3NpbmcgZW52IHZhcnMuIFJlYWx0aW1lIGNoYXQgd2lsbCBub3Qgd29yayB1bnRpbCBzZXQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaGVyU2VydmVyID0gbmV3IFB1c2hlclNlcnZlcih7XHJcbiAgYXBwSWQsXHJcbiAga2V5LFxyXG4gIHNlY3JldCxcclxuICBjbHVzdGVyLFxyXG4gIHVzZVRMUzogdHJ1ZVxyXG59KTtcclxuXHJcbi8vIENsaWVudCBmYWN0b3J5IGZvciBOZXh0LmpzIGNsaWVudCBjb21wb25lbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQdXNoZXJDbGllbnQoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xyXG5cclxuICBjb25zdCBjbGllbnRLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QVVNIRVJfS0VZITtcclxuICBjb25zdCBjbGllbnRDbHVzdGVyID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFVTSEVSX0NMVVNURVIhO1xyXG5cclxuICByZXR1cm4gbmV3IFB1c2hlckNsaWVudChjbGllbnRLZXksIHtcclxuICAgIGNsdXN0ZXI6IGNsaWVudENsdXN0ZXIsXHJcbiAgICBmb3JjZVRMUzogdHJ1ZVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQdXNoZXJTZXJ2ZXIiLCJQdXNoZXJDbGllbnQiLCJhcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJQVVNIRVJfQVBQX0lEIiwia2V5IiwiUFVTSEVSX0tFWSIsInNlY3JldCIsIlBVU0hFUl9TRUNSRVQiLCJjbHVzdGVyIiwiUFVTSEVSX0NMVVNURVIiLCJjb25zb2xlIiwid2FybiIsInB1c2hlclNlcnZlciIsInVzZVRMUyIsImNyZWF0ZVB1c2hlckNsaWVudCIsImNsaWVudEtleSIsIk5FWFRfUFVCTElDX1BVU0hFUl9LRVkiLCJjbGllbnRDbHVzdGVyIiwiTkVYVF9QVUJMSUNfUFVTSEVSX0NMVVNURVIiLCJmb3JjZVRMUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/pusher.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/pusher-js","vendor-chunks/tr46","vendor-chunks/tweetnacl","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/pusher","vendor-chunks/event-target-shim","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/tweetnacl-util","vendor-chunks/is-base64"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Fmessages%2Froute&page=%2Fapi%2Fchat%2Fmessages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fmessages%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();