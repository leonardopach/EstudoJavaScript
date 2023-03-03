console.log(typeof Object);

class Produto { }
console.log(typeof Produto);

function imprimirSoma(a, b) {
  return a + b;
}

console.log(imprimirSoma(10, 3));
console.log(imprimirSoma(10));

let x = function(a, b) {
  return a + b;
}
console.log(x(10, 2));

const imprimeSoma = function(a, b) {
  console.log(a + b);

}
imprimeSoma(12, 4);

const soma = (a, b) => {
  return a + b;
}

console.log(soma(2, 5));
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 4));

const imprimir2 = a => console.log(a);
imprimir2("Carro");
