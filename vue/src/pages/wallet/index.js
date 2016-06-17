var Vue = require('../../js/vue-plus');

var component = Vue.extend({
	data: function() {
		return {
			currentView: 'wallet'
		};
	},

	template: '<component is="{{currentView}}"></component>',

	components: {
		wallet: require('./wallet')
	}
});

module.exports = {component: component};