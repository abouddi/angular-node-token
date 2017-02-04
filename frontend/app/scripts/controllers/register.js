'use strict';

/**
 * @ngdoc function
 * @name angularNodeTokenApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularNodeTokenApp
 */
angular.module('angularNodeTokenApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert, authToken) {
    $scope.submit = function() {

      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      // Simple GET request example:
      $http({
        method: 'POST',
        url: url,
        data: user
      })
      .then(function successCallback(response) {
        alert('success', 'Ok!', 'You are now registered');
        authToken.setToken(res.token);
      }, function errorCallback(response) {
        alert('warning', 'Opps!', 'Could not register');
      });

    };
  });
