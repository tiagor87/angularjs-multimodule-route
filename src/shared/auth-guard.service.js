(function(angular) {
  'use strict';

  angular.module('shared').provider('authGuardService', function() {
    this.canActivate = [
      'authService',
      function(authService) {
        return authService.isAuthenticated().then(function(isAuthenticated) {
          return isAuthenticated ? undefined : '/forbidden';
        });
      }
    ];

    this.$get = function() {};
  });
})(window.angular);
