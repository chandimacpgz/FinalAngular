(function () {
    'use strict';
    app.factory('leaveService', leaveService);
    leaveService.$inject = ['$http','$rootScope'];
    function leaveService($http,$rootScope) {
        var service = {};


        service.viewAllLeaves = viewAllLeaves;
        service.addLeaveInfo = addLeaveInfo;
        service.viewLeaves = viewLeaves;
        service.AcceptLeave = AcceptLeave;
        service.RejectLeave = RejectLeave;

        return service;

        function viewLeaves() {
            return $http.get('http://emp.azurewebsites.net/api/UserLeaves/').then(handleSuccess, handleError('Error getting all users'));
        }


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

        function AcceptLeave(Form) {
            Form.status="Accepted"
            return $http({
                url: 'http://emp.azurewebsites.net/api/UserLeaves/' + Form.formId,
                method: "PUT",
                data: Form,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error in accpeting leaves'));

        }
        function RejectLeave(Form) {
            Form.status = "Rejected"
            return $http({
                url: 'http://emp.azurewebsites.net/api/UserLeaves/' + Form.formId,
                method: "PUT",
                data: Form,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error in accpeting leaves'));

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

