((typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] || []).push([[19],{

/***/ "1ec7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-view/src/image-view.vue?vue&type=template&id=286a3c30&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('zk-popup-layer',{attrs:{"visible":_vm.currentVisible,"custom-style":{ width: '100%', height: '100%' }},on:{"update:visible":function($event){_vm.currentVisible=$event}}},[(_vm.visible)?_c('div',{staticClass:"image-view"},[_c('div',{staticClass:"image-view-close",on:{"click":function($event){_vm.currentVisible = false}}}),(!_vm.isRestart)?_c('zk-swiper',{staticClass:"image-swiper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleReady,"slideChange":_vm.handleSlideChange}},_vm._l((_vm.currentSrcList),function(src,index){return _c('zk-swiper-slide',{key:index,staticClass:"image-swiper-slide"},[_c('div',{staticClass:"image-flex"},[_c('img',{attrs:{"src":src}})])])}),1):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentSrcList.length > 1),expression:"currentSrcList.length > 1"}]},[_c('div',{staticClass:"swiper-pagination"}),_c('div',{staticClass:"image-button-prev"}),_c('div',{staticClass:"image-button-next"})])],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=template&id=286a3c30&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./packages/components/global/popup-layer/index.js + 6 modules
var popup_layer = __webpack_require__("2bf3");

// EXTERNAL MODULE: ./packages/components/global/swiper/index.js + 10 modules
var swiper = __webpack_require__("8e14");

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
//
//
//
//
//
//
//
//
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
    'zk-popup-layer': popup_layer["default"],
    'zk-swiper': swiper["Swiper"],
    'zk-swiper-slide': swiper["SwiperSlide"]
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    src: {
      type: String
    },
    srcList: {
      type: Array
    }
  },
  data: function data() {
    return {
      isRestart: false,
      currentIndex: 0,
      swiperOptions: {
        loop: true,
        // 无缝轮播
        grabCursor: true,
        // 开启鼠标的抓手形状
        initialSlide: 0,
        // 初始 index
        freeModeSticky: true,
        // 使得freeMode也能自动贴合。
        autoHeight: true,
        // 自动高度
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          prevEl: '.image-button-prev',
          nextEl: '.image-button-next'
        }
      }
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
      return Array.isArray(this.srcList) ? Object(toConsumableArray["a" /* default */])(this.srcList) : [this.src];
    }
  },
  watch: {
    currentVisible: function currentVisible(visible) {
      if (visible) {
        this.currentIndex = this.getInitIndex();
        this.swiperOptions.initialSlide = this.currentIndex;
      }
    },
    index: 'updateInitIndex',
    currentIndex: function currentIndex(index) {
      this.$emit('update:index', this.currentIndex);
    }
  },
  methods: {
    getInitIndex: function getInitIndex() {
      if (typeof this.index === 'number' && this.currentSrcList[this.index]) {
        return this.index;
      } else if (this.src) {
        return this.currentSrcList.indexOf(this.src);
      }

      return 0;
    },
    updateInitIndex: function updateInitIndex() {
      this.currentIndex = this.getInitIndex();
      this.swiperOptions.initialSlide = this.currentIndex;
    },
    slideTo: function slideTo(index) {
      if (this.swiper && this.currentIndex !== index) return this.swiper.slideToLoop(index);
      this.currentIndex = index;
    },
    handleReady: function handleReady(swiper) {
      this.swiper = swiper;
      this.$emit('ready', this.swiper);
    },
    handleSlideChange: function handleSlideChange() {
      if (!this.swiper) return;
      this.currentIndex = this.swiper.realIndex;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$nextTick(function () {
      if (this.swiper) {
        delete this.swiper;
      }
    });
  }
});
// CONCATENATED MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_viewvue_type_script_lang_js_ = (image_viewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/web/image-view/src/image-view.vue?vue&type=style&index=0&id=286a3c30&lang=scss&scoped=true&
var image_viewvue_type_style_index_0_id_286a3c30_lang_scss_scoped_true_ = __webpack_require__("3654");

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
  "286a3c30",
  null
  
)

/* harmony default export */ var image_view = (component.exports);
// CONCATENATED MODULE: ./packages/components/web/image-view/index.js



image_view.install = function (Vue) {
  Vue.component(image_view.name, image_view);
};

/* harmony default export */ var web_image_view = __webpack_exports__["default"] = (image_view);

/***/ }),

/***/ "3654":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_286a3c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("97d6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_286a3c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_286a3c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_view_vue_vue_type_style_index_0_id_286a3c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "97d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zkm-vue-ui.umd.zk-image-view.js.map