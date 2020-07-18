const { join, resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'auto-ngtemplate-loader',
            options: {
              variableName: 'autoNgTemplateLoaderTemplate',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              relativeTo: resolve('./examples'),
            },
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolveLoader: {
    alias: {
      'auto-ngtemplate-loader': join(__dirname, './index.js'),
    },
  },
  stats: {
    colors: true,
  },
};
