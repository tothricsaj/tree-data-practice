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

	it('should act like BST inorder', () => {
		treeStrategy.strategy = new BinarySearchTree();

      //       8
      //     /   \
      //    3     10
      //   / \   /  \
      //  1  4  9   12 

      let dataArr = [];
      const expectedArr = [1,3,4,8,9,10,12];

      const cb = (dataArr) => {
        return (data) => {
          dataArr.push(data);
        }
      }

      treeStrategy.strategy.insert(8);
      treeStrategy.strategy.insert(10);
      treeStrategy.strategy.insert(3);
      treeStrategy.strategy.insert(4);
      treeStrategy.strategy.insert(1);
      treeStrategy.strategy.insert(12);
      treeStrategy.strategy.insert(9);

      treeStrategy.strategy.inorder(cb(dataArr));

			expect(dataArr).toEqual(expectedArr);
	});
});