require('./index.less');

var Vue = require('../../js/vue-plus');

var component = Vue.extend({
	data: function() {
		return {
		};
	},
	template: require('./index.tpl'),
});



module.exports = {component: component};














