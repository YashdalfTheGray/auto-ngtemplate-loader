function replaceTemplateUrl(lines) {
    const regEx = /(^\s*templateUrl:\s*)['"](.*)['"](,*)$/;
    const lineNumbers = lines.reduce((result, line, i) => (/templateUrl/.test(line) ? result.concat(i) : result), []);

    if (!lineNumbers.length) {
        return lines;
    }

    const templateRequires = lineNumbers.map((lineNumber, i) => {
        const [, , templateUrl] = regEx.exec(lines[lineNumber]);
        const lineReplacement = lines[lineNumber].replace(regEx, `$1template${i + 1}$3`);

        return {
            templateUrl,
            lineNumber,
            lineReplacement
        };
    });

    const updatedLines = lines;

    templateRequires.forEach((x) => {
        updatedLines[x.lineNumber] = x.lineReplacement;
    });

    return [
        ...templateRequires.map((x, i) => `const template${i + 1} = require('${x.templateUrl}');`),
        ``,
        ...updatedLines
    ];
}

module.exports = {
    replaceTemplateUrl
};
