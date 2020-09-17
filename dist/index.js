module.exports =
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".multi-selector-container {\\n  margin: 25px;\\n}\\n\\n.multi-selector-category-item {\\n  margin: 10px\\n}\\n\\n.multi-selector-subcategory-container {\\n  padding-left: 10px;\\n}\\n\\n.onclick-cursor-pointer {\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./App.css */ \"./node_modules/css-loader/dist/cjs.js!./src/App.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MultiSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MultiSelector */ \"./src/components/MultiSelector.jsx\");\n/* harmony import */ var _components_MultiSelectorInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MultiSelectorInput */ \"./src/components/MultiSelectorInput.jsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar App = function App(_ref) {\n  var _ref$categories = _ref.categories,\n      categories = _ref$categories === void 0 ? [] : _ref$categories,\n      _ref$initialIds = _ref.initialIds,\n      initialIds = _ref$initialIds === void 0 ? [] : _ref$initialIds,\n      _ref$exceptionIds = _ref.exceptionIds,\n      exceptionIds = _ref$exceptionIds === void 0 ? [] : _ref$exceptionIds,\n      _ref$notSelectionIds = _ref.notSelectionIds,\n      notSelectionIds = _ref$notSelectionIds === void 0 ? [] : _ref$notSelectionIds,\n      handleSelectedCategories = _ref.handleSelectedCategories;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MultiSelector__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    categories: categories,\n    initialSelectedIds: initialIds,\n    exceptionIds: exceptionIds,\n    notSelectionIds: notSelectionIds,\n    handleSelectedCategories: handleSelectedCategories\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MultiSelectorInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/components/MultiSelector.jsx":
/*!******************************************!*\
  !*** ./src/components/MultiSelector.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MultiSelectorItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelectorItem */ \"./src/components/MultiSelectorItem.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar MultiSelector = /*#__PURE__*/function (_React$Component) {\n  _inherits(MultiSelector, _React$Component);\n\n  var _super = _createSuper(MultiSelector);\n\n  function MultiSelector(props) {\n    var _this;\n\n    _classCallCheck(this, MultiSelector);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      selectedCategories: []\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getSubSelectedSubCategory\", function (category, selectedCategoryInfo, isSelectedByParent) {\n      if (category.subCategory) {\n        category.subCategory.forEach(function (subCategory) {\n          var isSelected = isSelectedByParent || _this.props.initialSelectedIds.includes(subCategory.id);\n\n          selectedCategoryInfo[subCategory.id] = _defineProperty({}, _MultiSelectorItem__WEBPACK_IMPORTED_MODULE_1__[\"IS_SELECTED_KEY\"], isSelected);\n          return _this.getSubSelectedSubCategory(subCategory, selectedCategoryInfo[subCategory.id], isSelected);\n        });\n      }\n\n      return selectedCategoryInfo;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getSelectedCategoryIdsOnlyParent\", function (categoryList, selectedIdList) {\n      if (categoryList) {\n        Object.keys(categoryList).forEach(function (categoryKey) {\n          if (categoryList[categoryKey].isSelected && !_this.props.notSelectionIds.includes(+categoryKey)) {\n            selectedIdList.push(+categoryKey);\n          } else {\n            return _this.getSelectedCategoryIdsOnlyParent(categoryList[categoryKey], selectedIdList);\n          }\n        });\n      }\n\n      return selectedIdList;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getSelectedCategoryIds\", function (categoryList, selectedIdList) {\n      if (categoryList) {\n        Object.keys(categoryList).forEach(function (categoryKey) {\n          if (categoryList[categoryKey].isSelected && !_this.props.notSelectionIds.includes(+categoryKey)) {\n            selectedIdList.push(+categoryKey);\n          }\n\n          return _this.getSelectedCategoryIds(categoryList[categoryKey], selectedIdList);\n        });\n      }\n\n      return selectedIdList;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChange\", function (categoryList) {\n      var selectedIdListOnlyParent = _this.getSelectedCategoryIdsOnlyParent(categoryList, []);\n\n      var selectedIdList = _this.getSelectedCategoryIds(categoryList, []);\n\n      _this.props.handleSelectedCategories(selectedIdListOnlyParent, selectedIdList);\n\n      _this.setState({\n        selectedCategories: categoryList\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(MultiSelector, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      var _this2 = this;\n\n      var initialSelectedIds = nextProps.initialSelectedIds,\n          categories = nextProps.categories;\n      var selectedCategory = {};\n\n      if (initialSelectedIds.length > 0) {\n        categories.forEach(function (category) {\n          selectedCategory[category.id] = {};\n          var isIncludeSelectedId = initialSelectedIds.includes(category.id);\n\n          var selectedSubCategory = _this2.getSubSelectedSubCategory(category, selectedCategory[category.id], isIncludeSelectedId);\n\n          selectedCategory[category.id] = _objectSpread(_defineProperty({}, _MultiSelectorItem__WEBPACK_IMPORTED_MODULE_1__[\"IS_SELECTED_KEY\"], isIncludeSelectedId), selectedSubCategory);\n        });\n        this.setState({\n          selectedCategories: selectedCategories\n        });\n      }\n\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var selectedCategories = this.state.selectedCategories;\n      var _this$props = this.props,\n          children = _this$props.children,\n          categories = _this$props.categories,\n          exceptionIds = _this$props.exceptionIds,\n          notSelectionIds = _this$props.notSelectionIds;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"multi-selector-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MultiSelectorItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        categories: categories,\n        selectedCategories: selectedCategories,\n        exceptionIds: exceptionIds,\n        notSelectionIds: notSelectionIds,\n        onChange: this.handleChange\n      }, children));\n    }\n  }]);\n\n  return MultiSelector;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(MultiSelector));\n\n//# sourceURL=webpack:///./src/components/MultiSelector.jsx?");

/***/ }),

/***/ "./src/components/MultiSelectorInput.jsx":
/*!***********************************************!*\
  !*** ./src/components/MultiSelectorInput.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar MultiSelectorInput = function MultiSelectorInput(_ref) {\n  var id = _ref.id,\n      content = _ref.content,\n      isCanSelect = _ref.isCanSelect,\n      isSelected = _ref.isSelected,\n      toggleCategory = _ref.toggleCategory;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isCanSelect ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"multi-selector-category-item onclick-cursor-pointer\",\n    onClick: function onClick() {\n      return toggleCategory && toggleCategory(id);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"checkbox\",\n    readOnly: true,\n    checked: isSelected\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null)), content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"multi-selector-category-item\"\n  }, content));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MultiSelectorInput);\n\n//# sourceURL=webpack:///./src/components/MultiSelectorInput.jsx?");

/***/ }),

/***/ "./src/components/MultiSelectorItem.jsx":
/*!**********************************************!*\
  !*** ./src/components/MultiSelectorItem.jsx ***!
  \**********************************************/
/*! exports provided: IS_SELECTED_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_SELECTED_KEY\", function() { return IS_SELECTED_KEY; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar IS_SELECTED_KEY = 'isSelected';\n\nvar MultiSelectorItem = function MultiSelectorItem(_ref) {\n  var children = _ref.children,\n      _ref$categories = _ref.categories,\n      categories = _ref$categories === void 0 ? [] : _ref$categories,\n      _ref$selectedCategori = _ref.selectedCategories,\n      selectedCategories = _ref$selectedCategori === void 0 ? null : _ref$selectedCategori,\n      exceptionIds = _ref.exceptionIds,\n      notSelectionIds = _ref.notSelectionIds,\n      onChange = _ref.onChange;\n\n  var handleSubCategoryListChange = function handleSubCategoryListChange(categoryId, selectedSubCategoryInfo) {\n    var isSelectedCategory = true;\n    categories.some(function (category) {\n      if (category.id === categoryId) {\n        var subCategoryIds = category.subCategory && category.subCategory.map(function (subCategory) {\n          return subCategory.id;\n        }) || [];\n        var selectedSubCategoryIds = Object.keys(selectedSubCategoryInfo);\n        subCategoryIds.some(function (subCategoryId) {\n          if (!selectedSubCategoryIds.includes(String(subCategoryId)) || !!!selectedSubCategoryInfo[subCategoryId].isSelected) {\n            isSelectedCategory = false;\n            return true;\n          }\n\n          return false;\n        });\n        return true;\n      }\n\n      return false;\n    }); // add sub selections to current optionId\n\n    var newSelectedCategories = _objectSpread({}, selectedCategories, _defineProperty({}, categoryId, _objectSpread({}, selectedSubCategoryInfo, _defineProperty({}, IS_SELECTED_KEY, isSelectedCategory)))); // call onChange function given by parent\n\n\n    onChange(newSelectedCategories);\n  };\n\n  var toggleCategory = function toggleCategory(categoryId) {\n    // is currently selected\n    if (isSelected(categoryId)) {\n      // remove selected key from options list\n      var newSelectedCategories = selectedCategories && Object.keys(selectedCategories).reduce(function (acc, key) {\n        if (key !== IS_SELECTED_KEY && +key !== categoryId) {\n          acc[key] = _objectSpread({}, selectedCategories[key]);\n        }\n\n        return acc;\n      }, {});\n      onChange(newSelectedCategories);\n    } else {\n      // is not currently selected\n      var selectedCategory = null;\n      var selectedChildCategory = {};\n      categories.some(function (category) {\n        if (category.id === categoryId) {\n          selectedCategory = _objectSpread({}, category);\n          selectedChildCategory = getChildSelectedCategory(selectedCategory, {});\n          return true;\n        }\n\n        return false;\n      });\n\n      var _newSelectedCategories = _objectSpread({}, selectedCategories, _defineProperty({}, categoryId, _objectSpread({}, selectedChildCategory, _defineProperty({}, IS_SELECTED_KEY, true)))); // call onChange function given by parent\n\n\n      onChange(_newSelectedCategories);\n    }\n  };\n\n  var getChildSelectedCategory = function getChildSelectedCategory(category, selectedObj) {\n    if (category.subCategory) {\n      category.subCategory.forEach(function (subCategory) {\n        selectedObj[subCategory.id] = _defineProperty({}, IS_SELECTED_KEY, true);\n        return getChildSelectedCategory(subCategory, selectedObj[subCategory.id]);\n      });\n    }\n\n    return selectedObj;\n  };\n\n  var isSelected = function isSelected(categoryId) {\n    if (selectedCategories && selectedCategories[categoryId]) {\n      return !!selectedCategories[categoryId].isSelected;\n    }\n\n    return false;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      key: category.id\n    }, !exceptionIds.includes(category.id) && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {\n      toggleCategory: toggleCategory,\n      content: category.title,\n      id: category.id,\n      isCanSelect: !notSelectionIds.includes(category.id),\n      isSelected: isSelected(category.id)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"multi-selector-subcategory-container\"\n    }, category.subCategory && category.subCategory.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiSelectorItem, {\n      categories: category.subCategory,\n      selectedCategories: selectedCategories && selectedCategories[category.id],\n      exceptionIds: exceptionIds,\n      notSelectionIds: notSelectionIds,\n      onChange: function onChange(subCategory) {\n        return handleSubCategoryListChange(category.id, subCategory);\n      }\n    }, children)));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(MultiSelectorItem));\n\n//# sourceURL=webpack:///./src/components/MultiSelectorItem.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });