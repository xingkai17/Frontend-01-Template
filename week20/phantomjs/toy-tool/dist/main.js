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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/carousel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\nvar p = document.createElement('p');\np.innerHTML = 'Hello World';\ndocument.body.appendChild(p);\n\nvar component = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"strong\", null, Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, \"Hello\"));\ncomponent.mountTo(document.querySelector('#root')); // import {createElement, Wrapper, Text} from './createElement';\n// import {TimeLine, Animation, linear, ease} from './animation';\n// import {Panel} from './Panel';\n// import {TabPanel} from './TabPanel';\n// import {ListView} from './ListView';\n// // import css from './carousel.css';\n// // console.log(css);\n// /* let style = document.createElement('style');\n// style.innerHTML = css[0][1];\n// document.documentElement.appendChild(style); */\n// // 普通组件\n// export class Carousel {\n//   constructor() {\n//     // console.log('config', config);\n//     // 存储Children\n//     this.children = [];\n//     this.attributes = new Map();\n//     this.properties = new Map();\n//   }\n//   setAttribute(name, value) {\n//     // this.attributes.set(name, value);\n//     this[name] = value;\n//   }\n//   // 通过appendChild，存储子组件\n//   appendChild(child) {\n//     this.children.push(child);\n//   }\n//   loop(root, children) {\n//     let position = 0;\n//     let timeLine = new TimeLine();\n//     this.timeLine = timeLine;\n//     this.nextPickStopHandler = null;\n//     this.onStart = () => {\n//       timeLine.pause();\n//       clearTimeout(this.nextPickStopHandler);\n//     };\n//     this.onPan = (event) => {};\n//     let nextPic = () => {\n//       let nextPosition = (position + 1) % this.data.length;\n//       let current = children[position];\n//       let next = children[nextPosition];\n//       let currentAnimation = new Animation(\n//         current.style,\n//         'transform',\n//         -100 * position,\n//         -100 - 100 * position,\n//         500,\n//         0,\n//         ease,\n//         (v) => `translateX(${v * 5}px)`,\n//       );\n//       let nextAnimation = new Animation(\n//         next.style,\n//         'transform',\n//         100 - 100 * nextPosition,\n//         -100 * nextPosition,\n//         500,\n//         0,\n//         ease,\n//         (v) => `translateX(${v * 5}px)`,\n//       );\n//       timeLine.add(currentAnimation);\n//       timeLine.add(nextAnimation);\n//       timeLine.start();\n//       /* current.style.transition = 'ease 0s';\n//       next.style.transition = 'ease 0s';\n//       current.style.transform = `translateX(${-100 * position}%)`;\n//       next.style.transform = `translateX(${100 - 100 * nextPosition}%)`; */\n//       // 浏览器会自动合并量测CSS操作，因此需要用计时器等待下一帧的时候再执行。\n//       // 也可以用requestAnimationFrame(requestAnimationFrame(() => {}))\n//       this.nextPickStopHandler = setTimeout(() => {\n//         /* current.style.transition = ''; // means use css rule: ease 1s\n//         next.style.transition = '';\n//         // 终止位置\n//         current.style.transform = `translateX(${-100 - 100 * position}%)`;\n//         next.style.transform = `translateX(${-100 * nextPosition}%)`; */\n//         position = nextPosition;\n//       }, 16);\n//       // 暂停轮播，处理拖拽功能\n//       this.nextPickStopHandler = setTimeout(nextPic, 3000);\n//     };\n//     // 暂停轮播，处理拖拽功能\n//     // this.nextPickStopHandler = setTimeout(nextPic, 3000);\n//   }\n//   drag(root, children) {\n//     let position = 0;\n//     root.addEventListener('mousedown', () => {\n//       let startX = event.clientX;\n//       let nextPosition = (position + 1) % this.data.length;\n//       let lastPosition = (position - 1 + this.data.length) % this.data.length;\n//       let current = children[position];\n//       let last = children[lastPosition];\n//       let next = children[nextPosition];\n//       current.style.transition = 'ease 0s';\n//       last.style.transition = 'ease 0s';\n//       next.style.transition = 'ease 0s';\n//       current.style.transform = `translateX(${-500 * position}px)`;\n//       last.style.transform = `translateX(${-500 - 500 * lastPosition}px)`;\n//       next.style.transform = `translateX(${500 - 500 * nextPosition}px)`;\n//       let move = (event) => {\n//         // console.log(event.clientX - startX, event.clientY - startY);\n//         current.style.transform = `translateX(${\n//           event.clientX - startX - 500 * position\n//         }px)`;\n//         last.style.transform = `translateX(${\n//           event.clientX - startX - 500 - 500 * lastPosition\n//         }px)`;\n//         next.style.transform = `translateX(${\n//           event.clientX - startX + 500 - 500 * nextPosition\n//         }px)`;\n//       };\n//       let up = (event) => {\n//         let offset = 0;\n//         if (event.clientX - startX > 250) {\n//           offset = 1;\n//         } else if (event.clientX - startX < -250) {\n//           offset = -1;\n//         }\n//         current.style.transition = ''; // 打开transition\n//         last.style.transition = '';\n//         next.style.transition = '';\n//         current.style.transform = `translateX(${\n//           offset * 500 - 500 * position\n//         }px)`;\n//         last.style.transform = `translateX(${\n//           offset * 500 - 500 - 500 * lastPosition\n//         }px)`;\n//         next.style.transform = `translateX(${\n//           offset * 500 + 500 - 500 * nextPosition\n//         }px)`;\n//         position = (position - offset + this.data.length) % this.data.length;\n//         document.removeEventListener('mousemove', move);\n//         document.removeEventListener('mouseup', up);\n//       };\n//       // document绑定的事件，在浏览器外部，如控制台中，也会继续触发\n//       document.addEventListener('mousemove', move);\n//       document.addEventListener('mouseup', up);\n//     });\n//   }\n//   render() {\n//     let position = 0;\n//     let timeLine = new TimeLine();\n//     this.timeLine = timeLine;\n//     this.nextPickStopHandler = null;\n//     let nextPic = () => {\n//       let nextPosition = (position + 1) % this.data.length;\n//       let current = children[position];\n//       let next = children[nextPosition];\n//       let currentAnimation = new Animation(\n//         current.style,\n//         'transform',\n//         -100 * position,\n//         -100 - 100 * position,\n//         500,\n//         0,\n//         ease,\n//         (v) => `translateX(${v * 5}px)`,\n//       );\n//       let nextAnimation = new Animation(\n//         next.style,\n//         'transform',\n//         100 - 100 * nextPosition,\n//         -100 * nextPosition,\n//         500,\n//         0,\n//         ease,\n//         (v) => `translateX(${v * 5}px)`,\n//       );\n//       timeLine.add(currentAnimation);\n//       timeLine.add(nextAnimation);\n//       timeLine.start();\n//       /* current.style.transition = 'ease 0s';\n//       next.style.transition = 'ease 0s';\n//       current.style.transform = `translateX(${-100 * position}%)`;\n//       next.style.transform = `translateX(${100 - 100 * nextPosition}%)`; */\n//       // 浏览器会自动合并量测CSS操作，因此需要用计时器等待下一帧的时候再执行。\n//       // 也可以用requestAnimationFrame(requestAnimationFrame(() => {}))\n//       this.nextPickStopHandler = setTimeout(() => {\n//         /* current.style.transition = ''; // means use css rule: ease 1s\n//         next.style.transition = '';\n//         // 终止位置\n//         current.style.transform = `translateX(${-100 - 100 * position}%)`;\n//         next.style.transform = `translateX(${-100 * nextPosition}%)`; */\n//         position = nextPosition;\n//       }, 16);\n//       // 暂停轮播，处理拖拽功能\n//       this.nextPickStopHandler = setTimeout(nextPic, 3000);\n//     };\n//     // 暂停轮播，处理拖拽功能\n//     this.nextPickStopHandler = setTimeout(nextPic, 3000);\n//     let children = this.data.map((url, currentPosition) => {\n//       let lastPosition =\n//         (currentPosition - 1 + this.data.length) % this.data.length;\n//       let nextPosition = (currentPosition + 1) % this.data.length;\n//       let offset = 0;\n//       this.onStart = () => {\n//         timeLine.pause();\n//         clearTimeout(this.nextPickStopHandler);\n//         let currentElement = children[currentPosition];\n//         console.log(currentElement.style.transform);\n//         let currentTransformValue = Number(\n//           currentElement.style.transform.match(/translateX\\(([\\s\\S]+)px\\)/)[1],\n//         );\n//         offset = currentTransformValue + 500 * currentPosition;\n//       };\n//       this.onPan = (event) => {\n//         let lastElement = children[lastPosition];\n//         let currentElement = children[currentPosition];\n//         let nextElement = children[nextPosition];\n//         let dx = event.clientX - event.startX;\n//         let lastTransformValue = -500 - 500 * lastPosition + offset + dx;\n//         let currentTransformValue = -500 * currentPosition + offset + dx;\n//         let nextTransformValue = 500 - 500 * nextPosition + offset + dx;\n//         lastElement.style.transform = `translateX(${lastTransformValue}px)`;\n//         currentElement.style.transform = `translateX(${currentTransformValue}px)`;\n//         nextElement.style.transform = `translateX(${nextTransformValue}px)`;\n//       };\n//       this.onPanend = (event) => {\n//         let direction = 0;\n//         let dx = event.clientX - event.startX;\n//         if (dx + offset > 250) {\n//           direction = 1;\n//         } else if (dx + offset < -250) {\n//           direction = -1;\n//         }\n//         timeLine.reset();\n//         timeLine.start();\n//         let lastElement = children[lastPosition];\n//         let currentElement = children[currentPosition];\n//         let nextElement = children[nextPosition];\n//         let lastAnimation = new Animation(\n//           lastElement.style,\n//           'transform',\n//           -500 - 500 * lastPosition + offset + dx,\n//           -500 - 500 * lastPosition + direction * 500,\n//           500,\n//           0,\n//           ease,\n//           (v) => `translateX(${v}px)`,\n//         );\n//         let currentAnimation = new Animation(\n//           currentElement.style,\n//           'transform',\n//           -500 * currentPosition + offset + dx,\n//           -500 * currentPosition + direction * 500,\n//           500,\n//           0,\n//           ease,\n//           (v) => `translateX(${v}px)`,\n//         );\n//         let nextAnimation = new Animation(\n//           nextElement.style,\n//           'transform',\n//           500 - 500 * nextPosition + offset + dx,\n//           500 - 500 * nextPosition + direction * 500,\n//           500,\n//           0,\n//           ease,\n//           (v) => `translateX(${v}px)`,\n//         );\n//         timeLine.add(lastAnimation);\n//         timeLine.add(currentAnimation);\n//         timeLine.add(nextAnimation);\n//         position = (position - direction + this.data.length) % this.data.length;\n//         this.nextPickStopHandler = setTimeout(nextPic, 3000);\n//       };\n//       let element = (\n//         <img\n//           src={url}\n//           style={{\n//             transform: 'translateX(0px)',\n//           }}\n//           onStart={this.onStart}\n//           onPan={this.onPan}\n//           onPanend={this.onPanend}\n//           enableGesture={true}\n//         />\n//       );\n//       element.addEventListener('dragstart', (event) => event.preventDefault());\n//       return element;\n//     });\n//     let root = <div class={'carousel'}>{children}</div>;\n//     this.loop(root, children);\n//     // this.drag(root, children);\n//     return root;\n//   }\n//   // 当前节点插入将渲染到页面\n//   mountTo(parent) {\n//     this.slot = <div></div>;\n//     for (const child of this.children) {\n//       this.slot.appendChild(child);\n//     }\n//     this.render().mountTo(parent);\n//   }\n// }\n// // https://reactjs.org/docs/introducing-jsx.html\n// // 此时调用createElement的顺序为1.Child,2.Child,3.Child,4:Div\n// // 在JSX中，组件树构建顺序是子元素->父元素\n// let component = (\n//   <Carousel\n//     data={[\n//       'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',\n//       'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',\n//       'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',\n//       'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',\n//     ]}\n//   />\n// );\n// let panel = (\n//   <Panel title={'this is my panel'}>\n//     <span title='title1'>This is content1</span>\n//     <span title='title2'>This is content2</span>\n//     <span title='title3'>This is content3</span>\n//     <span title='title4'>This is content4</span>\n//   </Panel>\n// );\n// let tabPanel = (\n//   <TabPanel title={'this is my panel'}>\n//     <span title='title1'>This is content1</span>\n//     <span title='title2'>This is content2</span>\n//     <span title='title3'>This is content3</span>\n//     <span title='title4'>This is content4</span>\n//   </TabPanel>\n// );\n// let data = [\n//   {\n//     title: '蓝猫',\n//     url:\n//       'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',\n//   },\n//   {\n//     title: '橘猫加白',\n//     url:\n//       'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',\n//   },\n//   {\n//     title: '狸花加白',\n//     url:\n//       'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',\n//   },\n//   {\n//     title: '橘猫',\n//     url:\n//       'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',\n//   },\n// ];\n// let list = (\n//   <ListView data={data}>\n//     {(record) => {\n//       return (\n//         <figure>\n//           <img src={record.url} />\n//           <figcaption>{record.title}</figcaption>\n//         </figure>\n//       );\n//     }}\n//   </ListView>\n// );\n// // 将组件及其子组件渲染到#root\n// component.mountTo(document.querySelector('#root'));\n\n//# sourceURL=webpack:///./src/carousel.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/*! exports provided: createElement, Wrapper, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var _gesture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gesture */ \"./src/gesture.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction createElement(Cls, attributes) {\n  // console.log(arguments); // 如果没有设置属性时，arguments[1]为null\n  var element;\n\n  if (typeof Cls === 'string') {\n    element = new Wrapper(Cls, {\n      // 此处传入Config\n      config: 'wrapperConfig'\n    });\n  } else {\n    element = new Cls({\n      // 此处传入Config\n      config: 'elementConfig'\n    });\n  } // 将attributes转移到obj上\n\n\n  for (var name in attributes) {\n    // 此处可以把attributes设置到obj中\n    element.setAttribute(name, attributes[name]);\n  }\n\n  var visit = function visit(children) {\n    // console.log(children);\n    // 将children挂载到obj\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        // 如果子元素为数组，即需要用map遍历时，需要递归遍历\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          visit(child);\n        } else if (typeof child === 'string') {\n          child = new Text(child);\n        } // 如果不用appendChild方法，也可以直接push到children，这主要看设计者的思想\n        // element.children.push(child);\n\n\n        if (!Array.isArray(child)) {\n          element.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return element;\n} // html组件\n\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(type, config) {\n    _classCallCheck(this, Wrapper);\n\n    // console.log('config', config);\n    // 存储Children\n    this.children = []; // 创建一个DOM元素\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(Wrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // attribute\n      // console.log(name, value);\n      // 在DOM元素上插入属性\n      if (name === 'style' && _typeof(value) === 'object') {\n        for (var prop in value) {\n          this.root.style[prop] = value[prop];\n        }\n      } else {\n        this.root.setAttribute(name, value);\n\n        if (name.match(/^on([\\s\\S]+)$/)) {\n          var eventName = RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n            return c.toLowerCase();\n          });\n          this.addEventListener(eventName, value);\n        }\n\n        if (name === 'enableGesture') {\n          Object(_gesture__WEBPACK_IMPORTED_MODULE_0__[\"enableGesture\"])(this.root);\n        }\n      }\n    }\n  }, {\n    key: \"getAttribute\",\n    value: function getAttribute(name) {\n      return this.root.getAttribute(name);\n    } // 绑定事件\n\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: \"appendChild\",\n    // 通过appendChild，存储子组件\n    value: function appendChild(child) {\n      // children\n      // console.log(this.root);\n      // console.log(child);\n      this.children.push(child);\n    } // 当前节点插入将渲染到页面\n\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.mountTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"style\",\n    get: function get() {\n      return this.root.style;\n    }\n  }, {\n    key: \"classList\",\n    get: function get() {\n      return this.root.classList;\n    }\n  }, {\n    key: \"innerText\",\n    set: function set(text) {\n      return this.root.innerText = text;\n    }\n  }]);\n\n  return Wrapper;\n}(); // 文本组件\n\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(Text, [{\n    key: \"mountTo\",\n    value: function mountTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }, {\n    key: \"geAttribute\",\n    value: function geAttribute(name) {\n      return name;\n    }\n  }]);\n\n  return Text;\n}();\n\n//# sourceURL=webpack:///./src/createElement.js?");

/***/ }),

/***/ "./src/gesture.js":
/*!************************!*\
  !*** ./src/gesture.js ***!
  \************************/
/*! exports provided: enableGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableGesture\", function() { return enableGesture; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction enableGesture(element) {\n  var context = Object.create(null);\n  var MOUSE_SYMBOL = Symbol('move');\n  if (document.ontouchstart !== null) element.addEventListener('mousedown', function () {\n    context[MOUSE_SYMBOL] = Object.create(null);\n    start(event, context[MOUSE_SYMBOL]);\n\n    var mousemove = function mousemove(event) {\n      move(event, context[MOUSE_SYMBOL]);\n    };\n\n    var mouseend = function mouseend(event) {\n      end(event, context[MOUSE_SYMBOL]);\n      document.removeEventListener('mousemove', mousemove);\n      document.removeEventListener('mouseup', mouseend);\n    };\n\n    document.addEventListener('mousemove', mousemove);\n    document.addEventListener('mouseup', mouseend);\n  });\n  element.addEventListener('touchstart', function (event) {\n    var _iterator = _createForOfIteratorHelper(event.changedTouches),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var touch = _step.value;\n        context[touch.identifier] = Object.create(null);\n        start(touch, context[touch.identifier]);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n  element.addEventListener('touchmove', function (event) {\n    var _iterator2 = _createForOfIteratorHelper(event.changedTouches),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var touch = _step2.value;\n        move(touch, context[touch.identifier]);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  });\n  element.addEventListener('touchend', function (event) {\n    var _iterator3 = _createForOfIteratorHelper(event.changedTouches),\n        _step3;\n\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var touch = _step3.value;\n        end(touch, context[touch.identifier]);\n        delete context[touch.identifier];\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n  });\n  element.addEventListener('touchcancel', function (event) {\n    var _iterator4 = _createForOfIteratorHelper(event.changedTouches),\n        _step4;\n\n    try {\n      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n        var touch = _step4.value;\n        cancel(touch, context[touch.identifier]);\n        delete context[touch.identifier];\n      }\n    } catch (err) {\n      _iterator4.e(err);\n    } finally {\n      _iterator4.f();\n    }\n  }); // tap\n  // pan -- panstart panmove panend\n  // flick\n  // press -- pressstart pressend\n\n  var start = function start(point, context) {\n    context.startX = point.clientX;\n    context.startY = point.clientY;\n    var e = new CustomEvent('start');\n    element.dispatchEvent(Object.assign(e, {\n      startX: point.clientX,\n      clientX: point.clientX,\n      startY: point.clientY,\n      clientY: point.clientY\n    }));\n    context.moves = [];\n    context.isTap = true;\n    context.isPan = false;\n    context.isPress = false;\n    context.timeoutHandler = setTimeout(function () {\n      if (context.isPan) {\n        return;\n      }\n\n      context.isTap = false;\n      context.isPan = false;\n      context.isPress = true;\n      console.log('pressstart');\n    }, 500);\n  };\n\n  var move = function move(point, context) {\n    var dx = point.clientX - context.startX;\n    var dy = point.clientY - context.startY; // console.log('move');\n\n    if (Math.pow(dx, 2) + Math.pow(dy, 2) > 100 && !context.isPan) {\n      if (context.isPress) {\n        console.log('presscancel');\n        element.dispatchEvent(new CustomEvent('presscancel', {}));\n      }\n\n      context.isTap = false;\n      context.isPan = true;\n      context.isPress = false;\n      var e = new CustomEvent('panstart');\n      element.dispatchEvent(Object.assign(e, {\n        startX: context.startX,\n        clientX: point.clientX,\n        startY: context.startY,\n        clientY: point.clientY\n      }));\n      console.log('panstart');\n    }\n\n    if (context.isPan) {\n      context.moves.push({\n        dx: dx,\n        dy: dy,\n        t: Date.now()\n      });\n      context.moves = context.moves.filter(function (record) {\n        return Date.now() - record.t < 300;\n      });\n\n      var _e = new CustomEvent('pan');\n\n      element.dispatchEvent(Object.assign(_e, {\n        startX: context.startX,\n        clientX: point.clientX,\n        startY: context.startY,\n        clientY: point.clientY\n      }));\n      console.log('pan');\n    }\n  };\n\n  var end = function end(point, context) {\n    if (context.isPan) {\n      var dx = point.clientX - context.startX;\n      var dy = point.clientY - context.startY;\n      var record = context.moves[0];\n      var speed = Math.sqrt((Math.pow(record.dx - dx, 2) + Math.pow(record.dy - dy, 2)) / (Date.now() - record.t)); // console.log(speed);\n\n      var isFlick = speed > 2.5;\n\n      if (isFlick) {\n        console.log('flick');\n        element.dispatchEvent(new CustomEvent('flick', {}));\n      }\n\n      var e = new CustomEvent('panend');\n      element.dispatchEvent(Object.assign(e, {\n        startX: context.startX,\n        clientX: point.clientX,\n        startY: context.startY,\n        clientY: point.clientY,\n        speed: speed,\n        isFlick: isFlick\n      }));\n      console.log('panend');\n    }\n\n    if (context.isTap) {\n      console.log('tap');\n      element.dispatchEvent(new CustomEvent('tap'));\n    }\n\n    if (context.isPress) {\n      element.dispatchEvent(new CustomEvent('pressend'));\n      console.log('pressend');\n    }\n\n    clearTimeout(context.timeoutHandler);\n  };\n\n  var cancel = function cancel(point, context) {\n    console.log('cancel');\n    element.dispatchEvent(new CustomEvent('cancel'));\n    clearTimeout(context.timeoutHandler);\n  };\n}\n\n//# sourceURL=webpack:///./src/gesture.js?");

/***/ })

/******/ });