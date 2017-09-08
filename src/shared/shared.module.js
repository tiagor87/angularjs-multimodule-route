(function(angular) {
  'use strict';

  angular.module('shared', []).config([
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
})(window.angular);
