const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	devServer: {
		contentBase: "./dist", //静态资源的目录
		noInfo: true, //  --no-info option
		hot: true,   //自动刷新
		inline: true,
		host: 'localhost'
	},
    plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Dev'
		}),
    	new UglifyJSPlugin({
        	sourceMap: true
	 	}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
    ]
});