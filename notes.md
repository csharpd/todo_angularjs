index.html
	1. Initialise the AngularJS app via the html tag --> <html ng-app>
	2. Create a section in the body that contains an ng controller

````
	<body>
		<section ng-controller="TodoCtrl"></section>
	</body>
````

3. Link index.html to todo.js
````
		<script type="text/javascript" src="js/todo.js"></script>

````
4. In todo.js define a Todo Controller
function TodoCtrl($scope) {
}

5. To see the app working set the scope of totalTodos to 4
````
function TodoCtrl($scope) {
	$scope.totalTodos = 4;
}
```

& in index.html
```
		<section ng-controller="TodoCtrl">
			{{totalTodos}}
		</section>
```
If you open index.html in a browser you should see the number 4 displayed.

##Setting up a list of ToDos

1. Make alist in todo.js
````
	$scope.todos = [{text: 'Learn AngularJS', done:false}, {text: 'Build an app', done:false} ];
````

2. Loop through the list using ng-repeat <-- a binding syntax(??)
````
<ul>
		<li ng-repeat="todo in todos">
				{{todo.text}}
		</li>
</ul>
````

##Checking off the list of ToDos

1. Add an input type with a ng-model="todo.done".
<input type="checkbox" ng-model="todo.done">

2. Dynamically bind the class to the todo.done property (true or false)

	<span class="done-{{todo.done}}">{{todo.text}}</span>

3. Todo.css
.done-true {
	text-decoration: line-through;
	color: grey;
}

