/* global angular:false */
import { aServiceName, aService } from './aService';
import {
  aControllerName,
  AController,
  aDirectiveName,
  aDirective,
} from './aDirective';
import { otherServiceName, otherService } from './otherService';
import {
  otherControllerName,
  OtherController,
  otherDirectiveName,
  OtherDirective,
} from './otherDirective';

angular
  .module('myApp', [])
  .service(aServiceName, aService)
  .controller(aControllerName, AController)
  .directive(aDirectiveName, aDirective);

angular
  .module('myApp', [])
  .service(otherServiceName, otherService)
  .controller(otherControllerName, OtherController)
  .directive(otherDirectiveName, OtherDirective);
