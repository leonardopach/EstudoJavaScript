// operador ... rest(juntar)/Spread(espalhar)

// spread com obj
const funcionario = { nome: "Maria", salario: 1234 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// spread com array
const grupoA = ["leonardo", "pedro", "gloaria"];
const grupoFinal = ["Maria", ...grupoA, "Rafael"];
console.log(grupoFinal);
