// Array
{
	const names = ['Naufal', 'Arkan', 'Zhafran', 'Rkan', 'Khan'];
	const [firstName, middleName, lastName, ...others] = names;

	console.info(firstName);
	console.info(middleName);
	console.info(lastName);
	console.info(others);
}

//Object
{
	const person = {
		firstName: 'Naufal',
		middleName: 'Arkan',
		address: {
			street: 'Street ball',
			city: 'Bogor',
			country: 'Indonesia',
		},
		hobby: 'Game',
	};
	const {
		firstName,
		middleName,
		address: { country, city, street },
		...others
	} = person;
	console.info(firstName);
	console.info(middleName);
	console.info(street);
	console.info(city);
	console.info(country);
	console.info(others);
}

// Function Parameter (1)
{
	function displayPerson({ firstName, middleName, lastName }) {
		console.info(firstName);
		console.info(middleName);
		console.info(lastName);
	}

	const person = {
		firstName: 'Naufal',
		middleName: 'zoes',
		lastName: 'broh',
	};
	displayPerson(person);
}

// Function Parameter (2)
{
	function sum([first, second]) {
		return first + second;
	}
	console.info(sum([2, 2]));
	console.info(sum([2, 6]));
}

// Default Value
{
	const names = [];
	const [fullName = 'Naufal Arkan Zhafran'] = names;

	console.info(fullName);
}
