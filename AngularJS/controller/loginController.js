app.controller('loginController', function ($scope, $http, AuthenticationService ,$location) {
     
    $scope.login = function () {
        $location.path('/dashboard');
        //AuthenticationService.Authenitcate($scope.username, $scope.password, function (response) {
          
        //    if (response.success) {
        //        AuthenticationService.SetCredentials(response);
        //        $location.path('/dashboard');


        //    } else {
        //        $scope.error = response.message;
        //        $scope.dataLoading = false;

        //    }
        //});

    }
   
   
});


app.controller('userController', function ($scope, $http, userService, $timeout, $location) {

    userService.viewAllUsers().then(function (state) {

        $scope.allusers = state.data;
        //$location.path('/allusers');
    });



    //$scope.createUser = function () {
    //    var user = $scope.fileds;

        userService.createUser(user).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.result = state;
                });
            }, 10);
        });



         
    //}

    $scope.viewSingleUser = function (id) {
        
        userService.viewSingleUser(username).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.singleUser = state.data;
                });
            }, 10);
        });
    }
       
    $scope.deleteSingleUser = function (username) {
        userService.deleteSingleUser(username).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    scope.result = state.data;
                });
            }, 10);
     
        });
    }

    $scope.updateSingleUser = function (user) {
        userService.updateSingleUser(user).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.result = state.data;
                });
            }, 10);

        });
        }



});


app.controller('deptController', function ($scope, $http, deptService) {

    $scope.viewAllDepartments = function () {
         deptService.viewAllDepartments().then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.alldepts = state.data;
                });
            }, 10);

        });
    }

    $scope.createUser = function (user) {
         deptService.createUser(user).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.result = state.data;
                });
            }, 10);

        });
    }

    $scope.viewSingleDepartment = function (depname) {
        deptService.viewSingleDepartment(depname).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    $scope.singleDepartment = state.data;
                });
            }, 10);

        });
    }

    $scope.deleteSingleUser = function (username) {
        deptService.deleteSingleUser(username).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    socpe.result = state.data;
                });
            }, 10);

        });
    }

    $scope.updateSingleUser = function (user) {
        $scope.result = deptService.updateSingleUser(user).then(function (state) {
            $timeout(function () {
                $scope.$apply(function () {
                    socpe.result = state.data;
                });
            }, 10);

        });
    }

});