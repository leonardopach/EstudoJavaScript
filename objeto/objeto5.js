const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = { ...produto, porcelana: true };
const caneca = Object.assign({}, produto, { material: "porcelana" });

produto.nome = "Cavaco";
console.log(outraCoisa);
console.log(produto);
console.log(caneca);
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

for (let [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor);
}
