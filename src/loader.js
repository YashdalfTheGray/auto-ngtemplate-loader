function AutoNgTemplatePlugin() {}

AutoNgTemplatePlugin.prototype.apply = function antpApply(compiler) {
    compiler.plugin('webpacksEventHook', (compilation, callback) => {
        console.log(compilation.assets); // eslint-disable-line no-console
        callback();
    });
};

module.exports = AutoNgTemplatePlugin;
