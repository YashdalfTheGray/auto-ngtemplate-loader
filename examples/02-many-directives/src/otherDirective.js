/* global OtherCtrl:false */

export const otherControllerName = 'OtherController';
export function OtherController(otherService) {
  OtherCtrl.description = otherService.getDescription();
}
OtherController.$inject = ['otherService'];

export const otherDirectiveName = 'otherDirective';
export function OtherDirective() {
  return {
    restrict: 'E',
    controller: 'OtherController',
    controllerAs: 'OtherCtrl',
    templateUrl: 'otherDirective.tpl.html',
    scope: {
      foo: '=',
    },
    bindToController: true,
  };
}
