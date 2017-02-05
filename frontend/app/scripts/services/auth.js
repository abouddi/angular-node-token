'use strict';

angular.module('angularNodeTokenApp').service('auth', function auth($http, API_URL, authToken, $state, $window, $q) {

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

  var urlBuilder = [];
  var clientId = '163315848451-usfkboqhaj9h3alsfp5ntk9j77jtsju6.apps.googleusercontent.com' ;

  urlBuilder.push(
    'response_type=code',
    'client_id=' + clientId,
    'redirect_uri=' + window.location.origin,
    'scope=profile email'
  )

  this.googleAuth = function() {

    var url = "https://accounts.google.com/o/oauth2/auth?" + urlBuilder.join('&');
    var options = "width=500, height=500, left=" + ($window.outerWidth - 500) / 2 +
                  ",top=" + ($window.outerHeight - 500) / 2.5;

    var deferred = $q.defer();

    var popup = $window.open(url, '', options);
    $window.focus();

    $window.addEventListener('message', function(event) {
      if(event.origin === $window.location.origin) {
        var code = event.data;
        popup.close();

        $http({
          method: 'POST',
          url: API_URL + 'auth/google',
          data: {
            code: code,
            clientId: clientId,
            redirectUri: $window.location.origin
          }
        })
        .then(function(res) {
          deferred.resolve(authSuccessful(res));
        }, authError);
      }
    })

    return deferred.promise;
  }

});
