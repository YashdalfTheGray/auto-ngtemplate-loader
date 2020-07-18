const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./index.js'];
base.context = resolve('examples/02-many-directives/src');
base.output = {
  filename: 'bundle.js',
  path: resolve('examples/02-many-directives/build'),
};

module.exports = base;
