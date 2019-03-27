(function() {

    angular
        .module("demoApp")
        .factory("authService", authService);

    authService.$inject = ['$http', "$cookies", "$rootScope", "$timeout", "userService"];
    function authService($http, $cookies, $rootScope, $timeout, userService) {
        var service = {}

        function handleResponse(res) {
            return res.data;
        }

        function Login(email, password) {
            return $http
                .post("http://localhost:3001/api/users/login", { email: email, password: password})
                .then(handleResponse, handleResponse)
        }

        function SetCredentials(token) {
           
            $rootScope.globals = {
                currentUser: {
                    token: token
                }
            }

            $http.defaults.headers.common["Authorization"] = "Basic " + token;

            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);

            $cookies.putObject("globals", $rootScope.globals, { expires: cookieExp });

        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookies.remove("globals");
            $http.defaults.headers.common.Authorization = "Basic";
        }

        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;
    }

})();