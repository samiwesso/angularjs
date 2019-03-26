(function () {

    angular
        .module("demoApp")
        .factory("userService", userService)

    userService.$inject = ["$timeout", "$filter", "$q"];
    function userService($timeout, $filter, $q) {

        var service = {};

        function _getUsers() {
            if(!localStorage.users) {
                localStorage.users = JSON.stringify([]);
            }

            return JSON.parse(localStorage.users);
        }

        function _setUsers(users) {
            localStorage.users = JSON.stringify(users);
        }


        function GetUsers() {
            var deferred = $q.defer();
            deferred.resolve(_getUsers());
            return deferred.promise;
        }

        function GetUserById(id) {
            
        }

        function GetUserByUsername(username) {
            
        }

        function CreateUser(user) {
            
        }

        function UpdateUser(user) {
            
        }

        function DeleteUser(id) {
            
        }

        service.GetUsers = GetUsers;
        service.GetUserById = GetUserById;
        service.GetUserByUsername = GetUserByUsername;
        service.Create = CreateUser;
        service.Update = UpdateUser;
        service.Delete = DeleteUser;

        return service;
    }

})();