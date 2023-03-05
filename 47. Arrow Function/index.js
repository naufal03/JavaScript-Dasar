const sayHello = (name) => {
	const say = `Hello ${name}`;
	console.info(say);
};

sayHello('Arkan');

//* Tanpa Blok

const sayhello = (name) => console.info(`Hello ${name}`);
sayHello('Nafal');

//* return value

const hello = (first, second) => first + second;

console.info(hello(10, 4));

//* tanpa kurung parameter (hanya untuk 1 parameter)
const helo = (name) => console.info(`Hello ${name}`);
helo('Naufal');

//* parameter

function giveMeName(callback) {
	callback('Zhafran');
}

giveMeName((name) => console.info(`Hello ${name}`));


