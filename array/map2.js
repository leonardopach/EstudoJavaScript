const carrinho = [
    '{"nome": "borracha", "preco": 4.45}',
    '{"nome": "Caderno", "preco": 13.45}',
    '{"nome": "Kit de lapis", "preco": 41.45}',
    '{"nome": "Caneta", "preco": 7.45}',
];

let json = (e) => JSON.parse(e);
let preco = (e) => e.preco;
let resultado = carrinho.map(json).map(preco);

console.log(resultado);
