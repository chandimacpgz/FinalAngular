var app = angular.module('Application', [
  'ngRoute'
]);


app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {

      //$locationProvider.html5Mode(true);



      $routeProvider.
        when('/', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        }).
        when('/dashboard', {
          templateUrl: 'views/admin.html',
          controller: 'dashboardController'
        }).
          when('/allusers', {
              templateUrl: 'views/allUsers.html',
              controller: 'userController'
          }).
       otherwise({
            redirectTo: '/'
        });
  }]);




