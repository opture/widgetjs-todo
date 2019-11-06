import {widget} from 'widgetjs';
import styles from '../style.less';

 export default function todoitemWidget(spec, my) {
	spec = spec || {};
	my = my || {};
	const todoItem = spec.todoItem || {};
	const onClick = spec.onClick || (() => {});
	const that = widget(spec, my);

	that.renderContentOn = html => {
		html.li({klass: `${styles.todoitem} ${todoItem.getCompleted() ? styles.completed : ''}`}, todoItem.getText())
			.click(() => {
				onClick(todoItem, that);
			});
	};

	return that;
 }
