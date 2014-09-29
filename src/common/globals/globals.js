/* -----------------------------------------
 App Config
 ----------------------------------------- */

angular.module('meetjs_mario.globals', [])

.value('globals', {
  'pageTitle': '',
  focus: function() {
    window.focus();
  }
})

;
