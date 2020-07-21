const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./js/app.js'];
base.context = resolve('examples/05-absolute-paths/src');
base.output = {
  filename: 'bundle.js',
  path: resolve('examples/05-absolute-paths/build'),
};
base.module.rules[0] = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
    {
      loader: 'auto-ngtemplate-loader',
      options: {
        variableName: 'autoNgTemplateLoaderTemplate',
        pathResolver: (p) => p.replace(/src/, '..').substring(1),
      },
    },
  ],
};

module.exports = base;
