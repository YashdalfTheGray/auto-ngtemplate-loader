/**
 * replaceTemplateUrl finds and replaces all instances of templateUr
 * with a webpack compatible require automatically.
 * @param {string} variableName the name of the replacement variable
 * @param {Array<string>} lines the individual lines of the source code
 * @param {Function} resolver function to use to resolve the templateUrl
 * @returns the updated lines of source code
 */
function replaceTemplateUrl(variableName, lines, resolver) {
  const regEx = /(^\s*templateUrl\s*:\s*)['"](.*)['"](,*)(\s*)$/;
  const lineNumbers = lines.reduce(
    (result, line, i) => (/templateUrl/.test(line) ? result.concat(i) : result),
    []
  );

  if (!lineNumbers.length) {
    return lines;
  }

  const templateRequires = lineNumbers
    .map((lineNumber, i) => {
      const [, , templateUrl] = regEx.exec(lines[lineNumber]) || [];
      const lineVariable = `${variableName}${i + 1}`;

      if (!templateUrl) {
        return null;
      }

      if (resolver && typeof resolver(templateUrl) !== 'string') {
        throw new Error(
          `Expected path resolver to return string for ${templateUrl}`
        );
      }

      const lineReplacement = lines[lineNumber].replace(
        regEx,
        `$1${lineVariable}$3`
      );

      return {
        lineVariable,
        templateUrl,
        lineNumber,
        lineReplacement,
      };
    })
    .filter((i) => i !== null);

  if (templateRequires.length === 0) {
    return lines;
  }

  const updatedLines = lines;

  templateRequires.forEach((x) => {
    updatedLines[x.lineNumber] = x.lineReplacement;
  });

  return [
    ...templateRequires.map(
      (x) => `const ${x.lineVariable} = require('${resolver(x.templateUrl)}');`
    ),
    ``,
    ...updatedLines,
  ];
}

module.exports = {
  replaceTemplateUrl,
};
