((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[19],{

/***/ "1ec7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-view/src/image-view.vue?vue&type=template&id=5b79d62b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('zk-popup-layer',{attrs:{"visible":_vm.currentVisible,"custom-style":{ width: '100%', height: '100%' }},on:{"update:visible":function($event){_vm.currentVisible=$event}}},[_c('div',{staticClass:"image-view-stage"},[_c('div',{staticClass:"image-view-close",on:{"click":function($event){_vm.currentVisible = false}}}),(_vm.currentIndex > 0)?_c('div',{staticClass:"image-view-left",on:{"click":_vm.toLeft}}):_vm._e(),_c('img',{staticClass:"image-view-img",attrs:{"src":_vm.currentSrcList[_vm.currentIndex]}}),(_vm.currentIndex < _vm.currentSrcList.length - 1)?_c('div',{staticClass:"image-view-right",on:{"click":_vm.toRight}}):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=template&id=5b79d62b&scoped=true&

// EXTERNAL MODULE: ./packages/components/global/popup-layer/index.js + 5 modules
var popup_layer = __webpack_require__("2bf3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-view/src/image-view.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var image_viewvue_type_script_lang_js_ = ({
  name: 'ZkImageView',
  components: {
    'zk-popup-layer': popup_layer["default"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    srcList: {
      type: Array
    }
  },
  data: function data() {
    return {
      currentIndex: Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0
    };
  },
  computed: {
    currentVisible: {
      get: function get() {
        return this.visible;
      },
      set: function set(visible) {
        this.$emit('update:visible', visible);
      }
    },
    currentSrcList: function currentSrcList() {
      return Array.isArray(this.srcList) ? this.srcList : [this.src];
    }
  },
  watch: {
    currentVisible: function currentVisible() {
      if (this.currentVisible) {
        this.currentIndex = Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0;
      }
    },
    srcList: function srcList() {
      this.currentIndex = Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0;
    }
  },
  methods: {
    toLeft: function toLeft() {
      if (this.currentSrcList[this.currentIndex - 1]) {
        this.currentIndex -= 1;
      }
    },
    toRight: function toRight() {
      if (this.currentSrcList[this.currentIndex + 1]) {
        this.currentIndex += 1;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_viewvue_type_script_lang_js_ = (image_viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=style&index=0&id=5b79d62b&lang=scss&scoped=true&
var image_viewvue_type_style_index_0_id_5b79d62b_lang_scss_scoped_true_ = __webpack_require__("948a");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/web/image-view/src/image-view.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_image_viewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5b79d62b",
  null
  
)

/* harmony default export */ var image_view = (component.exports);
// CONCATENATED MODULE: ./packages/components/web/image-view/index.js



image_view.install = function (Vue) {
  Vue.component(image_view.name, image_view);
};

/* harmony default export */ var web_image_view = __webpack_exports__["default"] = (image_view);

/***/ }),

/***/ "49bc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "948a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_5b79d62b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("49bc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_5b79d62b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_5b79d62b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_5b79d62b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.common.zk-image-view.js.map