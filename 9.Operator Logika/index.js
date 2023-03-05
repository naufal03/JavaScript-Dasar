const nilaiUjian = 90;
const nilaiAbsen = 70;

const lulusUjian = nilaiUjian > 75;
const lulusAbsen = nilaiAbsen > 70;

const lulus = lulusUjian || lulusAbsen;

console.info(lulus)

let benar = !true;
console.info(benar)
