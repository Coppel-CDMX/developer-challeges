"use strict";
(self["webpackChunktodo_system_darkhawk21"] = self["webpackChunktodo_system_darkhawk21"] || []).push([["resources_js_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _computed;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Table",
  props: {
    params: {},
    paginate: {
      type: Boolean,
      required: false,
      "default": true
    }
  },
  computed: (_computed = {
    totalPages: function totalPages() {
      return this.params.last_page || 0;
    },
    currentPage: function currentPage() {
      return this.params.current_page || 0;
    }
  }, _defineProperty(_computed, "totalPages", function totalPages() {
    return this.params.last_page || 0;
  }), _defineProperty(_computed, "pages", function pages() {
    var delta = 2;
    var left = this.currentPage - delta;
    var right = this.currentPage + delta + 1;
    var range = [];
    var rangeWithDots = [];
    var l;
    for (var page = 1; page <= this.totalPages; page++) {
      if (page === 1 || page === this.totalPages || page >= left && page < right) {
        range.push(page);
      }
    }
    for (var _i = 0, _range = range; _i < _range.length; _i++) {
      var _page = _range[_i];
      if (l) {
        if (_page - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (_page - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(_page);
      l = _page;
    }
    return rangeWithDots;
  }), _defineProperty(_computed, "showNextButton", function showNextButton() {
    return this.currentPage < this.totalPages;
  }), _defineProperty(_computed, "showPrevButton", function showPrevButton() {
    return this.currentPage > 1;
  }), _computed),
  methods: {
    classesPage: function classesPage(page) {
      return {
        current: this.currentPage === page,
        ellipsis: page === '...'
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_wait__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-wait */ "./node_modules/vue-wait/index.js");
/* harmony import */ var vue_wait__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_wait__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Table_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Table.vue */ "./resources/js/components/Table.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  components: {
    Table: _components_Table_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      filters: {
        keyword: '',
        period: {
          start: null,
          end: null
        }
      },
      taskSelected: null,
      status: null,
      showSuccessMessage: false
    };
  },
  // mounted() {
  //     this.fetchVehiclesStatuses();

  //     this.fetchVehiclesHistory({
  //         ...this.filters,
  //         page: 1
  //     });
  // },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    //         user: state => state.user.user,
    //         newHistorySaved: state => state.vehiclesHistory.saved,
    //         vehiclesStatuses: state => state.vehiclesStatus.items,
    //         vehiclesHistory: state => state.vehiclesHistory.items,
    //         vehiclesStatusReasons: state => state.vehiclesStatusReason.items,
    errors: function errors(state) {
      return state.user.errors;
    }
    //         copyLastHistory: state => state.vehiclesHistory.copyLastHistory
  })),

  methods: {
    //     ...mapWaitingActions({
    //         fetchVehiclesHistory: {
    //             action: 'vehiclesHistory/search',
    //             loader: 'getting vehicles history'
    //         },
    //         exportVehiclesHistory: {
    //             action: 'vehiclesHistory/export',
    //             loader: 'exporting vehicles history'
    //         },
    //         copyLastVehiclesHistory: {
    //             action: 'vehiclesHistory/copyLastHistory',
    //             loader: 'copying yesterday history'
    //         },
    //         fetchVehiclesStatuses: {
    //             action: 'vehiclesStatus/fetchAll',
    //             loader: 'getting vehicles statuses'
    //         },
    //         fetchVehiclesStatusReasons: {
    //             action: 'vehiclesStatusReason/fetchAll',
    //             loader: 'getting vehicles status reasons'
    //         },
    //         addNewRegister: {
    //             action: 'vehiclesHistory/addOne',
    //             loader: 'adding new history register'
    //         },
    //         updateExistRegister: {
    //             action: 'vehiclesHistory/updateOne',
    //             loader: 'updating new history register'
    //         }
    //     }),
    //     search(page = 1) {
    //         this.fetchVehiclesHistory({
    //             ...this.filters,
    //             page
    //         });
    //     },
    //     addRegister() {
    //         const newRegister = {
    //             ...this.historySelected,
    //             status: this.status,
    //             statusReason: this.statusReason
    //         };
    //         this.addNewRegister(newRegister);
    //     },
    //     updateRegister() {
    //         const updatedRegister = {
    //             ...this.historySelected,
    //             status: this.status,
    //             statusReason: this.statusReason
    //         };
    //         this.updateExistRegister(updatedRegister);
    //     },
    //     vehicleAge(vehicleDate) {
    //         const dateNow = this.$moment();
    //         return dateNow.diff(vehicleDate, 'years');
    //     },
    //     openModal(history) {
    //         this.historySelected = history;
    //         this.status = history.status;
    //     },
    clearFilter: function clearFilter(filter) {
      switch (filter) {
        case 'keyword':
          this.filters.keyword = '';
          break;
        case 'period':
          this.filters.period.start = null;
          this.filters.period.end = null;
          break;
      }
    } //     exportData() {
    //         this.exportVehiclesHistory(this.filters);
    //     },
    //     async copyData() {
    //         const { isConfirmed } = await this.$swal.fire({
    //             title: "¡Atención!",
    //             text: "¿Estás seguro de copiar los registros no actualizados? Ten en cuenta que esta acción es irreversible.",
    //             icon: "warning",
    //             confirmButtonText: "Aceptar",
    //             cancelButtonText: "Cancelar",
    //             showConfirmButton: true,
    //             showCancelButton: true
    //         });
    //         if (isConfirmed) {
    //             this.copyLastVehiclesHistory();
    //         }
    //     }
  }
  // watch: {
  //     newHistorySaved(newValue) {
  //         if (newValue) {
  //             this.historySelected = null;
  //             this.status = null;
  //             this.statusReason = '';
  //             this.$refs.Close.click();
  //             this.showSuccessMessage = true;

  //             setTimeout(() => {
  //                 this.showSuccessMessage = false;
  //             }, 5000);
  //         }
  //     },
  //     copyLastHistory(newValue) {
  //         if (newValue) {
  //             this.search();
  //             this.showSuccessMessage = true;

  //             setTimeout(() => {
  //                 this.showSuccessMessage = false;
  //             }, 5000);
  //         }
  //     },
  //     status(newValue) {
  //         if (newValue) {
  //             this.fetchVehiclesStatusReasons({vehiclesStatusId: newValue.id});
  //         }
  //     }
  // }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pagination a {\n  text-decoration: none;\n}\n.pagination a:hover {\n  color: skyblue;\n}\n.pagination li {\n  margin: 0 5px;\n}\n.pagination .current {\n  padding: 3px 10px;\n  color: skyblue;\n  cursor: default;\n  background: #fff;\n  border-radius: 50%;\n  border: 2px solid skyblue;\n}\n.pagination .pagination-previous,\n.pagination .pagination-next {\n  font-size: 14px;\n}\n.pagination .disabled {\n  opacity: 0.5;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Table.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Table.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=5bd01d73& */ "./resources/js/components/Table.vue?vue&type=template&id=5bd01d73&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/components/Table.vue?vue&type=script&lang=js&");
/* harmony import */ var _Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__.render,
  _Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Table.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Table.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Table.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/components/Table.vue?vue&type=template&id=5bd01d73&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Table.vue?vue&type=template&id=5bd01d73& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_5bd01d73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Table.vue?vue&type=template&id=5bd01d73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=template&id=5bd01d73&");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=template&id=5bd01d73&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Table.vue?vue&type=template&id=5bd01d73& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table table-striped table-hover" }, [
        _c("thead", { staticClass: "bg-dark text-light" }, [
          _c("tr", [_vm._t("head")], 2),
        ]),
        _vm._v(" "),
        _c("tbody", [_vm._t("default")], 2),
      ]),
    ]),
    _vm._v(" "),
    _vm.pages.length > 1 && _vm.paginate === true
      ? _c("nav", [
          _c(
            "ul",
            {
              staticClass:
                "pagination justify-content-center align-items-center mt-4 mb-4",
            },
            [
              _c(
                "li",
                {
                  staticClass: "pagination-previous",
                  class: { disabled: !_vm.showPrevButton },
                },
                [
                  _vm.showPrevButton
                    ? _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.$emit(
                                "page-selected",
                                _vm.currentPage - 1
                              )
                            },
                          },
                        },
                        [_vm._v("Anterior")]
                      )
                    : [_vm._v("Anterior")],
                ],
                2
              ),
              _vm._v(" "),
              _vm._l(_vm.pages, function (page) {
                return _c("li", { key: page, class: _vm.classesPage(page) }, [
                  page !== "..."
                    ? _c(
                        "a",
                        {
                          attrs: { href: "#", "aria-label": "Page " + page },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.$emit("page-selected", page)
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm._f("formatNumber")(page)))]
                      )
                    : _vm._e(),
                ])
              }),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "pagination-next",
                  class: { disabled: !_vm.showNextButton },
                },
                [
                  _vm.showNextButton
                    ? _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.$emit(
                                "page-selected",
                                _vm.currentPage + 1
                              )
                            },
                          },
                        },
                        [_vm._v("Siguiente")]
                      )
                    : [_vm._v("Siguiente")],
                ],
                2
              ),
            ],
            2
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "mb-5" }, [
      _c("div", { staticClass: "bg-light py-3 px-3 mt-3" }, [
        _c("h3", { staticClass: "title text-center" }, [_vm._v("TODO App")]),
        _vm._v(" "),
        _c("div", { staticClass: "row g-3 align-items-end" }, [
          _c("div", { staticClass: "col-auto text-center" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "keyword" } },
              [_vm._v("Palabra clave")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.keyword,
                  expression: "filters.keyword",
                },
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "keyword",
                placeholder: "Buscar por palabra clave...",
              },
              domProps: { value: _vm.filters.keyword },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filters, "keyword", $event.target.value)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto text-center" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "period" } },
              [_vm._v("Periodo de creación")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.period.start,
                    expression: "filters.period.start",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "date", id: "period" },
                domProps: { value: _vm.filters.period.start },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filters.period, "start", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.period.end,
                    expression: "filters.period.end",
                  },
                ],
                staticClass: "form-control ms-2",
                attrs: { type: "date", id: "period" },
                domProps: { value: _vm.filters.period.end },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filters.period, "end", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto" }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-light py-1 px-3 mt-1" }, [
        _c("div", { staticClass: "row g-3 align-items-end py-1 px-2" }, [
          _vm.filters.keyword != ""
            ? _c(
                "div",
                {
                  staticClass: "col-auto text-light py-2 px-3 rounded-4 pill",
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.clearFilter("keyword")
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                    Palabra clave: " +
                      _vm._s(_vm.filters.keyword) +
                      " "
                  ),
                  _c(
                    "strong",
                    {
                      staticClass:
                        "bg-light text-dark rounded-circle pill-erase",
                    },
                    [_vm._v("X")]
                  ),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.filters.period.start != null || _vm.filters.period.end != null
            ? _c(
                "div",
                {
                  staticClass: "col-auto text-light py-2 px-3 rounded-4 pill",
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.clearFilter("period")
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                    Periodo inicio: " +
                      _vm._s(_vm.filters.period.start) +
                      " - Periodo final: " +
                      _vm._s(_vm.filters.period.end) +
                      " "
                  ),
                  _c(
                    "strong",
                    {
                      staticClass:
                        "bg-light text-dark rounded-circle pill-erase",
                    },
                    [_vm._v("X")]
                  ),
                ]
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _vm.showSuccessMessage
        ? _c(
            "div",
            {
              staticClass: "mt-3 alert alert-success",
              attrs: { role: "alert" },
            },
            [
              _c("h6", { staticClass: "text-center" }, [
                _vm._v("Se ha realizado la acción satisfactoriamente."),
              ]),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.errors.length > 0
        ? _c(
            "div",
            {
              staticClass: "mt-3 alert alert-danger",
              attrs: { role: "alert" },
            },
            _vm._l(_vm.errors, function (error) {
              return _c("h6", { key: error, staticClass: "text-center" }, [
                _vm._v(_vm._s(error)),
              ])
            }),
            0
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);