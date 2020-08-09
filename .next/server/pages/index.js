module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/andredealbuquerque/Projects/personal-website/build-cv/src/components/Form.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst Form = ({\n  experience,\n  updateExperiences,\n  updateAll\n}) => {\n  const {\n    0: form,\n    1: setForm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    company: null,\n    name: experience.name,\n    description: experience.description\n  });\n  const {\n    0: isCompany,\n    1: setIsCompany\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: isPersonal,\n    1: setIsPersonal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: message,\n    1: setMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  function handleTextChange(e) {\n    const {\n      name,\n      value\n    } = e.target;\n    setForm(_objectSpread(_objectSpread({}, form), {}, {\n      [name]: value\n    }));\n    updateAll(e, experience);\n  }\n\n  function inputChange(e) {\n    const {\n      name,\n      checked\n    } = e.target;\n    console.log(\"{name, checked}:\", name, checked);\n\n    if (name === \"isCompany\") {\n      return setIsCompany(checked);\n    }\n\n    setIsPersonal(checked);\n  }\n\n  function messageToShow(msg) {\n    setMessage(msg);\n    setTimeout(() => {\n      setMessage(\"\");\n    }, 2000);\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n\n    if (!isPersonal && !isCompany) {\n      return messageToShow(\"Company or personal needs to be toggled need to choose either \");\n    }\n\n    updateExperiences(_objectSpread(_objectSpread({}, form), {}, {\n      id: experience.id\n    }));\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \"Name of project\"), __jsx(\"input\", {\n    value: form.name,\n    name: \"name\",\n    onChange: handleTextChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    name: \"description\",\n    value: form.description,\n    onChange: handleTextChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, \"Company?\"), __jsx(\"input\", {\n    type: \"checkbox\",\n    name: \"isCompany\",\n    value: isCompany,\n    onChange: inputChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"Personal?\"), __jsx(\"input\", {\n    type: \"checkbox\",\n    name: \"isPersonal\",\n    value: isPersonal,\n    onChange: inputChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, \"Submit\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzPzM3N2YiXSwibmFtZXMiOlsiRm9ybSIsImV4cGVyaWVuY2UiLCJ1cGRhdGVFeHBlcmllbmNlcyIsInVwZGF0ZUFsbCIsImZvcm0iLCJzZXRGb3JtIiwidXNlU3RhdGUiLCJjb21wYW55IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXNDb21wYW55Iiwic2V0SXNDb21wYW55IiwiaXNQZXJzb25hbCIsInNldElzUGVyc29uYWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJpbnB1dENoYW5nZSIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZVRvU2hvdyIsIm1zZyIsInNldFRpbWVvdXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxZQUFGO0FBQWNDLG1CQUFkO0FBQWlDQztBQUFqQyxDQUFELEtBQWtEO0FBQzdELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQztBQUMvQkMsV0FBTyxFQUFFLElBRHNCO0FBRS9CQyxRQUFJLEVBQUVQLFVBQVUsQ0FBQ08sSUFGYztBQUcvQkMsZUFBVyxFQUFFUixVQUFVLENBQUNRO0FBSE8sR0FBRCxDQUFoQztBQU1BLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkwsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCUCxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JULHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFFQSxXQUFTVSxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0IsVUFBTTtBQUFFVCxVQUFGO0FBQVFVO0FBQVIsUUFBa0JELENBQUMsQ0FBQ0UsTUFBMUI7QUFDQWQsV0FBTyxpQ0FBTUQsSUFBTjtBQUFZLE9BQUNJLElBQUQsR0FBUVU7QUFBcEIsT0FBUDtBQUNBZixhQUFTLENBQUNjLENBQUQsRUFBSWhCLFVBQUosQ0FBVDtBQUNEOztBQUVELFdBQVNtQixXQUFULENBQXFCSCxDQUFyQixFQUF3QjtBQUN0QixVQUFNO0FBQUVULFVBQUY7QUFBUWE7QUFBUixRQUFvQkosQ0FBQyxDQUFDRSxNQUE1QjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ2YsSUFBaEMsRUFBc0NhLE9BQXRDOztBQUNBLFFBQUliLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQ3hCLGFBQU9HLFlBQVksQ0FBQ1UsT0FBRCxDQUFuQjtBQUNEOztBQUNEUixpQkFBYSxDQUFDUSxPQUFELENBQWI7QUFDRDs7QUFFRCxXQUFTRyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQlYsY0FBVSxDQUFDVSxHQUFELENBQVY7QUFDQUMsY0FBVSxDQUFDLE1BQU07QUFDZlgsZ0JBQVUsQ0FBQyxFQUFELENBQVY7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBRUQsV0FBU1ksWUFBVCxDQUFzQlYsQ0FBdEIsRUFBeUI7QUFDdkJBLEtBQUMsQ0FBQ1csY0FBRjs7QUFDQSxRQUFJLENBQUNoQixVQUFELElBQWUsQ0FBQ0YsU0FBcEIsRUFBK0I7QUFDN0IsYUFBT2MsYUFBYSxDQUNsQixnRUFEa0IsQ0FBcEI7QUFHRDs7QUFFRHRCLHFCQUFpQixpQ0FBTUUsSUFBTjtBQUFZeUIsUUFBRSxFQUFFNUIsVUFBVSxDQUFDNEI7QUFBM0IsT0FBakI7QUFDRDs7QUFFRCxTQUNFO0FBQU0sWUFBUSxFQUFFRixZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQU8sU0FBSyxFQUFFdkIsSUFBSSxDQUFDSSxJQUFuQjtBQUF5QixRQUFJLEVBQUMsTUFBOUI7QUFBcUMsWUFBUSxFQUFFUSxnQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFNBQUssRUFBRVosSUFBSSxDQUFDSyxXQUZkO0FBR0UsWUFBUSxFQUFFTyxnQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBRU4sU0FIVDtBQUlFLFlBQVEsRUFBRVUsV0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FSRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFJLEVBQUMsWUFGUDtBQUdFLFNBQUssRUFBRVIsVUFIVDtBQUlFLFlBQVEsRUFBRVEsV0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FqQkYsRUEwQkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGLENBREY7QUE4QkQsQ0ExRUQ7O0FBNEVlcEIsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZvcm0gPSAoeyBleHBlcmllbmNlLCB1cGRhdGVFeHBlcmllbmNlcywgdXBkYXRlQWxsIH0pID0+IHtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGNvbXBhbnk6IG51bGwsXG4gICAgbmFtZTogZXhwZXJpZW5jZS5uYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBleHBlcmllbmNlLmRlc2NyaXB0aW9uLFxuICB9KTtcblxuICBjb25zdCBbaXNDb21wYW55LCBzZXRJc0NvbXBhbnldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNQZXJzb25hbCwgc2V0SXNQZXJzb25hbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVRleHRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIHVwZGF0ZUFsbChlLCBleHBlcmllbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IG5hbWUsIGNoZWNrZWQgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKFwie25hbWUsIGNoZWNrZWR9OlwiLCBuYW1lLCBjaGVja2VkKTtcbiAgICBpZiAobmFtZSA9PT0gXCJpc0NvbXBhbnlcIikge1xuICAgICAgcmV0dXJuIHNldElzQ29tcGFueShjaGVja2VkKTtcbiAgICB9XG4gICAgc2V0SXNQZXJzb25hbChjaGVja2VkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lc3NhZ2VUb1Nob3cobXNnKSB7XG4gICAgc2V0TWVzc2FnZShtc2cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghaXNQZXJzb25hbCAmJiAhaXNDb21wYW55KSB7XG4gICAgICByZXR1cm4gbWVzc2FnZVRvU2hvdyhcbiAgICAgICAgXCJDb21wYW55IG9yIHBlcnNvbmFsIG5lZWRzIHRvIGJlIHRvZ2dsZWQgbmVlZCB0byBjaG9vc2UgZWl0aGVyIFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZUV4cGVyaWVuY2VzKHsgLi4uZm9ybSwgaWQ6IGV4cGVyaWVuY2UuaWQgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsPk5hbWUgb2YgcHJvamVjdDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdmFsdWU9e2Zvcm0ubmFtZX0gbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX0gLz5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICB2YWx1ZT17Zm9ybS5kZXNjcmlwdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRleHRDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPkNvbXBhbnk/PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPVwiaXNDb21wYW55XCJcbiAgICAgICAgICB2YWx1ZT17aXNDb21wYW55fVxuICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlBlcnNvbmFsPzwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT1cImlzUGVyc29uYWxcIlxuICAgICAgICAgIHZhbHVlPXtpc1BlcnNvbmFsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Form.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/prismaClient */ \"./src/utils/prismaClient.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Form */ \"./src/components/Form.js\");\nvar _jsxFileName = \"/Users/andredealbuquerque/Projects/personal-website/build-cv/src/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // import { startingForm } from \"../utils/startingForm\";\n\n\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({\n  baseURL: \"http://localhost:3000/api\"\n});\nconst DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/PdfView */ \"./src/components/PdfView.jsx\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/PdfView */ \"./src/components/PdfView.jsx\")],\n    modules: [\"../components/PdfView\"]\n  }\n});\nconst App = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"pages__App\",\n  componentId: \"sc-1kdlu6i-0\"\n})([\".pdf{display:flex;justify-content:space-between;}iframe{width:50vw;height:100vh;}\"]);\n\nconst Index = props => {\n  console.log(\"props:\", props);\n  const {\n    0: experiences,\n    1: setExperiences\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.experiences);\n  console.log(\"experiences:\", experiences);\n\n  function edit() {}\n\n  function updateExperiences(newExperience) {\n    console.log(\"newExperience:\", newExperience);\n    setExperiences(experiences.map(el => el.id === newExperience.id ? _objectSpread({}, newExperience) : _objectSpread({}, el)));\n  }\n\n  async function handleSubmit(e) {//  e.preventDefault();\n    //  try {\n    //    const newForm = Object.entries(form).reduce((acc, val) => {\n    //      if (!val[1]) {\n    //        return acc;\n    //      }\n    //      return { ...acc, [val[0]]: val[1] };\n    //    }, {});\n    //    const { data } = await axios.post(\"create\", newForm);\n    //    console.log(\"data:\", data);\n    //  } catch (error) {\n    //    console.log(\"error:\", error);\n    //  }\n  }\n\n  function addMoreExperience() {\n    setExperiences([...experiences, _utils__WEBPACK_IMPORTED_MODULE_5__[\"startingForm\"]]);\n  }\n\n  return __jsx(App, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, \"Hello\"), __jsx(\"div\", {\n    className: \"pdf\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }, experiences.map(el => __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    key: el.id,\n    experience: el,\n    updateExperiences: updateExperiences,\n    updateAll: (e, xp) => {\n      const {\n        name,\n        value\n      } = e.target;\n      setExperiences(experiences.map(x => x.id === xp.id ? _objectSpread(_objectSpread({}, xp), {}, {\n        [name]: value\n      }) : x));\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  })), __jsx(\"button\", {\n    onClick: addMoreExperience,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, \"Add New Experience\"), __jsx(DynamicComponentWithNoSSR, {\n    experiences: experiences,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nasync function getStaticProps() {\n  const experiences = await _utils_prismaClient__WEBPACK_IMPORTED_MODULE_4__[\"prisma\"].experience.findMany({});\n  return {\n    props: {\n      experiences\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJheGlvcyIsImJhc2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiIsImR5bmFtaWMiLCJzc3IiLCJBcHAiLCJzdHlsZWQiLCJkaXYiLCJJbmRleCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImV4cGVyaWVuY2VzIiwic2V0RXhwZXJpZW5jZXMiLCJ1c2VTdGF0ZSIsImVkaXQiLCJ1cGRhdGVFeHBlcmllbmNlcyIsIm5ld0V4cGVyaWVuY2UiLCJtYXAiLCJlbCIsImlkIiwiaGFuZGxlU3VibWl0IiwiZSIsImFkZE1vcmVFeHBlcmllbmNlIiwic3RhcnRpbmdGb3JtIiwieHAiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ4IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWEiLCJleHBlcmllbmNlIiwiZmluZE1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQSxNQUFNQSxLQUFLLEdBQUdDLDRDQUFJLENBQUNDLE1BQUwsQ0FBWTtBQUN4QkMsU0FBTyxFQUFFO0FBRGUsQ0FBWixDQUFkO0FBSUEsTUFBTUMseUJBQXlCLEdBQUdDLG1EQUFPLENBQ3ZDLE1BQU0sMElBRGlDLEVBRXZDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQSx3Q0FEYSwyREFDYjtBQUFBLGNBRGEsdUJBQ2I7QUFBQTtBQUFBLENBRnVDLENBQXpDO0FBS0EsTUFBTUMsR0FBRyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlGQUFUOztBQVdBLE1BQU1DLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCRixLQUF0QjtBQUVBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQ0wsS0FBSyxDQUFDRyxXQUFQLENBQTlDO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJDLFdBQTVCOztBQUVBLFdBQVNHLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsV0FBU0MsaUJBQVQsQ0FBMkJDLGFBQTNCLEVBQTBDO0FBQ3hDUCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4Qk0sYUFBOUI7QUFDQUosa0JBQWMsQ0FDWkQsV0FBVyxDQUFDTSxHQUFaLENBQWlCQyxFQUFELElBQ2RBLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVSCxhQUFhLENBQUNHLEVBQXhCLHFCQUFrQ0gsYUFBbEMsc0JBQXlERSxFQUF6RCxDQURGLENBRFksQ0FBZDtBQUtEOztBQUVELGlCQUFlRSxZQUFmLENBQTRCQyxDQUE1QixFQUErQixDQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFdBQVNDLGlCQUFULEdBQTZCO0FBQzNCVixrQkFBYyxDQUFDLENBQUMsR0FBR0QsV0FBSixFQUFpQlksbURBQWpCLENBQUQsQ0FBZDtBQUNEOztBQUNELFNBQ0UsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osV0FBVyxDQUFDTSxHQUFaLENBQWlCQyxFQUFELElBQ2YsTUFBQyx3REFBRDtBQUNFLE9BQUcsRUFBRUEsRUFBRSxDQUFDQyxFQURWO0FBRUUsY0FBVSxFQUFFRCxFQUZkO0FBR0UscUJBQWlCLEVBQUVILGlCQUhyQjtBQUlFLGFBQVMsRUFBRSxDQUFDTSxDQUFELEVBQUlHLEVBQUosS0FBVztBQUNwQixZQUFNO0FBQUVDLFlBQUY7QUFBUUM7QUFBUixVQUFrQkwsQ0FBQyxDQUFDTSxNQUExQjtBQUNBZixvQkFBYyxDQUNaRCxXQUFXLENBQUNNLEdBQVosQ0FBaUJXLENBQUQsSUFDZEEsQ0FBQyxDQUFDVCxFQUFGLEtBQVNLLEVBQUUsQ0FBQ0wsRUFBWixtQ0FBc0JLLEVBQXRCO0FBQTBCLFNBQUNDLElBQUQsR0FBUUM7QUFBbEMsV0FBNENFLENBRDlDLENBRFksQ0FBZDtBQUtELEtBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREgsRUFnQkU7QUFBUSxXQUFPLEVBQUVOLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhCRixFQWlCRSxNQUFDLHlCQUFEO0FBQTJCLGVBQVcsRUFBRVgsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQUZGLENBREY7QUF3QkQsQ0E1REQ7O0FBOERlSixvRUFBZjtBQUVPLGVBQWVzQixjQUFmLEdBQWdDO0FBQ3JDLFFBQU1sQixXQUFXLEdBQUcsTUFBTW1CLDBEQUFNLENBQUNDLFVBQVAsQ0FBa0JDLFFBQWxCLENBQTJCLEVBQTNCLENBQTFCO0FBRUEsU0FBTztBQUFFeEIsU0FBSyxFQUFFO0FBQUVHO0FBQUY7QUFBVCxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYmFzZSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi91dGlscy9wcmlzbWFDbGllbnRcIjtcbi8vIGltcG9ydCB7IHN0YXJ0aW5nRm9ybSB9IGZyb20gXCIuLi91dGlscy9zdGFydGluZ0Zvcm1cIjtcbmltcG9ydCB7IHN0YXJ0aW5nRm9ybSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVwiO1xuXG5jb25zdCBheGlvcyA9IGJhc2UuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCIsXG59KTtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUiA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvUGRmVmlld1wiKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5cbmNvbnN0IEFwcCA9IHN0eWxlZC5kaXZgXG4gIC5wZGYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIGlmcmFtZSB7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuYDtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2coXCJwcm9wczpcIiwgcHJvcHMpO1xuXG4gIGNvbnN0IFtleHBlcmllbmNlcywgc2V0RXhwZXJpZW5jZXNdID0gdXNlU3RhdGUocHJvcHMuZXhwZXJpZW5jZXMpO1xuICBjb25zb2xlLmxvZyhcImV4cGVyaWVuY2VzOlwiLCBleHBlcmllbmNlcyk7XG5cbiAgZnVuY3Rpb24gZWRpdCgpIHt9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwZXJpZW5jZXMobmV3RXhwZXJpZW5jZSkge1xuICAgIGNvbnNvbGUubG9nKFwibmV3RXhwZXJpZW5jZTpcIiwgbmV3RXhwZXJpZW5jZSk7XG4gICAgc2V0RXhwZXJpZW5jZXMoXG4gICAgICBleHBlcmllbmNlcy5tYXAoKGVsKSA9PlxuICAgICAgICBlbC5pZCA9PT0gbmV3RXhwZXJpZW5jZS5pZCA/IHsgLi4ubmV3RXhwZXJpZW5jZSB9IDogeyAuLi5lbCB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgLy8gIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgdHJ5IHtcbiAgICAvLyAgICBjb25zdCBuZXdGb3JtID0gT2JqZWN0LmVudHJpZXMoZm9ybSkucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIC8vICAgICAgaWYgKCF2YWxbMV0pIHtcbiAgICAvLyAgICAgICAgcmV0dXJuIGFjYztcbiAgICAvLyAgICAgIH1cbiAgICAvLyAgICAgIHJldHVybiB7IC4uLmFjYywgW3ZhbFswXV06IHZhbFsxXSB9O1xuICAgIC8vICAgIH0sIHt9KTtcbiAgICAvLyAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJjcmVhdGVcIiwgbmV3Rm9ybSk7XG4gICAgLy8gICAgY29uc29sZS5sb2coXCJkYXRhOlwiLCBkYXRhKTtcbiAgICAvLyAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnJvcik7XG4gICAgLy8gIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE1vcmVFeHBlcmllbmNlKCkge1xuICAgIHNldEV4cGVyaWVuY2VzKFsuLi5leHBlcmllbmNlcywgc3RhcnRpbmdGb3JtXSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8QXBwPlxuICAgICAgPGgxPkhlbGxvPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGRmXCI+XG4gICAgICAgIHtleHBlcmllbmNlcy5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGtleT17ZWwuaWR9XG4gICAgICAgICAgICBleHBlcmllbmNlPXtlbH1cbiAgICAgICAgICAgIHVwZGF0ZUV4cGVyaWVuY2VzPXt1cGRhdGVFeHBlcmllbmNlc31cbiAgICAgICAgICAgIHVwZGF0ZUFsbD17KGUsIHhwKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICBzZXRFeHBlcmllbmNlcyhcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlcy5tYXAoKHgpID0+XG4gICAgICAgICAgICAgICAgICB4LmlkID09PSB4cC5pZCA/IHsgLi4ueHAsIFtuYW1lXTogdmFsdWUgfSA6IHhcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZE1vcmVFeHBlcmllbmNlfT5BZGQgTmV3IEV4cGVyaWVuY2U8L2J1dHRvbj5cbiAgICAgICAgPER5bmFtaWNDb21wb25lbnRXaXRoTm9TU1IgZXhwZXJpZW5jZXM9e2V4cGVyaWVuY2VzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9BcHA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBleHBlcmllbmNlcyA9IGF3YWl0IHByaXNtYS5leHBlcmllbmNlLmZpbmRNYW55KHt9KTtcblxuICByZXR1cm4geyBwcm9wczogeyBleHBlcmllbmNlcyB9IH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: prisma, startingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prismaClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prismaClient */ \"./src/utils/prismaClient.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prisma\", function() { return _prismaClient__WEBPACK_IMPORTED_MODULE_0__[\"prisma\"]; });\n\n/* harmony import */ var _startingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startingForm */ \"./src/utils/startingForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"startingForm\", function() { return _startingForm__WEBPACK_IMPORTED_MODULE_1__[\"startingForm\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanM/ZWQwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vcHJpc21hQ2xpZW50XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3N0YXJ0aW5nRm9ybVwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/index.js\n");

/***/ }),

/***/ "./src/utils/prismaClient.js":
/*!***********************************!*\
  !*** ./src/utils/prismaClient.js ***!
  \***********************************/
/*! exports provided: prisma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prisma\", function() { return prisma; });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcHJpc21hQ2xpZW50LmpzP2YyOTEiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLEVBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvcHJpc21hQ2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5leHBvcnQgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/prismaClient.js\n");

/***/ }),

/***/ "./src/utils/startingForm.js":
/*!***********************************!*\
  !*** ./src/utils/startingForm.js ***!
  \***********************************/
/*! exports provided: startingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startingForm\", function() { return startingForm; });\nconst startingForm = {\n  name: \"\",\n  company: \"\",\n  personal: \"\",\n  from: \"\",\n  to: \"\",\n  description: \"\",\n  website: \"\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3RhcnRpbmdGb3JtLmpzPzk1ZTciXSwibmFtZXMiOlsic3RhcnRpbmdGb3JtIiwibmFtZSIsImNvbXBhbnkiLCJwZXJzb25hbCIsImZyb20iLCJ0byIsImRlc2NyaXB0aW9uIiwid2Vic2l0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsTUFBSSxFQUFFLEVBRG9CO0FBRTFCQyxTQUFPLEVBQUUsRUFGaUI7QUFHMUJDLFVBQVEsRUFBRSxFQUhnQjtBQUkxQkMsTUFBSSxFQUFFLEVBSm9CO0FBSzFCQyxJQUFFLEVBQUUsRUFMc0I7QUFNMUJDLGFBQVcsRUFBRSxFQU5hO0FBTzFCQyxTQUFPLEVBQUU7QUFQaUIsQ0FBckIiLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3RhcnRpbmdGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRm9ybSA9IHtcbiAgbmFtZTogXCJcIixcbiAgY29tcGFueTogXCJcIixcbiAgcGVyc29uYWw6IFwiXCIsXG4gIGZyb206IFwiXCIsXG4gIHRvOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgd2Vic2l0ZTogXCJcIixcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/startingForm.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ }),

/***/ "@react-pdf/renderer":
/*!**************************************!*\
  !*** external "@react-pdf/renderer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@react-pdf/renderer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtcGRmL3JlbmRlcmVyXCI/Mzk2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVhY3QtcGRmL3JlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LXBkZi9yZW5kZXJlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@react-pdf/renderer\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });