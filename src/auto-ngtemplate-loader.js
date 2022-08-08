const { escapeRegExp, get } = require('lodash');
const { isValid } = require('var-validator');
const { urlToRequest, getOptions } = require('loader-utils');

const { replaceTemplateUrl } = require('./util');

const getOptionsShim = (context) => {
  if (context.getOptions && context.getOptions instanceof Function) {
    return context.getOptions();
  }
  return getOptions(context);
};

/**
 * A loader that automatically replaces templateUrl in angularjs files
 * @param {string} source the incoming source code
 * @param {string} map the incoming source map
 * @this {import('webpack').LoaderContext}
 */
module.exports = function autoNgTemplateLoader(source, map) {
  let resolverFunc;
  let resolverFromConfig;
  const {
    variableName = 'autoNgTemplateLoaderTemplate',
    pathResolver = urlToRequest,
    useResolverFromConfig = false,
  } = getOptionsShim(this);

  if (useResolverFromConfig) {
    if (this.version > 1) {
      this.callback(
        new Error(
          'Resolver required to be passed as an option with Webpack v2'
        ),
        null,
        null
      );
      return;
    }

    resolverFromConfig = get(this, 'options.autoNgTemplateLoader.pathResolver');

    if (!resolverFromConfig) {
      this.callback(
        new Error(
          'function pathResolver not found in autoNgTemplateLoader in the config'
        ),
        null,
        null
      );
      return;
    }

    resolverFunc = resolverFromConfig;
  } else {
    resolverFunc = pathResolver;
  }

  if (!isValid(variableName)) {
    this.callback(
      new Error('Specified variable name is not valid'),
      null,
      null
    );
    return;
  }

  if (new RegExp(`^const ${escapeRegExp(variableName)}`).test(source)) {
    this.callback(null, source, map);
    return;
  }

  try {
    const newSource = replaceTemplateUrl(
      variableName,
      source.split('\n'),
      resolverFunc
    ).join('\n');
    this.callback(null, newSource, map);
  } catch (e) {
    this.callback(e, null, null);
  }
};
