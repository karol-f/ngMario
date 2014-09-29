angular.module( 'ng_mario.learned', [
  'ng_mario.route'
])

.config(function( routeProvider ) {
  routeProvider
    .when('/learned/1', {
      templateUrl : 'learned/learned.1.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/2', {
      templateUrl : 'learned/learned.2.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/3', {
      templateUrl : 'learned/learned.3.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/4', {
      templateUrl : 'learned/learned.4.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/5', {
      templateUrl : 'learned/learned.5.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/6', {
      templateUrl : 'learned/learned.6.tpl.html',
      controller  : 'LearnedCtrl'
    })
    .when('/learned/7', {
      templateUrl : 'learned/learned.7.tpl.html',
      controller  : 'LearnedCtrl'
    })
  ;
})

.controller( 'LearnedCtrl', function( $scope, $rootScope, globals, route, mario, reveal ) {
  globals.pageTitle = 'Learned | meet.js' ;

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

