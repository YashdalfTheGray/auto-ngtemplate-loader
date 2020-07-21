const test = require('ava');
const { urlToRequest } = require('loader-utils');

const loader = require('./auto-ngtemplate-loader');
const { testDirective1, testDirective1Replaced } = require('./testdata');

test('loader works on files that need templates replaced', (t) => {
  t.plan(2);

  const context = {
    callback(err, source) {
      t.is(err, null);
      t.deepEqual(source, testDirective1Replaced());
    },
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
      variableName: 'testVariable',
    },
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
    query: '?variableName=testVariable',
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
      variableName: 'test variable',
    },
  };

  loader.call(context, testDirective1);
});

test('loader throws an error if webpack v2 and useResolverFromConfig is true', (t) => {
  t.plan(2);

  const context = {
    callback: function callback(err, source) {
      t.deepEqual(
        err,
        new Error('Resolver required to be passed as an option with Webpack v2')
      );
      t.is(source, null);
    },
    query: {
      variableName: 'testVariable',
      useResolverFromConfig: true,
    },
    version: 2,
  };

  loader.call(context, testDirective1);
});

test('loader throws an error if useResolverFromConfig is true and no resolver found', (t) => {
  t.plan(2);

  const context = {
    callback: function callback(err, source) {
      t.deepEqual(
        err,
        new Error(
          'function pathResolver not found in autoNgTemplateLoader in the config'
        )
      );
      t.is(source, null);
    },
    query: {
      variableName: 'testVariable',
      useResolverFromConfig: true,
    },
    version: 1,
  };

  loader.call(context, testDirective1);
});

test('accepts a function from the config if webpack v1', (t) => {
  t.plan(2);

  const context = {
    callback: function callback(err, source) {
      t.is(err, null);
      t.is(source, testDirective1Replaced('testVariable'));
    },
    query: {
      variableName: 'testVariable',
      useResolverFromConfig: true,
    },
    version: 1,
    options: {
      autoNgTemplateLoader: {
        pathResolver: urlToRequest,
      },
    },
  };

  loader.call(context, testDirective1);
});
