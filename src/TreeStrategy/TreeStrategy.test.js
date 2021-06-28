const TreeStrategy = require('./TreeStrategy');
const { BinarySearchTree } = require('../BinarySearchTree/BinarySearchTree');

describe('TreeStrategy features', () => {

	const treeStrategy = new TreeStrategy();

	it('strategy should be null after initialization', () => {
		const actual = treeStrategy.strategy;
		expect(actual).toBeNull();
	});

	it('should give back a BinarySearchTree', () => {
		treeStrategy.strategy = new BinarySearchTree();

		const actual = treeStrategy.strategy.constructor.name;
		const expected = BinarySearchTree.name;

		expect(actual).toBe(expected);
	});
});