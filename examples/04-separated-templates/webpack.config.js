const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./js/app.js'];
base.context = resolve('examples/04-separated-templates/src');
base.output = {
  filename: 'bundle.js',
  path: resolve('examples/04-separated-templates/build'),
};

module.exports = base;
