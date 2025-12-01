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
exports.id = "app/api/chat/rooms/route";
exports.ids = ["app/api/chat/rooms/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Frooms%2Froute&page=%2Fapi%2Fchat%2Frooms%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Frooms%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Frooms%2Froute&page=%2Fapi%2Fchat%2Frooms%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Frooms%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_chat_rooms_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/rooms/route.ts */ \"(rsc)/./app/api/chat/rooms/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/rooms/route\",\n        pathname: \"/api/chat/rooms\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/rooms/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Legacy\\\\Desktop\\\\iit-international-student-dashboard\\\\app\\\\api\\\\chat\\\\rooms\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Legacy_Desktop_iit_international_student_dashboard_app_api_chat_rooms_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/rooms/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm9vbXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNoYXQlMkZyb29tcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoYXQlMkZyb29tcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZWdhY3klNUNEZXNrdG9wJTVDaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0xlZ2FjeSU1Q0Rlc2t0b3AlNUNpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9paXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZC8/MTU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxMZWdhY3lcXFxcRGVza3RvcFxcXFxpaXQtaW50ZXJuYXRpb25hbC1zdHVkZW50LWRhc2hib2FyZFxcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxccm9vbXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm9vbXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0L3Jvb21zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3Jvb21zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcTGVnYWN5XFxcXERlc2t0b3BcXFxcaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmRcXFxcYXBwXFxcXGFwaVxcXFxjaGF0XFxcXHJvb21zXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGF0L3Jvb21zL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Frooms%2Froute&page=%2Fapi%2Fchat%2Frooms%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Frooms%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/chat/rooms/route.ts":
/*!*************************************!*\
  !*** ./app/api/chat/rooms/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst COOKIE_NAME = \"student_session\";\nfunction getStudentId() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(COOKIE_NAME)?.value;\n    const secret = process.env.AUTH_JWT_SECRET;\n    if (!token || !secret) return null;\n    try {\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(token, secret);\n        return payload.id;\n    } catch  {\n        return null;\n    }\n}\nconst DEFAULT_ROOMS = [\n    {\n        slug: \"new-arrivals\",\n        name: \"\\uD83D\\uDEEC New Arrivals \\xb7 Fall 2025\",\n        description: \"Coordinate arrival plans, airport pickups, and first-day questions.\"\n    },\n    {\n        slug: \"housing-roommates\",\n        name: \"\\uD83C\\uDFE0 Housing & Roommates\",\n        description: \"Find roommates and share housing tips around IIT and Chicago.\"\n    },\n    {\n        slug: \"cs-cyber-cohort\",\n        name: \"\\uD83D\\uDCBB CS & Cybersecurity Cohort\",\n        description: \"Connect with peers in CS, Cyber, Data Science, and related programs.\"\n    }\n];\nasync function GET() {\n    try {\n        for (const room of DEFAULT_ROOMS){\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatRoom.upsert({\n                where: {\n                    slug: room.slug\n                },\n                create: room,\n                update: {}\n            });\n        }\n        const rooms = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatRoom.findMany({\n            orderBy: {\n                createdAt: \"asc\"\n            }\n        });\n        const studentId = getStudentId();\n        if (!studentId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                rooms: rooms.map((r)=>({\n                        ...r,\n                        pinned: false,\n                        isLastActive: false\n                    }))\n            });\n        }\n        const pinned = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.studentPinnedRoom.findMany({\n            where: {\n                studentId\n            },\n            include: {\n                room: true\n            }\n        });\n        const student = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.student.findUnique({\n            where: {\n                id: studentId\n            },\n            select: {\n                lastActiveRoomId: true\n            }\n        });\n        const pinnedIds = new Set(pinned.map((p)=>p.roomId));\n        const lastActiveId = student?.lastActiveRoomId ?? null;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rooms: rooms.map((r)=>({\n                    ...r,\n                    pinned: pinnedIds.has(r.id),\n                    isLastActive: r.id === lastActiveId\n                }))\n        });\n    } catch (error) {\n        console.error(\"GET /api/chat/rooms error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to load rooms\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm9vbXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDQztBQUNSO0FBRS9CLE1BQU1JLGNBQWM7QUFJcEIsU0FBU0M7SUFDUCxNQUFNQyxRQUFRSixxREFBT0EsR0FBR0ssR0FBRyxDQUFDSCxjQUFjSTtJQUMxQyxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDMUMsSUFBSSxDQUFDTixTQUFTLENBQUNHLFFBQVEsT0FBTztJQUM5QixJQUFJO1FBQ0YsTUFBTUksVUFBVVYsMERBQVUsQ0FBQ0csT0FBT0c7UUFDbEMsT0FBT0ksUUFBUUUsRUFBRTtJQUNuQixFQUFFLE9BQU07UUFDTixPQUFPO0lBQ1Q7QUFDRjtBQUVBLE1BQU1DLGdCQUFnQjtJQUNwQjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxhQUFhO0lBQ2Y7Q0FDRDtBQUVNLGVBQWVDO0lBQ3BCLElBQUk7UUFDRixLQUFLLE1BQU1DLFFBQVFMLGNBQWU7WUFDaEMsTUFBTWYsK0NBQU1BLENBQUNxQixRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDM0JDLE9BQU87b0JBQUVQLE1BQU1JLEtBQUtKLElBQUk7Z0JBQUM7Z0JBQ3pCUSxRQUFRSjtnQkFDUkssUUFBUSxDQUFDO1lBQ1g7UUFDRjtRQUVBLE1BQU1DLFFBQVEsTUFBTTFCLCtDQUFNQSxDQUFDcUIsUUFBUSxDQUFDTSxRQUFRLENBQUM7WUFDM0NDLFNBQVM7Z0JBQUVDLFdBQVc7WUFBTTtRQUM5QjtRQUVBLE1BQU1DLFlBQVkxQjtRQUNsQixJQUFJLENBQUMwQixXQUFXO1lBQ2QsT0FBTy9CLHFEQUFZQSxDQUFDZ0MsSUFBSSxDQUFDO2dCQUN2QkwsT0FBT0EsTUFBTU0sR0FBRyxDQUFDLENBQUNDLElBQU87d0JBQUUsR0FBR0EsQ0FBQzt3QkFBRUMsUUFBUTt3QkFBT0MsY0FBYztvQkFBTTtZQUN0RTtRQUNGO1FBRUEsTUFBTUQsU0FBUyxNQUFNbEMsK0NBQU1BLENBQUNvQyxpQkFBaUIsQ0FBQ1QsUUFBUSxDQUFDO1lBQ3JESixPQUFPO2dCQUFFTztZQUFVO1lBQ25CTyxTQUFTO2dCQUFFakIsTUFBTTtZQUFLO1FBQ3hCO1FBRUEsTUFBTWtCLFVBQVUsTUFBTXRDLCtDQUFNQSxDQUFDc0MsT0FBTyxDQUFDQyxVQUFVLENBQUM7WUFDOUNoQixPQUFPO2dCQUFFVCxJQUFJZ0I7WUFBVTtZQUN2QlUsUUFBUTtnQkFBRUMsa0JBQWtCO1lBQUs7UUFDbkM7UUFFQSxNQUFNQyxZQUFZLElBQUlDLElBQUlULE9BQU9GLEdBQUcsQ0FBQyxDQUFDWSxJQUFNQSxFQUFFQyxNQUFNO1FBQ3BELE1BQU1DLGVBQWVSLFNBQVNHLG9CQUFvQjtRQUVsRCxPQUFPMUMscURBQVlBLENBQUNnQyxJQUFJLENBQUM7WUFDdkJMLE9BQU9BLE1BQU1NLEdBQUcsQ0FBQyxDQUFDQyxJQUFPO29CQUN2QixHQUFHQSxDQUFDO29CQUNKQyxRQUFRUSxVQUFVSyxHQUFHLENBQUNkLEVBQUVuQixFQUFFO29CQUMxQnFCLGNBQWNGLEVBQUVuQixFQUFFLEtBQUtnQztnQkFDekI7UUFDRjtJQUNGLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxPQUFPakQscURBQVlBLENBQUNnQyxJQUFJLENBQ3RCO1lBQUVpQixPQUFPO1FBQXVCLEdBQ2hDO1lBQUVFLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWl0LWludGVybmF0aW9uYWwtc3R1ZGVudC1kYXNoYm9hcmQvLi9hcHAvYXBpL2NoYXQvcm9vbXMvcm91dGUudHM/M2I3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJzdHVkZW50X3Nlc3Npb25cIjtcclxuXHJcbnR5cGUgSnd0UGF5bG9hZCA9IHsgaWQ6IHN0cmluZyB9O1xyXG5cclxuZnVuY3Rpb24gZ2V0U3R1ZGVudElkKCkge1xyXG4gIGNvbnN0IHRva2VuID0gY29va2llcygpLmdldChDT09LSUVfTkFNRSk/LnZhbHVlO1xyXG4gIGNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkFVVEhfSldUX1NFQ1JFVDtcclxuICBpZiAoIXRva2VuIHx8ICFzZWNyZXQpIHJldHVybiBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYXlsb2FkID0gand0LnZlcmlmeSh0b2tlbiwgc2VjcmV0KSBhcyBKd3RQYXlsb2FkO1xyXG4gICAgcmV0dXJuIHBheWxvYWQuaWQ7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfUk9PTVMgPSBbXHJcbiAge1xyXG4gICAgc2x1ZzogXCJuZXctYXJyaXZhbHNcIixcclxuICAgIG5hbWU6IFwi8J+brCBOZXcgQXJyaXZhbHMgwrcgRmFsbCAyMDI1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDb29yZGluYXRlIGFycml2YWwgcGxhbnMsIGFpcnBvcnQgcGlja3VwcywgYW5kIGZpcnN0LWRheSBxdWVzdGlvbnMuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiaG91c2luZy1yb29tbWF0ZXNcIixcclxuICAgIG5hbWU6IFwi8J+PoCBIb3VzaW5nICYgUm9vbW1hdGVzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHJvb21tYXRlcyBhbmQgc2hhcmUgaG91c2luZyB0aXBzIGFyb3VuZCBJSVQgYW5kIENoaWNhZ28uXCJcclxuICB9LFxyXG4gIHtcclxuICAgIHNsdWc6IFwiY3MtY3liZXItY29ob3J0XCIsXHJcbiAgICBuYW1lOiBcIvCfkrsgQ1MgJiBDeWJlcnNlY3VyaXR5IENvaG9ydFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIHBlZXJzIGluIENTLCBDeWJlciwgRGF0YSBTY2llbmNlLCBhbmQgcmVsYXRlZCBwcm9ncmFtcy5cIlxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGZvciAoY29uc3Qgcm9vbSBvZiBERUZBVUxUX1JPT01TKSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS5jaGF0Um9vbS51cHNlcnQoe1xyXG4gICAgICAgIHdoZXJlOiB7IHNsdWc6IHJvb20uc2x1ZyB9LFxyXG4gICAgICAgIGNyZWF0ZTogcm9vbSxcclxuICAgICAgICB1cGRhdGU6IHt9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvb21zID0gYXdhaXQgcHJpc21hLmNoYXRSb29tLmZpbmRNYW55KHtcclxuICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiYXNjXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3R1ZGVudElkID0gZ2V0U3R1ZGVudElkKCk7XHJcbiAgICBpZiAoIXN0dWRlbnRJZCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgIHJvb21zOiByb29tcy5tYXAoKHIpID0+ICh7IC4uLnIsIHBpbm5lZDogZmFsc2UsIGlzTGFzdEFjdGl2ZTogZmFsc2UgfSkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBpbm5lZCA9IGF3YWl0IHByaXNtYS5zdHVkZW50UGlubmVkUm9vbS5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHN0dWRlbnRJZCB9LFxyXG4gICAgICBpbmNsdWRlOiB7IHJvb206IHRydWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHByaXNtYS5zdHVkZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogc3R1ZGVudElkIH0sXHJcbiAgICAgIHNlbGVjdDogeyBsYXN0QWN0aXZlUm9vbUlkOiB0cnVlIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBpbm5lZElkcyA9IG5ldyBTZXQocGlubmVkLm1hcCgocCkgPT4gcC5yb29tSWQpKTtcclxuICAgIGNvbnN0IGxhc3RBY3RpdmVJZCA9IHN0dWRlbnQ/Lmxhc3RBY3RpdmVSb29tSWQgPz8gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICByb29tczogcm9vbXMubWFwKChyKSA9PiAoe1xyXG4gICAgICAgIC4uLnIsXHJcbiAgICAgICAgcGlubmVkOiBwaW5uZWRJZHMuaGFzKHIuaWQpLFxyXG4gICAgICAgIGlzTGFzdEFjdGl2ZTogci5pZCA9PT0gbGFzdEFjdGl2ZUlkXHJcbiAgICAgIH0pKVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJHRVQgL2FwaS9jaGF0L3Jvb21zIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIGxvYWQgcm9vbXNcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJjb29raWVzIiwiand0IiwiQ09PS0lFX05BTUUiLCJnZXRTdHVkZW50SWQiLCJ0b2tlbiIsImdldCIsInZhbHVlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkFVVEhfSldUX1NFQ1JFVCIsInBheWxvYWQiLCJ2ZXJpZnkiLCJpZCIsIkRFRkFVTFRfUk9PTVMiLCJzbHVnIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiR0VUIiwicm9vbSIsImNoYXRSb29tIiwidXBzZXJ0Iiwid2hlcmUiLCJjcmVhdGUiLCJ1cGRhdGUiLCJyb29tcyIsImZpbmRNYW55Iiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInN0dWRlbnRJZCIsImpzb24iLCJtYXAiLCJyIiwicGlubmVkIiwiaXNMYXN0QWN0aXZlIiwic3R1ZGVudFBpbm5lZFJvb20iLCJpbmNsdWRlIiwic3R1ZGVudCIsImZpbmRVbmlxdWUiLCJzZWxlY3QiLCJsYXN0QWN0aXZlUm9vbUlkIiwicGlubmVkSWRzIiwiU2V0IiwicCIsInJvb21JZCIsImxhc3RBY3RpdmVJZCIsImhhcyIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/rooms/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Frooms%2Froute&page=%2Fapi%2Fchat%2Frooms%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Frooms%2Froute.ts&appDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLegacy%5CDesktop%5Ciit-international-student-dashboard&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();