app.controller("homeController", function($scope) {
    $scope.pagetitle = "Home";
    $scope.features = ["home 1", "home 2", "home 3", "home 4"];
})

.controller("featuresController", function($scope) {
    $scope.pagetitle = "Features";
    $scope.features = ["feature 1"];
})

.controller("pricingController", function($scope) {
    $scope.pagetitle = "Pricing";
    $scope.features = ["feature 1"];
})