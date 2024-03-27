const nomes = ["leonardo", "pedro", "Gabriel", "Lucas"];

nomes.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`);
});

console.log();
const exibirNomes = (nome) => console.log(nome);
nomes.forEach(exibirNomes);
