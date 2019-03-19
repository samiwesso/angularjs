var app = angular.module("restapiApp", []);

app.controller("restapiController", function($scope, $http) {
    $http
    .get({
        method : "GET",
        url : "http://localhost:5000/api/products"
    })
    .then(function(resp) {    
        $scope.products = resp.data; 
    });
})