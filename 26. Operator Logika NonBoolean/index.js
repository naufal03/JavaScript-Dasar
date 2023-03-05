//* OR (Truthy)
console.info('hello' || '');
console.info('' || []);
console.info('0' || 'NOL');
console.info(0 || 'NOL');
console.info(null || 'NULL');
console.info(undefined || 'UNDEFINED');
console.info(0 || undefined);


const person = {
	firstName: 'Naufal Arkan',
	lastName: 'Zhafran',
};

const name = person.firstName || person.lastName;

console.info(name)

//* AND (Falsy)
console.info('hello' && '');
console.info('' && []);
console.info('0' && 'NOL');
console.info(0 && 'NOL');
console.info(null && 'NULL');
console.info(undefined && 'UNDEFINED');
console.info(0 && undefined);
