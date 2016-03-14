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

        $scope.AllLeave = function () {
            $location.path('/viewLeaves');
        }


        leaveService.viewLeaves().then(function (state) {
            //var data = state.data;
            var allLeaves = state.data;
            for (var key in allLeaves) {
                if ((allLeaves[key].status == 'Accepted')) {
                    allLeaves[key].infoAccept = true;
                    allLeaves[key].infoReject = false;
                             
                }
                else if ((allLeaves[key].status == 'Rejected')) {
                    allLeaves[key].infoAccept = false;
                    allLeaves[key].infoReject = true;
                }
                else {
                    allLeaves[key].infoAccept = false;
                    allLeaves[key].infoReject = false;
                }
            }
            $scope.allLeaves = allLeaves;
           
            

        });


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
        $scope.AcceptLeave = function (form) {
            leaveService.AcceptLeave(form).then(function (state) {
                $scope.result = state;
            });

        }
            $scope.RejectLeave = function (form) {
                leaveService.RejectLeave(form).then(function (state) {
                 $scope.result = state;
             });

        }

      


        

    }

})();
