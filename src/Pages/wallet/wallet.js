require('../../css/common.less');
require('../../css/core.less');
require('./style.less');

var Vue = require('../../js/vue-plus');

var component = Vue.extend({
	data: function() {
		return {
		};
	},
	template: require('./wallet.tpl')
});



module.exports = {component: component};














