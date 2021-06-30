const { BinarySearchTree } = require('./BinarySearchTree/BinarySearchTree');
const { RedBlackTree } = require('./RedBlackTree/RedBlackTree');
const TreeStrategy  = require('./TreeStrategy/TreeStrategy');
const { sortBySalary, sortByName } = require('./sort/sort');

const data = [
	{
		name:"James Smith",
		salary:15
	},
	{
		name:"John Johnson",
		salary:10
	},
	{
		name:"Mary Williams",
		salary:7
	},
	{
		name:"Patricia Brown",
		salary:5
	},
	{
		name:"Michael Miller",
		salary:9
	},
	{
		name:"Richard Davis",
		salary:13
	},
	{
		name:"Charles Garcia",
		salary:25
	},
	{
		name:"Linda Rodriguez",
		salary:22
	},
	{
		name:"Susan Wilson",
		salary:17
	},
	{
		name:"Dorothy Martin",
		salary:27
	}
];

const treeStrategy = new TreeStrategy();
treeStrategy.strategy = new BinarySearchTree();

console.time('Performance of sortBySalary with BST');

sortBySalary(
	treeStrategy.strategy,
	data
);

console.timeEnd('Performance of sortBySalary with BST');

treeStrategy.strategy = new RedBlackTree();

console.time('Performance of sortBySalary with RBT');

sortBySalary(
	treeStrategy.strategy,
	data
);

console.timeEnd('Performance of sortBySalary with RBT');

treeStrategy.strategy = new BinarySearchTree();

console.time('Performance of sortByName with BST');

sortByName(
	treeStrategy.strategy,
	data
);

console.timeEnd('Performance of sortByName with BST');

treeStrategy.strategy = new RedBlackTree();

console.time('Performance of sortByName with RBT');

sortByName(
	treeStrategy.strategy,
	data
);

console.timeEnd('Performance of sortByName with RBT');