const getProperData = (data, property) => data.map(el => el[property]);

function sortData(tree, data, property) {
	const orderedSalary = [];
	const orderedData = [];
	const properDataArr = getProperData(data, property);

	let dataIndex = 0;
	let propertyIndex = 0;

	properDataArr.forEach(el => {
		tree.insert(el);
	});

	tree.inorder(salary => {
		orderedSalary.push(salary);
	});

	while(dataIndex < data.length) {
		if(orderedSalary[dataIndex] === data[propertyIndex].salary) {
			orderedData.push(data[propertyIndex]);
			dataIndex++;
			propertyIndex = 0;

			continue;
		}
		propertyIndex++;
	}

	return orderedData;
}

function sortBySalary(tree, data) {
	return sortData(tree, data, 'salary');
}

module.exports = {
	sortBySalary: sortBySalary
};