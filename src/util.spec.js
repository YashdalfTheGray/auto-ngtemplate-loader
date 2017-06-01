const test = require('ava');
const { findTemplateUrl } = require('./util');

const testService = [
    `angular.module('test')`,
    `.service('myService', () => ({`,
    `\tgetDescription: () => 'test description'`,
    `}));`
];

const testDirective1 = [
    `angular.module('test')`,
    `.directive('myDirective', () => ({`,
    `\trestrict: 'AE',`,
    `\tcontroller: 'MyController',`,
    `\tcontrollerAs: 'MyCtrl',`,
    `\tbindToController: true,`,
    `\ttemplateUrl: './myTemplate.html',`,
    `\tscope: {`,
    `\t\tvalue: '='`,
    `\t}`,
    `}));`
];

const testDirective2 = [
    `angular.module('test')`,
    `.directive('myDirective', () => ({`,
    `\trestrict: 'AE',`,
    `\tcontroller: 'MyController',`,
    `\tcontrollerAs: 'MyCtrl',`,
    `\tbindToController: true,`,
    `\tscope: {`,
    `\t\tvalue: '='`,
    `\t},`,
    `\ttemplateUrl:'./anotherTemplate.html'`,
    `}));`
];

test('findTemplateUrl returns undefined when there is no templateUrl', (t) => {
    t.is(findTemplateUrl(testService), undefined);
});

test('findTemplateUrl returns the url when there is a templateUrl', (t) => {
    t.is(findTemplateUrl(testDirective1), './myTemplate.html');
});

test('findTemplateUrl returns the url when there is a templateUrl', (t) => {
    t.is(findTemplateUrl(testDirective2), './anotherTemplate.html');
});
