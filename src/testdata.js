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

const testDirective1Replaced = [
    `const template = require('ngtemplate-loader!html-loader!./myTemplate.html');`,
    ``,
    `angular.module('test')`,
    `.directive('myDirective', () => ({`,
    `\trestrict: 'AE',`,
    `\tcontroller: 'MyController',`,
    `\tcontrollerAs: 'MyCtrl',`,
    `\tbindToController: true,`,
    `\ttemplateUrl: template,`,
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

const testDirective2Replaced = [
    `const template = require('ngtemplate-loader!html-loader!./anotherTemplate.html');`,
    ``,
    `angular.module('test')`,
    `.directive('myDirective', () => ({`,
    `\trestrict: 'AE',`,
    `\tcontroller: 'MyController',`,
    `\tcontrollerAs: 'MyCtrl',`,
    `\tbindToController: true,`,
    `\tscope: {`,
    `\t\tvalue: '='`,
    `\t},`,
    `\ttemplateUrl:template`,
    `}));`
];

module.exports = {
    testService,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
};
