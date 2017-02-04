'use strict';

angular.module('angularNodeTokenApp').factory('authToken', function($window) {
  var storage = $window.localStorage;
  var cachedToken;
  var userToken = 'userToken';
  var authToken = {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }

        return cachedToken;
      },
      isAuthenticated: function() {
        return !!authToken.getToken(); // get the result cast it to bool and then invert it
      },
      removeToken: function() {
        cachedToken = null;
        storage.removeItem(userToken);
      }
  }

  return authToken;
});
