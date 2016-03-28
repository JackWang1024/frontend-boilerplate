var Vue = require('../js/vue-plus');
var Router = require('vue-router');
var router = new Router();
var app = Vue.extend({});

// require('../css/common.less');
// require('../css/core.less');

router.map({
	// 首页
	'/': require('./home'),
	'/wallet': require('./wallet/index')
});

router.start(app, '#app');







