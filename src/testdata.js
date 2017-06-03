const testService = `angular.module('test')
.service('myService', () => ({
    getDescription: () => 'test description'
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

const testDirective1Replaced = `const template1 = require('./myTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    templateUrl: template1,
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

const testDirective2Replaced = `const template1 = require('./anotherTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    bindToController: true,
    scope: {
        value: '='
    },
    templateUrl:template1
}));`;

const multipleDirectives = `angular.module('test')
.directive('whatever', () => ({
    templateUrl: './helloWorld.html'
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: './helloWorldAgain.html'
}));`;

const multipleDirectivesReplaced = `const template1 = require('./helloWorld.html');
const template2 = require('./helloWorldAgain.html');

angular.module('test')
.directive('whatever', () => ({
    templateUrl: template1
}));

angular.module('test2')
.directive('whatever2', () => ({
    templateUrl: template2
}));`;

module.exports = {
    multipleDirectives,
    multipleDirectivesReplaced,
    testService,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
};
