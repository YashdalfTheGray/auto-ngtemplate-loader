/* global ACtrl:false */

export const aControllerName = 'aController';
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
