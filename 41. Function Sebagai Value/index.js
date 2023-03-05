function sayHello(name) {
	console.info(`Hello ${name}`);
}

sayHello('Naufal');

//* function di variabel 
const say = sayHello;

say('Arkan');

//* function di parameter
function giveMeNae(callback) {
	callback('Zhafran'); //* sayHello('Naufal);
}

giveMeNae(sayHello);
giveMeNae(say);
