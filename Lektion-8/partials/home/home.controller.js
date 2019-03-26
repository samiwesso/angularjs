(function () {

    angular
        .module("demoApp")
        .controller("homeController", homeController)

    homeController.$inject = ["userService", "$rootScope"];
    function homeController(userService, $rootScope) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];

        function _loadCurrentUser() {
            userService.GetUserByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                })
        }

        function _loadAllUsers() {
            userService.GetUsers()
                .then(function (users) {
                    vm.allUsers = users
                })
        }

        function deleteUser(id) {
            userService.Delete(id)
                .then(function () {
                    _loadAllUsers();
                })
        }

        function initController() {
            _loadCurrentUser();
            _loadAllUsers();
        }


        initController();
        vm.deleteUser = deleteUser;

    }

})();