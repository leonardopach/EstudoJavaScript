const pessoa = { nome: "joao" };
pessoa.nome = "pedro";
console.log(pessoa);

// pessoa = { nome: "ana" };

Object.freeze(pessoa);

pessoa.end = "Rua ABC";
pessoa.nome = "Maria";
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Leonardo" });
console.log(pessoaConstante);
