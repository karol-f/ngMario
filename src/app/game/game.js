angular.module( 'ng_mario.game', [
  'ng_mario.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/game', {
      templateUrl : 'game/game.tpl.html',
      controller  : 'GameCtrl'
    });
})

.controller( 'GameCtrl', function( $scope, globals, $timeout, route, mario ) {
  globals.pageTitle = 'Game on | meet.js' ;

  mario.ready()
    .then(
      function() { //success
        mario.focus();
        mario.resume();
      }
    );

})

;

