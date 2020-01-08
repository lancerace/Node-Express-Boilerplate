/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webpack.config */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config__WEBPACK_IMPORTED_MODULE_3__);\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\n\n\n\nconst compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config__WEBPACK_IMPORTED_MODULE_3___default.a);\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n      port = process.env.PORT;\nconst resObj = {\n  foo: \"foo\",\n  yo: \"yo\"\n}; //in memory, file save = auto restart node server\n\n/*if (process.env.MODE === \"development\") {\r\n  console.log(\"node in development mode\");\r\n  app.use(\r\n    webpackDevMiddleware(compiler, {\r\n      publicPath: config.output.publicPath\r\n    })\r\n  );\r\n}*/\n//\n\napp.get(\"/\", (req, res) => {\n  res.send(\"hello world\");\n});\napp.get(\"/api\", (req, res) => {\n  res.send(resObj);\n});\napp.listen(port, () => {\n  console.log(`listenig to port ${port}`);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanM/MWQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xyXG5pbXBvcnQgd2VicGFjayBmcm9tIFwid2VicGFja1wiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgd2VicGFja0Rldk1pZGRsZXdhcmUgZnJvbSBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi93ZWJwYWNrLmNvbmZpZ1wiO1xyXG5jb25zdCBjb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcclxuY29uc3QgYXBwID0gZXhwcmVzcygpLFxyXG4gIHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUO1xyXG5jb25zdCByZXNPYmogPSB7IGZvbzogXCJmb29cIiwgeW86IFwieW9cIiB9O1xyXG4vL2luIG1lbW9yeSwgZmlsZSBzYXZlID0gYXV0byByZXN0YXJ0IG5vZGUgc2VydmVyXHJcbi8qaWYgKHByb2Nlc3MuZW52Lk1PREUgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGNvbnNvbGUubG9nKFwibm9kZSBpbiBkZXZlbG9wbWVudCBtb2RlXCIpO1xyXG4gIGFwcC51c2UoXHJcbiAgICB3ZWJwYWNrRGV2TWlkZGxld2FyZShjb21waWxlciwge1xyXG4gICAgICBwdWJsaWNQYXRoOiBjb25maWcub3V0cHV0LnB1YmxpY1BhdGhcclxuICAgIH0pXHJcbiAgKTtcclxufSovXHJcbi8vXHJcbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xyXG4gIHJlcy5zZW5kKFwiaGVsbG8gd29ybGRcIik7XHJcbn0pO1xyXG5cclxuYXBwLmdldChcIi9hcGlcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnNlbmQocmVzT2JqKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgbGlzdGVuaWcgdG8gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server.js\n");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nmodule.exports = {\n  target: \"node\",\n  mode: process.env.MODE,\n  devtool: \"cheap-module-eval-source-map\",\n  entry: {\n    server: \"./server.js\"\n  },\n  output: {\n    path: path.resolve(__dirname, \"dist\"),\n    //tell webpack the directory where it main. output js,index.html to\n    publicPath: \"/\",\n    //the url of output.path shown in browser\n    filename: \"[name].js\",\n    sourceMapFilename: \"[file].map\",\n    hotUpdateChunkFilename: \"[name]-hot.js\"\n  },\n  externals: [nodeExternals()],\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }]\n  },\n  resolve: {\n    modules: [\"node_modules\", \"component\"],\n    extensions: [\".js\", \".jsx\", \".css\"]\n  },\n  plugins: [//new webpack.HotModuleReplacementPlugin(),\n  new HtmlWebPackPlugin({\n    template: \"./index.html\",\n    filename: \"./index.html\",\n    excludeChunks: [\"server\"]\n  })\n  /*, new HtmlWebPackPlugin({\r\n           template: path.resolve(__dirname, \"src/index.html\")\r\n       })*/\n  ],\n  devServer: {\n    // Display only errors to reduce the amount of output.\n    stats: \"errors-only\",\n    // Parse host and port from env to allow customization.\n    //\n    // If you use Docker, Vagrant or Cloud9, set\n    // host: \"0.0.0.0\";\n    //\n    // 0.0.0.0 is available to all network devices\n    // unlike default `localhost`.\n    host: \"localhost\",\n    // Defaults to `localhost`\n    port: 8080,\n    // Defaults to 8080\n    open: true // Open the page in browser\n\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJwYWNrLmNvbmZpZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnBhY2suY29uZmlnLmpzP2JhNjYiXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5jb25zdCB3ZWJwYWNrID0gcmVxdWlyZShcIndlYnBhY2tcIik7XHJcbmNvbnN0IG5vZGVFeHRlcm5hbHMgPSByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKTtcclxuY29uc3QgSHRtbFdlYlBhY2tQbHVnaW4gPSByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdGFyZ2V0OiBcIm5vZGVcIixcclxuICBtb2RlOiBwcm9jZXNzLmVudi5NT0RFLFxyXG4gIGRldnRvb2w6IFwiY2hlYXAtbW9kdWxlLWV2YWwtc291cmNlLW1hcFwiLFxyXG4gIGVudHJ5OiB7XHJcbiAgICBzZXJ2ZXI6IFwiLi9zZXJ2ZXIuanNcIlxyXG4gIH0sXHJcbiAgb3V0cHV0OiB7XHJcbiAgICBwYXRoOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIiksIC8vdGVsbCB3ZWJwYWNrIHRoZSBkaXJlY3Rvcnkgd2hlcmUgaXQgbWFpbi4gb3V0cHV0IGpzLGluZGV4Lmh0bWwgdG9cclxuICAgIHB1YmxpY1BhdGg6IFwiL1wiLCAvL3RoZSB1cmwgb2Ygb3V0cHV0LnBhdGggc2hvd24gaW4gYnJvd3NlclxyXG4gICAgZmlsZW5hbWU6IFwiW25hbWVdLmpzXCIsXHJcbiAgICBzb3VyY2VNYXBGaWxlbmFtZTogXCJbZmlsZV0ubWFwXCIsXHJcbiAgICBob3RVcGRhdGVDaHVua0ZpbGVuYW1lOiBcIltuYW1lXS1ob3QuanNcIlxyXG4gIH0sXHJcbiAgZXh0ZXJuYWxzOiBbbm9kZUV4dGVybmFscygpXSxcclxuICBtb2R1bGU6IHtcclxuICAgIHJ1bGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuanMkLyxcclxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcclxuICAgICAgICB1c2U6IHtcclxuICAgICAgICAgIGxvYWRlcjogXCJiYWJlbC1sb2FkZXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgbW9kdWxlczogW1wibm9kZV9tb2R1bGVzXCIsIFwiY29tcG9uZW50XCJdLFxyXG4gICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzeFwiLCBcIi5jc3NcIl1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIC8vbmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSxcclxuICAgIG5ldyBIdG1sV2ViUGFja1BsdWdpbih7XHJcbiAgICAgIHRlbXBsYXRlOiBcIi4vaW5kZXguaHRtbFwiLFxyXG4gICAgICBmaWxlbmFtZTogXCIuL2luZGV4Lmh0bWxcIixcclxuICAgICAgZXhjbHVkZUNodW5rczogW1wic2VydmVyXCJdXHJcbiAgICB9KVxyXG4gICAgLyosIG5ldyBIdG1sV2ViUGFja1BsdWdpbih7XHJcbiAgICAgICAgICAgICB0ZW1wbGF0ZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXguaHRtbFwiKVxyXG4gICAgICAgICB9KSovXHJcbiAgXSxcclxuICBkZXZTZXJ2ZXI6IHtcclxuICAgIC8vIERpc3BsYXkgb25seSBlcnJvcnMgdG8gcmVkdWNlIHRoZSBhbW91bnQgb2Ygb3V0cHV0LlxyXG4gICAgc3RhdHM6IFwiZXJyb3JzLW9ubHlcIixcclxuXHJcbiAgICAvLyBQYXJzZSBob3N0IGFuZCBwb3J0IGZyb20gZW52IHRvIGFsbG93IGN1c3RvbWl6YXRpb24uXHJcbiAgICAvL1xyXG4gICAgLy8gSWYgeW91IHVzZSBEb2NrZXIsIFZhZ3JhbnQgb3IgQ2xvdWQ5LCBzZXRcclxuICAgIC8vIGhvc3Q6IFwiMC4wLjAuMFwiO1xyXG4gICAgLy9cclxuICAgIC8vIDAuMC4wLjAgaXMgYXZhaWxhYmxlIHRvIGFsbCBuZXR3b3JrIGRldmljZXNcclxuICAgIC8vIHVubGlrZSBkZWZhdWx0IGBsb2NhbGhvc3RgLlxyXG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIiwgLy8gRGVmYXVsdHMgdG8gYGxvY2FsaG9zdGBcclxuICAgIHBvcnQ6IDgwODAsIC8vIERlZmF1bHRzIHRvIDgwODBcclxuICAgIG9wZW46IHRydWUgLy8gT3BlbiB0aGUgcGFnZSBpbiBicm93c2VyXHJcbiAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFGQTtBQVdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQVBBO0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFkQTtBQXpDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./webpack.config.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC13ZWJwYWNrLXBsdWdpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0bWwtd2VicGFjay1wbHVnaW5cIj9jNTc2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///html-webpack-plugin\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2tcIj9jNmE5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///webpack\n");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay1kZXYtbWlkZGxld2FyZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIj85YTJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///webpack-dev-middleware\n");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay1ub2RlLWV4dGVybmFscy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIj9jMWJlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbm9kZS1leHRlcm5hbHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///webpack-node-externals\n");

/***/ })

/******/ });