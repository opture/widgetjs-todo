import Todotask from './Todotask';

export default class Todolist {
	constructor({todos = []} = {}) {
		this._todos = todos;
	}

	addTodo({text = '', isCompleted = false}) {
		this._todos.push(new Todotask({
			text,
			isCompleted
		}));
	}

	getTodos() {
		return this._todos;
	}

	toggleTodotask(todotask) {
		todotask.toggle();
	}
}
