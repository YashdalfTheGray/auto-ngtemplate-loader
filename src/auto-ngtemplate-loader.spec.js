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

test('loader works with an query object', (t) => {
    t.plan(2);

    const context = {
        callback: function callback(err, source) {
            t.is(err, null);
            t.deepEqual(source, testDirective1Replaced('testVariable'));
        },
        query: {
            variableName: 'testVariable'
        }
    };

    loader.call(context, testDirective1);
});

test('loader works with an query string', (t) => {
    t.plan(2);

    const context = {
        callback: function callback(err, source) {
            t.is(err, null);
            t.deepEqual(source, testDirective1Replaced('testVariable'));
        },
        query: '?variableName=testVariable'
    };

    loader.call(context, testDirective1);
});

test('loader throws an error when variable is not valid', (t) => {
    t.plan(2);

    const context = {
        callback: function callback(err, source) {
            t.deepEqual(err, new Error('Specified variable name is not valid'));
            t.is(source, null);
        },
        query: {
            variableName: 'test variable'
        }
    };

    loader.call(context, testDirective1);
});
