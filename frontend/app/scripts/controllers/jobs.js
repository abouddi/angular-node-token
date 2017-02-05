'use strict';

angular.module('angularNodeTokenApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {

    var url = API_URL + 'jobs';
    $http({
      method: 'GET',
      url: url
    })
    .then(function successCallback(response) {
      $scope.jobs = response.data;
    }, function errorCallback(err) {
      console.log(err);
      alert('warning', "Unable to get jobs", err.statusText);
    });
  });
