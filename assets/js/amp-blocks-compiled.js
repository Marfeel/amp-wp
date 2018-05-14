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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amp_timeout__ = __webpack_require__(1);\n/**\n * Import blocks.\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9pbmRleC5qcz84MTkzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1wb3J0IGJsb2Nrcy5cbiAqL1xuaW1wb3J0ICcuL2FtcC10aW1lb3V0JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jsb2Nrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_timeago_js__);\n/* global moment */\n\n/**\n * Internal block libraries.\n */\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    InspectorControls = _wp$blocks.InspectorControls,\n    BlockAlignmentToolbar = _wp$blocks.BlockAlignmentToolbar,\n    BlockControls = _wp$blocks.BlockControls;\nvar _wp$components = wp.components,\n    DateTimePicker = _wp$components.DateTimePicker,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n\n\n\n/**\n * Register block.\n */\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('amp/amp-timeago', {\n\ttitle: __('AMP Timeago'),\n\tcategory: 'common',\n\ticon: 'wordpress-alt', // @todo Needs an icon.\n\tkeywords: [__('Time difference'), __('Time ago'), __('Date')],\n\n\tattributes: {\n\t\talign: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tcutoff: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tdateTime: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tgetEditWrapperProps: function getEditWrapperProps(attributes) {\n\t\tvar align = attributes.align;\n\n\t\tif ('left' === align || 'right' === align || 'center' === align) {\n\t\t\treturn { 'data-align': align };\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    isSelected = _ref.isSelected,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar align = attributes.align,\n\t\t    cutoff = attributes.cutoff;\n\n\t\tvar timeAgo;\n\t\tif (attributes.dateTime) {\n\t\t\tif (attributes.cutoff && attributes.cutoff < Math.abs(moment(attributes.dateTime).diff(moment(), 'seconds'))) {\n\t\t\t\ttimeAgo = moment(attributes.dateTime).format('dddd D MMMM HH:mm');\n\t\t\t} else {\n\t\t\t\ttimeAgo = __WEBPACK_IMPORTED_MODULE_0_timeago_js___default()().format(attributes.dateTime);\n\t\t\t}\n\t\t} else {\n\t\t\ttimeAgo = __WEBPACK_IMPORTED_MODULE_0_timeago_js___default()().format(new Date());\n\t\t\tsetAttributes({ dateTime: moment(moment(), moment.ISO_8601, true).format() });\n\t\t}\n\t\treturn [isSelected && wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\t{ title: __('AMP Timeago Settings') },\n\t\t\t\twp.element.createElement(DateTimePicker, {\n\t\t\t\t\tlocale: 'en',\n\t\t\t\t\tcurrentDate: attributes.dateTime || moment(),\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ dateTime: moment(value, moment.ISO_8601, true).format() });\n\t\t\t\t\t} // eslint-disable-line\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\ttype: 'number',\n\t\t\t\t\tclassName: 'blocks-amp-timeout__cutoff',\n\t\t\t\t\tlabel: __('Cutoff (seconds)'),\n\t\t\t\t\tvalue: cutoff !== undefined ? cutoff : '',\n\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\treturn setAttributes({ cutoff: value });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\tBlockControls,\n\t\t\t{ key: 'controls' },\n\t\t\twp.element.createElement(BlockAlignmentToolbar, {\n\t\t\t\tvalue: align,\n\t\t\t\tonChange: function onChange(nextAlign) {\n\t\t\t\t\tsetAttributes({ align: nextAlign });\n\t\t\t\t},\n\t\t\t\tcontrols: ['left', 'center', 'right']\n\t\t\t})\n\t\t), wp.element.createElement(\n\t\t\t'time',\n\t\t\t{ key: 'timeago', dateTime: attributes.dateTime },\n\t\t\ttimeAgo\n\t\t)];\n\t},\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\t\tvar timeagoProps = {\n\t\t\tlayout: 'responsive',\n\t\t\tclassName: 'align' + (attributes.align || 'none'),\n\t\t\tdatetime: attributes.dateTime,\n\t\t\tlocale: 'en'\n\t\t};\n\t\tif (attributes.cutoff) {\n\t\t\ttimeagoProps.cutoff = attributes.cutoff;\n\t\t}\n\t\treturn wp.element.createElement(\n\t\t\t'amp-timeago',\n\t\t\ttimeagoProps,\n\t\t\tmoment(attributes.dateTime).format('dddd D MMMM HH:mm')\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Jsb2Nrcy9hbXAtdGltZW91dC9pbmRleC5qcz84YzdhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBtb21lbnQgKi9cblxuLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXMuXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkYmxvY2tzLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIEJsb2NrQWxpZ25tZW50VG9vbGJhciA9IF93cCRibG9ja3MuQmxvY2tBbGlnbm1lbnRUb29sYmFyLFxuICAgIEJsb2NrQ29udHJvbHMgPSBfd3AkYmxvY2tzLkJsb2NrQ29udHJvbHM7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIERhdGVUaW1lUGlja2VyID0gX3dwJGNvbXBvbmVudHMuRGF0ZVRpbWVQaWNrZXIsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG5cbmltcG9ydCB0aW1lYWdvIGZyb20gJ3RpbWVhZ28uanMnO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrLlxuICovXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSgnYW1wL2FtcC10aW1lYWdvJywge1xuXHR0aXRsZTogX18oJ0FNUCBUaW1lYWdvJyksXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0aWNvbjogJ3dvcmRwcmVzcy1hbHQnLCAvLyBAdG9kbyBOZWVkcyBhbiBpY29uLlxuXHRrZXl3b3JkczogW19fKCdUaW1lIGRpZmZlcmVuY2UnKSwgX18oJ1RpbWUgYWdvJyksIF9fKCdEYXRlJyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRhbGlnbjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGN1dG9mZjoge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdGRhdGVUaW1lOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHRnZXRFZGl0V3JhcHBlclByb3BzOiBmdW5jdGlvbiBnZXRFZGl0V3JhcHBlclByb3BzKGF0dHJpYnV0ZXMpIHtcblx0XHR2YXIgYWxpZ24gPSBhdHRyaWJ1dGVzLmFsaWduO1xuXG5cdFx0aWYgKCdsZWZ0JyA9PT0gYWxpZ24gfHwgJ3JpZ2h0JyA9PT0gYWxpZ24gfHwgJ2NlbnRlcicgPT09IGFsaWduKSB7XG5cdFx0XHRyZXR1cm4geyAnZGF0YS1hbGlnbic6IGFsaWduIH07XG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgaXNTZWxlY3RlZCA9IF9yZWYuaXNTZWxlY3RlZCxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblx0XHR2YXIgYWxpZ24gPSBhdHRyaWJ1dGVzLmFsaWduLFxuXHRcdCAgICBjdXRvZmYgPSBhdHRyaWJ1dGVzLmN1dG9mZjtcblxuXHRcdHZhciB0aW1lQWdvO1xuXHRcdGlmIChhdHRyaWJ1dGVzLmRhdGVUaW1lKSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5jdXRvZmYgJiYgYXR0cmlidXRlcy5jdXRvZmYgPCBNYXRoLmFicyhtb21lbnQoYXR0cmlidXRlcy5kYXRlVGltZSkuZGlmZihtb21lbnQoKSwgJ3NlY29uZHMnKSkpIHtcblx0XHRcdFx0dGltZUFnbyA9IG1vbWVudChhdHRyaWJ1dGVzLmRhdGVUaW1lKS5mb3JtYXQoJ2RkZGQgRCBNTU1NIEhIOm1tJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aW1lQWdvID0gdGltZWFnbygpLmZvcm1hdChhdHRyaWJ1dGVzLmRhdGVUaW1lKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZUFnbyA9IHRpbWVhZ28oKS5mb3JtYXQobmV3IERhdGUoKSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgZGF0ZVRpbWU6IG1vbWVudChtb21lbnQoKSwgbW9tZW50LklTT184NjAxLCB0cnVlKS5mb3JtYXQoKSB9KTtcblx0XHR9XG5cdFx0cmV0dXJuIFtpc1NlbGVjdGVkICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0eyBrZXk6ICdpbnNwZWN0b3InIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0eyB0aXRsZTogX18oJ0FNUCBUaW1lYWdvIFNldHRpbmdzJykgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KERhdGVUaW1lUGlja2VyLCB7XG5cdFx0XHRcdFx0bG9jYWxlOiAnZW4nLFxuXHRcdFx0XHRcdGN1cnJlbnREYXRlOiBhdHRyaWJ1dGVzLmRhdGVUaW1lIHx8IG1vbWVudCgpLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBkYXRlVGltZTogbW9tZW50KHZhbHVlLCBtb21lbnQuSVNPXzg2MDEsIHRydWUpLmZvcm1hdCgpIH0pO1xuXHRcdFx0XHRcdH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYmxvY2tzLWFtcC10aW1lb3V0X19jdXRvZmYnLFxuXHRcdFx0XHRcdGxhYmVsOiBfXygnQ3V0b2ZmIChzZWNvbmRzKScpLFxuXHRcdFx0XHRcdHZhbHVlOiBjdXRvZmYgIT09IHVuZGVmaW5lZCA/IGN1dG9mZiA6ICcnLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBjdXRvZmY6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRCbG9ja0NvbnRyb2xzLFxuXHRcdFx0eyBrZXk6ICdjb250cm9scycgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChCbG9ja0FsaWdubWVudFRvb2xiYXIsIHtcblx0XHRcdFx0dmFsdWU6IGFsaWduLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV4dEFsaWduKSB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGFsaWduOiBuZXh0QWxpZ24gfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNvbnRyb2xzOiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J11cblx0XHRcdH0pXG5cdFx0KSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J3RpbWUnLFxuXHRcdFx0eyBrZXk6ICd0aW1lYWdvJywgZGF0ZVRpbWU6IGF0dHJpYnV0ZXMuZGF0ZVRpbWUgfSxcblx0XHRcdHRpbWVBZ29cblx0XHQpXTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuXHRcdHZhciB0aW1lYWdvUHJvcHMgPSB7XG5cdFx0XHRsYXlvdXQ6ICdyZXNwb25zaXZlJyxcblx0XHRcdGNsYXNzTmFtZTogJ2FsaWduJyArIChhdHRyaWJ1dGVzLmFsaWduIHx8ICdub25lJyksXG5cdFx0XHRkYXRldGltZTogYXR0cmlidXRlcy5kYXRlVGltZSxcblx0XHRcdGxvY2FsZTogJ2VuJ1xuXHRcdH07XG5cdFx0aWYgKGF0dHJpYnV0ZXMuY3V0b2ZmKSB7XG5cdFx0XHR0aW1lYWdvUHJvcHMuY3V0b2ZmID0gYXR0cmlidXRlcy5jdXRvZmY7XG5cdFx0fVxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnYW1wLXRpbWVhZ28nLFxuXHRcdFx0dGltZWFnb1Byb3BzLFxuXHRcdFx0bW9tZW50KGF0dHJpYnV0ZXMuZGF0ZVRpbWUpLmZvcm1hdCgnZGRkZCBEIE1NTU0gSEg6bW0nKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYmxvY2tzL2FtcC10aW1lb3V0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("!function(t,e){\"object\"==typeof module&&module.exports?(module.exports=e(),module.exports.default=module.exports):t.timeago=e()}(\"undefined\"!=typeof window?window:this,function(){function t(t){return t instanceof Date?t:isNaN(t)?/^\\d+$/.test(t)?new Date(e(t)):(t=(t||\"\").trim().replace(/\\.\\d+/,\"\").replace(/-/,\"/\").replace(/-/,\"/\").replace(/(\\d)T(\\d)/,\"$1 $2\").replace(/Z/,\" UTC\").replace(/([\\+\\-]\\d\\d)\\:?(\\d\\d)/,\" $1$2\"),new Date(t)):new Date(e(t))}function e(t){return parseInt(t)}function n(t,n,r){n=l[n]?n:l[r]?r:\"en\";for(var o=0,i=t<0?1:0,a=t=Math.abs(t);t>=p[o]&&o<h;o++)t/=p[o];return t=e(t),o*=2,t>(0===o?9:1)&&(o+=1),l[n](t,o,a)[i].replace(\"%s\",t)}function r(e,n){return((n=n?t(n):new Date)-t(e))/1e3}function o(t){for(var e=1,n=0,r=Math.abs(t);t>=p[n]&&n<h;n++)t/=p[n],e*=p[n];return r%=e,r=r?e-r:e,Math.ceil(r)}function i(t){return a(t,\"data-timeago\")||a(t,\"datetime\")}function a(t,e){return t.getAttribute?t.getAttribute(e):t.attr?t.attr(e):void 0}function u(t,e){return t.setAttribute?t.setAttribute(m,e):t.attr?t.attr(m,e):void 0}function c(t,e){this.nowDate=t,this.defaultLocale=e||\"en\"}function d(t,e){return new c(t,e)}var f=\"second_minute_hour_day_week_month_year\".split(\"_\"),s=\"秒_分钟_小时_天_周_月_年\".split(\"_\"),l={en:function(t,e){if(0===e)return[\"just now\",\"right now\"];var n=f[parseInt(e/2)];return t>1&&(n+=\"s\"),[t+\" \"+n+\" ago\",\"in \"+t+\" \"+n]},zh_CN:function(t,e){if(0===e)return[\"刚刚\",\"片刻后\"];var n=s[parseInt(e/2)];return[t+n+\"前\",t+n+\"后\"]}},p=[60,60,24,7,365/7/12,12],h=6,m=\"data-tid\",w={};return c.prototype.doRender=function(t,e,i){var a,c=r(e,this.nowDate),d=this;t.innerHTML=n(c,i,this.defaultLocale),w[a=setTimeout(function(){d.doRender(t,e,i),delete w[a]},Math.min(1e3*o(c),2147483647))]=0,u(t,a)},c.prototype.format=function(t,e){return n(r(t,this.nowDate),e,this.defaultLocale)},c.prototype.render=function(t,e){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)this.doRender(t[n],i(t[n]),e)},c.prototype.setLocale=function(t){this.defaultLocale=t},d.register=function(t,e){l[t]=e},d.cancel=function(t){var e;if(t)(e=a(t,m))&&(clearTimeout(e),delete w[e]);else{for(e in w)clearTimeout(e);w={}}},d});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW1lYWdvLmpzL2Rpc3QvdGltZWFnby5taW4uanM/ZjAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz8obW9kdWxlLmV4cG9ydHM9ZSgpLG1vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHMpOnQudGltZWFnbz1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiB0IGluc3RhbmNlb2YgRGF0ZT90OmlzTmFOKHQpPy9eXFxkKyQvLnRlc3QodCk/bmV3IERhdGUoZSh0KSk6KHQ9KHR8fFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXC5cXGQrLyxcIlwiKS5yZXBsYWNlKC8tLyxcIi9cIikucmVwbGFjZSgvLS8sXCIvXCIpLnJlcGxhY2UoLyhcXGQpVChcXGQpLyxcIiQxICQyXCIpLnJlcGxhY2UoL1ovLFwiIFVUQ1wiKS5yZXBsYWNlKC8oW1xcK1xcLV1cXGRcXGQpXFw6PyhcXGRcXGQpLyxcIiAkMSQyXCIpLG5ldyBEYXRlKHQpKTpuZXcgRGF0ZShlKHQpKX1mdW5jdGlvbiBlKHQpe3JldHVybiBwYXJzZUludCh0KX1mdW5jdGlvbiBuKHQsbixyKXtuPWxbbl0/bjpsW3JdP3I6XCJlblwiO2Zvcih2YXIgbz0wLGk9dDwwPzE6MCxhPXQ9TWF0aC5hYnModCk7dD49cFtvXSYmbzxoO28rKyl0Lz1wW29dO3JldHVybiB0PWUodCksbyo9Mix0PigwPT09bz85OjEpJiYobys9MSksbFtuXSh0LG8sYSlbaV0ucmVwbGFjZShcIiVzXCIsdCl9ZnVuY3Rpb24gcihlLG4pe3JldHVybigobj1uP3Qobik6bmV3IERhdGUpLXQoZSkpLzFlM31mdW5jdGlvbiBvKHQpe2Zvcih2YXIgZT0xLG49MCxyPU1hdGguYWJzKHQpO3Q+PXBbbl0mJm48aDtuKyspdC89cFtuXSxlKj1wW25dO3JldHVybiByJT1lLHI9cj9lLXI6ZSxNYXRoLmNlaWwocil9ZnVuY3Rpb24gaSh0KXtyZXR1cm4gYSh0LFwiZGF0YS10aW1lYWdvXCIpfHxhKHQsXCJkYXRldGltZVwiKX1mdW5jdGlvbiBhKHQsZSl7cmV0dXJuIHQuZ2V0QXR0cmlidXRlP3QuZ2V0QXR0cmlidXRlKGUpOnQuYXR0cj90LmF0dHIoZSk6dm9pZCAwfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4gdC5zZXRBdHRyaWJ1dGU/dC5zZXRBdHRyaWJ1dGUobSxlKTp0LmF0dHI/dC5hdHRyKG0sZSk6dm9pZCAwfWZ1bmN0aW9uIGModCxlKXt0aGlzLm5vd0RhdGU9dCx0aGlzLmRlZmF1bHRMb2NhbGU9ZXx8XCJlblwifWZ1bmN0aW9uIGQodCxlKXtyZXR1cm4gbmV3IGModCxlKX12YXIgZj1cInNlY29uZF9taW51dGVfaG91cl9kYXlfd2Vla19tb250aF95ZWFyXCIuc3BsaXQoXCJfXCIpLHM9XCLnp5Jf5YiG6ZKfX+Wwj+aXtl/lpKlf5ZGoX+aciF/lubRcIi5zcGxpdChcIl9cIiksbD17ZW46ZnVuY3Rpb24odCxlKXtpZigwPT09ZSlyZXR1cm5bXCJqdXN0IG5vd1wiLFwicmlnaHQgbm93XCJdO3ZhciBuPWZbcGFyc2VJbnQoZS8yKV07cmV0dXJuIHQ+MSYmKG4rPVwic1wiKSxbdCtcIiBcIituK1wiIGFnb1wiLFwiaW4gXCIrdCtcIiBcIituXX0semhfQ046ZnVuY3Rpb24odCxlKXtpZigwPT09ZSlyZXR1cm5bXCLliJrliJpcIixcIueJh+WIu+WQjlwiXTt2YXIgbj1zW3BhcnNlSW50KGUvMildO3JldHVyblt0K24rXCLliY1cIix0K24rXCLlkI5cIl19fSxwPVs2MCw2MCwyNCw3LDM2NS83LzEyLDEyXSxoPTYsbT1cImRhdGEtdGlkXCIsdz17fTtyZXR1cm4gYy5wcm90b3R5cGUuZG9SZW5kZXI9ZnVuY3Rpb24odCxlLGkpe3ZhciBhLGM9cihlLHRoaXMubm93RGF0ZSksZD10aGlzO3QuaW5uZXJIVE1MPW4oYyxpLHRoaXMuZGVmYXVsdExvY2FsZSksd1thPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtkLmRvUmVuZGVyKHQsZSxpKSxkZWxldGUgd1thXX0sTWF0aC5taW4oMWUzKm8oYyksMjE0NzQ4MzY0NykpXT0wLHUodCxhKX0sYy5wcm90b3R5cGUuZm9ybWF0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4ocih0LHRoaXMubm93RGF0ZSksZSx0aGlzLmRlZmF1bHRMb2NhbGUpfSxjLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10Lmxlbmd0aCYmKHQ9W3RdKTtmb3IodmFyIG49MCxyPXQubGVuZ3RoO248cjtuKyspdGhpcy5kb1JlbmRlcih0W25dLGkodFtuXSksZSl9LGMucHJvdG90eXBlLnNldExvY2FsZT1mdW5jdGlvbih0KXt0aGlzLmRlZmF1bHRMb2NhbGU9dH0sZC5yZWdpc3Rlcj1mdW5jdGlvbih0LGUpe2xbdF09ZX0sZC5jYW5jZWw9ZnVuY3Rpb24odCl7dmFyIGU7aWYodCkoZT1hKHQsbSkpJiYoY2xlYXJUaW1lb3V0KGUpLGRlbGV0ZSB3W2VdKTtlbHNle2ZvcihlIGluIHcpY2xlYXJUaW1lb3V0KGUpO3c9e319fSxkfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGltZWFnby5qcy9kaXN0L3RpbWVhZ28ubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);