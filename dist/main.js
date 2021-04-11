/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ValueChoice_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ValueChoice.vue */ \"./components/ValueChoice.vue\");\n/* harmony import */ var _components_InfoFrame_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/InfoFrame.vue */ \"./components/InfoFrame.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ValueChoice: _components_ValueChoice_vue__WEBPACK_IMPORTED_MODULE_0__.default,\n    InfoFrame: _components_InfoFrame_vue__WEBPACK_IMPORTED_MODULE_1__.default\n  },\n  data: function data() {\n    return {\n      deferredSum: 0,\n      averageSum: 0,\n      percentageOverThousand: 0,\n      percentageOverTenThousand: 0,\n      showFrame: false\n    };\n  },\n  methods: {\n    updateSum: function updateSum(val) {\n      this.deferredSum = val;\n      localStorage.setItem(\"#\".concat(localStorage.length + 1), val);\n    },\n    updateAverage: function updateAverage() {\n      this.averageSum = 0;\n\n      for (var _i = 0, _Object$keys = Object.keys(localStorage); _i < _Object$keys.length; _i++) {\n        var key = _Object$keys[_i];\n        this.averageSum += parseInt(localStorage.getItem(key));\n      }\n\n      this.averageSum = Math.round(this.averageSum / localStorage.length);\n    },\n    updateStats: function updateStats() {\n      var thousand = 0;\n      var tenThousand = 0;\n\n      for (var _i2 = 0, _Object$keys2 = Object.keys(localStorage); _i2 < _Object$keys2.length; _i2++) {\n        var key = _Object$keys2[_i2];\n        var value = parseInt(localStorage.getItem(key));\n\n        if (value > 1000 && value <= 10000) {\n          thousand += 1;\n        } else if (value > 10000) {\n          tenThousand += 1;\n        }\n      }\n\n      this.percentageOverThousand = Math.round(thousand / localStorage.length * 100);\n      this.percentageOverTenThousand = Math.round(tenThousand / localStorage.length * 100);\n    },\n    updatingData: function updatingData(value) {\n      if (value !== 0) {\n        this.showFrame = true;\n        this.updateSum(value);\n        this.updateAverage();\n        this.updateStats();\n      }\n    },\n    hideFrame: function hideFrame() {\n      this.showFrame = false;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./App.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DepositOption_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepositOption.vue */ \"./components/DepositOption.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    deferredSum: {\n      type: Number,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      options: [{\n        rate: 0,\n        noteText: 'если складывать под матрас',\n        popupText: 'В этом мало смысла — такие накопления «съедает» инфляция'\n      }, {\n        rate: 0.0698,\n        noteText: 'если откладывать на депозит',\n        popupText: 'Ставки по вкладам различны в разныхбанках и зависят от многих факторов, в частности, от ключевой ставки Центрального банка РФ¹.',\n        url: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1'\n      }, {\n        rate: 0.7121,\n        noteText: 'если инвестировать в ПИФ «Альфа-Капитала»',\n        popupText: 'Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие. Они решают, когда покупатьи продавать ценные бумаги, чтобыобеспечить инвестиционный доход. Купить или продать паи фонда можнов любой момент².',\n        url: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2'\n      }]\n    };\n  },\n  methods: {\n    total: function total(idx) {\n      var sum = this.deferredSum;\n\n      switch (idx) {\n        case 0:\n          sum = this.deferredSum * 36;\n          break;\n\n        case 1:\n          for (var i = 1; i < 35; i++) {\n            sum += this.deferredSum * Math.pow(1 + this.options[idx].rate / 12, i);\n          }\n\n          break;\n\n        case 2:\n          sum = this.deferredSum * 36 * (this.options[idx].rate + 1);\n          break;\n      }\n\n      return Math.round(sum);\n    }\n  },\n  components: {\n    DepositOption: _DepositOption_vue__WEBPACK_IMPORTED_MODULE_0__.default\n  }\n});\n\n//# sourceURL=webpack:///./components/DepositList.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nfunction removingPopup(item) {\n  item.classList.remove('visible');\n  item.dataset.popupAction = 'removing';\n\n  item.ontransitionend = function () {\n    item.remove();\n  };\n}\n\nwindow.addEventListener('click', function (evt) {\n  var popup = document.querySelector('.info-frame__popup');\n\n  if (popup) {\n    var idx = parseInt(popup.dataset.popupOrder);\n    var btn = document.querySelectorAll('.deposit-option__btn')[idx];\n\n    if (evt.target.closest('div') !== popup && evt.target !== btn && popup && popup.dataset.popupAction !== 'prepending') {\n      removingPopup(popup);\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    countedSum: {\n      type: Number,\n      required: true\n    },\n    noteText: {\n      type: String,\n      required: true\n    },\n    popupText: {\n      type: String,\n      required: true\n    },\n    url: {\n      type: String\n    }\n  },\n  methods: {\n    test: function test(event) {\n      var btn = event.target;\n      var idx = Array.from(document.querySelectorAll('.deposit-option__btn')).indexOf(btn);\n      var parent = btn.closest('.wrapper');\n      var insertedPopup = parent.querySelector('.info-frame__popup');\n\n      if (insertedPopup) {\n        if (parseInt(insertedPopup.dataset.popupOrder) !== idx) {\n          removingPopup(insertedPopup);\n        }\n      }\n\n      if (!insertedPopup || insertedPopup.dataset.popupAction === 'removing') {\n        var bottom = parent.getBoundingClientRect().top + parent.offsetHeight - btn.getBoundingClientRect().top;\n        var left = btn.getBoundingClientRect().left - parent.getBoundingClientRect().left;\n        var right = parent.getBoundingClientRect().right - btn.getBoundingClientRect().right;\n        var popup = document.createElement('div');\n\n        if (!idx) {\n          popup.innerHTML = \"\".concat(this.popupText);\n        } else {\n          popup.innerHTML = \"<a href=\\\"\".concat(this.url, \"\\\" target=\\\"_blank\\\">\").concat(this.popupText, \"</a>\");\n        }\n\n        popup.classList.add('info-frame__popup');\n        popup.dataset.popupAction = 'prepending';\n        setTimeout(function () {\n          popup.classList.add('visible');\n\n          popup.ontransitionend = function () {\n            popup.removeAttribute('data-popup-action');\n          };\n        }, 10);\n\n        if (left < 150) {\n          popup.style.setProperty('--left', \" \".concat(left - 25 - 5 + btn.offsetWidth / 2, \"px\"));\n        } else if (left > parent.offsetWidth - 150) {\n          popup.style.right = \"25px\";\n          popup.style.setProperty('--right', \"\".concat(right - 25 - 5 + btn.offsetWidth / 2, \"px\"));\n        } else {\n          popup.style.left = \"\".concat(left - 150, \"px\");\n          popup.style.setProperty('--left', \" \".concat(150 + btn.offsetWidth / 2 - 5, \"px\"));\n        }\n\n        popup.style.bottom = \"\".concat(bottom + 15, \"px\");\n        popup.dataset.popupOrder = \"\".concat(idx);\n        parent.prepend(popup);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/DepositOption.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DepositList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepositList.vue */ \"./components/DepositList.vue\");\n/* harmony import */ var _UserStats_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserStats.vue */ \"./components/UserStats.vue\");\n/* harmony import */ var _ToggleBtn_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleBtn.vue */ \"./components/ToggleBtn.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    deferredSum: {\n      type: Number,\n      required: true\n    },\n    averageSum: {\n      type: Number,\n      required: true\n    },\n    percentageOverThousand: {\n      type: Number,\n      required: true\n    },\n    percentageOverTenThousand: {\n      type: Number,\n      required: true\n    },\n    frameShown: {\n      type: Boolean,\n      required: true\n    }\n  },\n  components: {\n    DepositList: _DepositList_vue__WEBPACK_IMPORTED_MODULE_0__.default,\n    UserStats: _UserStats_vue__WEBPACK_IMPORTED_MODULE_1__.default,\n    ToggleBtn: _ToggleBtn_vue__WEBPACK_IMPORTED_MODULE_2__.default\n  },\n  data: function data() {\n    return {\n      statsShown: false\n    };\n  },\n  methods: {\n    toggleStatsHeight: function toggleStatsHeight(value) {\n      this.statsShown = value;\n    },\n    enter_frame: function enter_frame(el) {\n      var width = getComputedStyle(el).width;\n      el.style.width = width;\n      el.style.position = 'absolute';\n      el.style.visibility = 'hidden';\n      el.style.height = 'auto';\n      var height = getComputedStyle(el).height;\n      el.style.width = null;\n      el.style.position = null;\n      el.style.visibility = null;\n      el.style.height = 0;\n      getComputedStyle(el).height;\n      requestAnimationFrame(function () {\n        el.style.height = height;\n      });\n    },\n    afterEnter_frame: function afterEnter_frame(el) {\n      el.style.height = 'auto';\n      el.style.opacity = '1';\n      var top = el.offsetTop;\n      scrollTo({\n        top: top,\n        behavior: 'smooth'\n      });\n    },\n    leave_frame: function leave_frame(el) {\n      var height = getComputedStyle(el).height;\n      el.style.height = height;\n      getComputedStyle(el).height;\n      requestAnimationFrame(function () {\n        el.style.height = 0;\n        el.style.opacity = 0;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/InfoFrame.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    opened: {\n      type: Boolean,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      btnText: ['А как в среднем у читателей vc.ru', 'Свернуть'],\n      isOpened: this.opened\n    };\n  },\n  methods: {\n    updateBtn: function updateBtn() {\n      this.isOpened = !this.isOpened;\n      this.$emit('toggle-height', this.isOpened);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/ToggleBtn.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_css_donut_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-css-donut-chart */ \"../node_modules/vue-css-donut-chart/dist/vcdonut.common.js\");\n/* harmony import */ var vue_css_donut_chart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_css_donut_chart__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_css_donut_chart_dist_vcdonut_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-css-donut-chart/dist/vcdonut.css */ \"../node_modules/vue-css-donut-chart/dist/vcdonut.css\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-property-decorator */ \"../node_modules/vue-property-decorator/lib/vue-property-decorator.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue_property_decorator__WEBPACK_IMPORTED_MODULE_2__.Vue.use((vue_css_donut_chart__WEBPACK_IMPORTED_MODULE_0___default()));\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    averageSum: {\n      type: Number,\n      required: true\n    },\n    percentageOverThousand: {\n      type: Number,\n      required: true\n    },\n    percentageOverTenThousand: {\n      type: Number,\n      required: true\n    },\n    statsShown: {\n      type: Boolean,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      image: 'assets/img/average-1.svg'\n    };\n  },\n  watch: {\n    averageSum: function averageSum() {\n      if (this.averageSum <= 10000) {\n        this.image = 'assets/img/average-1.svg';\n      } else if (this.averageSum > 11000 && this.averageSum <= 20000) {\n        this.image = 'assets/img/average-2.svg';\n      } else if (this.averageSum > 21000 && this.averageSum <= 30000) {\n        this.image = 'assets/img/average-3.svg';\n      } else if (this.averageSum > 31000 && this.averageSum <= 40000) {\n        this.image = 'assets/img/average-4.svg';\n      } else if (this.averageSum > 41000 && this.averageSum <= 50000) {\n        this.image = 'assets/img/average-5.svg';\n      }\n    }\n  },\n  methods: {\n    enter_stats: function enter_stats(el) {\n      var width = getComputedStyle(el).width;\n      el.style.width = width;\n      el.style.position = 'absolute';\n      el.style.visibility = 'hidden';\n      el.style.height = 'auto';\n      var height = getComputedStyle(el).height;\n      el.style.width = null;\n      el.style.position = null;\n      el.style.visibility = null;\n      el.style.height = 0;\n      getComputedStyle(el).height;\n      requestAnimationFrame(function () {\n        el.style.height = height;\n      });\n    },\n    afterEnter_stats: function afterEnter_stats(el) {\n      el.style.height = 'auto';\n      scrollTo({\n        top: el.offsetTop,\n        behavior: 'smooth'\n      });\n    },\n    leave_stats: function leave_stats(el) {\n      var height = getComputedStyle(el).height;\n      el.style.height = height;\n      getComputedStyle(el).height;\n      requestAnimationFrame(function () {\n        el.style.height = 0;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/UserStats.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slider-component */ \"../node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js\");\n/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      limits: [0, 50000],\n      value: 0\n    };\n  },\n  components: {\n    VueSlider: (vue_slider_component__WEBPACK_IMPORTED_MODULE_0___default())\n  },\n  methods: {\n    passValue: function passValue() {\n      this.$emit('pass-value', this.value);\n    },\n    onDrag: function onDrag() {\n      this.$emit('dragging-value');\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/ValueChoice.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./assets/img/images.js":
/*!******************************!*\
  !*** ./assets/img/images.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _average_average_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./average/average-1.svg */ \"./assets/img/average/average-1.svg\");\n/* harmony import */ var _average_average_1_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_average_average_1_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _average_average_2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./average/average-2.svg */ \"./assets/img/average/average-2.svg\");\n/* harmony import */ var _average_average_2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_average_average_2_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _average_average_3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./average/average-3.svg */ \"./assets/img/average/average-3.svg\");\n/* harmony import */ var _average_average_3_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_average_average_3_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _average_average_4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./average/average-4.svg */ \"./assets/img/average/average-4.svg\");\n/* harmony import */ var _average_average_4_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_average_average_4_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _average_average_5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./average/average-5.svg */ \"./assets/img/average/average-5.svg\");\n/* harmony import */ var _average_average_5_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_average_average_5_svg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./assets/img/images.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _assets_img_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/images.js */ \"./assets/img/images.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ \"./App.vue\");\n\n\n\nvar Vue = __webpack_require__(/*! vue */ \"../node_modules/vue/dist/vue.js\");\n\n\nvar app = new Vue({\n  el: '#app',\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_2__.default);\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/img/average/average-1.svg":
/*!******************************************!*\
  !*** ./assets/img/average/average-1.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"assets/img/average-1.svg\";\n\n//# sourceURL=webpack:///./assets/img/average/average-1.svg?");

/***/ }),

/***/ "./assets/img/average/average-2.svg":
/*!******************************************!*\
  !*** ./assets/img/average/average-2.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"assets/img/average-2.svg\";\n\n//# sourceURL=webpack:///./assets/img/average/average-2.svg?");

/***/ }),

/***/ "./assets/img/average/average-3.svg":
/*!******************************************!*\
  !*** ./assets/img/average/average-3.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"assets/img/average-3.svg\";\n\n//# sourceURL=webpack:///./assets/img/average/average-3.svg?");

/***/ }),

/***/ "./assets/img/average/average-4.svg":
/*!******************************************!*\
  !*** ./assets/img/average/average-4.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"assets/img/average-4.svg\";\n\n//# sourceURL=webpack:///./assets/img/average/average-4.svg?");

/***/ }),

/***/ "./assets/img/average/average-5.svg":
/*!******************************************!*\
  !*** ./assets/img/average/average-5.svg ***!
  \******************************************/
/***/ (function(module) {

eval("module.exports = \"assets/img/average-5.svg\";\n\n//# sourceURL=webpack:///./assets/img/average/average-5.svg?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./App.vue":
/*!*****************!*\
  !*** ./App.vue ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=472cff63& */ \"./App.vue?vue&type=template&id=472cff63&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./App.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.render,\n  _App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./components/DepositList.vue":
/*!************************************!*\
  !*** ./components/DepositList.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepositList.vue?vue&type=template&id=3472d051& */ \"./components/DepositList.vue?vue&type=template&id=3472d051&\");\n/* harmony import */ var _DepositList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepositList.vue?vue&type=script&lang=js& */ \"./components/DepositList.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _DepositList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__.render,\n  _DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/DepositList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/DepositList.vue?");

/***/ }),

/***/ "./components/DepositOption.vue":
/*!**************************************!*\
  !*** ./components/DepositOption.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DepositOption.vue?vue&type=template&id=5e1249e8& */ \"./components/DepositOption.vue?vue&type=template&id=5e1249e8&\");\n/* harmony import */ var _DepositOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DepositOption.vue?vue&type=script&lang=js& */ \"./components/DepositOption.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _DepositOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__.render,\n  _DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/DepositOption.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/DepositOption.vue?");

/***/ }),

/***/ "./components/InfoFrame.vue":
/*!**********************************!*\
  !*** ./components/InfoFrame.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoFrame.vue?vue&type=template&id=e6a3c1d8& */ \"./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8&\");\n/* harmony import */ var _InfoFrame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoFrame.vue?vue&type=script&lang=js& */ \"./components/InfoFrame.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _InfoFrame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__.render,\n  _InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/InfoFrame.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/InfoFrame.vue?");

/***/ }),

/***/ "./components/ToggleBtn.vue":
/*!**********************************!*\
  !*** ./components/ToggleBtn.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleBtn.vue?vue&type=template&id=26e2fb9d& */ \"./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d&\");\n/* harmony import */ var _ToggleBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleBtn.vue?vue&type=script&lang=js& */ \"./components/ToggleBtn.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _ToggleBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__.render,\n  _ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/ToggleBtn.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/ToggleBtn.vue?");

/***/ }),

/***/ "./components/UserStats.vue":
/*!**********************************!*\
  !*** ./components/UserStats.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserStats.vue?vue&type=template&id=e5950a6e& */ \"./components/UserStats.vue?vue&type=template&id=e5950a6e&\");\n/* harmony import */ var _UserStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserStats.vue?vue&type=script&lang=js& */ \"./components/UserStats.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _UserStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__.render,\n  _UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/UserStats.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/UserStats.vue?");

/***/ }),

/***/ "./components/ValueChoice.vue":
/*!************************************!*\
  !*** ./components/ValueChoice.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ValueChoice.vue?vue&type=template&id=2f915b67& */ \"./components/ValueChoice.vue?vue&type=template&id=2f915b67&\");\n/* harmony import */ var _ValueChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValueChoice.vue?vue&type=script&lang=js& */ \"./components/ValueChoice.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _ValueChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__.render,\n  _ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/ValueChoice.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/ValueChoice.vue?");

/***/ }),

/***/ "./App.vue?vue&type=script&lang=js&":
/*!******************************************!*\
  !*** ./App.vue?vue&type=script&lang=js& ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./components/DepositList.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./components/DepositList.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepositList.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/DepositList.vue?");

/***/ }),

/***/ "./components/DepositOption.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./components/DepositOption.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepositOption.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/DepositOption.vue?");

/***/ }),

/***/ "./components/InfoFrame.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./components/InfoFrame.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoFrame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoFrame.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoFrame_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/InfoFrame.vue?");

/***/ }),

/***/ "./components/ToggleBtn.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./components/ToggleBtn.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ToggleBtn.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/ToggleBtn.vue?");

/***/ }),

/***/ "./components/UserStats.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./components/UserStats.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStats.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/UserStats.vue?");

/***/ }),

/***/ "./components/ValueChoice.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./components/ValueChoice.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValueChoice.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueChoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/ValueChoice.vue?");

/***/ }),

/***/ "./App.vue?vue&type=template&id=472cff63&":
/*!************************************************!*\
  !*** ./App.vue?vue&type=template&id=472cff63& ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63&\");\n\n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./components/DepositList.vue?vue&type=template&id=3472d051&":
/*!*******************************************************************!*\
  !*** ./components/DepositList.vue?vue&type=template&id=3472d051& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositList_vue_vue_type_template_id_3472d051___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepositList.vue?vue&type=template&id=3472d051& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=template&id=3472d051&\");\n\n\n//# sourceURL=webpack:///./components/DepositList.vue?");

/***/ }),

/***/ "./components/DepositOption.vue?vue&type=template&id=5e1249e8&":
/*!*********************************************************************!*\
  !*** ./components/DepositOption.vue?vue&type=template&id=5e1249e8& ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DepositOption_vue_vue_type_template_id_5e1249e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DepositOption.vue?vue&type=template&id=5e1249e8& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=template&id=5e1249e8&\");\n\n\n//# sourceURL=webpack:///./components/DepositOption.vue?");

/***/ }),

/***/ "./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8&":
/*!*****************************************************************!*\
  !*** ./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoFrame_vue_vue_type_template_id_e6a3c1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoFrame.vue?vue&type=template&id=e6a3c1d8& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8&\");\n\n\n//# sourceURL=webpack:///./components/InfoFrame.vue?");

/***/ }),

/***/ "./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d&":
/*!*****************************************************************!*\
  !*** ./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleBtn_vue_vue_type_template_id_26e2fb9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ToggleBtn.vue?vue&type=template&id=26e2fb9d& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d&\");\n\n\n//# sourceURL=webpack:///./components/ToggleBtn.vue?");

/***/ }),

/***/ "./components/UserStats.vue?vue&type=template&id=e5950a6e&":
/*!*****************************************************************!*\
  !*** ./components/UserStats.vue?vue&type=template&id=e5950a6e& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserStats_vue_vue_type_template_id_e5950a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserStats.vue?vue&type=template&id=e5950a6e& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=template&id=e5950a6e&\");\n\n\n//# sourceURL=webpack:///./components/UserStats.vue?");

/***/ }),

/***/ "./components/ValueChoice.vue?vue&type=template&id=2f915b67&":
/*!*******************************************************************!*\
  !*** ./components/ValueChoice.vue?vue&type=template&id=2f915b67& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ValueChoice_vue_vue_type_template_id_2f915b67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ValueChoice.vue?vue&type=template&id=2f915b67& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=template&id=2f915b67&\");\n\n\n//# sourceURL=webpack:///./components/ValueChoice.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=472cff63& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"widget\" },\n    [\n      _c(\"div\", { staticClass: \"top-test-block\" }),\n      _vm._v(\" \"),\n      _c(\"value-choice\", {\n        on: { \"dragging-value\": _vm.hideFrame, \"pass-value\": _vm.updatingData }\n      }),\n      _vm._v(\" \"),\n      _c(\"info-frame\", {\n        attrs: {\n          deferredSum: _vm.deferredSum,\n          averageSum: _vm.averageSum,\n          percentageOverThousand: _vm.percentageOverThousand,\n          percentageOverTenThousand: _vm.percentageOverTenThousand,\n          frameShown: _vm.showFrame\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"bottom-test-block\" })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./App.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=template&id=3472d051&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositList.vue?vue&type=template&id=3472d051& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    _vm._l(_vm.options, function(option, index) {\n      return _c(\"deposit-option\", {\n        key: index,\n        attrs: {\n          countedSum: _vm.total(index),\n          noteText: option.noteText,\n          popupText: option.popupText,\n          url: option.url\n        }\n      })\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/DepositList.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=template&id=5e1249e8&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/DepositOption.vue?vue&type=template&id=5e1249e8& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"deposit-option\" }, [\n    _c(\"div\", { staticClass: \"deposit-option__coins\" }),\n    _vm._v(\" \"),\n    _c(\"span\", { staticClass: \"deposit-option__value\" }, [\n      _vm._v(\"\\n    ~ \" + _vm._s(_vm.countedSum + \" ₽\") + \"\\n  \")\n    ]),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"deposit-option__text text\" }, [\n      _vm._v(\"\\n    \" + _vm._s(_vm.noteText) + \"\\n    \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"deposit-option__btn\",\n          attrs: { type: \"button\" },\n          on: { click: _vm.test }\n        },\n        [_vm._v(\"?\")]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/DepositOption.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/InfoFrame.vue?vue&type=template&id=e6a3c1d8& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"transition\",\n    {\n      attrs: { name: \"expand-frame\" },\n      on: {\n        enter: _vm.enter_frame,\n        \"after-enter\": _vm.afterEnter_frame,\n        leave: _vm.leave_frame\n      }\n    },\n    [\n      _vm.frameShown\n        ? _c(\"div\", { staticClass: \"info-frame\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"container\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"wrapper\" },\n                  [\n                    _c(\"h2\", { staticClass: \"info-frame__title title\" }, [\n                      _vm._v(\n                        \"\\n          Вы откладываете \" +\n                          _vm._s(_vm.deferredSum + \" ₽\") +\n                          \" в месяц.\\n          \"\n                      ),\n                      _c(\"br\"),\n                      _vm._v(\n                        \"\\n          За три года вы бы заработали:\\n        \"\n                      )\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"deposit-list\", {\n                      staticClass: \"info-frame__list\",\n                      attrs: { deferredSum: _vm.deferredSum }\n                    })\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _c(\"user-stats\", {\n                  attrs: {\n                    averageSum: _vm.averageSum,\n                    percentageOverThousand: _vm.percentageOverThousand,\n                    percentageOverTenThousand: _vm.percentageOverTenThousand,\n                    statsShown: _vm.statsShown\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"toggle-btn\", {\n                  attrs: { opened: _vm.statsShown },\n                  on: { \"toggle-height\": _vm.toggleStatsHeight }\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"info-frame__info-btns info-btns\" }, [\n                  _c(\"span\", { staticClass: \"info-btns__text text\" }, [\n                    _vm._v(\"\\n          Как начать инвестировать?\\n        \")\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"info-btns__link\",\n                      attrs: {\n                        href: \"https://alfabank.ru/make-money/investments/\",\n                        target: \"_blank\"\n                      }\n                    },\n                    [_vm._v(\"\\n          Узнать\\n        \")]\n                  )\n                ])\n              ],\n              1\n            )\n          ])\n        : _vm._e()\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/InfoFrame.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ToggleBtn.vue?vue&type=template&id=26e2fb9d& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"toggle-btn__container\" }, [\n    _c(\n      \"button\",\n      {\n        staticClass: \"toggle-btn__btn\",\n        class: { opened: this.opened },\n        attrs: { type: \"button\" },\n        on: { click: _vm.updateBtn }\n      },\n      [\n        _c(\"span\", { staticClass: \"text\" }, [\n          _vm._v(_vm._s(_vm.btnText[_vm.opened ? 1 : 0]))\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"svg\",\n          {\n            attrs: {\n              width: \"16\",\n              height: \"7\",\n              viewBox: \"0 0 16 7\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\"\n            }\n          },\n          [\n            _c(\"path\", {\n              attrs: {\n                d: \"M1 1L7.55598 5.95238L14.0892 1\",\n                stroke: \"#FE4D4A\",\n                \"stroke-width\": \"2\",\n                \"stroke-miterlimit\": \"10\",\n                \"stroke-linecap\": \"round\",\n                \"stroke-linejoin\": \"round\"\n              }\n            })\n          ]\n        )\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/ToggleBtn.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=template&id=e5950a6e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/UserStats.vue?vue&type=template&id=e5950a6e& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"transition\",\n    {\n      attrs: { name: \"show-stats\" },\n      on: {\n        enter: _vm.enter_stats,\n        \"after-enter\": _vm.afterEnter_stats,\n        leave: _vm.leave_stats\n      }\n    },\n    [\n      _vm.statsShown\n        ? _c(\"div\", { staticClass: \"user-stats\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"user-stats__average average-value stats-item\" },\n              [\n                _c(\n                  \"div\",\n                  { staticClass: \"stats-item__display average-value__display\" },\n                  [\n                    _c(\"img\", {\n                      staticClass: \"average-value__image\",\n                      attrs: { src: _vm.image, alt: \"\" }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"span\", { staticClass: \"average-value__value\" }, [\n                      _vm._v(\n                        \"\\n          ~ \" +\n                          _vm._s(_vm.averageSum + \" ₽\") +\n                          \"\\n        \"\n                      )\n                    ])\n                  ]\n                ),\n                _vm._v(\" \"),\n                _c(\"p\", { staticClass: \"average-value__text text\" }, [\n                  _vm._v(\n                    \"\\n        в среднем откладывают читатели vc.ru\\n      \"\n                  )\n                ])\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"user-stats__infographics infographics stats-item\"\n              },\n              [\n                _c(\"div\", { staticClass: \"infographics__item\" }, [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"infographics__display stats-item__display\"\n                    },\n                    [\n                      _c(\"vc-donut\", {\n                        staticClass: \"infographics__donut\",\n                        attrs: {\n                          background: \"#FEEBEF\",\n                          foreground: \"#fff\",\n                          total: 100,\n                          size: 126,\n                          thickness: 20,\n                          unit: \"px\",\n                          sections: [\n                            {\n                              value: _vm.percentageOverThousand,\n                              color: \"#FE4D4A\"\n                            }\n                          ]\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"span\", { staticClass: \"infographics__text\" }, [\n                        _vm._v(\n                          \"\\n            \" +\n                            _vm._s(_vm.percentageOverThousand + \" %\") +\n                            \"\\n          \"\n                        )\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"p\", { staticClass: \"average-value__text text\" }, [\n                    _vm._v(\n                      \"\\n          читателей откладывают больше 1000 ₽ в месяц\\n        \"\n                    )\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"infographics__item\" }, [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"infographics__display stats-item__display\"\n                    },\n                    [\n                      _c(\"vc-donut\", {\n                        staticClass: \"infographics__donut\",\n                        attrs: {\n                          background: \"#FEEBEF\",\n                          foreground: \"#fff\",\n                          total: 100,\n                          size: 126,\n                          thickness: 20,\n                          unit: \"px\",\n                          sections: [\n                            {\n                              value: _vm.percentageOverTenThousand,\n                              color: \"#FE4D4A\"\n                            }\n                          ]\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"span\", { staticClass: \"infographics__text\" }, [\n                        _vm._v(\n                          \"\\n            \" +\n                            _vm._s(_vm.percentageOverTenThousand + \" %\") +\n                            \"\\n          \"\n                        )\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"p\", { staticClass: \"average-value__text text\" }, [\n                    _vm._v(\n                      \"\\n          читателей откладывают больше 10 000 ₽ в месяц\\n        \"\n                    )\n                  ])\n                ])\n              ]\n            )\n          ])\n        : _vm._e()\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/UserStats.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=template&id=2f915b67&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/ValueChoice.vue?vue&type=template&id=2f915b67& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"value-choice\" }, [\n    _c(\"div\", { staticClass: \"container\" }, [\n      _c(\"div\", { staticClass: \"wrapper\" }, [\n        _c(\"h2\", { staticClass: \"value-choice__title title\" }, [\n          _vm._v(\"\\n        Сколько денег вы откладываете в месяц?\\n      \")\n        ]),\n        _vm._v(\" \"),\n        _c(\"span\", { staticClass: \"value-choice__text text\" }, [\n          _vm._v(\"\\n        Ответьте и узнаете, сколько копят другие.\\n      \")\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"value-choice__value-range value-range\" },\n          [\n            _c(\"span\", { staticClass: \"value-range__limit\" }, [\n              _vm._v(_vm._s(_vm.limits[0]) + \" ₽\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"vue-slider\", {\n              attrs: {\n                width: \"100%\",\n                height: \"9px\",\n                lazy: true,\n                dotSize: \"25\",\n                min: _vm.limits[0],\n                max: _vm.limits[1]\n              },\n              on: { change: _vm.passValue, dragging: _vm.onDrag },\n              scopedSlots: _vm._u([\n                {\n                  key: \"dot\",\n                  fn: function() {\n                    return [_c(\"div\", { staticClass: \"value-range__dot\" })]\n                  },\n                  proxy: true\n                },\n                {\n                  key: \"tooltip\",\n                  fn: function(ref) {\n                    var value = ref.value\n                    return [\n                      _c(\"div\", { staticClass: \"value-range__tooltip\" }, [\n                        _vm._v(_vm._s(value + \" ₽\"))\n                      ])\n                    ]\n                  }\n                },\n                {\n                  key: \"process\",\n                  fn: function(ref) {\n                    var style = ref.style\n                    return [\n                      _c(\"div\", {\n                        staticClass: \"value-range__process\",\n                        style: [style]\n                      })\n                    ]\n                  }\n                }\n              ]),\n              model: {\n                value: _vm.value,\n                callback: function($$v) {\n                  _vm.value = $$v\n                },\n                expression: \"value\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"span\", { staticClass: \"value-range__limit\" }, [\n              _vm._v(_vm._s(_vm.limits[1]) + \" ₽\")\n            ])\n          ],\n          1\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/ValueChoice.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_vue-css-donut-chart_dist_vcdonut_css-node_modules_vue-css-donut-chart_di-0827ef"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;