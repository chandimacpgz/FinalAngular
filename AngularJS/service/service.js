

(function () {
    'use strict';
    app.factory('userService', userService);
    userService.$inject = ['$http'];
    function userService($http) {
        var service = {};


        service.createUser = createUser;
        service.viewAllUsers = viewAllUsers;
        service.viewSingleUser = viewSingleUser;
        service.deleteSingleUser = deleteSingleUser;
        service.updateSingleUser = updateSingleUser;

        return service;

        function createUser(user) {
           
            return $http({
                url: 'http://emp.azurewebsites.net/api/users',
                method: "POST",
                data: user,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating single user'));

        }

        function viewAllUsers() {
            return $http.get('http://emp.azurewebsites.net/api/users').then(handleSuccess, handleError('Error getting all users'));
        }

        
        function deleteSingleUser(id) {
            return $http.delete('http://emp.azurewebsites.net/api/users/' + id).then(handleSuccess, handleError('Error deleting User'));
        }

        function viewSingleUser(id) {
            return $http.get('http://emp.azurewebsites.net/api/users/' + id).then(handleSuccess, handleError('Error getting Single User'));
        }

        function updateSingleUser(user) {

            return $http({
                url: 'http://emp.azurewebsites.net/api/users/' + user.userId,
                method: "PUT",
                data: user,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating single user'));

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


(function () {
    'use strict';
    app.factory('deptService', deptService);
     deptService.$inject = ['$http'];
    function deptService($http) {
        var service = {};


        service.createDepartment = createDepartment;
        service.viewAllDepartments = viewAllDepartments;
        service.viewSingleDepartment = viewSingleDepartment;
        service.deleteSingleDepartment = deleteSingleDepartment;
        service.updateSingleDept = updateSingleDept;

        return service;

        function createDepartment(dept) {
            return $http({
                method: 'POST',
                url: 'http://emp.azurewebsites.net/api/departments',
                data: dept,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating single Department'));

        }

        function viewAllDepartments() {
            return $http.get('http://emp.azurewebsites.net/api/Departments/').then(handleSuccess, handleError('Error getting all Departments'));
        }


        function viewSingleDepartment(id) {
            return $http.get('http://emp.azurewebsites.net/api/departments/' + id).then(handleSuccess, handleError('Error getting Single Department'));
        }

        function deleteSingleDepartment(id) {
            return $http.delete('http://emp.azurewebsites.net/api/Departments/' + id).then(handleSuccess, handleError('Error deleting Department'));
        }

        function updateSingleDept(dept) {

            return $http({
                url: 'http://emp.azurewebsites.net/api/departments/' + dept.deptId,
                method: "PUT",
                data: dept,
                headers: { 'Content-Type': 'application/json' }
            }).then(handleSuccess, handleError('Error Creating single Dept'));

        }

        



        // custom functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }





    }

})();


(function () {
    'use strict';
    app.factory('authenticate', authenticate);
    authenticate.$inject = ['$http'];
    function authenticate($http, $rootscope) {
        var service = {};


        service.getData = getData;
        service.setUser = setUser;


        return service;

        function getData() {

            return $http.get('http://emp.azurewebsites.net/api/users').then(handleSuccess, handleError('Error getting all users'));

        }

        function setUser(user) {
            $rootScope.user = user;
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


