((typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpzk_vue_ui"] || []).push([[13],{

/***/ "2e08":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__("9def");
var repeat = __webpack_require__("9744");
var defined = __webpack_require__("be13");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "3315":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"26943976-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/countdown/src/countdown.vue?vue&type=template&id=a311940c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"zk-countdown"},[_vm._t("default",[_c('span',[_vm._v(_vm._s(_vm.days))]),_c('span',[_vm._v("天")]),_c('span',[_vm._v(_vm._s(_vm._f("pad0")(_vm.hours)))]),_c('span',[_vm._v("时")]),_c('span',[_vm._v(_vm._s(_vm._f("pad0")(_vm.minutes)))]),_c('span',[_vm._v("分")]),_c('span',[_vm._v(_vm._s(_vm._f("pad0")(_vm.second)))]),_c('span',[_vm._v("秒")])],{"days":_vm.days,"hours":_vm.hours,"minutes":_vm.minutes,"second":_vm.second})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/global/countdown/src/countdown.vue?vue&type=template&id=a311940c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.pad-start.js
var es7_string_pad_start = __webpack_require__("f576");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/global/countdown/src/countdown.vue?vue&type=script&lang=js&



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
/* harmony default export */ var countdownvue_type_script_lang_js_ = ({
  name: 'ZkCountdown',
  props: {
    date: {
      type: [String, Number, Date],
      required: true
    }
  },
  data: function data() {
    var secondTimestamp = 1000;
    var minuteTimestamp = 60 * secondTimestamp;
    var hourTimestamp = 60 * minuteTimestamp;
    var dayTimestamp = 24 * hourTimestamp;
    return {
      secondTimestamp: secondTimestamp,
      minuteTimestamp: minuteTimestamp,
      hourTimestamp: hourTimestamp,
      dayTimestamp: dayTimestamp,
      dateObject: new Date(),
      diffmo: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0
    };
  },
  watch: {
    date: 'startTimer'
  },
  filters: {
    pad0: function pad0(value, number) {
      return String(value).padStart(number || 2, '0');
    }
  },
  methods: {
    toDate: function toDate(dateString) {
      if (typeof dateString === 'string') {
        return new Date(dateString.replace(/-/g, '/'));
      }

      return new Date(dateString);
    },
    startTimer: function startTimer() {
      this.timer = setInterval(this.calculationTimer, 1000);
      this.calculationTimer();
    },
    calculationTimer: function calculationTimer() {
      if (typeof this.date === 'undefined') return;
      this.dateObject = this.toDate(this.date);
      this.diffmo = new Date(this.dateObject) - new Date();
      this.days = Math.floor(this.diffmo / this.dayTimestamp);
      this.hours = Math.floor(this.diffmo % this.dayTimestamp / this.hourTimestamp);
      this.minutes = Math.floor(this.diffmo % this.hourTimestamp / this.minuteTimestamp);
      this.second = Math.floor(this.diffmo % this.minuteTimestamp / this.secondTimestamp);
      if (this.days < 0) this.days = 0;
      if (this.hours < 0) this.hours = 0;
      if (this.minutes < 0) this.minutes = 0;
      if (this.second < 0) this.second = 0;
      if (this.diffmo < 0) clearInterval(this.timer);
    }
  },
  created: function created() {
    this.startTimer();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
});
// CONCATENATED MODULE: ./packages/components/global/countdown/src/countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_countdownvue_type_script_lang_js_ = (countdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/components/global/countdown/src/countdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_countdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a311940c",
  null
  
)

/* harmony default export */ var countdown = (component.exports);
// CONCATENATED MODULE: ./packages/components/global/countdown/index.js



countdown.install = function (Vue) {
  Vue.component(countdown.name, countdown);
};

/* harmony default export */ var global_countdown = __webpack_exports__["default"] = (countdown);

/***/ }),

/***/ "9744":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "f576":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__("5ca1");
var $pad = __webpack_require__("2e08");
var userAgent = __webpack_require__("a25f");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ })

}]);
//# sourceMappingURL=zk-vue-ui.common.zk-countdown.js.map