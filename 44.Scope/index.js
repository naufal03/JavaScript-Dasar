//* Global scope
let counter = 0;

function hitMe() {
	//* local scope
	counter++;
}

hitMe();

console.info(counter);

//

function first() {
	let newVar = 'local scope';

	function second() {
		console.info(newVar);
	}

	second();
}
first();
