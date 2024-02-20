const nums = [1, 2, 3, 4, 5];
let resultado = nums.map(e => e * 20);
let resultadoMenusTen = resultado.map(e => e - 10);
let soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

console.log(resultado);
console.log(resultadoMenusTen);
console.log(nums.map(soma10));
console.log(nums.map(triplo));
console.log(nums.map(paraDinheiro));
