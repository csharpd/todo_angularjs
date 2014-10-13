function TodoCtrl($scope) {

	$scope.todos = [
		{text: 'Learn AngularJS', done:false},
		{text: 'Build an app', done:false}
	];

	$scope.gettotalTodos = function () {
		return $scope.todos.length;
	};

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	};
}