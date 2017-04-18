var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader','sass-loader'],
					publicPath: '/dist'
				})
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'

				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		stats: 'errors-only',
		open: true
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			title: 'webpack-starter-kit',
			hash: true,
			template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true
		})
	]
};