var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './pages/app.js',
		vendor: [
			'./node_modules/vue', 
			'./node_modules/vue-router', 
			'./js/vue-plus', 
		],
	},
	output: {
		path: './dist',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.tpl$/, 
				loader: 'html'
			},
			{
				test: /\.less$/, 
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			},
			{
		        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
		        loader: 'url',
		        query: {
		          	limit: 10000,
		          	name: '[name].[ext]?[hash:7]'
		        }
		    }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new ExtractTextPlugin("[name].css")
	]
};




