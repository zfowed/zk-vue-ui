((typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzkm_vue_ui"] || []).push([[18],{

/***/ "96bd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_style_index_0_id_18491148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f08a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_style_index_0_id_18491148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_style_index_0_id_18491148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_style_index_0_id_18491148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bd40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-upload/src/image-upload.vue?vue&type=template&id=18491148&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['zk-image-upload', { 'zk-image-upload-loading': _vm.isUpload }]},[_c('div',{staticClass:"zk-image-upload-progress"},[_c('div',{staticClass:"zk-progress",style:(("padding-top: " + _vm.uploadProgress + "%;"))},[_c('div',{staticClass:"zk-progress-bar"}),_c('div',{staticClass:"zk-progress-text"},[_c('span',[_vm._v(_vm._s(_vm.uploadProgress)+"%")])])])]),_c('zk-image-select',{ref:"imageSelect",attrs:{"view-src-list":_vm.viewSrcList,"options":_vm.currentOptions,"readonly":_vm.readonly,"cover":_vm.cover},on:{"change-file":_vm.changeFile},model:{value:(_vm.src),callback:function ($$v) {_vm.src=$$v},expression:"src"}},[_vm._t("label",null,{"slot":"label"}),(!_vm.$slots['upload-label'])?_vm._t("default",[_vm._v("重新上传")],{"slot":"select-label"}):_vm._t("upload-label",null,{"slot":"select-label"})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/web/image-upload/src/image-upload.vue?vue&type=template&id=18491148&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./packages/components/web/image-select/index.js + 5 modules
var image_select = __webpack_require__("7191");

// EXTERNAL MODULE: ./packages/components/web/message-box/index.js + 5 modules
var message_box = __webpack_require__("c440");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/web/image-upload/src/image-upload.vue?vue&type=script&lang=js&

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


var msgbox = message_box["a" /* MessageBox */].msgbox;
/* harmony default export */ var image_uploadvue_type_script_lang_js_ = ({
  name: 'ZkImageUpload',
  components: {
    'zk-image-select': image_select["default"]
  },
  props: {
    value: String,
    options: Object,
    viewSrcList: Array,
    readonly: {
      type: Boolean,
      required: false
    },
    cover: {
      type: Boolean,
      required: false
    },
    httpRequest: {
      type: Function,
      required: true
    }
  },
  data: function data() {
    return {
      src: this.value,
      currentValue: this.value,
      isUpload: false,
      uploadProgress: 0
    };
  },
  computed: {
    currentOptions: function currentOptions() {
      return Object.assign({}, this.options || {});
    }
  },
  watch: {
    value: function value() {
      this.src = this.value;
      this.currentValue = this.value;
    },
    currentValue: function currentValue() {
      if (!this.currentValue) {
        this.$emit('upload-result', undefined);
      }

      this.$emit('input', this.currentValue);
    }
  },
  methods: {
    changeFile: function changeFile(file) {
      var _this = this;

      if (!file) {
        this.currentValue = '';
        return;
      }

      this.uploadProgress = 0;
      this.isUpload = true;
      this.httpRequest({
        data: {
          file: file
        },
        onProgress: function onProgress(e) {
          _this.uploadProgress = e.loaded / e.total * 100 | 0;
        },
        onSuccess: function onSuccess(result) {
          _this.currentValue = result;
          _this.src = _this.currentValue;
          _this.isUpload = false;
        },
        onError: function onError(error) {
          _this.currentValue = '';
          _this.src = '';
          _this.isUpload = false;
          msgbox.alert(String(error) || '上传失败，请检查网络是否再正常，再重新上传。', '上传失败', {
            closeOnClickModal: true,
            confirmButtonText: '重新上传',
            callback: function callback(action) {
              if (!_this.$refs.imageSelect) return;
              if (action !== 'confirm') return;
              return _this.$refs.imageSelect.selectImage();
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/components/web/image-upload/src/image-upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_uploadvue_type_script_lang_js_ = (image_uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/web/image-upload/src/image-upload.vue?vue&type=style&index=0&id=18491148&lang=scss&scoped=true&
var image_uploadvue_type_style_index_0_id_18491148_lang_scss_scoped_true_ = __webpack_require__("96bd");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/web/image-upload/src/image-upload.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_image_uploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "18491148",
  null
  
)

/* harmony default export */ var image_upload = (component.exports);
// CONCATENATED MODULE: ./packages/components/web/image-upload/index.js



image_upload.install = function (Vue) {
  Vue.component(image_upload.name, image_upload);
};

/* harmony default export */ var web_image_upload = __webpack_exports__["default"] = (image_upload);

/***/ }),

/***/ "f08a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zkm-vue-ui.common.zk-image-upload.js.map