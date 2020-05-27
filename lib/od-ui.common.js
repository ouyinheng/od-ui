module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bb7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_svger_vue_vue_type_style_index_0_id_18415ab7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f56");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_svger_vue_vue_type_style_index_0_id_18415ab7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_svger_vue_vue_type_style_index_0_id_18415ab7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_svger_vue_vue_type_style_index_0_id_18415ab7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0456a7fc-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/button/src/button.vue?vue&type=template&id=3525b020&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{ref:"btn",class:['od-button', _vm.className, _vm.plainName, _vm.shadowName, _vm.iconName, _vm.roundName, _vm.blockName],on:{"touchstart":function($event){return _vm.showRipple($event.touches[0])},"click":function($event){return _vm.showRipple($event)}}},[(_vm.icon)?_c('span',{class:['fa', ("fa-" + _vm.icon)]}):_vm._e(),_c('span',[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./package/button/src/button.vue?vue&type=template&id=3525b020&

// EXTERNAL MODULE: ./node_modules/_timers-browserify@2.0.11@timers-browserify/main.js
var main = __webpack_require__("b27f");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/button/src/button.vue?vue&type=script&lang=js&
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


/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: "OdButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {},
    ripple: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    block: {
      type:Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    className() {
      // if(this.icon&&this.type==='default') {
      //   return ``;
      // } 
      return `od-button--${this.type}`;
    },
    plainName() {
      return this.plain === undefined ? true : this.plain;
    },
    shadowName() {
      return this.shadow === undefined || this.shadow === true ? 'od-shadow' : '';
    },
    iconName() {
      return this.icon ? 'od-icon' : ''
    },
    roundName() {
      return this.round ? 'od-round' : ''
    },
    blockName() {
      return this.block ? 'od-block' : ''
    }
  },
  methods: {
    showRipple(e) {
      this.$emit('click', e)
      if (!this.ripple) return;
      const btn = this.$refs.btn;
      const span = document.createElement("span");
      span.setAttribute("class", "ripple");

      const event = e;
      //  获取鼠标位置
      var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
      var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;
      var wx = btn.offsetWidth;
      x = x - btn.offsetLeft - wx / 2;
      y = y - btn.offsetTop - wx / 2;
      // 添加.ripple元素
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      var firstChild = btn.firstChild;
      if (firstChild) {
        btn.insertBefore(ripple, firstChild);
      } else {
        btn.appendChild(ripple);
      }
      span.style.cssText = `width:${wx}px;height:${wx}px;position:absolute;top:${y}px;left:${x}px;animation: rippleEffect 2s cubic-bezier(0.23, 1, 0.32, 1)`;
      btn.appendChild(span);
      Object(main["setTimeout"])(() => {
        btn.removeChild(span);
      }, 1500);
    }
  }
});

// CONCATENATED MODULE: ./package/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./package/button/src/button.vue?vue&type=style&index=0&lang=scss&
var buttonvue_type_style_index_0_lang_scss_ = __webpack_require__("b31c");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./package/button/src/button.vue






/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./package/button/index.js

src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button)
}
/* harmony default export */ var package_button = (src_button);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0456a7fc-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/toast/src/toast.vue?vue&type=template&id=4073d2de&
var toastvue_type_template_id_4073d2de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['od-toast', _vm.positionName]},[_c('div',[_vm._v("\n    "+_vm._s(_vm.msg)+"\n  ")])])}
var toastvue_type_template_id_4073d2de_staticRenderFns = []


// CONCATENATED MODULE: ./package/toast/src/toast.vue?vue&type=template&id=4073d2de&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/toast/src/toast.vue?vue&type=script&lang=js&
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
  name: 'OdToast',
  computed: {
    positionName() {
      return `od-${this.position}`
    }
  },
  data(){
    return {
      position: 'top',
      msg: ''
    }
  },
  methods: {},
  mounted() {
	// console.log(this.position,this.msg)
  }
});

// CONCATENATED MODULE: ./package/toast/src/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./package/toast/src/toast.vue





/* normalize component */

var toast_component = normalizeComponent(
  src_toastvue_type_script_lang_js_,
  toastvue_type_template_id_4073d2de_render,
  toastvue_type_template_id_4073d2de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toast = (toast_component.exports);
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./package/toast/src/toast.js


let ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(toast);
let instance;
let instances = [];
const Toast =  function(options) {
  options = options || {};
  if(typeof options === 'string') {
    options = {
      msg: options
    }
  }
  instance = new ToastConstructor({
    data: options
  })
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instances.push(instance);
  setTimeout(() => {
    // if()
    // console.log(instance.$el)
      document.body.removeChild(instance.$el);
  }, 3000)
  return instance;
};
['top', 'bottom'].forEach(item => {
  Toast[item] = options => {
    if (typeof options === 'string') {
      options = {
        msg: options
      };
    }
    options.position = item;
    return Toast(options);
  };
})
/* harmony default export */ var src_toast = (Toast);
// CONCATENATED MODULE: ./package/toast/index.js


/* harmony default export */ var package_toast = (src_toast);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0456a7fc-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/drawer/src/drawer.vue?vue&type=template&id=1a74c737&
var drawervue_type_template_id_1a74c737_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"od-drawer"},[(_vm.drawerVisibility)?_c('div',{staticClass:"modelColor",on:{"click":_vm.cancel}}):_vm._e(),_c('transition',{attrs:{"name":_vm.transition,"mode":"out-in"}},[(_vm.drawerVisibility)?_c('div',{staticClass:"search-drawer",on:{"click":_vm.cancel}},[_c('div',{staticClass:"drawer-section",on:{"click":function($event){$event.stopPropagation();}}},[_vm._t("content")],2),_c('div',{staticClass:"drawer-footer",on:{"click":function($event){$event.stopPropagation();}}},[_vm._t("footer")],2)]):_vm._e()])],1)}
var drawervue_type_template_id_1a74c737_staticRenderFns = []


// CONCATENATED MODULE: ./package/drawer/src/drawer.vue?vue&type=template&id=1a74c737&

// EXTERNAL MODULE: ./package/drawer/src/drawer.scss
var drawer = __webpack_require__("56ad");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/drawer/src/drawer.vue?vue&type=script&lang=js&
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


/* harmony default export */ var drawervue_type_script_lang_js_ = ({
	name: 'od-drawer',
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value(val) {
			this.drawerVisibility = val;
		}
	},
	data() {
		return {
			transition: 'page-transfer',
			drawerVisibility: false
		}
	},
	methods: {
        cancel() {
			this.drawerVisibility = !this.drawerVisibility;
			this.$emit('input', this.drawerVisibility) 
        }
	},
	created() {
		console.log(this.value)
	}
});

// CONCATENATED MODULE: ./package/drawer/src/drawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_drawervue_type_script_lang_js_ = (drawervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./package/drawer/src/drawer.vue





/* normalize component */

var drawer_component = normalizeComponent(
  src_drawervue_type_script_lang_js_,
  drawervue_type_template_id_1a74c737_render,
  drawervue_type_template_id_1a74c737_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_drawer = (drawer_component.exports);
// CONCATENATED MODULE: ./package/drawer/index.js
/*
 * @Author: your name
 * @Date: 2020-05-15 14:11:53
 * @LastEditTime: 2020-05-15 14:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\package\drawer\index.js
 */ 

src_drawer.install = function (Vue) {
  Vue.component(src_drawer.name, src_drawer)
}
/* harmony default export */ var package_drawer = (src_drawer);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0456a7fc-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/svger/src/svger.vue?vue&type=template&id=18415ab7&scoped=true&
var svgervue_type_template_id_18415ab7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('svg',{style:({
		stroke: _vm.stroke
	}),attrs:{"width":_vm.width,"height":_vm.height}},[_c('defs',[_c('line',{attrs:{"x1":"10","y1":"10","x2":"22","y2":"22","fill":"red"}}),_c('line',{attrs:{"x1":"10","y1":"22","x2":"22","y2":"10","fill":"red"}}),_c('line',{attrs:{"x1":"0","y1":"6","x2":"12","y2":"6"}}),_c('line',{attrs:{"x1":"6","y1":"0","x2":"6","y2":"12"}}),_c('ellipse',{attrs:{"cx":"83","cy":"83","rx":"40","ry":"40"}}),_c('g',{attrs:{"id":"download"}},[_c('path',{attrs:{"d":"\n\t\t\t\t\tM 18 3\n\t\t\t\t\tL 46 3\n\t\t\t\t\tL 46 40\n\t\t\t\t\tL 61 40\n\t\t\t\t\tL 32 68\n\t\t\t\t\tL 3 40\n\t\t\t\t\tL 18 40\n\t\t\t\t\tZ\n\t\t\t\t"}},[_c('animateMotion',{attrs:{"path":"M50,125 C 100,25 150,225, 200, 125","dur":"4s","fill":"freeze"}})],1)])]),_c('symbol',{attrs:{"id":"downloads","viewBox":"0 0 1030 1030"}},[_c('path',{attrs:{"d":"\n\t\t\t\tM512 32c265.104 0 480 214.896 480 480s-214.896 480-480 480S32 777.104 32 512 246.896 32 512 32z m277.056 305.472a48 48 0 0 0-67.584-6.528L411.104 586.88 310.544 451.52a48 48 0 0 0-77.088 57.264l130.704 175.872a48 48 0 0 0 69.072 8.448l349.296-288a48 48 0 0 0 6.528-67.584z","fill":"green","p-id":"1961"}})]),_c('use',{attrs:{"href":"#downloads","x":"100","y":"100","width":"100","height":"100"}}),_c('use',{attrs:{"href":"#download","x":"100","y":"100","width":"100","height":"100"}})])])}
var svgervue_type_template_id_18415ab7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./package/svger/src/svger.vue?vue&type=template&id=18415ab7&scoped=true&

// EXTERNAL MODULE: ./package/svger/src/right.svg
var right = __webpack_require__("693b");
var right_default = /*#__PURE__*/__webpack_require__.n(right);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/svger/src/svger.vue?vue&type=script&lang=js&
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
//
//
//
//


/* harmony default export */ var svgervue_type_script_lang_js_ = ({
	name: 'od-svger',
	props: {
		width: {
			type: Number,
			default: 520
		},
		height: {
			type: Number,
			default: 520
		},
		stroke: {
			type: String,
			default : 'green'
		}
	},
	data: () => ({
		rightSvg: right_default.a
	})
});

// CONCATENATED MODULE: ./package/svger/src/svger.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_svgervue_type_script_lang_js_ = (svgervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./package/svger/src/svger.vue?vue&type=style&index=0&id=18415ab7&lang=scss&scoped=true&
var svgervue_type_style_index_0_id_18415ab7_lang_scss_scoped_true_ = __webpack_require__("0bb7");

// CONCATENATED MODULE: ./package/svger/src/svger.vue






/* normalize component */

var svger_component = normalizeComponent(
  src_svgervue_type_script_lang_js_,
  svgervue_type_template_id_18415ab7_scoped_true_render,
  svgervue_type_template_id_18415ab7_scoped_true_staticRenderFns,
  false,
  null,
  "18415ab7",
  null
  
)

/* harmony default export */ var svger = (svger_component.exports);
// CONCATENATED MODULE: ./package/svger/index.js

svger.install = function (Vue) {
  Vue.component(svger.name, svger)
}
/* harmony default export */ var package_svger = (svger);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0456a7fc-vue-loader-template"}!./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/popup/src/popup.vue?vue&type=template&id=339411bd&scoped=true&
var popupvue_type_template_id_339411bd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.popupVisible)?_c('div',{staticClass:"od-popup"},[_c('transition',[_c('div',{staticClass:"od-model",on:{"click":_vm.cancel}})]),_c('div',{staticClass:"od-content"},[_vm._t("default")],2)],1):_vm._e()}
var popupvue_type_template_id_339411bd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./package/popup/src/popup.vue?vue&type=template&id=339411bd&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./package/popup/src/popup.vue?vue&type=script&lang=js&
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

/* harmony default export */ var popupvue_type_script_lang_js_ = ({
	name: 'od-popup',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		position: {
			type: String,
			default: 'right'
		},
		style: Object,
		class: String | Object
	},
	watch: {
		value(val) {
			this.popupVisible = val;
		}
	},
	data: () =>({
		popupVisible: false
	}),
	methods: {
		cancel() {
			this.popupVisible = !this.popupVisible;
			this.$emit('input', this.popupVisible)
		}
	}
});

// CONCATENATED MODULE: ./package/popup/src/popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_popupvue_type_script_lang_js_ = (popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./package/popup/src/popup.vue?vue&type=style&index=0&id=339411bd&lang=scss&scoped=true&
var popupvue_type_style_index_0_id_339411bd_lang_scss_scoped_true_ = __webpack_require__("8c5c");

// CONCATENATED MODULE: ./package/popup/src/popup.vue






/* normalize component */

var popup_component = normalizeComponent(
  src_popupvue_type_script_lang_js_,
  popupvue_type_template_id_339411bd_scoped_true_render,
  popupvue_type_template_id_339411bd_scoped_true_staticRenderFns,
  false,
  null,
  "339411bd",
  null
  
)

/* harmony default export */ var popup = (popup_component.exports);
// CONCATENATED MODULE: ./package/popup/index.js

popup.install = function (Vue) {
  Vue.component(popup.name, popup)
}
/* harmony default export */ var package_popup = (popup);
// EXTERNAL MODULE: ./package/theme/index.scss
var theme = __webpack_require__("d5a9");

// CONCATENATED MODULE: ./package/index.js
/*
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-15 14:27:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\package\index.js
 */ 






const components = [
  package_button, package_drawer, package_svger, package_popup
]

const install = function (Vue) {
  // if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = package_toast;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var package_0 = ({
  install,
  Toast: package_toast
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (package_0);



/***/ }),

/***/ "4c39":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "56ad":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "693b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right.5351879c.svg";

/***/ }),

/***/ "7f7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "8c5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_339411bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_339411bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_339411bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_id_339411bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8f56":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9edd":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "b27f":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("de8a");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("9edd")))

/***/ }),

/***/ "b31c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("beb9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "beb9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d5a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "de8a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("9edd"), __webpack_require__("4c39")))

/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ })

/******/ });