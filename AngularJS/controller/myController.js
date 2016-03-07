
// Controllers building 

app.controller('myController', function ($scope, $http) {


});


app.controller('CalcController', function($scope, CalcService) {
    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    }
});