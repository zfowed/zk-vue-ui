((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[21],{

/***/ "1e2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_e4ad9166_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd43");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_e4ad9166_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_e4ad9166_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_vue_vue_type_style_index_0_id_e4ad9166_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ce2c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/notice/src/notice.vue?vue&type=template&id=e4ad9166&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notice",style:(_vm.currentStyle)},[_c('div',{ref:"slot",staticClass:"notice-slot",style:(_vm.currentSlotStyle)},[_c('div',{ref:"slot1",staticClass:"notice-slot-1"},[_vm._t("default")],2),_c('div',{ref:"slot2",staticClass:"notice-slot-2"},[_vm._t("default")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/notice/src/notice.vue?vue&type=template&id=e4ad9166&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/notice/src/notice.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var noticevue_type_script_lang_js_ = ({
  name: 'ZkNotice',
  props: {
    data: {},
    delay: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 600
    },
    row: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      timer: undefined,
      slotsLength: 0,
      childConfig: [],
      currentChildIndex: 0
    };
  },
  computed: {
    currentChildConfig: function currentChildConfig() {
      return this.childConfig[this.currentChildIndex] || null;
    },
    currentStyle: function currentStyle() {
      var config = this.currentChildConfig;
      var height = 0;

      for (var index = 0; index < this.row; index++) {
        var _config = this.childConfig[this.currentChildIndex + index];

        if (_config) {
          height += _config.clientHeight;
        }
      }

      var style = {};

      if (config) {
        style['height'] = "".concat(height, "px");
      }

      return style;
    },
    currentSlotStyle: function currentSlotStyle() {
      var config = this.currentChildConfig;
      var style = {};

      if (config) {
        style['top'] = "-".concat(config.offsetTop, "px");
      }

      if (this.currentChildIndex > 0) {
        style['transition'] = "top ".concat(this.duration / 1000, "s ease");
      }

      return style;
    }
  },
  watch: {
    data: function data() {
      this.$nextTick(this.updateChildConfig);
    },
    currentChildIndex: function currentChildIndex() {
      var _this = this;

      if (this.currentChildIndex === this.slotsLength) {
        setTimeout(function () {
          _this.currentChildIndex = 0;
        }, this.delay / 2);
      }
    },
    delay: 'createdTimer'
  },
  methods: {
    scrollNext: function scrollNext() {
      this.updateChildConfig();
      if (!this.$refs.slot1 || !this.$refs.slot2) return;
      var index = 0;

      if (this.childConfig[this.currentChildIndex + 1]) {
        index = this.currentChildIndex + 1;
      }

      this.currentChildIndex = index;
    },
    updateChildConfig: function updateChildConfig() {
      if (!this.$refs.slot1 || !this.$refs.slot2) return;
      this.slotsLength = this.$refs.slot1.children && this.$refs.slot1.children.length || 0;
      this.childConfig = [].concat(Object(toConsumableArray["a" /* default */])(this.$refs.slot1.children), Object(toConsumableArray["a" /* default */])(this.$refs.slot2.children)).map(function ($el) {
        return {
          clientWidth: $el.clientWidth,
          clientHeight: $el.clientHeight,
          offsetTop: $el.offsetTop
        };
      });
    },
    createdTimer: function createdTimer() {
      this.clearTimer();

      if (this.delay >= this.duration) {
        this.timer = setInterval(this.scrollNext, this.delay);
      }
    },
    clearTimer: function clearTimer() {
      if (this.timer) clearInterval(this.timer);
    }
  },
  created: function created() {
    this.createdTimer();
  },
  mounted: function mounted() {
    this.updateChildConfig();
  },
  destroyed: function destroyed() {
    this.clearTimer();
  }
});
// CONCATENATED MODULE: ./packages/components/global/notice/src/notice.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_noticevue_type_script_lang_js_ = (noticevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/notice/src/notice.vue?vue&type=style&index=0&id=e4ad9166&lang=scss&scoped=true&
var noticevue_type_style_index_0_id_e4ad9166_lang_scss_scoped_true_ = __webpack_require__("1e2b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/notice/src/notice.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_noticevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e4ad9166",
  null
  
)

/* harmony default export */ var notice = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/notice/src/notice-item.vue?vue&type=template&id=65cb239c&
var notice_itemvue_type_template_id_65cb239c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var notice_itemvue_type_template_id_65cb239c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/notice/src/notice-item.vue?vue&type=template&id=65cb239c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/notice/src/notice-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var notice_itemvue_type_script_lang_js_ = ({
  name: 'ZkNoticeItem'
});
// CONCATENATED MODULE: ./packages/components/global/notice/src/notice-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_notice_itemvue_type_script_lang_js_ = (notice_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/global/notice/src/notice-item.vue





/* normalize component */

var notice_item_component = Object(componentNormalizer["a" /* default */])(
  src_notice_itemvue_type_script_lang_js_,
  notice_itemvue_type_template_id_65cb239c_render,
  notice_itemvue_type_template_id_65cb239c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var notice_item = (notice_item_component.exports);
// CONCATENATED MODULE: ./packages/components/global/notice/index.js
/* concated harmony reexport Notice */__webpack_require__.d(__webpack_exports__, "Notice", function() { return notice; });
/* concated harmony reexport NoticeItem */__webpack_require__.d(__webpack_exports__, "NoticeItem", function() { return notice_item; });



var components = [notice_item];

notice.install = function (Vue) {
  Vue.component(notice.name, notice);

  for (var _i = 0, _components = components; _i < _components.length; _i++) {
    var Component = _components[_i];
    Vue.component(Component.name, Component);
  }
};

var _loop = function _loop() {
  var Component = _components2[_i2];

  Component.install = function (Vue) {
    Vue.component(Component.name, Component);
  };
};

for (var _i2 = 0, _components2 = components; _i2 < _components2.length; _i2++) {
  _loop();
}


/* harmony default export */ var global_notice = __webpack_exports__["default"] = (notice);

/***/ }),

/***/ "dd43":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.umd.zk-notice.js.map