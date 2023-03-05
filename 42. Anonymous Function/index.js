//* Variabel
const say = function (name) {
	console.info(`Hello ${name}`);
};

say('Arkan');

//* Parameter
function giveMeName(callback) {
	callback('Naufal');
}

giveMeName(say);

giveMeName(function (name) {
	console.info(`Hi ${name}`)
});

