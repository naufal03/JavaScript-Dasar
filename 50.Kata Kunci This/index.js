console.info(this);

function outer() {
	console.info(this);
	function inner() {
		console.info(this);
	}
	inner();
}
outer();

const person = {
	name: 'Arkan',
	sayHello: function (value) {
		// this = person
		console.info(`Hello ${value} my name is ${this.name}`);
	},
};
person.sayHello('Naufal');
