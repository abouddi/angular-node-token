'use strict';

angular.module('angularNodeTokenApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
