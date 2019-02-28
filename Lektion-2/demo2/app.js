angular.module('todoApp', []) 
.controller('todoController', function($scope) {
    $scope.todoList = [{text:'Skapa en todo-lista', done:false}];

    $scope.addTodo = function() {
        $scope.todoList.push({text:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.removeTodos = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(item) {
            if (!item.done) $scope.todoList.push(item);
        });
    };
});
