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
                origin: "*"
            }
        });
        this.generateId();
        this.io.on("connection", function (socket) { return _this._onConnect(socket); });
    }
    SocketController.prototype._onConnect = function (socket) {
        console.log(socket);
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
    port: process.env.PORT || 3003
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
app.server.listen(_config_app__WEBPACK_IMPORTED_MODULE_1__["default"].port);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ087QUFDQztBQUNEO0FBQ1Q7QUFDQztBQUMyQztBQUN4RTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBYztBQUMzQztBQUNBO0FBQ0EsWUFBWSwrRUFBZ0I7QUFDNUI7QUFDQTtBQUNBLHFCQUFxQix1REFBZTtBQUNwQyxxQkFBcUIsNkNBQU07QUFDM0IscUJBQXFCLGtEQUFXO0FBQ2hDO0FBQ0E7QUFDQSxzQkFBc0IsOENBQWlCO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JnQjtBQUNDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxREFBcUQsa0NBQWtDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3Q0FBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCaEMsb0RBQXdCO0FBQ3hCLGlFQUFlO0FBQ2Y7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7O0FDSEY7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxvREFBd0I7QUFDQTtBQUNhO0FBQ3JDLGNBQWMsNENBQUc7QUFDakIsa0JBQWtCLHdEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29ja2V0LWlvdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC8uL3NyYy9hcHAvSHR0cC9Db250cm9sbGVycy9zb2NrZXQuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9zb2NrZXQtaW90Ly4vc3JjL2NvbmZpZy9hcHAudHMiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL3NvY2tldC1pb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcImhlbG1ldFwiIiwid2VicGFjazovL3NvY2tldC1pb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC9leHRlcm5hbCBjb21tb25qcyBcInNvY2tldC5pb1wiIiwid2VicGFjazovL3NvY2tldC1pb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NvY2tldC1pb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NvY2tldC1pb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb2NrZXQtaW90L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29ja2V0LWlvdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSBcImJvZHktcGFyc2VyXCI7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vY29uZmlnL2FwcCc7XG5pbXBvcnQgaGVsbWV0IGZyb20gXCJoZWxtZXRcIjtcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcbmltcG9ydCBTb2NrZXRDb250cm9sbGVyIGZyb20gXCIuL2FwcC9IdHRwL0NvbnRyb2xsZXJzL3NvY2tldC5jb250cm9sbGVyXCI7XG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAgICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgICAgIHRoaXMuY29uZmlnUG9ydCgpO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZU1pZGRsZXdhcmUoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTb2NrZXQoKTtcbiAgICB9XG4gICAgQXBwLnByb3RvdHlwZS5jb25maWdQb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFwcC5zZXQoJ3BvcnQnLCBhcHBDb25maWcucG9ydCk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNyZWF0ZVNvY2tldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3IFNvY2tldENvbnRyb2xsZXIodGhpcy5zZXJ2ZXIpO1xuICAgIH07XG4gICAgQXBwLnByb3RvdHlwZS5jb25maWd1cmVNaWRkbGV3YXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgICAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgICAgICB0aGlzLmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG4gICAgfTtcbiAgICBBcHAucHJvdG90eXBlLmNyZWF0ZVNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcih0aGlzLmFwcCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXBwO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJzb2NrZXQuaW9cIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xudmFyIFNvY2tldENvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU29ja2V0Q29udHJvbGxlcihzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pbyA9IG5ldyBTZXJ2ZXIoc2VydmVyLCB7XG4gICAgICAgICAgICBjb3JzOiB7XG4gICAgICAgICAgICAgICAgb3JpZ2luOiBcIipcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIHRoaXMuaW8ub24oXCJjb25uZWN0aW9uXCIsIGZ1bmN0aW9uIChzb2NrZXQpIHsgcmV0dXJuIF90aGlzLl9vbkNvbm5lY3Qoc29ja2V0KTsgfSk7XG4gICAgfVxuICAgIFNvY2tldENvbnRyb2xsZXIucHJvdG90eXBlLl9vbkNvbm5lY3QgPSBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvY2tldCk7XG4gICAgfTtcbiAgICBTb2NrZXRDb250cm9sbGVyLnByb3RvdHlwZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlvLmVuZ2luZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHV1aWR2NCgpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFNvY2tldENvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgU29ja2V0Q29udHJvbGxlcjtcbiIsInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwM1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJyZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4vY29uZmlnL2FwcCc7XG52YXIgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnNlcnZlci5saXN0ZW4oYXBwQ29uZmlnLnBvcnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9