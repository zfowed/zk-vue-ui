((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[24],{

/***/ "0db1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "289d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_id_7fbb35f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0db1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_id_7fbb35f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_id_7fbb35f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pagination_vue_vue_type_style_index_0_id_7fbb35f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "feb3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c70534a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/pagination/src/pagination.vue?vue&type=template&id=7fbb35f8&scoped=true&
var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.total)?_c('div',{class:['zk-pagination', ( _obj = {}, _obj[("zk-pagination--" + _vm.align)] = _vm.align, _obj )]},[_c('span',{staticClass:"zk-pagination-total"},[_vm._v("共 "+_vm._s(_vm.total)+" 条")]),(_vm.viewPage > 1)?_c('span',{staticClass:"zk-pagination-prev",on:{"click":function($event){return _vm.goto(_vm.viewPage - 1)}}},[_vm._v("上一页")]):_vm._e(),(_vm.pageNumList[0] !== 1)?[_c('span',{staticClass:"zk-pagination-item",on:{"click":function($event){return _vm.goto(1)}}},[_vm._v("1")]),(_vm.pageNumList[0] !== 2)?_c('span',{staticClass:"zk-pagination-omit"},[_vm._v("...")]):_vm._e()]:_vm._e(),_vm._l((_vm.pageNumList),function(num){return _c('span',{key:num,class:['zk-pagination-item', { 'is-active': _vm.viewPage === num }],on:{"click":function($event){return _vm.goto(num)}}},[_c('span',[_vm._v(_vm._s(num))])])}),(_vm.pageNumList[_vm.pageNumList.length-1] !== _vm.pageCount)?[(_vm.pageNumList[_vm.pageNumList.length-1] !== _vm.pageCount - 1)?_c('span',{staticClass:"zk-pagination-omit"},[_vm._v("...")]):_vm._e(),_c('span',{staticClass:"zk-pagination-item",on:{"click":function($event){return _vm.goto(_vm.pageCount)}}},[_vm._v(_vm._s(_vm.pageCount))])]:_vm._e(),(_vm.viewPage < _vm.pageCount)?_c('span',{staticClass:"zk-pagination-next",on:{"click":function($event){return _vm.goto(_vm.viewPage + 1)}}},[_vm._v("下一页")]):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/web/pagination/src/pagination.vue?vue&type=template&id=7fbb35f8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/pagination/src/pagination.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var paginationvue_type_script_lang_js_ = ({
  name: 'ZkPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageDisplacement: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data: function data() {
    return {
      inputPage: this.currentPage - this.pageDisplacement,
      viewPage: this.currentPage - this.pageDisplacement
    };
  },
  computed: {
    pageCount: function pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
    pageNumList: function pageNumList() {
      var viewPage = this.viewPage;
      var pageCount = this.pageCount;
      var rows = 5;
      var pageNumList = [];

      if (pageCount <= rows) {
        for (var i = 0; i < (rows > pageCount ? pageCount : rows); i++) {
          pageNumList.push(i + 1);
        }
      } else {
        if (viewPage <= Math.floor(rows / 2)) {
          for (var _i = 0; _i < (rows > pageCount ? pageCount : rows); _i++) {
            pageNumList.push(_i + 1);
          }
        } else if (pageCount - viewPage < Math.floor(rows / 2)) {
          for (var _i2 = rows - 1; _i2 >= 0; _i2--) {
            pageNumList.push(pageCount - _i2);
          }
        } else {
          for (var _i3 = Math.floor(rows / 2); _i3 >= 1; _i3--) {
            pageNumList.push(viewPage - _i3);
          }

          pageNumList.push(viewPage);

          for (var _i4 = 1; _i4 <= Math.floor(rows / 2); _i4++) {
            pageNumList.push(viewPage + _i4);
          }
        }
      }

      return pageNumList;
    }
  },
  watch: {
    currentPage: function currentPage() {
      this.inputPage = this.currentPage - this.pageDisplacement;
      this.viewPage = this.currentPage - this.pageDisplacement;
    },
    inputPage: function inputPage(value) {
      if (!value) return;
      value = Math.floor(Number(value));

      if (value > this.pageCount) {
        value = this.pageCount;
      } else if (value < 1) {
        value = 1;
      }

      if (this.inputPage !== value) {
        this.inputPage = value;
      } else {
        var currentPage = value + this.pageDisplacement;
        this.$emit('update:current-page', Number(currentPage));
        this.$emit('current-change', Number(currentPage));

        if (this.viewPage !== value) {
          this.viewPage = value;
        }
      }
    }
  },
  methods: {
    goto: function goto(value) {
      this.inputPage = value;
    }
  }
});
// CONCATENATED MODULE: ./packages/components/web/pagination/src/pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_paginationvue_type_script_lang_js_ = (paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/web/pagination/src/pagination.vue?vue&type=style&index=0&id=7fbb35f8&lang=scss&scoped=true&
var paginationvue_type_style_index_0_id_7fbb35f8_lang_scss_scoped_true_ = __webpack_require__("289d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/web/pagination/src/pagination.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7fbb35f8",
  null
  
)

/* harmony default export */ var pagination = (component.exports);
// CONCATENATED MODULE: ./packages/components/web/pagination/index.js



pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination);
};

/* harmony default export */ var web_pagination = __webpack_exports__["default"] = (pagination);

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.umd.zk-pagination.js.map