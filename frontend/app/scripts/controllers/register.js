'use strict';

angular.module('angularNodeTokenApp')
  .controller('RegisterCtrl', function ($scope, alert, auth) {
    $scope.submit = function() {

      auth.register($scope.email, $scope.password)
      .then(function successCallback(res) {
        alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '!');
      }, function errorCallback(err) {
        alert('warning', 'Something went wrong :(', err.data.message);
      });

    };
  });
