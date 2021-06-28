module.exports = class TreeStrategy {
	constructor() {
		this._strategy = null;
	}

	set strategy(treeMap) {
		this._strategy = treeMap;
	}

	get strategy() {
		return this._strategy;
	}

	inorder(fn) {
		this._strategy.inorder(fn);
	}
}
