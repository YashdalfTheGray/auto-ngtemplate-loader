/* global angular:false MyCtrl:false */

angular
  .module('myApp', [])
  .service('myService', () => ({
    getText: () => 'Test text',
  }))
  .controller('MyController', [
    'myService',
    (myService) => {
      MyCtrl.message = myService.getText();
    },
  ])
  .directive('myDirective', () => ({
    restrict: 'E',
    controller: 'MyController',
    controllerAs: 'MyCtrl',
    scope: {
      foo: '=',
    },
    bindToController: true,
    templateUrl: '../html/app.tpl.html',
  }));
