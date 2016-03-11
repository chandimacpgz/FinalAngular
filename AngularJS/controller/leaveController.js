(function () {
    'use strict';

    angular
        .module('Application')
        .controller('leaveController', leaveController);

    leaveController.$inject = ['$location','$scope', 'leaveService']; 
    function leaveController($location,$scope, leaveService) {
        //routing of the leaveHandlingHomePage

        $scope.viewUserLeave = function () {
            $location.path('/viewleave');
        }
        $scope.addLeavePage = function () {
            $location.path('/addleave');
        }

        leaveService.viewAllLeaves().then(function (state) {
            $scope.userAllUser = state.data;
        });

    }

})();
