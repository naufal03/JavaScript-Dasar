const a = parseInt('1'); //* merubah tipe data string ke integer
const b = 1;
const sum = a + b;
console.info(sum);

console.info(parseInt('12salah'));
console.info(parseFloat('12.2salah'));
//* mengkonversi dari string ke number
console.info(Number('1salah')); //* NaN karena tidak semuanya number

console.info(isNaN(100)); //* false -> karena 100 merupakan number
