(function () {
    'use strict';

    angular
        .module('Application')
        .controller('deptController', deptController);

    deptController.$inject = ['$location', '$http', 'deptService' , '$scope'];

    function deptController($location, $http, deptService, $scope) {
   

            deptService.viewAllDepartments().then(function (state) {
                $scope.alldepts = state.data;
            });



        $scope.createUser = function (user) {
            deptService.createUser(user).then(function (state) {
                $scope.result = state.data;
            });
        }

        $scope.viewSingleDepartment = function (depname) {
            deptService.viewSingleDepartment(depname).then(function (state) {
                $scope.singleDepartment = state.data;
            });
        }

        $scope.deleteSingleUser = function (username) {
            deptService.deleteSingleUser(username).then(function (state) {
                socpe.result = state.data;
            });
        }

        $scope.updateSingleUser = function (user) {
            $scope.result = deptService.updateSingleUser(user).then(function (state) {
                socpe.result = state.data;
            });
        }

    }
})();
