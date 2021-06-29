function sortBySalary(tree, data) {
	const orderedSalary = [];
	const orderedData = [];
	const salaryArr = data.map(el => el.salary);

	let dataIndex = 0;
	let salaryIndex = 0;

	salaryArr.forEach(salary => {
		tree.insert(salary);
	});

	tree.inorder(salary => {
		orderedSalary.push(salary);
	});

	while(dataIndex < data.length) {
		if(orderedSalary[dataIndex] === data[salaryIndex].salary) {
			orderedData.push(data[salaryIndex]);
			dataIndex++;
			salaryIndex = 0;

			continue;
		}
		salaryIndex++;
	}

	return orderedData;
}

module.exports = {
	sortBySalary: sortBySalary
};