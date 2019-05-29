
export default class Todotask {
	constructor({text, isCompleted = false}) {
		this._text = text;
		this._isCompleted = isCompleted;
	}

	getText() {
		return this._text;
	}

	setCompleted(isCompleted) {
		this._isCompleted = isCompleted;
	}

	getCompleted() {
		return this._isCompleted;
	}

	toggle() {
		this.setCompleted(!this._isCompleted);
	}
}
