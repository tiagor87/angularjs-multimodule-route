(function(angular) {
  'use strict';

  angular.module('home').config([
    'routeConfigProvider',
    'authGuardServiceProvider',
    function(routeConfigProvider, authGuardServiceProvider) {
      routeConfigProvider.add('forbidden', '/forbidden', {
        template: 'Access Forbidden'
      });
      routeConfigProvider.add('home', '/', {
        templateUrl: 'home/home.controller.html',
        controller: 'HomeController',
        resolveRedirectTo: authGuardServiceProvider.canActivate
      });
    }
  ]);
})(window.angular);
