(function(angular) {
  'use strict';

  angular.module('shared').provider('routeConfig', [
    function() {
      var provider = this;
      this.routes = [];

      this.add = function(name, endpoint, route) {
        this.routes.push({
          name: name,
          endpoint: endpoint,
          route: route
        });
      };

      this.updateBaseEndpoint = function(name, baseEndpoint) {
        for (var route of provider.routes) {
          if (route.name === name) {
            route.endpoint = baseEndpoint + route.endpoint;
          }
        }
      };

      this.configure = function($routeProvider) {
        for (var route of provider.routes) {
          $routeProvider.when(route.endpoint, route.route);
        }
      };

      this.$get = function() {};
    }
  ]);
})(window.angular);
