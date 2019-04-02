var app = angular.module("demoApp", []);

app.controller("demoController", function($scope) {

    const starsTotal = 5;

    var products = [
        { name: "hp", rating: 1.3, totalratings: 5 },
        { name: "dell", rating: 3.2, totalratings: 12 }
    ];

    $scope.products = products;
    $scope.rating = function(input) {
        return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;
    } 


})