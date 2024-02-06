console.log(19.9 * 0.6);

let preco = 19.9;
let desconto = 0.4;
let precomComDesconto = preco * (1 - desconto);
console.log(precomComDesconto);

let nome = "caderno";
let categoria = "Papelaria";
console.log(
  "produto" +
    nome +
    ", categoria " +
    categoria +
    ", preco: " +
    preco +
    ", desconto: " +
    desconto,
);

console.log(
  `produto ${nome}, categoria ${categoria}, preco ${preco}, desconto: ${desconto}`,
);
