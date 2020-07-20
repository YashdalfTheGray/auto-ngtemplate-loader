/* global angular:false */
import { aServiceName, aService } from './service';
import {
  aControllerName,
  AController,
  aDirectiveName,
  aDirective,
  bControllerName,
  BController,
  bDirectiveName,
  bDirective,
} from './twoDirectives';

angular
  .module('myApp', [])
  .service(aServiceName, aService)
  .controller(aControllerName, AController)
  .directive(aDirectiveName, aDirective)
  .controller(bControllerName, BController)
  .Directive(bDirectiveName, bDirective);
