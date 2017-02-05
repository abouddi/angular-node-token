'use strict';

angular.module('angularNodeTokenApp')
  .controller('RegisterCtrl', function ($scope, alert, $auth, $state) {
    $scope.submit = function() {
      $auth.signup({
        email: $scope.email,
        password: $scope.password
		  })
      .then(function (res) {
        alert('success', 'Account Created!', 'Welcome, ' + res.data.user.email + '! Please email activate your account in the next several days.');
        $auth.login({email: $scope.email, password: $scope.password})
        .then(function (res) {
          $state.go('main');
        })
        .catch(handleError);
      })
      .catch(handleError);
    };

    function handleError(err){
      alert('warning', 'Something went wrong :(', err.data.message);
    }
  });
