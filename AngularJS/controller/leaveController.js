(function () {
    'use strict';

    angular
        .module('Application')
        .controller('leaveController', leaveController);

    leaveController.$inject = ['$location', '$scope', 'leaveService', '$rootScope'];
    function leaveController($location,$scope, leaveService , $rootScope) {
        //routing of the leaveHandlingHomePage

        $scope.viewUserLeave = function () {
            $location.path('/viewleave');
        }
        $scope.addLeavePage = function () {
            $location.path('/addleave');
        }

        leaveService.viewAllLeaves().then(function (state) {

            var user = $rootScope.thisuser;
           

         var newdata =  state.data.filter(function (el) {
                return el.userID == user.userId;
            });

            $scope.userAllUser = newdata;
        });



        $scope.addleave = function () {

            var user = $rootScope.thisuser;
            var leave = {};
            leave = $scope.info;
            leave.userID = user.userId;
            leave.status = "Pending";
            leaveService.addLeaveInfo(leave).then(function (state) {

                $scope.result = state.data;
            });


        }


        

    }

})();
