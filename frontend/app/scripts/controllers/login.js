'use strict';

angular.module('angularNodeTokenApp').controller('LoginCtrl', function($scope, alert, $auth, $state) {
  $scope.submit = function() {
    $auth.login({
      email: $scope.email,
      password: $scope.password
    }).then(function(res) {
      $state.go('main');

      var message = 'Thanks for coming back, ' + res.data.user.email + '!';
      if (!res.data.user.active) {
        message = 'Just a reminder, please active your account soon :)';
      }

      alert('success', 'Welcome', message);
    }).catch(handleError);
  };

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider).then(function(res) {
      $state.go('main');
      alert('success', 'Welcome', 'Thanks for coming back, ' + res.data.user.displayName + '!');
    }, handleError);
  }

  function handleError(err) {
    alert('warning', 'Something went wrong :(', err.statusText);
  }
});
