/* global MyCtrl:false */

export const aControllerName = 'aController';
export function AController(myService) {
    MyCtrl.message = myService.getText();
}
AController.$inject = ['myService'];

export const aDirectiveName = 'aDirective';
export function aDirective() {
    return {
        restrict: 'E',
        controller: 'MyController',
        controllerAs: 'MyCtrl',
        scope: {
            foo: '='
        },
        bindToController: true,
        templateUrl: 'oneDirective/app.tpl.html'
    };
}
