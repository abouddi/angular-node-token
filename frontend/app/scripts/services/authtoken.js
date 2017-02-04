'use strict';

angular.module('angularNodeTokenApp').factory('authToken', function($window) {
  var storage = $window.localStorage;
  var cachedToken;
  return {
      setToken: function(token) {
        cachedToken = token;
        storage.setToken('userToken', token);
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem('userToken');
        }

        return cachedToken;
      },
      isAuthenticated: function() {
        return !!this.getToken(); // get the result cast it to bool and then invert it
      }
  };
});
