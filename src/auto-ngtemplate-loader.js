const { replaceTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    if (/^const template/.test(source)) {
        this.callback(null, source, map);
        return;
    }

    const newSource = replaceTemplateUrl(source.split('\n')).join('\n');

    this.callback(null, newSource, map);
};
