const { BinarySearchTree } = require('../BinarySearchTree/BinarySearchTree');
const { RedBlackTree } = require('../RedBlackTree/RedBlackTree');
const { sortBySalary } = require('./sort');

describe('sortBySalary features', () => {
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

	const expected = [
		{
			name:"Patricia Brown",
			salary:5
		},
		{
			name:"Mary Williams",
			salary:7
		},
		{
			name:"Michael Miller",
			salary:9
		},
		{
			name:"John Johnson",
			salary:10
		},
		{
			name:"Richard Davis",
			salary:13
		},
		{
			name:"James Smith",
			salary:15
		},
		{
			name:"Susan Wilson",
			salary:17
		},
		{
			name:"Linda Rodriguez",
			salary:22
		},
		{
			name:"Charles Garcia",
			salary:25
		},
		{
			name:"Dorothy Martin",
			salary:27
		}
	];

	it('give array of objects in order by salary with BST', () => {
		const bst = new BinarySearchTree();
		const actual = sortBySalary(bst, data);

		expect(actual).toEqual(expected);
	});

	it('give array of objects in order by salary with RBT', () => {
		const rbt = new RedBlackTree();
		const actual = sortBySalary(rbt, data);

		expect(actual).toEqual(expected);
	});
});