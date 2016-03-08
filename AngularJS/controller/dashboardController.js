(function () {
    'use strict';

    angular
        .module('Application')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope','$location'];

    function dashboardController($scope, $location) {
        $scope.viewUsers = function () {
            $location.path('/allusers');

        }

        $scope.viewDepartments = function () {
            $location.path('/alldept');

        }

        $scope.addUser = function () {
            $location.path('/adduser');
        }



    }
})();
