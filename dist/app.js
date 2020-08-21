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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataSourceProvider_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

new Vue({
  el: '#fliplet-widget-data-source-provider',
  render: function render(createElement) {
    return createElement(_DataSourceProvider_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _DataSourceProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataSourceProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/DataSourceProvider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceProvider_vue_vue_type_template_id_4de52e2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _vm.isLoading
      ? _c("div", { staticClass: "spinner-holder animated" }, [
          _c("div", { staticClass: "spinner-overlay" }, [_vm._v("Loading...")])
        ])
      : _vm.hasError
      ? _c(
          "div",
          { staticClass: "alert alert-danger", attrs: { role: "alert" } },
          [_vm._v("\n    " + _vm._s(_vm.errorMessage) + "\n  ")]
        )
      : _c(
          "div",
          [
            _c("DataSourceSelector", {
              attrs: {
                currentAppDSs: _vm.appDataSorces,
                otherDSs: _vm.allDataSources,
                selectedDataSource: _vm.selectedDataSource,
                changeDataSource: _vm.changeDataSource,
                showAll: _vm.showAll
              },
              on: {
                selectedDataSourceId: function($event) {
                  _vm.selectedDataSourceId = _vm.$emit
                },
                onDataSourceCreate: _vm.createDS,
                onShowAll: function(event) {
                  _vm.showAllDSs(event)
                },
                onDataSourceChange: function($event) {
                  _vm.changeDataSource = !_vm.changeDataSource
                }
              }
            })
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DataSourceSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _services_getDataSources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _services_createDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      appDataSorces: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      isLoading: true,
      hasError: false,
      errorMessage: '',
      widgetData: {},
      selectedDataSourceId: false,
      changeDataSource: false,
      showAll: false
    };
  },
  components: {
    DataSourceSelector: _components_DataSourceSelector__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    showAllDSs: function showAllDSs(isChecked) {
      var _this = this;

      this.isLoading = true;
      this.showAll = isChecked;

      if (isChecked) {
        if (!this.copyOfAllDataSources.length) {
          this.loadDataSources();
          return;
        }

        this.allDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.copyOfAllDataSources);
      } else {
        this.copyOfAllDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.allDataSources);
        this.allDataSources = [];
      } // Give VUE time to reset templates


      setTimeout(function () {
        _this.isLoading = false;
      }, 100);
    },
    loadDataSources: function loadDataSources(appId) {
      var _this2 = this;

      this.isLoading = true;
      Object(_services_getDataSources__WEBPACK_IMPORTED_MODULE_2__["getDataSources"])(appId).then(function (dataSources) {
        if (_this2.widgetData.dataSourceId) {
          _this2.selectedDataSource = dataSources.find(function (dataSource) {
            return dataSource.id === _this2.widgetData.dataSourceId;
          });

          if (!_this2.selectedDataSource) {
            return Object(_services_getDataSources__WEBPACK_IMPORTED_MODULE_2__["getDataSource"])(_this2.widgetData.dataSourceId).then(function (dataSorce) {
              _this2.selectedDataSource = dataSorce;
              dataSources.push(dataSorce);
              return dataSources;
            });
          }
        }

        return dataSources;
      }).then(function (dataSources) {
        if (appId) {
          _this2.appDataSorces = dataSources;
        } else {
          _this2.allDataSources = dataSources;
        }
      })["catch"](function (err) {
        _this2.hasError = true;
        _this2.errorMessage = Fliplet.parseError(err);
      })["finally"](function () {
        _this2.isLoading = false;
        Fliplet.Widget.autosize();
      });
    },
    initProvider: function initProvider() {
      this.widgetData = Fliplet.Widget.getData();
      this.loadDataSources(this.widgetData.appId);
    },
    createDS: function createDS() {
      var _this3 = this;

      this.isLoading = true;
      Object(_services_createDataSource__WEBPACK_IMPORTED_MODULE_3__["createDataSource"])(this.widgetData).then(function (dataSource) {
        if (!dataSource) {
          return;
        }

        _this3.selectedDataSource = dataSource;
      })["catch"](function (err) {
        _this3.hasError = true;
        _this3.errorMessage = Fliplet.parseError(err);
      })["finally"](function () {
        _this3.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    this.initProvider();
  },
  updated: function updated() {
    Fliplet.Widget.autosize();
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(7);

var iterableToArray = __webpack_require__(9);

var unsupportedIterableToArray = __webpack_require__(10);

var nonIterableSpread = __webpack_require__(11);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _DataSourceSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataSourceSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DataSourceSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceSelector_vue_vue_type_template_id_75642f94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _vm.dataSources.length && !_vm.selectedDataSource
      ? _c(
          "div",
          [
            _c("Select2", {
              attrs: {
                dataSources: _vm.dataSources,
                selectedDataSource: _vm.selectedDataSource
              },
              on: { selectDataSource: _vm.setDataSource }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "btn-link create-dataSource",
                on: { click: _vm.showAllDSs }
              },
              [_vm._v("Create new data source")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "checkbox checkbox-icon" }, [
              _c("input", {
                attrs: { type: "checkbox", name: "showAll", id: "showAll" },
                domProps: { checked: _vm.showAll },
                on: { change: _vm.showAllDSs }
              }),
              _vm._v(" "),
              _vm._m(0)
            ])
          ],
          1
        )
      : _vm.dataSources.length &&
        _vm.selectedDataSource &&
        !_vm.changeDataSource
      ? _c("div", [
          _c("p", [
            _vm._v(
              _vm._s(_vm.selectedDataSource.id) +
                ". " +
                _vm._s(_vm.selectedDataSource.name) +
                " "
            ),
            _c(
              "span",
              {
                staticClass: "btn-link change-dataSource",
                on: {
                  click: function() {
                    this$1.$emit("onDataSourceChange")
                  }
                }
              },
              [_vm._v("Change")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "btn btn-default view-ds-btn",
              on: { click: _vm.viewDataSource }
            },
            [_vm._v("View data source")]
          )
        ])
      : _vm.dataSources.length && _vm.selectedDataSource && _vm.changeDataSource
      ? _c(
          "div",
          [
            _c("Select2", {
              attrs: {
                dataSources: _vm.dataSources,
                selectedDataSource: _vm.selectedDataSource
              },
              on: { selectDataSource: _vm.setDataSource }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "btn-link create-dataSource",
                on: {
                  click: function() {
                    this$1.$emit("onDataSourceCreate")
                  }
                }
              },
              [_vm._v("Create new data source")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "checkbox checkbox-icon" }, [
              _c("input", {
                attrs: { type: "checkbox", name: "showAll", id: "showAll" },
                domProps: { checked: _vm.showAll },
                on: { change: _vm.showAllDSs }
              }),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn btn-default view-ds-btn",
                on: { click: _vm.viewDataSource }
              },
              [_vm._v("View data source")]
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "showAll" } }, [
      _c("span", { staticClass: "check" }, [
        _c("i", { staticClass: "fa fa-check" })
      ]),
      _vm._v("\n        Show all data sources\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "showAll" } }, [
      _c("span", { staticClass: "check" }, [
        _c("i", { staticClass: "fa fa-check" })
      ]),
      _vm._v("\n        Show all data sources\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataSourceSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dataSources: []
    };
  },
  props: {
    currentAppDSs: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    otherDSs: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    selectedDataSource: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    changeDataSource: {
      type: Boolean,
      "default": false
    },
    showAll: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    showAllDSs: function showAllDSs() {
      this.$emit('onShowAll', !this.showAll);
      this.prepareData();
    },
    prepareData: function prepareData() {
      // If otherDSs array is empty it means that we show user only ds's for current app
      if (!this.otherDSs.length) {
        return this.currentAppDSs;
      }

      var groupedDataSources = [{
        id: 'currentAppDSs',
        text: 'This app',
        name: 'currentApp',
        children: []
      }, {
        id: 'otherDSs',
        text: 'Other apps',
        name: 'otherApp',
        children: []
      }];
      groupedDataSources[0].children = this.currentAppDSs;
      groupedDataSources[1].children = this.filterOtherAppsArray(this.otherDSs);
      return groupedDataSources;
    },
    filterOtherAppsArray: function filterOtherAppsArray(filterDS) {
      var _this = this;

      return filterDS.filter(function (ds) {
        return _this.currentAppDSs.findIndex(function (currDS) {
          return currDS.id === ds.id;
        }) === -1;
      });
    },
    setDataSource: function setDataSource(dataSource) {
      this.selectedDataSource = dataSource;
      this.$emit('selectedDataSourceId', dataSource);
    },
    viewDataSource: function viewDataSource() {
      Fliplet.Studio.emit('overlay', {
        name: 'widget',
        options: {
          size: 'large',
          "package": 'com.fliplet.data-sources',
          title: 'Edit Data Sources',
          classes: 'data-source-overlay',
          data: {
            context: 'overlay',
            dataSourceId: this.selectedDataSource.id
          }
        }
      });
    }
  },
  components: {
    Select2: _Select2__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.dataSources = this.prepareData();
  },
  updated: function updated() {
    Fliplet.Widget.autosize();
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Select2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "select",
    {
      ref: "selectDatasource",
      staticClass: "hidden-select form-control",
      attrs: { name: "selectDatasource", "data-label": "select" }
    },
    [
      _c("option", { attrs: { value: "none", disable: "" } }, [
        _vm._v("-- Select data source")
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    dataSources: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    selectedDataSource: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  methods: {
    customDsSearch: function customDsSearch(params, data) {
      // If there are no search terms, return all of the data
      if (!params.term) {
        return data;
      } // Do not display the item if there is no 'text' property


      if (typeof data.text === 'undefined' || typeof data.name === 'undefined' || typeof data.id === 'undefined') {
        return null;
      }

      var term = params.term.toLowerCase(); // Search when we get DSs for all aps

      if (data.children) {
        var matchedChildren = data.children.filter(function (child) {
          var name = child.name.toLowerCase();
          var id = child.id.toString();

          if (name.indexOf(term) > -1 || id.indexOf(term) > -1) {
            return true;
          }
        });

        if (matchedChildren.length) {
          var modifiedData = _objectSpread({}, data);

          modifiedData.children = matchedChildren;
          return modifiedData;
        }
      } // Search both by name and id


      if (data.name.indexOf(term) > -1 || data.id.indexOf(term) > -1) {
        return data;
      } // Return `null` if the term should not be displayed


      return null;
    },
    initSelect2: function initSelect2() {
      $(this.$refs.selectDatasource).select2({
        data: this.dataSources,
        placeholder: '-- Select a data source',
        templateResult: this.formatState,
        templateSelection: this.formatState,
        width: '100%',
        matcher: this.customDsSearch,
        dropdownAutoWidth: false
      });
    },
    select2Listeners: function select2Listeners() {
      var $vm = this;
      var $select2Ref = $(this.$refs.selectDatasource);
      $select2Ref.on('select2:select', function (e) {
        $vm.$emit('selectDataSource', e.params.data);
      });
      $select2Ref.on('select2:open', function () {
        $($('span.select2-container.select2-container--default.select2-container--open')[1]).css('position', 'relative');
        Fliplet.Widget.autosize();
        setTimeout(function () {
          $($('span.select2-container.select2-container--default.select2-container--open')[1]).css('position', 'absolute');
        }, 250);
      });
      $select2Ref.on('select2:close', function () {
        setTimeout(function () {
          Fliplet.Widget.autosize();
        }, 100);
      });
    },
    formatState: function formatState(state) {
      if (state.id === 'none' || state.id === 'currentAppDSs' || state.id === 'otherDSs') {
        return $('<span class="select2-value-holder">' + state.text + '</span>');
      }

      if (state.id === 'new') {
        return $('<span class="select2-value-holder">' + state.text + '</span>');
      }

      if (state.id === '------') {
        return $('<span class="select2-value-holder">' + state.text + '</span>');
      }

      if (typeof state.name === 'undefined' && typeof state.text !== 'undefined') {
        return $('<span class="select2-value-holder">' + state.text + ' <small>ID: ' + state.id + '</small></span>');
      }

      return $('<span class="select2-value-holder">' + state.name + ' <small>ID: ' + state.id + '</small></span>');
    },
    setSelectedDS: function setSelectedDS(selectedDS) {
      if (!selectedDS) {
        return;
      }

      var $select2 = $(this.$refs.selectDatasource);
      $select2.val(selectedDS.id).trigger('change');
    }
  },
  mounted: function mounted() {
    this.initSelect2();
    this.select2Listeners();
    this.setSelectedDS(this.selectedDataSource);
  },
  updated: function updated() {}
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSources", function() { return getDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSource", function() { return getDataSource; });
var getDataSources = function getDataSources(appId) {
  var getOptions = appId ? {
    appId: appId
  } : {};
  return Fliplet.DataSources.get(getOptions);
};
var getDataSource = function getDataSource(dataSourceId) {
  return Fliplet.DataSources.getById(dataSourceId);
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataSource", function() { return createDataSource; });
var createDataSource = function createDataSource(widgetData) {
  return Fliplet.Modal.prompt({
    title: 'Enter a name for the data source',
    "default": widgetData["default"].name
  }).then(function (dataSourceName) {
    if (dataSourceName === null) {
      return false;
    }

    if (!dataSourceName) {
      Fliplet.Modal.alert({
        message: 'Data source name can\'t be empty. Plaese enter data source name again.'
      }).then(function () {
        createDataSource();
      });
    }

    return Fliplet.DataSources.create({
      name: dataSourceName,
      appId: widgetData.appId,
      entries: widgetData.defaults.entries.entries,
      columns: widgetData.defaults.entries.columns
    });
  });
};

/***/ })
/******/ ]);