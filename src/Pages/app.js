var Vue = require('../js/vue-plus');
var Router = require('vue-router');
var router = new Router();
var app = Vue.extend({});

router.map({
	// 首页
	'/': require('./home')
});

router.start(app, '#app');







