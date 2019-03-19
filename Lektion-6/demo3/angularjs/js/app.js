var app = angular.module("restapiApp", []);

app.controller("restapiController", function($scope, $http) {
    $http.get('http://localhost:5000/api/products')
    .then(function(res) {    
        console.log(res.data);
        $scope.products = res.data;
        $scope.message = res.data.message;
    });
})