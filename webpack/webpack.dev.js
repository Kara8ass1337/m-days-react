const commonPaths = require('./paths');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: false,
              filename: '[name].[hash].css',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
