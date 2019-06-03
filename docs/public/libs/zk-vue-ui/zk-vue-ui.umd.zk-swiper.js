((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[2],{

/***/ "8e14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/swiper/src/swiper.vue?vue&type=template&id=1cb465f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-container"},[_vm._t("parallax-bg"),_c('div',{class:_vm.classes.wrapperClass},[_vm._t("default")],2),_vm._t("pagination"),_vm._t("button-prev"),_vm._t("button-next"),_vm._t("scrollbar")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper.vue?vue&type=template&id=1cb465f0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./packages/components/global/swiper/src/swiper.css
var swiper = __webpack_require__("e063");

// EXTERNAL MODULE: ./node_modules/swiper/dist/js/swiper.js
var js_swiper = __webpack_require__("d090");
var js_swiper_default = /*#__PURE__*/__webpack_require__.n(js_swiper);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/swiper/src/swiper.vue?vue&type=script&lang=js&


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
// require sources


var Swiper = window.Swiper || js_swiper_default.a; // pollfill

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function value(target, varArgs) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
} // as of swiper 4.0.7
// http://idangero.us/swiper/api/#events


var DEFAULT_EVENTS = ['beforeDestroy', 'slideChange', 'slideChangeTransitionStart', 'slideChangeTransitionEnd', 'slideNextTransitionStart', 'slideNextTransitionEnd', 'slidePrevTransitionStart', 'slidePrevTransitionEnd', 'transitionStart', 'transitionEnd', 'touchStart', 'touchMove', 'touchMoveOpposite', 'sliderMove', 'touchEnd', 'click', 'tap', 'doubleTap', 'imagesReady', 'progress', 'reachBeginning', 'reachEnd', 'fromEdge', 'setTranslate', 'setTransition', 'resize']; // export

/* harmony default export */ var swipervue_type_script_lang_js_ = ({
  name: 'ZkSwiper',
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    globalOptions: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      swiper: null,
      classes: {
        wrapperClass: 'swiper-wrapper'
      }
    };
  },
  ready: function ready() {
    if (!this.swiper) {
      this.mountInstance();
    }
  },
  mounted: function mounted() {
    if (!this.swiper) {
      var setClassName = false;

      for (var className in this.classes) {
        if (this.classes.hasOwnProperty(className)) {
          if (this.options[className]) {
            setClassName = true;
            this.classes[className] = this.options[className];
          }
        }
      }

      setClassName ? this.$nextTick(this.mountInstance) : this.mountInstance();
    }
  },
  activated: function activated() {
    this.update();
  },
  updated: function updated() {
    this.update();
  },
  beforeDestroy: function beforeDestroy() {
    this.$nextTick(function () {
      if (this.swiper) {
        this.swiper.destroy && this.swiper.destroy();
        delete this.swiper;
      }
    });
  },
  methods: {
    update: function update() {
      if (this.swiper) {
        this.swiper.update && this.swiper.update();
        this.swiper.navigation && this.swiper.navigation.update();
        this.swiper.pagination && this.swiper.pagination.render();
        this.swiper.pagination && this.swiper.pagination.update();
      }
    },
    mountInstance: function mountInstance() {
      var swiperOptions = Object.assign({}, this.globalOptions, this.options);
      this.swiper = new Swiper(this.$el, swiperOptions);
      this.bindEvents();
      this.$emit('ready', this.swiper);
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var vm = this;
      DEFAULT_EVENTS.forEach(function (eventName) {
        _this.swiper.on(eventName, function () {
          vm.$emit.apply(vm, [eventName].concat(Array.prototype.slice.call(arguments)));
          vm.$emit.apply(vm, [eventName.replace(/([A-Z])/g, '-$1').toLowerCase()].concat(Array.prototype.slice.call(arguments)));
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swipervue_type_script_lang_js_ = (swipervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_swipervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_swiper = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/swiper/src/swiper-slide.vue?vue&type=template&id=07c58696&
var swiper_slidevue_type_template_id_07c58696_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.slideClass},[_vm._t("default")],2)}
var swiper_slidevue_type_template_id_07c58696_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper-slide.vue?vue&type=template&id=07c58696&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/swiper/src/swiper-slide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var swiper_slidevue_type_script_lang_js_ = ({
  name: 'ZkSwiperSlide',
  data: function data() {
    return {
      slideClass: 'swiper-slide'
    };
  },
  ready: function ready() {
    this.update();
  },
  mounted: function mounted() {
    this.update();

    if (this.$parent && this.$parent.options && this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass;
    }
  },
  updated: function updated() {
    this.update();
  },
  attached: function attached() {
    this.update();
  },
  methods: {
    update: function update() {
      if (this.$parent && this.$parent.swiper) {
        this.$parent.update();
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper-slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swiper_slidevue_type_script_lang_js_ = (swiper_slidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/global/swiper/src/swiper-slide.vue





/* normalize component */

var swiper_slide_component = Object(componentNormalizer["a" /* default */])(
  src_swiper_slidevue_type_script_lang_js_,
  swiper_slidevue_type_template_id_07c58696_render,
  swiper_slidevue_type_template_id_07c58696_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swiper_slide = (swiper_slide_component.exports);
// CONCATENATED MODULE: ./packages/components/global/swiper/index.js
/* concated harmony reexport Swiper */__webpack_require__.d(__webpack_exports__, "Swiper", function() { return src_swiper; });
/* concated harmony reexport SwiperSlide */__webpack_require__.d(__webpack_exports__, "SwiperSlide", function() { return swiper_slide; });



var components = [swiper_slide];

src_swiper.install = function (Vue) {
  Vue.component(src_swiper.name, src_swiper);

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


/* harmony default export */ var global_swiper = __webpack_exports__["default"] = (src_swiper);

/***/ }),

/***/ "e063":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.umd.zk-swiper.js.map