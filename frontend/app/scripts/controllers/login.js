'use strict';

angular.module('angularNodeTokenApp').controller('LoginCtrl', function($scope, alert, auth) {
  $scope.submit = function() {

    auth.login($scope.email, $scope.password)
    .then(function successCallback(res) {
      alert('success', 'Welcome', 'Thanks for coming back, ' + res.data.user.email + '!');
    }, function errorCallback(err) {
      alert('warning', 'Something went wrong :(', err.data.message);
    });

  };
});
