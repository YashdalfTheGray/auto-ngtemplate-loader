const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./index.js'];
base.context = resolve('examples/03-multiple-directives-one-file/src');
base.output = {
  filename: 'bundle.js',
  path: resolve('examples/03-multiple-directives-one-file/build'),
};

module.exports = base;
