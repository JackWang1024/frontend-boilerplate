var webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/pages/app.js',
		vendor: [
			'./src/node_modules/vue', 
			'./src/node_modules/vue-router', 
			'./src/js/vue-plus', 
		],
	},
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	]
};