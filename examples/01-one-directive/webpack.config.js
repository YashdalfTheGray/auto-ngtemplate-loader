const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./app.js'];
base.context = resolve('examples/one-directive/src');
base.output = {
    filename: 'bundle.js',
    path: resolve('examples/one-directive/build')
};

module.exports = base;
