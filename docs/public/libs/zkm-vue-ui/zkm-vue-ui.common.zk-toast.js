((typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] || []).push([[38],{

/***/ "281d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6817":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_0d37450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("281d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_0d37450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_0d37450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_id_0d37450c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7867":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e52a029c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/toast/src/toast.vue?vue&type=template&id=0d37450c&scoped=true&
var toastvue_type_template_id_0d37450c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('zk-popup-layer',{attrs:{"placement":_vm.placement,"prop-up":true,"modal":false,"append-to-body":false,"visible":_vm.visible},on:{"transitionend":_vm.handleTransitionend}},[_c('div',{class:['zk-toast', ("zk-toast-" + _vm.placement), _vm.toastClass],style:(_vm.toastStyle)},[_c('span',{staticClass:"zk-toast-text"},[_vm._t("default",[_vm._v(_vm._s(_vm.message))])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/toast/src/toast.vue?vue&type=template&id=0d37450c&scoped=true&

// EXTERNAL MODULE: ./packages/components/global/popup-layer/index.js + 6 modules
var popup_layer = __webpack_require__("2bf3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/toast/src/toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name: 'ZkToast',
  components: {
    'zk-popup-layer': popup_layer["default"]
  },
  props: {
    message: {
      type: String,
      default: '这是一条信息'
    },
    visible: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'center'
    },
    toastClass: {},
    toastStyle: {}
  },
  methods: {
    handleTransitionend: function handleTransitionend(event) {
      this.$emit('transitionend', event);
    }
  }
});
// CONCATENATED MODULE: ./packages/components/global/toast/src/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/toast/src/toast.vue?vue&type=style&index=0&id=0d37450c&lang=scss&scoped=true&
var toastvue_type_style_index_0_id_0d37450c_lang_scss_scoped_true_ = __webpack_require__("6817");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/toast/src/toast.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_toastvue_type_script_lang_js_,
  toastvue_type_template_id_0d37450c_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "0d37450c",
  null
  
)

/* harmony default export */ var toast = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/toast/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast_toast; });
/* concated harmony reexport Toast */__webpack_require__.d(__webpack_exports__, "Toast", function() { return toast; });




toast.install = function (Vue) {
  Vue.component(toast.name, toast);
};

var ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  render: function render(h) {
    return h(toast, {
      props: {
        visible: this.visible,
        message: this.message
      },
      on: {
        transitionend: this.handleTransitionend
      }
    });
  },
  data: function data() {
    return {
      visible: false,
      message: '这是一条信息',
      duration: 3000,
      timer: null
    };
  },
  methods: {
    handleTransitionend: function handleTransitionend() {
      if (!this.visible) {
        this.destroyElement();
      }
    },
    handleClose: function handleClose() {
      this.visible = false;
    },
    destroyElement: function destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.visible = true;

    if (this.duration > 0) {
      this.timer = setTimeout(this.handleClose, this.duration);
    }

    setTimeout(function () {
      return window.addEventListener('click', _this.handleClose, false);
    }, 0);
  },
  destroyed: function destroyed() {
    clearTimeout(this.timer);
    window.removeEventListener('click', this.handleClose);
  }
});

function toast_toast(options) {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  var instance = new ToastConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
}

toast.toast = toast_toast;

/* harmony default export */ var global_toast = __webpack_exports__["default"] = (toast);

/***/ })

}]);