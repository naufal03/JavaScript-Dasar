//* kasus sederhana

function* crateNames() {
	yield 'Naufal';
	yield 'Arkan';
	yield 'Zhafran';
}

const names = crateNames();
for (const name of names) {
	console.info(name);
}

//* kompleks

function* ganjil(value) {
	for (let i = 1; i <= value; i++) {
		if (i % 2 === 1) {
			yield i;
		}
	}
}

const numbers = ganjil(20);
for (const number of numbers) {
	console.info(number)
}