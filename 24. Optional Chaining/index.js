const person = {
	address: {
		regoin: 'Indoensia',
		city: {
			satu: 'Jakarta',
			dua: 'Bogor',
		},
	},
};

//* mengecek apakah ada property tersebut dalam object menggunakan (?)
let check = person?.address?.city?.dua;
console.info(check);

check = person?.address?.city?.tiga; //* karena tidak ada property tiga
console.info(check);

check = person?.address?.regoin;
console.info(check);
