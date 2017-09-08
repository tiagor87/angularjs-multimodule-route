(function(angular) {
  'use strict';

  angular.module('shared').factory('authService', [
    '$q',
    function($q) {
      var AuthService = function() {};
      AuthService.prototype.isAuthenticated = function() {
        return $q.resolve(true);
      };
      return new AuthService();
    }
  ]);
})(window.angular);
