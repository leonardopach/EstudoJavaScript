const pessoa = {
  nome: "Leonardo",
  idade: 24,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
};


const { nome, idade, endereco } = pessoa;

const { endereco: { logradouro, numero, cep } } = pessoa;

console.log(nome);
console.log(idade);
console.log(endereco.numero);
console.log(logradouro);

const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];

console.log(nota);

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));

function randin([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
};

console.log(randin([50, 100]));
console.log(rand([992]));




