const person = {
	firstName: 'Naufal',
	middleName: 'Arkan',
	lastName: 'Zhafran',
};

for (const test in person) {
	console.info(`${test} = ${person[test]}`);
}
