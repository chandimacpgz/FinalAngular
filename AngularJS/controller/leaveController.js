(function () {
    'use strict';

    angular
        .module('Application')
        .controller('leaveController', leaveController);

    leaveController.$inject = ['$location', '$scope', '$routeParams', 'leaveService'];

    function leaveController($location, $scope, $rootScope, $routeParams, leaveService) {

                $scope.viewUserLeave = function () {
                    $location.path('/viewUserleave');
                }

                alert($rootScope.thisuser);

            leaveService.viewleave($rootScope.thisuser.userId).then(function (state) {
                $scope.userAllUser = state.data;
            });
    

  
    }



})();