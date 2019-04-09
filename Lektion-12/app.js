angular
    .module("demoApp", [])
    .controller("demoController", function($scope) {
        
        var getProductId = function(products, id) {
            return _.find(products, function(product) {
                return product.id === id
            });
        };
        
        $scope.cart = [];
        $scope.emptycart = "";

        $scope.products = [
            { id: 1, name: "Product 1", category: "Category 1", price: 4999, quantity: 1 },
            { id: 2, name: "Product 2", category: "Category 1", price: 5099, quantity: 1 },
            { id: 3, name: "Product 3", category: "Category 2", price: 10099, quantity: 1 },
            { id: 4, name: "Product 4", category: "Category 3", price: 599, quantity: 1 }
        ];

        $scope.addItem = function(product) {
            var found = getProductId($scope.cart, product.id);

            if(found) {
                found.quantity += product.quantity;
            }
            else {
                $scope.cart.push(angular.copy(product));
            }
        }

        $scope.removeItem = function(product) {
            var index = $scope.cart.indexOf(product);
            $scope.cart.splice(index, 1);
        }

        $scope.getProductCost = function(product) {
            return product.quantity * product.price;
        }

        $scope.getProductQuantity = function(product) {
            return product.quantity;
        }

        $scope.getTotal = function() {
            var total = _.reduce($scope.cart, function(sum, product) {
                return sum + $scope.getProductCost(product);
            }, 0);

            if($scope.cart.length === 0) {
                $scope.emptycart = "Your cart is empty."
            }
            else {
                $scope.emptycart = ""
            }   
            return total;
        }

        $scope.getQuantity = function() {
            var quantity = _.reduce($scope.cart, function(sum, product) {
                return sum + $scope.getProductQuantity(product);
            }, 0);
 
            if(quantity === 0) {
                $scope.badgeColor = "badge-secondary"
            } else {
                $scope.badgeColor = "badge-danger"
            }


            return quantity;
        }
        

    })