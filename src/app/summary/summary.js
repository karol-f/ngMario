angular.module( 'meetjs_mario.summary', [
  'meetjs_mario.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/summary', {
      templateUrl : 'summary/summary.tpl.html',
      controller  : 'SummaryCtrl'
    });
})

.controller( 'SummaryCtrl', function( $scope, $rootScope, globals, route, mario, reveal ) {
  globals.pageTitle = 'Summary | meet.js' ;

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

