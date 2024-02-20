let num1 = 132;
let num2 = 2.5;

console.log(num1 + num2);
console.log(typeof num1.toString());
console.log(num1.toString(2));
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));
console.log(Number.isNaN(num1));

num1 = parseFloat(num1.toFixed(2));
console.log(Number.isInteger(num1));
