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
          when('/EditThisUser/:userId', {
              templateUrl: 'views/EditThisUser.html',
              controller: 'userController'
          }).
          when('/EditThisDept/:deptId', {
              templateUrl: 'views/EditThisDept.html',
              controller: 'deptController'
          }).
          when('/leaveHomePage', {
              templateUrl: 'views/leaveHomepage.html',
              controller: 'leaveController'
          }).
             when('/viewleave', {
                 templateUrl: 'views/SingleUserLeave.html',
                 controller: 'leaveController'
             }).
            when('/addleave', {
                templateUrl: 'views/addLeave.html',
                controller: 'leaveController'
            }).

       otherwise({
            redirectTo: '/'
        });
  }]);




