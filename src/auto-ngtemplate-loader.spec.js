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

test('loader works with a query object', (t) => {
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

test('loader throws an error when the resolver function does not return a string', (t) => {
    t.plan(2);

    const context = {
        callback: function callback(err, source) {
            t.deepEqual(err, new Error('The path resolver function does not return a string'));
            t.is(source, null);
        },
        query: {
            variableName: 'testVariable',
            pathResolver: () => 1
        }
    };

    loader.call(context, testDirective1);
});

test('loader accepts a function returning a string as the pathResolver', (t) => {
    t.plan(1);

    const context = {
        callback: function callback(err) {
            t.is(err, null);
        },
        query: {
            variableName: 'testVariable',
            pathResolver: p => `'string'${p}`
        }
    };

    loader.call(context, testDirective1);
});
