'use strict';

angular.module('angularNodeTokenApp').factory('authInterceptor', function(authToken) {
  return {
    request: function(config) {
      var token = authToken.getToken();

      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }

      return config;
    },
    response: function(response) {
      return response;
    }
  };
});
