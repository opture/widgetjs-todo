import widgetjs from 'widgetjs';

 export default function addTodoWidget(spec, my) {
	spec = spec || {};
	my = my || {};
	const addTodo = spec.addTodo || {};
	const that = widgetjs.widget(spec, my);
	let newTaskName = '';

	const updateTaskName = element => {
		newTaskName = element.target.value;
	};

	that.renderContentOn = html => {
		html.input({keydown: updateTaskName, name:'todoText', type:'text', placeholder:'Add todo'}).change( element => {
			newTaskName = element.target.value;
		});
		html.button('Add').click(function() {
			addTodo(newTaskName, that);
		});
	};

	return that;
 }
