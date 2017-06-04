const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/scripts');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080/',
		'webpack/hot/only-dev-server',
		APP_DIR + '/main.jsx'
		],
	devServer: {
		compress: true,
		hot: true,
	},
		output: {
			path: BUILD_DIR,
			filename: 'bundle.js',
	},
	 resolve: {
    extensions: ['.js', '.jsx']
  },
	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: APP_DIR,
				exclude: /node_modules/,
				loader: ['babel-loader']
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			}
			]
	},
	plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
			]
};