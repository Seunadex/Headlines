const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');
require('dotenv').config();

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
  entry: [
    `${APP_DIR}/main.jsx`,
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
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpeg$/,
        loaders: ['file-loader', 'url-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        API_KEY: JSON.stringify(process.env.API_KEY),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
