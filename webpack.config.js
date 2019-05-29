const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	resolve: {
		alias: {
			klassified: path.resolve(__dirname, 'node_modules/klassified/dist/klassified'),
			widgetjs: path.resolve(__dirname, 'node_modules/widgetjs/dist/widgetjs')
		}
	},
	module: {
		rules: [{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader', // translates CSS into CommonJS
					options: {
						modules:true
					}
				}, {
					loader: 'less-loader' // compiles Less to CSS
				}
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Widgetjs Test'
		})
	]
};
