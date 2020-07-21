/* global ACtrl:false, BCtrl: false */

export const aControllerName = 'BController';
export function AController(myService) {
  ACtrl.message = myService.getText();
}
AController.$inject = ['myService'];

export const aDirectiveName = 'aDirective';
export function aDirective() {
  return {
    restrict: 'E',
    controller: 'AController',
    controllerAs: 'ACtrl',
    scope: {
      foo: '=',
    },
    bindToController: true,
    templateUrl: 'aDirective.tpl.html',
  };
}

export const bControllerName = 'BController';
export function BController(myService) {
  BCtrl.message = myService.getMoreText();
}
BController.$inject = ['myService'];

export const bDirectiveName = 'bDirective';
export function bDirective() {
  return {
    restrict: 'E',
    controller: 'BController',
    controllerAs: 'BCtrl',
    scope: {
      bar: '=',
    },
    bindToController: true,
    templateUrl: 'bDirective.tpl.html',
  };
}
