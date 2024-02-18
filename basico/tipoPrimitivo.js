const nome = "luiz"; // string
const numeros = 1234; // number
const numeros1 = 12.5; // number
let nomePessoa; // undefined
let sobrenome = null;
const aprovado = true;
const a = [1, 2];
const b = a;

console.log(nome, numeros, numeros1, nomePessoa, sobrenome, aprovado);
console.log(typeof nome, aprovado, sobrenome);
console.log(a);

b.push(3);
console.log(a);
