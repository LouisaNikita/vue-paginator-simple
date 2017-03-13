(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePaginatorSimple"] = factory();
	else
		root["VuePaginatorSimple"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(2)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  "data-v-7ce5917a",
  /* cssModules */
  null
)
Component.options.__file = "/home/luyi/projects/vue-paginator-simple/src/paginator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] paginator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ce5917a", Component.options)
  } else {
    hotAPI.reload("data-v-7ce5917a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['pageCount', 'initPage'],
    data: function data() {
        return {
            curPage: 1
        };
    },
    created: function created() {
        if (this.initPage !== 1 && this.initPage) {
            this.curPage = this.initPage;
        }
    },

    computed: {
        middlePages: function middlePages() {
            if (this.pageCount <= 2) {
                return 0;
            } else if (this.pageCount > 2 && this.pageCount <= 10) {
                return this.pageCount - 2;
            } else {
                return this.curPage > 999 ? 5 : 8;
            }
        },
        bigLimit: function bigLimit() {
            return this.middlePages > 5 ? this.pageCount - 6 : this.pageCount - 3;
        },
        offset: function offset() {
            if (this.curPage <= 5) {
                return 2;
            } else if (this.curPage >= this.bigLimit) {
                return this.bigLimit - 2;
            } else {
                return this.middlePages > 5 ? this.curPage - 3 : this.curPage - 2;
            }
        }
    },
    methods: {
        page: function page(indexPage) {
            this.$emit('togglePage', indexPage);
            this.curPage = indexPage;
        },
        prevPage: function prevPage() {
            if (this.curPage != 1) {
                this.page(this.curPage - 1);
            }
        },
        nextPage: function nextPage() {
            if (this.curPage != this.pageCount) {
                this.page(this.curPage + 1);
            }
        }
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pagination"
  }, [_c('ul', [(_vm.pageCount > 1) ? _c('li', {
    class: {
      disabled: _vm.curPage == 1
    },
    on: {
      "click": _vm.prevPage
    }
  }, [_vm._v("上一页")]) : _vm._e(), _vm._v(" "), _c('li', {
    class: {
      active: _vm.curPage == 1
    },
    on: {
      "click": function($event) {
        _vm.page(1)
      }
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.curPage > 5 && _vm.pageCount > 10),
      expression: "curPage > 5 && pageCount > 10"
    }],
    staticClass: "ellipsis"
  }, [_vm._v("...")]), _vm._v(" "), _vm._l((_vm.middlePages), function(item, index) {
    return _c('li', {
      class: {
        active: _vm.curPage == index + _vm.offset
      },
      on: {
        "click": function($event) {
          _vm.page(index + _vm.offset)
        }
      }
    }, [_vm._v(_vm._s(index + _vm.offset))])
  }), _vm._v(" "), _c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.curPage < _vm.bigLimit && _vm.pageCount > 10),
      expression: "curPage < bigLimit && pageCount > 10"
    }],
    staticClass: "ellipsis"
  }, [_vm._v("...")]), _vm._v(" "), (_vm.pageCount > 1) ? _c('li', {
    class: {
      active: _vm.curPage == _vm.pageCount
    },
    on: {
      "click": function($event) {
        _vm.page(_vm.pageCount)
      }
    }
  }, [_vm._v(_vm._s(_vm.pageCount))]) : _vm._e(), _vm._v(" "), (_vm.pageCount > 1) ? _c('li', {
    class: {
      disabled: _vm.curPage == _vm.pageCount
    },
    on: {
      "click": _vm.nextPage
    }
  }, [_vm._v("下一页")]) : _vm._e()], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ce5917a", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paginator = __webpack_require__(0);

var _paginator2 = _interopRequireDefault(_paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _paginator2.default;

/***/ })
/******/ ]);
});