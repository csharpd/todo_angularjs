function TodoCtrl($scope) {

	$scope.todos = [
		{text: 'Build a ToDo app', done:true},
		{text: 'Make Pumpkin Pie', done:false},
		{text: 'Sail the Seven Seas', done:false}
	];

	$scope.gettotalTodos = function () {
		return $scope.todos.length;
	};

	$scope.clearCompleted = function () {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
			})
		};

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
}