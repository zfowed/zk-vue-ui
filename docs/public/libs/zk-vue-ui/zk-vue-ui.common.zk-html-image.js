((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[15],{

/***/ "0dac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c70534a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/html-image/src/html-image.vue?vue&type=template&id=284269f6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"zk-imagehtml-container"},[_c('div',{ref:"html",class:['zk-imagehtml-html', { 'zk-imagehtml-hide': !_vm.loading }],style:({
      width: _vm.parentWidth && (_vm.parentWidth + "px"),
      height: _vm.parentHeight && (_vm.parentHeight + "px")
    })},[_vm._t("default")],2),_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading),expression:"!loading"}],staticClass:"zk-imagehtml-image",attrs:{"src":_vm.src}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/html-image/src/html-image.vue?vue&type=template&id=284269f6&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__("34ef");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./packages/components/global/toast/index.js + 5 modules
var toast = __webpack_require__("7867");

// EXTERNAL MODULE: ./node_modules/html2canvas/dist/html2canvas.js
var html2canvas = __webpack_require__("c0e9");
var html2canvas_default = /*#__PURE__*/__webpack_require__.n(html2canvas);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/html-image/src/html-image.vue?vue&type=script&lang=js&





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
 // import { Loading } from 'element-ui'



function canvasToBata64(canvas) {
  return canvas.toDataURL('image/png');
}

function bata64ToBlob(bata64) {
  var arr = bata64.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], {
    type: mime
  });
}

function blobToUrl(blob) {
  return URL.createObjectURL(blob);
}

/* harmony default export */ var html_imagevue_type_script_lang_js_ = ({
  name: 'ZkHtmlImage',
  props: ['data'],
  data: function data() {
    return {
      status: 'idle',
      src: '',
      parentWidth: undefined,
      parentHeight: undefined
    };
  },
  computed: {
    loading: function loading() {
      return this.status !== 'idle';
    }
  },
  watch: {
    data: {
      deep: true,
      handler: 'update'
    },
    loading: function loading() {
      if (this.loading && this.$el) {// this.$nextTick(() => {
        //   this.loadingInstance = Loading.service({
        //     target: this.$el
        //   })
        // })
      } else {// this.$nextTick(() => {
          //   this.loadingInstance && this.loadingInstance.close()
          // })
        }
    }
  },
  methods: {
    htmlImgLoad: function htmlImgLoad() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var count = 0;
        _this.htmlImgLoadTimer = setInterval(function () {
          count += 1;

          if (_this.$refs.html && !Object(toConsumableArray["a" /* default */])(_this.$refs.html.querySelectorAll('img')).some(function (img) {
            return !img.complete;
          })) {
            count = null;
            clearInterval(_this.htmlImgLoadTimer);
            return setTimeout(resolve, 0);
          } else if (count >= 50) {
            count = null;
            clearInterval(_this.htmlImgLoadTimer);
            return reject(new Error('加载图片超时！'));
          }
        }, 0);
      });
    },
    update: function update() {
      var _this2 = this;

      if (!this.$refs.html) return;
      if (this.status === 'wait') return;

      if (this.status === 'run') {
        this.status = 'wait';
        return;
      }

      this.status = 'run';
      return this.updateSrc().then(function () {
        if (_this2.status === 'wait') {
          _this2.status = 'idle';
          return _this2.update();
        } else {
          _this2.status = 'idle';
        }
      });
    },
    updateSrc: function updateSrc() {
      var _this3 = this;

      if (!this.$refs.html) return;
      if (this.__isUpdateSrc) return;
      this.__isUpdateSrc = true;
      return this.htmlImgLoad().then(function () {
        _this3.parentWidth = _this3.$refs.html.parentNode.clientWidth;
        _this3.parentHeight = _this3.$refs.html.parentNode.clientHeight;
        return html2canvas_default()(_this3.$refs.html, {
          backgroundColor: '#FFFFFF',
          allowTaint: false,
          useCORS: true,
          logging: false
        });
      }).then(function (canvas) {
        var bata64 = canvasToBata64(canvas);
        if (_this3.bata64 === bata64) return;
        _this3.bata64 = bata64;
        var blob = bata64ToBlob(bata64);
        var src = blobToUrl(blob);
        _this3.src = src; // this.src = bata64
      }, function () {
        _this3.src = '';
        Object(toast["b" /* toast */])('加载失败！');
      }).then(function () {
        _this3.__isUpdateSrc = false;
      });
    }
  },
  mounted: function mounted() {
    this.update(); // this.aaaa = setInterval(this.updateSrc, 60)
  },
  destroyed: function destroyed() {
    clearInterval(this.aaaa);
    this.loadingInstance && this.loadingInstance.close();
    this.htmlImgLoadTimer && clearInterval(this.htmlImgLoadTimer);
  }
});
// CONCATENATED MODULE: ./packages/components/global/html-image/src/html-image.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_html_imagevue_type_script_lang_js_ = (html_imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/global/html-image/src/html-image.vue?vue&type=style&index=0&id=284269f6&lang=scss&scoped=true&
var html_imagevue_type_style_index_0_id_284269f6_lang_scss_scoped_true_ = __webpack_require__("8f41");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/html-image/src/html-image.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_html_imagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "284269f6",
  null
  
)

/* harmony default export */ var html_image = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/html-image/index.js



html_image.install = function (Vue) {
  Vue.component(html_image.name, html_image);
};

/* harmony default export */ var global_html_image = __webpack_exports__["default"] = (html_image);

/***/ }),

/***/ "8f41":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_html_image_vue_vue_type_style_index_0_id_284269f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d2b8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_html_image_vue_vue_type_style_index_0_id_284269f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_html_image_vue_vue_type_style_index_0_id_284269f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_html_image_vue_vue_type_style_index_0_id_284269f6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d2b8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.common.zk-html-image.js.map