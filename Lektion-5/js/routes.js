app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "view/home.html",
        controller: "homeController" 
    })

    .when("/features", { 
        templateUrl: "view/features.html",
        controller: "featuresController" 
    })
    
    .when("/pricing", { 
        templateUrl: "view/pricing.html",
        controller: "pricingController" 
    })
})

