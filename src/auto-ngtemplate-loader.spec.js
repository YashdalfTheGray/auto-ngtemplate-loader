const test = require('ava');

const loader = require('./auto-ngtemplate-loader');
const { testDirective1, testDirective1Replaced } = require('./testdata');

test('loader works on files that need templates replaced', (t) => {
    t.plan(2);

    const context = {
        callback(err, source) {
            t.is(err, null);
            t.deepEqual(source, testDirective1Replaced());
        }
    };

    loader.call(context, testDirective1);
});
