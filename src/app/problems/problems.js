angular.module( 'meetjs_mario.problems', [
  'meetjs_mario.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/problems/1', {
      templateUrl : 'problems/problems.1.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/2', {
      templateUrl : 'problems/problems.2.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/3', {
      templateUrl : 'problems/problems.3.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/4', {
      templateUrl : 'problems/problems.4.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/5', {
      templateUrl : 'problems/problems.5.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/6', {
      templateUrl : 'problems/problems.6.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/7', {
      templateUrl : 'problems/problems.7.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/8', {
      templateUrl : 'problems/problems.8.tpl.html',
      controller  : 'ProblemsCtrl'
    })
    .when('/problems/9', {
      templateUrl : 'problems/problems.9.tpl.html',
      controller  : 'ProblemsCtrl'
    })
  ;
})

.controller( 'ProblemsCtrl', function( $scope, $rootScope, globals, route, mario, reveal ) {
  globals.pageTitle = 'Problems | meet.js' ;

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

