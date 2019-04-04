angular
    .module("demoApp", ["ngAnimate"])
    .controller("demoController", function($scope) {
        
        var getProductId = function(products, id) {
            return _.find(products, function(product) {
                return product.id === id
            });
        };
        
        
        
        $scope.products = [
            { id: 1, name: "Product 1", category: "Category 1", price: 4999, quantity: 1 },
            { id: 2, name: "Product 2", category: "Category 1", price: 5099, quantity: 1 },
            { id: 3, name: "Product 3", category: "Category 2", price: 10099, quantity: 1 },
            { id: 4, name: "Product 4", category: "Category 3", price: 599, quantity: 1 }
        ];

        $scope.cart = [];

        $scope.addItem = function(product) {
            var found = getProductId($scope.cart, product.id);

            if(found) {
                found.quantity += product.quantity;
            }
            else {
                $scope.cart.push(angular.copy(product));
            }
        }
    })