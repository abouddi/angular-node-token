'use strict';

angular.module('angularNodeTokenApp')
  .controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
  });
