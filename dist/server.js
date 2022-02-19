/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app */ "./src/config/app.ts");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_Http_Controllers_socket_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/Http/Controllers/socket.controller */ "./src/app/Http/Controllers/socket.controller.ts");







var App = /** @class */ (function () {
    function App() {
        this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();
        this.configPort();
        this.configureMiddleware();
        this.createServer();
        this.createSocket();
    }
    App.prototype.configPort = function () {
        this.app.set('port', _config_app__WEBPACK_IMPORTED_MODULE_3__["default"].port);
    };
    App.prototype.createSocket = function () {
        new _app_Http_Controllers_socket_controller__WEBPACK_IMPORTED_MODULE_6__["default"](this.server);
    };
    App.prototype.configureMiddleware = function () {
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());
        this.app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());
        this.app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());
    };
    App.prototype.createServer = function () {
        this.server = http__WEBPACK_IMPORTED_MODULE_5__.createServer(this.app);
    };
    return App;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/app/Http/Controllers/socket.controller.ts":
/*!*******************************************************!*\
  !*** ./src/app/Http/Controllers/socket.controller.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);


var SocketController = /** @class */ (function () {
    function SocketController(server) {
        var _this = this;
        this.io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(server, {
            cors: {
                origin: "*",
                credentials: true
            }
        });
        this.generateId();
        this.io.on("connection", function (socket) { return _this._onConnect(socket); });
    }
    SocketController.prototype._onConnect = function (socket) {
        var _this = this;
        socket.on("BTN_1_SWITCH", function (data) {
            _this.io.emit("BTN_1_SWITCH", JSON.stringify(data));
        });
    };
    SocketController.prototype.generateId = function () {
        this.io.engine.generateId = function () {
            return (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
        };
    };
    return SocketController;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketController);


/***/ }),

/***/ "./src/config/app.ts":
/*!***************************!*\
  !*** ./src/config/app.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
(__webpack_require__(/*! dotenv */ "dotenv").config)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    port: process.env.PORT || 3000
});


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/app */ "./src/config/app.ts");
(__webpack_require__(/*! dotenv */ "dotenv").config)();


var app = new _app__WEBPACK_IMPORTED_MODULE_0__["default"]();
console.log('port', _config_app__WEBPACK_IMPORTED_MODULE_1__["default"].port);
app.server.listen(_config_app__WEBPACK_IMPORTED_MODULE_1__["default"].port);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ087QUFDQztBQUNEO0FBQ1Q7QUFDQztBQUMyQztBQUN4RTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBYztBQUMzQztBQUNBO0FBQ0EsWUFBWSwrRUFBZ0I7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQix1REFBZTtBQUNwQyxxQkFBcUIsNkNBQU07QUFDM0IscUJBQXFCLGtEQUFXO0FBQ2hDO0FBQ0E7QUFDQSxzQkFBc0IsOENBQWlCO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JnQjtBQUNDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFEQUFxRCxrQ0FBa0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0NBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQmhDLG9EQUF3QjtBQUN4QixpRUFBZTtBQUNmO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7OztBQ0hGOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsb0RBQXdCO0FBQ0E7QUFDYTtBQUNyQyxjQUFjLDRDQUFHO0FBQ2pCLG9CQUFvQix3REFBYztBQUNsQyxrQkFBa0Isd0RBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NrZXQtaW90Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtaW90Ly4vc3JjL2FwcC9IdHRwL0NvbnRyb2xsZXJzL3NvY2tldC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3NvY2tldC1pb3QvLi9zcmMvY29uZmlnL2FwcC50cyIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L2V4dGVybmFsIGNvbW1vbmpzIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L2V4dGVybmFsIGNvbW1vbmpzIFwiaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L2V4dGVybmFsIGNvbW1vbmpzIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcInV1aWRcIiIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvY2tldC1pb3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NvY2tldC1pb3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb2NrZXQtaW90Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi9jb25maWcvYXBwJztcbmltcG9ydCBoZWxtZXQgZnJvbSBcImhlbG1ldFwiO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IFNvY2tldENvbnRyb2xsZXIgZnJvbSBcIi4vYXBwL0h0dHAvQ29udHJvbGxlcnMvc29ja2V0LmNvbnRyb2xsZXJcIjtcbnZhciBBcHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgdGhpcy5jb25maWdQb3J0KCk7XG4gICAgICAgIHRoaXMuY29uZmlndXJlTWlkZGxld2FyZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNlcnZlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xuICAgIH1cbiAgICBBcHAucHJvdG90eXBlLmNvbmZpZ1BvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLnNldCgncG9ydCcsIGFwcENvbmZpZy5wb3J0KTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUuY3JlYXRlU29ja2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgU29ja2V0Q29udHJvbGxlcih0aGlzLnNlcnZlcik7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNvbmZpZ3VyZU1pZGRsZXdhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShoZWxtZXQoKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB9O1xuICAgIEFwcC5wcm90b3R5cGUuY3JlYXRlU2VydmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKHRoaXMuYXBwKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHA7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgU2VydmVyIH0gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG52YXIgU29ja2V0Q29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRDb250cm9sbGVyKHNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmlvID0gbmV3IFNlcnZlcihzZXJ2ZXIsIHtcbiAgICAgICAgICAgIGNvcnM6IHtcbiAgICAgICAgICAgICAgICBvcmlnaW46IFwiKlwiLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgdGhpcy5pby5vbihcImNvbm5lY3Rpb25cIiwgZnVuY3Rpb24gKHNvY2tldCkgeyByZXR1cm4gX3RoaXMuX29uQ29ubmVjdChzb2NrZXQpOyB9KTtcbiAgICB9XG4gICAgU29ja2V0Q29udHJvbGxlci5wcm90b3R5cGUuX29uQ29ubmVjdCA9IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKFwiQlROXzFfU1dJVENIXCIsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5pby5lbWl0KFwiQlROXzFfU1dJVENIXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTb2NrZXRDb250cm9sbGVyLnByb3RvdHlwZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvLmVuZ2luZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV1aWR2NCgpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2tldENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU29ja2V0Q29udHJvbGxlcjtcbiIsInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vY29uZmlnL2FwcCc7XG52YXIgYXBwID0gbmV3IEFwcCgpO1xuY29uc29sZS5sb2coJ3BvcnQnLCBhcHBDb25maWcucG9ydCk7XG5hcHAuc2VydmVyLmxpc3RlbihhcHBDb25maWcucG9ydCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=