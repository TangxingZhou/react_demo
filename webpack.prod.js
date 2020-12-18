const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	// devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    plugins: [
		new HtmlWebpackPlugin({
			title: 'Prod',
			template: 'index.html'
		}),
    	new UglifyJSPlugin({
        	sourceMap: true
	 	})
    ]
});