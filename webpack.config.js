const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/scripts');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	devtool: 'inline-source-map',
	entry: APP_DIR + '/main.jsx',
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
				loaders: ['react-hot-loader','babel-loader?presets[]=react,presets[]=es2015']
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