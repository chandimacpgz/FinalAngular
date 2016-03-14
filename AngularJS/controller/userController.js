(function () {
    'use strict';

    angular
        .module('Application')
        .controller('userController', userController);

    userController.$inject = ['$location', '$scope', 'userService','$routeParams'];

    function userController($location, $scope, userService, $routeParams) {
        
        userService.viewAllUsers().then(function (state) {


            $scope.allusers = state.data;



                $scope.mailAllUsers = {
                    dataSource: state.data,
                    sortable: true,
                    pageable: true,
                    dataBound: function () {
                        this.expandRow(this.tbody.find("tr.k-master-row").first());
                    },
                    columns: [{
                        field: "userId",
                        title: "User Id",
                        width: "120px"
                    }, {
                        field: "userName",
                        title: "Username",
                        width: "120px"
                    }, {
                        field: "userNIC",
                        title: "NIC",
                        width: "120px"
                    }, {
                        field: "userEmail",
                        title: "Email Address",
                        width: "120px"
                    }, {
                        field: "userRole",
                        title: "User Role",
                        width: "120px"
                    }]
                };
            });





          $scope.createUser = function () {
              userService.createUser($scope.fields).then(function (state) {
                $scope.result = state;
            });
        }


            userService.viewSingleUser($routeParams.userId).then(function (state) {
                $scope.singleUser = state.data;
            });
        

        $scope.deleteSingleUser = function (userName) {
            userService.deleteSingleUser(userName).then(function (state) {
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
