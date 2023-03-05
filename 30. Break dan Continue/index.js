let counter = 1;

while (true) {
	console.info(`Break Perulangan ke ${counter}`);
	counter++;

	if (counter > 10) {
		break;
	}
}


for (let i = 0; i <= 30; i++) {
	if (i % 2 === 0) {
		continue;
	};
	console.info(`Perulangan ganjil ke ${i}`)
	
}