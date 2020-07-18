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
  testDirective2Replaced,
  testDirective3,
  testDirective3Replaced,
  differentPath1,
  differentPath1Replaced,
  differentPath2,
  differentPath2Replaced,
} = require('./testdata');

const variableName = 'autoNgTemplateLoaderTemplate';

test('replaceTemplateUrl returns the file if there is not a template', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, testService.split('\n')),
    testService.split('\n')
  );
});

test('replaceTemplateUrl returns the file if there is a non-string template', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, nonStringTemplate.split('\n')),
    nonStringTemplate.split('\n')
  );
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, testDirective1.split('\n')),
    testDirective1Replaced().split('\n')
  );
});

test('replaceTemplateUrl returns the modified lines when there is a templateUrl (another case)', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, testDirective2.split('\n')),
    testDirective2Replaced().split('\n')
  );
});

test('replaceTemplateUrl returns the modified lines with spacing between templateUrl and colon', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, testDirective3.split('\n')),
    testDirective3Replaced().split('\n')
  );
});

test('replaceTemplateUrl handles multiple templateUrls in a file correctly', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, multipleDirectives.split('\n')),
    multipleDirectivesReplaced().split('\n')
  );
});

test('replaceTemplateUrl handles a different variable name correctly', (t) => {
  t.deepEqual(
    replaceTemplateUrl('myTemplate', multipleDirectives.split('\n')),
    multipleDirectivesReplaced('myTemplate').split('\n')
  );
});

test('replaceTemplateUrl handles a template in a different path', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, differentPath1.split('\n')),
    differentPath1Replaced().split('\n')
  );
});

test('replaceTemplateUrl handles a template in a subdirectory', (t) => {
  t.deepEqual(
    replaceTemplateUrl(variableName, differentPath2.split('\n')),
    differentPath2Replaced().split('\n')
  );
});

test('resolver not returning a string throws error', (t) => {
  t.throws(() =>
    replaceTemplateUrl(variableName, testDirective1.split('\n'), () => 1)
  );
});
