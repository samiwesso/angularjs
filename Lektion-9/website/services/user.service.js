(function () {

    angular
        .module("demoApp")
        .factory("userService", userService);

    userService.$inject = ["$http"];
    
    function userService($http) {
        var service = {};

        function handleResponse(res) {
            return res.data;
        }

        function Create(user) {
            return $http
                .post("http://localhost:3001/api/users/register", user)
                .then(handleResponse, handleResponse)
        }

        service.Create = Create;
//        service.Update = Update;
//        service.Delete = Delete;

        return service;
    }

})();