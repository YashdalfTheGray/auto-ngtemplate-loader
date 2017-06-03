const test = require('ava');

const { replaceTemplateUrl } = require('./util');
const {
    multipleDirectives,
    multipleDirectivesReplaced,
    testService,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
} = require('./testdata');


test('replaceTemplateUrl returns the file if there is not a template', (t) => {
    t.deepEqual(replaceTemplateUrl(testService.split('\n')), testService.split('\n'));
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl', (t) => {
    t.deepEqual(replaceTemplateUrl(testDirective1.split('\n')), testDirective1Replaced.split('\n'));
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl (another case)', (t) => {
    t.deepEqual(replaceTemplateUrl(testDirective2.split('\n')), testDirective2Replaced.split('\n'));
});

test('replaceTemplateUrl can handle multiple templateUrls in a file', (t) => {
    t.deepEqual(replaceTemplateUrl(multipleDirectives.split('\n')), multipleDirectivesReplaced.split('\n'));
});
