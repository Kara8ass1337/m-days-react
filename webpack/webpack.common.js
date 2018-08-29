const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const GLOBALS = require('dot-globals')();
const commonPaths = require('./paths');

if (!GLOBALS.serverHost) {
  console.warn('Warning: Server host does not specified!');
}

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
  ],
};

module.exports.devServer = {
  host: GLOBALS.webpackHost,
  port: GLOBALS.webpackPort,
  proxy: {
    '/': {
      target: GLOBALS.serverUrl,
      secure: false,
    },
  },
  contentBase: path.resolve(__dirname, '../public'),
  publicPath: '/',
  historyApiFallback: {
    rewrites: [
      { from: /./, to: '/index.html' },
    ],
  },
};
