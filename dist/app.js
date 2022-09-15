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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);





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
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "data-source-title" }, [
        _c("strong", [
          _vm._v(
            _vm._s(_vm.widgetData.dataSourceTitle || "Select a data source")
          ),
        ]),
      ]),
      _vm._v(" "),
      _vm.isLoading
        ? _c("div", { staticClass: "spinner-container animated" }, [
            _c("div", { staticClass: "spinner-overlay" }, [
              _vm._v("Loading..."),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "main-data-source-provider",
          class: { "select-overlay": _vm.isLoading },
        },
        [
          _c("section", { staticClass: "data-source-selector" }, [
            _vm.dataSources.length ||
            (!_vm.dataSources.length && !_vm.selectedDataSource)
              ? _c("div", [
                  _c(
                    "label",
                    {
                      staticClass: "select-proxy-display",
                      class: { "has-error": _vm.hasError },
                      attrs: { for: "data-source-select" },
                    },
                    [
                      _c(
                        "select",
                        {
                          ref: "select",
                          staticClass: "hidden-select form-control",
                          domProps: {
                            value: _vm.selectedDataSource
                              ? _vm.selectedDataSource.id
                              : "",
                          },
                          on: { change: _vm.onSelectChange },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("-- Select data source"),
                          ]),
                          _vm._v(" "),
                          !_vm.dataSources.length
                            ? _c(
                                "option",
                                { attrs: { value: "none", disabled: "" } },
                                [_vm._v("(No data source found)")]
                              )
                            : _vm.dataSources.length
                            ? [
                                !!_vm.allDataSources.length
                                  ? _vm._l(_vm.dataSources, function (group) {
                                      return _c(
                                        "optgroup",
                                        {
                                          key: group.name,
                                          attrs: { label: group.name },
                                        },
                                        _vm._l(
                                          group.options,
                                          function (option) {
                                            return _c(
                                              "option",
                                              {
                                                key: option.id,
                                                domProps: { value: option.id },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.formatDataSourceOption(
                                                      option
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                        0
                                      )
                                    })
                                  : _vm._l(_vm.dataSources, function (option) {
                                      return _c(
                                        "option",
                                        {
                                          key: option.id,
                                          domProps: { value: option.id },
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.formatDataSourceOption(option)
                                            )
                                          ),
                                        ]
                                      )
                                    }),
                              ]
                            : _vm._e(),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "icon fa fa-chevron-down" }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "create-data-source",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.onDataSourceCreate.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Create new data source")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "checkbox checkbox-icon" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.showAll,
                          expression: "showAll",
                        },
                      ],
                      attrs: {
                        type: "checkbox",
                        name: "showAll",
                        id: "showAll",
                      },
                      domProps: {
                        checked: Array.isArray(_vm.showAll)
                          ? _vm._i(_vm.showAll, null) > -1
                          : _vm.showAll,
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.showAll,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.showAll = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.showAll = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.showAll = $$c
                          }
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(0),
                  ]),
                ])
              : _vm.selectedDataSource && !_vm.changeDataSource
              ? _c("div", [
                  _c("div", { staticClass: "selected-data-source" }, [
                    _c("div", { staticClass: "selected-data-source info" }, [
                      _c("code", [_vm._v(_vm._s(_vm.selectedDataSource.id))]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.selectedDataSource.name))]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass:
                          "change-data-source selected-data-source action",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.onDataSourceChange.apply(null, arguments)
                          },
                        },
                      },
                      [_vm._v("Change")]
                    ),
                  ]),
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
                    expression: "selectedDataSource",
                  },
                ],
                staticClass: "btn btn-default btn-view-data-source",
                on: { click: _vm.viewDataSource },
              },
              [_vm._v("\n          View data source\n        ")]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showAccessRulesAlert,
                    expression: "showAccessRulesAlert",
                  },
                ],
                staticClass: "security-notify",
              },
              [
                !_vm.securityEnabled
                  ? _c("div", { staticClass: "alert alert-warning" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Configure security rules so the app can access the data"
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "btn btn-primary btn-security",
                          on: { click: _vm.onAddDefaultSecurity },
                        },
                        [_vm._v("Configure security rules")]
                      ),
                    ])
                  : _vm.securityAdded
                  ? _c("div", { staticClass: "alert alert-success" }, [
                      _vm._v(
                        "\n            Security rules added. To manage security rules click "
                      ),
                      _c("b", [_vm._v("View data source")]),
                      _vm._v(" above.\n          "),
                    ])
                  : _vm._e(),
              ]
            ),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "showAll" } }, [
      _c("span", { staticClass: "check" }, [
        _c("i", { staticClass: "fa fa-check" }),
      ]),
      _vm._v("\n              Show all data sources\n            "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("This data source is missing security rules.")]),
    ])
  },
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_dataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

Vue.use(window.vuelidate["default"]);
var required = window.validators.required;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      appDataSources: [],
      allDataSources: [],
      copyOfAllDataSources: [],
      hasError: false,
      missingAccessTypes: [],
      selectedValue: '',
      isLoading: true,
      widgetData: {},
      selectedDataSource: null,
      dataSources: [],
      changeDataSource: false,
      securityEnabled: false,
      showAll: false,
      securityAdded: false,
      defaultAccessRules: [{
        type: ['select', 'insert', 'update', 'delete'],
        allow: 'all',
        enabled: true
      }]
    };
  },
  computed: {
    showAccessRulesAlert: function showAccessRulesAlert() {
      return this.selectedDataSource && this.widgetData.accessRules && this.widgetData.accessRules.length > 0;
    }
  },
  validations: {
    selectedValue: {
      required: required
    }
  },
  methods: {
    onSelectChange: function onSelectChange(event) {
      var id = parseInt(event.target.value, 10);
      var value;

      if (!id) {
        value = null;
      } else if (this.allDataSources.length) {
        this.dataSources.some(function (group) {
          var selectedOption = _.find(group.options, ['id', id]);

          if (selectedOption) {
            value = selectedOption;
            return true;
          }

          return false;
        });
      } else {
        value = _.find(this.dataSources, ['id', id]);
      }

      this.selectedDataSource = value;

      if (value) {
        this.hasAccessRules();
      }

      Fliplet.Widget.emit('dataSourceSelect', value);
      Fliplet.Widget.autosize();
    },
    showError: function showError(message) {
      Fliplet.Modal.alert({
        message: message
      });
    },
    initProvider: function initProvider() {
      this.widgetData = Fliplet.Widget.getData();

      if (this.widgetData.dataSourceId) {
        return this.loadSelectedDataSource(this.widgetData.dataSourceId);
      }

      this.loadDataSources(this.widgetData.appId);
    },
    addAppToExistingRule: function addAppToExistingRule() {
      var _this = this;

      this.selectedDataSource.accessRules.forEach(function (dataSourceRule) {
        if (!dataSourceRule.appId || !dataSourceRule.appId.length || _.includes(dataSourceRule.appId, _this.widgetData.appId)) {
          return;
        }

        if (!_.difference(_this.missingAccessTypes, dataSourceRule.type).length) {
          return dataSourceRule.appId.push(_this.widgetData.appId);
        }

        var existingAccessTypes = [];

        _this.missingAccessTypes.forEach(function (missingRule) {
          if (_.includes(dataSourceRule.type, missingRule)) {
            existingAccessTypes.push(missingRule);
          }
        });

        if (existingAccessTypes.length === dataSourceRule.type.length) {
          dataSourceRule.appId.push(_this.widgetData.appId);
        }

        _this.missingAccessTypes = _.difference(_this.missingAccessTypes, existingAccessTypes);
      });
    },
    enableRequiredRules: function enableRequiredRules() {
      var _this2 = this;

      this.selectedDataSource.accessRules.forEach(function (dataSourceRule) {
        if (dataSourceRule.enabled) {
          return;
        }

        var enabledAccessTypes = []; // If this rule has any missing access rule

        _this2.missingAccessTypes.forEach(function (missingRule) {
          if (_.includes(dataSourceRule.type, missingRule)) {
            // If this rule for all or for current app
            if (!dataSourceRule.appId || _.includes(dataSourceRule.appId, _this2.widgetData.appId)) {
              enabledAccessTypes.push(missingRule); // Enable access rule

              dataSourceRule.enabled = true;
            }
          }
        });

        _this2.missingAccessTypes = _.difference(_this2.missingAccessTypes, enabledAccessTypes);
      });
    },
    onAddDefaultSecurity: function onAddDefaultSecurity() {
      var _this3 = this;

      this.isLoading = true;

      var defaultRules = _.cloneDeep(this.widgetData.accessRules);

      if (this.selectedDataSource.accessRules && this.selectedDataSource.accessRules.length > 0) {
        this.addAppToExistingRule();
        this.enableRequiredRules();
        defaultRules.forEach(function (defaultRule) {
          defaultRule.type = _this3.missingAccessTypes;
          defaultRule.enabled = true;

          var accessRuleFound = _this3.selectedDataSource.accessRules.some(function (rule) {
            // Rule considered as duplicated in case if we have the same rule types and same allow option.
            // And it's enabled
            // And it's related to all apps or to the current app
            return defaultRule.allow === rule.allow && !_.difference(rule.type, defaultRule.type).length && rule.enabled && (!rule.appId || _.includes(rule.appId, _this3.widgetData.appId));
          }); // Add new rule only if it is not found
          // Or we if we have a missing rules to add


          if (!accessRuleFound && _this3.missingAccessTypes.length) {
            // Split rules for each rule type
            // To add them as separate rules
            defaultRule.type.forEach(function (type) {
              _this3.selectedDataSource.accessRules.push(_objectSpread(_objectSpread({}, defaultRule), {}, {
                type: Array.isArray(type) ? type : [type]
              }));
            });
          }
        });
      } else {
        this.selectedDataSource.accessRules = this.widgetData.accessRules.map(function (defaultRule) {
          defaultRule.enabled = true;
          return defaultRule;
        });
      }

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["updateDataSourceSecurityRules"])(this.selectedDataSource.id, this.selectedDataSource.accessRules).then(function () {
        Fliplet.Modal.alert({
          message: 'Your changes have been applied to all affected apps.'
        }).then(function () {
          _this3.hasAccessRules();

          _this3.securityAdded = true;
        });
      })["catch"](function (err) {
        _this3.showError(Fliplet.parseError(err));
      })["finally"](function () {
        _this3.isLoading = false;
      });
    },
    hasAccessRules: function hasAccessRules() {
      var _this4 = this;

      if (!this.selectedDataSource) {
        this.securityEnabled = false;
        return;
      }

      if (!Array.isArray(this.selectedDataSource.accessRules)) {
        this.selectedDataSource.accessRules = this.defaultAccessRules;
      }

      if (!this.selectedDataSource.accessRules.length) {
        this.securityEnabled = false;
        this.missingAccessTypes = this.widgetData.accessRules.map(function (rule) {
          return rule.type.map(function (accessType) {
            return accessType;
          });
        });
        return;
      }

      var includedAccessTypes = [];
      this.missingAccessTypes = [];
      this.selectedDataSource.accessRules.forEach(function (dataSourceRules) {
        _.forEach(_this4.widgetData.accessRules, function (componentRules) {
          componentRules.type.forEach(function (componentType) {
            if (_.includes(dataSourceRules.type, componentType) && dataSourceRules.enabled && (!dataSourceRules.appId || _.includes(dataSourceRules.appId, _this4.widgetData.appId))) {
              includedAccessTypes.push(componentType);
            }
          });
        });
      });
      includedAccessTypes = _.uniq(includedAccessTypes);

      _.forEach(this.widgetData.accessRules, function (defaultRule) {
        defaultRule.type.forEach(function (defaultType) {
          if (!_.includes(includedAccessTypes, defaultType)) {
            _this4.missingAccessTypes.push(defaultType);
          }
        });
      });

      this.missingAccessTypes = _.uniq(this.missingAccessTypes);

      if (this.missingAccessTypes.length) {
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
      var _this5 = this;

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["createDataSource"])(this.widgetData, this).then(function (dataSource) {
        if (!dataSource) {
          return;
        }

        if (Modernizr.ie11) {
          // Specific fix for Vue 2.0.0(and above) render bug in IE11
          // https://github.com/vuejs/vue/issues/6209
          setTimeout(function () {
            _this5.selectedDataSource = dataSource;
          }, 0);
        } else {
          _this5.selectedDataSource = dataSource;
        }

        if (_this5.allDataSources.length) {
          _this5.allDataSources.push(dataSource);
        }

        _this5.appDataSources.push(dataSource);

        _this5.hasAccessRules();

        _this5.dataSources = _this5.formatDataSources();
        Fliplet.Widget.emit('dataSourceSelect', dataSource);
      })["catch"](function (err) {
        _this5.showError(Fliplet.parseError(err));
      })["finally"](function () {
        _this5.isLoading = false;
      });
    },
    loadSelectedDataSource: function loadSelectedDataSource(dataSourceId) {
      var _this6 = this;

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["getDataSource"])(dataSourceId).then(function (dataSource) {
        _this6.selectedDataSource = dataSource;
        Fliplet.Widget.emit('dataSourceSelect', _this6.selectedDataSource);

        _this6.hasAccessRules();
      })["catch"](function (err) {
        if (err.status === 404) {
          _this6.selectedDataSource = null;
          _this6.widgetData.dataSourceId = null;

          _this6.loadDataSources(_this6.widgetData.appId);

          return;
        }

        _this6.showError(Fliplet.parseError(err));
      })["finally"](function () {
        _this6.isLoading = false;
        Fliplet.Widget.autosize();
      });
    },
    loadDataSources: function loadDataSources(appId) {
      var _this7 = this;

      Object(_services_dataSource__WEBPACK_IMPORTED_MODULE_2__["getDataSources"])(appId).then(function (dataSources) {
        if (_this7.widgetData.dataSourceId && _this7.selectedDataSource) {
          var selectedDataSourceFound = dataSources.some(function (dataSource) {
            return dataSource.id === _this7.selectedDataSource.id;
          });

          if (!selectedDataSourceFound) {
            dataSources.push(_this7.selectedDataSource);
          }
        }

        if (appId) {
          _this7.appDataSources = dataSources;
        } else {
          _this7.allDataSources = dataSources;
        }

        _this7.dataSources = _this7.formatDataSources();

        _this7.hasAccessRules();
      })["catch"](function (err) {
        _this7.showError(Fliplet.parseError(err));
      })["finally"](function () {
        _this7.isLoading = false;
        Fliplet.Widget.autosize();
      });
    },
    formatDataSources: function formatDataSources() {
      // If the otherDataSources array is empty it means that we show the user only data sources for the current app
      if (!this.allDataSources.length) {
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
      allDataSources[1].options = this.sortDataSourceEntries(this.getOtherAppsDataSources(this.allDataSources)); // Remove empty data source groups

      return allDataSources.filter(function (group) {
        return !!group.options.length;
      });
    },
    getOtherAppsDataSources: function getOtherAppsDataSources(dataSources) {
      return _.difference(dataSources, this.appDataSources, 'id');
    },
    formatDataSourceOption: function formatDataSourceOption(data) {
      var id = data.id,
          name = data.name,
          text = data.text;
      return "".concat(name || text, " (ID: ").concat(id, ")");
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
    sortDataSourceEntries: function sortDataSourceEntries(dataSources) {
      var copyDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(dataSources);

      if (copyDataSources[0] && copyDataSources[0].options) {
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
            dataSourceId: this.selectedDataSource.id,
            appId: Fliplet.Env.get('appId')
          },
          helpLink: 'https://help.fliplet.com/data-sources/'
        }
      });
    },
    confirmAccessRules: function confirmAccessRules() {
      var _this8 = this;

      var message = "To use this feature, <code>".concat(this.missingAccessTypes.join(', ').toUpperCase(), "</code> access must be added to the data source");
      Fliplet.Modal.confirm({
        title: 'Missing security rules',
        message: message,
        backdrop: true,
        buttons: {
          confirm: {
            label: 'Add security rule'
          },
          cancel: {
            label: 'I\'ll do it later'
          }
        }
      }).then(function (result) {
        if (result) {
          _this8.onAddDefaultSecurity();
        }
      });
    },
    status: function status(validation) {
      return {
        error: validation.$error
      };
    }
  },
  mounted: function mounted() {
    var _this9 = this;

    this.initProvider(); // Transfer selected DataSource id to the parent

    Fliplet.Widget.onSaveRequest(function () {
      Fliplet.Widget.save({
        id: _this9.selectedDataSource ? _this9.selectedDataSource.id : null
      });
    });
    Fliplet.Studio.onMessage(function (event) {
      if (event.data) {
        switch (event.data.event) {
          case 'overlay-close':
            if (event.data.classes === 'data-source-overlay') {
              _this9.loadSelectedDataSource(_this9.selectedDataSource.id);
            }

            break;

          case 'validation':
            _this9.hasError = !_this9.$v.selectedValue.$model;
            break;

          case 'update-security-rules':
            _this9.widgetData.accessRules = event.data.accessRules;

            _this9.hasAccessRules();

            if (!_this9.securityEnabled && _this9.selectedDataSource) {
              _this9.confirmAccessRules();
            }

            break;

          case 'widget-autosize':
            Fliplet.Widget.autosize();
            break;

          default:
            break;
        }
      }
    });
  },
  updated: function updated() {
    Fliplet.Widget.autosize();
  },
  watch: {
    showAll: {
      handler: function handler(value) {
        var _this10 = this;

        this.isLoading = true;
        this.dataSources = [];

        if (value) {
          if (!this.copyOfAllDataSources.length) {
            this.loadDataSources();
            return;
          }

          this.allDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.copyOfAllDataSources);
        } else {
          this.copyOfAllDataSources = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.allDataSources);
          this.allDataSources = [];
        }

        this.dataSources = this.formatDataSources();

        if (this.selectedDataSource) {
          var targetSources = this.allDataSources.length ? this.allDataSources : this.dataSources;

          if (!targetSources.some(function (currDS) {
            return currDS.id === _this10.selectedDataSource.id;
          })) {
            this.selectedDataSource = null;
          }
        } // Give VUE time to reset templates


        this.$nextTick(function () {
          _this10.isLoading = false;
        });
      }
    }
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

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(8);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

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

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
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

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSources", function() { return getDataSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataSource", function() { return getDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataSource", function() { return createDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDataSourceSecurityRules", function() { return updateDataSourceSecurityRules; });
var getDataSources = function getDataSources(appId) {
  var getOptions = {
    attributes: 'id,name,accessRules,columns,appId,definition',
    type: null
  };

  if (appId) {
    getOptions.appId = appId;
    getOptions.includeInUse = true;
    getOptions.excludeTypes = 'bookmarks,likes,comments,menu';
  }

  return Fliplet.DataSources.get(getOptions);
};
var getDataSource = function getDataSource(dataSourceId) {
  return Fliplet.DataSources.getById(dataSourceId, {
    cache: false,
    attributes: 'id,name,accessRules,columns,definition'
  });
};
var createDataSource = function createDataSource(data, context) {
  return Fliplet.Modal.prompt({
    title: 'Enter a name for the data source',
    value: data["default"].name || ''
  }).then(function (dataSourceName) {
    if (dataSourceName === null) {
      return;
    }

    if (!dataSourceName) {
      return Fliplet.Modal.alert({
        message: 'Data source name can\'t be empty. Plaese enter data source name again.'
      }).then(function () {
        return createDataSource(data);
      });
    }

    context.isLoading = true;
    return Fliplet.DataSources.create({
      name: dataSourceName,
      appId: data.appId,
      entries: data["default"].entries,
      columns: data["default"].columns
    });
  });
};
var updateDataSourceSecurityRules = function updateDataSourceSecurityRules(dataSourceId, securityRules) {
  return Fliplet.DataSources.update(dataSourceId, {
    accessRules: securityRules
  });
};

/***/ }),
/* 14 */
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


/***/ })
/******/ ]);