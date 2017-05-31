const { findTemplateUrl } = require('./util');

module.exports = function autoNgTemplateLoader(source, map) {
    if (/^const template/.test(source)) {
        this.callback(null, source, map);
        return;
    }

    const templateUrl = findTemplateUrl(source.split('\n'));

    console.log(source, map, templateUrl); // eslint-disable-line no-console
    this.callback(null, source, map);
};
