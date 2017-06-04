const { replaceTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    if (/^const autoNgTemplateLoaderTemplate/.test(source)) {
        this.callback(null, source, map);
        return;
    }

    const newSource = replaceTemplateUrl('autoNgTemplateLoaderTemplate', source.split('\n')).join('\n');

    this.callback(null, newSource, map);
};
