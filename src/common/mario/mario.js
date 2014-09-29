angular.module('mario', [])

  .service('mario', function ($q) {
    var _root = this;

    var ready = $q.defer();
    this.ready = function() {
      return ready.promise;
    };
    this.readyResolve = function() {
      ready.resolve();
    };

    this.focus = function() {
      $('iframe:first')[0].contentWindow.focus();
    };

    _root.ready()
      .then(
        function() { //success
          _root.game = window.game;
          _root.pause = window.game.controls.keyup.right && window.game.controls.keyup.up && window.game.controls.keyup.left && window.game.controls.keydown.pause;
          _root.resume = window.game.controls.keyup.pause;
        }
      );
  })

  .directive('marioFrame', function (route, mario) {
    return {
      link: function(scope, element) {
        $(function() {
          element.load(function(){
            mario.readyResolve();
            window.start();
            element.contents().find( 'body' ).on( 'mario_connection', function(eventData) {
              scope.$apply(function() {
                route.path(eventData.originalEvent.detail);
                console.log('mario_connection: ', eventData.originalEvent.detail);
              });
            });
          });
        });
      }
    };
  })

;
