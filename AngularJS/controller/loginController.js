(function () {
    'use strict';

    angular
        .module('Application')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', '$scope', 'authenticate'];

    function loginController($location, $scope, authenticate) {
        $scope.login = function () {

            var data = {};
            authenticate.getData().then(function (state) {
                data = state.data;

                for (var x in data) {
                    if (($scope.username == data[x].UserName) && ($scope.password == data[x].UserPassword)) {
                        var temp = data[x].UserRole;
                        if ("admin" == temp) {
                            $location.path('/dashboard/1');
                            return 0;
                        } else if ("manager" == temp) {
                            $location.path('/dashboard/2');
                            return 0;
                        } else if ("user") {
                            $location.path('/dashboard/3');
                            return 0;
                        }

                    }

                }

                $scope.result = "Username or password incorrect   !!!!!!";


            });


        }
    }
})();
