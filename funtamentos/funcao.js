console.log(typeof Object);

class Produto {}
console.log(typeof Produto);

// Funcao sem retorno
function imprimirSomar(a, b) {
  console.log(a + b);
}

imprimirSomar(10, 2);
imprimirSomar(12, 2);

// Funcao com retorno
function soma(a = 0, b = 0) {
  return a + b;
}

console.log(soma(3, 2));
console.log(soma(3));
console.log(soma());
