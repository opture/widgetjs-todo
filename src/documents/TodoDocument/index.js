import widgetjs from 'widgetjs';
import todolistWidget from '../../widgets/todolistWidget';
import addTodoWdiget from '../../widgets/addTodoWidget';

export default function TodoApp(spec, my) {
	spec = spec || {};
	my = my || {};

	const that = widgetjs.widget(spec, my);

	const myModel = spec;

	const completeTodo = (todoItem, widget) => {
		myModel.toggleTodotask(todoItem);
		widget.update();
	};

	const addTodo = text => {
		myModel.addTodo({text});
		my.addTodoForm.update();
		my.todoList.update();
	};

	my.todoList = todolistWidget({
		completeTodo,
		todos: myModel.getTodos()
	});

	my.addTodoForm = addTodoWdiget({addTodo});

	that.renderContentOn = html => {
		html.render(my.todoList);
		html.render(my.addTodoForm);
	};

	return that;
}
