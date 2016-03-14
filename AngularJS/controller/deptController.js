(function () {
    'use strict';

    angular
        .module('Application')
        .controller('deptController', deptController);

    deptController.$inject = ['$location', '$scope', 'deptService', '$routeParams'];

    function deptController($location, $scope,deptService, $routeParams) {
   

            deptService.viewAllDepartments().then(function (state) {
                $scope.alldepts = state;





                $scope.myAllDepartments = {
                    dataSource: state,
                    sortable: true,
                    pageable: true,
                    dataBound: function () {
                        this.expandRow(this.tbody.find("tr.k-master-row").first());
                    },
                    columns: [{
                        field: "deptId",
                        title: "Department Id",
                        width: "120px"
                    }, {
                        field: "deptName",
                        title: "Department Name",
                        width: "120px"
                    }, {
                        field: "deptLocation",
                        title: "Department Location",
                        width: "120px"
                    }]
                };
            });



        $scope.createDepartment = function () {

           
            deptService.createDepartment($scope.data).then(function (state) {
                $scope.result = state.data;
            });
        }


        deptService.viewSingleDepartment($routeParams.deptId).then(function (state) {
            $scope.singleDept = state;
        });
        

        $scope.deleteSingleDept = function (deptid) {
            deptService.deleteSingleDepartment(deptid).then(function (state) {
                $scope.result = state;
            });
        }

        $scope.updateSingleDept = function () {
            var dept = $scope.singleDept;
            deptService.updateSingleDept(dept).then(function (state) {
                $scope.result = state;
            });
        }

    }
})();
