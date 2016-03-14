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
           
            var allLeaves = state.data;
            
         var newdata =  state.data.filter(function (el) {
             return el.users.departments.deptId == $rootScope.thisdepartment;
         });
         var newdata2 = state.data.filter(function (el) {
             return el.users.departments.deptId != $rootScope.thisdepartment;
         });

            for (var key in newdata) {
             
                
                if ((newdata[key].status == 'Accepted')) {
                    newdata[key].infoAccept = true;
                    newdata[key].infoReject = false;

                    }
                else if ((newdata[key].status == 'Rejected')) {
                    newdata[key].infoAccept = false;
                    newdata[key].infoReject = true;
                    }
                    else {
                    newdata[key].infoAccept = false;
                    newdata[key].infoReject = false;
                }

                
            }
            for (var key in newdata2) {
                newdata2[key].infoAccept = true;
                newdata2[key].infoReject = true;
            }
            var final = $.merge(newdata, newdata2);
            $scope.allLeaves = final;
           
            

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
