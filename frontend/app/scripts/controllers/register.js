'use strict';

angular.module('angularNodeTokenApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken) {
    $scope.submit = function() {

      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $http({
        method: 'POST',
        url: url,
        data: user
      })
      .then(function successCallback(response) {
        alert('success', 'Account Created!', 'Welcome, ' + response.data.user.email + '!');
        authToken.setToken(response.data.token);
      }, function errorCallback(response) {
        alert('warning', 'Opps!', 'Could not register');
      });

    };
  });
