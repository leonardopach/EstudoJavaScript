// operador rest(juntar)/spread{espalhar}

// spread com onj
const funcionario = { nome: "Maria", salario: 12347.12 }
const clone = { ativo: true, ...funcionario };

clone.nome = "Bianca";
console.log(clone);
console.log(funcionario);

// spread array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);
