'use strict';

angular.module('angularNodeTokenApp').config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: '/views/main.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
    controller: 'RegisterCtrl'
  });
});

angular.module('angularNodeTokenApp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
