const { urlToRequest } = require('loader-utils');

function replaceTemplateUrl(variableName, lines) {
    const regEx = /(^\s*templateUrl:\s*)['"](.*)['"](,*)$/;
    const lineNumbers = lines.reduce((result, line, i) => (/templateUrl/.test(line) ? result.concat(i) : result), []);

    if (!lineNumbers.length) {
        return lines;
    }

    const templateRequires = lineNumbers.map((lineNumber, i) => {
        const [, , templateUrl] = regEx.exec(lines[lineNumber]) || [];

        if (!templateUrl) {
            return null;
        }

        const lineReplacement = lines[lineNumber].replace(regEx, `$1${variableName}${i + 1}$3`);

        return {
            templateUrl,
            lineNumber,
            lineReplacement
        };
    }).filter(i => i !== null);

    if (templateRequires.length === 0) {
        return lines;
    }

    const updatedLines = lines;

    templateRequires.forEach((x) => {
        updatedLines[x.lineNumber] = x.lineReplacement;
    });

    return [
        ...templateRequires.map((x, i) => `const ${variableName}${i + 1} = require('${urlToRequest(x.templateUrl)}');`),
        ``,
        ...updatedLines
    ];
}

module.exports = {
    replaceTemplateUrl
};
