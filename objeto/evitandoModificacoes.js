// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: "Qualquer",
    preco: 1.99,
    tag: "Promocao",
});

console.log("Extensivel:", Object.isExtensible(produto));
produto.nome = "borracha";
produto.descricao = "Borracha escolar";
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado: ", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 26;
console.log(pessoa);
