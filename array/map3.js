Array.prototype.map2 = function(callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};
const carrinho = [
  '{"nome": "borracha", "preco": 4.45}',
  '{"nome": "Caderno", "preco": 13.45}',
  '{"nome": "Kit de lapis", "preco": 41.45}',
  '{"nome": "Caneta", "preco": 7.45}',
];

// retornar um array apenas com os precos
const json = e => JSON.parse(e);
const precos = e => e.preco;
const preco = carrinho.map2(json).map(precos);

console.log(preco);
