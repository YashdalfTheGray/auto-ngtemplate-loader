/* global angular:false */
import { aServiceName, aService } from './aService';
import { aControllerName, AController, aDirectiveName, aDirective } from './aDirective';

angular.module('myApp', [])
.service(aServiceName, aService)
.controller(aControllerName, AController)
.directive(aDirectiveName, aDirective);
