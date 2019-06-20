((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[17],{

/***/ "20b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e52a029c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/image-container/src/image-container.vue?vue&type=template&id=d3a8361c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['zk-image-container', {
    'zk-image-container--thumbnail': _vm.thumbnail
  }],style:({
    width: _vm.currentWidth,
    height: _vm.currentHeight
  })},[_vm._t("default",[_c('img',{attrs:{"src":_vm.currentSrc,"alt":_vm.alt}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/image-container/src/image-container.vue?vue&type=template&id=d3a8361c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/image-container/src/image-container.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var image_containervue_type_script_lang_js_ = ({
  name: 'ZkImageContainer',
  props: {
    src: {
      type: String
    },
    alt: {},
    thumbnail: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    }
  },
  computed: {
    currentSrc: function currentSrc() {
      return this.src;
    },
    currentWidth: function currentWidth() {
      if (typeof this.width === 'number') return "".concat(this.width, "px");
      return this.width;
    },
    currentHeight: function currentHeight() {
      if (typeof this.height === 'number') return "".concat(this.height, "px");
      return this.height;
    }
  }
});
// CONCATENATED MODULE: ./packages/components/global/image-container/src/image-container.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_containervue_type_script_lang_js_ = (image_containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/image-container/src/image-container.vue?vue&type=style&index=0&id=d3a8361c&lang=scss&scoped=true&
var image_containervue_type_style_index_0_id_d3a8361c_lang_scss_scoped_true_ = __webpack_require__("c761");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/image-container/src/image-container.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_image_containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d3a8361c",
  null
  
)

/* harmony default export */ var image_container = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/image-container/index.js



image_container.install = function (Vue) {
  Vue.component(image_container.name, image_container);
};

/* harmony default export */ var global_image_container = __webpack_exports__["default"] = (image_container);

/***/ }),

/***/ "7709":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c761":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_container_vue_vue_type_style_index_0_id_d3a8361c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7709");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_container_vue_vue_type_style_index_0_id_d3a8361c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_container_vue_vue_type_style_index_0_id_d3a8361c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_container_vue_vue_type_style_index_0_id_d3a8361c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);