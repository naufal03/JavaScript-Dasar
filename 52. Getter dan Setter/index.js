// Getter
const person = {
	firstName: 'Naufal',
	lastName: 'Zhafran',
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}, // Setter
	set fullName(value) {
		const array = value.split(' ');
		this.firstName = array[0];
		this.lastName = array[1];
	},
};

(person.fullName = 'Naufal Arkan'), console.table(person);
(person.fullName = 'Naufal Zhafran'), console.table(person);
(person.fullName = 'Arkan Zhafran '), console.table(person);
