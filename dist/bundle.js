webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1);
	var Router = __webpack_require__(4);
	var router = new Router();
	var app = Vue.extend({});

	router.map({
		// 首页
		'/': __webpack_require__(5)
	});

	router.start(app, '#app');









/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1);

	var component = Vue.extend({
		data: function() {
			return {
			};
		},

		template: '<div>1111</div>',
	});

	!/* require.ensure */(function(require) {
		
	}(__webpack_require__));

	module.exports = {component: component};
















/***/ }

});