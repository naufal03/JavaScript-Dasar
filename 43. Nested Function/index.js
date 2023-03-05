function outer() {
	function inner() {
		console.info('Nested Function');
	}
	inner();
}
outer()
