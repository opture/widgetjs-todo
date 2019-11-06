import {widget} from 'widgetjs';
import todoItemWidget from './todoItemWidget';
import styles from './style.less';
export default function todolistWidget(spec, my) {
	spec = spec || {};
	my = my || {};

	const todos = spec.todos || [];
	const completeTodo = spec.completeTodo;
	const that = widget(spec, my);

	that.renderContentOn = html => {
		html.ul({klass:styles.todolist}, html => {
			html.render(todos.map( todoItem => todoItemWidget({todoItem, onClick: completeTodo}) ));
		});
	};

	return that;
}
