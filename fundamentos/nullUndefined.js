let valor; //nao inicializa
console.log(valor);

valor = null; // Ausencia de valor
console.log(valor);
// console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);
