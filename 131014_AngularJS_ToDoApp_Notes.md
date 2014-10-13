#AngularJS ToDo App
**Resource:** [AngularJS Tutorial](https://www.youtube.com/watch?v=WuiHuZq_cg4)
**Goal:** To get a feel for Angular JS
**View:** [] ()
**Code:** [csharpd/todo_angularjs](https://github.com/csharpd/todo_angularjs)

**Tree:**
├── Gemfile
├── Gemfile.lock
├── README.md
├── config.ru
├── notes.md
└── public
    ├── css
    │   ├── reset.css
    │   └── todo.css
    ├── images
    │   └── add.png
    ├── index.html
    ├── js
    │   └── todo.js
    └── reset.css

###Setting up

* In **index.html** initialise the AngularJS app in the html tag `<html ng-app>`

* Create a section element that contains an ng-controller

````
	<body>
		<section ng-controller="TodoCtrl"></section>
	</body>
````

* Remember to link index.html to todo.js
````
<script type="text/javascript" src="js/todo.js"></script>
````
* In **todo.js** define a Todo Controller- `function TodoCtrl($scope) {
}`

* To see the app working set the scope of totalTodos to 4
````
function TodoCtrl($scope) {
	$scope.totalTodos = 4;
}
````
	In Index.html ...
```
	<section ng-controller="TodoCtrl">
			{{totalTodos}}
		</section>
```
* If you open index.html in a browser you should see 4 displayed.

###Creating a list of ToDos

* Make a list of todos in **todo.js**
````
	$scope.todos = [{text: 'Learn AngularJS', done:false}, {text: 'Build an app', done:false} ];
````

* Loop through the list using ng-repeat (_a binding syntax(?)_)
````
<ul>
	<li ng-repeat="todo in todos">
		{{todo.text}}
	</li>
</ul>
````

###Checking off the list of ToDos

* In *index.html* add an input which contains a ng-model="todo.done".
This means the chechbox value now controls the todo.done value (i.e whether it is stored as true or false)

`<input type="checkbox" ng-model="todo.done">`

* Dynamically bind the class of the Todo to the todo.done property (true or false)

`<span class="done-{{todo.done}}">{{todo.text}}</span>`

* In **Todo.css** ...
```
.done-true {
	text-decoration: line-through;
	color: grey;
}
```

###Add new ToDos

* Create a input field in index.html
```
	<form class="form-horizontal">
		<input type="text" ng-model="formTodoText" ng-model-instant>
		{{formTodoText}}
	</form>

	// ng-model-instant = every key stroke updates the model i.e anything you type in the input field will instantly update on the page
```

* Add a button so you can update the Todo list
`<button class="btn" ng-click="addTodo()"><img src="images/add.png"></img>Add</button>`

* Create an **addTodo** method which pushes the form input value to the list of todos
````
	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
		// clears out the input field
	};
````

###Make the # of Todos' counter Dynamic
	change --> $scope.totalTodos = 4;
	for --> 	$scope.totalTodos = $scope.todos.length;

The total needs to be updated everytime a todo is added so change the prior function to ...

	$scope.gettotalTodos = function () {
		return $scope.todos.length;
	};

In index.html call get totalTodos
`<h2>Total todos: {{gettotalTodos()}}</h2>`

###Remove completed items
In index.html create a button that calls the method clear completed
`<button ng-click="clearCompleted()">Clear completed</button>`

Loop through all the todos and return "the todos that are not done" as a result for that filter (Think of a cleaner way to do this)

````
$scope.clearCompleted = function () {
	$scope.todos = _.filter($scope.todos, function(todo){
		return !todo.done;
	})
};
````





