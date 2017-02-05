'use strict';

angular.module('angularNodeTokenApp').service('auth', function auth($http, API_URL, authToken, $state) {

  function authSuccessful(res) {
    authToken.setToken(res.data.token);
    $state.go('main');
    return(res);
  }

  function authError(err) {
    throw err;
  }

  this.login = function(email, password) {
    return $http({
      method: 'POST',
      url: API_URL + 'login',
      data: {
        email: email,
        password:password
      }
    })
    .then(authSuccessful, authError);
  }

  this.register = function(email, password) {
    return $http({
      method: 'POST',
      url: API_URL + 'register',
      data: {
        email: email,
        password:password
      }
    })
    .then(authSuccessful, authError);
  }
});
