angular.module( 'meetjs_mario', [
  'ngRoute',
  'templates-app',
  'templates-common',

  'meetjs_mario.home',
  'meetjs_mario.game',
  'meetjs_mario.problems',
  'meetjs_mario.learned',
  'meetjs_mario.summary',

  'meetjs_mario.route',
  'meetjs_mario.globals',
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
