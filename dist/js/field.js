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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(20);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('index-emoji-textarea', __webpack_require__(3));
    Vue.component('detail-emoji-textarea', __webpack_require__(6));
    Vue.component('form-emoji-textarea', __webpack_require__(9));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/IndexField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e63f81a", Component.options)
  } else {
    hotAPI.reload("data-v-9e63f81a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resourceName', 'field'],
    mounted: function mounted() {
        this.field.value = this.field.value.substr(0, 30) + "...";
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(_vm._s(_vm.field.value.substr(0, 20)))])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e63f81a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DetailField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0224618e", Component.options)
  } else {
    hotAPI.reload("data-v-0224618e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource', 'resourceName', 'resourceId', 'field']
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "panel-item",
    { attrs: { field: _vm.field } },
    [
      _c(
        "template",
        { slot: "value" },
        [
          _c("excerpt", {
            attrs: {
              content: _vm.field.value,
              "plain-text": true,
              "should-show": _vm.field.shouldShow
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0224618e", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(19)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/FormField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c023248a", Component.options)
  } else {
    hotAPI.reload("data-v-c023248a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("fb94945a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c023248a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FormField.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c023248a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FormField.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\nsvg {\n  fill: #b1c6d0;\n}\n.emojitextarea {\n    position: relative;\n}\n.wrapper {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.emojibutton {\n  position: absolute;\n  z-index: 10;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.emojipicker {\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  left: 510px;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(14)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_nova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_nova__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_emoji_picker__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_emoji_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_v_emoji_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_emoji_picker_data_emojis_json__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_v_emoji_picker_data_emojis_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_v_emoji_picker_data_emojis_json__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_laravel_nova__["FormField"], __WEBPACK_IMPORTED_MODULE_0_laravel_nova__["HandlesValidationErrors"]],

    props: ['resourceName', 'resourceId', 'field'],

    data: function data() {
        return {
            value: "",
            dialogHidden: true
        };
    },


    components: {
        VEmojiPicker: __WEBPACK_IMPORTED_MODULE_1_v_emoji_picker___default.a
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue: function setInitialValue() {
            this.value = this.field.value || '';
        },


        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill: function fill(formData) {
            formData.append(this.field.attribute, this.value || '');
        },


        /**
         * Update the field's internal value.
         */
        handleChange: function handleChange(value) {
            this.value = value;
        },
        toogleDialogEmoji: function toogleDialogEmoji() {
            this.dialogHidden = !this.dialogHidden;
        },
        onSelectEmoji: function onSelectEmoji(dataEmoji) {
            this.value += dataEmoji.emoji;
        }
    },
    computed: {
        emojisNative: function emojisNative() {
            return __WEBPACK_IMPORTED_MODULE_2_v_emoji_picker_data_emojis_json___default.a;
        }
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravel-nova"] = factory();
	else
		root["laravel-nova"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(156);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(65);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(59);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(122);
var toPrimitive = __webpack_require__(142);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    getRawTag = __webpack_require__(188),
    objectToString = __webpack_require__(213);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(197);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isLength = __webpack_require__(73);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(109);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(42);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(42);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(113);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(65);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(170),
    getValue = __webpack_require__(189);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Errors = __webpack_require__(66);

Object.defineProperty(exports, 'Errors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(101);
var buildURL = __webpack_require__(104);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(108);
var createError = __webpack_require__(45);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(103);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(106);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(100);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardSizes = exports.SingularOrPlural = exports.Minimum = exports.Capitalize = exports.Inflector = exports.Errors = exports.TogglesTrashed = exports.PerPageable = exports.PerformsSearches = exports.Paginatable = exports.InteractsWithResourceInformation = exports.InteractsWithQueryString = exports.InteractsWithDates = exports.HasCards = exports.HandlesValidationErrors = exports.FormField = exports.Filterable = exports.Deletable = exports.BehavesAsPanel = undefined;

var _BehavesAsPanel = __webpack_require__(77);

var _BehavesAsPanel2 = _interopRequireDefault(_BehavesAsPanel);

var _Deletable = __webpack_require__(78);

var _Deletable2 = _interopRequireDefault(_Deletable);

var _Filterable = __webpack_require__(79);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _FormField = __webpack_require__(80);

var _FormField2 = _interopRequireDefault(_FormField);

var _HandlesValidationErrors = __webpack_require__(81);

var _HandlesValidationErrors2 = _interopRequireDefault(_HandlesValidationErrors);

var _HasCards = __webpack_require__(82);

var _HasCards2 = _interopRequireDefault(_HasCards);

var _InteractsWithDates = __webpack_require__(83);

var _InteractsWithDates2 = _interopRequireDefault(_InteractsWithDates);

var _InteractsWithQueryString = __webpack_require__(84);

var _InteractsWithQueryString2 = _interopRequireDefault(_InteractsWithQueryString);

var _InteractsWithResourceInformation = __webpack_require__(85);

var _InteractsWithResourceInformation2 = _interopRequireDefault(_InteractsWithResourceInformation);

var _Paginatable = __webpack_require__(86);

var _Paginatable2 = _interopRequireDefault(_Paginatable);

var _PerformsSearches = __webpack_require__(88);

var _PerformsSearches2 = _interopRequireDefault(_PerformsSearches);

var _PerPageable = __webpack_require__(87);

var _PerPageable2 = _interopRequireDefault(_PerPageable);

var _TogglesTrashed = __webpack_require__(89);

var _TogglesTrashed2 = _interopRequireDefault(_TogglesTrashed);

var _inflectorJs = __webpack_require__(93);

var _inflectorJs2 = _interopRequireDefault(_inflectorJs);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

var _capitalize = __webpack_require__(90);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _minimum = __webpack_require__(91);

var _minimum2 = _interopRequireDefault(_minimum);

var _formBackendValidation = __webpack_require__(41);

var _singularOrPlural = __webpack_require__(92);

var _singularOrPlural2 = _interopRequireDefault(_singularOrPlural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util
exports.BehavesAsPanel = _BehavesAsPanel2.default;
exports.Deletable = _Deletable2.default;
exports.Filterable = _Filterable2.default;
exports.FormField = _FormField2.default;
exports.HandlesValidationErrors = _HandlesValidationErrors2.default;
exports.HasCards = _HasCards2.default;
exports.InteractsWithDates = _InteractsWithDates2.default;
exports.InteractsWithQueryString = _InteractsWithQueryString2.default;
exports.InteractsWithResourceInformation = _InteractsWithResourceInformation2.default;
exports.Paginatable = _Paginatable2.default;
exports.PerformsSearches = _PerformsSearches2.default;
exports.PerPageable = _PerPageable2.default;
exports.TogglesTrashed = _TogglesTrashed2.default;
exports.Errors = _formBackendValidation.Errors;
exports.Inflector = _inflectorJs2.default;
exports.Capitalize = _capitalize2.default;
exports.Minimum = _minimum2.default;
exports.SingularOrPlural = _singularOrPlural2.default;
exports.CardSizes = _cardSizes2.default; // Mixins

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(138);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(126);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(134);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(135);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(31);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(123);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(177),
    isArguments = __webpack_require__(229),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(230),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(178);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 75 */
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
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['resourceName', 'resourceId', 'resource', 'panel'],

  methods: {
    /**
     * Handle the actionExecuted event and pass it up the chain.
     */
    actionExecuted: function actionExecuted() {
      this.$emit('actionExecuted');
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(114);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Open the delete menu modal.
     */
    openDeleteModal: function openDeleteModal() {
      this.deleteModalOpen = true;
    },


    /**
     * Delete the given resources.
     */
    deleteResources: function deleteResources(resources) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.viaManyToMany) {
        return this.detachResources(resources);
      }

      return Nova.request({
        url: '/nova-api/' + this.resourceName,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this.deleteModalOpen = false;
        _this.getResources();
      });
    },


    /**
     * Delete the selected resources.
     */
    deleteSelectedResources: function deleteSelectedResources() {
      this.deleteResources(this.selectedResources);
    },


    /**
     * Delete all of the matching resources.
     */
    deleteAllMatchingResources: function deleteAllMatchingResources() {
      var _this2 = this;

      if (this.viaManyToMany) {
        return this.detachAllMatchingResources();
      }

      return Nova.request({
        url: this.deleteAllMatchingResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this2.deleteModalOpen = false;
        _this2.getResources();
      });
    },


    /**
     * Detach the given resources.
     */
    detachResources: function detachResources(resources) {
      var _this3 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(function () {
        _this3.deleteModalOpen = false;
        _this3.getResources();
      });
    },


    /**
     * Detach all of the matching resources.
     */
    detachAllMatchingResources: function detachAllMatchingResources() {
      var _this4 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this4.deleteModalOpen = false;
        _this4.getResources();
      });
    },


    /**
     * Force delete the given resources.
     */
    forceDeleteResources: function forceDeleteResources(resources) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/force',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this5.deleteModalOpen = false;

        _this5.getResources();
      });
    },


    /**
     * Force delete the selected resources.
     */
    forceDeleteSelectedResources: function forceDeleteSelectedResources() {
      this.forceDeleteResources(this.selectedResources);
    },


    /**
     * Force delete all of the matching resources.
     */
    forceDeleteAllMatchingResources: function forceDeleteAllMatchingResources() {
      var _this6 = this;

      return Nova.request({
        url: this.forceDeleteSelectedResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this6.deleteModalOpen = false;
        _this6.getResources();
      });
    },


    /**
     * Restore the given resources.
     */
    restoreResources: function restoreResources(resources) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/restore',
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this7.restoreModalOpen = false;

        _this7.getResources();
      });
    },


    /**
     * Restore the selected resources.
     */
    restoreSelectedResources: function restoreSelectedResources() {
      this.restoreResources(this.selectedResources);
    },


    /**
     * Restore all of the matching resources.
     */
    restoreAllMatchingResources: function restoreAllMatchingResources() {
      var _this8 = this;

      return Nova.request({
        url: this.restoreAllMatchingResourcesEndpoint,
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this8.restoreModalOpen = false;
        _this8.getResources();
      });
    }
  },

  computed: {
    /**
     * Get the delete all matching resources endpoint.
     */
    deleteAllMatchingResourcesEndpoint: function deleteAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens;
      }

      return '/nova-api/' + this.resourceName;
    },


    /**
     * Get the force delete all of the matching resources endpoint.
     */
    forceDeleteSelectedResourcesEndpoint: function forceDeleteSelectedResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/force';
      }

      return '/nova-api/' + this.resourceName + '/force';
    },


    /**
     * Get the restore all of the matching resources endpoint.
     */
    restoreAllMatchingResourcesEndpoint: function restoreAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/restore';
      }

      return '/nova-api/' + this.resourceName + '/restore';
    },


    /**
     * Get the query string for a deletable resource request.
     */
    queryString: function queryString() {
      return {
        search: this.currentSearch,
        filters: this.encodedFilters,
        trashed: this.currentTrashed,
        viaResource: this.viaResource,
        viaResourceId: this.viaResourceId,
        viaRelationship: this.viaRelationship
      };
    }
  }
};


function mapResources(resources) {
  return _.map(resources, function (resource) {
    return resource.id.value;
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _each = __webpack_require__(226);

var _each2 = _interopRequireDefault(_each);

var _get = __webpack_require__(228);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Clear filters and reset the resource table
     */
    clearSelectedFilters: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lens) {
        var _updateQueryString;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lens) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName
                });

              case 7:

                this.updateQueryString((_updateQueryString = {}, (0, _defineProperty3.default)(_updateQueryString, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString, this.filterParameter, ''), _updateQueryString));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearSelectedFilters(_x) {
        return _ref.apply(this, arguments);
      }

      return clearSelectedFilters;
    }(),


    /**
     * Handle a filter state change.
     */
    filterChanged: function filterChanged() {
      var _updateQueryString2;

      this.updateQueryString((_updateQueryString2 = {}, (0, _defineProperty3.default)(_updateQueryString2, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString2, this.filterParameter, this.$store.getters[this.resourceName + '/currentEncodedFilters']), _updateQueryString2));
    },


    /**
     * Set up filters for the current view
     */
    initializeFilters: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(lens) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Clear out the filters from the store first
                this.$store.commit(this.resourceName + '/clearFilters');

                _context2.next = 3;
                return this.$store.dispatch(this.resourceName + '/fetchFilters', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context2.next = 5;
                return this.initializeState(lens);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initializeFilters(_x2) {
        return _ref2.apply(this, arguments);
      }

      return initializeFilters;
    }(),


    /**
     * Initialize the filter state
     */
    initializeState: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(lens) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.initialEncodedFilters) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.$store.dispatch(this.resourceName + '/initializeCurrentFilterValuesFromQueryString', this.initialEncodedFilters);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeState(_x3) {
        return _ref3.apply(this, arguments);
      }

      return initializeState;
    }()
  },

  computed: {
    /**
     * Get the name of the filter query string variable.
     */
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    resourceName: {},
    field: {}
  },

  data: function data() {
    return {
      value: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();

    // Add a default fill method for the field
    this.field.fill = this.fill;

    // Register a global event for setting the field's value
    Nova.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    Nova.$off(this.field.attribute + '-value');
  },


  methods: {
    /*
     * Set the initial value for the field
     */
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },


    /**
     * Provide a function that fills a passed FormData object with the
     * field's internal value attribute
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },


    /**
     * Update the field's internal value
     */
    handleChange: function handleChange(value) {
      this.value = value;
    }
  },

  computed: {
    /**
     * Determine if the field is in readonly mode
     */
    isReadonly: function isReadonly() {
      return this.field.readonly || _.get(this.field, 'extraAttributes.readonly');
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formBackendValidation = __webpack_require__(41);

exports.default = {
  props: {
    errors: {
      default: function _default() {
        return new _formBackendValidation.Errors();
      }
    }
  },

  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },

  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        loadCards: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return { cards: [] };
    },

    /**
     * Fetch all of the metrics panels for this view
     */
    created: function created() {
        this.fetchCards();
    },


    watch: {
        cardsEndpoint: function cardsEndpoint() {
            this.fetchCards();
        }
    },

    methods: {
        fetchCards: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var _ref2, cards;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.loadCards) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 3;
                                return Nova.request().get(this.cardsEndpoint, {
                                    params: this.extraCardParams
                                });

                            case 3:
                                _ref2 = _context.sent;
                                cards = _ref2.data;

                                this.cards = cards;

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function fetchCards() {
                return _ref.apply(this, arguments);
            }

            return fetchCards;
        }()
    },

    computed: {
        /**
         * Determine whether we have cards to show on the Dashboard
         */
        shouldShowCards: function shouldShowCards() {
            return this.cards.length > 0;
        },


        /**
         * Return the small cards used for the Dashboard
         */
        smallCards: function smallCards() {
            return _.filter(this.cards, function (c) {
                return _cardSizes2.default.indexOf(c.width) !== -1;
            });
        },


        /**
         * Return the full-width cards used for the Dashboard
         */
        largeCards: function largeCards() {
            return _.filter(this.cards, function (c) {
                return c.width == 'full';
            });
        },


        /**
         * Get the extra card params to pass to the endpoint.
         */
        extraCardParams: function extraCardParams() {
            return null;
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    /**
     * Convert the given localized date time string to the application's timezone.
     */
    toAppTimezone: function toAppTimezone(value) {
      return value ? moment.tz(value, this.userTimezone).clone().tz(Nova.config.timezone).format('YYYY-MM-DD HH:mm:ss') : value;
    },


    /**
     * Convert the given application timezone date time string to the local timezone.
     */
    fromAppTimezone: function fromAppTimezone(value) {
      if (!value) {
        return value;
      }

      return moment.tz(value, Nova.config.timezone).clone().tz(this.userTimezone).format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date time for the given field.
     */
    localizeDateTimeField: function localizeDateTimeField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return this.usesTwelveHourTime ? localized.format('YYYY-MM-DD h:mm:ss A') : localized.format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date for the given field.
     */
    localizeDateField: function localizeDateField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return localized.format('YYYY-MM-DD');
    }
  },

  computed: {
    /**
     * Get the user's local timezone.
     */
    userTimezone: function userTimezone() {
      return Nova.config.userTimezone ? Nova.config.userTimezone : moment.tz.guess();
    },


    /**
     * Determine if the user is used to 12 hour time.
     */
    usesTwelveHourTime: function usesTwelveHourTime() {
      return _.endsWith(new Date().toLocaleString(), 'AM') || _.endsWith(new Date().toLocaleString(), 'PM');
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults = __webpack_require__(225);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        /**
         * Update the given query string values.
         */
        updateQueryString: function updateQueryString(value) {
            this.$router.push({ query: (0, _defaults2.default)(value, this.$route.query) });
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    /**
     * Get the resource information object for the current resource.
     */
    resourceInformation: function resourceInformation() {
      var _this = this;

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this.resourceName;
      });
    },


    /**
     * Get the resource information object for the current resource.
     */
    viaResourceInformation: function viaResourceInformation() {
      var _this2 = this;

      if (!this.viaResource) {
        return;
      }

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this2.viaResource;
      });
    },


    /**
     * Determine if the user is authorized to create the current resource.
     */
    authorizedToCreate: function authorizedToCreate() {
      return this.resourceInformation.authorizedToCreate;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage - 1));
    },


    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage + 1));
    }
  },

  computed: {
    /**
     * Get the current page from the query string.
     */
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return { perPage: 25 };
  },

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },


    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged: function perPageChanged() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.perPageParameter, this.perPage));
    }
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage: function currentPerPage() {
      return this.$route.query[this.perPageParameter] || 25;
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(224);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      search: '',
      selectedResource: '',
      availableResources: []
    };
  },

  methods: {
    /**
     * Set the currently selected resource
     */
    selectResource: function selectResource(resource) {
      this.selectedResource = resource;
    },


    /**
     * Handle the search box being cleared.
     */
    handleSearchCleared: function handleSearchCleared() {
      this.availableResources = [];
    },


    /**
     * Clear the selected resource and availableResources
     */
    clearSelection: function clearSelection() {
      this.selectedResource = '';
      this.availableResources = [];
    },


    /**
     * Perform a search to get the relatable resources.
     */
    performSearch: function performSearch(search) {
      var _this = this;

      this.search = search;

      var trimmedSearch = search.trim();
      // If the user performs an empty search, it will load all the results
      // so let's just set the availableResources to an empty array to avoid
      // loading a huge result set
      if (trimmedSearch == '') {
        this.clearSelection();

        return;
      }

      this.debouncer(function () {
        _this.selectedResource = '';
        _this.getAvailableResources(trimmedSearch);
      }, 500);
    },


    /**
     * Debounce function for the search handler
     */
    debouncer: (0, _debounce2.default)(function (callback) {
      return callback();
    }, 500)
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      withTrashed: false
    };
  },

  methods: {
    /**
     * Toggle the trashed state of the search
     */
    toggleWithTrashed: function toggleWithTrashed() {
      this.withTrashed = !this.withTrashed;
    },


    /**
     * Enable searching for trashed resources
     */
    enableWithTrashed: function enableWithTrashed() {
      this.withTrashed = true;
    },


    /**
     * Disable searching for trashed resources
     */
    disableWithTrashed: function disableWithTrashed() {
      this.withTrashed = false;
    }
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    return (0, _upperFirst2.default)(string);
};

var _upperFirst = __webpack_require__(238);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (originalPromise) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return _promise2.default.all([originalPromise, new _promise2.default(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, delay);
    })]).then(function (result) {
        return result[0];
    });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singularOrPlural;

var _ = __webpack_require__(47);

function singularOrPlural(value, suffix) {
    if (value > 1 || value == 0) return _.Inflector.pluralize(suffix);
    return _.Inflector.singularize(suffix);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Javascript inflector
 * 
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */


var _Inflector = {

    uncountableWords : [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    pluralRules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    singularRules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    nonTitlecasedWords: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    idSuffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    spaceOrUnderbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbarPrefix: new RegExp('^_'),

    applyRules: function(str, rules, skip, override) {
        if (override) {
            str = override;
        } else {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore) {
                for (var x = 0; x < rules.length; x++) {
                    if (str.match(rules[x][0])) {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    },


    /*
    Inflector.pluralize('person')           -> 'people'
    Inflector.pluralize('octopus')          -> 'octopi'
    Inflector.pluralize('Hat')              -> 'Hats'
    Inflector.pluralize('person', 'guys')   -> 'guys'    
    */
    pluralize: function(str, plural) {
        return this.applyRules(
            str,
            this.pluralRules,
            this.uncountableWords,
            plural
        );
    },

    /*
    Inflector.singularize('person')         -> 'person'
    Inflector.singularize('octopi')         -> 'octopus'
    Inflector.singularize('hats')           -> 'hat'
    Inflector.singularize('guys', 'person') -> 'person'
    */
    singularize: function(str, singular) {
        return this.applyRules(
            str,
            this.singularRules,
            this.uncountableWords, 
            singular
        );
    },

    /*
    Inflector.camelize('message_properties')        -> 'MessageProperties'
    Inflector.camelize('message_properties', true)  -> 'messageProperties'
    */
    camelize: function(str, lowFirstLetter) {
       // var str = str.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');

        // fix 
        if (lowFirstLetter === true) {
          var first = str.charAt(0).toLowerCase();
          var last = str.slice(1);
          str = first + last;
        }

        return str;
    },

    /*
    Inflector.underscore('MessageProperties')       -> 'message_properties'
    Inflector.underscore('messageProperties')       -> 'message_properties'
    */
    underscore: function(str) { 
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(this.uppercase, '_$1');
            str_path[i] = str_path[i].replace(this.underbarPrefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    },

    /*
    Inflector.humanize('message_properties')        -> 'Message properties'
    Inflector.humanize('message_properties')        -> 'message properties'
    */
    humanize: function(str, lowFirstLetter) {
        var str = str.toLowerCase();
        str = str.replace(this.idSuffix, '');
        str = str.replace(this.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = this.capitalize(str);
        }
        return str;
    },

    /*
    Inflector.capitalize('message_properties')      -> 'Message_properties'
    Inflector.capitalize('message properties')      -> 'Message properties'
    */
    capitalize: function(str) {
        var str = str.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.dasherize('message_properties')       -> 'message-properties'
    Inflector.dasherize('message properties')       -> 'message-properties'
    */
    dasherize: function(str) {
        str = str.replace(this.spaceOrUnderbar, '-');
        return str;
    },

    /*
    Inflector.camel2words('message_properties')         -> 'Message Properties'
    Inflector.camel2words('message properties')         -> 'Message Properties'
    Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
    */
    camel2words: function(str, allFirstUpper) {
        //var str = str.toLowerCase();
        if (allFirstUpper === true) {
            str = this.camelize(str);
            str = this.underscore(str);
        } else {
            str = str.toLowerCase();
        }

        str = str.replace(this.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = this.capitalize(d[i]);
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
    */
    demodulize: function(str) {
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    },

    /*
    Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
    */
    tableize: function(str) {
        str = this.pluralize(this.underscore(str));
        return str;
    },

    /*
    Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
    */
    classify: function(str) {
        str = this.singularize(this.camelize(str));
        return str;
    },

    /*
    Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
    Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
    */   
    foreignKey: function(str, dropIdUbar) {
        str = this.underscore(this.demodulize(str)) + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    },

    /*
    Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
    */
    ordinalize: function(str) {
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    }
}

if (true) {
    module.exports = _Inflector;
} else if (typeof define === "function" && define.amd) {
    define([], function(){
        return _Inflector;
    });
} else {
    window.Inflector = _Inflector;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(44);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(111);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(98);
var dispatchRequest = __webpack_require__(99);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(102);
var isCancel = __webpack_require__(44);
var defaults = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(107);
var combineURLs = __webpack_require__(105);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(45);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(153);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(141);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(63);
var getIterFn = __webpack_require__(144);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(131);
var descriptor = __webpack_require__(59);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(62).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(133);
var pIE = __webpack_require__(136);
var toObject = __webpack_require__(64);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(64);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(118);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(130) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(1);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(51);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(119);
var forOf = __webpack_require__(121);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(62).set;
var microtask = __webpack_require__(129)();
var newPromiseCapabilityModule = __webpack_require__(31);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(139)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(31);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(66);

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            this.__http = options.http || window.axios || __webpack_require__(94);

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }
    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this[property] instanceof File || this[property] instanceof FileList) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
exports.objectToFormData = objectToFormData;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (Array.isArray(object)) {
        return [].concat(_toConsumableArray(object));
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = {};

        for (var key in object) {
            clone[key] = cloneDeep(object[key]);
        }

        return clone;
    }

    return object;
}

function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (var property in object) {
        _appendToFormData(formData, _getKey(parent, property), object[property]);
    }

    return formData;
}

function _getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function _appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(190),
    hashDelete = __webpack_require__(191),
    hashGet = __webpack_require__(192),
    hashHas = __webpack_require__(193),
    hashSet = __webpack_require__(194);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(199),
    listCacheDelete = __webpack_require__(200),
    listCacheGet = __webpack_require__(201),
    listCacheHas = __webpack_require__(202),
    listCacheSet = __webpack_require__(203);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(204),
    mapCacheDelete = __webpack_require__(205),
    mapCacheGet = __webpack_require__(206),
    mapCacheHas = __webpack_require__(207),
    mapCacheSet = __webpack_require__(208);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(167),
    createBaseEach = __webpack_require__(184);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(185);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(166),
    keys = __webpack_require__(232);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(181),
    toKey = __webpack_require__(220);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isMasked = __webpack_require__(198),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(221);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isLength = __webpack_require__(73),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(71),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39),
    overRest = __webpack_require__(215),
    setToString = __webpack_require__(216);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(223),
    defineProperty = __webpack_require__(187),
    identity = __webpack_require__(39);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(196),
    stringToPath = __webpack_require__(219),
    toString = __webpack_require__(74);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(176);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(22);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(182),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(218),
    toString = __webpack_require__(74);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(22),
    isIndex = __webpack_require__(70),
    isObject = __webpack_require__(8);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(183);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(157),
    ListCache = __webpack_require__(158),
    Map = __webpack_require__(159);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(161);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(175),
    shortOut = __webpack_require__(217);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(222);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(209);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(235),
    toNumber = __webpack_require__(237);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(174),
    eq = __webpack_require__(38),
    isIterateeCall = __webpack_require__(195),
    keysIn = __webpack_require__(233);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(165),
    castFunction = __webpack_require__(180),
    isArray = __webpack_require__(13);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(168);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(169),
    isObjectLike = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(236);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(179),
    nodeUtil = __webpack_require__(212);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeys = __webpack_require__(172),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(186);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(240);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-emoji-picker"] = factory();
	else
		root["v-emoji-picker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0057":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ff12");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSvg_vue_vue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0547":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#VSvg[data-v-0c34d3e0]{display:inline-block;vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ "15a3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aa19");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("320f279e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "26cc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7710");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("f9920f70", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "2bed":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#EmojiPicker[data-v-774a9568]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:DejaVu Sans,sans-serif;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f0f0f0;border-radius:4px;border:1px solid #e4e4e4;overflow:hidden;width:325px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);

// exports


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "6347":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26cc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputSearch_vue_vue_type_style_index_0_id_53790c21_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7710":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#InputSearch[data-v-53790c21]{display:block;width:100%;max-width:100%}.container-search[data-v-53790c21]{display:block;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:5px 0;padding:0 5%}.container-search[data-v-53790c21],.container-search input[data-v-53790c21]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.container-search input[data-v-53790c21]{font-size:14px;padding:8px;border-radius:8px;background:#f6f6f6;color:#4a4a4a;border:1px solid #e2e2e2}", ""]);

// exports


/***/ }),

/***/ "7803":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d64e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_style_index_0_id_ec684a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "79a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7ec");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VEmojiPicker_vue_vue_type_style_index_0_id_774a9568_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=template&id=774a9568&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"EmojiPicker"}},[(_vm.showCategory)?_c('Categories',{on:{"select":function($event){return _vm.onChangeCategory($event)}}}):_vm._e(),(_vm.showSearch)?_c('InputSearch',{attrs:{"placeholder":_vm.labelSearch},model:{value:(_vm.filterEmoji),callback:function ($$v) {_vm.filterEmoji=$$v},expression:"filterEmoji"}}):_vm._e(),_c('EmojiList',{attrs:{"data":_vm.emojis,"category":_vm.category,"filter":_vm.filterEmoji,"emojisByRow":_vm.emojisByRow,"continuousList":_vm.continuousList},on:{"select":function($event){return _vm.onSelectEmoji($event)}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=template&id=774a9568&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Categories.vue?vue&type=template&id=ec684a60&scoped=true&
var Categoriesvue_type_template_id_ec684a60_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Categories"}},_vm._l((_vm.categories),function(categorie,index){return _c('div',{key:index,class:['category', { active: index === _vm.active }],on:{"click":function($event){return _vm.onSelect(index)}}},[_c('VSvg',{attrs:{"name":categorie.icon}})],1)}),0)}
var Categoriesvue_type_template_id_ec684a60_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=template&id=ec684a60&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VSvg.vue?vue&type=template&id=0c34d3e0&scoped=true&
var VSvgvue_type_template_id_0c34d3e0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{style:(_vm.styleSVG),attrs:{"id":"VSvg"},domProps:{"innerHTML":_vm._s(_vm.icon)}})}
var VSvgvue_type_template_id_0c34d3e0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=template&id=0c34d3e0&scoped=true&

// CONCATENATED MODULE: ./src/components/VEmojiPicker/_icons.js
var categories = {
  activity: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 303.6 303.6\" fill=\"gray\">\n  <path d=\"M291.503 11.6c-10.4-10.4-37.2-11.6-48.4-11.6-50.4 0-122.4 18.4-173.6 69.6-77.2 76.8-78.4 201.6-58.4 222 10.8 10.4 35.6 12 49.2 12 49.6 0 121.2-18.4 173.2-70 76.4-76.4 80.4-199.6 58-222zm-231.2 277.2c-24.4 0-36-4.8-38.8-7.6-5.2-5.2-8.4-24.4-6.8-49.6l57.2 56.8c-4 .4-8 .4-11.6.4zm162.8-66c-38.8 38.8-90.4 57.2-132.4 63.6l-74-73.6c6-42 24-94 63.2-133.2 38-38 88-56.4 130.8-62.8l75.6 75.6c-6 40.8-24.4 91.6-63.2 130.4zm65.2-148.8l-58.8-59.2c4.8-.4 9.2-.4 13.6-.4 24.4 0 35.6 4.8 38 7.2 5.6 5.6 9.2 25.6 7.2 52.4z\"/>\n  <path d=\"M215.103 139.6l-20.8-20.8 13.2-13.2c2.8-2.8 2.8-7.6 0-10.4s-7.6-2.8-10.4 0l-13.2 13.6-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0-2.8 2.8-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-22 22-20.8-20.8c-2.8-2.8-7.6-2.8-10.4 0s-2.8 7.6 0 10.4l20.8 20.8-13.2 13.2c-2.8 2.8-2.8 7.6 0 10.4 1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2l13.2-13.2 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-21.2 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4l-20.8-20.8 22-22 20.8 20.8c1.6 1.6 3.2 2 5.2 2s3.6-.8 5.2-2c2.8-2.8 2.8-7.6 0-10.4zM169.103 47.6c-1.2-4-5.2-6-9.2-4.8-3.2 1.2-80.8 25.6-110.4 98-1.6 4 0 8.4 4 9.6.8.4 2 .4 2.8.4 2.8 0 5.6-1.6 6.8-4.4 27.2-66 100.4-89.6 101.2-89.6 4-1.2 6-5.2 4.8-9.2z\"/>\n  </svg>\n  ",
  flags: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" fill=\"gray\">\n  <path d=\"M472.928 34.72c-4.384-2.944-9.984-3.52-14.912-1.568-1.088.448-106.528 42.176-195.168.384C186.752-2.4 102.944 14.4 64 25.76V16c0-8.832-7.168-16-16-16S32 7.168 32 16v480c0 8.832 7.168 16 16 16s16-7.168 16-16V315.296c28.352-9.248 112.384-31.232 185.184 3.168 34.592 16.352 70.784 21.792 103.648 21.792 63.2 0 114.016-20.128 117.184-21.408 6.016-2.464 9.984-8.32 9.984-14.848V48c0-5.312-2.656-10.272-7.072-13.28zM448 292.672c-28.512 9.248-112.512 31.136-185.184-3.168C186.752 253.6 102.944 270.4 64 281.76V59.328c28.352-9.248 112.384-31.232 185.184 3.168 76 35.872 159.872 19.104 198.816 7.712v222.464z\"/>\n  </svg>\n  ",
  foods: "\n  <svg style=\"max-height:18px\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 511.999 511.999\" fill=\"gray\">\n  <path d=\"M413.949 155.583a10.153 10.153 0 0 0-3.24-2.16c-.61-.25-1.24-.44-1.87-.57-3.25-.66-6.701.41-9.03 2.73a10.093 10.093 0 0 0-2.93 7.07 10.098 10.098 0 0 0 1.69 5.56c.36.54.779 1.05 1.24 1.52 1.86 1.86 4.44 2.93 7.07 2.93.65 0 1.31-.07 1.96-.2.63-.13 1.26-.32 1.87-.57a10.146 10.146 0 0 0 3.24-2.16c.47-.47.88-.98 1.25-1.52a10.098 10.098 0 0 0 1.49-3.6 10.038 10.038 0 0 0-2.74-9.03zM115.289 385.873c-.12-.64-.32-1.27-.57-1.87-.25-.6-.55-1.18-.91-1.73-.37-.54-.79-1.06-1.25-1.52a9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.72-.92-.61-.25-1.24-.44-1.88-.57a9.847 9.847 0 0 0-3.9 0c-.64.13-1.27.32-1.87.57-.61.25-1.19.56-1.73.92-.55.36-1.06.78-1.52 1.24-.46.46-.88.98-1.24 1.52-.36.55-.67 1.13-.92 1.73-.25.6-.45 1.23-.57 1.87-.13.651-.2 1.3-.2 1.96 0 .65.07 1.3.2 1.95.12.64.32 1.27.57 1.87.25.6.56 1.18.92 1.73.36.54.78 1.06 1.24 1.52.46.46.97.88 1.52 1.24.54.36 1.12.67 1.73.92.6.25 1.23.44 1.87.57s1.3.2 1.95.2c.65 0 1.31-.07 1.95-.2.64-.13 1.27-.32 1.88-.57.6-.25 1.18-.56 1.72-.92.55-.36 1.059-.78 1.52-1.24.46-.46.88-.98 1.25-1.52.36-.55.66-1.13.91-1.73.25-.6.45-1.23.57-1.87.13-.65.2-1.3.2-1.95 0-.66-.07-1.31-.2-1.96z\"/>\n  <path d=\"M511.999 222.726c0-14.215-9.228-26.315-22.007-30.624-1.628-74.155-62.456-133.978-136.994-133.978H159.002c-74.538 0-135.366 59.823-136.994 133.978C9.228 196.411 0 208.51 0 222.726a32.076 32.076 0 0 0 3.847 15.203 44.931 44.931 0 0 0-.795 8.427v.708c0 14.06 6.519 26.625 16.693 34.833-10.178 8.275-16.693 20.891-16.693 35.001 0 15.114 7.475 28.515 18.921 36.702v26.668c0 40.588 33.021 73.608 73.608 73.608h320.836c40.588 0 73.608-33.021 73.608-73.608V353.6c11.446-8.186 18.921-21.587 18.921-36.702 0-13.852-6.354-26.385-16.361-34.702 9.983-8.212 16.361-20.656 16.361-34.562v-.708c0-2.985-.294-5.944-.877-8.845a32.082 32.082 0 0 0 3.93-15.355zM44.033 173.229h322.441c5.523 0 10-4.477 10-10s-4.477-10-10-10H49.737c16.896-43.883 59.503-75.106 109.265-75.106h193.996c62.942 0 114.438 49.953 116.934 112.295H42.068c.234-5.848.9-11.588 1.965-17.189zM23.052 316.896c0-13.837 11.257-25.094 25.094-25.094h117.298l55.346 50.188H48.146c-13.837 0-25.094-11.256-25.094-25.094zm.976-62.945c.422.111.847.215 1.275.309 7.421 1.634 14.68 8.002 22.365 14.744a576.29 576.29 0 0 0 3.206 2.799h-3.081c-11.253-.001-20.774-7.551-23.765-17.852zm308.727 89.752l57.233-51.899 49.904.57-81.871 74.24-25.266-22.911zm7.861 34.126H295.12l17.467-15.839h10.563l17.466 15.839zm19.599-86.027l-82.499 74.811-82.499-74.811h164.998zm-59.529-20c.849-.842 1.677-1.675 2.49-2.493 9.531-9.587 17.059-17.16 32.89-17.16 15.832 0 23.359 7.573 32.89 17.162.812.817 1.64 1.65 2.489 2.491h-70.759zm-160.13 0a485.82 485.82 0 0 0 2.489-2.492c9.531-9.588 17.059-17.161 32.89-17.161 15.83 0 23.358 7.573 32.888 17.16.813.818 1.641 1.651 2.49 2.493h-70.757zm275.862 162.073H95.582c-29.56 0-53.608-24.049-53.608-53.608v-18.275h200.872l17.467 15.839H145.897c-5.523 0-10 4.477-10 10s4.477 10 10 10H467.07c-7.288 20.958-27.242 36.044-50.652 36.044zm53.608-56.046h-94.6l17.467-15.839h77.133v15.839zm-6.174-35.837h-48.906l54.624-49.533c11.135 2.604 19.376 12.665 19.376 24.439 0 13.836-11.257 25.094-25.094 25.094zm-2.728-70.19l.262-.227.101-.087.342-.298c.848-.738 1.682-1.469 2.501-2.187 4.105-3.601 8.089-7.095 12.04-9.819 3.446-2.375 6.868-4.164 10.326-4.925l.359-.081.04-.01.317-.076.065-.016a22.897 22.897 0 0 0 .42-.107l.196-.052a.374.374 0 0 0 .048-.012c-2.433 9.276-10.129 16.443-19.691 18.102a9.984 9.984 0 0 0-2.016-.205h-5.31zm21.271-37.073a40.746 40.746 0 0 0-4.536 1.281c-10.109 3.489-18.327 10.602-26.283 17.58l-.434.381c-9.178 8.052-17.923 15.723-29.033 17.834h-13.146c-11.249-1.93-17.833-8.552-25.823-16.591-10.213-10.275-22.923-23.062-47.074-23.062-24.15 0-36.86 12.786-47.074 23.06-7.992 8.04-14.576 14.663-25.829 16.593h-14.327c-11.253-1.93-17.837-8.553-25.829-16.593-10.213-10.274-22.923-23.06-47.072-23.06-24.151 0-36.861 12.787-47.074 23.062-7.991 8.039-14.574 14.661-25.824 16.591h-7.065c-14.134 0-24.325-8.939-35.113-18.404-9.248-8.112-18.81-16.501-31.252-19.241a12.237 12.237 0 0 1-7.025-4.453 10.027 10.027 0 0 0-1.153-1.252 12.234 12.234 0 0 1-1.428-5.727c-.001-6.788 5.52-12.309 12.307-12.309h447.384c6.787 0 12.308 5.521 12.308 12.308 0 5.729-4.039 10.776-9.605 12.002z\"/>\n  </svg>\n  ",
  frequenty: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 219.15 219.15\" width=\"24\" height=\"24\" fill=\"gray\">\n  <path d=\"M109.575 0C49.156 0 .001 49.155.001 109.574c0 60.42 49.154 109.576 109.573 109.576 60.42 0 109.574-49.156 109.574-109.576C219.149 49.155 169.995 0 109.575 0zm0 204.15c-52.148 0-94.573-42.427-94.573-94.576C15.001 57.426 57.427 15 109.575 15c52.148 0 94.574 42.426 94.574 94.574 0 52.15-42.426 94.576-94.574 94.576z\"/>\n  <path d=\"M166.112 108.111h-52.051V51.249a7.5 7.5 0 0 0-15 0v64.362a7.5 7.5 0 0 0 7.5 7.5h59.551a7.5 7.5 0 0 0 0-15z\"/>\n  </svg>\n  ",
  nature: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" fill=\"gray\">\n  <path d=\"M490.815 3.784C480.082 5.7 227.049 51.632 148.477 130.203c-39.153 39.153-64.259 87.884-70.694 137.218-5.881 45.081 4.347 85.929 28.878 116.708L.001 490.789 21.212 512l106.657-106.657c33.094 26.378 75.092 34.302 116.711 28.874 49.334-6.435 98.065-31.541 137.218-70.695C460.368 284.951 506.3 31.918 508.216 21.185L511.999 0l-21.184 3.784zm-43.303 39.493L309.407 181.383l-7.544-98.076c46.386-15.873 97.819-29.415 145.649-40.03zm-174.919 50.64l8.877 115.402-78.119 78.119-11.816-153.606c19.947-13.468 47.183-26.875 81.058-39.915zm-109.281 64.119l12.103 157.338-47.36 47.36c-39.246-52.892-24.821-139.885 35.257-204.698zm57.113 247.849c-26.548-.001-51.267-7.176-71.161-21.938l47.363-47.363 157.32 12.102c-40.432 37.475-89.488 57.201-133.522 57.199zm157.743-85.421l-153.605-11.816 78.118-78.118 115.403 8.877c-13.04 33.876-26.448 61.111-39.916 81.057zm50.526-110.326l-98.076-7.544L468.725 64.485c-10.589 47.717-24.147 99.232-40.031 145.653z\"/>\n  </svg>\n  ",
  objects: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 792 792\" fill=\"gray\">\n  <path d=\"M425.512 741.214H365.58c-14.183 0-25.164 11.439-25.164 25.622S351.397 792 365.58 792h59.932c15.101 0 26.54-10.981 26.54-25.164s-11.44-25.622-26.54-25.622zM472.638 671.209H319.821c-14.183 0-26.081 10.98-26.081 25.163s11.898 25.164 26.081 25.164h152.817c14.183 0 25.164-10.981 25.164-25.164s-10.982-25.163-25.164-25.163zM639.188 138.634c-25.164-42.548-59.181-76.135-102.49-101.113C493.526 12.621 446.566 0 395.771 0 320.28 0 247.19 31.684 197.205 81.445c-49.761 49.527-81.904 121.24-81.904 196.282 0 33.861 7.779 68.629 22.879 103.866 15.1 35.228 38.565 78.614 70.005 130.396 7.448 12.269 15.764 31.205 25.623 56.271 12.104 30.757 22.87 51.713 31.566 63.602 5.027 6.872 11.899 10.063 20.596 10.063h228.766c9.605 0 16.359-4.188 21.504-11.898 6.754-10.132 13.987-27.516 22.42-51.693 8.951-25.691 16.838-43.982 23.329-55.364 30.571-53.587 54.446-99.747 70.464-137.717 16.018-37.979 24.246-74.124 24.246-107.526 0-49.878-12.347-96.545-37.511-139.093zm-35.696 232.437c-15.012 34.348-36.398 76.974-65.427 126.736-9.41 16.125-18.458 37.003-26.989 63.592-3.367 10.474-7.32 20.596-11.439 30.2H300.153c-6.862-11.439-12.26-25.837-18.761-42.089-12.718-31.801-23.338-52.621-30.2-64.061-28.824-48.043-49.868-87.39-64.051-118.957s-20.537-60.859-21.044-88.766c-2.235-121.718 106.13-228.991 229.674-226.941 41.631.693 80.527 10.063 115.765 30.659 35.227 20.586 63.134 48.043 83.729 82.812 20.586 34.768 31.108 72.748 31.108 113.47-.001 27.449-7.692 58.596-22.881 93.345z\"/>\n  </svg>\n  ",
  peoples: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 106.059 106.059\" fill=\"gray\">\n  <path d=\"M90.544 90.542c20.687-20.684 20.685-54.341.002-75.024-20.688-20.689-54.347-20.689-75.031-.006-20.688 20.687-20.686 54.346.002 75.034 20.682 20.684 54.341 20.684 75.027-.004zM21.302 21.3c17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.455-17.494 17.494-45.96 17.496-63.455.003-17.498-17.498-17.496-45.966 0-63.46zM27 69.865s-2.958-11.438 6.705-8.874c0 0 17.144 9.295 38.651 0 9.662-2.563 6.705 8.874 6.705 8.874C73.539 86.824 53.03 85.444 53.03 85.444S32.521 86.824 27 69.865zm6.24-31.194a6.202 6.202 0 1 1 12.399.001 6.202 6.202 0 0 1-12.399-.001zm28.117 0a6.202 6.202 0 1 1 12.403.001 6.202 6.202 0 0 1-12.403-.001z\"/>\n  </svg>\n  ",
  places: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 611.999 611.998\" fill=\"gray\">\n  <path d=\"M596.583 15.454C586.226 5.224 573.354.523 558.423.523c-15.597 0-31.901 4.906-49.452 14.599-17.296 9.551-32.851 20.574-46.458 32.524h-.665c-2.655 2.322-10.953 10.287-25.219 24.553-14.272 14.272-26.217 26.223-35.845 36.51L112.401 26.406c-6.896-1.968-12.928.014-17.593 4.645L46.687 78.839c-4.326 4.297-5.805 9.268-4.977 15.597.829 6.287 3.979 10.627 9.629 13.607L280.32 228.839 161.514 347.978l-95.91 3.32c-4.645.164-8.637 1.643-12.276 5.311L5.872 404.397c-4.312 4.34-6.641 9.289-5.643 16.262 1.657 6.967 5.31 11.611 11.618 13.602l117.142 48.787 48.787 117.148c2.421 5.812 6.634 9.621 13.607 11.279h3.313c4.977 0 9.296-1.658 12.942-5.311l47.456-47.457c3.653-3.645 5.494-7.965 5.643-12.275l3.32-95.91 118.807-118.807 121.128 228.99c2.988 5.643 7.32 8.793 13.607 9.621 6.329.836 11.271-1.316 15.597-5.643l47.456-47.457c4.978-4.977 6.945-10.697 4.978-17.586l-82.296-288.389 59.732-59.739c10.287-10.287 21.699-24.149 33.183-45.134 5.777-10.542 10.032-20.886 12.942-31.194 5.722-20.218 3.258-44.07-12.608-59.73zm-59.4 110.176l-67.039 67.372c-5.628 5.657-6.811 11.122-4.977 17.586l81.637 288.388-22.563 22.238L403.438 292.89c-2.98-5.643-7.299-8.963-12.941-9.621-6.301-1.331-11.611.325-16.263 4.977l-141.37 141.37c-2.987 2.986-4.644 6.973-5.643 11.949l-3.32 95.904-22.896 23.236-41.48-98.566c-1.331-4.645-4.553-8.184-9.629-10.287L51.338 411.03l23.229-22.895 95.578-3.654c5.643-.99 9.622-2.654 12.276-5.309l141.37-141.371c4.651-4.645 6.308-9.954 4.984-16.262-.666-5.643-3.986-9.954-9.629-12.942L90.829 87.47l22.231-22.238 288.389 81.637c6.464 1.833 11.951.666 17.587-4.977l28.545-28.539 26.217-25.884 11.278-11.285 1.331-.666c27.873-23.895 55.088-38.16 72.016-38.16 5.969 0 9.954 1.324 11.611 3.979 18.917 18.585-21.099 72.484-32.851 84.293z\"/>\n  </svg>\n  ",
  symbols: "\n  <svg style=\"max-height:18px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 511.626 511.626\" fill=\"gray\">\n  <path d=\"M475.366 71.949c-24.175-23.606-57.575-35.404-100.215-35.404-11.8 0-23.843 2.046-36.117 6.136-12.279 4.093-23.702 9.615-34.256 16.562-10.568 6.945-19.65 13.467-27.269 19.556a263.828 263.828 0 0 0-21.696 19.414 264.184 264.184 0 0 0-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556-10.564-6.95-21.985-12.468-34.261-16.562-12.275-4.089-24.316-6.136-36.116-6.136-42.637 0-76.039 11.801-100.211 35.404C12.087 95.55 0 128.286 0 170.16c0 12.753 2.24 25.891 6.711 39.398 4.471 13.514 9.566 25.031 15.275 34.546 5.708 9.514 12.181 18.792 19.414 27.834 7.233 9.041 12.519 15.272 15.846 18.698 3.33 3.426 5.948 5.903 7.851 7.427L243.25 469.938c3.427 3.426 7.614 5.144 12.562 5.144s9.138-1.718 12.563-5.144l177.87-171.31c43.588-43.58 65.38-86.406 65.38-128.472.001-41.877-12.085-74.61-36.259-98.207zm-53.961 199.846L255.813 431.391 89.938 271.507C54.344 235.922 36.55 202.133 36.55 170.156c0-15.415 2.046-29.026 6.136-40.824 4.093-11.8 9.327-21.177 15.703-28.124 6.377-6.949 14.132-12.607 23.268-16.988 9.141-4.377 18.086-7.328 26.84-8.85 8.754-1.52 18.079-2.281 27.978-2.281 9.896 0 20.557 2.424 31.977 7.279 11.418 4.853 21.934 10.944 31.545 18.271 9.613 7.332 17.845 14.183 24.7 20.557 6.851 6.38 12.559 12.229 17.128 17.559 3.424 4.189 8.091 6.283 13.989 6.283 5.9 0 10.562-2.094 13.99-6.283 4.568-5.33 10.28-11.182 17.131-17.559 6.852-6.374 15.085-13.222 24.694-20.557 9.613-7.327 20.129-13.418 31.553-18.271 11.416-4.854 22.08-7.279 31.977-7.279s19.219.761 27.977 2.281c8.757 1.521 17.702 4.473 26.84 8.85 9.137 4.38 16.892 10.042 23.267 16.988 6.376 6.947 11.612 16.324 15.705 28.124 4.086 11.798 6.132 25.409 6.132 40.824-.002 31.977-17.89 65.86-53.675 101.639z\"/>\n  </svg>\n  "
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VSvg.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//

/* harmony default export */ var VSvgvue_type_script_lang_js_ = ({
  name: "VSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    styles: {
      type: Object
    }
  },
  computed: {
    icon: function icon() {
      return categories[this.name];
    },
    styleSVG: function styleSVG() {
      return _objectSpread({}, this.styles);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_VSvgvue_type_script_lang_js_ = (VSvgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/VSvg.vue?vue&type=style&index=0&id=0c34d3e0&scoped=true&lang=scss&
var VSvgvue_type_style_index_0_id_0c34d3e0_scoped_true_lang_scss_ = __webpack_require__("0057");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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

// CONCATENATED MODULE: ./src/components/VEmojiPicker/VSvg.vue






/* normalize component */

var component = normalizeComponent(
  VEmojiPicker_VSvgvue_type_script_lang_js_,
  VSvgvue_type_template_id_0c34d3e0_scoped_true_render,
  VSvgvue_type_template_id_0c34d3e0_scoped_true_staticRenderFns,
  false,
  null,
  "0c34d3e0",
  null
  
)

/* harmony default export */ var VSvg = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Categories.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Categoriesvue_type_script_lang_js_ = ({
  name: "Categories",
  components: {
    VSvg: VSvg
  },
  data: function data() {
    return {
      categories: [{
        name: "Frequenty",
        icon: "frequenty"
      }, {
        name: "Peoples",
        icon: "peoples"
      }, {
        name: "Nature",
        icon: "nature"
      }, {
        name: "Foods",
        icon: "foods"
      }, {
        name: "Activity",
        icon: "activity"
      }, {
        name: "Objects",
        icon: "objects"
      }, {
        name: "Places",
        icon: "places"
      }, {
        name: "Symbols",
        icon: "symbols"
      }, {
        name: "Flags",
        icon: "flags"
      }],
      active: 1
    };
  },
  methods: {
    onSelect: function onSelect(index) {
      this.active = index;
      var _category = this.categories[index];
      this.$emit("select", _category);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_Categoriesvue_type_script_lang_js_ = (Categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/Categories.vue?vue&type=style&index=0&id=ec684a60&lang=scss&scoped=true&
var Categoriesvue_type_style_index_0_id_ec684a60_lang_scss_scoped_true_ = __webpack_require__("7803");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/Categories.vue






/* normalize component */

var Categories_component = normalizeComponent(
  VEmojiPicker_Categoriesvue_type_script_lang_js_,
  Categoriesvue_type_template_id_ec684a60_scoped_true_render,
  Categoriesvue_type_template_id_ec684a60_scoped_true_staticRenderFns,
  false,
  null,
  "ec684a60",
  null
  
)

/* harmony default export */ var Categories = (Categories_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/EmojiList.vue?vue&type=template&id=cb926828&scoped=true&
var EmojiListvue_type_template_id_cb926828_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Emojis"}},[_c('div',{ref:"container-emoji",staticClass:"container-emoji"},[(_vm.continuousList)?_vm._l((_vm.dataFilteredByCategory),function(category,category_name){return _c('div',{key:category_name,staticClass:"category-line"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(category.length),expression:"category.length"}],ref:category_name,refInFor:true,staticClass:"category-title"},[_vm._v("\n          "+_vm._s(category_name)+"\n        ")]),(category.length)?_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((category),function(emoji,index_e){return _c('Emoji',{key:(category_name + "-" + index_e),attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1):_vm._e()])}):_c('div',{staticClass:"grid-emojis",style:(_vm.gridDynamic)},_vm._l((_vm.dataFiltered),function(emoji,index){return _c('Emoji',{key:index,attrs:{"data":emoji['emoji']},nativeOn:{"click":function($event){return _vm.onSelect(emoji)}}})}),1)],2)])}
var EmojiListvue_type_template_id_cb926828_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=template&id=cb926828&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Emoji.vue?vue&type=template&id=12e68b38&scoped=true&
var Emojivue_type_template_id_12e68b38_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"emoji",domProps:{"innerHTML":_vm._s(_vm.data)}})}
var Emojivue_type_template_id_12e68b38_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue?vue&type=template&id=12e68b38&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/Emoji.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Emojivue_type_script_lang_js_ = ({
  name: "Emoji",
  props: {
    data: {
      type: String
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_Emojivue_type_script_lang_js_ = (Emojivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/VEmojiPicker/Emoji.vue





/* normalize component */

var Emoji_component = normalizeComponent(
  VEmojiPicker_Emojivue_type_script_lang_js_,
  Emojivue_type_template_id_12e68b38_scoped_true_render,
  Emojivue_type_template_id_12e68b38_scoped_true_staticRenderFns,
  false,
  null,
  "12e68b38",
  null
  
)

/* harmony default export */ var Emoji = (Emoji_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/EmojiList.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var EmojiListvue_type_script_lang_js_ = ({
  name: "EmojiList",
  components: {
    Emoji: Emoji
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    emojisByRow: {
      type: Number,
      required: true
    },
    filter: {
      type: String
    },
    continuousList: {
      type: Boolean
    },
    category: {
      type: String
    }
  },
  methods: {
    onSelect: function onSelect(emoji) {
      this.$emit("select", emoji);
    }
  },
  computed: {
    gridDynamic: function gridDynamic() {
      var percent = 100 / this.emojisByRow;
      return {
        gridTemplateColumns: "repeat(".concat(this.emojisByRow, ", ").concat(percent, "%)")
      };
    },
    dataFiltered: function dataFiltered() {
      var data = this.data[this.category];
      var searchValue = this.filter.trim();

      if (searchValue) {
        data = data.filter(function (item) {
          return item.aliases.some(function (alias) {
            return alias.includes(searchValue.toLowerCase());
          });
        });
      }

      return data;
    },
    dataFilteredByCategory: function dataFilteredByCategory() {
      var _this = this;

      var _data = Object.assign({}, this.data);

      var searchValue = this.filter.trim();

      if (searchValue) {
        this.categories.forEach(function (category) {
          _data[category] = _this.data[category].filter(function (item) {
            return item.aliases.some(function (alias) {
              return alias.includes(searchValue.toLowerCase());
            });
          });
        });
      }

      return _data;
    },
    categories: function categories() {
      return Object.keys(this.data);
    }
  },
  watch: {
    data: function data() {
      this.$refs["container-emoji"].scrollTop = 0;
    },
    category: function category(new_category) {
      if (this.continuousList) {
        var firstItemCategory = this.$refs[new_category][0];
        this.$refs["container-emoji"].scrollTop = firstItemCategory.offsetTop - 80;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_EmojiListvue_type_script_lang_js_ = (EmojiListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/EmojiList.vue?vue&type=style&index=0&id=cb926828&lang=scss&scoped=true&
var EmojiListvue_type_style_index_0_id_cb926828_lang_scss_scoped_true_ = __webpack_require__("ddda");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/EmojiList.vue






/* normalize component */

var EmojiList_component = normalizeComponent(
  VEmojiPicker_EmojiListvue_type_script_lang_js_,
  EmojiListvue_type_template_id_cb926828_scoped_true_render,
  EmojiListvue_type_template_id_cb926828_scoped_true_staticRenderFns,
  false,
  null,
  "cb926828",
  null
  
)

/* harmony default export */ var EmojiList = (EmojiList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68ada30a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/InputSearch.vue?vue&type=template&id=53790c21&scoped=true&
var InputSearchvue_type_template_id_53790c21_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"InputSearch"}},[_c('div',{staticClass:"container-search"},[_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":function($event){return _vm.onKeyUp($event)}}})])])}
var InputSearchvue_type_template_id_53790c21_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=template&id=53790c21&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/InputSearch.vue?vue&type=script&lang=js&
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
/* harmony default export */ var InputSearchvue_type_script_lang_js_ = ({
  name: "InputSearch",
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  methods: {
    // Emit value of v-model
    onKeyUp: function onKeyUp(event) {
      this.$emit("input", event.target.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_InputSearchvue_type_script_lang_js_ = (InputSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/InputSearch.vue?vue&type=style&index=0&id=53790c21&lang=scss&scoped=true&
var InputSearchvue_type_style_index_0_id_53790c21_lang_scss_scoped_true_ = __webpack_require__("6347");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/InputSearch.vue






/* normalize component */

var InputSearch_component = normalizeComponent(
  VEmojiPicker_InputSearchvue_type_script_lang_js_,
  InputSearchvue_type_template_id_53790c21_scoped_true_render,
  InputSearchvue_type_template_id_53790c21_scoped_true_staticRenderFns,
  false,
  null,
  "53790c21",
  null
  
)

/* harmony default export */ var InputSearch = (InputSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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



/* harmony default export */ var VEmojiPickervue_type_script_lang_js_ = ({
  name: "VEmojiPicker",
  props: {
    pack: {
      type: Array,
      required: true
    },
    labelSearch: {
      type: String,
      default: "Pesquisar..."
    },
    showCategory: {
      type: Boolean,
      default: true
    },
    emojisByRow: {
      type: Number,
      default: 5
    },
    showSearch: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    continuousList: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  components: {
    Categories: Categories,
    EmojiList: EmojiList,
    InputSearch: InputSearch
  },
  data: function data() {
    return {
      mapEmojis: {},
      category: "Peoples",
      filterEmoji: ""
    };
  },
  created: function created() {
    this.mapperData(this.pack);
  },
  methods: {
    onChangeCategory: function onChangeCategory(category) {
      this.category = category.name;
      this.$emit("changeCategory", this.category);
    },
    onSelectEmoji: function onSelectEmoji(emoji) {
      this.updateFrequenty(emoji);
      this.$emit("select", emoji);
    },
    updateFrequenty: function updateFrequenty(emoji) {
      this.mapEmojis["Frequenty"] = _toConsumableArray(new Set([].concat(_toConsumableArray(this.mapEmojis["Frequenty"]), [emoji])));
    },
    mapperData: function mapperData(dataEmojis) {
      var _this = this;

      this.$set(this.mapEmojis, "Frequenty", []);
      dataEmojis.forEach(function (emoji) {
        var _category = emoji["category"];

        if (!_this.mapEmojis[_category]) {
          _this.$set(_this.mapEmojis, _category, [emoji]);
        } else {
          _this.mapEmojis[_category].push(emoji);
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    delete this.mapEmojis;
  },
  computed: {
    emojis: function emojis() {
      return this.mapEmojis;
    }
  }
});
// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var VEmojiPicker_VEmojiPickervue_type_script_lang_js_ = (VEmojiPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue?vue&type=style&index=0&id=774a9568&lang=scss&scoped=true&
var VEmojiPickervue_type_style_index_0_id_774a9568_lang_scss_scoped_true_ = __webpack_require__("79a4");

// CONCATENATED MODULE: ./src/components/VEmojiPicker/VEmojiPicker.vue






/* normalize component */

var VEmojiPicker_component = normalizeComponent(
  VEmojiPicker_VEmojiPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "774a9568",
  null
  
)

/* harmony default export */ var VEmojiPicker = __webpack_exports__["a"] = (VEmojiPicker_component.exports);

/***/ }),

/***/ "aa19":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#Emojis[data-v-cb926828]{display:block;width:100%;max-width:100%}#Emojis[data-v-cb926828] ::-webkit-scrollbar{border-radius:4px;width:4px;background:hsla(0,0%,48.6%,.36)}#Emojis[data-v-cb926828] ::-webkit-scrollbar-track{border-radius:4px}#Emojis[data-v-cb926828] ::-webkit-scrollbar-thumb{border-radius:4px;background:rgba(0,0,0,.22)}#Emojis[data-v-cb926828] ::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.38)}.container-emoji[data-v-cb926828]{overflow-x:hidden;overflow-y:scroll;height:350px}.category-title[data-v-cb926828]{text-transform:uppercase;font-size:.8em;padding:5px 0 0 16px;color:#848484}.category-title[data-v-cb926828]:not(:first-of-type){padding:10px 0 0 16px}.grid-emojis[data-v-cb926828]{display:grid;margin:5px 0;-webkit-box-align:start;-ms-flex-align:start;align-items:start}.emoji[data-v-cb926828]{display:inline-block;text-align:center;font-size:25px;padding:5px;max-height:30px;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9013");
 // Declare install function executed by Vue.use()

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VEmojiPicker", _components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
} // Create module definition for Vue.use()

var plugin = {
  install: install
}; // Auto-install when vue is found (eg. in browser via <script> tag)

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (_components_VEmojiPicker_VEmojiPicker_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
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

/***/ "d64e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e7b3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2610b8f7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d7ec":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2bed");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("fcd3b8ca", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ddda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_cb926828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("15a3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_cb926828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_cb926828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmojiList_vue_vue_type_style_index_0_id_cb926828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e7b3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#Categories[data-v-ec684a60]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e4e4e4;background:#f0f0f0;color:#fff}.category[data-v-ec684a60]{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-top:5px;padding-bottom:5px;text-align:center;cursor:pointer}.category.active[data-v-ec684a60]{border-bottom:3px solid #009688;-webkit-filter:saturate(3);filter:saturate(3);padding-bottom:2px}.category>img[data-v-ec684a60]{width:22px;height:22px}.category[data-v-ec684a60]:hover{-webkit-filter:saturate(3);filter:saturate(3)}", ""]);

// exports


/***/ }),

/***/ "f6fd":
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


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return src["b" /* install */]; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src["a" /* default */]);



/***/ }),

/***/ "ff12":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0547");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("5eb55e04", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ });
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = [{"emoji":"😀","description":"grinning face","category":"Peoples","aliases":["grinning"],"tags":["smile","happy"]},{"emoji":"😃","description":"smiling face with open mouth","category":"Peoples","aliases":["smiley"],"tags":["happy","joy","haha"]},{"emoji":"😄","description":"smiling face with open mouth & smiling eyes","category":"Peoples","aliases":["smile"],"tags":["happy","joy","laugh","pleased"]},{"emoji":"😁","description":"grinning face with smiling eyes","category":"Peoples","aliases":["grin"],"tags":[]},{"emoji":"😆","description":"smiling face with open mouth & closed eyes","category":"Peoples","aliases":["laughing","satisfied"],"tags":["happy","haha"]},{"emoji":"😅","description":"smiling face with open mouth & cold sweat","category":"Peoples","aliases":["sweat_smile"],"tags":["hot"]},{"emoji":"😂","description":"face with tears of joy","category":"Peoples","aliases":["joy"],"tags":["tears"]},{"emoji":"🤣","description":"rolling on the floor laughing","category":"Peoples","aliases":["rofl"],"tags":["lol","laughing"],"unicode_version":"9.0"},{"emoji":"😌","description":"smiling face","category":"Peoples","aliases":["relaxed"],"tags":["blush","pleased"]},{"emoji":"😊","description":"smiling face with smiling eyes","category":"Peoples","aliases":["blush"],"tags":["proud"]},{"emoji":"😇","description":"smiling face with halo","category":"Peoples","aliases":["innocent"],"tags":["angel"]},{"emoji":"🙂","description":"slightly smiling face","category":"Peoples","aliases":["slightly_smiling_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🙃","description":"upside-down face","category":"Peoples","aliases":["upside_down_face"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😉","description":"winking face","category":"Peoples","aliases":["wink"],"tags":["flirt"]},{"emoji":"😌","description":"relieved face","category":"Peoples","aliases":["relieved"],"tags":["whew"]},{"emoji":"😍","description":"smiling face with heart-eyes","category":"Peoples","aliases":["heart_eyes"],"tags":["love","crush"]},{"emoji":"😘","description":"face blowing a kiss","category":"Peoples","aliases":["kissing_heart"],"tags":["flirt"]},{"emoji":"😗","description":"kissing face","category":"Peoples","aliases":["kissing"],"tags":[]},{"emoji":"😙","description":"kissing face with smiling eyes","category":"Peoples","aliases":["kissing_smiling_eyes"],"tags":[]},{"emoji":"😚","description":"kissing face with closed eyes","category":"Peoples","aliases":["kissing_closed_eyes"],"tags":[]},{"emoji":"😋","description":"face savouring delicious food","category":"Peoples","aliases":["yum"],"tags":["tongue","lick"]},{"emoji":"😜","description":"face with stuck-out tongue & winking eye","category":"Peoples","aliases":["stuck_out_tongue_winking_eye"],"tags":["prank","silly"]},{"emoji":"😝","description":"face with stuck-out tongue & closed eyes","category":"Peoples","aliases":["stuck_out_tongue_closed_eyes"],"tags":["prank"]},{"emoji":"😛","description":"face with stuck-out tongue","category":"Peoples","aliases":["stuck_out_tongue"],"tags":[]},{"emoji":"🤑","description":"money-mouth face","category":"Peoples","aliases":["money_mouth_face"],"tags":["rich"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤗","description":"hugging face","category":"Peoples","aliases":["hugs"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤓","description":"nerd face","category":"Peoples","aliases":["nerd_face"],"tags":["geek","glasses"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😎","description":"smiling face with sunglasses","category":"Peoples","aliases":["sunglasses"],"tags":["cool"]},{"emoji":"🤡","description":"clown face","category":"Peoples","aliases":["clown_face"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤠","description":"cowboy hat face","category":"Peoples","aliases":["cowboy_hat_face"],"tags":[],"unicode_version":"9.0"},{"emoji":"😏","description":"smirking face","category":"Peoples","aliases":["smirk"],"tags":["smug"]},{"emoji":"😒","description":"unamused face","category":"Peoples","aliases":["unamused"],"tags":["meh"]},{"emoji":"😞","description":"disappointed face","category":"Peoples","aliases":["disappointed"],"tags":["sad"]},{"emoji":"😔","description":"pensive face","category":"Peoples","aliases":["pensive"],"tags":[]},{"emoji":"😟","description":"worried face","category":"Peoples","aliases":["worried"],"tags":["nervous"]},{"emoji":"😕","description":"confused face","category":"Peoples","aliases":["confused"],"tags":[]},{"emoji":"🙁","description":"slightly frowning face","category":"Peoples","aliases":["slightly_frowning_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☹️","description":"frowning face","category":"Peoples","aliases":["frowning_face"],"tags":[],"ios_version":"9.1"},{"emoji":"😣","description":"persevering face","category":"Peoples","aliases":["persevere"],"tags":["struggling"]},{"emoji":"😖","description":"confounded face","category":"Peoples","aliases":["confounded"],"tags":[]},{"emoji":"😫","description":"tired face","category":"Peoples","aliases":["tired_face"],"tags":["upset","whine"]},{"emoji":"😩","description":"weary face","category":"Peoples","aliases":["weary"],"tags":["tired"]},{"emoji":"😤","description":"face with steam from nose","category":"Peoples","aliases":["triumph"],"tags":["smug"]},{"emoji":"😠","description":"angry face","category":"Peoples","aliases":["angry"],"tags":["mad","annoyed"]},{"emoji":"😡","description":"pouting face","category":"Peoples","aliases":["rage","pout"],"tags":["angry"]},{"emoji":"😶","description":"face without mouth","category":"Peoples","aliases":["no_mouth"],"tags":["mute","silence"]},{"emoji":"😐","description":"neutral face","category":"Peoples","aliases":["neutral_face"],"tags":["meh"]},{"emoji":"😑","description":"expressionless face","category":"Peoples","aliases":["expressionless"],"tags":[]},{"emoji":"😯","description":"hushed face","category":"Peoples","aliases":["hushed"],"tags":["silence","speechless"]},{"emoji":"😦","description":"frowning face with open mouth","category":"Peoples","aliases":["frowning"],"tags":[]},{"emoji":"😧","description":"anguished face","category":"Peoples","aliases":["anguished"],"tags":["stunned"]},{"emoji":"😮","description":"face with open mouth","category":"Peoples","aliases":["open_mouth"],"tags":["surprise","impressed","wow"]},{"emoji":"😲","description":"astonished face","category":"Peoples","aliases":["astonished"],"tags":["amazed","gasp"]},{"emoji":"😵","description":"dizzy face","category":"Peoples","aliases":["dizzy_face"],"tags":[]},{"emoji":"😳","description":"flushed face","category":"Peoples","aliases":["flushed"],"tags":[]},{"emoji":"😱","description":"face screaming in fear","category":"Peoples","aliases":["scream"],"tags":["horror","shocked"]},{"emoji":"😨","description":"fearful face","category":"Peoples","aliases":["fearful"],"tags":["scared","shocked","oops"]},{"emoji":"😰","description":"face with open mouth & cold sweat","category":"Peoples","aliases":["cold_sweat"],"tags":["nervous"]},{"emoji":"😢","description":"crying face","category":"Peoples","aliases":["cry"],"tags":["sad","tear"]},{"emoji":"😥","description":"disappointed but relieved face","category":"Peoples","aliases":["disappointed_relieved"],"tags":["phew","sweat","nervous"]},{"emoji":"🤤","description":"drooling face","category":"Peoples","aliases":["drooling_face"],"tags":[],"unicode_version":"9.0"},{"emoji":"😭","description":"loudly crying face","category":"Peoples","aliases":["sob"],"tags":["sad","cry","bawling"]},{"emoji":"😓","description":"face with cold sweat","category":"Peoples","aliases":["sweat"],"tags":[]},{"emoji":"😪","description":"sleepy face","category":"Peoples","aliases":["sleepy"],"tags":["tired"]},{"emoji":"😴","description":"sleeping face","category":"Peoples","aliases":["sleeping"],"tags":["zzz"]},{"emoji":"🙄","description":"face with rolling eyes","category":"Peoples","aliases":["roll_eyes"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤔","description":"thinking face","category":"Peoples","aliases":["thinking"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤥","description":"lying face","category":"Peoples","aliases":["lying_face"],"tags":["liar"],"unicode_version":"9.0"},{"emoji":"😬","description":"grimacing face","category":"Peoples","aliases":["grimacing"],"tags":[]},{"emoji":"🤐","description":"zipper-mouth face","category":"Peoples","aliases":["zipper_mouth_face"],"tags":["silence","hush"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤢","description":"nauseated face","category":"Peoples","aliases":["nauseated_face"],"tags":["sick","barf","disgusted"],"unicode_version":"9.0"},{"emoji":"🤧","description":"sneezing face","category":"Peoples","aliases":["sneezing_face"],"tags":["achoo","sick"],"unicode_version":"9.0"},{"emoji":"😷","description":"face with medical mask","category":"Peoples","aliases":["mask"],"tags":["sick","ill"]},{"emoji":"🤒","description":"face with thermometer","category":"Peoples","aliases":["face_with_thermometer"],"tags":["sick"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🤕","description":"face with head-bandage","category":"Peoples","aliases":["face_with_head_bandage"],"tags":["hurt"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"😈","description":"smiling face with horns","category":"Peoples","aliases":["smiling_imp"],"tags":["devil","evil","horns"]},{"emoji":"👿","description":"angry face with horns","category":"Peoples","aliases":["imp"],"tags":["angry","devil","evil","horns"]},{"emoji":"👹","description":"ogre","category":"Peoples","aliases":["japanese_ogre"],"tags":["monster"]},{"emoji":"👺","description":"goblin","category":"Peoples","aliases":["japanese_goblin"],"tags":[]},{"emoji":"💩","description":"pile of poo","category":"Peoples","aliases":["hankey","poop","shit"],"tags":["crap"]},{"emoji":"👻","description":"ghost","category":"Peoples","aliases":["ghost"],"tags":["halloween"]},{"emoji":"💀","description":"skull","category":"Peoples","aliases":["skull"],"tags":["dead","danger","poison"]},{"emoji":"☠️","description":"skull and crossbones","category":"Peoples","aliases":["skull_and_crossbones"],"tags":["danger","pirate"],"ios_version":"9.1"},{"emoji":"👽","description":"alien","category":"Peoples","aliases":["alien"],"tags":["ufo"]},{"emoji":"👾","description":"alien monster","category":"Peoples","aliases":["space_invader"],"tags":["game","retro"]},{"emoji":"🤖","description":"robot face","category":"Peoples","aliases":["robot"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🎃","description":"jack-o-lantern","category":"Peoples","aliases":["jack_o_lantern"],"tags":["halloween"]},{"emoji":"😺","description":"smiling cat face with open mouth","category":"Peoples","aliases":["smiley_cat"],"tags":[]},{"emoji":"😸","description":"grinning cat face with smiling eyes","category":"Peoples","aliases":["smile_cat"],"tags":[]},{"emoji":"😹","description":"cat face with tears of joy","category":"Peoples","aliases":["joy_cat"],"tags":[]},{"emoji":"😻","description":"smiling cat face with heart-eyes","category":"Peoples","aliases":["heart_eyes_cat"],"tags":[]},{"emoji":"😼","description":"cat face with wry smile","category":"Peoples","aliases":["smirk_cat"],"tags":[]},{"emoji":"😽","description":"kissing cat face with closed eyes","category":"Peoples","aliases":["kissing_cat"],"tags":[]},{"emoji":"🙀","description":"weary cat face","category":"Peoples","aliases":["scream_cat"],"tags":["horror"]},{"emoji":"😿","description":"crying cat face","category":"Peoples","aliases":["crying_cat_face"],"tags":["sad","tear"]},{"emoji":"😾","description":"pouting cat face","category":"Peoples","aliases":["pouting_cat"],"tags":[]},{"emoji":"👐","description":"open hands","category":"Peoples","aliases":["open_hands"],"tags":[]},{"emoji":"🙌","description":"raising hands","category":"Peoples","aliases":["raised_hands"],"tags":["hooray"]},{"emoji":"👏","description":"clapping hands","category":"Peoples","aliases":["clap"],"tags":["praise","applause"]},{"emoji":"🙏","description":"folded hands","category":"Peoples","aliases":["pray"],"tags":["please","hope","wish"]},{"emoji":"🤝","description":"handshake","category":"Peoples","aliases":["handshake"],"tags":["deal"],"unicode_version":"9.0"},{"emoji":"👍","description":"thumbs up","category":"Peoples","aliases":["+1","thumbsup"],"tags":["approve","ok"]},{"emoji":"👎","description":"thumbs down","category":"Peoples","aliases":["-1","thumbsdown"],"tags":["disapprove","bury"]},{"emoji":"👊","description":"oncoming fist","category":"Peoples","aliases":["fist_oncoming","facepunch","punch"],"tags":["attack"]},{"emoji":"✊","description":"raised fist","category":"Peoples","aliases":["fist_raised","fist"],"tags":["power"]},{"emoji":"🤛","description":"left-facing fist","category":"Peoples","aliases":["fist_left"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤜","description":"right-facing fist","category":"Peoples","aliases":["fist_right"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤞","description":"crossed fingers","category":"Peoples","aliases":["crossed_fingers"],"tags":["luck","hopeful"],"unicode_version":"9.0"},{"emoji":"✌️","description":"victory hand","category":"Peoples","aliases":["v"],"tags":["victory","peace"]},{"emoji":"🤘","description":"sign of the horns","category":"Peoples","aliases":["metal"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"👌","description":"OK hand","category":"Peoples","aliases":["ok_hand"],"tags":[]},{"emoji":"👈","description":"backhand index pointing left","category":"Peoples","aliases":["point_left"],"tags":[]},{"emoji":"👉","description":"backhand index pointing right","category":"Peoples","aliases":["point_right"],"tags":[]},{"emoji":"👆","description":"backhand index pointing up","category":"Peoples","aliases":["point_up_2"],"tags":[]},{"emoji":"👇","description":"backhand index pointing down","category":"Peoples","aliases":["point_down"],"tags":[]},{"emoji":"☝️","description":"index pointing up","category":"Peoples","aliases":["point_up"],"tags":[]},{"emoji":"✋","description":"raised hand","category":"Peoples","aliases":["hand","raised_hand"],"tags":["highfive","stop"]},{"emoji":"🤚","description":"raised back of hand","category":"Peoples","aliases":["raised_back_of_hand"],"tags":[],"unicode_version":"9.0"},{"emoji":"🖐","description":"raised hand with fingers splayed","category":"Peoples","aliases":["raised_hand_with_fingers_splayed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖖","description":"vulcan salute","category":"Peoples","aliases":["vulcan_salute"],"tags":["prosper","spock"],"unicode_version":"7.0"},{"emoji":"👋","description":"waving hand","category":"Peoples","aliases":["wave"],"tags":["goodbye"]},{"emoji":"🤙","description":"call me hand","category":"Peoples","aliases":["call_me_hand"],"tags":[],"unicode_version":"9.0"},{"emoji":"💪","description":"flexed biceps","category":"Peoples","aliases":["muscle"],"tags":["flex","bicep","strong","workout"]},{"emoji":"🖕","description":"middle finger","category":"Peoples","aliases":["middle_finger","fu"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✍️","description":"writing hand","category":"Peoples","aliases":["writing_hand"],"tags":[],"ios_version":"9.1"},{"emoji":"🤳","description":"selfie","category":"Peoples","aliases":["selfie"],"tags":[],"unicode_version":"9.0"},{"emoji":"💅","description":"nail polish","category":"Peoples","aliases":["nail_care"],"tags":["beauty","manicure"]},{"emoji":"💍","description":"ring","category":"Peoples","aliases":["ring"],"tags":["wedding","marriage","engaged"]},{"emoji":"💄","description":"lipstick","category":"Peoples","aliases":["lipstick"],"tags":["makeup"]},{"emoji":"💋","description":"kiss mark","category":"Peoples","aliases":["kiss"],"tags":["lipstick"]},{"emoji":"👄","description":"mouth","category":"Peoples","aliases":["lips"],"tags":["kiss"]},{"emoji":"👅","description":"tongue","category":"Peoples","aliases":["tongue"],"tags":["taste"]},{"emoji":"👂","description":"ear","category":"Peoples","aliases":["ear"],"tags":["hear","sound","listen"]},{"emoji":"👃","description":"nose","category":"Peoples","aliases":["nose"],"tags":["smell"]},{"emoji":"👣","description":"footprints","category":"Peoples","aliases":["footprints"],"tags":["feet","tracks"]},{"emoji":"👁","description":"eye","category":"Peoples","aliases":["eye"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"👀","description":"eyes","category":"Peoples","aliases":["eyes"],"tags":["look","see","watch"]},{"emoji":"🗣","description":"speaking head","category":"Peoples","aliases":["speaking_head"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"👤","description":"bust in silhouette","category":"Peoples","aliases":["bust_in_silhouette"],"tags":["user"]},{"emoji":"👥","description":"busts in silhouette","category":"Peoples","aliases":["busts_in_silhouette"],"tags":["users","group","team"]},{"emoji":"👶","description":"baby","category":"Peoples","aliases":["baby"],"tags":["child","newborn"]},{"emoji":"👦","description":"boy","category":"Peoples","aliases":["boy"],"tags":["child"]},{"emoji":"👧","description":"girl","category":"Peoples","aliases":["girl"],"tags":["child"]},{"emoji":"👨","description":"man","category":"Peoples","aliases":["man"],"tags":["mustache","father","dad"]},{"emoji":"👩","description":"woman","category":"Peoples","aliases":["woman"],"tags":["girls"]},{"emoji":"👱‍♀","description":"blond-haired woman","category":"Peoples","aliases":["blonde_woman"],"tags":[]},{"emoji":"👱","description":"blond-haired person","category":"Peoples","aliases":["blonde_man","person_with_blond_hair"],"tags":["boy"]},{"emoji":"👴","description":"old man","category":"Peoples","aliases":["older_man"],"tags":[]},{"emoji":"👵","description":"old woman","category":"Peoples","aliases":["older_woman"],"tags":[]},{"emoji":"👲","description":"man with Chinese cap","category":"Peoples","aliases":["man_with_gua_pi_mao"],"tags":[]},{"emoji":"👳‍♀","description":"woman wearing turban","category":"Peoples","aliases":["woman_with_turban"],"tags":[]},{"emoji":"👳","description":"person wearing turban","category":"Peoples","aliases":["man_with_turban"],"tags":[]},{"emoji":"👮‍♀","description":"woman police officer","category":"Peoples","aliases":["policewoman"],"tags":[]},{"emoji":"👮","description":"police officer","category":"Peoples","aliases":["policeman","cop"],"tags":["police","law"]},{"emoji":"👷‍♀","description":"woman construction worker","category":"Peoples","aliases":["construction_worker_woman"],"tags":[]},{"emoji":"👷","description":"construction worker","category":"Peoples","aliases":["construction_worker_man","construction_worker"],"tags":["helmet"]},{"emoji":"💂‍♀","description":"woman guard","category":"Peoples","aliases":["guardswoman"],"tags":[]},{"emoji":"💂","description":"guard","category":"Peoples","aliases":["guardsman"],"tags":[]},{"emoji":"👩‍⚕","description":"woman health worker","category":"Peoples","aliases":["woman_health_worker"],"tags":["doctor","nurse"]},{"emoji":"👨‍⚕","description":"man health worker","category":"Peoples","aliases":["man_health_worker"],"tags":["doctor","nurse"]},{"emoji":"👩‍🌾","description":"woman farmer","category":"Peoples","aliases":["woman_farmer"],"tags":[]},{"emoji":"👨‍🌾","description":"man farmer","category":"Peoples","aliases":["man_farmer"],"tags":[]},{"emoji":"👩‍🍳","description":"woman cook","category":"Peoples","aliases":["woman_cook"],"tags":["chef"]},{"emoji":"👨‍🍳","description":"man cook","category":"Peoples","aliases":["man_cook"],"tags":["chef"]},{"emoji":"👩‍🎓","description":"woman student","category":"Peoples","aliases":["woman_student"],"tags":["graduation"]},{"emoji":"👨‍🎓","description":"man student","category":"Peoples","aliases":["man_student"],"tags":["graduation"]},{"emoji":"👩‍🎤","description":"woman singer","category":"Peoples","aliases":["woman_singer"],"tags":["rockstar"]},{"emoji":"👨‍🎤","description":"man singer","category":"Peoples","aliases":["man_singer"],"tags":["rockstar"]},{"emoji":"👩‍🏫","description":"woman teacher","category":"Peoples","aliases":["woman_teacher"],"tags":["school","professor"]},{"emoji":"👨‍🏫","description":"man teacher","category":"Peoples","aliases":["man_teacher"],"tags":["school","professor"]},{"emoji":"👩‍🏭","description":"woman factory worker","category":"Peoples","aliases":["woman_factory_worker"],"tags":[]},{"emoji":"👨‍🏭","description":"man factory worker","category":"Peoples","aliases":["man_factory_worker"],"tags":[]},{"emoji":"👩‍💻","description":"woman technologist","category":"Peoples","aliases":["woman_technologist"],"tags":["coder"]},{"emoji":"👨‍💻","description":"man technologist","category":"Peoples","aliases":["man_technologist"],"tags":["coder"]},{"emoji":"👩‍💼","description":"woman office worker","category":"Peoples","aliases":["woman_office_worker"],"tags":["business"]},{"emoji":"👨‍💼","description":"man office worker","category":"Peoples","aliases":["man_office_worker"],"tags":["business"]},{"emoji":"👩‍🔧","description":"woman mechanic","category":"Peoples","aliases":["woman_mechanic"],"tags":[]},{"emoji":"👨‍🔧","description":"man mechanic","category":"Peoples","aliases":["man_mechanic"],"tags":[]},{"emoji":"👩‍🔬","description":"woman scientist","category":"Peoples","aliases":["woman_scientist"],"tags":["research"]},{"emoji":"👨‍🔬","description":"man scientist","category":"Peoples","aliases":["man_scientist"],"tags":["research"]},{"emoji":"👩‍🎨","description":"woman artist","category":"Peoples","aliases":["woman_artist"],"tags":["painter"]},{"emoji":"👨‍🎨","description":"man artist","category":"Peoples","aliases":["man_artist"],"tags":["painter"]},{"emoji":"👩‍🚒","description":"woman firefighter","category":"Peoples","aliases":["woman_firefighter"],"tags":[]},{"emoji":"👨‍🚒","description":"man firefighter","category":"Peoples","aliases":["man_firefighter"],"tags":[]},{"emoji":"👩‍🚀","description":"woman astronaut","category":"Peoples","aliases":["woman_astronaut"],"tags":["space"]},{"emoji":"👨‍🚀","description":"man astronaut","category":"Peoples","aliases":["man_astronaut"],"tags":["space"]},{"emoji":"🤶","description":"Mrs. Claus","category":"Peoples","aliases":["mrs_claus"],"tags":["santa"],"unicode_version":"9.0"},{"emoji":"🎅","description":"Santa Claus","category":"Peoples","aliases":["santa"],"tags":["christmas"]},{"emoji":"👸","description":"princess","category":"Peoples","aliases":["princess"],"tags":["blonde","crown","royal"]},{"emoji":"🤴","description":"prince","category":"Peoples","aliases":["prince"],"tags":["crown","royal"],"unicode_version":"9.0"},{"emoji":"👰","description":"bride with veil","category":"Peoples","aliases":["bride_with_veil"],"tags":["marriage","wedding"]},{"emoji":"🤵","description":"man in tuxedo","category":"Peoples","aliases":["man_in_tuxedo"],"tags":["groom","marriage","wedding"],"unicode_version":"9.0"},{"emoji":"👼","description":"baby angel","category":"Peoples","aliases":["angel"],"tags":[]},{"emoji":"🤰","description":"pregnant woman","category":"Peoples","aliases":["pregnant_woman"],"tags":[],"unicode_version":"9.0"},{"emoji":"🙇‍♀","description":"woman bowing","category":"Peoples","aliases":["bowing_woman"],"tags":["respect","thanks"]},{"emoji":"🙇","description":"person bowing","category":"Peoples","aliases":["bowing_man","bow"],"tags":["respect","thanks"]},{"emoji":"💁","description":"person tipping hand","category":"Peoples","aliases":["tipping_hand_woman","information_desk_person","sassy_woman"],"tags":[]},{"emoji":"💁‍♂","description":"man tipping hand","category":"Peoples","aliases":["tipping_hand_man","sassy_man"],"tags":["information"]},{"emoji":"🙅","description":"person gesturing NO","category":"Peoples","aliases":["no_good_woman","no_good","ng_woman"],"tags":["stop","halt"]},{"emoji":"🙅‍♂","description":"man gesturing NO","category":"Peoples","aliases":["no_good_man","ng_man"],"tags":["stop","halt"]},{"emoji":"🙆","description":"person gesturing OK","category":"Peoples","aliases":["ok_woman"],"tags":[]},{"emoji":"🙆‍♂","description":"man gesturing OK","category":"Peoples","aliases":["ok_man"],"tags":[]},{"emoji":"🙋","description":"person raising hand","category":"Peoples","aliases":["raising_hand_woman","raising_hand"],"tags":[]},{"emoji":"🙋‍♂","description":"man raising hand","category":"Peoples","aliases":["raising_hand_man"],"tags":[]},{"emoji":"🤦‍♀","description":"woman facepalming","category":"Peoples","aliases":["woman_facepalming"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤦‍♂","description":"man facepalming","category":"Peoples","aliases":["man_facepalming"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤷‍♀","description":"woman shrugging","category":"Peoples","aliases":["woman_shrugging"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤷‍♂","description":"man shrugging","category":"Peoples","aliases":["man_shrugging"],"tags":[],"unicode_version":"9.0"},{"emoji":"🙎","description":"person pouting","category":"Peoples","aliases":["pouting_woman","person_with_pouting_face"],"tags":[]},{"emoji":"🙎‍♂","description":"man pouting","category":"Peoples","aliases":["pouting_man"],"tags":[]},{"emoji":"🙍","description":"person frowning","category":"Peoples","aliases":["frowning_woman","person_frowning"],"tags":["sad"]},{"emoji":"🙍‍♂","description":"man frowning","category":"Peoples","aliases":["frowning_man"],"tags":[]},{"emoji":"💇","description":"person getting haircut","category":"Peoples","aliases":["haircut_woman","haircut"],"tags":["beauty"]},{"emoji":"💇‍♂","description":"man getting haircut","category":"Peoples","aliases":["haircut_man"],"tags":[]},{"emoji":"💆","description":"person getting massage","category":"Peoples","aliases":["massage_woman","massage"],"tags":["spa"]},{"emoji":"💆‍♂","description":"man getting massage","category":"Peoples","aliases":["massage_man"],"tags":["spa"]},{"emoji":"🕴","description":"man in business suit levitating","category":"Peoples","aliases":["business_suit_levitating"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💃","description":"woman dancing","category":"Peoples","aliases":["dancer"],"tags":["dress"]},{"emoji":"🕺","description":"man dancing","category":"Peoples","aliases":["man_dancing"],"tags":["dancer"],"unicode_version":"9.0"},{"emoji":"👯","description":"people with bunny ears partying","category":"Peoples","aliases":["dancing_women","dancers"],"tags":["bunny"]},{"emoji":"👯‍♂","description":"men with bunny ears partying","category":"Peoples","aliases":["dancing_men"],"tags":["bunny"]},{"emoji":"🚶‍♀","description":"woman walking","category":"Peoples","aliases":["walking_woman"],"tags":[]},{"emoji":"🚶","description":"person walking","category":"Peoples","aliases":["walking_man","walking"],"tags":[]},{"emoji":"🏃‍♀","description":"woman running","category":"Peoples","aliases":["running_woman"],"tags":["exercise","workout","marathon"]},{"emoji":"🏃","description":"person running","category":"Peoples","aliases":["running_man","runner","running"],"tags":["exercise","workout","marathon"]},{"emoji":"👫","description":"man and woman holding hands","category":"Peoples","aliases":["couple"],"tags":["date"]},{"emoji":"👭","description":"two women holding hands","category":"Peoples","aliases":["two_women_holding_hands"],"tags":["couple","date"]},{"emoji":"👬","description":"two men holding hands","category":"Peoples","aliases":["two_men_holding_hands"],"tags":["couple","date"]},{"emoji":"💑","description":"couple with heart","category":"Peoples","aliases":["couple_with_heart_woman_man","couple_with_heart"],"tags":[]},{"emoji":"👩‍❤️‍👩","description":"couple with heart: woman, woman","category":"Peoples","aliases":["couple_with_heart_woman_woman"],"tags":[]},{"emoji":"👨‍❤️‍👨","description":"couple with heart: man, man","category":"Peoples","aliases":["couple_with_heart_man_man"],"tags":[]},{"emoji":"💏","description":"kiss","category":"Peoples","aliases":["couplekiss_man_woman"],"tags":[]},{"emoji":"👩‍❤️‍💋‍👩","description":"kiss: woman, woman","category":"Peoples","aliases":["couplekiss_woman_woman"],"tags":[]},{"emoji":"👨‍❤️‍💋‍👨","description":"kiss: man, man","category":"Peoples","aliases":["couplekiss_man_man"],"tags":[]},{"emoji":"👪","description":"family","category":"Peoples","aliases":["family_man_woman_boy","family"],"tags":["home","parents","child"]},{"emoji":"👨‍👩‍👧","description":"family: man, woman, girl","category":"Peoples","aliases":["family_man_woman_girl"],"tags":[]},{"emoji":"👨‍👩‍👧‍👦","description":"family: man, woman, girl, boy","category":"Peoples","aliases":["family_man_woman_girl_boy"],"tags":[]},{"emoji":"👨‍👩‍👦‍👦","description":"family: man, woman, boy, boy","category":"Peoples","aliases":["family_man_woman_boy_boy"],"tags":[]},{"emoji":"👨‍👩‍👧‍👧","description":"family: man, woman, girl, girl","category":"Peoples","aliases":["family_man_woman_girl_girl"],"tags":[]},{"emoji":"👩‍👩‍👦","description":"family: woman, woman, boy","category":"Peoples","aliases":["family_woman_woman_boy"],"tags":[]},{"emoji":"👩‍👩‍👧","description":"family: woman, woman, girl","category":"Peoples","aliases":["family_woman_woman_girl"],"tags":[]},{"emoji":"👩‍👩‍👧‍👦","description":"family: woman, woman, girl, boy","category":"Peoples","aliases":["family_woman_woman_girl_boy"],"tags":[]},{"emoji":"👩‍👩‍👦‍👦","description":"family: woman, woman, boy, boy","category":"Peoples","aliases":["family_woman_woman_boy_boy"],"tags":[]},{"emoji":"👩‍👩‍👧‍👧","description":"family: woman, woman, girl, girl","category":"Peoples","aliases":["family_woman_woman_girl_girl"],"tags":[]},{"emoji":"👨‍👨‍👦","description":"family: man, man, boy","category":"Peoples","aliases":["family_man_man_boy"],"tags":[]},{"emoji":"👨‍👨‍👧","description":"family: man, man, girl","category":"Peoples","aliases":["family_man_man_girl"],"tags":[]},{"emoji":"👨‍👨‍👧‍👦","description":"family: man, man, girl, boy","category":"Peoples","aliases":["family_man_man_girl_boy"],"tags":[]},{"emoji":"👨‍👨‍👦‍👦","description":"family: man, man, boy, boy","category":"Peoples","aliases":["family_man_man_boy_boy"],"tags":[]},{"emoji":"👨‍👨‍👧‍👧","description":"family: man, man, girl, girl","category":"Peoples","aliases":["family_man_man_girl_girl"],"tags":[]},{"emoji":"👩‍👦","description":"family: woman, boy","category":"Peoples","aliases":["family_woman_boy"],"tags":[]},{"emoji":"👩‍👧","description":"family: woman, girl","category":"Peoples","aliases":["family_woman_girl"],"tags":[]},{"emoji":"👩‍👧‍👦","description":"family: woman, girl, boy","category":"Peoples","aliases":["family_woman_girl_boy"],"tags":[]},{"emoji":"👩‍👦‍👦","description":"family: woman, boy, boy","category":"Peoples","aliases":["family_woman_boy_boy"],"tags":[]},{"emoji":"👩‍👧‍👧","description":"family: woman, girl, girl","category":"Peoples","aliases":["family_woman_girl_girl"],"tags":[]},{"emoji":"👨‍👦","description":"family: man, boy","category":"Peoples","aliases":["family_man_boy"],"tags":[]},{"emoji":"👨‍👧","description":"family: man, girl","category":"Peoples","aliases":["family_man_girl"],"tags":[]},{"emoji":"👨‍👧‍👦","description":"family: man, girl, boy","category":"Peoples","aliases":["family_man_girl_boy"],"tags":[]},{"emoji":"👨‍👦‍👦","description":"family: man, boy, boy","category":"Peoples","aliases":["family_man_boy_boy"],"tags":[]},{"emoji":"👨‍👧‍👧","description":"family: man, girl, girl","category":"Peoples","aliases":["family_man_girl_girl"],"tags":[]},{"emoji":"👚","description":"woman’s clothes","category":"Peoples","aliases":["womans_clothes"],"tags":[]},{"emoji":"👕","description":"t-shirt","category":"Peoples","aliases":["shirt","tshirt"],"tags":[]},{"emoji":"👖","description":"jeans","category":"Peoples","aliases":["jeans"],"tags":["pants"]},{"emoji":"👔","description":"necktie","category":"Peoples","aliases":["necktie"],"tags":["shirt","formal"]},{"emoji":"👗","description":"dress","category":"Peoples","aliases":["dress"],"tags":[]},{"emoji":"👙","description":"bikini","category":"Peoples","aliases":["bikini"],"tags":["beach"]},{"emoji":"👘","description":"kimono","category":"Peoples","aliases":["kimono"],"tags":[]},{"emoji":"👠","description":"high-heeled shoe","category":"Peoples","aliases":["high_heel"],"tags":["shoe"]},{"emoji":"👡","description":"woman’s sandal","category":"Peoples","aliases":["sandal"],"tags":["shoe"]},{"emoji":"👢","description":"woman’s boot","category":"Peoples","aliases":["boot"],"tags":[]},{"emoji":"👞","description":"man’s shoe","category":"Peoples","aliases":["mans_shoe","shoe"],"tags":[]},{"emoji":"👟","description":"running shoe","category":"Peoples","aliases":["athletic_shoe"],"tags":["sneaker","sport","running"]},{"emoji":"👒","description":"woman’s hat","category":"Peoples","aliases":["womans_hat"],"tags":[]},{"emoji":"🎩","description":"top hat","category":"Peoples","aliases":["tophat"],"tags":["hat","classy"]},{"emoji":"🎓","description":"graduation cap","category":"Peoples","aliases":["mortar_board"],"tags":["education","college","university","graduation"]},{"emoji":"👑","description":"crown","category":"Peoples","aliases":["crown"],"tags":["king","queen","royal"]},{"emoji":"⛑","description":"rescue worker’s helmet","category":"Peoples","aliases":["rescue_worker_helmet"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🎒","description":"school backpack","category":"Peoples","aliases":["school_satchel"],"tags":[]},{"emoji":"👝","description":"clutch bag","category":"Peoples","aliases":["pouch"],"tags":["bag"]},{"emoji":"👛","description":"purse","category":"Peoples","aliases":["purse"],"tags":[]},{"emoji":"👜","description":"handbag","category":"Peoples","aliases":["handbag"],"tags":["bag"]},{"emoji":"💼","description":"briefcase","category":"Peoples","aliases":["briefcase"],"tags":["business"]},{"emoji":"👓","description":"glasses","category":"Peoples","aliases":["eyeglasses"],"tags":["glasses"]},{"emoji":"🕶","description":"sunglasses","category":"Peoples","aliases":["dark_sunglasses"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌂","description":"closed umbrella","category":"Peoples","aliases":["closed_umbrella"],"tags":["weather","rain"]},{"emoji":"☂️","description":"umbrella","category":"Peoples","aliases":["open_umbrella"],"tags":[],"ios_version":"9.1"},{"emoji":"🐶","description":"dog face","category":"Nature","aliases":["dog"],"tags":["pet"]},{"emoji":"🐱","description":"cat face","category":"Nature","aliases":["cat"],"tags":["pet"]},{"emoji":"🐭","description":"mouse face","category":"Nature","aliases":["mouse"],"tags":[]},{"emoji":"🐹","description":"hamster face","category":"Nature","aliases":["hamster"],"tags":["pet"]},{"emoji":"🐰","description":"rabbit face","category":"Nature","aliases":["rabbit"],"tags":["bunny"]},{"emoji":"🦊","description":"fox face","category":"Nature","aliases":["fox_face"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐻","description":"bear face","category":"Nature","aliases":["bear"],"tags":[]},{"emoji":"🐼","description":"panda face","category":"Nature","aliases":["panda_face"],"tags":[]},{"emoji":"🐨","description":"koala","category":"Nature","aliases":["koala"],"tags":[]},{"emoji":"🐯","description":"tiger face","category":"Nature","aliases":["tiger"],"tags":[]},{"emoji":"🦁","description":"lion face","category":"Nature","aliases":["lion"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🐮","description":"cow face","category":"Nature","aliases":["cow"],"tags":[]},{"emoji":"🐷","description":"pig face","category":"Nature","aliases":["pig"],"tags":[]},{"emoji":"🐽","description":"pig nose","category":"Nature","aliases":["pig_nose"],"tags":[]},{"emoji":"🐸","description":"frog face","category":"Nature","aliases":["frog"],"tags":[]},{"emoji":"🐵","description":"monkey face","category":"Nature","aliases":["monkey_face"],"tags":[]},{"emoji":"🙈","description":"see-no-evil monkey","category":"Nature","aliases":["see_no_evil"],"tags":["monkey","blind","ignore"]},{"emoji":"🙉","description":"hear-no-evil monkey","category":"Nature","aliases":["hear_no_evil"],"tags":["monkey","deaf"]},{"emoji":"🙊","description":"speak-no-evil monkey","category":"Nature","aliases":["speak_no_evil"],"tags":["monkey","mute","hush"]},{"emoji":"🐒","description":"monkey","category":"Nature","aliases":["monkey"],"tags":[]},{"emoji":"🐔","description":"chicken","category":"Nature","aliases":["chicken"],"tags":[]},{"emoji":"🐧","description":"penguin","category":"Nature","aliases":["penguin"],"tags":[]},{"emoji":"🐦","description":"bird","category":"Nature","aliases":["bird"],"tags":[]},{"emoji":"🐤","description":"baby chick","category":"Nature","aliases":["baby_chick"],"tags":[]},{"emoji":"🐣","description":"hatching chick","category":"Nature","aliases":["hatching_chick"],"tags":[]},{"emoji":"🐥","description":"front-facing baby chick","category":"Nature","aliases":["hatched_chick"],"tags":[]},{"emoji":"🦆","description":"duck","category":"Nature","aliases":["duck"],"tags":[],"unicode_version":"9.0"},{"emoji":"🦅","description":"eagle","category":"Nature","aliases":["eagle"],"tags":[],"unicode_version":"9.0"},{"emoji":"🦉","description":"owl","category":"Nature","aliases":["owl"],"tags":[],"unicode_version":"9.0"},{"emoji":"🦇","description":"bat","category":"Nature","aliases":["bat"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐺","description":"wolf face","category":"Nature","aliases":["wolf"],"tags":[]},{"emoji":"🐗","description":"boar","category":"Nature","aliases":["boar"],"tags":[]},{"emoji":"🐴","description":"horse face","category":"Nature","aliases":["horse"],"tags":[]},{"emoji":"🦄","description":"unicorn face","category":"Nature","aliases":["unicorn"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🐝","description":"honeybee","category":"Nature","aliases":["bee","honeybee"],"tags":[]},{"emoji":"🐛","description":"bug","category":"Nature","aliases":["bug"],"tags":[]},{"emoji":"🦋","description":"butterfly","category":"Nature","aliases":["butterfly"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐌","description":"snail","category":"Nature","aliases":["snail"],"tags":["slow"]},{"emoji":"🐚","description":"spiral shell","category":"Nature","aliases":["shell"],"tags":["sea","beach"]},{"emoji":"🐞","description":"lady beetle","category":"Nature","aliases":["beetle"],"tags":["bug"]},{"emoji":"🐜","description":"ant","category":"Nature","aliases":["ant"],"tags":[]},{"emoji":"🕷","description":"spider","category":"Nature","aliases":["spider"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🕸","description":"spider web","category":"Nature","aliases":["spider_web"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐢","description":"turtle","category":"Nature","aliases":["turtle"],"tags":["slow"]},{"emoji":"🐍","description":"snake","category":"Nature","aliases":["snake"],"tags":[]},{"emoji":"🦎","description":"lizard","category":"Nature","aliases":["lizard"],"tags":[],"unicode_version":"9.0"},{"emoji":"🦂","description":"scorpion","category":"Nature","aliases":["scorpion"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🦀","description":"crab","category":"Nature","aliases":["crab"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🦑","description":"squid","category":"Nature","aliases":["squid"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐙","description":"octopus","category":"Nature","aliases":["octopus"],"tags":[]},{"emoji":"🦐","description":"shrimp","category":"Nature","aliases":["shrimp"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐠","description":"tropical fish","category":"Nature","aliases":["tropical_fish"],"tags":[]},{"emoji":"🐟","description":"fish","category":"Nature","aliases":["fish"],"tags":[]},{"emoji":"🐡","description":"blowfish","category":"Nature","aliases":["blowfish"],"tags":[]},{"emoji":"🐬","description":"dolphin","category":"Nature","aliases":["dolphin","flipper"],"tags":[]},{"emoji":"🦈","description":"shark","category":"Nature","aliases":["shark"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐳","description":"spouting whale","category":"Nature","aliases":["whale"],"tags":["sea"]},{"emoji":"🐋","description":"whale","category":"Nature","aliases":["whale2"],"tags":[]},{"emoji":"🐊","description":"crocodile","category":"Nature","aliases":["crocodile"],"tags":[]},{"emoji":"🐆","description":"leopard","category":"Nature","aliases":["leopard"],"tags":[]},{"emoji":"🐅","description":"tiger","category":"Nature","aliases":["tiger2"],"tags":[]},{"emoji":"🐃","description":"water buffalo","category":"Nature","aliases":["water_buffalo"],"tags":[]},{"emoji":"🐂","description":"ox","category":"Nature","aliases":["ox"],"tags":[]},{"emoji":"🐄","description":"cow","category":"Nature","aliases":["cow2"],"tags":[]},{"emoji":"🦌","description":"deer","category":"Nature","aliases":["deer"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐪","description":"camel","category":"Nature","aliases":["dromedary_camel"],"tags":["desert"]},{"emoji":"🐫","description":"two-hump camel","category":"Nature","aliases":["camel"],"tags":[]},{"emoji":"🐘","description":"elephant","category":"Nature","aliases":["elephant"],"tags":[]},{"emoji":"🦏","description":"rhinoceros","category":"Nature","aliases":["rhinoceros"],"tags":[],"unicode_version":"9.0"},{"emoji":"🦍","description":"gorilla","category":"Nature","aliases":["gorilla"],"tags":[],"unicode_version":"9.0"},{"emoji":"🐎","description":"horse","category":"Nature","aliases":["racehorse"],"tags":["speed"]},{"emoji":"🐖","description":"pig","category":"Nature","aliases":["pig2"],"tags":[]},{"emoji":"🐐","description":"goat","category":"Nature","aliases":["goat"],"tags":[]},{"emoji":"🐏","description":"ram","category":"Nature","aliases":["ram"],"tags":[]},{"emoji":"🐑","description":"sheep","category":"Nature","aliases":["sheep"],"tags":[]},{"emoji":"🐕","description":"dog","category":"Nature","aliases":["dog2"],"tags":[]},{"emoji":"🐩","description":"poodle","category":"Nature","aliases":["poodle"],"tags":["dog"]},{"emoji":"🐈","description":"cat","category":"Nature","aliases":["cat2"],"tags":[]},{"emoji":"🐓","description":"rooster","category":"Nature","aliases":["rooster"],"tags":[]},{"emoji":"🦃","description":"turkey","category":"Nature","aliases":["turkey"],"tags":["thanksgiving"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕊","description":"dove","category":"Nature","aliases":["dove"],"tags":["peace"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐇","description":"rabbit","category":"Nature","aliases":["rabbit2"],"tags":[]},{"emoji":"🐁","description":"mouse","category":"Nature","aliases":["mouse2"],"tags":[]},{"emoji":"🐀","description":"rat","category":"Nature","aliases":["rat"],"tags":[]},{"emoji":"🐿","description":"chipmunk","category":"Nature","aliases":["chipmunk"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🐾","description":"paw prints","category":"Nature","aliases":["feet","paw_prints"],"tags":[]},{"emoji":"🐉","description":"dragon","category":"Nature","aliases":["dragon"],"tags":[]},{"emoji":"🐲","description":"dragon face","category":"Nature","aliases":["dragon_face"],"tags":[]},{"emoji":"🌵","description":"cactus","category":"Nature","aliases":["cactus"],"tags":[]},{"emoji":"🎄","description":"Christmas tree","category":"Nature","aliases":["christmas_tree"],"tags":[]},{"emoji":"🌲","description":"evergreen tree","category":"Nature","aliases":["evergreen_tree"],"tags":["wood"]},{"emoji":"🌳","description":"deciduous tree","category":"Nature","aliases":["deciduous_tree"],"tags":["wood"]},{"emoji":"🌴","description":"palm tree","category":"Nature","aliases":["palm_tree"],"tags":[]},{"emoji":"🌱","description":"seedling","category":"Nature","aliases":["seedling"],"tags":["plant"]},{"emoji":"🌿","description":"herb","category":"Nature","aliases":["herb"],"tags":[]},{"emoji":"☘️","description":"shamrock","category":"Nature","aliases":["shamrock"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🍀","description":"four leaf clover","category":"Nature","aliases":["four_leaf_clover"],"tags":["luck"]},{"emoji":"🎍","description":"pine decoration","category":"Nature","aliases":["bamboo"],"tags":[]},{"emoji":"🎋","description":"tanabata tree","category":"Nature","aliases":["tanabata_tree"],"tags":[]},{"emoji":"🍃","description":"leaf fluttering in wind","category":"Nature","aliases":["leaves"],"tags":["leaf"]},{"emoji":"🍂","description":"fallen leaf","category":"Nature","aliases":["fallen_leaf"],"tags":["autumn"]},{"emoji":"🍁","description":"maple leaf","category":"Nature","aliases":["maple_leaf"],"tags":["canada"]},{"emoji":"🍄","description":"mushroom","category":"Nature","aliases":["mushroom"],"tags":[]},{"emoji":"🌾","description":"sheaf of rice","category":"Nature","aliases":["ear_of_rice"],"tags":[]},{"emoji":"💐","description":"bouquet","category":"Nature","aliases":["bouquet"],"tags":["flowers"]},{"emoji":"🌷","description":"tulip","category":"Nature","aliases":["tulip"],"tags":["flower"]},{"emoji":"🌹","description":"rose","category":"Nature","aliases":["rose"],"tags":["flower"]},{"emoji":"🥀","description":"wilted flower","category":"Nature","aliases":["wilted_flower"],"tags":[],"unicode_version":"9.0"},{"emoji":"🌻","description":"sunflower","category":"Nature","aliases":["sunflower"],"tags":[]},{"emoji":"🌼","description":"blossom","category":"Nature","aliases":["blossom"],"tags":[]},{"emoji":"🌸","description":"cherry blossom","category":"Nature","aliases":["cherry_blossom"],"tags":["flower","spring"]},{"emoji":"🌺","description":"hibiscus","category":"Nature","aliases":["hibiscus"],"tags":[]},{"emoji":"🌎","description":"globe showing Americas","category":"Nature","aliases":["earth_americas"],"tags":["globe","world","international"]},{"emoji":"🌍","description":"globe showing Europe-Africa","category":"Nature","aliases":["earth_africa"],"tags":["globe","world","international"]},{"emoji":"🌏","description":"globe showing Asia-Australia","category":"Nature","aliases":["earth_asia"],"tags":["globe","world","international"]},{"emoji":"🌕","description":"full moon","category":"Nature","aliases":["full_moon"],"tags":[]},{"emoji":"🌖","description":"waning gibbous moon","category":"Nature","aliases":["waning_gibbous_moon"],"tags":[]},{"emoji":"🌗","description":"last quarter moon","category":"Nature","aliases":["last_quarter_moon"],"tags":[]},{"emoji":"🌘","description":"waning crescent moon","category":"Nature","aliases":["waning_crescent_moon"],"tags":[]},{"emoji":"🌑","description":"new moon","category":"Nature","aliases":["new_moon"],"tags":[]},{"emoji":"🌒","description":"waxing crescent moon","category":"Nature","aliases":["waxing_crescent_moon"],"tags":[]},{"emoji":"🌓","description":"first quarter moon","category":"Nature","aliases":["first_quarter_moon"],"tags":[]},{"emoji":"🌔","description":"waxing gibbous moon","category":"Nature","aliases":["moon","waxing_gibbous_moon"],"tags":[]},{"emoji":"🌚","description":"new moon face","category":"Nature","aliases":["new_moon_with_face"],"tags":[]},{"emoji":"🌝","description":"full moon with face","category":"Nature","aliases":["full_moon_with_face"],"tags":[]},{"emoji":"🌞","description":"sun with face","category":"Nature","aliases":["sun_with_face"],"tags":["summer"]},{"emoji":"🌛","description":"first quarter moon with face","category":"Nature","aliases":["first_quarter_moon_with_face"],"tags":[]},{"emoji":"🌜","description":"last quarter moon with face","category":"Nature","aliases":["last_quarter_moon_with_face"],"tags":[]},{"emoji":"🌙","description":"crescent moon","category":"Nature","aliases":["crescent_moon"],"tags":["night"]},{"emoji":"💫","description":"dizzy","category":"Nature","aliases":["dizzy"],"tags":["star"]},{"emoji":"⭐️","description":"white medium star","category":"Nature","aliases":["star"],"tags":[],"unicode_version":"5.1"},{"emoji":"🌟","description":"glowing star","category":"Nature","aliases":["star2"],"tags":[]},{"emoji":"✨","description":"sparkles","category":"Nature","aliases":["sparkles"],"tags":["shiny"]},{"emoji":"⚡️","description":"high voltage","category":"Nature","aliases":["zap"],"tags":["lightning","thunder"],"unicode_version":"4.0"},{"emoji":"🔥","description":"fire","category":"Nature","aliases":["fire"],"tags":["burn"]},{"emoji":"💥","description":"collision","category":"Nature","aliases":["boom","collision"],"tags":["explode"]},{"emoji":"☄","description":"comet","category":"Nature","aliases":["comet"],"tags":[],"ios_version":"9.1"},{"emoji":"☀️","description":"sun","category":"Nature","aliases":["sunny"],"tags":["weather"]},{"emoji":"🌤","description":"sun behind small cloud","category":"Nature","aliases":["sun_behind_small_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛅️","description":"sun behind cloud","category":"Nature","aliases":["partly_sunny"],"tags":["weather","cloud"],"unicode_version":"5.2"},{"emoji":"🌥","description":"sun behind large cloud","category":"Nature","aliases":["sun_behind_large_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌦","description":"sun behind rain cloud","category":"Nature","aliases":["sun_behind_rain_cloud"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌈","description":"rainbow","category":"Nature","aliases":["rainbow"],"tags":[]},{"emoji":"☁️","description":"cloud","category":"Nature","aliases":["cloud"],"tags":[]},{"emoji":"🌧","description":"cloud with rain","category":"Nature","aliases":["cloud_with_rain"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛈","description":"cloud with lightning and rain","category":"Nature","aliases":["cloud_with_lightning_and_rain"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🌩","description":"cloud with lightning","category":"Nature","aliases":["cloud_with_lightning"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌨","description":"cloud with snow","category":"Nature","aliases":["cloud_with_snow"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☃️","description":"snowman","category":"Nature","aliases":["snowman_with_snow"],"tags":["winter","christmas"],"ios_version":"9.1"},{"emoji":"⛄️","description":"snowman without snow","category":"Nature","aliases":["snowman"],"tags":["winter"],"unicode_version":"5.2"},{"emoji":"❄️","description":"snowflake","category":"Nature","aliases":["snowflake"],"tags":["winter","cold","weather"]},{"emoji":"🌬","description":"wind face","category":"Nature","aliases":["wind_face"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💨","description":"dashing away","category":"Nature","aliases":["dash"],"tags":["wind","blow","fast"]},{"emoji":"🌪","description":"tornado","category":"Nature","aliases":["tornado"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌫","description":"fog","category":"Nature","aliases":["fog"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌊","description":"water wave","category":"Nature","aliases":["ocean"],"tags":["sea"]},{"emoji":"💧","description":"droplet","category":"Nature","aliases":["droplet"],"tags":["water"]},{"emoji":"💦","description":"sweat droplets","category":"Nature","aliases":["sweat_drops"],"tags":["water","workout"]},{"emoji":"☔️","description":"umbrella with rain drops","category":"Nature","aliases":["umbrella"],"tags":["rain","weather"],"unicode_version":"4.0"},{"emoji":"🍏","description":"green apple","category":"Foods","aliases":["green_apple"],"tags":["fruit"]},{"emoji":"🍎","description":"red apple","category":"Foods","aliases":["apple"],"tags":[]},{"emoji":"🍐","description":"pear","category":"Foods","aliases":["pear"],"tags":[]},{"emoji":"🍊","description":"tangerine","category":"Foods","aliases":["tangerine","orange","mandarin"],"tags":[]},{"emoji":"🍋","description":"lemon","category":"Foods","aliases":["lemon"],"tags":[]},{"emoji":"🍌","description":"banana","category":"Foods","aliases":["banana"],"tags":["fruit"]},{"emoji":"🍉","description":"watermelon","category":"Foods","aliases":["watermelon"],"tags":[]},{"emoji":"🍇","description":"grapes","category":"Foods","aliases":["grapes"],"tags":[]},{"emoji":"🍓","description":"strawberry","category":"Foods","aliases":["strawberry"],"tags":["fruit"]},{"emoji":"🍈","description":"melon","category":"Foods","aliases":["melon"],"tags":[]},{"emoji":"🍒","description":"cherries","category":"Foods","aliases":["cherries"],"tags":["fruit"]},{"emoji":"🍑","description":"peach","category":"Foods","aliases":["peach"],"tags":[]},{"emoji":"🍍","description":"pineapple","category":"Foods","aliases":["pineapple"],"tags":[]},{"emoji":"🥝","description":"kiwi fruit","category":"Foods","aliases":["kiwi_fruit"],"tags":[],"unicode_version":"9.0"},{"emoji":"🥑","description":"avocado","category":"Foods","aliases":["avocado"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍅","description":"tomato","category":"Foods","aliases":["tomato"],"tags":[]},{"emoji":"🍆","description":"eggplant","category":"Foods","aliases":["eggplant"],"tags":["aubergine"]},{"emoji":"🥒","description":"cucumber","category":"Foods","aliases":["cucumber"],"tags":[],"unicode_version":"9.0"},{"emoji":"🥕","description":"carrot","category":"Foods","aliases":["carrot"],"tags":[],"unicode_version":"9.0"},{"emoji":"🌽","description":"ear of corn","category":"Foods","aliases":["corn"],"tags":[]},{"emoji":"🌶","description":"hot pepper","category":"Foods","aliases":["hot_pepper"],"tags":["spicy"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🥔","description":"potato","category":"Foods","aliases":["potato"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍠","description":"roasted sweet potato","category":"Foods","aliases":["sweet_potato"],"tags":[]},{"emoji":"🌰","description":"chestnut","category":"Foods","aliases":["chestnut"],"tags":[]},{"emoji":"🥜","description":"peanuts","category":"Foods","aliases":["peanuts"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍯","description":"honey pot","category":"Foods","aliases":["honey_pot"],"tags":[]},{"emoji":"🥐","description":"croissant","category":"Foods","aliases":["croissant"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍞","description":"bread","category":"Foods","aliases":["bread"],"tags":["toast"]},{"emoji":"🥖","description":"baguette bread","category":"Foods","aliases":["baguette_bread"],"tags":[],"unicode_version":"9.0"},{"emoji":"🧀","description":"cheese wedge","category":"Foods","aliases":["cheese"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥚","description":"egg","category":"Foods","aliases":["egg"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍳","description":"cooking","category":"Foods","aliases":["fried_egg"],"tags":["breakfast"]},{"emoji":"🥓","description":"bacon","category":"Foods","aliases":["bacon"],"tags":[],"unicode_version":"9.0"},{"emoji":"🥞","description":"pancakes","category":"Foods","aliases":["pancakes"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍤","description":"fried shrimp","category":"Foods","aliases":["fried_shrimp"],"tags":["tempura"]},{"emoji":"🍗","description":"poultry leg","category":"Foods","aliases":["poultry_leg"],"tags":["meat","chicken"]},{"emoji":"🍖","description":"meat on bone","category":"Foods","aliases":["meat_on_bone"],"tags":[]},{"emoji":"🍕","description":"pizza","category":"Foods","aliases":["pizza"],"tags":[]},{"emoji":"🌭","description":"hot dog","category":"Foods","aliases":["hotdog"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🍔","description":"hamburger","category":"Foods","aliases":["hamburger"],"tags":["burger"]},{"emoji":"🍟","description":"french fries","category":"Foods","aliases":["fries"],"tags":[]},{"emoji":"🥙","description":"stuffed flatbread","category":"Foods","aliases":["stuffed_flatbread"],"tags":[],"unicode_version":"9.0"},{"emoji":"🌮","description":"taco","category":"Foods","aliases":["taco"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🌯","description":"burrito","category":"Foods","aliases":["burrito"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥗","description":"green salad","category":"Foods","aliases":["green_salad"],"tags":[],"unicode_version":"9.0"},{"emoji":"🥘","description":"shallow pan of food","category":"Foods","aliases":["shallow_pan_of_food"],"tags":["paella","curry"]},{"emoji":"🍝","description":"spaghetti","category":"Foods","aliases":["spaghetti"],"tags":["pasta"]},{"emoji":"🍜","description":"steaming bowl","category":"Foods","aliases":["ramen"],"tags":["noodle"]},{"emoji":"🍲","description":"pot of food","category":"Foods","aliases":["stew"],"tags":[]},{"emoji":"🍥","description":"fish cake with swirl","category":"Foods","aliases":["fish_cake"],"tags":[]},{"emoji":"🍣","description":"sushi","category":"Foods","aliases":["sushi"],"tags":[]},{"emoji":"🍱","description":"bento box","category":"Foods","aliases":["bento"],"tags":[]},{"emoji":"🍛","description":"curry rice","category":"Foods","aliases":["curry"],"tags":[]},{"emoji":"🍚","description":"cooked rice","category":"Foods","aliases":["rice"],"tags":[]},{"emoji":"🍙","description":"rice ball","category":"Foods","aliases":["rice_ball"],"tags":[]},{"emoji":"🍘","description":"rice cracker","category":"Foods","aliases":["rice_cracker"],"tags":[]},{"emoji":"🍢","description":"oden","category":"Foods","aliases":["oden"],"tags":[]},{"emoji":"🍡","description":"dango","category":"Foods","aliases":["dango"],"tags":[]},{"emoji":"🍧","description":"shaved ice","category":"Foods","aliases":["shaved_ice"],"tags":[]},{"emoji":"🍨","description":"ice cream","category":"Foods","aliases":["ice_cream"],"tags":[]},{"emoji":"🍦","description":"soft ice cream","category":"Foods","aliases":["icecream"],"tags":[]},{"emoji":"🍰","description":"shortcake","category":"Foods","aliases":["cake"],"tags":["dessert"]},{"emoji":"🎂","description":"birthday cake","category":"Foods","aliases":["birthday"],"tags":["party"]},{"emoji":"🍮","description":"custard","category":"Foods","aliases":["custard"],"tags":[]},{"emoji":"🍭","description":"lollipop","category":"Foods","aliases":["lollipop"],"tags":[]},{"emoji":"🍬","description":"candy","category":"Foods","aliases":["candy"],"tags":["sweet"]},{"emoji":"🍫","description":"chocolate bar","category":"Foods","aliases":["chocolate_bar"],"tags":[]},{"emoji":"🍿","description":"popcorn","category":"Foods","aliases":["popcorn"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🍩","description":"doughnut","category":"Foods","aliases":["doughnut"],"tags":[]},{"emoji":"🍪","description":"cookie","category":"Foods","aliases":["cookie"],"tags":[]},{"emoji":"🥛","description":"glass of milk","category":"Foods","aliases":["milk_glass"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍼","description":"baby bottle","category":"Foods","aliases":["baby_bottle"],"tags":["milk"]},{"emoji":"☕️","description":"hot beverage","category":"Foods","aliases":["coffee"],"tags":["cafe","espresso"],"unicode_version":"4.0"},{"emoji":"🍵","description":"teacup without handle","category":"Foods","aliases":["tea"],"tags":["green","breakfast"]},{"emoji":"🍶","description":"sake","category":"Foods","aliases":["sake"],"tags":[]},{"emoji":"🍺","description":"beer mug","category":"Foods","aliases":["beer"],"tags":["drink"]},{"emoji":"🍻","description":"clinking beer mugs","category":"Foods","aliases":["beers"],"tags":["drinks"]},{"emoji":"🥂","description":"clinking glasses","category":"Foods","aliases":["clinking_glasses"],"tags":["cheers","toast"],"unicode_version":"9.0"},{"emoji":"🍷","description":"wine glass","category":"Foods","aliases":["wine_glass"],"tags":[]},{"emoji":"🥃","description":"tumbler glass","category":"Foods","aliases":["tumbler_glass"],"tags":["whisky"],"unicode_version":"9.0"},{"emoji":"🍸","description":"cocktail glass","category":"Foods","aliases":["cocktail"],"tags":["drink"]},{"emoji":"🍹","description":"tropical drink","category":"Foods","aliases":["tropical_drink"],"tags":["summer","vacation"]},{"emoji":"🍾","description":"bottle with popping cork","category":"Foods","aliases":["champagne"],"tags":["bottle","bubbly","celebration"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥄","description":"spoon","category":"Foods","aliases":["spoon"],"tags":[],"unicode_version":"9.0"},{"emoji":"🍴","description":"fork and knife","category":"Foods","aliases":["fork_and_knife"],"tags":["cutlery"]},{"emoji":"🍽","description":"fork and knife with plate","category":"Foods","aliases":["plate_with_cutlery"],"tags":["dining","dinner"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⚽️","description":"soccer ball","category":"Activity","aliases":["soccer"],"tags":["sports"],"unicode_version":"5.2"},{"emoji":"🏀","description":"basketball","category":"Activity","aliases":["basketball"],"tags":["sports"]},{"emoji":"🏈","description":"american football","category":"Activity","aliases":["football"],"tags":["sports"]},{"emoji":"⚾️","description":"baseball","category":"Activity","aliases":["baseball"],"tags":["sports"],"unicode_version":"5.2"},{"emoji":"🎾","description":"tennis","category":"Activity","aliases":["tennis"],"tags":["sports"]},{"emoji":"🏐","description":"volleyball","category":"Activity","aliases":["volleyball"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏉","description":"rugby football","category":"Activity","aliases":["rugby_football"],"tags":[]},{"emoji":"🎱","description":"pool 8 ball","category":"Activity","aliases":["8ball"],"tags":["pool","billiards"]},{"emoji":"🏓","description":"ping pong","category":"Activity","aliases":["ping_pong"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏸","description":"badminton","category":"Activity","aliases":["badminton"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🥅","description":"goal net","category":"Activity","aliases":["goal_net"],"tags":[],"unicode_version":"9.0"},{"emoji":"🏒","description":"ice hockey","category":"Activity","aliases":["ice_hockey"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏑","description":"field hockey","category":"Activity","aliases":["field_hockey"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🏏","description":"cricket","category":"Activity","aliases":["cricket"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛳️","description":"flag in hole","category":"Activity","aliases":["golf"],"tags":[],"unicode_version":"5.2"},{"emoji":"🏹","description":"bow and arrow","category":"Activity","aliases":["bow_and_arrow"],"tags":["archery"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🎣","description":"fishing pole","category":"Activity","aliases":["fishing_pole_and_fish"],"tags":[]},{"emoji":"🥊","description":"boxing glove","category":"Activity","aliases":["boxing_glove"],"tags":[],"unicode_version":"9.0"},{"emoji":"🥋","description":"martial arts uniform","category":"Activity","aliases":["martial_arts_uniform"],"tags":[],"unicode_version":"9.0"},{"emoji":"⛸","description":"ice skate","category":"Activity","aliases":["ice_skate"],"tags":["skating"],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🎿","description":"skis","category":"Activity","aliases":["ski"],"tags":[]},{"emoji":"⛷","description":"skier","category":"Activity","aliases":["skier"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏂","description":"snowboarder","category":"Activity","aliases":["snowboarder"],"tags":[]},{"emoji":"🏋️‍♀️","description":"woman lifting weights","category":"Activity","aliases":["weight_lifting_woman"],"tags":["gym","workout"]},{"emoji":"🏋","description":"person lifting weights","category":"Activity","aliases":["weight_lifting_man"],"tags":["gym","workout"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🤺","description":"person fencing","category":"Activity","aliases":["person_fencing"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤼‍♀","description":"women wrestling","category":"Activity","aliases":["women_wrestling"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤼‍♂","description":"men wrestling","category":"Activity","aliases":["men_wrestling"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤸‍♀","description":"woman cartwheeling","category":"Activity","aliases":["woman_cartwheeling"],"tags":[]},{"emoji":"🤸‍♂","description":"man cartwheeling","category":"Activity","aliases":["man_cartwheeling"],"tags":[]},{"emoji":"⛹️‍♀️","description":"woman bouncing ball","category":"Activity","aliases":["basketball_woman"],"tags":[],"unicode_version":"7.0"},{"emoji":"⛹","description":"person bouncing ball","category":"Activity","aliases":["basketball_man"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🤾‍♀","description":"woman playing handball","category":"Activity","aliases":["woman_playing_handball"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤾‍♂","description":"man playing handball","category":"Activity","aliases":["man_playing_handball"],"tags":[],"unicode_version":"9.0"},{"emoji":"🏌️‍♀️","description":"woman golfing","category":"Activity","aliases":["golfing_woman"],"tags":[]},{"emoji":"🏌","description":"person golfing","category":"Activity","aliases":["golfing_man"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏄‍♀","description":"woman surfing","category":"Activity","aliases":["surfing_woman"],"tags":[],"unicode_version":"7.0"},{"emoji":"🏄","description":"person surfing","category":"Activity","aliases":["surfing_man","surfer"],"tags":[]},{"emoji":"🏊‍♀","description":"woman swimming","category":"Activity","aliases":["swimming_woman"],"tags":[]},{"emoji":"🏊","description":"person swimming","category":"Activity","aliases":["swimming_man","swimmer"],"tags":[]},{"emoji":"🤽‍♀","description":"woman playing water polo","category":"Activity","aliases":["woman_playing_water_polo"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤽‍♂","description":"man playing water polo","category":"Activity","aliases":["man_playing_water_polo"],"tags":[],"unicode_version":"9.0"},{"emoji":"🚣‍♀","description":"woman rowing boat","category":"Activity","aliases":["rowing_woman"],"tags":[]},{"emoji":"🚣","description":"person rowing boat","category":"Activity","aliases":["rowing_man","rowboat"],"tags":[]},{"emoji":"🏇","description":"horse racing","category":"Activity","aliases":["horse_racing"],"tags":[]},{"emoji":"🚴‍♀","description":"woman biking","category":"Activity","aliases":["biking_woman"],"tags":[]},{"emoji":"🚴","description":"person biking","category":"Activity","aliases":["biking_man","bicyclist"],"tags":[]},{"emoji":"🚵‍♀","description":"woman mountain biking","category":"Activity","aliases":["mountain_biking_woman"],"tags":[]},{"emoji":"🚵","description":"person mountain biking","category":"Activity","aliases":["mountain_biking_man","mountain_bicyclist"],"tags":[]},{"emoji":"🎽","description":"running shirt","category":"Activity","aliases":["running_shirt_with_sash"],"tags":["marathon"]},{"emoji":"🏅","description":"sports medal","category":"Activity","aliases":["medal_sports"],"tags":["gold","winner"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎖","description":"military medal","category":"Activity","aliases":["medal_military"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🥇","description":"1st place medal","category":"Activity","aliases":["1st_place_medal"],"tags":["gold"],"unicode_version":"9.0"},{"emoji":"🥈","description":"2nd place medal","category":"Activity","aliases":["2nd_place_medal"],"tags":["silver"],"unicode_version":"9.0"},{"emoji":"🥉","description":"3rd place medal","category":"Activity","aliases":["3rd_place_medal"],"tags":["bronze"],"unicode_version":"9.0"},{"emoji":"🏆","description":"trophy","category":"Activity","aliases":["trophy"],"tags":["award","contest","winner"]},{"emoji":"🏵","description":"rosette","category":"Activity","aliases":["rosette"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎗","description":"reminder ribbon","category":"Activity","aliases":["reminder_ribbon"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎫","description":"ticket","category":"Activity","aliases":["ticket"],"tags":[]},{"emoji":"🎟","description":"admission tickets","category":"Activity","aliases":["tickets"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎪","description":"circus tent","category":"Activity","aliases":["circus_tent"],"tags":[]},{"emoji":"🤹‍♀","description":"woman juggling","category":"Activity","aliases":["woman_juggling"],"tags":[],"unicode_version":"9.0"},{"emoji":"🤹‍♂","description":"man juggling","category":"Activity","aliases":["man_juggling"],"tags":[],"unicode_version":"9.0"},{"emoji":"🎭","description":"performing arts","category":"Activity","aliases":["performing_arts"],"tags":["theater","drama"]},{"emoji":"🎨","description":"artist palette","category":"Activity","aliases":["art"],"tags":["design","paint"]},{"emoji":"🎬","description":"clapper board","category":"Activity","aliases":["clapper"],"tags":["film"]},{"emoji":"🎤","description":"microphone","category":"Activity","aliases":["microphone"],"tags":["sing"]},{"emoji":"🎧","description":"headphone","category":"Activity","aliases":["headphones"],"tags":["music","earphones"]},{"emoji":"🎼","description":"musical score","category":"Activity","aliases":["musical_score"],"tags":[]},{"emoji":"🎹","description":"musical keyboard","category":"Activity","aliases":["musical_keyboard"],"tags":["piano"]},{"emoji":"🥁","description":"drum","category":"Activity","aliases":["drum"],"tags":[]},{"emoji":"🎷","description":"saxophone","category":"Activity","aliases":["saxophone"],"tags":[]},{"emoji":"🎺","description":"trumpet","category":"Activity","aliases":["trumpet"],"tags":[]},{"emoji":"🎸","description":"guitar","category":"Activity","aliases":["guitar"],"tags":["rock"]},{"emoji":"🎻","description":"violin","category":"Activity","aliases":["violin"],"tags":[]},{"emoji":"🎲","description":"game die","category":"Activity","aliases":["game_die"],"tags":["dice","gambling"]},{"emoji":"🎯","description":"direct hit","category":"Activity","aliases":["dart"],"tags":["target"]},{"emoji":"🎳","description":"bowling","category":"Activity","aliases":["bowling"],"tags":[]},{"emoji":"🎮","description":"video game","category":"Activity","aliases":["video_game"],"tags":["play","controller","console"]},{"emoji":"🎰","description":"slot machine","category":"Activity","aliases":["slot_machine"],"tags":[]},{"emoji":"🚗","description":"automobile","category":"Places","aliases":["car","red_car"],"tags":[]},{"emoji":"🚕","description":"taxi","category":"Places","aliases":["taxi"],"tags":[]},{"emoji":"🚙","description":"sport utility vehicle","category":"Places","aliases":["blue_car"],"tags":[]},{"emoji":"🚌","description":"bus","category":"Places","aliases":["bus"],"tags":[]},{"emoji":"🚎","description":"trolleybus","category":"Places","aliases":["trolleybus"],"tags":[]},{"emoji":"🏎","description":"racing car","category":"Places","aliases":["racing_car"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚓","description":"police car","category":"Places","aliases":["police_car"],"tags":[]},{"emoji":"🚑","description":"ambulance","category":"Places","aliases":["ambulance"],"tags":[]},{"emoji":"🚒","description":"fire engine","category":"Places","aliases":["fire_engine"],"tags":[]},{"emoji":"🚐","description":"minibus","category":"Places","aliases":["minibus"],"tags":[]},{"emoji":"🚚","description":"delivery truck","category":"Places","aliases":["truck"],"tags":[]},{"emoji":"🚛","description":"articulated lorry","category":"Places","aliases":["articulated_lorry"],"tags":[]},{"emoji":"🚜","description":"tractor","category":"Places","aliases":["tractor"],"tags":[]},{"emoji":"🛴","description":"kick scooter","category":"Places","aliases":["kick_scooter"],"tags":[],"unicode_version":"9.0"},{"emoji":"🚲","description":"bicycle","category":"Places","aliases":["bike"],"tags":["bicycle"]},{"emoji":"🛵","description":"motor scooter","category":"Places","aliases":["motor_scooter"],"tags":[],"unicode_version":"9.0"},{"emoji":"🏍","description":"motorcycle","category":"Places","aliases":["motorcycle"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚨","description":"police car light","category":"Places","aliases":["rotating_light"],"tags":["911","emergency"]},{"emoji":"🚔","description":"oncoming police car","category":"Places","aliases":["oncoming_police_car"],"tags":[]},{"emoji":"🚍","description":"oncoming bus","category":"Places","aliases":["oncoming_bus"],"tags":[]},{"emoji":"🚘","description":"oncoming automobile","category":"Places","aliases":["oncoming_automobile"],"tags":[]},{"emoji":"🚖","description":"oncoming taxi","category":"Places","aliases":["oncoming_taxi"],"tags":[]},{"emoji":"🚡","description":"aerial tramway","category":"Places","aliases":["aerial_tramway"],"tags":[]},{"emoji":"🚠","description":"mountain cableway","category":"Places","aliases":["mountain_cableway"],"tags":[]},{"emoji":"🚟","description":"suspension railway","category":"Places","aliases":["suspension_railway"],"tags":[]},{"emoji":"🚃","description":"railway car","category":"Places","aliases":["railway_car"],"tags":[]},{"emoji":"🚋","description":"tram car","category":"Places","aliases":["train"],"tags":[]},{"emoji":"🚞","description":"mountain railway","category":"Places","aliases":["mountain_railway"],"tags":[]},{"emoji":"🚝","description":"monorail","category":"Places","aliases":["monorail"],"tags":[]},{"emoji":"🚄","description":"high-speed train","category":"Places","aliases":["bullettrain_side"],"tags":["train"]},{"emoji":"🚅","description":"high-speed train with bullet nose","category":"Places","aliases":["bullettrain_front"],"tags":["train"]},{"emoji":"🚈","description":"light rail","category":"Places","aliases":["light_rail"],"tags":[]},{"emoji":"🚂","description":"locomotive","category":"Places","aliases":["steam_locomotive"],"tags":["train"]},{"emoji":"🚆","description":"train","category":"Places","aliases":["train2"],"tags":[]},{"emoji":"🚇","description":"metro","category":"Places","aliases":["metro"],"tags":[]},{"emoji":"🚊","description":"tram","category":"Places","aliases":["tram"],"tags":[]},{"emoji":"🚉","description":"station","category":"Places","aliases":["station"],"tags":[]},{"emoji":"🚁","description":"helicopter","category":"Places","aliases":["helicopter"],"tags":[]},{"emoji":"🛩","description":"small airplane","category":"Places","aliases":["small_airplane"],"tags":["flight"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✈️","description":"airplane","category":"Places","aliases":["airplane"],"tags":["flight"]},{"emoji":"🛫","description":"airplane departure","category":"Places","aliases":["flight_departure"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛬","description":"airplane arrival","category":"Places","aliases":["flight_arrival"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚀","description":"rocket","category":"Places","aliases":["rocket"],"tags":["ship","launch"]},{"emoji":"🛰","description":"satellite","category":"Places","aliases":["artificial_satellite"],"tags":["orbit","space"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💺","description":"seat","category":"Places","aliases":["seat"],"tags":[]},{"emoji":"🛶","description":"canoe","category":"Places","aliases":["canoe"],"tags":[],"unicode_version":"9.0"},{"emoji":"⛵️","description":"sailboat","category":"Places","aliases":["boat","sailboat"],"tags":[],"unicode_version":"5.2"},{"emoji":"🛥","description":"motor boat","category":"Places","aliases":["motor_boat"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚤","description":"speedboat","category":"Places","aliases":["speedboat"],"tags":["ship"]},{"emoji":"🛳","description":"passenger ship","category":"Places","aliases":["passenger_ship"],"tags":["cruise"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛴","description":"ferry","category":"Places","aliases":["ferry"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🚢","description":"ship","category":"Places","aliases":["ship"],"tags":[]},{"emoji":"⚓️","description":"anchor","category":"Places","aliases":["anchor"],"tags":["ship"],"unicode_version":"4.1"},{"emoji":"🚧","description":"construction","category":"Places","aliases":["construction"],"tags":["wip"]},{"emoji":"⛽️","description":"fuel pump","category":"Places","aliases":["fuelpump"],"tags":[],"unicode_version":"5.2"},{"emoji":"🚏","description":"bus stop","category":"Places","aliases":["busstop"],"tags":[]},{"emoji":"🚦","description":"vertical traffic light","category":"Places","aliases":["vertical_traffic_light"],"tags":["semaphore"]},{"emoji":"🚥","description":"horizontal traffic light","category":"Places","aliases":["traffic_light"],"tags":[]},{"emoji":"🗺","description":"world map","category":"Places","aliases":["world_map"],"tags":["travel"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗿","description":"moai","category":"Places","aliases":["moyai"],"tags":["stone"]},{"emoji":"🗽","description":"Statue of Liberty","category":"Places","aliases":["statue_of_liberty"],"tags":[]},{"emoji":"⛲️","description":"fountain","category":"Places","aliases":["fountain"],"tags":[],"unicode_version":"5.2"},{"emoji":"🗼","description":"Tokyo tower","category":"Places","aliases":["tokyo_tower"],"tags":[]},{"emoji":"🏰","description":"castle","category":"Places","aliases":["european_castle"],"tags":[]},{"emoji":"🏯","description":"Japanese castle","category":"Places","aliases":["japanese_castle"],"tags":[]},{"emoji":"🏟","description":"stadium","category":"Places","aliases":["stadium"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎡","description":"ferris wheel","category":"Places","aliases":["ferris_wheel"],"tags":[]},{"emoji":"🎢","description":"roller coaster","category":"Places","aliases":["roller_coaster"],"tags":[]},{"emoji":"🎠","description":"carousel horse","category":"Places","aliases":["carousel_horse"],"tags":[]},{"emoji":"⛱","description":"umbrella on ground","category":"Places","aliases":["parasol_on_ground"],"tags":["beach_umbrella"],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏖","description":"beach with umbrella","category":"Places","aliases":["beach_umbrella"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏝","description":"desert island","category":"Places","aliases":["desert_island"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛰","description":"mountain","category":"Places","aliases":["mountain"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🏔","description":"snow-capped mountain","category":"Places","aliases":["mountain_snow"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗻","description":"mount fuji","category":"Places","aliases":["mount_fuji"],"tags":[]},{"emoji":"🌋","description":"volcano","category":"Places","aliases":["volcano"],"tags":[]},{"emoji":"🏜","description":"desert","category":"Places","aliases":["desert"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏕","description":"camping","category":"Places","aliases":["camping"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛺️","description":"tent","category":"Places","aliases":["tent"],"tags":["camping"],"unicode_version":"5.2"},{"emoji":"🛤","description":"railway track","category":"Places","aliases":["railway_track"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛣","description":"motorway","category":"Places","aliases":["motorway"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏗","description":"building construction","category":"Places","aliases":["building_construction"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏭","description":"factory","category":"Places","aliases":["factory"],"tags":[]},{"emoji":"🏠","description":"house","category":"Places","aliases":["house"],"tags":[]},{"emoji":"🏡","description":"house with garden","category":"Places","aliases":["house_with_garden"],"tags":[]},{"emoji":"🏘","description":"house","category":"Places","aliases":["houses"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏚","description":"derelict house","category":"Places","aliases":["derelict_house"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏢","description":"office building","category":"Places","aliases":["office"],"tags":[]},{"emoji":"🏬","description":"department store","category":"Places","aliases":["department_store"],"tags":[]},{"emoji":"🏣","description":"Japanese post office","category":"Places","aliases":["post_office"],"tags":[]},{"emoji":"🏤","description":"post office","category":"Places","aliases":["european_post_office"],"tags":[]},{"emoji":"🏥","description":"hospital","category":"Places","aliases":["hospital"],"tags":[]},{"emoji":"🏦","description":"bank","category":"Places","aliases":["bank"],"tags":[]},{"emoji":"🏨","description":"hotel","category":"Places","aliases":["hotel"],"tags":[]},{"emoji":"🏪","description":"convenience store","category":"Places","aliases":["convenience_store"],"tags":[]},{"emoji":"🏫","description":"school","category":"Places","aliases":["school"],"tags":[]},{"emoji":"🏩","description":"love hotel","category":"Places","aliases":["love_hotel"],"tags":[]},{"emoji":"💒","description":"wedding","category":"Places","aliases":["wedding"],"tags":["marriage"]},{"emoji":"🏛","description":"classical building","category":"Places","aliases":["classical_building"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛪️","description":"church","category":"Places","aliases":["church"],"tags":[],"unicode_version":"5.2"},{"emoji":"🕌","description":"mosque","category":"Places","aliases":["mosque"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕍","description":"synagogue","category":"Places","aliases":["synagogue"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🕋","description":"kaaba","category":"Places","aliases":["kaaba"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛩","description":"shinto shrine","category":"Places","aliases":["shinto_shrine"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🗾","description":"map of Japan","category":"Places","aliases":["japan"],"tags":[]},{"emoji":"🎑","description":"moon viewing ceremony","category":"Places","aliases":["rice_scene"],"tags":[]},{"emoji":"🏞","description":"national park","category":"Places","aliases":["national_park"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌅","description":"sunrise","category":"Places","aliases":["sunrise"],"tags":[]},{"emoji":"🌄","description":"sunrise over mountains","category":"Places","aliases":["sunrise_over_mountains"],"tags":[]},{"emoji":"🌠","description":"shooting star","category":"Places","aliases":["stars"],"tags":[]},{"emoji":"🎇","description":"sparkler","category":"Places","aliases":["sparkler"],"tags":[]},{"emoji":"🎆","description":"fireworks","category":"Places","aliases":["fireworks"],"tags":["festival","celebration"]},{"emoji":"🌇","description":"sunset","category":"Places","aliases":["city_sunrise"],"tags":[]},{"emoji":"🌆","description":"cityscape at dusk","category":"Places","aliases":["city_sunset"],"tags":[]},{"emoji":"🏙","description":"cityscape","category":"Places","aliases":["cityscape"],"tags":["skyline"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🌃","description":"night with stars","category":"Places","aliases":["night_with_stars"],"tags":[]},{"emoji":"🌌","description":"milky way","category":"Places","aliases":["milky_way"],"tags":[]},{"emoji":"🌉","description":"bridge at night","category":"Places","aliases":["bridge_at_night"],"tags":[]},{"emoji":"🌁","description":"foggy","category":"Places","aliases":["foggy"],"tags":["karl"]},{"emoji":"⌚️","description":"watch","category":"Objects","aliases":["watch"],"tags":["time"]},{"emoji":"📱","description":"mobile phone","category":"Objects","aliases":["iphone"],"tags":["smartphone","mobile"]},{"emoji":"📲","description":"mobile phone with arrow","category":"Objects","aliases":["calling"],"tags":["call","incoming"]},{"emoji":"💻","description":"laptop computer","category":"Objects","aliases":["computer"],"tags":["desktop","screen"]},{"emoji":"⌨️","description":"keyboard","category":"Objects","aliases":["keyboard"],"tags":[],"ios_version":"9.1"},{"emoji":"🖥","description":"desktop computer","category":"Objects","aliases":["desktop_computer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖨","description":"printer","category":"Objects","aliases":["printer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖱","description":"computer mouse","category":"Objects","aliases":["computer_mouse"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖲","description":"trackball","category":"Objects","aliases":["trackball"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🕹","description":"joystick","category":"Objects","aliases":["joystick"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗜","description":"clamp","category":"Objects","aliases":["clamp"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💽","description":"computer disk","category":"Objects","aliases":["minidisc"],"tags":[]},{"emoji":"💾","description":"floppy disk","category":"Objects","aliases":["floppy_disk"],"tags":["save"]},{"emoji":"💿","description":"optical disk","category":"Objects","aliases":["cd"],"tags":[]},{"emoji":"📀","description":"dvd","category":"Objects","aliases":["dvd"],"tags":[]},{"emoji":"📼","description":"videocassette","category":"Objects","aliases":["vhs"],"tags":[]},{"emoji":"📷","description":"camera","category":"Objects","aliases":["camera"],"tags":["photo"]},{"emoji":"📸","description":"camera with flash","category":"Objects","aliases":["camera_flash"],"tags":["photo"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📹","description":"video camera","category":"Objects","aliases":["video_camera"],"tags":[]},{"emoji":"🎥","description":"movie camera","category":"Objects","aliases":["movie_camera"],"tags":["film","video"]},{"emoji":"📽","description":"film projector","category":"Objects","aliases":["film_projector"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎞","description":"film frames","category":"Objects","aliases":["film_strip"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📞","description":"telephone receiver","category":"Objects","aliases":["telephone_receiver"],"tags":["phone","call"]},{"emoji":"☎️","description":"telephone","category":"Objects","aliases":["phone","telephone"],"tags":[]},{"emoji":"📟","description":"pager","category":"Objects","aliases":["pager"],"tags":[]},{"emoji":"📠","description":"fax machine","category":"Objects","aliases":["fax"],"tags":[]},{"emoji":"📺","description":"television","category":"Objects","aliases":["tv"],"tags":[]},{"emoji":"📻","description":"radio","category":"Objects","aliases":["radio"],"tags":["podcast"]},{"emoji":"🎙","description":"studio microphone","category":"Objects","aliases":["studio_microphone"],"tags":["podcast"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎚","description":"level slider","category":"Objects","aliases":["level_slider"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🎛","description":"control knobs","category":"Objects","aliases":["control_knobs"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏱","description":"stopwatch","category":"Objects","aliases":["stopwatch"],"tags":[],"ios_version":"9.1"},{"emoji":"⏲","description":"timer clock","category":"Objects","aliases":["timer_clock"],"tags":[],"ios_version":"9.1"},{"emoji":"⏰","description":"alarm clock","category":"Objects","aliases":["alarm_clock"],"tags":["morning"]},{"emoji":"🕰","description":"mantelpiece clock","category":"Objects","aliases":["mantelpiece_clock"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⌛️","description":"hourglass","category":"Objects","aliases":["hourglass"],"tags":["time"]},{"emoji":"⏳","description":"hourglass with flowing sand","category":"Objects","aliases":["hourglass_flowing_sand"],"tags":["time"]},{"emoji":"📡","description":"satellite antenna","category":"Objects","aliases":["satellite"],"tags":["signal"]},{"emoji":"🔋","description":"battery","category":"Objects","aliases":["battery"],"tags":["power"]},{"emoji":"🔌","description":"electric plug","category":"Objects","aliases":["electric_plug"],"tags":[]},{"emoji":"💡","description":"light bulb","category":"Objects","aliases":["bulb"],"tags":["idea","light"]},{"emoji":"🔦","description":"flashlight","category":"Objects","aliases":["flashlight"],"tags":[]},{"emoji":"🕯","description":"candle","category":"Objects","aliases":["candle"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗑","description":"wastebasket","category":"Objects","aliases":["wastebasket"],"tags":["trash"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛢","description":"oil drum","category":"Objects","aliases":["oil_drum"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💸","description":"money with wings","category":"Objects","aliases":["money_with_wings"],"tags":["dollar"]},{"emoji":"💵","description":"dollar banknote","category":"Objects","aliases":["dollar"],"tags":["money"]},{"emoji":"💴","description":"yen banknote","category":"Objects","aliases":["yen"],"tags":[]},{"emoji":"💶","description":"euro banknote","category":"Objects","aliases":["euro"],"tags":[]},{"emoji":"💷","description":"pound banknote","category":"Objects","aliases":["pound"],"tags":[]},{"emoji":"💰","description":"money bag","category":"Objects","aliases":["moneybag"],"tags":["dollar","cream"]},{"emoji":"💳","description":"credit card","category":"Objects","aliases":["credit_card"],"tags":["subscription"]},{"emoji":"💎","description":"gem stone","category":"Objects","aliases":["gem"],"tags":["diamond"]},{"emoji":"⚖️","description":"balance scale","category":"Objects","aliases":["balance_scale"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔧","description":"wrench","category":"Objects","aliases":["wrench"],"tags":["tool"]},{"emoji":"🔨","description":"hammer","category":"Objects","aliases":["hammer"],"tags":["tool"]},{"emoji":"⚒","description":"hammer and pick","category":"Objects","aliases":["hammer_and_pick"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🛠","description":"hammer and wrench","category":"Objects","aliases":["hammer_and_wrench"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⛏","description":"pick","category":"Objects","aliases":["pick"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🔩","description":"nut and bolt","category":"Objects","aliases":["nut_and_bolt"],"tags":[]},{"emoji":"⚙️","description":"gear","category":"Objects","aliases":["gear"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"⛓","description":"chains","category":"Objects","aliases":["chains"],"tags":[],"unicode_version":"5.2","ios_version":"9.1"},{"emoji":"🔫","description":"pistol","category":"Objects","aliases":["gun"],"tags":["shoot","weapon"]},{"emoji":"💣","description":"bomb","category":"Objects","aliases":["bomb"],"tags":["boom"]},{"emoji":"🔪","description":"kitchen knife","category":"Objects","aliases":["hocho","knife"],"tags":["cut","chop"]},{"emoji":"🗡","description":"dagger","category":"Objects","aliases":["dagger"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⚔️","description":"crossed swords","category":"Objects","aliases":["crossed_swords"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🛡","description":"shield","category":"Objects","aliases":["shield"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚬","description":"cigarette","category":"Objects","aliases":["smoking"],"tags":["cigarette"]},{"emoji":"⚰️","description":"coffin","category":"Objects","aliases":["coffin"],"tags":["funeral"],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"⚱️","description":"funeral urn","category":"Objects","aliases":["funeral_urn"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🏺","description":"amphora","category":"Objects","aliases":["amphora"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🔮","description":"crystal ball","category":"Objects","aliases":["crystal_ball"],"tags":["fortune"]},{"emoji":"📿","description":"prayer beads","category":"Objects","aliases":["prayer_beads"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"💈","description":"barber pole","category":"Objects","aliases":["barber"],"tags":[]},{"emoji":"⚗️","description":"alembic","category":"Objects","aliases":["alembic"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔭","description":"telescope","category":"Objects","aliases":["telescope"],"tags":[]},{"emoji":"🔬","description":"microscope","category":"Objects","aliases":["microscope"],"tags":["science","laboratory","investigate"]},{"emoji":"🕳","description":"hole","category":"Objects","aliases":["hole"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"💊","description":"pill","category":"Objects","aliases":["pill"],"tags":["health","medicine"]},{"emoji":"💉","description":"syringe","category":"Objects","aliases":["syringe"],"tags":["health","hospital","needle"]},{"emoji":"🌡","description":"thermometer","category":"Objects","aliases":["thermometer"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚽","description":"toilet","category":"Objects","aliases":["toilet"],"tags":["wc"]},{"emoji":"🚰","description":"potable water","category":"Objects","aliases":["potable_water"],"tags":[]},{"emoji":"🚿","description":"shower","category":"Objects","aliases":["shower"],"tags":["bath"]},{"emoji":"🛁","description":"bathtub","category":"Objects","aliases":["bathtub"],"tags":[]},{"emoji":"🛀","description":"person taking bath","category":"Objects","aliases":["bath"],"tags":["shower"]},{"emoji":"🛎","description":"bellhop bell","category":"Objects","aliases":["bellhop_bell"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🔑","description":"key","category":"Objects","aliases":["key"],"tags":["lock","password"]},{"emoji":"🗝","description":"old key","category":"Objects","aliases":["old_key"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🚪","description":"door","category":"Objects","aliases":["door"],"tags":[]},{"emoji":"🛋","description":"couch and lamp","category":"Objects","aliases":["couch_and_lamp"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛏","description":"bed","category":"Objects","aliases":["bed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛌","description":"person in bed","category":"Objects","aliases":["sleeping_bed"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖼","description":"framed picture","category":"Objects","aliases":["framed_picture"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛍","description":"shopping bags","category":"Objects","aliases":["shopping"],"tags":["bags"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🛒","description":"shopping cart","category":"Objects","aliases":["shopping_cart"],"tags":[],"unicode_version":"9.0"},{"emoji":"🎁","description":"wrapped gift","category":"Objects","aliases":["gift"],"tags":["present","birthday","christmas"]},{"emoji":"🎈","description":"balloon","category":"Objects","aliases":["balloon"],"tags":["party","birthday"]},{"emoji":"🎏","description":"carp streamer","category":"Objects","aliases":["flags"],"tags":[]},{"emoji":"🎀","description":"ribbon","category":"Objects","aliases":["ribbon"],"tags":[]},{"emoji":"🎊","description":"confetti ball","category":"Objects","aliases":["confetti_ball"],"tags":[]},{"emoji":"🎉","description":"party popper","category":"Objects","aliases":["tada"],"tags":["hooray","party"]},{"emoji":"🎎","description":"Japanese dolls","category":"Objects","aliases":["dolls"],"tags":[]},{"emoji":"🏮","description":"red paper lantern","category":"Objects","aliases":["izakaya_lantern","lantern"],"tags":[]},{"emoji":"🎐","description":"wind chime","category":"Objects","aliases":["wind_chime"],"tags":[]},{"emoji":"✉️","description":"envelope","category":"Objects","aliases":["email","envelope"],"tags":["letter"]},{"emoji":"📩","description":"envelope with arrow","category":"Objects","aliases":["envelope_with_arrow"],"tags":[]},{"emoji":"📨","description":"incoming envelope","category":"Objects","aliases":["incoming_envelope"],"tags":[]},{"emoji":"📧","description":"e-mail","category":"Objects","aliases":["e-mail"],"tags":[]},{"emoji":"💌","description":"love letter","category":"Objects","aliases":["love_letter"],"tags":["email","envelope"]},{"emoji":"📥","description":"inbox tray","category":"Objects","aliases":["inbox_tray"],"tags":[]},{"emoji":"📤","description":"outbox tray","category":"Objects","aliases":["outbox_tray"],"tags":[]},{"emoji":"📦","description":"package","category":"Objects","aliases":["package"],"tags":["shipping"]},{"emoji":"🏷","description":"label","category":"Objects","aliases":["label"],"tags":["tag"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📪","description":"closed mailbox with lowered flag","category":"Objects","aliases":["mailbox_closed"],"tags":[]},{"emoji":"📫","description":"closed mailbox with raised flag","category":"Objects","aliases":["mailbox"],"tags":[]},{"emoji":"📬","description":"open mailbox with raised flag","category":"Objects","aliases":["mailbox_with_mail"],"tags":[]},{"emoji":"📭","description":"open mailbox with lowered flag","category":"Objects","aliases":["mailbox_with_no_mail"],"tags":[]},{"emoji":"📮","description":"postbox","category":"Objects","aliases":["postbox"],"tags":[]},{"emoji":"📯","description":"postal horn","category":"Objects","aliases":["postal_horn"],"tags":[]},{"emoji":"📜","description":"scroll","category":"Objects","aliases":["scroll"],"tags":["document"]},{"emoji":"📃","description":"page with curl","category":"Objects","aliases":["page_with_curl"],"tags":[]},{"emoji":"📄","description":"page facing up","category":"Objects","aliases":["page_facing_up"],"tags":["document"]},{"emoji":"📑","description":"bookmark tabs","category":"Objects","aliases":["bookmark_tabs"],"tags":[]},{"emoji":"📊","description":"bar chart","category":"Objects","aliases":["bar_chart"],"tags":["stats","metrics"]},{"emoji":"📈","description":"chart increasing","category":"Objects","aliases":["chart_with_upwards_trend"],"tags":["graph","metrics"]},{"emoji":"📉","description":"chart decreasing","category":"Objects","aliases":["chart_with_downwards_trend"],"tags":["graph","metrics"]},{"emoji":"🗒","description":"spiral notepad","category":"Objects","aliases":["spiral_notepad"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗓","description":"spiral calendar","category":"Objects","aliases":["spiral_calendar"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📆","description":"tear-off calendar","category":"Objects","aliases":["calendar"],"tags":["schedule"]},{"emoji":"📅","description":"calendar","category":"Objects","aliases":["date"],"tags":["calendar","schedule"]},{"emoji":"📇","description":"card index","category":"Objects","aliases":["card_index"],"tags":[]},{"emoji":"🗃","description":"card file box","category":"Objects","aliases":["card_file_box"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗳","description":"ballot box with ballot","category":"Objects","aliases":["ballot_box"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗄","description":"file cabinet","category":"Objects","aliases":["file_cabinet"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📋","description":"clipboard","category":"Objects","aliases":["clipboard"],"tags":[]},{"emoji":"📁","description":"file folder","category":"Objects","aliases":["file_folder"],"tags":["directory"]},{"emoji":"📂","description":"open file folder","category":"Objects","aliases":["open_file_folder"],"tags":[]},{"emoji":"🗂","description":"card index dividers","category":"Objects","aliases":["card_index_dividers"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🗞","description":"rolled-up newspaper","category":"Objects","aliases":["newspaper_roll"],"tags":["press"],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📰","description":"newspaper","category":"Objects","aliases":["newspaper"],"tags":["press"]},{"emoji":"📓","description":"notebook","category":"Objects","aliases":["notebook"],"tags":[]},{"emoji":"📔","description":"notebook with decorative cover","category":"Objects","aliases":["notebook_with_decorative_cover"],"tags":[]},{"emoji":"📒","description":"ledger","category":"Objects","aliases":["ledger"],"tags":[]},{"emoji":"📕","description":"closed book","category":"Objects","aliases":["closed_book"],"tags":[]},{"emoji":"📗","description":"green book","category":"Objects","aliases":["green_book"],"tags":[]},{"emoji":"📘","description":"blue book","category":"Objects","aliases":["blue_book"],"tags":[]},{"emoji":"📙","description":"orange book","category":"Objects","aliases":["orange_book"],"tags":[]},{"emoji":"📚","description":"books","category":"Objects","aliases":["books"],"tags":["library"]},{"emoji":"📖","description":"open book","category":"Objects","aliases":["book","open_book"],"tags":[]},{"emoji":"🔖","description":"bookmark","category":"Objects","aliases":["bookmark"],"tags":[]},{"emoji":"🔗","description":"link","category":"Objects","aliases":["link"],"tags":[]},{"emoji":"📎","description":"paperclip","category":"Objects","aliases":["paperclip"],"tags":[]},{"emoji":"🖇","description":"linked paperclips","category":"Objects","aliases":["paperclips"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📐","description":"triangular ruler","category":"Objects","aliases":["triangular_ruler"],"tags":[]},{"emoji":"📏","description":"straight ruler","category":"Objects","aliases":["straight_ruler"],"tags":[]},{"emoji":"📌","description":"pushpin","category":"Objects","aliases":["pushpin"],"tags":["location"]},{"emoji":"📍","description":"round pushpin","category":"Objects","aliases":["round_pushpin"],"tags":["location"]},{"emoji":"✂️","description":"scissors","category":"Objects","aliases":["scissors"],"tags":["cut"]},{"emoji":"🖊","description":"pen","category":"Objects","aliases":["pen"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖋","description":"fountain pen","category":"Objects","aliases":["fountain_pen"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"✒️","description":"black nib","category":"Objects","aliases":["black_nib"],"tags":[]},{"emoji":"🖌","description":"paintbrush","category":"Objects","aliases":["paintbrush"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🖍","description":"crayon","category":"Objects","aliases":["crayon"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"📝","description":"memo","category":"Objects","aliases":["memo","pencil"],"tags":["document","note"]},{"emoji":"✏️","description":"pencil","category":"Objects","aliases":["pencil2"],"tags":[]},{"emoji":"🔍","description":"left-pointing magnifying glass","category":"Objects","aliases":["mag"],"tags":["search","zoom"]},{"emoji":"🔎","description":"right-pointing magnifying glass","category":"Objects","aliases":["mag_right"],"tags":[]},{"emoji":"🔏","description":"locked with pen","category":"Objects","aliases":["lock_with_ink_pen"],"tags":[]},{"emoji":"🔐","description":"locked with key","category":"Objects","aliases":["closed_lock_with_key"],"tags":["security"]},{"emoji":"🔒","description":"locked","category":"Objects","aliases":["lock"],"tags":["security","private"]},{"emoji":"🔓","description":"unlocked","category":"Objects","aliases":["unlock"],"tags":["security"]},{"emoji":"❤️","description":"red heart","category":"Symbols","aliases":["heart"],"tags":["love"]},{"emoji":"💛","description":"yellow heart","category":"Symbols","aliases":["yellow_heart"],"tags":[]},{"emoji":"💚","description":"green heart","category":"Symbols","aliases":["green_heart"],"tags":[]},{"emoji":"💙","description":"blue heart","category":"Symbols","aliases":["blue_heart"],"tags":[]},{"emoji":"💜","description":"purple heart","category":"Symbols","aliases":["purple_heart"],"tags":[]},{"emoji":"🖤","description":"black heart","category":"Symbols","aliases":["black_heart"],"tags":[],"unicode_version":"9.0"},{"emoji":"💔","description":"broken heart","category":"Symbols","aliases":["broken_heart"],"tags":[]},{"emoji":"❣️","description":"heavy heart exclamation","category":"Symbols","aliases":["heavy_heart_exclamation"],"tags":[],"ios_version":"9.1"},{"emoji":"💕","description":"two hearts","category":"Symbols","aliases":["two_hearts"],"tags":[]},{"emoji":"💞","description":"revolving hearts","category":"Symbols","aliases":["revolving_hearts"],"tags":[]},{"emoji":"💓","description":"beating heart","category":"Symbols","aliases":["heartbeat"],"tags":[]},{"emoji":"💗","description":"growing heart","category":"Symbols","aliases":["heartpulse"],"tags":[]},{"emoji":"💖","description":"sparkling heart","category":"Symbols","aliases":["sparkling_heart"],"tags":[]},{"emoji":"💘","description":"heart with arrow","category":"Symbols","aliases":["cupid"],"tags":["love","heart"]},{"emoji":"💝","description":"heart with ribbon","category":"Symbols","aliases":["gift_heart"],"tags":["chocolates"]},{"emoji":"💟","description":"heart decoration","category":"Symbols","aliases":["heart_decoration"],"tags":[]},{"emoji":"☮️","description":"peace symbol","category":"Symbols","aliases":["peace_symbol"],"tags":[],"ios_version":"9.1"},{"emoji":"✝️","description":"latin cross","category":"Symbols","aliases":["latin_cross"],"tags":[],"ios_version":"9.1"},{"emoji":"☪️","description":"star and crescent","category":"Symbols","aliases":["star_and_crescent"],"tags":[],"ios_version":"9.1"},{"emoji":"🕉","description":"om","category":"Symbols","aliases":["om"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"☸️","description":"wheel of dharma","category":"Symbols","aliases":["wheel_of_dharma"],"tags":[],"ios_version":"9.1"},{"emoji":"✡️","description":"star of David","category":"Symbols","aliases":["star_of_david"],"tags":[],"ios_version":"9.1"},{"emoji":"🔯","description":"dotted six-pointed star","category":"Symbols","aliases":["six_pointed_star"],"tags":[]},{"emoji":"🕎","description":"menorah","category":"Symbols","aliases":["menorah"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"☯️","description":"yin yang","category":"Symbols","aliases":["yin_yang"],"tags":[],"ios_version":"9.1"},{"emoji":"☦️","description":"orthodox cross","category":"Symbols","aliases":["orthodox_cross"],"tags":[],"ios_version":"9.1"},{"emoji":"🛐","description":"place of worship","category":"Symbols","aliases":["place_of_worship"],"tags":[],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"⛎","description":"Ophiuchus","category":"Symbols","aliases":["ophiuchus"],"tags":[]},{"emoji":"♈️","description":"Aries","category":"Symbols","aliases":["aries"],"tags":[]},{"emoji":"♉️","description":"Taurus","category":"Symbols","aliases":["taurus"],"tags":[]},{"emoji":"♊️","description":"Gemini","category":"Symbols","aliases":["gemini"],"tags":[]},{"emoji":"♋️","description":"Cancer","category":"Symbols","aliases":["cancer"],"tags":[]},{"emoji":"♌️","description":"Leo","category":"Symbols","aliases":["leo"],"tags":[]},{"emoji":"♍️","description":"Virgo","category":"Symbols","aliases":["virgo"],"tags":[]},{"emoji":"♎️","description":"Libra","category":"Symbols","aliases":["libra"],"tags":[]},{"emoji":"♏️","description":"Scorpius","category":"Symbols","aliases":["scorpius"],"tags":[]},{"emoji":"♐️","description":"Sagittarius","category":"Symbols","aliases":["sagittarius"],"tags":[]},{"emoji":"♑️","description":"Capricorn","category":"Symbols","aliases":["capricorn"],"tags":[]},{"emoji":"♒️","description":"Aquarius","category":"Symbols","aliases":["aquarius"],"tags":[]},{"emoji":"♓️","description":"Pisces","category":"Symbols","aliases":["pisces"],"tags":[]},{"emoji":"🆔","description":"ID button","category":"Symbols","aliases":["id"],"tags":[]},{"emoji":"⚛️","description":"atom symbol","category":"Symbols","aliases":["atom_symbol"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🉑","description":"Japanese “acceptable” button","category":"Symbols","aliases":["accept"],"tags":[]},{"emoji":"☢️","description":"radioactive","category":"Symbols","aliases":["radioactive"],"tags":[],"ios_version":"9.1"},{"emoji":"☣️","description":"biohazard","category":"Symbols","aliases":["biohazard"],"tags":[],"ios_version":"9.1"},{"emoji":"📴","description":"mobile phone off","category":"Symbols","aliases":["mobile_phone_off"],"tags":["mute","off"]},{"emoji":"📳","description":"vibration mode","category":"Symbols","aliases":["vibration_mode"],"tags":[]},{"emoji":"🈶","description":"Japanese “not free of charge” button","category":"Symbols","aliases":["u6709"],"tags":[]},{"emoji":"🈚️","description":"Japanese “free of charge” button","category":"Symbols","aliases":["u7121"],"tags":[]},{"emoji":"🈸","description":"Japanese “application” button","category":"Symbols","aliases":["u7533"],"tags":[]},{"emoji":"🈺","description":"Japanese “open for business” button","category":"Symbols","aliases":["u55b6"],"tags":[]},{"emoji":"🈷️","description":"Japanese “monthly amount” button","category":"Symbols","aliases":["u6708"],"tags":[]},{"emoji":"✴️","description":"eight-pointed star","category":"Symbols","aliases":["eight_pointed_black_star"],"tags":[]},{"emoji":"🆚","description":"VS button","category":"Symbols","aliases":["vs"],"tags":[]},{"emoji":"💮","description":"white flower","category":"Symbols","aliases":["white_flower"],"tags":[]},{"emoji":"🉐","description":"Japanese “bargain” button","category":"Symbols","aliases":["ideograph_advantage"],"tags":[]},{"emoji":"㊙️","description":"Japanese “secret” button","category":"Symbols","aliases":["secret"],"tags":[]},{"emoji":"㊗️","description":"Japanese “congratulations” button","category":"Symbols","aliases":["congratulations"],"tags":[]},{"emoji":"🈴","description":"Japanese “passing grade” button","category":"Symbols","aliases":["u5408"],"tags":[]},{"emoji":"🈵","description":"Japanese “no vacancy” button","category":"Symbols","aliases":["u6e80"],"tags":[]},{"emoji":"🈹","description":"Japanese “discount” button","category":"Symbols","aliases":["u5272"],"tags":[]},{"emoji":"🈲","description":"Japanese “prohibited” button","category":"Symbols","aliases":["u7981"],"tags":[]},{"emoji":"🅰️","description":"A button (blood type)","category":"Symbols","aliases":["a"],"tags":[]},{"emoji":"🅱️","description":"B button (blood type)","category":"Symbols","aliases":["b"],"tags":[]},{"emoji":"🆎","description":"AB button (blood type)","category":"Symbols","aliases":["ab"],"tags":[]},{"emoji":"🆑","description":"CL button","category":"Symbols","aliases":["cl"],"tags":[]},{"emoji":"🅾️","description":"O button (blood type)","category":"Symbols","aliases":["o2"],"tags":[]},{"emoji":"🆘","description":"SOS button","category":"Symbols","aliases":["sos"],"tags":["help","emergency"]},{"emoji":"❌","description":"cross mark","category":"Symbols","aliases":["x"],"tags":[]},{"emoji":"⭕️","description":"heavy large circle","category":"Symbols","aliases":["o"],"tags":[],"unicode_version":"5.2"},{"emoji":"🛑","description":"stop sign","category":"Symbols","aliases":["stop_sign"],"tags":[],"unicode_version":"9.0"},{"emoji":"⛔️","description":"no entry","category":"Symbols","aliases":["no_entry"],"tags":["limit"],"unicode_version":"5.2"},{"emoji":"📛","description":"name badge","category":"Symbols","aliases":["name_badge"],"tags":[]},{"emoji":"🚫","description":"prohibited","category":"Symbols","aliases":["no_entry_sign"],"tags":["block","forbidden"]},{"emoji":"💯","description":"hundred points","category":"Symbols","aliases":["100"],"tags":["score","perfect"]},{"emoji":"💢","description":"anger symbol","category":"Symbols","aliases":["anger"],"tags":["angry"]},{"emoji":"♨️","description":"hot springs","category":"Symbols","aliases":["hotsprings"],"tags":[]},{"emoji":"🚷","description":"no pedestrians","category":"Symbols","aliases":["no_pedestrians"],"tags":[]},{"emoji":"🚯","description":"no littering","category":"Symbols","aliases":["do_not_litter"],"tags":[]},{"emoji":"🚳","description":"no bicycles","category":"Symbols","aliases":["no_bicycles"],"tags":[]},{"emoji":"🚱","description":"non-potable water","category":"Symbols","aliases":["non-potable_water"],"tags":[]},{"emoji":"🔞","description":"no one under eighteen","category":"Symbols","aliases":["underage"],"tags":[]},{"emoji":"📵","description":"no mobile phones","category":"Symbols","aliases":["no_mobile_phones"],"tags":[]},{"emoji":"🚭","description":"no smoking","category":"Symbols","aliases":["no_smoking"],"tags":[]},{"emoji":"❗️","description":"exclamation mark","category":"Symbols","aliases":["exclamation","heavy_exclamation_mark"],"tags":["bang"],"unicode_version":"5.2"},{"emoji":"❕","description":"white exclamation mark","category":"Symbols","aliases":["grey_exclamation"],"tags":[]},{"emoji":"❓","description":"question mark","category":"Symbols","aliases":["question"],"tags":["confused"]},{"emoji":"❔","description":"white question mark","category":"Symbols","aliases":["grey_question"],"tags":[]},{"emoji":"‼️","description":"double exclamation mark","category":"Symbols","aliases":["bangbang"],"tags":[]},{"emoji":"⁉️","description":"exclamation question mark","category":"Symbols","aliases":["interrobang"],"tags":[],"unicode_version":"3.0"},{"emoji":"🔅","description":"dim button","category":"Symbols","aliases":["low_brightness"],"tags":[]},{"emoji":"🔆","description":"bright button","category":"Symbols","aliases":["high_brightness"],"tags":[]},{"emoji":"〽️","description":"part alternation mark","category":"Symbols","aliases":["part_alternation_mark"],"tags":[],"unicode_version":"3.2"},{"emoji":"⚠️","description":"warning","category":"Symbols","aliases":["warning"],"tags":["wip"],"unicode_version":"4.0"},{"emoji":"🚸","description":"children crossing","category":"Symbols","aliases":["children_crossing"],"tags":[]},{"emoji":"🔱","description":"trident emblem","category":"Symbols","aliases":["trident"],"tags":[]},{"emoji":"⚜️","description":"fleur-de-lis","category":"Symbols","aliases":["fleur_de_lis"],"tags":[],"unicode_version":"4.1","ios_version":"9.1"},{"emoji":"🔰","description":"Japanese symbol for beginner","category":"Symbols","aliases":["beginner"],"tags":[]},{"emoji":"♻️","description":"recycling symbol","category":"Symbols","aliases":["recycle"],"tags":["environment","green"],"unicode_version":"3.2"},{"emoji":"✅","description":"white heavy check mark","category":"Symbols","aliases":["white_check_mark"],"tags":[]},{"emoji":"🈯️","description":"Japanese “reserved” button","category":"Symbols","aliases":["u6307"],"tags":[]},{"emoji":"💹","description":"chart increasing with yen","category":"Symbols","aliases":["chart"],"tags":[]},{"emoji":"❇️","description":"sparkle","category":"Symbols","aliases":["sparkle"],"tags":[]},{"emoji":"✳️","description":"eight-spoked asterisk","category":"Symbols","aliases":["eight_spoked_asterisk"],"tags":[]},{"emoji":"❎","description":"cross mark button","category":"Symbols","aliases":["negative_squared_cross_mark"],"tags":[]},{"emoji":"🌐","description":"globe with meridians","category":"Symbols","aliases":["globe_with_meridians"],"tags":["world","global","international"]},{"emoji":"💠","description":"diamond with a dot","category":"Symbols","aliases":["diamond_shape_with_a_dot_inside"],"tags":[]},{"emoji":"Ⓜ️","description":"circled M","category":"Symbols","aliases":["m"],"tags":[]},{"emoji":"🌀","description":"cyclone","category":"Symbols","aliases":["cyclone"],"tags":["swirl"]},{"emoji":"💤","description":"zzz","category":"Symbols","aliases":["zzz"],"tags":["sleeping"]},{"emoji":"🏧","description":"ATM sign","category":"Symbols","aliases":["atm"],"tags":[]},{"emoji":"🚾","description":"water closet","category":"Symbols","aliases":["wc"],"tags":["toilet","restroom"]},{"emoji":"♿️","description":"wheelchair symbol","category":"Symbols","aliases":["wheelchair"],"tags":["accessibility"],"unicode_version":"4.1"},{"emoji":"🅿️","description":"P button","category":"Symbols","aliases":["parking"],"tags":[],"unicode_version":"5.2"},{"emoji":"🈳","description":"Japanese “vacancy” button","category":"Symbols","aliases":["u7a7a"],"tags":[]},{"emoji":"🈂️","description":"Japanese “service charge” button","category":"Symbols","aliases":["sa"],"tags":[]},{"emoji":"🛂","description":"passport control","category":"Symbols","aliases":["passport_control"],"tags":[]},{"emoji":"🛃","description":"customs","category":"Symbols","aliases":["customs"],"tags":[]},{"emoji":"🛄","description":"baggage claim","category":"Symbols","aliases":["baggage_claim"],"tags":["airport"]},{"emoji":"🛅","description":"left luggage","category":"Symbols","aliases":["left_luggage"],"tags":[]},{"emoji":"🚹","description":"men’s room","category":"Symbols","aliases":["mens"],"tags":[]},{"emoji":"🚺","description":"women’s room","category":"Symbols","aliases":["womens"],"tags":[]},{"emoji":"🚼","description":"baby symbol","category":"Symbols","aliases":["baby_symbol"],"tags":[]},{"emoji":"🚻","description":"restroom","category":"Symbols","aliases":["restroom"],"tags":["toilet"]},{"emoji":"🚮","description":"litter in bin sign","category":"Symbols","aliases":["put_litter_in_its_place"],"tags":[]},{"emoji":"🎦","description":"cinema","category":"Symbols","aliases":["cinema"],"tags":["film","movie"]},{"emoji":"📶","description":"antenna bars","category":"Symbols","aliases":["signal_strength"],"tags":["wifi"]},{"emoji":"🈁","description":"Japanese “here” button","category":"Symbols","aliases":["koko"],"tags":[]},{"emoji":"🔣","description":"input symbols","category":"Symbols","aliases":["symbols"],"tags":[]},{"emoji":"ℹ️","description":"information","category":"Symbols","aliases":["information_source"],"tags":[],"unicode_version":"3.0"},{"emoji":"🔤","description":"input latin letters","category":"Symbols","aliases":["abc"],"tags":["alphabet"]},{"emoji":"🔡","description":"input latin lowercase","category":"Symbols","aliases":["abcd"],"tags":[]},{"emoji":"🔠","description":"input latin uppercase","category":"Symbols","aliases":["capital_abcd"],"tags":["letters"]},{"emoji":"🆖","description":"NG button","category":"Symbols","aliases":["ng"],"tags":[]},{"emoji":"🆗","description":"OK button","category":"Symbols","aliases":["ok"],"tags":["yes"]},{"emoji":"🆙","description":"UP! button","category":"Symbols","aliases":["up"],"tags":[]},{"emoji":"🆒","description":"COOL button","category":"Symbols","aliases":["cool"],"tags":[]},{"emoji":"🆕","description":"NEW button","category":"Symbols","aliases":["new"],"tags":["fresh"]},{"emoji":"🆓","description":"FREE button","category":"Symbols","aliases":["free"],"tags":[]},{"emoji":"0️⃣","description":"keycap: 0","category":"Symbols","aliases":["zero"],"tags":[]},{"emoji":"1️⃣","description":"keycap: 1","category":"Symbols","aliases":["one"],"tags":[]},{"emoji":"2️⃣","description":"keycap: 2","category":"Symbols","aliases":["two"],"tags":[]},{"emoji":"3️⃣","description":"keycap: 3","category":"Symbols","aliases":["three"],"tags":[]},{"emoji":"4️⃣","description":"keycap: 4","category":"Symbols","aliases":["four"],"tags":[]},{"emoji":"5️⃣","description":"keycap: 5","category":"Symbols","aliases":["five"],"tags":[]},{"emoji":"6️⃣","description":"keycap: 6","category":"Symbols","aliases":["six"],"tags":[]},{"emoji":"7️⃣","description":"keycap: 7","category":"Symbols","aliases":["seven"],"tags":[]},{"emoji":"8️⃣","description":"keycap: 8","category":"Symbols","aliases":["eight"],"tags":[]},{"emoji":"9️⃣","description":"keycap: 9","category":"Symbols","aliases":["nine"],"tags":[]},{"emoji":"🔟","description":"keycap 10","category":"Symbols","aliases":["keycap_ten"],"tags":[]},{"emoji":"🔢","description":"input numbers","category":"Symbols","aliases":["1234"],"tags":["numbers"]},{"emoji":"#️⃣","description":"keycap: #","category":"Symbols","aliases":["hash"],"tags":["number"]},{"emoji":"*️⃣","description":"keycap: *","category":"Symbols","aliases":["asterisk"],"tags":[],"ios_version":"9.1"},{"emoji":"▶️","description":"play button","category":"Symbols","aliases":["arrow_forward"],"tags":[]},{"emoji":"⏸","description":"pause button","category":"Symbols","aliases":["pause_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏯","description":"play or pause button","category":"Symbols","aliases":["play_or_pause_button"],"tags":[],"ios_version":"9.1"},{"emoji":"⏹","description":"stop button","category":"Symbols","aliases":["stop_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏺","description":"record button","category":"Symbols","aliases":["record_button"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"⏭","description":"next track button","category":"Symbols","aliases":["next_track_button"],"tags":[],"ios_version":"9.1"},{"emoji":"⏮","description":"last track button","category":"Symbols","aliases":["previous_track_button"],"tags":[],"ios_version":"9.1"},{"emoji":"⏩","description":"fast-forward button","category":"Symbols","aliases":["fast_forward"],"tags":[]},{"emoji":"⏪","description":"fast reverse button","category":"Symbols","aliases":["rewind"],"tags":[]},{"emoji":"⏫","description":"fast up button","category":"Symbols","aliases":["arrow_double_up"],"tags":[]},{"emoji":"⏬","description":"fast down button","category":"Symbols","aliases":["arrow_double_down"],"tags":[]},{"emoji":"◀️","description":"reverse button","category":"Symbols","aliases":["arrow_backward"],"tags":[]},{"emoji":"🔼","description":"up button","category":"Symbols","aliases":["arrow_up_small"],"tags":[]},{"emoji":"🔽","description":"down button","category":"Symbols","aliases":["arrow_down_small"],"tags":[]},{"emoji":"➡️","description":"right arrow","category":"Symbols","aliases":["arrow_right"],"tags":[]},{"emoji":"⬅️","description":"left arrow","category":"Symbols","aliases":["arrow_left"],"tags":[],"unicode_version":"4.0"},{"emoji":"⬆️","description":"up arrow","category":"Symbols","aliases":["arrow_up"],"tags":[],"unicode_version":"4.0"},{"emoji":"⬇️","description":"down arrow","category":"Symbols","aliases":["arrow_down"],"tags":[],"unicode_version":"4.0"},{"emoji":"↗️","description":"up-right arrow","category":"Symbols","aliases":["arrow_upper_right"],"tags":[]},{"emoji":"↘️","description":"down-right arrow","category":"Symbols","aliases":["arrow_lower_right"],"tags":[]},{"emoji":"↙️","description":"down-left arrow","category":"Symbols","aliases":["arrow_lower_left"],"tags":[]},{"emoji":"↖️","description":"up-left arrow","category":"Symbols","aliases":["arrow_upper_left"],"tags":[]},{"emoji":"↕️","description":"up-down arrow","category":"Symbols","aliases":["arrow_up_down"],"tags":[]},{"emoji":"↔️","description":"left-right arrow","category":"Symbols","aliases":["left_right_arrow"],"tags":[]},{"emoji":"↪️","description":"left arrow curving right","category":"Symbols","aliases":["arrow_right_hook"],"tags":[]},{"emoji":"↩️","description":"right arrow curving left","category":"Symbols","aliases":["leftwards_arrow_with_hook"],"tags":["return"]},{"emoji":"⤴️","description":"right arrow curving up","category":"Symbols","aliases":["arrow_heading_up"],"tags":[]},{"emoji":"⤵️","description":"right arrow curving down","category":"Symbols","aliases":["arrow_heading_down"],"tags":[]},{"emoji":"🔀","description":"shuffle tracks button","category":"Symbols","aliases":["twisted_rightwards_arrows"],"tags":["shuffle"]},{"emoji":"🔁","description":"repeat button","category":"Symbols","aliases":["repeat"],"tags":["loop"]},{"emoji":"🔂","description":"repeat single button","category":"Symbols","aliases":["repeat_one"],"tags":[]},{"emoji":"🔄","description":"anticlockwise arrows button","category":"Symbols","aliases":["arrows_counterclockwise"],"tags":["sync"]},{"emoji":"🔃","description":"clockwise vertical arrows","category":"Symbols","aliases":["arrows_clockwise"],"tags":[]},{"emoji":"🎵","description":"musical note","category":"Symbols","aliases":["musical_note"],"tags":[]},{"emoji":"🎶","description":"musical notes","category":"Symbols","aliases":["notes"],"tags":["music"]},{"emoji":"➕","description":"heavy plus sign","category":"Symbols","aliases":["heavy_plus_sign"],"tags":[]},{"emoji":"➖","description":"heavy minus sign","category":"Symbols","aliases":["heavy_minus_sign"],"tags":[]},{"emoji":"➗","description":"heavy division sign","category":"Symbols","aliases":["heavy_division_sign"],"tags":[]},{"emoji":"✖️","description":"heavy multiplication x","category":"Symbols","aliases":["heavy_multiplication_x"],"tags":[]},{"emoji":"💲","description":"heavy dollar sign","category":"Symbols","aliases":["heavy_dollar_sign"],"tags":[]},{"emoji":"💱","description":"currency exchange","category":"Symbols","aliases":["currency_exchange"],"tags":[]},{"emoji":"™️","description":"trade mark","category":"Symbols","aliases":["tm"],"tags":["trademark"]},{"emoji":"©️","description":"copyright","category":"Symbols","aliases":["copyright"],"tags":[]},{"emoji":"®️","description":"registered","category":"Symbols","aliases":["registered"],"tags":[]},{"emoji":"〰️","description":"wavy dash","category":"Symbols","aliases":["wavy_dash"],"tags":[]},{"emoji":"➰","description":"curly loop","category":"Symbols","aliases":["curly_loop"],"tags":[]},{"emoji":"➿","description":"double curly loop","category":"Symbols","aliases":["loop"],"tags":[]},{"emoji":"🔚","description":"END arrow","category":"Symbols","aliases":["end"],"tags":[]},{"emoji":"🔙","description":"BACK arrow","category":"Symbols","aliases":["back"],"tags":[]},{"emoji":"🔛","description":"ON! arrow","category":"Symbols","aliases":["on"],"tags":[]},{"emoji":"🔝","description":"TOP arrow","category":"Symbols","aliases":["top"],"tags":[]},{"emoji":"🔜","description":"SOON arrow","category":"Symbols","aliases":["soon"],"tags":[]},{"emoji":"✔️","description":"heavy check mark","category":"Symbols","aliases":["heavy_check_mark"],"tags":[]},{"emoji":"☑️","description":"ballot box with check","category":"Symbols","aliases":["ballot_box_with_check"],"tags":[]},{"emoji":"🔘","description":"radio button","category":"Symbols","aliases":["radio_button"],"tags":[]},{"emoji":"⚪️","description":"white circle","category":"Symbols","aliases":["white_circle"],"tags":[],"unicode_version":"4.1"},{"emoji":"⚫️","description":"black circle","category":"Symbols","aliases":["black_circle"],"tags":[],"unicode_version":"4.1"},{"emoji":"🔴","description":"red circle","category":"Symbols","aliases":["red_circle"],"tags":[]},{"emoji":"🔵","description":"blue circle","category":"Symbols","aliases":["large_blue_circle"],"tags":[]},{"emoji":"🔺","description":"red triangle pointed up","category":"Symbols","aliases":["small_red_triangle"],"tags":[]},{"emoji":"🔻","description":"red triangle pointed down","category":"Symbols","aliases":["small_red_triangle_down"],"tags":[]},{"emoji":"🔸","description":"small orange diamond","category":"Symbols","aliases":["small_orange_diamond"],"tags":[]},{"emoji":"🔹","description":"small blue diamond","category":"Symbols","aliases":["small_blue_diamond"],"tags":[]},{"emoji":"🔶","description":"large orange diamond","category":"Symbols","aliases":["large_orange_diamond"],"tags":[]},{"emoji":"🔷","description":"large blue diamond","category":"Symbols","aliases":["large_blue_diamond"],"tags":[]},{"emoji":"🔳","description":"white square button","category":"Symbols","aliases":["white_square_button"],"tags":[]},{"emoji":"🔲","description":"black square button","category":"Symbols","aliases":["black_square_button"],"tags":[]},{"emoji":"▪️","description":"black small square","category":"Symbols","aliases":["black_small_square"],"tags":[]},{"emoji":"▫️","description":"white small square","category":"Symbols","aliases":["white_small_square"],"tags":[]},{"emoji":"◾️","description":"black medium-small square","category":"Symbols","aliases":["black_medium_small_square"],"tags":[],"unicode_version":"3.2"},{"emoji":"◽️","description":"white medium-small square","category":"Symbols","aliases":["white_medium_small_square"],"tags":[],"unicode_version":"3.2"},{"emoji":"◼️","description":"black medium square","category":"Symbols","aliases":["black_medium_square"],"tags":[],"unicode_version":"3.2"},{"emoji":"◻️","description":"white medium square","category":"Symbols","aliases":["white_medium_square"],"tags":[],"unicode_version":"3.2"},{"emoji":"⬛️","description":"black large square","category":"Symbols","aliases":["black_large_square"],"tags":[],"unicode_version":"5.1"},{"emoji":"⬜️","description":"white large square","category":"Symbols","aliases":["white_large_square"],"tags":[],"unicode_version":"5.1"},{"emoji":"🔈","description":"speaker low volume","category":"Symbols","aliases":["speaker"],"tags":[]},{"emoji":"🔇","description":"muted speaker","category":"Symbols","aliases":["mute"],"tags":["sound","volume"]},{"emoji":"🔉","description":"speaker medium volume","category":"Symbols","aliases":["sound"],"tags":["volume"]},{"emoji":"🔊","description":"speaker high volume","category":"Symbols","aliases":["loud_sound"],"tags":["volume"]},{"emoji":"🔔","description":"bell","category":"Symbols","aliases":["bell"],"tags":["sound","notification"]},{"emoji":"🔕","description":"bell with slash","category":"Symbols","aliases":["no_bell"],"tags":["volume","off"]},{"emoji":"📣","description":"megaphone","category":"Symbols","aliases":["mega"],"tags":[]},{"emoji":"📢","description":"loudspeaker","category":"Symbols","aliases":["loudspeaker"],"tags":["announcement"]},{"emoji":"👁‍🗨","description":"eye in speech bubble","category":"Symbols","aliases":["eye_speech_bubble"],"tags":[],"ios_version":"9.1"},{"emoji":"💬","description":"speech balloon","category":"Symbols","aliases":["speech_balloon"],"tags":["comment"]},{"emoji":"💭","description":"thought balloon","category":"Symbols","aliases":["thought_balloon"],"tags":["thinking"]},{"emoji":"🗯","description":"right anger bubble","category":"Symbols","aliases":["right_anger_bubble"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"♠️","description":"spade suit","category":"Symbols","aliases":["spades"],"tags":[]},{"emoji":"♣️","description":"club suit","category":"Symbols","aliases":["clubs"],"tags":[]},{"emoji":"♥️","description":"heart suit","category":"Symbols","aliases":["hearts"],"tags":[]},{"emoji":"♦️","description":"diamond suit","category":"Symbols","aliases":["diamonds"],"tags":[]},{"emoji":"🃏","description":"joker","category":"Symbols","aliases":["black_joker"],"tags":[]},{"emoji":"🎴","description":"flower playing cards","category":"Symbols","aliases":["flower_playing_cards"],"tags":[]},{"emoji":"🀄️","description":"mahjong red dragon","category":"Symbols","aliases":["mahjong"],"tags":[]},{"emoji":"🕐","description":"one o’clock","category":"Symbols","aliases":["clock1"],"tags":[]},{"emoji":"🕑","description":"two o’clock","category":"Symbols","aliases":["clock2"],"tags":[]},{"emoji":"🕒","description":"three o’clock","category":"Symbols","aliases":["clock3"],"tags":[]},{"emoji":"🕓","description":"four o’clock","category":"Symbols","aliases":["clock4"],"tags":[]},{"emoji":"🕔","description":"five o’clock","category":"Symbols","aliases":["clock5"],"tags":[]},{"emoji":"🕕","description":"six o’clock","category":"Symbols","aliases":["clock6"],"tags":[]},{"emoji":"🕖","description":"seven o’clock","category":"Symbols","aliases":["clock7"],"tags":[]},{"emoji":"🕗","description":"eight o’clock","category":"Symbols","aliases":["clock8"],"tags":[]},{"emoji":"🕘","description":"nine o’clock","category":"Symbols","aliases":["clock9"],"tags":[]},{"emoji":"🕙","description":"ten o’clock","category":"Symbols","aliases":["clock10"],"tags":[]},{"emoji":"🕚","description":"eleven o’clock","category":"Symbols","aliases":["clock11"],"tags":[]},{"emoji":"🕛","description":"twelve o’clock","category":"Symbols","aliases":["clock12"],"tags":[]},{"emoji":"🕜","description":"one-thirty","category":"Symbols","aliases":["clock130"],"tags":[]},{"emoji":"🕝","description":"two-thirty","category":"Symbols","aliases":["clock230"],"tags":[]},{"emoji":"🕞","description":"three-thirty","category":"Symbols","aliases":["clock330"],"tags":[]},{"emoji":"🕟","description":"four-thirty","category":"Symbols","aliases":["clock430"],"tags":[]},{"emoji":"🕠","description":"five-thirty","category":"Symbols","aliases":["clock530"],"tags":[]},{"emoji":"🕡","description":"six-thirty","category":"Symbols","aliases":["clock630"],"tags":[]},{"emoji":"🕢","description":"seven-thirty","category":"Symbols","aliases":["clock730"],"tags":[]},{"emoji":"🕣","description":"eight-thirty","category":"Symbols","aliases":["clock830"],"tags":[]},{"emoji":"🕤","description":"nine-thirty","category":"Symbols","aliases":["clock930"],"tags":[]},{"emoji":"🕥","description":"ten-thirty","category":"Symbols","aliases":["clock1030"],"tags":[]},{"emoji":"🕦","description":"eleven-thirty","category":"Symbols","aliases":["clock1130"],"tags":[]},{"emoji":"🕧","description":"twelve-thirty","category":"Symbols","aliases":["clock1230"],"tags":[]},{"emoji":"🏳️","description":"white flag","category":"Flags","aliases":["white_flag"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏴","description":"black flag","category":"Flags","aliases":["black_flag"],"tags":[],"unicode_version":"7.0","ios_version":"9.1"},{"emoji":"🏁","description":"chequered flag","category":"Flags","aliases":["checkered_flag"],"tags":["milestone","finish"]},{"emoji":"🚩","description":"triangular flag","category":"Flags","aliases":["triangular_flag_on_post"],"tags":[]},{"emoji":"🏳️‍🌈","description":"rainbow flag","category":"Flags","aliases":["rainbow_flag"],"tags":["pride"]},{"emoji":"🇦🇫","description":"Afghanistan","category":"Flags","aliases":["afghanistan"],"tags":[]},{"emoji":"🇦🇽","description":"Åland Islands","category":"Flags","aliases":["aland_islands"],"tags":[]},{"emoji":"🇦🇱","description":"Albania","category":"Flags","aliases":["albania"],"tags":[]},{"emoji":"🇩🇿","description":"Algeria","category":"Flags","aliases":["algeria"],"tags":[]},{"emoji":"🇦🇸","description":"American Samoa","category":"Flags","aliases":["american_samoa"],"tags":[]},{"emoji":"🇦🇩","description":"Andorra","category":"Flags","aliases":["andorra"],"tags":[]},{"emoji":"🇦🇴","description":"Angola","category":"Flags","aliases":["angola"],"tags":[]},{"emoji":"🇦🇮","description":"Anguilla","category":"Flags","aliases":["anguilla"],"tags":[]},{"emoji":"🇦🇶","description":"Antarctica","category":"Flags","aliases":["antarctica"],"tags":[]},{"emoji":"🇦🇬","description":"Antigua & Barbuda","category":"Flags","aliases":["antigua_barbuda"],"tags":[]},{"emoji":"🇦🇷","description":"Argentina","category":"Flags","aliases":["argentina"],"tags":[]},{"emoji":"🇦🇲","description":"Armenia","category":"Flags","aliases":["armenia"],"tags":[]},{"emoji":"🇦🇼","description":"Aruba","category":"Flags","aliases":["aruba"],"tags":[]},{"emoji":"🇦🇺","description":"Australia","category":"Flags","aliases":["australia"],"tags":[]},{"emoji":"🇦🇹","description":"Austria","category":"Flags","aliases":["austria"],"tags":[]},{"emoji":"🇦🇿","description":"Azerbaijan","category":"Flags","aliases":["azerbaijan"],"tags":[]},{"emoji":"🇧🇸","description":"Bahamas","category":"Flags","aliases":["bahamas"],"tags":[]},{"emoji":"🇧🇭","description":"Bahrain","category":"Flags","aliases":["bahrain"],"tags":[]},{"emoji":"🇧🇩","description":"Bangladesh","category":"Flags","aliases":["bangladesh"],"tags":[]},{"emoji":"🇧🇧","description":"Barbados","category":"Flags","aliases":["barbados"],"tags":[]},{"emoji":"🇧🇾","description":"Belarus","category":"Flags","aliases":["belarus"],"tags":[]},{"emoji":"🇧🇪","description":"Belgium","category":"Flags","aliases":["belgium"],"tags":[]},{"emoji":"🇧🇿","description":"Belize","category":"Flags","aliases":["belize"],"tags":[]},{"emoji":"🇧🇯","description":"Benin","category":"Flags","aliases":["benin"],"tags":[]},{"emoji":"🇧🇲","description":"Bermuda","category":"Flags","aliases":["bermuda"],"tags":[]},{"emoji":"🇧🇹","description":"Bhutan","category":"Flags","aliases":["bhutan"],"tags":[]},{"emoji":"🇧🇴","description":"Bolivia","category":"Flags","aliases":["bolivia"],"tags":[]},{"emoji":"🇧🇶","description":"Caribbean Netherlands","category":"Flags","aliases":["caribbean_netherlands"],"tags":[]},{"emoji":"🇧🇦","description":"Bosnia & Herzegovina","category":"Flags","aliases":["bosnia_herzegovina"],"tags":[]},{"emoji":"🇧🇼","description":"Botswana","category":"Flags","aliases":["botswana"],"tags":[]},{"emoji":"🇧🇷","description":"Brazil","category":"Flags","aliases":["brazil"],"tags":[]},{"emoji":"🇮🇴","description":"British Indian Ocean Territory","category":"Flags","aliases":["british_indian_ocean_territory"],"tags":[]},{"emoji":"🇻🇬","description":"British Virgin Islands","category":"Flags","aliases":["british_virgin_islands"],"tags":[]},{"emoji":"🇧🇳","description":"Brunei","category":"Flags","aliases":["brunei"],"tags":[]},{"emoji":"🇧🇬","description":"Bulgaria","category":"Flags","aliases":["bulgaria"],"tags":[]},{"emoji":"🇧🇫","description":"Burkina Faso","category":"Flags","aliases":["burkina_faso"],"tags":[]},{"emoji":"🇧🇮","description":"Burundi","category":"Flags","aliases":["burundi"],"tags":[]},{"emoji":"🇨🇻","description":"Cape Verde","category":"Flags","aliases":["cape_verde"],"tags":[]},{"emoji":"🇰🇭","description":"Cambodia","category":"Flags","aliases":["cambodia"],"tags":[]},{"emoji":"🇨🇲","description":"Cameroon","category":"Flags","aliases":["cameroon"],"tags":[]},{"emoji":"🇨🇦","description":"Canada","category":"Flags","aliases":["canada"],"tags":[]},{"emoji":"🇮🇨","description":"Canary Islands","category":"Flags","aliases":["canary_islands"],"tags":[]},{"emoji":"🇰🇾","description":"Cayman Islands","category":"Flags","aliases":["cayman_islands"],"tags":[]},{"emoji":"🇨🇫","description":"Central African Republic","category":"Flags","aliases":["central_african_republic"],"tags":[]},{"emoji":"🇹🇩","description":"Chad","category":"Flags","aliases":["chad"],"tags":[]},{"emoji":"🇨🇱","description":"Chile","category":"Flags","aliases":["chile"],"tags":[]},{"emoji":"🇨🇳","description":"China","category":"Flags","aliases":["cn"],"tags":["china"]},{"emoji":"🇨🇽","description":"Christmas Island","category":"Flags","aliases":["christmas_island"],"tags":[]},{"emoji":"🇨🇨","description":"Cocos (Keeling) Islands","category":"Flags","aliases":["cocos_islands"],"tags":["keeling"]},{"emoji":"🇨🇴","description":"Colombia","category":"Flags","aliases":["colombia"],"tags":[]},{"emoji":"🇰🇲","description":"Comoros","category":"Flags","aliases":["comoros"],"tags":[]},{"emoji":"🇨🇬","description":"Congo - Brazzaville","category":"Flags","aliases":["congo_brazzaville"],"tags":[]},{"emoji":"🇨🇩","description":"Congo - Kinshasa","category":"Flags","aliases":["congo_kinshasa"],"tags":[]},{"emoji":"🇨🇰","description":"Cook Islands","category":"Flags","aliases":["cook_islands"],"tags":[]},{"emoji":"🇨🇷","description":"Costa Rica","category":"Flags","aliases":["costa_rica"],"tags":[]},{"emoji":"🇨🇮","description":"Côte d’Ivoire","category":"Flags","aliases":["cote_divoire"],"tags":["ivory"]},{"emoji":"🇭🇷","description":"Croatia","category":"Flags","aliases":["croatia"],"tags":[]},{"emoji":"🇨🇺","description":"Cuba","category":"Flags","aliases":["cuba"],"tags":[]},{"emoji":"🇨🇼","description":"Curaçao","category":"Flags","aliases":["curacao"],"tags":[]},{"emoji":"🇨🇾","description":"Cyprus","category":"Flags","aliases":["cyprus"],"tags":[]},{"emoji":"🇨🇿","description":"Czech Republic","category":"Flags","aliases":["czech_republic"],"tags":[]},{"emoji":"🇩🇰","description":"Denmark","category":"Flags","aliases":["denmark"],"tags":[]},{"emoji":"🇩🇯","description":"Djibouti","category":"Flags","aliases":["djibouti"],"tags":[]},{"emoji":"🇩🇲","description":"Dominica","category":"Flags","aliases":["dominica"],"tags":[]},{"emoji":"🇩🇴","description":"Dominican Republic","category":"Flags","aliases":["dominican_republic"],"tags":[]},{"emoji":"🇪🇨","description":"Ecuador","category":"Flags","aliases":["ecuador"],"tags":[]},{"emoji":"🇪🇬","description":"Egypt","category":"Flags","aliases":["egypt"],"tags":[]},{"emoji":"🇸🇻","description":"El Salvador","category":"Flags","aliases":["el_salvador"],"tags":[]},{"emoji":"🇬🇶","description":"Equatorial Guinea","category":"Flags","aliases":["equatorial_guinea"],"tags":[]},{"emoji":"🇪🇷","description":"Eritrea","category":"Flags","aliases":["eritrea"],"tags":[]},{"emoji":"🇪🇪","description":"Estonia","category":"Flags","aliases":["estonia"],"tags":[]},{"emoji":"🇪🇹","description":"Ethiopia","category":"Flags","aliases":["ethiopia"],"tags":[]},{"emoji":"🇪🇺","description":"European Union","category":"Flags","aliases":["eu","european_union"],"tags":[]},{"emoji":"🇫🇰","description":"Falkland Islands","category":"Flags","aliases":["falkland_islands"],"tags":[]},{"emoji":"🇫🇴","description":"Faroe Islands","category":"Flags","aliases":["faroe_islands"],"tags":[]},{"emoji":"🇫🇯","description":"Fiji","category":"Flags","aliases":["fiji"],"tags":[]},{"emoji":"🇫🇮","description":"Finland","category":"Flags","aliases":["finland"],"tags":[]},{"emoji":"🇫🇷","description":"France","category":"Flags","aliases":["fr"],"tags":["france","french"]},{"emoji":"🇬🇫","description":"French Guiana","category":"Flags","aliases":["french_guiana"],"tags":[]},{"emoji":"🇵🇫","description":"French Polynesia","category":"Flags","aliases":["french_polynesia"],"tags":[]},{"emoji":"🇹🇫","description":"French Southern Territories","category":"Flags","aliases":["french_southern_territories"],"tags":[]},{"emoji":"🇬🇦","description":"Gabon","category":"Flags","aliases":["gabon"],"tags":[]},{"emoji":"🇬🇲","description":"Gambia","category":"Flags","aliases":["gambia"],"tags":[]},{"emoji":"🇬🇪","description":"Georgia","category":"Flags","aliases":["georgia"],"tags":[]},{"emoji":"🇩🇪","description":"Germany","category":"Flags","aliases":["de"],"tags":["flag","germany"]},{"emoji":"🇬🇭","description":"Ghana","category":"Flags","aliases":["ghana"],"tags":[]},{"emoji":"🇬🇮","description":"Gibraltar","category":"Flags","aliases":["gibraltar"],"tags":[]},{"emoji":"🇬🇷","description":"Greece","category":"Flags","aliases":["greece"],"tags":[]},{"emoji":"🇬🇱","description":"Greenland","category":"Flags","aliases":["greenland"],"tags":[]},{"emoji":"🇬🇩","description":"Grenada","category":"Flags","aliases":["grenada"],"tags":[]},{"emoji":"🇬🇵","description":"Guadeloupe","category":"Flags","aliases":["guadeloupe"],"tags":[]},{"emoji":"🇬🇺","description":"Guam","category":"Flags","aliases":["guam"],"tags":[]},{"emoji":"🇬🇹","description":"Guatemala","category":"Flags","aliases":["guatemala"],"tags":[]},{"emoji":"🇬🇬","description":"Guernsey","category":"Flags","aliases":["guernsey"],"tags":[]},{"emoji":"🇬🇳","description":"Guinea","category":"Flags","aliases":["guinea"],"tags":[]},{"emoji":"🇬🇼","description":"Guinea-Bissau","category":"Flags","aliases":["guinea_bissau"],"tags":[]},{"emoji":"🇬🇾","description":"Guyana","category":"Flags","aliases":["guyana"],"tags":[]},{"emoji":"🇭🇹","description":"Haiti","category":"Flags","aliases":["haiti"],"tags":[]},{"emoji":"🇭🇳","description":"Honduras","category":"Flags","aliases":["honduras"],"tags":[]},{"emoji":"🇭🇰","description":"Hong Kong SAR China","category":"Flags","aliases":["hong_kong"],"tags":[]},{"emoji":"🇭🇺","description":"Hungary","category":"Flags","aliases":["hungary"],"tags":[]},{"emoji":"🇮🇸","description":"Iceland","category":"Flags","aliases":["iceland"],"tags":[]},{"emoji":"🇮🇳","description":"India","category":"Flags","aliases":["india"],"tags":[]},{"emoji":"🇮🇩","description":"Indonesia","category":"Flags","aliases":["indonesia"],"tags":[]},{"emoji":"🇮🇷","description":"Iran","category":"Flags","aliases":["iran"],"tags":[]},{"emoji":"🇮🇶","description":"Iraq","category":"Flags","aliases":["iraq"],"tags":[]},{"emoji":"🇮🇪","description":"Ireland","category":"Flags","aliases":["ireland"],"tags":[]},{"emoji":"🇮🇲","description":"Isle of Man","category":"Flags","aliases":["isle_of_man"],"tags":[]},{"emoji":"🇮🇱","description":"Israel","category":"Flags","aliases":["israel"],"tags":[]},{"emoji":"🇮🇹","description":"Italy","category":"Flags","aliases":["it"],"tags":["italy"]},{"emoji":"🇯🇲","description":"Jamaica","category":"Flags","aliases":["jamaica"],"tags":[]},{"emoji":"🇯🇵","description":"Japan","category":"Flags","aliases":["jp"],"tags":["japan"]},{"emoji":"🎌","description":"crossed flags","category":"Flags","aliases":["crossed_flags"],"tags":[]},{"emoji":"🇯🇪","description":"Jersey","category":"Flags","aliases":["jersey"],"tags":[]},{"emoji":"🇯🇴","description":"Jordan","category":"Flags","aliases":["jordan"],"tags":[]},{"emoji":"🇰🇿","description":"Kazakhstan","category":"Flags","aliases":["kazakhstan"],"tags":[]},{"emoji":"🇰🇪","description":"Kenya","category":"Flags","aliases":["kenya"],"tags":[]},{"emoji":"🇰🇮","description":"Kiribati","category":"Flags","aliases":["kiribati"],"tags":[]},{"emoji":"🇽🇰","description":"Kosovo","category":"Flags","aliases":["kosovo"],"tags":[]},{"emoji":"🇰🇼","description":"Kuwait","category":"Flags","aliases":["kuwait"],"tags":[]},{"emoji":"🇰🇬","description":"Kyrgyzstan","category":"Flags","aliases":["kyrgyzstan"],"tags":[]},{"emoji":"🇱🇦","description":"Laos","category":"Flags","aliases":["laos"],"tags":[]},{"emoji":"🇱🇻","description":"Latvia","category":"Flags","aliases":["latvia"],"tags":[]},{"emoji":"🇱🇧","description":"Lebanon","category":"Flags","aliases":["lebanon"],"tags":[]},{"emoji":"🇱🇸","description":"Lesotho","category":"Flags","aliases":["lesotho"],"tags":[]},{"emoji":"🇱🇷","description":"Liberia","category":"Flags","aliases":["liberia"],"tags":[]},{"emoji":"🇱🇾","description":"Libya","category":"Flags","aliases":["libya"],"tags":[]},{"emoji":"🇱🇮","description":"Liechtenstein","category":"Flags","aliases":["liechtenstein"],"tags":[]},{"emoji":"🇱🇹","description":"Lithuania","category":"Flags","aliases":["lithuania"],"tags":[]},{"emoji":"🇱🇺","description":"Luxembourg","category":"Flags","aliases":["luxembourg"],"tags":[]},{"emoji":"🇲🇴","description":"Macau SAR China","category":"Flags","aliases":["macau"],"tags":[]},{"emoji":"🇲🇰","description":"Macedonia","category":"Flags","aliases":["macedonia"],"tags":[]},{"emoji":"🇲🇬","description":"Madagascar","category":"Flags","aliases":["madagascar"],"tags":[]},{"emoji":"🇲🇼","description":"Malawi","category":"Flags","aliases":["malawi"],"tags":[]},{"emoji":"🇲🇾","description":"Malaysia","category":"Flags","aliases":["malaysia"],"tags":[]},{"emoji":"🇲🇻","description":"Maldives","category":"Flags","aliases":["maldives"],"tags":[]},{"emoji":"🇲🇱","description":"Mali","category":"Flags","aliases":["mali"],"tags":[]},{"emoji":"🇲🇹","description":"Malta","category":"Flags","aliases":["malta"],"tags":[]},{"emoji":"🇲🇭","description":"Marshall Islands","category":"Flags","aliases":["marshall_islands"],"tags":[]},{"emoji":"🇲🇶","description":"Martinique","category":"Flags","aliases":["martinique"],"tags":[]},{"emoji":"🇲🇷","description":"Mauritania","category":"Flags","aliases":["mauritania"],"tags":[]},{"emoji":"🇲🇺","description":"Mauritius","category":"Flags","aliases":["mauritius"],"tags":[]},{"emoji":"🇾🇹","description":"Mayotte","category":"Flags","aliases":["mayotte"],"tags":[]},{"emoji":"🇲🇽","description":"Mexico","category":"Flags","aliases":["mexico"],"tags":[]},{"emoji":"🇫🇲","description":"Micronesia","category":"Flags","aliases":["micronesia"],"tags":[]},{"emoji":"🇲🇩","description":"Moldova","category":"Flags","aliases":["moldova"],"tags":[]},{"emoji":"🇲🇨","description":"Monaco","category":"Flags","aliases":["monaco"],"tags":[]},{"emoji":"🇲🇳","description":"Mongolia","category":"Flags","aliases":["mongolia"],"tags":[]},{"emoji":"🇲🇪","description":"Montenegro","category":"Flags","aliases":["montenegro"],"tags":[]},{"emoji":"🇲🇸","description":"Montserrat","category":"Flags","aliases":["montserrat"],"tags":[]},{"emoji":"🇲🇦","description":"Morocco","category":"Flags","aliases":["morocco"],"tags":[]},{"emoji":"🇲🇿","description":"Mozambique","category":"Flags","aliases":["mozambique"],"tags":[]},{"emoji":"🇲🇲","description":"Myanmar (Burma)","category":"Flags","aliases":["myanmar"],"tags":["burma"]},{"emoji":"🇳🇦","description":"Namibia","category":"Flags","aliases":["namibia"],"tags":[]},{"emoji":"🇳🇷","description":"Nauru","category":"Flags","aliases":["nauru"],"tags":[]},{"emoji":"🇳🇵","description":"Nepal","category":"Flags","aliases":["nepal"],"tags":[]},{"emoji":"🇳🇱","description":"Netherlands","category":"Flags","aliases":["netherlands"],"tags":[]},{"emoji":"🇳🇨","description":"New Caledonia","category":"Flags","aliases":["new_caledonia"],"tags":[]},{"emoji":"🇳🇿","description":"New Zealand","category":"Flags","aliases":["new_zealand"],"tags":[]},{"emoji":"🇳🇮","description":"Nicaragua","category":"Flags","aliases":["nicaragua"],"tags":[]},{"emoji":"🇳🇪","description":"Niger","category":"Flags","aliases":["niger"],"tags":[]},{"emoji":"🇳🇬","description":"Nigeria","category":"Flags","aliases":["nigeria"],"tags":[]},{"emoji":"🇳🇺","description":"Niue","category":"Flags","aliases":["niue"],"tags":[]},{"emoji":"🇳🇫","description":"Norfolk Island","category":"Flags","aliases":["norfolk_island"],"tags":[]},{"emoji":"🇲🇵","description":"Northern Mariana Islands","category":"Flags","aliases":["northern_mariana_islands"],"tags":[]},{"emoji":"🇰🇵","description":"North Korea","category":"Flags","aliases":["north_korea"],"tags":[]},{"emoji":"🇳🇴","description":"Norway","category":"Flags","aliases":["norway"],"tags":[]},{"emoji":"🇴🇲","description":"Oman","category":"Flags","aliases":["oman"],"tags":[]},{"emoji":"🇵🇰","description":"Pakistan","category":"Flags","aliases":["pakistan"],"tags":[]},{"emoji":"🇵🇼","description":"Palau","category":"Flags","aliases":["palau"],"tags":[]},{"emoji":"🇵🇸","description":"Palestinian Territories","category":"Flags","aliases":["palestinian_territories"],"tags":[]},{"emoji":"🇵🇦","description":"Panama","category":"Flags","aliases":["panama"],"tags":[]},{"emoji":"🇵🇬","description":"Papua New Guinea","category":"Flags","aliases":["papua_new_guinea"],"tags":[]},{"emoji":"🇵🇾","description":"Paraguay","category":"Flags","aliases":["paraguay"],"tags":[]},{"emoji":"🇵🇪","description":"Peru","category":"Flags","aliases":["peru"],"tags":[]},{"emoji":"🇵🇭","description":"Philippines","category":"Flags","aliases":["philippines"],"tags":[]},{"emoji":"🇵🇳","description":"Pitcairn Islands","category":"Flags","aliases":["pitcairn_islands"],"tags":[]},{"emoji":"🇵🇱","description":"Poland","category":"Flags","aliases":["poland"],"tags":[]},{"emoji":"🇵🇹","description":"Portugal","category":"Flags","aliases":["portugal"],"tags":[]},{"emoji":"🇵🇷","description":"Puerto Rico","category":"Flags","aliases":["puerto_rico"],"tags":[]},{"emoji":"🇶🇦","description":"Qatar","category":"Flags","aliases":["qatar"],"tags":[]},{"emoji":"🇷🇪","description":"Réunion","category":"Flags","aliases":["reunion"],"tags":[]},{"emoji":"🇷🇴","description":"Romania","category":"Flags","aliases":["romania"],"tags":[]},{"emoji":"🇷🇺","description":"Russia","category":"Flags","aliases":["ru"],"tags":["russia"]},{"emoji":"🇷🇼","description":"Rwanda","category":"Flags","aliases":["rwanda"],"tags":[]},{"emoji":"🇧🇱","description":"St. Barthélemy","category":"Flags","aliases":["st_barthelemy"],"tags":[]},{"emoji":"🇸🇭","description":"St. Helena","category":"Flags","aliases":["st_helena"],"tags":[]},{"emoji":"🇰🇳","description":"St. Kitts & Nevis","category":"Flags","aliases":["st_kitts_nevis"],"tags":[]},{"emoji":"🇱🇨","description":"St. Lucia","category":"Flags","aliases":["st_lucia"],"tags":[]},{"emoji":"🇵🇲","description":"St. Pierre & Miquelon","category":"Flags","aliases":["st_pierre_miquelon"],"tags":[]},{"emoji":"🇻🇨","description":"St. Vincent & Grenadines","category":"Flags","aliases":["st_vincent_grenadines"],"tags":[]},{"emoji":"🇼🇸","description":"Samoa","category":"Flags","aliases":["samoa"],"tags":[]},{"emoji":"🇸🇲","description":"San Marino","category":"Flags","aliases":["san_marino"],"tags":[]},{"emoji":"🇸🇹","description":"São Tomé & Príncipe","category":"Flags","aliases":["sao_tome_principe"],"tags":[]},{"emoji":"🇸🇦","description":"Saudi Arabia","category":"Flags","aliases":["saudi_arabia"],"tags":[]},{"emoji":"🇸🇳","description":"Senegal","category":"Flags","aliases":["senegal"],"tags":[]},{"emoji":"🇷🇸","description":"Serbia","category":"Flags","aliases":["serbia"],"tags":[]},{"emoji":"🇸🇨","description":"Seychelles","category":"Flags","aliases":["seychelles"],"tags":[]},{"emoji":"🇸🇱","description":"Sierra Leone","category":"Flags","aliases":["sierra_leone"],"tags":[]},{"emoji":"🇸🇬","description":"Singapore","category":"Flags","aliases":["singapore"],"tags":[]},{"emoji":"🇸🇽","description":"Sint Maarten","category":"Flags","aliases":["sint_maarten"],"tags":[]},{"emoji":"🇸🇰","description":"Slovakia","category":"Flags","aliases":["slovakia"],"tags":[]},{"emoji":"🇸🇮","description":"Slovenia","category":"Flags","aliases":["slovenia"],"tags":[]},{"emoji":"🇸🇧","description":"Solomon Islands","category":"Flags","aliases":["solomon_islands"],"tags":[]},{"emoji":"🇸🇴","description":"Somalia","category":"Flags","aliases":["somalia"],"tags":[]},{"emoji":"🇿🇦","description":"South Africa","category":"Flags","aliases":["south_africa"],"tags":[]},{"emoji":"🇬🇸","description":"South Georgia & South Sandwich Islands","category":"Flags","aliases":["south_georgia_south_sandwich_islands"],"tags":[]},{"emoji":"🇰🇷","description":"South Korea","category":"Flags","aliases":["kr"],"tags":["korea"]},{"emoji":"🇸🇸","description":"South Sudan","category":"Flags","aliases":["south_sudan"],"tags":[]},{"emoji":"🇪🇸","description":"Spain","category":"Flags","aliases":["es"],"tags":["spain"]},{"emoji":"🇱🇰","description":"Sri Lanka","category":"Flags","aliases":["sri_lanka"],"tags":[]},{"emoji":"🇸🇩","description":"Sudan","category":"Flags","aliases":["sudan"],"tags":[]},{"emoji":"🇸🇷","description":"Suriname","category":"Flags","aliases":["suriname"],"tags":[]},{"emoji":"🇸🇿","description":"Swaziland","category":"Flags","aliases":["swaziland"],"tags":[]},{"emoji":"🇸🇪","description":"Sweden","category":"Flags","aliases":["sweden"],"tags":[]},{"emoji":"🇨🇭","description":"Switzerland","category":"Flags","aliases":["switzerland"],"tags":[]},{"emoji":"🇸🇾","description":"Syria","category":"Flags","aliases":["syria"],"tags":[]},{"emoji":"🇹🇼","description":"Taiwan","category":"Flags","aliases":["taiwan"],"tags":[]},{"emoji":"🇹🇯","description":"Tajikistan","category":"Flags","aliases":["tajikistan"],"tags":[]},{"emoji":"🇹🇿","description":"Tanzania","category":"Flags","aliases":["tanzania"],"tags":[]},{"emoji":"🇹🇭","description":"Thailand","category":"Flags","aliases":["thailand"],"tags":[]},{"emoji":"🇹🇱","description":"Timor-Leste","category":"Flags","aliases":["timor_leste"],"tags":[]},{"emoji":"🇹🇬","description":"Togo","category":"Flags","aliases":["togo"],"tags":[]},{"emoji":"🇹🇰","description":"Tokelau","category":"Flags","aliases":["tokelau"],"tags":[]},{"emoji":"🇹🇴","description":"Tonga","category":"Flags","aliases":["tonga"],"tags":[]},{"emoji":"🇹🇹","description":"Trinidad & Tobago","category":"Flags","aliases":["trinidad_tobago"],"tags":[]},{"emoji":"🇹🇳","description":"Tunisia","category":"Flags","aliases":["tunisia"],"tags":[]},{"emoji":"🇹🇷","description":"Turkey","category":"Flags","aliases":["tr"],"tags":["turkey"],"unicode_version":"8.0","ios_version":"9.1"},{"emoji":"🇹🇲","description":"Turkmenistan","category":"Flags","aliases":["turkmenistan"],"tags":[]},{"emoji":"🇹🇨","description":"Turks & Caicos Islands","category":"Flags","aliases":["turks_caicos_islands"],"tags":[]},{"emoji":"🇹🇻","description":"Tuvalu","category":"Flags","aliases":["tuvalu"],"tags":[]},{"emoji":"🇺🇬","description":"Uganda","category":"Flags","aliases":["uganda"],"tags":[]},{"emoji":"🇺🇦","description":"Ukraine","category":"Flags","aliases":["ukraine"],"tags":[]},{"emoji":"🇦🇪","description":"United Arab Emirates","category":"Flags","aliases":["united_arab_emirates"],"tags":[]},{"emoji":"🇬🇧","description":"United Kingdom","category":"Flags","aliases":["gb","uk"],"tags":["flag","british"]},{"emoji":"🇺🇸","description":"United States","category":"Flags","aliases":["us"],"tags":["flag","united","america"]},{"emoji":"🇻🇮","description":"U.S. Virgin Islands","category":"Flags","aliases":["us_virgin_islands"],"tags":[]},{"emoji":"🇺🇾","description":"Uruguay","category":"Flags","aliases":["uruguay"],"tags":[]},{"emoji":"🇺🇿","description":"Uzbekistan","category":"Flags","aliases":["uzbekistan"],"tags":[]},{"emoji":"🇻🇺","description":"Vanuatu","category":"Flags","aliases":["vanuatu"],"tags":[]},{"emoji":"🇻🇦","description":"Vatican City","category":"Flags","aliases":["vatican_city"],"tags":[]},{"emoji":"🇻🇪","description":"Venezuela","category":"Flags","aliases":["venezuela"],"tags":[]},{"emoji":"🇻🇳","description":"Vietnam","category":"Flags","aliases":["vietnam"],"tags":[]},{"emoji":"🇼🇫","description":"Wallis & Futuna","category":"Flags","aliases":["wallis_futuna"],"tags":[]},{"emoji":"🇪🇭","description":"Western Sahara","category":"Flags","aliases":["western_sahara"],"tags":[]},{"emoji":"🇾🇪","description":"Yemen","category":"Flags","aliases":["yemen"],"tags":[]},{"emoji":"🇿🇲","description":"Zambia","category":"Flags","aliases":["zambia"],"tags":[]},{"emoji":"🇿🇼","description":"Zimbabwe","category":"Flags","aliases":["zimbabwe"],"tags":[]}]

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "default-field",
    { attrs: { field: _vm.field, errors: _vm.errors } },
    [
      _c("template", { slot: "field" }, [
        _c("div", { staticClass: "emojitextarea" }, [
          _c("div", { staticClass: "wrapper" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              staticClass:
                "w-full form-control form-input form-input-bordered py-3 h-auto",
              class: _vm.errorClasses,
              attrs: {
                id: _vm.field.name,
                type: "text",
                rows: "8",
                placeholder: _vm.field.name
              },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.value = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "emojibutton",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.toogleDialogEmoji($event)
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      height: "24",
                      viewBox: "0 0 24 24",
                      width: "24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { attrs: { hidden: _vm.dialogHidden } },
            [
              _c("VEmojiPicker", {
                staticClass: "emojipicker",
                attrs: { pack: _vm.emojisNative, showSearch: false },
                on: { select: _vm.onSelectEmoji }
              })
            ],
            1
          )
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c023248a", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);