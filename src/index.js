import jQuery from 'jquery';
import TodoApp from './documents/TodoDocument';
import Todotask from './models/Todotask';
import Todolist from './models/Todolist';
import './less/main.less';

window.$ = window.jQuery = jQuery;

const myTodolist = new Todolist({
	todos: [
		new Todotask({text: 'Some task 1'}),
		new Todotask({text: 'Some task 2'}),
		new Todotask({text: 'Some task 3'})
	]
});

const todoApp = new TodoApp(myTodolist);

let apa = (() => {
	jQuery(document).ready(function() {
		todoApp.appendTo('body');
	});
})();

export default apa;
