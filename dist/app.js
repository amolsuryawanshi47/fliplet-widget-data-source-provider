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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);





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
    _c("div", { staticClass: "data-source-title" }, [
      _c("strong", [
        _vm._v(_vm._s(_vm.widgetData.dataSourceTitle || "Select a data source"))
      ])
    ]),
    _vm._v(" "),
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
      : _c("div", { staticClass: "main-data-source-provider" }, [
          _c("section", { staticClass: "data-source-selector" }, [
            _vm.dataSources.length && _vm.changeDataSource
              ? _c(
                  "div",
                  [
                    _c("Select2", {
                      attrs: {
                        dataSources: _vm.dataSources,
                        selectedDataSource: _vm.selectedDataSource,
                        customOptionView: _vm.formatDataSourceOption,
                        customSearch: _vm.customDataSourceSearch,
                        optionLabelKey: "name",
                        optionValueKey: "id",
                        selectWithGroups: !!_vm.allDataSources.length
                      },
                      on: { selectDataSource: _vm.setDataSource }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "btn-link create-data-source",
                        on: { click: _vm.onDataSourceCreate }
                      },
                      [_vm._v("Create new data source")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "checkbox checkbox-icon" }, [
                      _c("input", {
                        attrs: {
                          type: "checkbox",
                          name: "showAll",
                          id: "showAll"
                        },
                        domProps: { checked: _vm.showAll },
                        on: { change: _vm.showAllDataSources }
                      }),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ],
                  1
                )
              : _vm.selectedDataSource && !_vm.changeDataSource
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
                        staticClass: "btn-link change-data-source",
                        on: { click: _vm.onDataSourceChange }
                      },
                      [_vm._v("Change")]
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectedDataSource,
                    expression: "selectedDataSource"
                  }
                ],
                staticClass: "btn btn-default btn-view-data-source",
                on: { click: _vm.viewDataSource }
              },
              [_vm._v("View data source")]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectedDataSource,
                    expression: "selectedDataSource"
                  }
                ],
                staticClass: "security-notify"
              },
              [
                !_vm.securityEnabled
                  ? _c("div", { staticClass: "alert alert-warning" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure security rules so the app can access the data"
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn btn-primary btn-security",
                          on: { click: _vm.onAddDefaultSecurity }
                        },
                        [_vm._v("Configure security rules")]
                      )
                    ])
                  : _vm.securityEnabled
                  ? _c("div", { staticClass: "alert alert-success" }, [
                      _vm._v(
                        "\n          Security rules added. To manage security rules click "
                      ),
                      _c("b", [_vm._v("View data source")]),
                      _vm._v(" above.\n        ")
                    ])
                  : _vm._e()
              ]
            )
          ])
        ])
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
      _vm._v("\n            Show all data sources\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("This data source is missing security rules.")])
    ])
  }
]
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
/* harmony import */ var _components_Select2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _services_dataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);

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
      appDataSources: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      isLoading: true,
      hasError: false,
      errorMessage: '',
      widgetData: {},
      selectedDataSource: null,
      dataSources: [],
      changeDataSource: false,
      securityEnabled: false,
      showAll: false
    };
  },
  methods: {
    onDataSourceSelect: function onDataSourceSelect(dataSource) {
      this.selectedDataSource = dataSource;
    },
    initProvider: function initProvider() {
      this.widgetData = Fliplet.Widget.getData();

      if (this.widgetData.dataSourceId) {
        return this.loadSelectedDataSource();
      }

      this.loadDataSources(this.widgetData.appId);
    },
    onAddDefaultSecurity: function onAddDefaultSecurity() {
      var _this = this;

      this.isLoading = true;
      this.selectedDataSource.accessRules = this.widgetData.accessRules;
      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["updateDataSourceSecurityRules"])(this.selectedDataSource.id, this.selectedDataSource.accessRules).then(function () {
        Fliplet.Modal.alert({
          message: 'Your changes have been applied to all affected apps.'
        });
      })["catch"](function (err) {
        _this.hasError = true;
        _this.errorMessage = Fliplet.parseError(err);
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    hasAccessRules: function hasAccessRules() {
      if (!this.selectedDataSource) {
        this.securityEnabled = false;
        return;
      }

      if (this.selectedDataSource.accessRules === null || !this.selectedDataSource.accessRules.length) {
        this.securityEnabled = false;
        return;
      }

      this.securityEnabled = true;
    },
    onDataSourceChange: function onDataSourceChange() {
      this.changeDataSource = !this.changeDataSource;

      if (!this.appDataSources.length) {
        this.loadDataSources(this.widgetData.appId);
      }
    },
    onDataSourceCreate: function onDataSourceCreate() {
      var _this2 = this;

      this.isLoading = true;
      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["createDataSource"])(this.widgetData).then(function (dataSource) {
        if (!dataSource) {
          return;
        }

        _this2.selectedDataSource = dataSource;

        if (_this2.allDataSources.length) {
          _this2.allDataSources[0].options.push(dataSource);
        }

        _this2.appDataSources.push(dataSource);
      })["catch"](function (err) {
        _this2.hasError = true;
        _this2.errorMessage = Fliplet.parseError(err);
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    showAllDataSources: function showAllDataSources(event) {
      var _this3 = this;

      this.isLoading = true;
      this.showAll = event.target.checked;

      if (this.showAll) {
        if (!this.copyOfAllDataSources.length) {
          this.loadDataSources();
          return;
        }

        this.allDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.copyOfAllDataSources);
      } else {
        this.copyOfAllDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.allDataSources);
        this.allDataSources = [];
      } // Give VUE time to reset templates


      this.$nextTick(function () {
        _this3.isLoading = false;
      });
    },
    loadSelectedDataSource: function loadSelectedDataSource() {
      var _this4 = this;

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["getDataSource"])(this.widgetData.dataSourceId).then(function (dataSource) {
        _this4.selectedDataSource = dataSource;
        Fliplet.Widget.emit('showColumns', {
          columns: _this4.selectedDataSource.columns,
          id: _this4.selectedDataSource.id
        });
      })["catch"](function (err) {
        _this4.errorMessage = Fliplet.parseError(err);
        _this4.hasError = true;
      })["finally"](function () {
        _this4.isLoading = false;
      });
    },
    loadDataSources: function loadDataSources(appId) {
      var _this5 = this;

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["getDataSources"])(appId).then(function (dataSources) {
        var selectedDataSourceInDataSources = dataSources.some(function (dataSource) {
          return dataSource.id === _this5.selectedDataSource.id;
        });

        if (!selectedDataSourceInDataSources) {
          dataSources.push(_this5.selectedDataSource);
        }

        if (appId) {
          _this5.appDataSources = _this5.formatDataSources(dataSources);
        } else {
          _this5.allDataSources = _this5.formatDataSources(dataSources);
        }
      })["catch"](function (err) {
        _this5.hasError = true;
        _this5.errorMessage = Fliplet.parseError(err);
      })["finally"](function () {
        _this5.isLoading = false;
        Fliplet.Widget.autosize();
      });
    },
    formatDataSources: function formatDataSources() {
      // If we have selected data source before
      if (!this.appDataSources.length) {
        return [];
      } // If the otherDataSources array is empty it means that we show the user only data sources for the current app


      if (!this.otherDataSources.length) {
        return this.sortDataSourceEntries(this.appDataSources);
      }

      var allDataSources = [{
        name: 'This app',
        options: []
      }, {
        name: 'Other apps',
        options: []
      }];
      allDataSources[0].options = this.sortDataSourceEntries(this.appDataSources);
      allDataSources[1].options = this.sortDataSourceEntries(this.getOtherAppsDataSources(this.allDataSources));
      return allDataSources;
    },
    getOtherAppsDataSources: function getOtherAppsDataSources(dataSources) {
      var _this6 = this;

      return dataSources.filter(function (dataSource) {
        return _this6.currentAppDataSources.findIndex(function (currDS) {
          return currDS.id === dataSource.id;
        }) === -1;
      });
    },
    formatDataSourceOption: function formatDataSourceOption(data) {
      var id = data.id,
          name = data.name,
          text = data.text;
      return "".concat(name || text, " ID: ").concat(id);
    },
    customDataSourceSearch: function customDataSourceSearch(condition, data) {
      // Return of this function should be the same as the array.filter function
      // If there are no search terms, return all of the data
      if (!condition) {
        return true;
      }

      var term = condition.toUpperCase();
      var name = data.name.toUpperCase();
      var id = data.id.toString(); // Search both by name and id

      if (name.indexOf(term) > -1 || id.indexOf(term) > -1) {
        return true;
      } // Return `false` if the term should not be displayed


      return false;
    },
    setDataSource: function setDataSource(dataSource) {
      if (dataSource) {
        this.selectedDataSource = dataSource;
        Fliplet.Widget.emit('showColumns', {
          columns: dataSource.columns,
          id: dataSource.id
        });
        this.$emit('onDataSourceSelect', dataSource);
      }
    },
    sortDataSourceEntries: function sortDataSourceEntries(dataSources) {
      var copyDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(dataSources);

      if (copyDataSources[0].options) {
        copyDataSources[0].options.sort(this.sortArray);
        copyDataSources[1].options.sort(this.sortArray);
      } else {
        copyDataSources.sort(this.sortArray);
      }

      return copyDataSources;
    },
    sortArray: function sortArray(a, b) {
      // Sort data source array by name
      // Send names that starts with number to the end of the list
      var startsWithAlphabet = /^[A-Z,a-z]/;
      var aValue = a.name ? a.name.toUpperCase() : '}';
      var bValue = b.name ? b.name.toUpperCase() : '}';

      if (!startsWithAlphabet.test(bValue)) {
        bValue = "{".concat(bValue);
      }

      if (!startsWithAlphabet.test(aValue)) {
        aValue = "{".concat(aValue);
      }

      if (aValue < bValue) {
        return -1;
      }

      if (aValue > bValue) {
        return 1;
      }

      return 0;
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
    Select2: _components_Select2_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.initProvider();
    var $vm = this; // Transfer selected DataSource id to the parent

    Fliplet.Widget.onSaveRequest(function () {
      Fliplet.Widget.save({
        id: $vm.selectedDataSource ? $vm.selectedDataSource.id : undefined
      });
    });
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
/* harmony import */ var _Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);





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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_template_id_bfa75c94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 14 */
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
    _c(
      "div",
      {
        ref: "select",
        staticClass: "select",
        on: {
          click: function() {
            _vm.toggleSelect()
          }
        }
      },
      [
        _c("span", { staticClass: "select-holder" }, [
          _vm._v(_vm._s(_vm.selectedOption || "-- Select data source"))
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "options" }, [
      _c("div", { staticClass: "search" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.trim",
              value: _vm.searchValue,
              expression: "searchValue",
              modifiers: { trim: true }
            }
          ],
          attrs: { type: "text" },
          domProps: { value: _vm.searchValue },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchValue = $event.target.value.trim()
              },
              _vm.search
            ],
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        })
      ]),
      _vm._v(" "),
      !_vm.selectOptions.length && !_vm.searchValue
        ? _c("div", { staticClass: "info" }, [
            _vm._v("\n      Loading...\n    ")
          ])
        : !_vm.selectOptions.length && _vm.searchValue
        ? _c("div", { staticClass: "info" }, [
            _vm._v("\n      No results found.\n    ")
          ])
        : _vm.selectOptions.length
        ? _c(
            "div",
            [
              _vm.selectWithGroups
                ? _c(
                    "div",
                    _vm._l(_vm.selectOptions, function(group) {
                      return _c(
                        "div",
                        { key: group.name, staticClass: "option-group" },
                        [
                          _c("span", { staticClass: "option-group-name" }, [
                            _vm._v(_vm._s(group.name))
                          ]),
                          _vm._v(" "),
                          _vm._l(group.options, function(option) {
                            return _c(
                              "div",
                              {
                                key: option.id,
                                staticClass: "option",
                                on: {
                                  click: function() {
                                    _vm.setOption(option)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.optionView(option)) +
                                    "\n          "
                                )
                              ]
                            )
                          })
                        ],
                        2
                      )
                    }),
                    0
                  )
                : _vm._l(_vm.selectOptions, function(option) {
                    return _c(
                      "div",
                      {
                        key: option.id,
                        staticClass: "option",
                        on: {
                          click: function() {
                            _vm.setOption(option)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n        " +
                            _vm._s(_vm.optionView(option)) +
                            "\n      "
                        )
                      ]
                    )
                  })
            ],
            2
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_3_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

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
  props: {
    dataSources: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    customSearch: {
      type: Function,
      "default": null
    },
    customOptionView: {
      type: Function,
      "default": null
    },
    selectedDataSource: {
      type: Number
    },
    optionValueKey: {
      type: String,
      "default": ''
    },
    optionLabelKey: {
      type: String,
      "default": ''
    },
    selectWithGroups: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      selectedOption: '',
      selectOptions: [],
      allOptions: [],
      searchValue: ''
    };
  },
  methods: {
    toggleSelect: function toggleSelect(init) {
      if (!init) {
        this.$refs.select.classList.toggle('active');
        Fliplet.Widget.autosize();
      }
    },
    setOption: function setOption(value, init) {
      this.selectedOption = this.getSelectedOptionLabel(value);
      this.$emit('selectDataSource', value);
      this.toggleSelect(init);
    },
    getSelectedOptionValue: function getSelectedOptionValue(value) {
      if (!this.optionValueKey) {
        return value;
      }

      return value && value[this.optionValueKey];
    },
    getSelectedOptionLabel: function getSelectedOptionLabel(value) {
      if (!this.optionLabelKey) {
        return value;
      }

      return value && value[this.optionLabelKey];
    },
    search: function search() {
      var _this = this;

      if (this.customSearch) {
        this.selectOptions = this.allOptions.filter(function (option) {
          return _this.customSearch(_this.searchValue, option);
        });
        return;
      }

      this.defaultSearch(this.searchValue);
    },
    optionView: function optionView(data) {
      if (this.customOptionView) {
        return this.customOptionView(data);
      }

      return data;
    },
    defaultSearch: function defaultSearch(value) {
      this.selectOptions = [];

      if (!value) {
        this.selectOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.allOptions);
        return;
      }

      this.selectOptions = this.allOptions.filter(function (option) {
        return option.indexOf(value) !== -1;
      });
    },
    initSelect2: function initSelect2() {
      this.allOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.dataSources);
      this.search();
      this.setOption(this.selectedDataSource, true);
    }
  },
  mounted: function mounted() {
    this.initSelect2();
  }
});

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSources", function() { return getDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSource", function() { return getDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataSource", function() { return createDataSource; });
var getDataSources = function getDataSources(appId) {
  var getOptions = appId ? {
    appId: appId
  } : {};
  return Fliplet.DataSources.get(getOptions);
};
var getDataSource = function getDataSource(dataSourceId) {
  return Fliplet.DataSources.getById(dataSourceId);
};
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