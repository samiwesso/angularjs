(function() {

    angular
        .module("demoApp")
        .controller("loginController", loginController);

    loginController.$inject = ["$location", "authService", "dialogService"];
    function loginController($location, authService, dialogService) {

        var vm = this;
    }

})();