(function () {
    'use strict';

    angular
        .module('Application')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope','$location','$routeParams'];

    function dashboardController($scope, $location,$routeParams) {
        // disableling functionalites for different type of users 
        var data = $routeParams.id;

        var eadd = document.getElementById('eadd');
        var eedit = document.getElementById('eedit');
        var eview = document.getElementById('eview');
        var dadd = document.getElementById('dadd');
        var dedit = document.getElementById('dedit');
        var dview = document.getElementById('dview');


        if (2 == data) {

            eadd.style.display = 'none';
            dadd.style.display = 'none';
        } else if (3 == data) {
            eadd.style.display = 'none';
            dadd.style.display = 'none';
            eedit.style.display = 'none';
            dedit.style.display = 'none';
        }

        //end code 

        $scope.viewUsers = function () {
            $location.path('/allusers');

        }
        $scope.addDepartment = function () {
            $location.path('/addDepartment');
        }

        $scope.viewDepartments = function () {
            $location.path('/alldept');

        }

        $scope.addUser = function () {
            $location.path('/adduser');
        }
        $scope.editUser = function () {
            $location.path('/edituser');
        }
        $scope.editDepartment = function () {
            $location.path('/editDepartment');
        }

        

    }
})();
