function createAdder(value) {
	const owner = 'Arkan';
	function add(params) {
		console.info(owner);
		return value + params;
	}
	return add;
}
const addTwo = createAdder(2);
console.info(addTwo(20))
console.info(addTwo(5))
