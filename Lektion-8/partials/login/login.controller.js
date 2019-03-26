(function() {

    angular
        .module("demoApp")
        .controller("loginController", loginController);

    loginController.$inject = ["$location", "authService", "dialogService"];
    function loginController($location, authService, dialogService) {

        var vm = this;

        function login() {
            vm.dataLoading = true;

            authService.Login(vm.username, vm.password, function(res) {
                if(res.success) {                   
                    authService.SetCredentials(vm.username, vm.password);
                    $location.path("/");
                } else {
                    dialogService.Error(res.message);
                    vm.dataLoading = false;
                }
            });
        }

        (function initController() {
            authService.ClearCredentials();
        })();

        vm.login = login;
    }

})();