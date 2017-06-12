const loaderUtils = require('loader-utils');
const { escapeRegExp } = require('lodash');
const { isValid } = require('var-validator');

const { replaceTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    const { variableName = 'autoNgTemplateLoaderTemplate' } = loaderUtils.getOptions(this) || {};

    if (!isValid(variableName)) {
        this.callback(new Error('Specified variable name is not valid'), null, null);
        return;
    }

    if (new RegExp(`^const ${escapeRegExp(variableName)}`).test(source)) {
        this.callback(null, source, map);
        return;
    }

    const newSource = replaceTemplateUrl(variableName, source.split('\n')).join('\n');

    this.callback(null, newSource, map);
};
