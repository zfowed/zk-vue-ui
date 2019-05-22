((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[17,19],{

/***/ "031c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ec7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c70534a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-view/src/image-view.vue?vue&type=template&id=5b79d62b&scoped=true&
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

/***/ "4013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_select_vue_vue_type_style_index_0_id_608a0684_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("031c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_select_vue_vue_type_style_index_0_id_608a0684_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_select_vue_vue_type_style_index_0_id_608a0684_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_select_vue_vue_type_style_index_0_id_608a0684_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "49bc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7191":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c70534a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-select/src/image-select.vue?vue&type=template&id=608a0684&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['zk-image-item', {
    'zk-image-item-add': !_vm.currentValue,
    'zk-image-item-readonly': _vm.readonly,
    'zk-image-item-cover': _vm.cover
  }],style:({ width: _vm.width }),attrs:{"tabindex":"0"}},[_c('div',{staticClass:"zk-image-item-box",style:({ 'background-image': ("url(" + _vm.currentValue + ")") }),on:{"click":function () { return _vm.currentValue ? _vm.viewImage() : _vm.selectImage(); }}},[_c('div',{staticClass:"zk-image-item-operating",on:{"click":function($event){$event.stopPropagation();return _vm.selectImage($event)}}},[_vm._t("select-label",[_vm._v("重新选择")])],2),_c('div',{staticClass:"zk-image-item-notval"},[_vm._m(0),(_vm.$slots.label)?_c('div',{staticClass:"zk-image-item-label"},[_vm._t("label")],2):_vm._e()])]),_c('input',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"fileInput",attrs:{"type":"file"}}),(_vm.currentValue)?_c('zk-image-view',{attrs:{"visible":_vm.imageViewVisible,"src":_vm.currentValue,"src-list":_vm.currentViewSrcList},on:{"update:visible":function($event){_vm.imageViewVisible=$event}}}):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-plus"},[_c('span',{staticClass:"icon-plus-line1"}),_c('span',{staticClass:"icon-plus-line2"})])}]


// CONCATENATED MODULE: ./packages/components/web/image-select/src/image-select.vue?vue&type=template&id=608a0684&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./packages/utils/index.js + 12 modules
var utils = __webpack_require__("e74d");

// EXTERNAL MODULE: ./packages/components/web/image-view/index.js + 5 modules
var image_view = __webpack_require__("1ec7");

// EXTERNAL MODULE: ./packages/components/web/message/index.js + 5 modules
var message = __webpack_require__("d92a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-select/src/image-select.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var image_selectvue_type_script_lang_js_ = ({
  name: 'ZkImageSelect',
  components: {
    'zk-image-view': image_view["default"]
  },
  props: {
    value: String,
    options: Object,
    viewSrcList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    readonly: {
      type: Boolean,
      required: false
    },
    cover: {
      type: Boolean,
      required: false
    },
    width: {
      default: '147px'
    }
  },
  data: function data() {
    return {
      currentValue: this.value,
      imageViewVisible: false
    };
  },
  computed: {
    currentOptions: function currentOptions() {
      return Object.assign({
        maxSize: 1048576,
        // 1M
        minSize: 0,
        limitExt: '.jpg,.jpeg,.gif,.png,.bmp'
      }, this.options || {}, {
        accept: 'image/*',
        parseImgBase64: true,
        multiple: false,
        onError: this.onFileSelectionError,
        forcedChange: true
      });
    },
    currentViewSrcList: function currentViewSrcList() {
      return this.viewSrcList.indexOf(this.currentValue) < 0 ? [this.currentValue].concat(Object(toConsumableArray["a" /* default */])(this.viewSrcList)) : this.viewSrcList;
    }
  },
  watch: {
    options: {
      immediate: true,
      handler: 'createSelection'
    },
    value: function value() {
      this.currentValue = this.value;
    }
  },
  methods: {
    createSelection: function createSelection() {
      this.fileSelection = new utils["a" /* FileSelection */](this.currentOptions);
      return this.fileSelection;
    },
    destroyedSelection: function destroyedSelection() {
      if (this.fileSelection) {
        this.fileSelection.destroy();
        this.fileSelection = null;
      }
    },
    onFileSelectionError: function onFileSelectionError(error) {
      switch (error.type) {
        case 'limitExt':
          (function (limitExt) {
            var exts = limitExt.split(',').map(function (item) {
              return item.substring(1);
            }).join('，');
            message["b" /* message */].warning("\u4EC5\u652F\u6301\u4E0A\u4F20 ".concat(exts, " \u683C\u5F0F\u7684\u56FE\u7247\uFF01"));
          })(this.currentOptions.limitExt);

          break;

        case 'maxSize':
          (function (size) {
            var sizeStr = "".concat(size, "\u5B57\u8282");
            var kb = size / 1024;
            var kbstr = kb % 1 === 0 && "".concat(kb, "KB") || null;
            var mb = kb / 1024;
            var mbstr = mb % 1 === 0 && "".concat(mb, "MB") || null;
            message["b" /* message */].warning("\u56FE\u7247\u5927\u5C0F\u5FC5\u987B\u5C0F\u4E8E ".concat(mbstr || kbstr || sizeStr, " \u4EE5\u5185\uFF01"));
          })(this.currentOptions.maxSize);

          break;

        case 'minSize':
          (function (size) {
            var sizeStr = "".concat(size, "\u5B57\u8282");
            var kb = size / 1024;
            var kbstr = kb % 1 === 0 && "".concat(kb, "KB") || null;
            var mb = kb / 1024;
            var mbstr = mb % 1 === 0 && "".concat(mb, "MB") || null;
            message["b" /* message */].warning("\u56FE\u7247\u5927\u5C0F\u5FC5\u987B\u5927\u4E8E ".concat(mbstr || kbstr || sizeStr, " \u4EE5\u5185\uFF01"));
          })(this.currentOptions.maxSize);

          break;

        default:
          message["b" /* message */].error('选择文件出错！');
      }
    },
    selectImage: function selectImage() {
      var _this = this;

      if (this.readonly) return;
      return this.fileSelection.select(function (result) {
        if (result[0]) {
          _this.currentValue = result[0].base64 || undefined;

          _this.$emit('input', _this.currentValue);

          _this.$emit('change-file', result[0].file);
        } else {
          _this.deleteImage();
        }
      });
    },
    deleteImage: function deleteImage() {
      this.currentValue = '';
      this.$emit('input', '');
      this.$emit('change-file', undefined);
    },
    viewImage: function viewImage() {
      if (!this.currentValue) return;
      this.imageViewVisible = true;
    }
  },
  destroyed: function destroyed() {
    this.destroyedSelection();
  }
});
// CONCATENATED MODULE: ./packages/components/web/image-select/src/image-select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_selectvue_type_script_lang_js_ = (image_selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/web/image-select/src/image-select.vue?vue&type=style&index=0&id=608a0684&lang=scss&scoped=true&
var image_selectvue_type_style_index_0_id_608a0684_lang_scss_scoped_true_ = __webpack_require__("4013");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/web/image-select/src/image-select.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_image_selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "608a0684",
  null
  
)

/* harmony default export */ var image_select = (component.exports);
// CONCATENATED MODULE: ./packages/components/web/image-select/index.js



image_select.install = function (Vue) {
  Vue.component(image_select.name, image_select);
};

/* harmony default export */ var web_image_select = __webpack_exports__["default"] = (image_select);

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
//# sourceMappingURL=zk-vue-ui.common.zk-image-select.js.map