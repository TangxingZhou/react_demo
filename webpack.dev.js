var path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	// devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'), //静态资源的目录
		compress: true,
		noInfo: true, //  --no-info option
		hot: true,   //自动刷新
		historyApiFallback: true,
		inline: true,
		open: true,
		host: '127.0.0.1',
		port: '8080'
	},
    plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Dev',
			template: 'index.html'
		})//,
    	// new UglifyJSPlugin({
        // 	sourceMap: true
	 	// })
    ]
});