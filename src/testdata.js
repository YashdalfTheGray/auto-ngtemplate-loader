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
    templateUrl: 'myTemplate.html',
    scope: {
        value: '='
    }
}));`;

const testDirective1Replaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('./myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: ${varName}1,
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
    templateUrl:'anotherTemplate.html'
}));`;

const testDirective2Replaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('./anotherTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    bindToController: true,
    scope: {
        value: '='
    },
    templateUrl:${varName}1
}));`;

const testDirective3 = `angular.module('test')
.directive('myDirective', () => ({
    restrict : 'AE',
    controller : 'MyController',
    controllerAs : 'MyCtrl',
    templateUrl : 'myTemplate.html',
    scope : {
        value: '='
    }
}));`;

const testDirective3Replaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('./myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict : 'AE',
    controller : 'MyController',
    controllerAs : 'MyCtrl',
    templateUrl : ${varName}1,
    scope : {
        value: '='
    }
}));`;

const multipleDirectives = `angular.module('test')
.directive('whatever', () => ({
    templateUrl: 'helloWorld.html'
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: 'helloWorldAgain.html'
}));`;

const multipleDirectivesReplaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('./helloWorld.html');
const ${varName}2 = require('./helloWorldAgain.html');

angular.module('test')
.directive('whatever', () => ({
    templateUrl: ${varName}1
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: ${varName}2
}));`;

const differentPath1 = `angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: '../html/myTemplate.html',
    scope: {
        value: '='
    }
}));`;

const differentPath1Replaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('../html/myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: ${varName}1,
    scope: {
        value: '='
    }
}));`;

const differentPath2 = `angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: 'html/myTemplate.html',
    scope: {
        value: '='
    }
}));`;

const differentPath2Replaced = (varName = 'autoNgTemplateLoaderTemplate') =>
  `const ${varName}1 = require('./html/myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: ${varName}1,
    scope: {
        value: '='
    }
}));`;

module.exports = {
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
};
