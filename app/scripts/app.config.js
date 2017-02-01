angular.module('angularNodeTokenApp').config(function($stateProvider){
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: '/views/register.html'
  });
})

angular.module('angularNodeTokenApp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
