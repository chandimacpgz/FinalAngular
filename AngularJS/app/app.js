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
        when('/dashboard/:id', {
            templateUrl: 'views/admin.html',
            controller: 'dashboardController'
        }).
          when('/allusers', {
              templateUrl: 'views/allUsers.html',
              controller: 'userController'
          }).
          when('/addDepartment', {
              templateUrl: 'views/addDepartment.html',
              controller: 'deptController'
          }).
          when('/adduser', {
              templateUrl: 'views/createUser.html',
              controller: 'userController'
          }).
           when('/alldept', {
               templateUrl: 'views/viewAllDepartments.html',
               controller: 'deptController'
           }).
           when('/edituser', {
               templateUrl: 'views/editUser.html',
               controller: 'userController'
           }).
          when('/editDepartment', {
              templateUrl: 'views/editDepartment.html',
              controller: 'deptController'
          }).
          when('/EditThisUser/:UserId', {
              templateUrl: 'views/EditThisUser.html',
              controller: 'userController'
          }).
          when('/EditThisDept/:DeptId', {
              templateUrl: 'views/EditThisDept.html',
              controller: 'deptController'
          }).
          
       otherwise({
            redirectTo: '/'
        });
  }]);




