const testService = `angular.module('test')
.service('myService', () => ({
    getDescription: () => 'test description'
}));`;

const nonStringTemplate = `const template = require('./myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: template,
    scope: {
        value: '='
    }
}));`;

const testDirective1 = `angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: './myTemplate.html',
    scope: {
        value: '='
    }
}));`;

const testDirective1Replaced = `const autoNgTemplateLoaderTemplate1 = require('./myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: autoNgTemplateLoaderTemplate1,
    scope: {
        value: '='
    }
}));`;

const testDirective2 = `angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    bindToController: true,
    scope: {
        value: '='
    },
    templateUrl:'./anotherTemplate.html'
}));`;

const testDirective2Replaced = `const autoNgTemplateLoaderTemplate1 = require('./anotherTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    bindToController: true,
    scope: {
        value: '='
    },
    templateUrl:autoNgTemplateLoaderTemplate1
}));`;

const multipleDirectives = `angular.module('test')
.directive('whatever', () => ({
    templateUrl: './helloWorld.html'
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: './helloWorldAgain.html'
}));`;

const multipleDirectivesReplaced = `const autoNgTemplateLoaderTemplate1 = require('./helloWorld.html');
const autoNgTemplateLoaderTemplate2 = require('./helloWorldAgain.html');

angular.module('test')
.directive('whatever', () => ({
    templateUrl: autoNgTemplateLoaderTemplate1
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: autoNgTemplateLoaderTemplate2
}));`;

module.exports = {
    multipleDirectives,
    multipleDirectivesReplaced,
    testService,
    nonStringTemplate,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
};
