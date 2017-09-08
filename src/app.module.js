(function(angular) {
  'use strict';

  angular.module('app', ['shared', 'home']).config([
    'routeConfigProvider',
    '$routeProvider',
    function(routeConfigProvider, $routeProvider) {
      routeConfigProvider.updateBaseEndpoint('home', '/home');
      routeConfigProvider.configure($routeProvider);
    }
  ]);
})(window.angular);
