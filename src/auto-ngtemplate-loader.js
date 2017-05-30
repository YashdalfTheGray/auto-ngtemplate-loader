module.exports = function autoNgTemplateLoader(source, map) {
    console.log(source, map); // eslint-disable-line no-console
    this.callback(null, source, map);
};
