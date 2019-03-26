(function() {

    angular
        .module("demoApp")
        .factory("authService", authService);

    authService.$inject = ['$http', "$cookies", "$rootScope", "$timeout", "userService"];
    function authService($http, $cookies, $rootScope, $timeout, userService) {
        var service = {}

        function Login(username, password, callback) {
            $timeout(function() {
                var response;
                userService.GetUserByUsername(username)
                    .then(function (user) {
                        if (user !== null && user.password === password) {
                            response = { success: true };
                        } else {
                            response = { success: false, message: "Username or password is incorrect." }
                        }

                        callback(response);
                    })

            }, 1000);
        }

        function SetCredentials(username, password) {
            var authdata = Base64.encode(username + ':' + password);

            $rootScope.globals = {
                username: username,
                authdata: authdata
            }

            $http.defaults.headers.common["Authorization"] = "Basic " + authdata;

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


    var Base64 = {

        secretkey: "GsVl3zlPLek9p05SQllsURp8NHjUXZAh==",
        encode: function(input) {
            
        }
    }


})();