//* rest parameter (...)
function sum(name, ...data) {
	let total = 0;
	for (const items of data) {
		total += items;
	}
	console.info(`Total ${name} is ${total}`);
}

sum('Jeruk', 1, 2, 3, 4, 5, 6, 7, 8, 9);

//* Spread Syntax
values = [1, 2, 3, 4, 5, 5];
sum('Apel', ...values);
