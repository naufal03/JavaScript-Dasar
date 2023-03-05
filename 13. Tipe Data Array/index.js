const arrayKosong = [];

const arrayNama = ['Naufal', 'Arkan', 'Zhafran'];
console.table(arrayNama);

//* menambahkan data ke array kosong
const names = [];
names.push('Arkanzz');
names.push('zhafrankuy',);
console.table(names);

//* memanggil data berdasarkan index
console.info(names[1]);

//* merubah value index
names[0] = 'naufal';

names.push(1, 2, 3, 4);
console.table(names);

//* menghapus index
delete names[1];
console.table(names);

names.push('Orearkan');
console.table(names);

names[1] = 'arkan lagi';
console.table(names);
