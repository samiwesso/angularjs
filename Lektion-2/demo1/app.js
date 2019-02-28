//https://github.com/datanorden-hans/angularjs.git

angular.module("demoApp", [])
.controller("ratingController", function($scope) {
    $scope.likes = 0;
    $scope.dislikes = 0;

    $scope.incrementLikes = function() {
        $scope.likes++;
    }

    $scope.incrementDislikes = function() {
        $scope.dislikes++;
    }
})
.controller("cartController", function($scope) {
    var products = [
        { productname: "Samsung S10", quantity: 0},
        { productname: "Samsung S10+", quantity: 0},
        { productname: "Samsung S10e", quantity: 0}
    ];

    $scope.products = products;

    $scope.increment = function(product) {
        product.quantity++;
    }

    $scope.decrement = function(product) {
        if(product.quantity != 0)
            product.quantity--;
    }

});
