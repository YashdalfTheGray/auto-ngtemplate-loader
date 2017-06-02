const test = require('ava');

const { replaceTemplateUrl } = require('./util');
const { testDirective1, testDirective1Replaced, testDirective2, testDirective2Replaced } = require('./testdata');


test('replaceTemplateUrl returns the modified lines when there is a templateUrl', (t) => {
    t.deepEqual(replaceTemplateUrl(testDirective1), testDirective1Replaced);
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl (another case)', (t) => {
    t.deepEqual(replaceTemplateUrl(testDirective2), testDirective2Replaced);
});
