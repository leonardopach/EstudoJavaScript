const pessoa = { nome: "Joao" };
pessoa.nome = "Lucas";
console.log(pessoa);

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
console.log(pessoaConstante);
