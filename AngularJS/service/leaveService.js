(function () {
    'use strict';
    app.factory('leaveService', leaveService);
    leaveService.$inject = ['$http','$rootScope'];
    function leaveService($http,$rootScope) {
        var service = {};


        service.viewAllLeaves = viewAllLeaves;
        service.addLeaveInfo = addLeaveInfo;


        return service;


        function viewAllLeaves() {
        
            return $http.get('http://emp.azurewebsites.net/api/UserLeaves/').then(handleSuccess, handleError('Error getting all users'));
        }
       
        function addLeaveInfo(leave) {

            return $http({
                url: 'http://emp.azurewebsites.net/api/UserLeaves',
                method: "POST",
                data: leave,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating a leave'));

        }

        function handleSuccess(res) {
            return res;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }


    }

})();

