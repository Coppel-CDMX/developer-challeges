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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Home',
  components: {
    Table: _components_Table_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      filters: {
        keyword: '',
        period_start: null,
        period_end: null,
        status: null
      },
      newTask: {
        title: '',
        description: '',
        priority: null,
        status: null
      },
      taskSelected: null,
      status: null,
      showSuccessMessage: false
    };
  },
  mounted: function mounted() {
    this.getTasksStatuses();
    this.getTasks(_objectSpread(_objectSpread({}, this.filters), {}, {
      page: 1
    }));
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    newTaskSaved: function newTaskSaved(state) {
      return state.task.taskSaved;
    },
    taskDeleted: function taskDeleted(state) {
      return state.task.taskDeleted;
    },
    tasksStatuses: function tasksStatuses(state) {
      return state.taskStatus.statuses;
    },
    tasks: function tasks(state) {
      return state.task.tasks;
    },
    errors: function errors(state) {
      return state.task.errors;
    }
  })), {}, {
    tasksData: function tasksData() {
      return this.tasks.data || [];
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vue_wait__WEBPACK_IMPORTED_MODULE_0__.mapWaitingActions)({
    getTasks: {
      action: 'task/getAll',
      loader: 'getting tasks'
    },
    getTasksStatuses: {
      action: 'taskStatus/getAll',
      loader: 'getting tasks statuses'
    },
    deleteOneTask: {
      action: 'task/deleteOne',
      loader: 'deleting one task'
    },
    addNewTask: {
      action: 'task/insertOne',
      loader: 'adding new task'
    },
    updateOneTask: {
      action: 'task/updateOne',
      loader: 'updating one task'
    }
  })), {}, {
    search: function search() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.getTasks(_objectSpread(_objectSpread({}, this.filters), {}, {
        page: page
      }));
    },
    addTask: function addTask() {
      this.addNewTask(this.newTask);
    },
    deleteTask: function deleteTask(taskId) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$_this$$swal$fi, isConfirmed;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$swal.fire({
                title: "¡Atención!",
                html: "¿Estás seguro de eliminar la tarea seleccionada?<br>Ten en cuenta que esta acción es irreversible.",
                icon: "warning",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                showConfirmButton: true,
                showCancelButton: true
              });
            case 2:
              _yield$_this$$swal$fi = _context.sent;
              isConfirmed = _yield$_this$$swal$fi.isConfirmed;
              if (isConfirmed) {
                _this.deleteOneTask(taskId);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getPriorityText: function getPriorityText(priority) {
      var priorityText = '';
      switch (priority) {
        case 0:
          priorityText = 'Baja';
          break;
        case 1:
          priorityText = 'Normal';
          break;
        case 2:
          priorityText = 'Alta';
          break;
        case 3:
          priorityText = 'Urgente';
          break;
      }
      return priorityText;
    },
    updateTask: function updateTask() {
      this.updateOneTask(this.taskSelected);
    },
    openUpdateModal: function openUpdateModal(task) {
      this.taskSelected = _objectSpread({}, task);
    },
    clearFilter: function clearFilter(filter) {
      switch (filter) {
        case 'keyword':
          this.filters.keyword = '';
          break;
        case 'period':
          this.filters.period_start = null;
          this.filters.period_end = null;
          break;
        case 'status':
          this.filters.status = null;
          break;
      }
    }
  }),
  watch: {
    newTaskSaved: function newTaskSaved(newValue) {
      var _this2 = this;
      if (newValue) {
        this.newTask = {
          title: '',
          description: '',
          priority: null,
          status: null
        };
        this.$refs.Close.click();
        this.showSuccessMessage = true;
        setTimeout(function () {
          _this2.showSuccessMessage = false;
        }, 5000);
      }
    },
    taskDeleted: function taskDeleted(newValue) {
      var _this3 = this;
      if (newValue) {
        this.showSuccessMessage = true;
        setTimeout(function () {
          _this3.showSuccessMessage = false;
        }, 5000);
      }
    }
  }
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
                    value: _vm.filters.period_start,
                    expression: "filters.period_start",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "date", id: "period" },
                domProps: { value: _vm.filters.period_start },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filters, "period_start", $event.target.value)
                  },
                },
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.period_end,
                    expression: "filters.period_end",
                  },
                ],
                staticClass: "form-control ms-2",
                attrs: { type: "date", id: "period" },
                domProps: { value: _vm.filters.period_end },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filters, "period_end", $event.target.value)
                  },
                },
              }),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto text-center" }, [
            _c(
              "label",
              { staticClass: "col-form-label", attrs: { for: "status" } },
              [_vm._v("Estatus")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.status,
                    expression: "filters.status",
                  },
                ],
                staticClass: "form-control",
                on: {
                  change: function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.filters,
                      "status",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { domProps: { value: null } }, [
                  _vm._v("Seleccione uno..."),
                ]),
                _vm._v(" "),
                _vm._l(_vm.tasksStatuses, function (taskStatus) {
                  return _c(
                    "option",
                    { key: taskStatus.id, domProps: { value: taskStatus } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(taskStatus.name) +
                          "\n                        "
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-auto" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary mt-2",
                on: { click: _vm.search },
              },
              [_vm._v("Buscar")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mt-2",
                attrs: {
                  "data-bs-toggle": "modal",
                  "data-bs-target": "#addModal",
                },
              },
              [_vm._v("Agregar")]
            ),
          ]),
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
          _vm.filters.period_start != null || _vm.filters.period_end != null
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
                      _vm._s(_vm.filters.period_start) +
                      " - Periodo final: " +
                      _vm._s(_vm.filters.period_end) +
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
          _vm.filters.status != null
            ? _c(
                "div",
                {
                  staticClass: "col-auto text-light py-2 px-3 rounded-4 pill",
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.clearFilter("status")
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                    Estatus: " +
                      _vm._s(_vm.filters.status.name) +
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
      _vm.tasks.total == 0
        ? _c("div", { staticClass: "bg-light py-3 px-3 mt-3" }, [
            _c("h6", { staticClass: "text-center" }, [
              _vm._v("No se encontraron resultados"),
            ]),
          ])
        : _c(
            "div",
            { staticClass: "bg-light py-3 px-3 mt-3" },
            [
              _c("p", [
                _vm._v(
                  "Total de tareas: " +
                    _vm._s(_vm._f("formatNumber")(_vm.tasks.total))
                ),
              ]),
              _vm._v(" "),
              _c(
                "Table",
                {
                  attrs: { params: _vm.tasks },
                  on: { "page-selected": _vm.search },
                  scopedSlots: _vm._u([
                    {
                      key: "head",
                      fn: function () {
                        return [
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Acciones"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Título"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Descripción"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Prioridad"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Estatus"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Fecha de creación"),
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v("Fecha de última actualización"),
                          ]),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _vm._l(_vm.tasksData, function (task) {
                    return _c("tr", { key: task.id }, [
                      _c("td", { staticClass: "text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger mt-2",
                            on: {
                              click: function ($event) {
                                return _vm.deleteTask(task.id)
                              },
                            },
                          },
                          [_vm._v("Eliminar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary mt-2",
                            attrs: {
                              "data-bs-toggle": "modal",
                              "data-bs-target": "#updateModal",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.openUpdateModal(task)
                              },
                            },
                          },
                          [_vm._v("Editar")]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.title))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(task.description))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(_vm.getPriorityText(task.priority))),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(task.status.name)),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          _vm._s(
                            _vm
                              .$moment(task.created_at)
                              .format("DD/MM/YYYY h:mm:ss a")
                          )
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(
                          _vm._s(
                            _vm
                              .$moment(task.updated_at)
                              .format("DD/MM/YYYY h:mm:ss a")
                          )
                        ),
                      ]),
                    ])
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c("p", { staticClass: "mt-3" }, [
                _vm._v(
                  "Total de tareas: " +
                    _vm._s(_vm._f("formatNumber")(_vm.tasks.total))
                ),
              ]),
            ],
            1
          ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addModal",
          tabindex: "-1",
          "aria-labelledby": "addModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                { staticClass: "modal-title", attrs: { id: "addModalLabel" } },
                [_vm._v("Agregando Tarea")]
              ),
              _vm._v(" "),
              _c("button", {
                ref: "Close",
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.errors.length > 0
                ? _c(
                    "div",
                    {
                      staticClass: "mt-3 alert alert-danger",
                      attrs: { role: "alert" },
                    },
                    _vm._l(_vm.errors, function (error) {
                      return _c(
                        "h6",
                        { key: error, staticClass: "text-center" },
                        [_vm._v(_vm._s(error))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col text-center" }, [
                  _c("label", [_vm._v("Título")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newTask.title,
                        expression: "newTask.title",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.newTask.title },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.newTask, "title", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col" }, [
                  _c("label", [_vm._v("Descripción")]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.newTask.description,
                        expression: "newTask.description",
                      },
                    ],
                    staticClass: "form-control",
                    domProps: { value: _vm.newTask.description },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.newTask,
                          "description",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col" }, [
                  _c("label", [_vm._v("Prioridad")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newTask.priority,
                          expression: "newTask.priority",
                        },
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.newTask,
                            "priority",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: null } }, [
                        _vm._v("Seleccione una..."),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 0 } }, [
                        _vm._v("Baja"),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 1 } }, [
                        _vm._v("Normal"),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 2 } }, [
                        _vm._v("Alta"),
                      ]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 3 } }, [
                        _vm._v("Urgente"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-3" }, [
                _c("div", { staticClass: "col" }, [
                  _c("label", [_vm._v("Estatus")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newTask.status,
                          expression: "newTask.status",
                        },
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.newTask,
                            "status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: null } }, [
                        _vm._v("Seleccione uno..."),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.tasksStatuses, function (taskStatus) {
                        return _c(
                          "option",
                          {
                            key: taskStatus.id,
                            domProps: { value: taskStatus },
                          },
                          [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(taskStatus.name) +
                                "\n                                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.addTask.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Guardar")]
              ),
            ]),
          ]),
        ]),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "updateModal",
          tabindex: "-1",
          "aria-labelledby": "updateModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                {
                  staticClass: "modal-title",
                  attrs: { id: "updateModalLabel" },
                },
                [_vm._v("Actualizando Tarea")]
              ),
              _vm._v(" "),
              _c("button", {
                ref: "Close",
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "modal-body" },
              [
                _vm.errors.length > 0
                  ? _c(
                      "div",
                      {
                        staticClass: "mt-3 alert alert-danger",
                        attrs: { role: "alert" },
                      },
                      _vm._l(_vm.errors, function (error) {
                        return _c(
                          "h6",
                          { key: error, staticClass: "text-center" },
                          [_vm._v(_vm._s(error))]
                        )
                      }),
                      0
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.taskSelected
                  ? [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col text-center" }, [
                          _c("label", [_vm._v("Título")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.taskSelected.title,
                                expression: "taskSelected.title",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: _vm.taskSelected.title },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.taskSelected,
                                  "title",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("label", [_vm._v("Descripción")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.taskSelected.description,
                                expression: "taskSelected.description",
                              },
                            ],
                            staticClass: "form-control",
                            domProps: { value: _vm.taskSelected.description },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.taskSelected,
                                  "description",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("label", [_vm._v("Prioridad")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.taskSelected.priority,
                                  expression: "taskSelected.priority",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.taskSelected,
                                    "priority",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            [
                              _c("option", { domProps: { value: null } }, [
                                _vm._v("Seleccione una..."),
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: 0 } }, [
                                _vm._v("Baja"),
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: 1 } }, [
                                _vm._v("Normal"),
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: 2 } }, [
                                _vm._v("Alta"),
                              ]),
                              _vm._v(" "),
                              _c("option", { domProps: { value: 3 } }, [
                                _vm._v("Urgente"),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("label", [_vm._v("Estatus")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.taskSelected.status,
                                  expression: "taskSelected.status",
                                },
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function ($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function (o) {
                                      return o.selected
                                    })
                                    .map(function (o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.taskSelected,
                                    "status",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                              },
                            },
                            [
                              _c("option", { domProps: { value: null } }, [
                                _vm._v("Seleccione uno..."),
                              ]),
                              _vm._v(" "),
                              _vm._l(_vm.tasksStatuses, function (taskStatus) {
                                return _c(
                                  "option",
                                  {
                                    key: taskStatus.id,
                                    domProps: { value: taskStatus },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(taskStatus.name) +
                                        "\n                                    "
                                    ),
                                  ]
                                )
                              }),
                            ],
                            2
                          ),
                        ]),
                      ]),
                    ]
                  : _vm._e(),
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-bs-dismiss": "modal" },
                },
                [_vm._v("Cancelar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.updateTask.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Actualizar")]
              ),
            ]),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);