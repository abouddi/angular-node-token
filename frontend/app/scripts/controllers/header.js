'use strict';

angular.module('angularNodeTokenApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
  });
