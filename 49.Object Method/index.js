const person = {
	name: 'Arkan',
	sayHello: function (name) {
		console.info(`hello ${name}`);
	},
};

person.sayHello('Arukan');

// Menambah Method ke Object
const orang = {
	name: 'Naufal',
};

orang.sayHello = function (name) {
	console.info(`hello ${name}`);
};

orang.sayHello('Zhafran');