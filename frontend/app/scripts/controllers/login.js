'use strict';

angular.module('angularNodeTokenApp').controller('LoginCtrl', function($scope, alert, auth) {
  $scope.submit = function() {
    auth.login($scope.email, $scope.password)
    .then(function(res) {
      alert('success', 'Welcome', 'Thanks for coming back, ' + res.data.user.email + '!');
    }, handleError);
  };

  $scope.google = function() {
    auth.googleAuth().then(function(res) {
      alert('success', 'Welcome', 'Thanks for coming back, ' + res.data.user.displayName + '!');
    }, handleError);
  }

  function handleError(err) {
    alert('warning', 'Something went wrong :(', err.message);
  }
});
