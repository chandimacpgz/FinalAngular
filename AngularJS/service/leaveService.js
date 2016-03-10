(function () {
    'use strict';
    app.factory('leaveService', leaveService);

    leaveService.$inject = ['$http'];

    function leaveService($http) {
        var service = {};
        service.viewLeave= viewLeave;
        service.Leaveadd = Leaveadd;
        


        return service;

        function viewLeave(id) {

            return $http.get('http://emp.azurewebsites.net/api/UserLeaves/' + id).then(handleSuccess, handleError('Error getting Single Department'));

        }



        function Leaveadd(leave) {

            return $http({
                url: 'http://emp.azurewebsites.net/api/UserLeaves',
                method: "POST",
                data: leave,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating a leave'));

        }




        // private fucntions 

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