(function () {
    'use strict';

    angular
        .module('Application')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', '$scope', 'authenticate'];

    function loginController($location, $scope, authenticate, $rootScope) {
        $scope.login = function () {

            var data = {};
            authenticate.getData().then(function (state) {
                data = state.data;

                for (var x in data) {
                    if (($scope.userName == data[x].userName) && ($scope.password == data[x].userPassword)) {
                        var temp = data[x].userRole;
                        var thisuser = data[x];
                        //var thisdepartment = thisuser.departments.deptId;
                      
                        authenticate.setUser(thisuser);
                        if ("admin" == temp) {
                            $location.path('/dashboard/1');
                            return 0;
                        } else if ("manager" == temp) {
                            $location.path('/dashboard/2');
                            return 0;
                        } else if ("user" == temp) {
                            $location.path('/dashboard/3');
                            return 0;
                        }

                    }

                }

                $scope.result = "userName or password incorrect   !!!!!!";


            });


        }
    }
})();
