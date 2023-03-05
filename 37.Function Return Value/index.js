function sayHello(firstName, lastName) {
	const say = `Hello ${firstName} ${lastName}`;
	return say;
}

const result = sayHello('Arkan', 'Zhafran');
console.info(result);

//

function getFinalValue(value) {
	if (value > 90) {
		return 'A';
	} else if (value > 80) {
		return 'B';
	} else if (value > 70) {
		return 'C';
	} else if (value < 60) {
		return 'D';
	} else {
		return 'e';
	}
}

const score = getFinalValue(89);
console.info(score);

//

function isContains(array, searchValue) {
	for (const elements of array) {
		if (elements === searchValue) {
			return true;
		}
	}
	return false;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const search = 1;
const cari = isContains(array, search);
console.info(cari);
