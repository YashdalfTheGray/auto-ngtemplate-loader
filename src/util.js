function replaceTemplateUrl(lines) {
    const regEx = /(^\s*templateUrl:\s*)('|")(.*)('|")(,*)$/;

    const lineNumber = lines.reduce((result, line, i) => (/templateUrl/.test(line) ? i : result), -1);
    const [, , , templateUrl] = regEx.exec(lines[lineNumber]);

    return [
        `const template = require('ngtemplate-loader!html-loader!${templateUrl}');`,
        ``,
        ...lines.slice(0, lineNumber),
        lines[lineNumber].replace(regEx, '$1template$5'),
        ...lines.slice(lineNumber + 1)
    ];
}

module.exports = {
    replaceTemplateUrl
};
