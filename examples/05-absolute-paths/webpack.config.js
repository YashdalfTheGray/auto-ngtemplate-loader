const { resolve } = require('path');

const base = require('../../webpack.base.config');

base.entry = ['./js/app.js'];
base.context = resolve('examples/05-absolute-paths/src');
base.output = {
    filename: 'bundle.js',
    path: resolve('examples/05-absolute-paths/build')
};

module.exports = base;
