angular.module('meetjs_mario.route', ['ngRoute'])

.provider('route', function($routeProvider) {
  // In the provider function, you cannot inject any
  // service or factory. This can only be done at the
  // "$get" method.
  var _root = this;

  this.when = function(path, config) {
    $routeProvider.when(path, config);
    return this;
  };
  this.otherwise = function(opts) {
    if (opts && opts.path) {
      $routeProvider.otherwise({ redirectTo: opts.path });
    }
    return this;
  };
  this.name = [];
  this.is = function(name) {
    return this.name.indexOf(name) > -1;
  };
  this.params = {};

  this.$get = function($location) {
    return {
      //getter
      when: _root.when,
      otherwise: _root.otherwise,
      name: _root.name,
      is: _root.is,
      params: _root.params,
      path: function(path) {
        //setter
        if (path) {
          $location.path(path);
        }
        //getter
        else {
          return $location.path();
        }
      }
    };
  };
})

.run( function ( route, $rootScope, $routeParams, $location ) {
  $rootScope.route = route;

  /**
   * route events
   */
  $rootScope
    .$on('$routeChangeStart', function() {
      $rootScope.$broadcast('routeChangeStart');
    });
  $rootScope
    .$on('$routeChangeSuccess', function() {
      //set current route name
      route.name = _.compact($location.path().split('/'));
      route.params = $routeParams;
      //brodcast event to $rootScope
      $rootScope.$broadcast('routeChangeSuccess');
    });
  $rootScope
    .$on('$routeChangeError', function() {
      $rootScope.$broadcast('routeChangeError');
    });
})

;
