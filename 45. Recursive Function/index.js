//* Factorial loop
function factiorial(value) {
	let result = 1;
	for (let i = 1; i <= value; i++) {
		result *= i;
	}
	return result;
}

console.info(factiorial(5));

//* Factorial Recursive Function
function factorialRecursive(value) {
	if (value === 1) {
		return 1;
	} else {
		return value * factorialRecursive(value - 1);
	}
}

console.info(factorialRecursive(5));
