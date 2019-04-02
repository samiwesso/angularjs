var app = angular.module("demoApp", []);

app.controller("demoController", function($scope) {

    const starsTotal = 5;

    var products = [
        { name: "hp", rating: 1.3, totalratings: 5 },
        { name: "dell", rating: 3.2, totalratings: 12 }
    ];

    $scope.products = products;
    $scope.rating = function(input) {
        const starProcentage = (input / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage / 10) * 10}%`;
        
        return starProcentageRounded;
    } 


})