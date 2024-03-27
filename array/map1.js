const numeros = [1, 2, 3, 4, 5, 6];

let dobro = numeros.map((e) => e * 2);
console.log(dobro);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

let resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
