let valor;
console.log(valor);

valor = null;
console.log(valor);

const Produto = {};
console.log(Produto.preco);
console.log(Produto);

Produto.preco = 3.5;
console.log(Produto);

Produto.preco = undefined;
console.log(!!Produto.preco);
console.log(Produto);

Produto.preco = null;
console.log(!!Produto.preco);
console.log(Produto);
