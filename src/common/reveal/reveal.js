angular.module('reveal', [])

  .service('reveal', function ($q) {
    var _root = this;

    var deffer = $q.defer();
    this.promise = function() {
      return deffer.promise;
    };
    this.promisePrepare = function() {
      deffer = $q.defer();
    };
    this.promiseResolve = function() {
      deffer.resolve();
    };

    this.start = function() {
      _root.promisePrepare();
      Reveal.initialize({
        // Display controls in the bottom right corner
        controls: false,

        // Display a presentation progress bar
        progress: false,

        // Display the page number of the current slide
        slideNumber: false,

//      keyboard: false,
        // Number of milliseconds between automatically proceeding to the
        // next slide, disabled when set to 0, this value can be overwritten
        // by using a data-autoslide attribute on your slides
        autoSlide: 0,

        // Transition style
        transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

        // Transition speed
        transitionSpeed: 'default', // default/fast/slow

        // Transition style for full page slide backgrounds
        backgroundTransition: 'default', // default/none/slide/concave/convex/zoom
        minScale: 0.5,
        maxScale: 2.0
      });
      Reveal.slide( 0 );

      return _root.promise();
    };

  })

  .run( function ( $rootScope, reveal ) {
    $('body').keydown(function(){
      if ( event.which === 39 && Reveal.isLastSlide() ) {
        $rootScope.$emit('slideshow:finished');
        reveal.promiseResolve();
      }
    });
  })

;
