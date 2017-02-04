'use strict';

angular.module('angularNodeTokenApp')
  .service('alert', function alert($rootScope, $timeout) {
    var alerTimeout;
    return function(type, title, message, timeout) {
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        type: type,
        message: message,
        title: title
      };
      $timeout.cancel(alerTimeout);
      alerTimeout = $timeout(function() {
        $rootScope.alert.show = false;
      }, timeout || 2000);
    };
  });
