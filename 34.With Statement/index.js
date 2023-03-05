const person = {
	firstName: 'Naufal',
	lastName: 'Zhafran',
};

with (person) {
	console.info(firstName);
	console.info(lastName);
}
