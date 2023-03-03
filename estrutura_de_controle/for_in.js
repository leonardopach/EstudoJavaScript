const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (i in notas) {
  console.log(`as notas são = ${notas[i]}`)
}

const pessoa = {
  nome: 'leonardo',
  sobrenome: 'pacheco',
  idade: 24,
  peso: 64,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}

