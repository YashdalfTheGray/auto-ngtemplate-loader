const test = require('ava');

const { replaceTemplateUrl } = require('./util');
const {
    multipleDirectives,
    multipleDirectivesReplaced,
    testService,
    nonStringTemplate,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
} = require('./testdata');

const variableName = 'autoNgTemplateLoaderTemplate';


test('replaceTemplateUrl returns the file if there is not a template', (t) => {
    t.deepEqual(
        replaceTemplateUrl(variableName, testService.split('\n')), testService.split('\n')
    );
});

test('replaceTemplateUrl returns the file if there is a non-string template', (t) => {
    t.deepEqual(
        replaceTemplateUrl(variableName, nonStringTemplate.split('\n')), nonStringTemplate.split('\n')
    );
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl', (t) => {
    t.deepEqual(
        replaceTemplateUrl(variableName, testDirective1.split('\n')), testDirective1Replaced.split('\n')
    );
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl (another case)', (t) => {
    t.deepEqual(replaceTemplateUrl(
        variableName, testDirective2.split('\n')), testDirective2Replaced.split('\n')
    );
});

test('replaceTemplateUrl can handle multiple templateUrls in a file', (t) => {
    t.deepEqual(
        replaceTemplateUrl(variableName, multipleDirectives.split('\n')), multipleDirectivesReplaced.split('\n')
    );
});
