(function () {
    'use strict';

    angular
        .module('Application')
        .controller('loginController', loginController);

    loginController.$inject = ['$location' , '$scope']; 

    function loginController($location , $scope) {
        $scope.login = function () {
            $location.path('/dashboard');

        }
    }
})();
