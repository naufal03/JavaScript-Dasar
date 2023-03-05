//* digunakan untuk mengecek sebuah property pada object
const person = {
	names: 'Naufal Arkan Zhafran',
};

if ('names' in person) {
	console.info(`Hello ${person.names}`);
} else {
	console.info('hello');
}

// ----------------------------------
const student = {
	firstName: 'Naufal',
	middleName: undefined,
	lastName: 'Zhafran',
};

if ('middleName' in student) {
	console.info(`Hello ${student.middleName}`);
} else {
	console.info('hello');
} 

// ---------------------------------------
const nama = [null, 'Arkan', null];
const result = 3 in nama;
console.info(result);
