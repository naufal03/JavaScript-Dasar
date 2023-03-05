//* operator aritmatika
console.info("Operator Aritmatika")
let result = 1 + 2;
console.info('1 + 2 = ' + result);
let originalResult = result;

result = result - 1;
console.info(originalResult + ' - 1 = ' + result);
originalResult = result;

result = result * 2;
console.info(originalResult + ' * 2 = ' + result);

//* operator augmented assignments
console.info('Operator Augmented Assignments');

let result2 = 1 + 2;
console.info('1 + 2 = ' + result2);
let originalResult2 = result2;

result2 -= 1;
console.info(originalResult2 + ' - 1 = ' + result2);
originalResult2 = result2;

result2 *= 2;
console.info(originalResult2 + ' * 2 = ' + result2);

//* operator unary
console.info("Operator Unary");
let result3 = + 1;
console.info(result3);

result3--;
console.info(result3);

result3++;
console.info(result3);

result3 = -result3;
console.info(result3);

