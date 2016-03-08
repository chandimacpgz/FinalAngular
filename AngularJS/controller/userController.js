(function () {
    'use strict';

    angular
        .module('Application')
        .controller('userController', userController);

    userController.$inject = ['$location', '$scope', 'userService','$routeParams'];

    function userController($location, $scope, userService, $routeParams) {

            userService.viewAllUsers().then(function (state) {
                        $scope.allusers = state.data;
            });





          $scope.createUser = function () {
              userService.createUser($scope.fields).then(function (state) {
                $scope.result = state;
            });
        }


            userService.viewSingleUser($routeParams.UserId).then(function (state) {
                $scope.singleUser = state.data;
            });
        

        $scope.deleteSingleUser = function (username) {
            userService.deleteSingleUser(username).then(function (state) {
                $scope.result = state.data;
            });
        }

        $scope.updateSingleUser = function () {
            var user = $scope.singleUser;
            userService.updateSingleUser(user).then(function (state) {
                $scope.result = state.data;
            });
        }
    }
})();
