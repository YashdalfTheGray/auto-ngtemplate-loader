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

const testDirective1Replaced = `const template = require('./myTemplate.html');

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

const testDirective2Replaced = `const template = require('./anotherTemplate.html');

angular.module('test')
.directive('myDirective', () => ({
    restrict: 'AE',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    bindToController: true,
    scope: {
        value: '='
    },
    templateUrl:template
}));`;

module.exports = {
    testService,
    testDirective1,
    testDirective1Replaced,
    testDirective2,
    testDirective2Replaced
};
