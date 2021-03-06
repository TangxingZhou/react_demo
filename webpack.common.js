var webpack = require('webpack');
var path = require('path');
// var loaders = require('./webpack.loaders');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
        home:  path.resolve(__dirname, 'app/index.jsx'),
        // main: './app/executions.jsx'
    },
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	//生成的sourcemap的方式
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	resolve: {
		extensions: ['json', '.js', '.jsx']
	},
	module: {
        // loaders: loaders,
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'//,
                    // include: path.resolve(__dirname, 'app'),
                    // options: {
                    //     presets: ['es2015', 'react']
                    // }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
	plugins: [
		new CleanWebpackPlugin()
		// new webpack.DefinePlugin({
	    //   'process.env':{
	    //     'NODE_ENV': JSON.stringify('production')
	    //   }
	    // }),
		// new CopyWebpackPlugin([
		// 	{from: './index.html'}
		// ])
	]
};