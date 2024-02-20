function saudacao(name) {
  return `Bom dia ${name}`;
}

const variavel = saudacao("leonardo");

console.log(variavel);
console.log(saudacao("Renata"));

function soma(x = 0, y = 0) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));
const raiz = (n) => n ** 0.5;

console.log(raiz(16));
