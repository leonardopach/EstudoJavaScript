function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0,
    };
}

console.log(criarProduto("Notebook", 30000));
