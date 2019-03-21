var app = angular
    .module("demoApp", [])
    .controller("demoController", function($scope, stringService, calc) {
       
        $scope.changeString = function(input) {
            $scope.output = stringService.processString(input);
        }

        $scope.calculate = function(nr1, nr2) {
            $scope.addcalcoutput = calc.add(nr1, nr2);
            $scope.subcalcoutput = calc.sub(nr1, nr2);
            $scope.divcalcoutput = calc.divide(nr1, nr2);
            $scope.multicalcoutput = calc.multi(nr1, nr2);
        }
       
        
    })
    .factory("stringService", function() {
        return {
            processString: function(input) {
                if(!input) {
                    return input;
                }
                
                var output = "";
    
                for(var i=0; i< input.length; i++) {
                    if (i > 0 && input[i] == input[i].toUpperCase()) {
                        output = output + " ";
                    }
    
                    output = output + input[i];
                }

                return output;
            }
        }
    })
    .factory("calc", function() {
        return {
            add: function(input1, input2) {
                var output = 0;

                //output = parseInt(input1) + parseInt(input2);
                output = input1 + input2;
                return output;
            },

            sub: function(input1, input2) {
                var output = 0;

                //output = parseInt(input1) + parseInt(input2);
                output = input1 - input2;
                return output;
            },

            divide: function(input1, input2) {
                var output = 0;

                //output = parseInt(input1) + parseInt(input2);
                output = input1 / input2;
                return output;
            },

            multi: function(input1, input2) {
                var output = 0;

                //output = parseInt(input1) + parseInt(input2);
                output = input1 * input2;
                return output;
            }
        }
    })

