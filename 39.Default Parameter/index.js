function register(name, gender = 'UNKNOWN') {
	console.info(`Nama = ${name}, Gender ${gender}`);
	
}

register();
register('Naufal', 'MALE');
register('jos');
register('jos', undefined);
register('jos', null);
