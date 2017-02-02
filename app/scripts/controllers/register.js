'use strict';

/**
 * @ngdoc function
 * @name angularNodeTokenApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularNodeTokenApp
 */
angular.module('angularNodeTokenApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function() {

      var url = '/';
      var user = {};

      // Simple GET request example:
      $http({
        method: 'POST',
        url: url,
        data: user
      })
      .then(function successCallback(response) {
        alert('success', 'Ok!', 'You are now registered');
      }, function errorCallback(response) {
        alert('warning', 'Opps!', 'Could not register');
      });

    };
  });
