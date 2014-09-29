angular.module( 'meetjs_mario.home', [
  'meetjs_mario.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/home', {
      templateUrl : 'home/home.tpl.html',
      controller  : 'HomeCtrl'
    });
})

.controller( 'HomeCtrl', function( $scope, $rootScope, globals, route, mario, reveal ) {
  globals.pageTitle = 'Home | meet.js' ;

  mario.ready()
    .then(function() {
      mario.pause();
      globals.focus();

      reveal.start()
        .then(function() {
          route.path('/game');
        });
    });


})

;

