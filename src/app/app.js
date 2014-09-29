angular.module( 'ng_mario', [
  'ngRoute',
  'templates-app',
  'templates-common',

  'ng_mario.home',
  'ng_mario.game',
  'ng_mario.problems',
  'ng_mario.learned',
  'ng_mario.summary',

  'ng_mario.route',
  'ng_mario.globals',
  'mario',
  'reveal'
])

.config( function myAppConfig ( routeProvider ) {
  routeProvider
    .otherwise({ path: '/home' });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, globals ) {
  $scope.globals = globals;
  $scope._ = window._;

  function preloadImg(src) {
    $('<img/>')[0].src = src;
  }
  preloadImg('assets/images/super_mario.png');
  preloadImg('assets/images/feelings_about_angularjs_over_time.png');
  preloadImg('assets/images/meme.jpg');
  preloadImg('assets/images/karol.png');
  preloadImg('assets/images/goomba.png');
  preloadImg('assets/images/star.png');
})

;
