((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[37],{

/***/ "596a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_line_vue_vue_type_style_index_0_id_634b7192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f5c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_line_vue_vue_type_style_index_0_id_634b7192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_line_vue_vue_type_style_index_0_id_634b7192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_text_line_vue_vue_type_style_index_0_id_634b7192_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9f5c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e11d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e52a029c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/text-line/src/text-line.vue?vue&type=template&id=634b7192&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['zk-text-line', {
    'zk-text-line--ellipsis': _vm.clamp === 1,
    'zk-text-line--clamp': _vm.clamp > 1,
  }],style:({
    width: _vm.styleWidth,
    '-webkit-line-clamp': _vm.clamp
  })},[_vm._t("default",[_c('span',{attrs:{"title":_vm.text}},[_vm._v(_vm._s(_vm.text))])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/text-line/src/text-line.vue?vue&type=template&id=634b7192&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/text-line/src/text-line.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var text_linevue_type_script_lang_js_ = ({
  name: 'ZkTextLine',
  componentName: 'ZkTextLine',
  props: {
    width: {
      type: [Number, String]
    },
    clamp: {
      type: Number,
      default: 1
    },
    text: {
      type: String
    }
  },
  computed: {
    styleWidth: function styleWidth() {
      if (typeof this.width === 'number' || /^\d+$/.test(String(this.width))) {
        return "".concat(this.width, "px");
      }

      return this.width || '';
    }
  }
});
// CONCATENATED MODULE: ./packages/components/global/text-line/src/text-line.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_text_linevue_type_script_lang_js_ = (text_linevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/text-line/src/text-line.vue?vue&type=style&index=0&id=634b7192&lang=scss&scoped=true&
var text_linevue_type_style_index_0_id_634b7192_lang_scss_scoped_true_ = __webpack_require__("596a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/text-line/src/text-line.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_text_linevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "634b7192",
  null
  
)

/* harmony default export */ var text_line = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/text-line/index.js



text_line.install = function (Vue) {
  Vue.component(text_line.name, text_line);
};

/* harmony default export */ var global_text_line = __webpack_exports__["default"] = (text_line);

/***/ })

}]);