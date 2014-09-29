/* -----------------------------------------
 App Config
 ----------------------------------------- */

angular.module('ng_mario.globals', [])

.value('globals', {
  'pageTitle': '',
  focus: function() {
    window.focus();
  }
})

;
