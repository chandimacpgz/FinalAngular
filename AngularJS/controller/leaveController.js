(function () {
    'use strict';

    angular
        .module('Application')
        .controller('leaveController', leaveController);

    leaveController.$inject = ['$location', '$scope', '$routeParams', 'leaveService', '$rootScope', 'userService'];

    function leaveController($location, $scope, $rootScope, $routeParams, leaveService, userService) {


                $scope.leaveUserLeave = function () {

                    leaveService.viewleave(33).then(function (state) {
                        $scope.userAllUser = state.data;
                    });

                }

                $scope.viewUserLeave = function () {
                    $location.path('/viewUserleave');
                }

           
                $scope.addLeaveInfo = function () {

                    //var leave = {};
                    //leave = $scope.info;
                    //leave['userId'] = 33;
                    leaveService.Leaveadd($scope.info).then(function (state) {
                        $scope.result = state.data;
                    });
                }

    

  
    }



})();