const loaderUtils = require('loader-utils');
const { escapeRegExp } = require('lodash');
const { isValid } = require('var-validator');

const { replaceTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    const {
        variableName = 'autoNgTemplateLoaderTemplate',
        pathResolver,
        useResolverFromConfig = false
    } = loaderUtils.getOptions(this) || {};

    if (useResolverFromConfig && this.version > 1) {
        this.callback(new Error('Resolver required to be passed as an option with Webpack v2'), null, null);
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

    try {
        const newSource = replaceTemplateUrl(variableName, source.split('\n'), pathResolver).join('\n');
        this.callback(null, newSource, map);
    }
    catch (e) {
        this.callback(e, null, null);
    }
};
