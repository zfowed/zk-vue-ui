((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[25],{

/***/ "0502":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/popover/src/popover.vue?vue&type=template&id=5dad9ad9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:['zk-popover', { 'is-block': _vm.block }]},[_c('div',{ref:"reference",staticClass:"zk-popover-reference",attrs:{"tabindex":_vm.tabindex},on:{"click":_vm.handleClick,"mouseenter":_vm.handleMouseenter,"mouseleave":_vm.handleMouseleave,"mousedown":_vm.handleMousedown,"mouseup":_vm.handleMouseup}},[_vm._t("reference")],2),_c('span',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentValue),expression:"currentValue"}],ref:"popper",class:['zk-popover-popper', _vm.popperClass],style:({ width: _vm.styleWidth }),on:{"mouseenter":_vm.handleMouseenter,"mouseleave":_vm.handleMouseleave}},[_vm._t("default",[_c('span',[_vm._v(_vm._s(_vm.content))])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/popover/src/popover.vue?vue&type=template&id=5dad9ad9&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__("f0bd");

// EXTERNAL MODULE: ./packages/directives/transfer-dom/index.js
var transfer_dom = __webpack_require__("644a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/popover/src/popover.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  name: 'ZkPopover',
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    content: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    placement: {
      type: String,
      default: 'top'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {
          modifiers: {
            preventOverflow: {
              boundariesElement: 'body'
            },
            flip: {
              boundariesElement: 'body'
            },
            computeStyle: {
              gpuAcceleration: false
            }
          }
        };
      }
    },
    popperClass: {
      type: String
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  directives: {
    transferDom: transfer_dom["a" /* default */]
  },
  data: function data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    styleWidth: function styleWidth() {
      if (typeof this.width === 'number' || /^\d+$/.test(String(this.width))) {
        return "".concat(this.width, "px");
      }

      return this.width || '';
    }
  },
  watch: {
    value: function value() {
      this.currentValue = this.value;
    },
    currentValue: function currentValue() {
      var _this = this;

      this.$emit('input', this.currentValue);
      this.$nextTick(function () {
        return _this.updatePopper();
      });
    }
  },
  methods: {
    setCurrentValue: function setCurrentValue(value) {
      if (this.disabled && value) return;
      this.currentValue = value;
    },
    handleClick: function handleClick() {
      if (this.trigger === 'click') {
        this.setCurrentValue(!this.currentValue);
      }
    },
    handleMouseenter: function handleMouseenter() {
      if (this.trigger === 'hover') {
        this.setCurrentValue(true);
      }
    },
    handleMouseleave: function handleMouseleave() {
      if (this.trigger === 'hover') {
        this.setCurrentValue(false);
      }
    },
    handleMousedown: function handleMousedown() {
      if (this.trigger === 'focus') {
        this.setCurrentValue(true);
      }
    },
    handleMouseup: function handleMouseup() {
      if (this.trigger === 'focus') {
        this.setCurrentValue(false);
      }
    },
    handleHide: function handleHide(event) {
      if (this.trigger === 'manual') return;
      event = window.event || event;
      var _this$$refs = this.$refs,
          reference = _this$$refs.reference,
          popper = _this$$refs.popper;
      var path = event.path || event.composedPath && event.composedPath();

      if (path.indexOf(reference) < 0 && path.indexOf(popper) < 0) {
        this.setCurrentValue(false);
      }
    },
    initPopper: function initPopper() {
      this.destroyPopper();
      var _this$$refs2 = this.$refs,
          reference = _this$$refs2.reference,
          popper = _this$$refs2.popper;
      if (!reference || !popper) return;
      this.popper = new esm_popper["a" /* default */](reference, popper, Object.assign({}, this.popperOptions, {
        placement: this.placement,
        // offsets: this.offset,
        removeOnDestroy: true
      }));
    },
    updatePopper: function updatePopper() {
      if (!this.popper) return;
      this.popper.update();
    },
    destroyPopper: function destroyPopper() {
      if (!this.popper) return;
      this.popper.destroy();
      this.popper = null;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.initPopper();
    setTimeout(function () {
      return window.addEventListener('click', _this2.handleHide, false);
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyPopper();
    window.removeEventListener('click', this.handleHide);
  }
});
// CONCATENATED MODULE: ./packages/components/global/popover/src/popover.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/popover/src/popover.vue?vue&type=style&index=0&id=5dad9ad9&lang=scss&scoped=true&
var popovervue_type_style_index_0_id_5dad9ad9_lang_scss_scoped_true_ = __webpack_require__("1e05");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/popover/src/popover.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_popovervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5dad9ad9",
  null
  
)

/* harmony default export */ var popover = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/popover/index.js



popover.install = function (Vue) {
  Vue.component(popover.name, popover);
};

/* harmony default export */ var global_popover = __webpack_exports__["default"] = (popover);

/***/ }),

/***/ "1e05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_5dad9ad9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("250b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_5dad9ad9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_5dad9ad9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_popover_vue_vue_type_style_index_0_id_5dad9ad9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "250b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.common.zk-popover.js.map