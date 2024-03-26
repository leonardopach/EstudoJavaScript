// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "qualquer",
    preco: 1.99,
    tag: "promocao",
});

console.log("Extensivel:", Object.isExtensible(produto));

console.log(produto);
produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valore constantes
const pessoa2 = Object.freeze({ nome: "Roberto", idade: 26 });
console.log("Frozen:", Object.isFrozen(pessoa2));

pessoa2.nome = "Silva";
delete pessoa2.nome;
console.log(pessoa2);
