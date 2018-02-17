const loaderUtils = require('loader-utils');
const { escapeRegExp } = require('lodash');
const { isValid } = require('var-validator');

const { replaceTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    const { variableName = 'autoNgTemplateLoaderTemplate', pathResolver } = loaderUtils.getOptions(this) || {};

    if (pathResolver && typeof pathResolver(this.resourcePath) !== 'string') {
        this.callback(new Error('The path resolver function does not return a string'), null, null);
        return;
    }

    if (!isValid(variableName)) {
        this.callback(new Error('Specified variable name is not valid'), null, null);
        return;
    }

    if (new RegExp(`^const ${escapeRegExp(variableName)}`).test(source)) {
        this.callback(null, source, map);
        return;
    }

    const newSource = replaceTemplateUrl(variableName, source.split('\n'), pathResolver).join('\n');
    this.callback(null, newSource, map);
};
